/**
 * Ambient Dust Motes — Heritage Modernist 风格环境粒子
 * 轻柔的尘埃光斑，如古籍阳光中的浮尘
 * 自动创建 canvas，全页面通用
 */
(function () {
  const canvas = document.createElement('canvas');
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const isMobile = window.innerWidth < 768;
  const COUNT = isMobile ? 14 : 28;
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  /* Heritage Modernist 四色调色板 */
  const palette = [
    [89, 61, 0],     /* #593d00 板栗金 */
    [133, 18, 23],   /* #851217 传承红 */
    [59, 105, 52],   /* #3b6934 远山绿 */
    [160, 130, 80],  /* 暖尘金 — 补充色 */
  ];

  function Mote(initial) {
    const c = palette[Math.floor(Math.random() * palette.length)];
    this.r = c[0];
    this.g = c[1];
    this.b = c[2];
    this.x = Math.random() * w;
    this.y = initial ? Math.random() * h : h + Math.random() * 40;
    this.size = 0.6 + Math.random() * 2;
    this.glow = this.size > 1.8;
    this.glowR = this.size * 8;
    /* 基础透明度 */
    this.baseA = 0.06 + Math.random() * 0.1;
    this.a = this.baseA;
    /* 运动参数 */
    this.vy = -(0.06 + Math.random() * 0.14);
    this.wAmp = 0.15 + Math.random() * 0.4;
    this.wFreq = 0.004 + Math.random() * 0.008;
    this.wPh = Math.random() * 6.28;
    /* 呼吸 */
    this.bFreq = 0.002 + Math.random() * 0.004;
    this.bPh = Math.random() * 6.28;
    this.t = initial ? Math.floor(Math.random() * 600) : 0;
  }

  Mote.prototype.update = function () {
    this.t++;
    this.x += Math.sin(this.t * this.wFreq + this.wPh) * this.wAmp;
    this.y += this.vy;
    this.a =
      this.baseA * (0.45 + 0.55 * Math.sin(this.t * this.bFreq + this.bPh));
    if (this.y < -30) {
      Mote.call(this, false);
    }
  };

  Mote.prototype.draw = function (c) {
    if (this.glow) {
      var g = c.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        this.glowR
      );
      g.addColorStop(
        0,
        'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a * 0.35 + ')'
      );
      g.addColorStop(
        1,
        'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0)'
      );
      c.fillStyle = g;
      c.fillRect(
        this.x - this.glowR,
        this.y - this.glowR,
        this.glowR * 2,
        this.glowR * 2
      );
    }
    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, 6.28);
    c.fillStyle =
      'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
    c.fill();
  };

  var motes = [];
  for (var i = 0; i < COUNT; i++) motes.push(new Mote(true));

  var running = false;
  var rafId = null;

  function animate() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < motes.length; i++) {
      motes[i].update();
      motes[i].draw(ctx);
    }
    rafId = requestAnimationFrame(animate);
  }

  function start() {
    if (!running) {
      running = true;
      animate();
    }
  }
  function stop() {
    running = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  if (document.visibilityState === 'visible') start();
  document.addEventListener('visibilitychange', function () {
    document.visibilityState === 'visible' ? start() : stop();
  });
})();
