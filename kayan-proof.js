/*!
 * Kayan Social Proof Widget v1.0.0
 * Self-hosted. No third-party branding.
 * Drop-in replacement for ProveSource.
 * Supports real buyers (verified) + custom name pool with mix ratio.
 */
(function (window, document) {
  'use strict';

  if (window.kayanProof && window.console && console.error) {
    console.error('KayanProof is included twice on this page.');
    return;
  }

  // ─── Default config ───────────────────────────────────────────────
  var defaults = {
    position: 'bottom-left',   // 'bottom-left' | 'bottom-right'
    interval: 6000,            // ms between notifications
    displayDuration: 4200,     // ms each notification stays visible
    mixRatio: 3,               // show a real buyer every N notifications (0 = never show real)
    loop: true,                // loop when queue is exhausted
    animationStyle: 'slide',   // 'slide' | 'fade'
    accentColor: '#C9A84C',    // gold — matches Kayan/Tareq brand
    verifiedColor: '#059669',  // green for real buyers
    customColor: '#4f46e5',    // indigo for custom pool
    font: 'Tajawal, sans-serif',
    product: 'Elite Digital Coach',
    realLeads: [],             // injected at init — real verified buyers
    customLeads: [],           // injected at init — custom name pool
    onShow: null,              // callback(lead, type) fired on each notification
  };

  // ─── Utility ──────────────────────────────────────────────────────
  function merge(target, source) {
    for (var k in source) {
      if (source.hasOwnProperty(k)) target[k] = source[k];
    }
    return target;
  }

  function initials(name) {
    return name.split(' ').map(function (p) { return p[0]; }).join('').toUpperCase().slice(0, 2);
  }

  var COLORS = [
    '#7c3aed','#0f766e','#b45309','#be185d',
    '#1d4ed8','#065f46','#92400e','#6d28d9','#9d174d','#047857'
  ];
  var _ci = 0;
  function assignColor(lead) {
    if (!lead.color) lead.color = COLORS[_ci++ % COLORS.length];
    return lead;
  }

  // ─── CSS injection ────────────────────────────────────────────────
  function injectStyles(cfg) {
    if (document.getElementById('kayan-proof-styles')) return;
    var pos = cfg.position === 'bottom-right'
      ? 'right:20px;left:auto;'
      : 'left:20px;right:auto;';

    var css = [
      '@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap");',
      '#kayan-proof-notif{',
        'position:fixed;bottom:20px;' + pos,
        'background:#fff;',
        'border-radius:12px;',
        'box-shadow:0 4px 24px rgba(0,0,0,0.13),0 1px 4px rgba(0,0,0,0.07);',
        'padding:12px 14px;',
        'display:flex;align-items:center;gap:12px;',
        'min-width:260px;max-width:320px;',
        'z-index:2147483647;',
        'opacity:0;pointer-events:none;',
        'font-family:' + cfg.font + ';',
        'border-left:3px solid ' + cfg.accentColor + ';',
        'transform:translateY(16px);',
        'transition:none;',
      '}',
      '#kayan-proof-notif.kp-real{border-left-color:' + cfg.verifiedColor + ';}',
      '#kayan-proof-notif.kp-enter{animation:kpIn .42s cubic-bezier(.22,1,.36,1) forwards;}',
      '#kayan-proof-notif.kp-exit{animation:kpOut .35s cubic-bezier(.55,0,1,.45) forwards;}',
      '@keyframes kpIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}',
      '@keyframes kpOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(12px)}}',
      '.kp-avatar{',
        'width:40px;height:40px;border-radius:50%;',
        'display:flex;align-items:center;justify-content:center;',
        'font-size:14px;font-weight:700;color:#fff;flex-shrink:0;',
      '}',
      '.kp-body{flex:1;min-width:0;}',
      '.kp-name{font-size:13px;font-weight:700;color:#1a1a2e;margin:0 0 2px;}',
      '.kp-action{font-size:12px;color:#6b7280;margin:0 0 3px;}',
      '.kp-action strong{color:#374151;font-weight:600;}',
      '.kp-meta{display:flex;align-items:center;gap:5px;font-size:11px;color:#9ca3af;margin:0;}',
      '.kp-dot{width:5px;height:5px;border-radius:50%;display:inline-block;background:#9ca3af;}',
      '.kp-dot.kp-live{background:' + cfg.verifiedColor + ';animation:kpPulse 1.6s ease-in-out infinite;}',
      '@keyframes kpPulse{0%,100%{opacity:1}50%{opacity:.35}}',
      '.kp-badge{',
        'font-size:9px;font-weight:700;padding:2px 6px;border-radius:4px;',
        'text-transform:uppercase;letter-spacing:.05em;',
      '}',
      '.kp-badge-real{background:#d1fae5;color:#065f46;}',
      '.kp-badge-custom{background:#ede9fe;color:#4338ca;}',
    ].join('');

    var style = document.createElement('style');
    style.id = 'kayan-proof-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ─── DOM creation ─────────────────────────────────────────────────
  function createWidget() {
    if (document.getElementById('kayan-proof-notif')) return;

    var el = document.createElement('div');
    el.id = 'kayan-proof-notif';
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-atomic', 'true');
    el.innerHTML = [
      '<div class="kp-avatar" id="kp-av"></div>',
      '<div class="kp-body">',
        '<p class="kp-name" id="kp-name"></p>',
        '<p class="kp-action" id="kp-action"></p>',
        '<p class="kp-meta">',
          '<span class="kp-dot" id="kp-dot"></span>',
          '<span id="kp-time"></span>',
          '<span class="kp-badge" id="kp-badge"></span>',
        '</p>',
      '</div>',
    ].join('');
    document.body.appendChild(el);
  }

  // ─── Queue builder ────────────────────────────────────────────────
  function buildQueue(cfg) {
    var real = cfg.realLeads;
    var custom = cfg.customLeads;
    var total = Math.max(real.length + custom.length, 12);
    var q = [];
    var ri = 0, ci = 0;

    for (var i = 0; i < total * 2; i++) {
      var isReal = real.length > 0 && cfg.mixRatio > 0 && ((i + 1) % cfg.mixRatio === 0);
      if (isReal) {
        q.push({ type: 'real', lead: real[ri % real.length] });
        ri++;
      } else if (custom.length > 0) {
        q.push({ type: 'custom', lead: custom[ci % custom.length] });
        ci++;
      } else if (real.length > 0) {
        q.push({ type: 'real', lead: real[ri % real.length] });
        ri++;
      }
    }
    return q;
  }

  // ─── Core engine ──────────────────────────────────────────────────
  function Engine(cfg) {
    this.cfg = cfg;
    this.queue = buildQueue(cfg);
    this.pos = 0;
    this.timer = null;
    this._exitTimer = null;
  }

  Engine.prototype.show = function () {
    var self = this;
    var cfg = self.cfg;
    var q = self.queue;

    if (!q.length) return;
    if (!cfg.loop && self.pos >= q.length) {
      clearInterval(self.timer);
      return;
    }

    var item = q[self.pos % q.length];
    var l = item.lead;
    var isReal = item.type === 'real';

    var el = document.getElementById('kayan-proof-notif');
    var avEl = document.getElementById('kp-av');
    var nameEl = document.getElementById('kp-name');
    var actionEl = document.getElementById('kp-action');
    var timeEl = document.getElementById('kp-time');
    var dotEl = document.getElementById('kp-dot');
    var badgeEl = document.getElementById('kp-badge');

    if (!el) return;

    avEl.textContent = initials(l.name);
    avEl.style.background = l.color;
    nameEl.textContent = l.name + (l.city ? ' من ' + l.city : '');
    actionEl.innerHTML = 'انضم للتو إلى <strong>' + (l.product || cfg.product) + '</strong>';
    timeEl.textContent = l.time || '';
    dotEl.className = 'kp-dot' + (isReal ? ' kp-live' : '');
    badgeEl.textContent = isReal ? 'موثّق' : 'حديث';
    badgeEl.className = 'kp-badge ' + (isReal ? 'kp-badge-real' : 'kp-badge-custom');

    el.className = isReal ? 'kp-real kp-enter' : 'kp-enter';

    if (typeof cfg.onShow === 'function') cfg.onShow(l, item.type);

    self.pos++;

    clearTimeout(self._exitTimer);
    self._exitTimer = setTimeout(function () {
      el.classList.remove('kp-enter');
      el.classList.add('kp-exit');
      setTimeout(function () { el.classList.remove('kp-exit'); }, 350);
    }, cfg.displayDuration);
  };

  Engine.prototype.start = function () {
    var self = this;
    clearInterval(self.timer);
    self.show();
    self.timer = setInterval(function () { self.show(); }, self.cfg.interval);
  };

  Engine.prototype.stop = function () {
    clearInterval(this.timer);
    clearTimeout(this._exitTimer);
  };

  Engine.prototype.reload = function (newCfg) {
    this.stop();
    this.cfg = merge(this.cfg, newCfg);
    this.queue = buildQueue(this.cfg);
    this.pos = 0;
    this.start();
  };

  // ─── Public API ───────────────────────────────────────────────────
  var _engine = null;

  window.kayanProof = {
    _q: [],

    init: function (userCfg) {
      var cfg = merge(merge({}, defaults), userCfg || {});

      // Assign colors to any leads missing one
      (cfg.realLeads || []).forEach(assignColor);
      (cfg.customLeads || []).forEach(assignColor);

      injectStyles(cfg);

      // Wait for body
      function boot() {
        createWidget();
        _engine = new Engine(cfg);
        _engine.start();

        // Process any queued display() calls
        var q = window.kayanProof._q;
        for (var i = 0; i < q.length; i++) {
          window.kayanProof.display.apply(null, q[i]);
        }
        window.kayanProof._q = [];
      }

      if (document.body) {
        boot();
      } else {
        document.addEventListener('DOMContentLoaded', boot);
      }
    },

    // Dynamically add a real buyer at runtime (e.g. from a GHL webhook)
    addRealBuyer: function (lead) {
      assignColor(lead);
      if (_engine) {
        _engine.cfg.realLeads.push(lead);
        _engine.queue = buildQueue(_engine.cfg);
      }
    },

    // Dynamically add a custom lead
    addCustomLead: function (lead) {
      assignColor(lead);
      if (_engine) {
        _engine.cfg.customLeads.push(lead);
        _engine.queue = buildQueue(_engine.cfg);
      }
    },

    // Pause / resume
    pause: function () { if (_engine) _engine.stop(); },
    resume: function () { if (_engine) _engine.start(); },

    // Reload with new config (e.g. change mixRatio live)
    reload: function (newCfg) { if (_engine) _engine.reload(newCfg); },

    // display() stub — queues calls before init
    display: function () {
      if (!_engine) { this._q.push(arguments); }
    },
  };

})(window, document);
