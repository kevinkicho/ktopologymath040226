// auto-start.js — shared utilities for all module pages
// Provides: window.animSpeed, rAF timestamp scaler, resizeCanvas, data loaders, nav bar
// Each module manages its own animations independently.

// ── Global animation speed (0.1–3.0). Set by speed sliders; read by rAF scaler.
window.animSpeed = parseFloat(sessionStorage.getItem('ktour-speed') || '0.1');
window.isPaused = false;

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
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  // Constrain CSS size first to prevent parent from expanding due to large canvas.width
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  if (canvas.onresize) canvas.onresize();
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
    '25_higgs_field.html','25_string_theory.html','26_number_systems.html',
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
      a.href = '/' + file;
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
    homeLink.href = '/';
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
      homeLink.href = '/paths.html';
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