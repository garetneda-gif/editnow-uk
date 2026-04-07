/**
 * EnergyStore — 能量币共享数据模块
 *
 * 所有页面通过 <script src="(../)?js/energy-store.js"></script> 引入
 * 提供原子操作 + 事件派发 + schema 迁移 + 安全写入
 */
(function () {
  'use strict';

  var POINTS_KEY = 'xiangtun_points';
  var REDEMPTIONS_KEY = 'xiangtun_redemptions';
  var BOOKINGS_KEY = 'xiangtun_bookings';
  var HISTORY_LIMIT = 200;

  // ---- Schema 迁移 ----
  function migrate(data) {
    if (!data || !data.history) return data;
    var changed = false;
    for (var i = 0; i < data.history.length; i++) {
      if (!data.history[i].type) {
        data.history[i].type = data.history[i].amount < 0 ? 'spend' : 'earn';
        changed = true;
      }
    }
    if (changed) safeWrite(POINTS_KEY, data);
    return data;
  }

  // ---- 安全读写 ----
  function safeRead(key) {
    try {
      var raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.error('[EnergyStore] 读取 ' + key + ' 失败:', e);
    }
    return null;
  }

  function safeWrite(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('[EnergyStore] 写入 ' + key + ' 失败:', e);
      return false;
    }
  }

  function safeReadArray(key) {
    return safeRead(key) || [];
  }

  // ---- 事件派发 ----
  function dispatchChange(detail) {
    try {
      window.dispatchEvent(new CustomEvent('energy-changed', { detail: detail }));
    } catch (e) {
      // IE fallback (不影响功能)
    }
  }

  // ---- Core API ----
  window.EnergyStore = {
    /**
     * 获取完整能量币数据（原子读取 + 迁移）
     * @returns {{ coins: number, history: Array }}
     */
    getData: function () {
      var data = safeRead(POINTS_KEY) || { points: 0, history: [] };
      if (!Array.isArray(data.history)) data.history = [];
      if (typeof data.points !== 'number') data.points = 0;
      data = migrate(data);
      return { coins: data.points, history: data.history };
    },

    /**
     * 获取当前余额
     * @returns {number}
     */
    getBalance: function () {
      var data = safeRead(POINTS_KEY);
      return (data && typeof data.points === 'number') ? data.points : 0;
    },

    /**
     * 赚取能量币（原子 read-add-write）
     * @param {number} amount - 正整数
     * @param {string} reason - 原因描述
     * @returns {{ coins: number, levelUp: boolean, newLevel: string }}
     */
    earn: function (amount, reason) {
      // 原子操作：每次先重新读取
      var data = safeRead(POINTS_KEY) || { points: 0, history: [] };
      if (!Array.isArray(data.history)) data.history = [];
      if (typeof data.points !== 'number') data.points = 0;
      var oldLevel = this.getLevelInfo(data.points).name;

      data.points += Math.abs(amount);
      data.history.push({
        amount: Math.abs(amount),
        reason: reason,
        time: new Date().toISOString(),
        type: 'earn'
      });

      // 限制 history 长度
      if (data.history.length > HISTORY_LIMIT) {
        data.history = data.history.slice(-HISTORY_LIMIT);
      }

      safeWrite(POINTS_KEY, data);

      var newLevel = this.getLevelInfo(data.points).name;
      var levelUp = newLevel !== oldLevel;

      dispatchChange({
        action: 'earn',
        amount: Math.abs(amount),
        reason: reason,
        balance: data.points,
        levelUp: levelUp,
        newLevel: newLevel
      });

      return { coins: data.points, levelUp: levelUp, newLevel: newLevel };
    },

    /**
     * 消费能量币（原子 read-check-subtract-write）
     * @param {number} amount - 正整数
     * @param {string} reason - 原因描述
     * @returns {boolean} 成功返回 true，余额不足返回 false
     */
    spend: function (amount, reason) {
      var cost = Math.abs(amount);
      // 原子操作：每次先重新读取
      var data = safeRead(POINTS_KEY) || { points: 0, history: [] };
      if (!Array.isArray(data.history)) data.history = [];
      if (typeof data.points !== 'number') data.points = 0;

      if (data.points < cost) return false;

      data.points -= cost;
      data.history.push({
        amount: -cost,
        reason: reason,
        time: new Date().toISOString(),
        type: 'spend'
      });

      if (data.history.length > HISTORY_LIMIT) {
        data.history = data.history.slice(-HISTORY_LIMIT);
      }

      safeWrite(POINTS_KEY, data);

      dispatchChange({
        action: 'spend',
        amount: cost,
        reason: reason,
        balance: data.points
      });

      return true;
    },

    /**
     * 等级信息
     * @param {number} coins
     * @returns {{ name: string, next: number|null, progress: number, icon: string }}
     */
    getLevelInfo: function (coins) {
      if (coins >= 300) return { name: '荣誉守护者', next: null, progress: 100, icon: 'military_tech' };
      if (coins >= 150) return { name: '守护使者', next: 300, progress: ((coins - 150) / 150) * 100, icon: 'shield' };
      if (coins >= 50) return { name: '守护学徒', next: 150, progress: ((coins - 50) / 100) * 100, icon: 'school' };
      return { name: '新访客', next: 50, progress: (coins / 50) * 100, icon: 'person' };
    },

    // ---- 兑换子存储 ----
    getRedemptions: function () {
      return safeReadArray(REDEMPTIONS_KEY);
    },

    addRedemption: function (item) {
      var list = safeReadArray(REDEMPTIONS_KEY);
      list.push(item);
      safeWrite(REDEMPTIONS_KEY, list);
      dispatchChange({ action: 'redemption', item: item });
    },

    // ---- 预约子存储 ----
    getBookings: function () {
      return safeReadArray(BOOKINGS_KEY);
    },

    addBooking: function (booking) {
      var list = safeReadArray(BOOKINGS_KEY);
      list.push(booking);
      safeWrite(BOOKINGS_KEY, list);
      dispatchChange({ action: 'booking', item: booking });
    },

    // ---- 统计工具 ----
    getStats: function () {
      var data = this.getData();
      var totalEarned = 0;
      var totalSpent = 0;
      var earnSources = {};

      for (var i = 0; i < data.history.length; i++) {
        var entry = data.history[i];
        if (entry.type === 'spend' || entry.amount < 0) {
          totalSpent += Math.abs(entry.amount);
        } else {
          totalEarned += entry.amount;
          // 归类来源
          var src = '其他';
          var reason = entry.reason || '';
          if (reason.includes('签署')) src = '签署倡议';
          else if (reason.includes('知识问答')) src = '知识问答';
          else if (reason.includes('打卡')) src = '任务打卡';
          else if (reason.includes('分享')) src = '分享传播';
          else if (reason.includes('预约')) src = '预约游览';
          earnSources[src] = (earnSources[src] || 0) + entry.amount;
        }
      }

      return {
        balance: data.coins,
        totalEarned: totalEarned,
        totalSpent: totalSpent,
        earnSources: earnSources,
        redemptions: this.getRedemptions().length,
        bookings: this.getBookings().length,
        pledgeCount: parseInt(localStorage.getItem('xiangtun_pledge_count') || '0', 10)
      };
    }
  };
})();
