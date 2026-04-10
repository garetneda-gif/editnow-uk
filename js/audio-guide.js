/**
 * AudioGuide — 双轨语音导览模块
 *
 * 所有页面通过 <script src="js/audio-guide.js"></script> 引入
 * 依赖：audio-scripts.js（讲解词）、energy-store.js（积分）
 *
 * 双轨逻辑：优先 MP3 → 降级 TTS（SpeechSynthesis）
 */
(function () {
  'use strict';

  var PROGRESS_KEY = 'xiangtun_audio_progress';
  var PROGRESS_LIMIT = 500;
  var INTRO_KEY = 'xiangtun_audio_intro_seen';
  var CHUNK_SIZE = 80;          // TTS 分段字符数（中文）
  var TTS_CHARS_PER_SEC = 4;    // 中文 TTS 预估语速
  var DEBOUNCE_MS = 200;
  var KEEPALIVE_MS = 10000;     // TTS 保活间隔

  // ---- 语音缓存 ----
  var _cachedVoice = null;
  var _voicesReady = false;

  function initVoices() {
    if (!window.speechSynthesis) return;
    var pickVoice = function () {
      var voices = speechSynthesis.getVoices();
      for (var i = 0; i < voices.length; i++) {
        if (voices[i].lang.indexOf('zh-CN') === 0) { _cachedVoice = voices[i]; return; }
      }
      for (var j = 0; j < voices.length; j++) {
        if (voices[j].lang.indexOf('zh') === 0) { _cachedVoice = voices[j]; return; }
      }
    };
    pickVoice();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = function () { pickVoice(); _voicesReady = true; };
    }
    _voicesReady = true;
  }

  // ---- 安全 localStorage ----
  function safeRead(key) {
    try { var r = localStorage.getItem(key); return r ? JSON.parse(r) : null; }
    catch (e) { return null; }
  }
  function safeWrite(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) { /* 静默降级 */ }
  }

  // ---- 进度管理 ----
  function getProgressData() {
    return safeRead(PROGRESS_KEY) || { completed: [] };
  }
  function markDone(scriptId) {
    var data = getProgressData();
    if (data.completed.indexOf(scriptId) === -1) {
      data.completed.push(scriptId);
      if (data.completed.length > PROGRESS_LIMIT) {
        data.completed = data.completed.slice(-PROGRESS_LIMIT);
      }
      safeWrite(PROGRESS_KEY, data);
    }
  }
  function isDone(scriptId) {
    return getProgressData().completed.indexOf(scriptId) !== -1;
  }

  // ---- 播放条 DOM ----
  function ensurePlayerBar() {
    if (document.getElementById('audio-player-bar')) return;
    // 注入专用样式（移动端安全区 + 细节）
    if (!document.getElementById('audio-player-bar-style')) {
      var st = document.createElement('style');
      st.id = 'audio-player-bar-style';
      st.textContent = '#audio-player-bar{padding-bottom:calc(10px + env(safe-area-inset-bottom));}' +
        '#audio-player-bar .ap-row{display:flex;align-items:center;gap:12px;width:100%;}' +
        '#audio-player-bar .ap-track{flex:1 1 auto;height:3px;background:rgba(140,113,110,0.25);border-radius:2px;overflow:hidden;min-width:0;}' +
        '#audio-player-bar .ap-track > div{height:100%;background:#851217;transition:width .1s linear;}' +
        '#audio-player-bar .ap-title{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Newsreader,serif;font-weight:700;font-size:14px;color:#1c2b2b;}' +
        '#audio-player-bar .ap-time{flex:0 0 auto;font-size:11px;color:#58413f;font-variant-numeric:tabular-nums;white-space:nowrap;}' +
        '#audio-player-bar button{flex:0 0 auto;background:none;border:none;padding:0;cursor:pointer;line-height:0;}' +
        '@media (min-width:640px){#audio-player-bar .ap-wrap{display:flex;align-items:center;gap:16px;}#audio-player-bar .ap-row.ap-progress-row{flex:1 1 auto;}}';
      document.head.appendChild(st);
    }
    var bar = document.createElement('div');
    bar.id = 'audio-player-bar';
    bar.className = 'fixed bottom-0 inset-x-0 z-50 bg-surface-container-high/92 backdrop-blur-xl shadow-[0_-4px_24px_rgba(27,28,28,0.08)] transform translate-y-full transition-transform duration-300 px-4 pt-3';
    bar.innerHTML =
      '<div class="ap-wrap">' +
        '<div class="ap-row">' +
          '<button id="ap-toggle" onclick="AudioGuide.togglePlay()" aria-label="播放/暂停"><span class="material-symbols-outlined text-primary" id="ap-icon" style="font-size:30px;">pause_circle</span></button>' +
          '<span id="ap-title" class="ap-title"></span>' +
          '<button onclick="AudioGuide.stop()" aria-label="关闭"><span class="material-symbols-outlined text-on-surface-variant" style="font-size:22px;">close</span></button>' +
        '</div>' +
        '<div class="ap-row ap-progress-row" style="margin-top:8px;">' +
          '<div class="ap-track"><div id="ap-progress" style="width:0%"></div></div>' +
          '<span id="ap-time" class="ap-time">0:00</span>' +
        '</div>' +
      '</div>';
    document.body.appendChild(bar);
  }

  function showBar(title) {
    ensurePlayerBar();
    document.getElementById('ap-title').textContent = title;
    document.getElementById('ap-icon').textContent = 'pause_circle';
    document.getElementById('ap-progress').style.width = '0%';
    document.getElementById('ap-time').textContent = '0:00';
    requestAnimationFrame(function () {
      document.getElementById('audio-player-bar').classList.remove('translate-y-full');
    });
  }

  function hideBar() {
    var bar = document.getElementById('audio-player-bar');
    if (bar) bar.classList.add('translate-y-full');
  }

  function updateBar(progress, elapsed) {
    var pEl = document.getElementById('ap-progress');
    var tEl = document.getElementById('ap-time');
    if (pEl) pEl.style.width = Math.min(progress * 100, 100) + '%';
    if (tEl) {
      var m = Math.floor(elapsed / 60);
      var s = Math.floor(elapsed % 60);
      tEl.textContent = m + ':' + (s < 10 ? '0' : '') + s;
    }
  }

  function setBarIcon(icon) {
    var el = document.getElementById('ap-icon');
    if (el) el.textContent = icon;
  }

  // ---- 能量 Toast ----
  function showEnergyToast(amount) {
    var toast = document.createElement('div');
    toast.className = 'fixed bottom-20 right-4 z-50 bg-secondary text-on-secondary px-4 py-2 rounded-lg shadow-lg text-sm font-bold transition-opacity duration-300';
    toast.textContent = '+' + amount + ' 能量';
    document.body.appendChild(toast);
    setTimeout(function () { toast.style.opacity = '0'; }, 1500);
    setTimeout(function () { toast.remove(); }, 2000);
  }

  // ---- 核心状态 ----
  var _playing = false;
  var _paused = false;
  var _currentId = null;
  var _playLock = false;
  var _audio = null;           // 复用的 HTMLAudioElement
  var _ttsTimer = null;
  var _keepaliveTimer = null;
  var _elapsed = 0;
  var _duration = 0;
  var _progressTimer = null;
  var _ttsChunks = [];
  var _ttsChunkIdx = 0;
  var _autoplayQueue = [];

  // ---- MP3 播放 ----
  function playMp3(src, scriptId, title) {
    if (!_audio) _audio = new Audio();
    _audio.src = src;
    _audio.onloadedmetadata = function () {
      _duration = _audio.duration;
    };
    _audio.ontimeupdate = function () {
      if (_duration > 0) updateBar(_audio.currentTime / _duration, _audio.currentTime);
    };
    _audio.onended = function () {
      onPlaybackEnd(scriptId);
    };
    _audio.onerror = function () {
      // MP3 失败 → 降级 TTS
      var script = window.AUDIO_SCRIPTS && window.AUDIO_SCRIPTS[scriptId];
      if (script && window.speechSynthesis) {
        playTts(script.text, scriptId, title);
      } else {
        onPlaybackError();
      }
    };
    setBarIcon('pause_circle');
    _audio.play().catch(function () { onPlaybackError(); });
  }

  // ---- TTS 播放（分段 + 保活） ----
  function splitChunks(text) {
    var chunks = [];
    var sentences = text.replace(/([。！？；\n])/g, '$1\x00').split('\x00');
    var buf = '';
    for (var i = 0; i < sentences.length; i++) {
      if (buf.length + sentences[i].length > CHUNK_SIZE && buf.length > 0) {
        chunks.push(buf);
        buf = '';
      }
      buf += sentences[i];
    }
    if (buf.length > 0) chunks.push(buf);
    return chunks;
  }

  function playTts(text, scriptId, title) {
    if (!window.speechSynthesis) { onPlaybackError(); return; }
    speechSynthesis.cancel();
    _ttsChunks = splitChunks(text);
    _ttsChunkIdx = 0;
    _duration = text.length / TTS_CHARS_PER_SEC;
    _elapsed = 0;
    _progressTimer = setInterval(function () {
      if (!_paused) {
        _elapsed += 0.1;
        updateBar(_elapsed / _duration, _elapsed);
      }
    }, 100);
    // 保活定时器
    _keepaliveTimer = setInterval(function () {
      if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause();
        speechSynthesis.resume();
      }
    }, KEEPALIVE_MS);
    speakChunk(scriptId);
  }

  function speakChunk(scriptId) {
    if (_ttsChunkIdx >= _ttsChunks.length) {
      clearTtsTimers();
      onPlaybackEnd(scriptId);
      return;
    }
    var utt = new SpeechSynthesisUtterance(_ttsChunks[_ttsChunkIdx]);
    utt.lang = 'zh-CN';
    utt.rate = 0.95;
    if (_cachedVoice) utt.voice = _cachedVoice;
    utt.onend = function () {
      _ttsChunkIdx++;
      speakChunk(scriptId);
    };
    utt.onerror = function () {
      clearTtsTimers();
      onPlaybackError();
    };
    setBarIcon('pause_circle');
    speechSynthesis.speak(utt);
  }

  function clearTtsTimers() {
    if (_progressTimer) { clearInterval(_progressTimer); _progressTimer = null; }
    if (_keepaliveTimer) { clearInterval(_keepaliveTimer); _keepaliveTimer = null; }
  }

  // ---- 完成/错误回调 ----
  function onPlaybackEnd(scriptId) {
    _playing = false;
    _paused = false;
    clearTtsTimers();
    hideBar();
    // 标记完成
    if (!isDone(scriptId)) {
      markDone(scriptId);
      // 能量币奖励
      var amount = 3;
      if (scriptId.indexOf('mural-') === 0 || scriptId.indexOf('model-') === 0) amount = 2;
      if (window.EnergyStore) {
        window.EnergyStore.earn(amount, '语音导览：' + (window.AUDIO_SCRIPTS[scriptId] || {}).title);
      }
      showEnergyToast(amount);
      // 更新页面上的完成标记
      updateCompletionMarks();
    }
    // 检查路线全听完奖励
    checkRouteBonus(scriptId);
    // 自动播放队列
    if (_autoplayQueue.length > 0) {
      var next = _autoplayQueue.shift();
      setTimeout(function () { window.AudioGuide.play(next); }, 500);
    }
    dispatch('guide-ended', { scriptId: scriptId });
  }

  function onPlaybackError() {
    _playing = false;
    _paused = false;
    clearTtsTimers();
    setBarIcon('volume_off');
    var titleEl = document.getElementById('ap-title');
    if (titleEl) titleEl.textContent = '语音暂不可用';
    setTimeout(hideBar, 2000);
  }

  // ---- 路线奖励检查 ----
  function checkRouteBonus(scriptId) {
    var routes = { red: 4, green: 4, gray: 4, exhibition: 6 };
    var prefix = scriptId.split('-')[0];
    if (!routes[prefix]) return;
    var total = routes[prefix];
    for (var i = 0; i < total; i++) {
      if (!isDone(prefix + '-' + i)) return;
    }
    // 全部完成
    var bonusKey = prefix + '-route-bonus';
    if (!isDone(bonusKey)) {
      markDone(bonusKey);
      var bonusName = prefix === 'exhibition' ? '完成乡情村史陈列室全程导览' : '完成' + prefix + '路线全程导览';
      if (window.EnergyStore) {
        window.EnergyStore.earn(15, bonusName);
      }
      showEnergyToast(15);
    }
  }

  // ---- 完成标记更新 ----
  function updateCompletionMarks() {
    var btns = document.querySelectorAll('[data-audio-id]');
    for (var i = 0; i < btns.length; i++) {
      var id = btns[i].getAttribute('data-audio-id');
      if (isDone(id)) {
        var mark = btns[i].querySelector('.audio-done-mark');
        if (!mark) {
          mark = document.createElement('span');
          mark.className = 'audio-done-mark material-symbols-outlined text-secondary text-sm ml-1';
          mark.textContent = 'check_circle';
          btns[i].appendChild(mark);
        }
      }
    }
  }

  // ---- 事件派发 ----
  function dispatch(name, detail) {
    window.dispatchEvent(new CustomEvent(name, { detail: detail }));
  }

  // ---- 公开 API ----
  window.AudioGuide = {

    play: function (scriptId) {
      if (_playLock) return;
      var script = window.AUDIO_SCRIPTS && window.AUDIO_SCRIPTS[scriptId];
      if (!script) return;

      _playLock = true;
      // 停止当前
      this.stop();

      setTimeout(function () {
        _playing = true;
        _paused = false;
        _currentId = scriptId;
        _elapsed = 0;
        _autoplayQueue = [];

        showBar(script.title);
        setBarIcon('hourglass_top');
        dispatch('guide-started', { scriptId: scriptId });

        if (script.audio) {
          playMp3(script.audio, scriptId, script.title);
        } else if (window.speechSynthesis) {
          if (!_voicesReady) {
            // 等待语音加载（最多 3 秒）
            var waited = 0;
            var waitTimer = setInterval(function () {
              waited += 100;
              if (_voicesReady || waited >= 3000) {
                clearInterval(waitTimer);
                playTts(script.text, scriptId, script.title);
              }
            }, 100);
          } else {
            playTts(script.text, scriptId, script.title);
          }
        } else {
          onPlaybackError();
        }
        _playLock = false;
      }, 50);
    },

    stop: function () {
      _autoplayQueue = [];
      if (_audio) { _audio.pause(); _audio.currentTime = 0; }
      if (window.speechSynthesis) speechSynthesis.cancel();
      clearTtsTimers();
      _playing = false;
      _paused = false;
      _currentId = null;
      hideBar();
    },

    togglePlay: function () {
      if (!_playing) return;
      if (_paused) {
        this.resume();
      } else {
        this.pause();
      }
    },

    pause: function () {
      if (!_playing || _paused) return;
      _paused = true;
      if (_audio && !_audio.paused) _audio.pause();
      if (window.speechSynthesis && speechSynthesis.speaking) speechSynthesis.pause();
      setBarIcon('play_circle');
    },

    resume: function () {
      if (!_playing || !_paused) return;
      _paused = false;
      if (_audio && _audio.paused && _audio.src) _audio.play();
      if (window.speechSynthesis && speechSynthesis.paused) speechSynthesis.resume();
      setBarIcon('pause_circle');
    },

    playStation: function (routeId, index) {
      this.play(routeId + '-' + index);
    },

    playMural: function (index) {
      this.play('mural-' + index);
    },

    playModel: function (modelId) {
      this.play('model-' + modelId);
    },

    playFullRoute: function (routeId) {
      var routes = { red: 4, green: 4, gray: 4, exhibition: 6 };
      var total = routes[routeId];
      if (!total) return;
      _autoplayQueue = [];
      for (var i = 1; i < total; i++) {
        _autoplayQueue.push(routeId + '-' + i);
      }
      this.play(routeId + '-0');
    },

    isCompleted: function (scriptId) {
      return isDone(scriptId);
    },

    isPlaying: function () {
      return _playing;
    },

    currentId: function () {
      return _currentId;
    },

    hasTtsSupport: function () {
      return !!window.speechSynthesis;
    },

    initPage: function () {
      initVoices();
      updateCompletionMarks();
    }
  };

  // 页面离开时停止播放
  window.addEventListener('beforeunload', function () {
    window.AudioGuide.stop();
  });

  // 初始化语音
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initVoices(); updateCompletionMarks(); });
  } else {
    initVoices();
    updateCompletionMarks();
  }
})();
