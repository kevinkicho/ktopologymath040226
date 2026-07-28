// auto-start.js — shared utilities for all module pages
// Provides: window.animSpeed, rAF timestamp scaler, resizeCanvas, data loaders, nav bar
// Each module manages its own animations independently.

// ── Global animation speed (0.1–3.0). Set by speed sliders; read by rAF scaler.
window.animSpeed = parseFloat(sessionStorage.getItem('ktour-speed') || '1');
window.isPaused = false;

// ── Default autoplay: if a tab has ▶ Animate/Play and is still stopped after settle,
// click it once. Skips when Pause is already showing (module already auto-started).
// Does not own RAF loops — only triggers the module's own control once.
(function () {
  function isShown(el) {
    if (!el) return false;
    var s = window.getComputedStyle(el);
    if (s.display === 'none' || s.visibility === 'hidden') return false;
    var r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  }
  function classify(text, id) {
    var t = (text || '').replace(/\s+/g, ' ').trim();
    var idl = (id || '').toLowerCase();
    if (/proof|export|reset|pan\b|tour|download|copy|prev|next|home|zoom|clear/i.test(t)) return null;
    if (/anim/i.test(idl) && !/param|speed/i.test(idl)) {
      return /⏸|\u23f8|pause|stop/i.test(t) ? 'pause' : 'start';
    }
    if (/▶|⏸|\u25b6|\u23f8/.test(t) || /\banimate\b/i.test(t)) {
      return /⏸|\u23f8|pause|stop/i.test(t) ? 'pause' : 'start';
    }
    if (/^(play|pause)$/i.test(t)) return /pause/i.test(t) ? 'pause' : 'start';
    if (/^\s*play\s*$/i.test(t) || /^▶\s*play\b/i.test(t)) return 'start';
    return null;
  }
  function tryAutoplay() {
    if (window.isPaused || document.hidden) return;
    if (window._ktAutoplayBusy) return;
    var buttons = document.querySelectorAll('button, [role="button"], .btn');
    var hasPause = false;
    var startBtn = null;
    for (var i = 0; i < buttons.length; i++) {
      var b = buttons[i];
      if (!isShown(b)) continue;
      var text = (b.textContent || '').replace(/\s+/g, ' ').trim();
      var state = classify(text, b.id);
      if (state === 'pause') hasPause = true;
      if (state === 'start' && !startBtn) startBtn = b;
    }
    // Already running — do nothing (avoids double-toggle that stops anims)
    if (hasPause || !startBtn) return;
    if (startBtn.getAttribute('data-kt-autoplay') === '1') return;
    startBtn.setAttribute('data-kt-autoplay', '1');
    window._ktAutoplayBusy = true;
    try { startBtn.click(); } catch (e) { /* ignore */ }
    setTimeout(function () { window._ktAutoplayBusy = false; }, 300);
  }
  function scheduleAutoplay() {
    // Wait past typical module init/auto-start (300–500ms) so we only
    // kick tabs that are still stopped — avoids double-toggle races.
    setTimeout(tryAutoplay, 700);
    setTimeout(tryAutoplay, 1400);
  }
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('.tab, .tab-btn, [role="tab"]') : null;
    if (t) {
      // allow a fresh autoplay attempt on the new tab
      document.querySelectorAll('[data-kt-autoplay]').forEach(function (el) {
        el.removeAttribute('data-kt-autoplay');
      });
      scheduleAutoplay();
    }
  }, true);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleAutoplay);
  } else {
    scheduleAutoplay();
  }
  window._ktTryAutoplay = tryAutoplay;
})();

// ── Pause animations when browser tab is hidden, resume when visible ──────────
document.addEventListener('visibilitychange', function() {
  window.isPaused = document.hidden;
});

// ── rAF timestamp scaler ──────────────────────────────────────────────────────
// Replaces requestAnimationFrame so canvas animations respect window.animSpeed.
// Modules compute deltaTime = (t - lastT); scaling t scales their effective speed.
(function () {
  const _origRAF = window.requestAnimationFrame.bind(window);
  let _vt = null, _rt = null;
  window.requestAnimationFrame = function (cb) {
    function tick(realNow) {
      if (window.isPaused) {
        _rt = null;
        _origRAF(tick);
        return;
      }
      if (_rt === null) { _rt = realNow; _vt = realNow; }
      _vt += (realNow - _rt) * (window.animSpeed !== undefined ? window.animSpeed : 1.0);
      _rt = realNow;
      cb(_vt);
    }
    return _origRAF(tick);
  };
  window._rafReset = function () { _rt = null; };
  window._rawRAF = _origRAF;
})();

// ── Standardized resizeCanvas ─────────────────────────────────────────────────
window.resizeCanvas = function (canvas) {
  if(!canvas || !canvas.parentElement) return null;
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  const W = Math.floor(rect.width * dpr);
  const H = Math.floor(rect.height * dpr);
  canvas.width = W;
  canvas.height = H;
  if (canvas.onresize) canvas.onresize();
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return [rect.width, rect.height, ctx];
};

// ── Split-view layout system ──────────────────────────────────────────────────
(function () {
  var style = document.createElement('style');
  style.id = 'split-view-css';
  style.textContent =
    '.split-view{display:flex;gap:4px;min-height:0;min-width:0}' +
    '.split-v{flex-direction:column}' +
    '.split-h{flex-direction:row}' +
    '.split-view>.split-25{flex:0 0 25%;min-height:0;min-width:0}' +
    '.split-view>.split-33{flex:0 0 33.333%;min-height:0;min-width:0}' +
    '.split-view>.split-50{flex:1 1 0;min-height:0;min-width:0}' +
    '.split-view>.split-66{flex:0 0 66.666%;min-height:0;min-width:0}' +
    '.split-view>canvas{flex:1 1 0;min-height:0;min-width:0}';
  document.head.appendChild(style);
})();

// ── Scrollable tab bars (many modules have 10–20 tabs) ────────────────────────
(function () {
  if (document.getElementById('tab-bar-scroll-css')) return;
  var style = document.createElement('style');
  style.id = 'tab-bar-scroll-css';
  style.textContent =
    /* Horizontal scroll instead of clipping when tabs overflow the viewport */
    '.tabs, .tab-bar, [role="tablist"], [data-role="tab-bar"]{' +
      'overflow-x:auto!important;overflow-y:hidden!important;' +
      '-webkit-overflow-scrolling:touch;' +
      'scrollbar-width:thin;' +
      'max-width:100%;' +
      'flex-wrap:nowrap!important;' +
    '}' +
    '.tabs::-webkit-scrollbar, .tab-bar::-webkit-scrollbar,' +
    '[role="tablist"]::-webkit-scrollbar, [data-role="tab-bar"]::-webkit-scrollbar{height:4px}' +
    '.tabs::-webkit-scrollbar-thumb, .tab-bar::-webkit-scrollbar-thumb,' +
    '[role="tablist"]::-webkit-scrollbar-thumb, [data-role="tab-bar"]::-webkit-scrollbar-thumb{' +
      'background:rgba(120,120,160,.45);border-radius:2px' +
    '}' +
    /* Individual tabs must not shrink — user scrolls the bar instead */
    '.tabs > .tab, .tabs > .tab-btn, .tabs > button,' +
    '.tab-bar > .tab, .tab-bar > .tab-btn, .tab-bar > button,' +
    '[role="tablist"] > .tab, [role="tablist"] > .tab-btn, [role="tablist"] > button,' +
    '[role="tablist"] > [role="tab"], [data-role="tab-bar"] > .tab,' +
    '[data-role="tab-bar"] > .tab-btn, [data-role="tab-bar"] > button,' +
    '[data-role="tab-bar"] > [role="tab"]{' +
      'flex:0 0 auto!important;' +
      'white-space:nowrap!important;' +
    '}';
  document.head.appendChild(style);

  // Keep the active / clicked tab visible in the scroll strip
  function scrollTabIntoView(el) {
    if (!el || typeof el.scrollIntoView !== 'function') return;
    try {
      el.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' });
    } catch (e) {
      try { el.scrollIntoView(false); } catch (e2) { /* ignore */ }
    }
  }
  document.addEventListener(
    'click',
    function (e) {
      var t = e.target && e.target.closest
        ? e.target.closest('.tab, .tab-btn, [role="tab"]')
        : null;
      if (t) scrollTabIntoView(t);
    },
    true
  );
  // After load, ensure the initially active tab is in view on narrow screens
  function scrollActive() {
    var a = document.querySelector(
      '.tabs .tab.active, .tab-bar .tab.active, [role="tablist"] .tab.active,' +
        '[role="tablist"] [role="tab"][aria-selected="true"], [data-role="tab-bar"] .tab.active'
    );
    if (a) scrollTabIntoView(a);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(scrollActive, 50);
    });
  } else {
    setTimeout(scrollActive, 50);
  }
})();

window.resizeAllCanvases = function (container) {
  if (!container) container = document;
  var dpr = window.devicePixelRatio || 1;
  var sel = typeof container.querySelectorAll === 'function' ? container : document;
  sel.querySelectorAll('canvas').forEach(function (c) {
    if (!c.parentElement) return;
    var rect = c.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    var newW = Math.floor(rect.width * dpr);
    var newH = Math.floor(rect.height * dpr);
    if (c.width === newW && c.height === newH) return;
    c.style.width = rect.width + 'px';
    c.style.height = rect.height + 'px';
    c.width = newW;
    c.height = newH;
    if (c.onresize) c.onresize();
  });
};

// ── Pause animations when tab is hidden, resume when visible ─────────────────
document.addEventListener('visibilitychange', function() {
  window.isPaused = document.hidden;
});

// ── Load data scripts ─────────────────────────────────────────────────────────
(function () {
  function loadScript(src, cb) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = cb || function(){};
    s.onerror = function(){ console.warn('[auto-start] Failed to load: ' + src); if(cb) cb(); };
    document.head.appendChild(s);
  }
  function loadDataScripts() {
    loadScript('paths-data.js');
    loadScript('challenges-data.js');
    loadScript('connections-data.js');
    loadScript('search-data.js');
    loadScript('difficulty-data.js');
    loadScript('firebase-progress.js');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDataScripts);
  } else {
    loadDataScripts();
  }
})();

// ── Prev / Next module navigation bar ─────────────────────────────────────────
(function () {
  const MODULE_LIST = [
    '01_complex_explorer.html','02_penrose_tiling.html','03_mandelbrot.html',
    '04_hyperbolic.html','05_fourier.html','06_complex_calculus.html',
    '07_spinors_lie.html','08_spacetime.html','09_quantum.html',
    '10_lagrangian.html','11_dirac.html','12_gauge_theory.html',
    '13_cosmology.html','14_diff_geometry.html','15_quaternions.html',
    '16_diff_forms.html','17_fiber_bundles.html','18_infinity.html',
    '19_general_relativity.html','20_thermodynamics.html',
    '21_quantum_measurement.html','22_path_integrals.html',
    '23_twistor_theory.html','24_loop_quantum_gravity.html',
    '25_higgs_field.html','61_string_theory.html','26_number_systems.html',
    '27_visual_calculus.html','28_ccc_or.html','29_symplectic.html',
    '30_spinor_calculus.html','31_instantons.html','32_representation_theory.html',
    '33_cohomology.html','34_riemann_zeta.html','35_black_holes.html',
    '36_riemann_surfaces.html','37_maxwell.html','38_standard_model.html',
    '39_quantum_field_theory.html','40_chaos.html','41_homotopy.html',
    '42_clifford_algebras.html','43_conformal_field_theory.html','44_twistors.html',
    '45_bell_theorem.html','46_gravitational_waves.html','47_quantum_optics.html',
    '48_topological_matter.html','49_quantum_networks.html',
    '50_semiconductor_quantum.html','51_photonics_fiber.html',
    '52_category_theory.html','53_attosecond.html','54_trapped_ions.html',
    '55_neutrino_oscillations.html','56_muon_g2.html','57_nuclear_fusion.html',
    '58_dark_energy.html','59_spin_glasses.html','60_penrose_singularity.html',
    '62_adscft.html','63_qec.html',
  ];

  function injectNavBar() {
    const filename = location.pathname.split('/').filter(Boolean).pop() || '';
    const idx = MODULE_LIST.indexOf(filename);
    if (idx === -1) return;

    const prev = idx > 0 ? MODULE_LIST[idx - 1] : null;
    const next = idx < MODULE_LIST.length - 1 ? MODULE_LIST[idx + 1] : null;
    const label = f => f.replace(/\.html$/, '').replace(/_/g, ' ').replace(/^(\d+)\s/, (_, n) => n.padStart(2, '0') + ' ');

    const bar = document.createElement('div');
    bar.id = 'kmod-nav';
    bar.style.cssText =
      'position:fixed;bottom:0;left:0;right:0;z-index:800;' +
      'display:flex;align-items:center;justify-content:space-between;' +
      'padding:0 16px;height:38px;' +
      'background:rgba(5,5,15,0.92);backdrop-filter:blur(8px);' +
      'border-top:1px solid #1c1c44;font-size:.72rem;font-family:inherit;';

    function makeLink(file, dir) {
      const a = document.createElement('a');
      a.href = file;
      a.style.cssText =
        'color:#55558a;text-decoration:none;display:flex;align-items:center;' +
        'gap:6px;padding:6px 10px;border-radius:4px;transition:.15s;' +
        'max-width:38%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;';
      a.onmouseover = () => { a.style.color = '#00e5ff'; a.style.background = 'rgba(0,229,255,.06)'; };
      a.onmouseout  = () => { a.style.color = '#55558a'; a.style.background = ''; };
      const arrow = document.createElement('span');
      arrow.textContent = dir === 'prev' ? '\u2190' : '\u2192';
      arrow.style.flexShrink = '0';
      const txt = document.createElement('span');
      txt.textContent = label(file);
      txt.style.cssText = 'overflow:hidden;text-overflow:ellipsis;white-space:nowrap';
      if (dir === 'prev') { a.appendChild(arrow); a.appendChild(txt); }
      else                { a.appendChild(txt);   a.appendChild(arrow); }
      return a;
    }

    const homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    homeLink.style.cssText =
      'color:#33334a;text-decoration:none;font-size:.65rem;letter-spacing:.06em;' +
      'text-transform:uppercase;padding:4px 8px;border-radius:3px;transition:.15s;flex-shrink:0;';
    homeLink.textContent = '\u2302 Home';
    homeLink.onmouseover = () => { homeLink.style.color = '#00e5ff'; };
    homeLink.onmouseout  = () => { homeLink.style.color = '#33334a'; };

    bar.appendChild(prev ? makeLink(prev, 'prev') : document.createElement('span'));
    bar.appendChild(homeLink);
    bar.appendChild(next ? makeLink(next, 'next') : document.createElement('span'));
    document.body.appendChild(bar);
    document.body.style.paddingBottom = '38px';

    // Path context
    var moduleId = filename.replace('.html', '');
    function addPathContext() {
      if (!window.firebaseProgress || !window.LEARNING_PATHS) return;
      var pathId = window.firebaseProgress.getActivePath();
      if (!pathId) return;
      var path = null;
      for (var pi = 0; pi < window.LEARNING_PATHS.length; pi++) {
        if (window.LEARNING_PATHS[pi].id === pathId) { path = window.LEARNING_PATHS[pi]; break; }
      }
      if (!path) return;
      var modIdx = path.modules.indexOf(moduleId);
      if (modIdx === -1) return;
      var pp = window.firebaseProgress.getPathProgress(pathId);
      homeLink.textContent = path.title + ' ' + pp.completed + '/' + pp.total;
      homeLink.href = 'paths.html';
      homeLink.style.color = path.color;
      homeLink.style.fontSize = '.66rem';
      homeLink.style.fontWeight = '600';
    }
    var pathCheck = setInterval(function() {
      if (window.firebaseProgress) {
        clearInterval(pathCheck);
        window.firebaseProgress.onReady(addPathContext);
      }
    }, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavBar);
  } else {
    injectNavBar();
  }
})();

// ── Service worker cleanup ────────────────────────────────────────────────────
(function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for (var i = 0; i < registrations.length; i++) {
        registrations[i].unregister();
      }
    });
  }
  if (!document.querySelector('meta[name="theme-color"]')) {
    var meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = '#05050f';
    document.head.appendChild(meta);
  }
})();