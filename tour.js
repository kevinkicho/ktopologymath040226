// tour.js — Guided tour engine for ktopologymath
// Loaded dynamically by auto-start.js after tour-data.js is ready.
// Reads window.KTOUR_DATA[filename][tabIndex] = [{title, body, duration}, ...]
// Injects ▶ Tour button into tab bar. Tour card replaces .side-panel content.
// Title and body are written via textContent — no innerHTML for user data.
(function () {
  'use strict';

  // ── Current page filename ────────────────────────────────────────────────────────────────────────────────
  var filename = (function () {
    var p = location.pathname;
    var parts = p.split('/').filter(Boolean);
    return parts[parts.length - 1] || '';
  })();

  // ── State ────────────────────────────────────────────────────────────────────────────────────────
  var tourActive = false;
  var stepIdx    = 0;
  var stepList   = [];
  var autoTimer  = null;
  var savedChildren = null;

  function getSteps(tabIdx) {
    var d = window.KTOUR_DATA;
    if (!d || !d[filename]) return [];
    return d[filename][tabIdx] || [];
  }

  function savePanelChildren() {
    var sidePanel = document.querySelector('[data-role="sidebar"], .side-panel, .sidebar, .sidebar.right, .controls');
    if (!sidePanel || savedChildren !== null) return;
    savedChildren = [];
    while (sidePanel.firstChild) {
      savedChildren.push(sidePanel.firstChild);
      sidePanel.removeChild(sidePanel.firstChild);
    }
  }

  function restorePanel() {
    var sidePanel = document.querySelector('[data-role="sidebar"], .side-panel, .sidebar, .sidebar.right, .controls');
    if (sidePanel && savedChildren !== null) {
      while (sidePanel.firstChild) sidePanel.removeChild(sidePanel.firstChild);
      savedChildren.forEach(function(child) {
        sidePanel.appendChild(child);
      });
      savedChildren = null;
      tryRenderMath(sidePanel);
    }
  }

  function currentTabIdx() {
    var tabs = Array.from(document.querySelectorAll('.tab'));
    var idx  = tabs.findIndex(function (t) { return t.classList.contains('active'); });
    return idx >= 0 ? idx : 0;
  }

  // Skip modules that implement their own tour.
  // Exclude our own ktour-* injected elements from the check.
  function hasOwnTour() {
    return !!(document.querySelector(
      '[id*="tour"]:not([id^="ktour"]),[onclick*="tour"],[id*="Tour"]:not([id^="ktour"]),[onclick*="Tour"]'
    ));
  }

  // ── Tour button ─────────────────────────────────────────────────────────────────────────────────────
  function injectTourButton() {
    if (hasOwnTour()) return;
    if (document.getElementById('ktour-btn')) return;
    var tabBar = document.querySelector('[data-role="tab-bar"], .tabs, .tab-bar, .dm-tabs');
    if (!tabBar) return;

    var btn = document.createElement('button');
    btn.id  = 'ktour-btn';
    btn.style.cssText =
      'background:#1a1a38;color:#cc88ff;' +
      'border:1px solid rgba(204,136,255,0.4);border-radius:4px;' +
      'padding:3px 11px;font-size:.74rem;cursor:pointer;' +
      'flex-shrink:0;margin-right:6px;align-self:center';
    btn.addEventListener('click', function () {
      tourActive ? stopTour() : startTour();
    });

    tabBar.appendChild(btn);
    refreshButton();
  }

  function refreshButton() {
    var btn = document.getElementById('ktour-btn');
    if (!btn) return;
    var steps = getSteps(currentTabIdx());
    btn.style.display = steps.length ? '' : 'none';
    if (!tourActive) btn.textContent = steps.length ? '▶ Tour' : '';
  }

  // ── Tour lifecycle ────────────────────────────────────────────────────────────────────────────────────
  function startTour() {
    var steps = getSteps(currentTabIdx());
    if (!steps.length) return;
    stepList   = steps;
    stepIdx    = 0;
    tourActive = true;
    var btn = document.getElementById('ktour-btn');
    if (btn) btn.textContent = '⏹ Tour';
    // Ensure animation is running while the tour plays
    if (window._kanim) window._kanim.start();
    showStep();
  }

  function stopTour() {
    tourActive = false;
    clearTimeout(autoTimer);
    restorePanel();
    var card = document.getElementById('ktour-float-card');
    if (card) card.style.display = 'none';
    var btn = document.getElementById('ktour-btn');
    if (btn) {
      var steps = getSteps(currentTabIdx());
      btn.textContent = steps.length ? '▶ Tour' : '';
    }
  }

  function showStep() {
    if (!tourActive) return;
    if (stepIdx >= stepList.length) { stopTour(); return; }
    renderCard(stepList[stepIdx], stepIdx, stepList.length);
    clearTimeout(autoTimer);
    var dur = stepList[stepIdx].duration || 8000;
    autoTimer = setTimeout(function () { stepIdx++; showStep(); }, dur);
  }

  // ── Card rendering (safe DOM — no innerHTML for user data) ──────────────────────
  function renderCard(step, idx, total) {
    var container = buildCardShell(idx, total);
    // Set user-supplied content via textContent (XSS-safe)
    container.querySelector('.ktour-title').textContent = step.title;
    container.querySelector('.ktour-body').textContent  = step.body;

    var sidePanel = document.querySelector('[data-role="sidebar"], .side-panel, .sidebar, .sidebar.right, .controls');
    if (sidePanel) {
      savePanelChildren();
      while (sidePanel.firstChild) sidePanel.removeChild(sidePanel.firstChild);
      sidePanel.appendChild(container);
      tryRenderMath(sidePanel);
    } else {
      // Fallback: floating card for modules without .side-panel
      var card = document.getElementById('ktour-float-card');
      if (!card) {
        card = document.createElement('div');
        card.id = 'ktour-float-card';
        card.style.cssText =
          'position:fixed;bottom:16px;left:50%;transform:translateX(-50%);' +
          'width:480px;max-width:90vw;background:rgba(10,10,30,0.96);' +
          'border:1px solid rgba(204,136,255,0.4);border-radius:10px;' +
          'padding:14px 18px;z-index:9000';
        document.body.appendChild(card);
      }
      while (card.firstChild) card.removeChild(card.firstChild);
      card.appendChild(container);
      card.style.display = '';
      tryRenderMath(card);
    }
  }

  function buildCardShell(idx, total) {
    var pct     = Math.round((idx + 1) / total * 100);
    var isFirst = idx === 0;
    var isLast  = idx === total - 1;

    var wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;gap:0;height:100%';

    // Header: step counter + skip
    var header = document.createElement('div');
    header.style.cssText =
      'display:flex;justify-content:space-between;align-items:center;margin-bottom:8px';

    var counter = document.createElement('span');
    counter.style.cssText =
      'font-size:.68rem;color:#cc88ff;font-family:monospace;font-weight:600';
    counter.textContent = 'STEP ' + (idx + 1) + ' / ' + total;

    var skipBtn = document.createElement('button');
    skipBtn.style.cssText =
      'background:none;border:none;color:#8888aa;font-size:.74rem;cursor:pointer;padding:0';
    skipBtn.textContent = '✕ skip';
    skipBtn.addEventListener('click', stopTour);

    header.appendChild(counter);
    header.appendChild(skipBtn);

    // Progress bar
    var track = document.createElement('div');
    track.style.cssText =
      'height:3px;background:#252548;border-radius:2px;margin-bottom:12px;overflow:hidden';
    var fill = document.createElement('div');
    fill.style.cssText =
      'width:' + pct + '%;height:100%;' +
      'background:linear-gradient(90deg,#cc88ff,#ff66dd);border-radius:2px';
    track.appendChild(fill);

    // Title
    var titleEl = document.createElement('div');
    titleEl.className = 'ktour-title';
    titleEl.style.cssText =
      'font-size:.88rem;font-weight:600;color:#e8e8f8;margin-bottom:7px';

    // Body
    var bodyEl = document.createElement('div');
    bodyEl.className = 'ktour-body';
    bodyEl.style.cssText =
      'font-size:.76rem;color:#aaaacc;line-height:1.75;margin-bottom:14px;flex:1';

    // Prev / Next
    var btnRow = document.createElement('div');
    btnRow.style.cssText = 'display:flex;gap:8px;margin-top:auto';

    var prevBtn = document.createElement('button');
    prevBtn.style.cssText =
      'flex:1;background:#161630;border:1px solid ' + (isFirst ? '#1a1a30' : '#252548') + ';' +
      'color:' + (isFirst ? '#333' : '#8888aa') + ';padding:5px;border-radius:4px;font-size:.74rem;' +
      'cursor:' + (isFirst ? 'default' : 'pointer');
    if (isFirst) prevBtn.disabled = true;
    prevBtn.textContent = '◄ prev';
    prevBtn.addEventListener('click', function () {
      if (stepIdx > 0) { stepIdx--; showStep(); }
    });

    var nextBtn = document.createElement('button');
    nextBtn.style.cssText =
      'flex:1;background:#1a0030;border:1px solid rgba(204,136,255,0.4);' +
      'color:#cc88ff;padding:5px;border-radius:4px;font-size:.74rem;cursor:pointer';
    nextBtn.textContent = isLast ? '✓ done' : 'next ►';
    nextBtn.addEventListener('click', function () { stepIdx++; showStep(); });

    btnRow.appendChild(prevBtn);
    btnRow.appendChild(nextBtn);

    wrap.appendChild(header);
    wrap.appendChild(track);
    wrap.appendChild(titleEl);
    wrap.appendChild(bodyEl);
    wrap.appendChild(btnRow);

    return wrap;
  }

  function tryRenderMath(el) {
    if (window.renderMathInElement) {
      try {
        renderMathInElement(el, {
          delimiters: [
            { left: '$$', right: '$$', display: true  },
            { left: '$',  right: '$',  display: false },
          ],
          throwOnError: false,
        });
      } catch (e) { /* KaTeX not yet ready; math shows as plain text */ }
    }
  }

  // ── Tab-switch listener ─────────────────────────────────────────────────────────────────────────────
  document.addEventListener('click', function (e) {
    var tab = e.target.closest('.tab,.tab-btn,[role="tab"]');
    if (!tab) return;
    if (tourActive) stopTour();
    setTimeout(refreshButton, 420);
  });

  // ── Init ──────────────────────────────────────────────────────────────────────────────────────────
  function init() {
    injectTourButton();
    refreshButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 600); });
  } else {
    setTimeout(init, 600);
  }

})();
