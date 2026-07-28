/**
 * tab-controller.js — thin opt-in tab lifecycle harness
 *
 * Purpose: standardize cancel → show panel → enter/draw → auto-start
 * without owning draw math, RAF loops, or speed math.
 *
 * Preserves existing conventions:
 *   - window.animSpeed (also used by auto-start.js rAF scaler)
 *   - module-defined cancelAll / enter / autoStart callbacks
 *   - classic-script global switchTab(id) via controller.go(id)
 *
 * Usage (opt-in per module):
 *
 *   <script src="lib/tab-controller.js"></script>
 *   ...
 *   var tc = TabController.create('15_quaternions', {
 *     cancelAll: _cancelAllAnims15,
 *     setActive: function (id) { ... show panel, .active, aria-selected ... },
 *     enter: function (id) { redrawTab(); },
 *     autoStart: function (id) { autoStartAnimations(); }, // omit or false to disable
 *     initial: 0
 *   });
 *   function switchTab(t) { tc.go(t); }
 *
 * Speed helper (optional — modules may keep their own sliders):
 *   TabController.setSpeed(1.5);
 */
(function (global) {
  'use strict';

  var pages = Object.create(null);

  /**
   * Clamp and publish animation speed. Does not start/stop animations;
   * frame loops already read window.animSpeed (and auto-start.js scales rAF time).
   */
  function setSpeed(v, opts) {
    opts = opts || {};
    var n = parseFloat(v);
    if (!isFinite(n)) n = 1;
    n = Math.max(0.05, Math.min(5, n));
    global.animSpeed = n;
    try {
      sessionStorage.setItem('ktour-speed', String(n));
    } catch (e) { /* private mode */ }

    if (opts.syncDom !== false) {
      var ids = ['speed', 'ktour-speed-slider'];
      for (var i = 0; i < ids.length; i++) {
        var el = document.getElementById(ids[i]);
        if (el && el.value !== undefined) {
          try { el.value = n; } catch (e2) { /* range mismatch */ }
        }
      }
      var labels = document.querySelectorAll('#speedVal, #ktour-speed-val, [data-speed-label]');
      for (var j = 0; j < labels.length; j++) {
        labels[j].textContent = n.toFixed(1) + (labels[j].dataset.speedSuffix === 'x' || /x$/i.test(labels[j].textContent || '') ? 'x' : '');
      }
    }
    return n;
  }

  /**
   * @param {string} pageId unique module id (e.g. filename stem)
   * @param {object} options
   * @param {function():void} [options.cancelAll] stop all module animations (required for safety)
   * @param {function(id, btn?):void} [options.setActive] show panel + tab chrome
   * @param {function(id, btn?):void} [options.enter] draw / size canvas for id
   * @param {function(id, btn?):void|false} [options.autoStart] start anim for id; false disables
   * @param {*=} [options.initial] initial tab id
   * @param {boolean} [options.deferAutoStart=true] run autoStart on next animation frame
   * @returns {{ go: function, cancelAll: function, getCurrent: function, registerStop: function, setSpeed: function, pageId: string }}
   */
  function create(pageId, options) {
    if (!pageId) throw new Error('TabController.create: pageId required');
    options = options || {};

    var state = {
      pageId: pageId,
      current: options.initial != null ? options.initial : null,
      options: options,
      /** @type {Array<function():void>} extra stop callbacks for this page */
      stops: [],
      generation: 0
    };
    pages[pageId] = state;

    function runStops() {
      var list = state.stops.slice();
      state.stops.length = 0;
      for (var i = 0; i < list.length; i++) {
        try { list[i](); } catch (e) {
          console.warn('[TabController] registerStop error on', pageId, e);
        }
      }
    }

    function cancelAll() {
      runStops();
      if (typeof state.options.cancelAll === 'function') {
        try {
          state.options.cancelAll();
        } catch (e) {
          console.warn('[TabController] cancelAll error on', pageId, e);
        }
      }
    }

    function go(id, btn) {
      // Always cancel first — matches the contract of good modules (complex calculus, cosmology).
      cancelAll();
      state.current = id;
      state.generation += 1;
      var gen = state.generation;

      // Show panel chrome immediately (sync) so the user sees the switch.
      if (typeof state.options.setActive === 'function') {
        try {
          state.options.setActive(id, btn);
        } catch (e) {
          console.warn('[TabController] setActive error on', pageId, e);
        }
      }

      var auto = state.options.autoStart;
      var runEnter = typeof state.options.enter === 'function';
      var runAuto = typeof auto === 'function' && auto !== false;
      // deferEnter defaults true: panel was just set to display:flex; clientWidth is
      // often 0 until the next frame. Drawing in the same turn blanks canvases.
      var deferEnter = state.options.deferEnter !== false;
      var deferAuto = state.options.deferAutoStart !== false;
      var raf = global.requestAnimationFrame || function (cb) { return setTimeout(cb, 16); };

      function doEnter() {
        if (state.generation !== gen || state.current !== id) return;
        if (runEnter) {
          try {
            state.options.enter(id, btn);
          } catch (e) {
            console.warn('[TabController] enter error on', pageId, e);
          }
        }
      }

      function doAuto() {
        if (state.generation !== gen || state.current !== id) return;
        if (!runAuto) return;
        try {
          auto(id, btn);
        } catch (e) {
          console.warn('[TabController] autoStart error on', pageId, 'tab', id, e);
        }
      }

      function afterLayout() {
        doEnter();
        if (!runAuto) return;
        if (deferAuto) raf(doAuto);
        else doAuto();
      }

      if (!deferEnter) {
        afterLayout();
      } else {
        // Double rAF: style applied → layout → paint-ready dimensions
        raf(function () { raf(afterLayout); });
      }
      return state.current;
    }

    return {
      pageId: pageId,
      go: go,
      cancelAll: cancelAll,
      getCurrent: function () { return state.current; },
      /**
       * Register a one-shot stop callback cleared on next cancelAll/go.
       * Useful for ad-hoc RAF ids without expanding cancelAll yet.
       */
      registerStop: function (fn) {
        if (typeof fn === 'function') state.stops.push(fn);
      },
      setSpeed: setSpeed
    };
  }

  /**
   * Apply common tab chrome: .active class + aria-selected on a NodeList/array of tabs.
   * @param {ArrayLike<Element>} tabEls
   * @param {number} activeIndex
   */
  function setTabChrome(tabEls, activeIndex) {
    if (!tabEls) return;
    for (var i = 0; i < tabEls.length; i++) {
      var el = tabEls[i];
      if (!el) continue;
      var on = i === activeIndex;
      el.classList.toggle('active', on);
      if (el.getAttribute('role') === 'tab' || el.hasAttribute('aria-selected')) {
        el.setAttribute('aria-selected', on ? 'true' : 'false');
      }
    }
  }

  /**
   * Show one panel by id prefix + index (panel0, panel1, …) or panel map.
   * @param {number} activeIndex
   * @param {number} count
   * @param {string} [prefix='panel']
   * @param {string} [display='flex']
   */
  function showIndexedPanels(activeIndex, count, prefix, display) {
    prefix = prefix || 'panel';
    display = display || 'flex';
    for (var i = 0; i < count; i++) {
      var el = document.getElementById(prefix + i);
      if (el) el.style.display = i === activeIndex ? display : 'none';
    }
  }

  global.TabController = {
    create: create,
    setSpeed: setSpeed,
    setTabChrome: setTabChrome,
    showIndexedPanels: showIndexedPanels,
    /** @private test/debug */
    _pages: pages,
    version: '1.0.0'
  };
})(typeof window !== 'undefined' ? window : globalThis);
