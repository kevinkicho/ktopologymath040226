/**
 * Shared metrics for canvas fit / layout / blank / overflow checks.
 *
 * Used by tests/canvas-layout.spec.js. Pure measure helpers — no Playwright
 * expect() here so the same logic can soft-report or hard-fail.
 */

/**
 * Measure the active panel's primary canvas geometry and content.
 * @param {import('@playwright/test').Page} page
 */
async function measureActiveCanvas(page) {
  return page.evaluate(() => {
    function shown(el) {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden' || Number(s.opacity) === 0) {
        return false;
      }
      const r = el.getBoundingClientRect();
      return r.width > 1 && r.height > 1;
    }

    function isBg(r, g, b, a) {
      if (a < 10) return true;
      // Dark theme backgrounds used across modules
      return r < 28 && g < 28 && b < 45;
    }

    const panelCandidates = [
      ...document.querySelectorAll(
        '.panel.active, .workspace.active, .tab-panel.active, [data-role="panel"].active'
      ),
      ...document.querySelectorAll(
        '.panel, .workspace, .tab-panel, [data-role="panel"], [id^="panel"]'
      ),
    ];
    const panel = panelCandidates.find(shown) || null;
    if (!panel) {
      // Fallback: any visible canvas on page
      const any = Array.from(document.querySelectorAll('canvas')).find(
        (c) => shown(c) && c.width > 0 && c.height > 0
      );
      if (!any) return { ok: false, reason: 'no-active-panel' };
      // synthetic panel = parent
      return measureCanvas(any, any.closest('.panel, .workspace, .tab-panel, [data-role="panel"]') || any.parentElement);
    }

    return measureCanvas(
      panel.querySelector('canvas'),
      panel
    );

    function measureCanvas(canvas, panelEl) {
      if (!canvas) {
        // Some tabs are pure text — not a failure for layout suite
        return {
          ok: false,
          reason: 'no-canvas',
          panelId: (panelEl && panelEl.id) || '',
        };
      }

      const wrap =
        canvas.closest('.canvas-wrap, .main-area, .fp-canvas-wrap, .dm-canvas-wrap') ||
        canvas.parentElement;
      const pr = panelEl ? panelEl.getBoundingClientRect() : wrap.getBoundingClientRect();
      const wr = wrap ? wrap.getBoundingClientRect() : canvas.getBoundingClientRect();
      const cr = canvas.getBoundingClientRect();

      const sidebars = panelEl
        ? [...panelEl.querySelectorAll('.sidebar, .controls, [data-role="sidebar"]')].filter(shown)
        : [];
      const sidebarTops = sidebars.map((s) => Math.round(s.getBoundingClientRect().top));
      const sidebarRow =
        sidebars.length >= 2 &&
        Math.abs(sidebarTops[0] - sidebarTops[sidebarTops.length - 1]) < 12;

      const row = panelEl && panelEl.querySelector('.panel-main-row');
      const rowCs = row ? getComputedStyle(row) : null;

      // Interior fill sample — grid + denser center (sparse line drawings need more samples)
      let nonBg = 0;
      let samples = 0;
      const colorSet = new Set();
      let readErr = null;
      try {
        if (canvas.width > 2 && canvas.height > 2) {
          const ctx = canvas.getContext('2d', { willReadFrequently: true });
          const points = [];
          const gx = 16;
          const gy = 16;
          for (let iy = 0; iy < gy; iy++) {
            for (let ix = 0; ix < gx; ix++) {
              points.push([
                Math.floor((canvas.width * (ix + 0.5)) / gx),
                Math.floor((canvas.height * (iy + 0.5)) / gy),
              ]);
            }
          }
          // Extra center cross-hairs for thin strokes
          for (let t = 0.2; t <= 0.8; t += 0.05) {
            points.push([Math.floor(canvas.width * t), Math.floor(canvas.height * 0.5)]);
            points.push([Math.floor(canvas.width * 0.5), Math.floor(canvas.height * t)]);
          }
          for (const [x, y] of points) {
            const d = ctx.getImageData(
              Math.min(canvas.width - 1, Math.max(0, x)),
              Math.min(canvas.height - 1, Math.max(0, y)),
              1,
              1
            ).data;
            samples++;
            colorSet.add(d[0] + ',' + d[1] + ',' + d[2]);
            if (!isBg(d[0], d[1], d[2], d[3])) nonBg++;
          }
        }
      } catch (e) {
        readErr = String(e && e.message ? e.message : e);
      }

      // Edge ring (outer 2 device pixels): bright edge often means unclipped overflow
      let edgeBright = 0;
      let edgeN = 0;
      try {
        if (canvas.width > 6 && canvas.height > 6) {
          const ctx = canvas.getContext('2d', { willReadFrequently: true });
          // Sample edge only (cheap stride)
          const W = canvas.width;
          const H = canvas.height;
          const stride = Math.max(1, Math.floor(Math.min(W, H) / 80));
          for (let x = 0; x < W; x += stride) {
            for (const y of [0, 1, H - 2, H - 1]) {
              const d = ctx.getImageData(x, y, 1, 1).data;
              edgeN++;
              if (!isBg(d[0], d[1], d[2], d[3])) edgeBright++;
            }
          }
          for (let y = 0; y < H; y += stride) {
            for (const x of [0, 1, W - 2, W - 1]) {
              const d = ctx.getImageData(x, y, 1, 1).data;
              edgeN++;
              if (!isBg(d[0], d[1], d[2], d[3])) edgeBright++;
            }
          }
        }
      } catch (_) {
        /* ignore */
      }

      // DOM overflow children of main wrap (ignore fixed position / offscreen)
      let overflowKids = 0;
      if (wrap) {
        const mr = wr;
        wrap.querySelectorAll('*').forEach((el) => {
          if (el === canvas) return;
          const r = el.getBoundingClientRect();
          if (r.width < 2 || r.height < 2) return;
          const pos = getComputedStyle(el).position;
          if (pos === 'fixed' || pos === 'absolute') return;
          if (
            r.right > mr.right + 3 ||
            r.bottom > mr.bottom + 3 ||
            r.left < mr.left - 3 ||
            r.top < mr.top - 3
          ) {
            overflowKids++;
          }
        });
      }

      const dprX = cr.width > 0 ? canvas.width / cr.width : 0;
      const dprY = cr.height > 0 ? canvas.height / cr.height : 0;

      return {
        ok: true,
        panelId: (panelEl && panelEl.id) || '',
        panel: { w: +pr.width.toFixed(1), h: +pr.height.toFixed(1) },
        wrap: { w: +wr.width.toFixed(1), h: +wr.height.toFixed(1) },
        canvasCss: { w: +cr.width.toFixed(1), h: +cr.height.toFixed(1) },
        canvasBuf: { w: canvas.width, h: canvas.height },
        dprX: +dprX.toFixed(3),
        dprY: +dprY.toFixed(3),
        sidebars: sidebars.length,
        sidebarRow,
        rowFlexDir: rowCs ? rowCs.flexDirection : null,
        fillRatio: samples ? +(nonBg / samples).toFixed(4) : 0,
        uniqueColors: colorSet.size,
        // Sparse diagrams (thin strokes) may hit few samples; any non-bg or 2+ colors counts
        hasContent:
          samples > 0 && (nonBg >= 2 || nonBg / samples >= 0.005 || colorSet.size >= 2),
        edgeBrightRatio: edgeN ? +(edgeBright / edgeN).toFixed(4) : 0,
        overflowKids,
        defaultSized: canvas.width === 300 && canvas.height === 150,
        readErr,
      };
    }
  });
}

/**
 * Classify hard / soft issues from a measure result.
 * @returns {{ hard: string[], soft: string[] }}
 */
function classifyCanvasMeasure(m, { tabLabel = '', allowBlank = false } = {}) {
  const hard = [];
  const soft = [];
  const p = tabLabel ? `[${tabLabel}] ` : '';

  if (!m || !m.ok) {
    if (m && m.reason === 'no-canvas') {
      // Not a layout failure — tab has no canvas
      return { hard, soft };
    }
    if (m && m.reason === 'no-active-panel') {
      soft.push(p + 'no active panel found');
      return { hard, soft };
    }
    hard.push(p + ((m && m.reason) || 'measure failed'));
    return { hard, soft };
  }

  if (m.readErr && /tainted|SecurityError/i.test(m.readErr)) {
    soft.push(p + 'canvas pixel read blocked: ' + m.readErr);
    return { hard, soft };
  }

  // --- Hard geometry ---
  if (m.defaultSized) {
    hard.push(p + 'canvas still default 300×150 (resize never applied)');
  }
  if (m.wrap.w < 120 || m.wrap.h < 80) {
    hard.push(p + `wrap too small ${m.wrap.w}×${m.wrap.h}`);
  }
  if (m.canvasCss.w < 80 || m.canvasCss.h < 60) {
    hard.push(p + `canvas CSS too small ${m.canvasCss.w}×${m.canvasCss.h}`);
  }
  // Buffer must not be tiny when CSS is large (classic broken resize)
  if (m.canvasCss.w >= 200 && m.canvasCss.h >= 120) {
    if (m.canvasBuf.w < 80 || m.canvasBuf.h < 60) {
      hard.push(
        p +
          `buffer too small ${m.canvasBuf.w}×${m.canvasBuf.h} for CSS ${m.canvasCss.w}×${m.canvasCss.h}`
      );
    }
  }

  // DPR sanity: buffer / CSS should be ~1–3 (devicePixelRatio)
  if (m.canvasCss.w > 50 && m.canvasCss.h > 50) {
    if (m.dprX < 0.4 || m.dprX > 4.5 || m.dprY < 0.4 || m.dprY > 4.5) {
      hard.push(p + `buf/css ratio weird dprX=${m.dprX} dprY=${m.dprY}`);
    }
  }

  // Row layout: when 2 sidebars exist and panel is wide, they should share a row
  // and canvas wrap should claim real width
  if (m.sidebars >= 2 && m.panel.w >= 900) {
    if (!m.sidebarRow) {
      soft.push(p + 'sidebars not row-aligned (stacked?)');
    }
    if (m.wrap.w / Math.max(1, m.panel.w) < 0.28) {
      hard.push(
        p +
          `canvas wrap only ${(100 * m.wrap.w) / m.panel.w}% of panel width (likely stacked layout)`
      );
    }
  }

  // --- Content ---
  if (!allowBlank && m.canvasBuf.w > 50 && !m.hasContent) {
    // Blank is soft by default — many tabs need "Run" first; hard if also defaultSized
    if (m.defaultSized) {
      hard.push(
        p +
          `blank + default size fillRatio=${m.fillRatio} colors=${m.uniqueColors}`
      );
    } else {
      soft.push(
        p + `likely blank fillRatio=${m.fillRatio} colors=${m.uniqueColors}`
      );
    }
  }

  // --- Overflow heuristics (soft — labels/axes often touch edges legitimately) ---
  if (m.edgeBrightRatio > 0.35) {
    soft.push(p + `high edge activity edgeBright=${m.edgeBrightRatio} (possible overflow)`);
  }
  if (m.overflowKids > 8) {
    soft.push(p + `many DOM overflow children (${m.overflowKids})`);
  }

  return { hard, soft };
}

/**
 * Try a short double-rAF wait inside the page.
 * @param {import('@playwright/test').Page} page
 */
async function waitFrames(page, n = 2) {
  await page.evaluate((count) => {
    return new Promise((resolve) => {
      let i = 0;
      const step = () => {
        i++;
        if (i >= count) resolve();
        else requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, n);
}

/**
 * Optionally click a primary "Run"/"Compute" affordance if canvas looks blank.
 * @param {import('@playwright/test').Page} page
 */
async function tryKickDraw(page) {
  return page.evaluate(() => {
    const texts = /run trajectories|run\b|compute|start|simulate|generate/i;
    const btns = Array.from(document.querySelectorAll('button, .btn, [role="button"]'));
    const panel =
      document.querySelector('.panel.active, .workspace.active, .tab-panel.active') ||
      document.body;
    const candidates = btns.filter((b) => {
      if (!panel.contains(b) && b.closest('.panel, .workspace, .tab-panel') ) {
        // prefer in active panel
      }
      const t = (b.textContent || '').trim();
      return texts.test(t) && !/reset|proof|close|skip/i.test(t);
    });
    // Prefer buttons inside active panel
    const active =
      document.querySelector('.panel.active, .workspace.active, .tab-panel.active') ||
      document.body;
    const ordered = [
      ...candidates.filter((b) => active.contains(b)),
      ...candidates.filter((b) => !active.contains(b)),
    ];
    if (!ordered.length) return { clicked: false };
    try {
      ordered[0].click();
      return { clicked: true, label: (ordered[0].textContent || '').trim().slice(0, 40) };
    } catch (e) {
      return { clicked: false, err: String(e) };
    }
  });
}

/**
 * Time a named global draw function if present (soft perf signal).
 * @param {import('@playwright/test').Page} page
 * @param {string[]} candidates
 */
async function timeDrawFns(page, candidates) {
  return page.evaluate((names) => {
    for (const n of names) {
      try {
        const fn = window[n];
        if (typeof fn !== 'function') continue;
        const t0 = performance.now();
        fn();
        return { name: n, ms: +(performance.now() - t0).toFixed(1) };
      } catch (e) {
        return { name: n, ms: -1, err: String(e && e.message ? e.message : e) };
      }
    }
    return null;
  }, candidates);
}

/**
 * Measure EVERY visible canvas in the active panel (dual-canvas tabs).
 * Detects style/CSS mismatch (canvas forced taller/wider than its slot).
 * @param {import('@playwright/test').Page} page
 */
async function measureAllCanvases(page) {
  return page.evaluate(() => {
    function shown(el) {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden' || Number(s.opacity) === 0) return false;
      const r = el.getBoundingClientRect();
      return r.width > 1 && r.height > 1;
    }
    function isBg(r, g, b, a) {
      if (a < 10) return true;
      return r < 28 && g < 28 && b < 45;
    }

    const panel =
      [...document.querySelectorAll(
        '.panel.active, .workspace.active, .tab-panel.active, [data-role="panel"].active'
      )].find(shown) ||
      [...document.querySelectorAll('.panel, .workspace, .tab-panel, [data-role="panel"]')].find(
        shown
      );

    const root = panel || document.body;
    const canvases = [...root.querySelectorAll('canvas')].filter((c) => {
      // include canvases that have layout size even if parent was tricky
      const r = c.getBoundingClientRect();
      return r.width > 1 || c.width > 0;
    });

    return canvases.map((canvas, index) => {
      const slot =
        canvas.closest('.canvas-slot, .canvas-wrap, .main-area, .fp-canvas-wrap') ||
        canvas.parentElement;
      const cr = canvas.getBoundingClientRect();
      const sr = slot ? slot.getBoundingClientRect() : cr;
      const styleW = parseFloat(canvas.style.width) || 0;
      const styleH = parseFloat(canvas.style.height) || 0;

      let nonBg = 0;
      let samples = 0;
      const colors = new Set();
      let edgeBright = 0;
      let edgeN = 0;
      let cornerDense = 0; // soft: dense non-bg in 4 corners (stacked labels)
      let readErr = null;

      try {
        if (canvas.width > 2 && canvas.height > 2) {
          const ctx = canvas.getContext('2d', { willReadFrequently: true });
          const W = canvas.width;
          const H = canvas.height;
          const gx = 14;
          const gy = 14;
          for (let iy = 0; iy < gy; iy++) {
            for (let ix = 0; ix < gx; ix++) {
              const x = Math.floor((W * (ix + 0.5)) / gx);
              const y = Math.floor((H * (iy + 0.5)) / gy);
              const d = ctx.getImageData(x, y, 1, 1).data;
              samples++;
              colors.add(d[0] + ',' + d[1] + ',' + d[2]);
              if (!isBg(d[0], d[1], d[2], d[3])) nonBg++;
            }
          }
          // Edges
          const stride = Math.max(1, Math.floor(Math.min(W, H) / 60));
          for (let x = 0; x < W; x += stride) {
            for (const y of [0, 1, H - 2, H - 1]) {
              const d = ctx.getImageData(x, y, 1, 1).data;
              edgeN++;
              if (!isBg(d[0], d[1], d[2], d[3])) edgeBright++;
            }
          }
          // Corner density (12×12 patches) — many labels pile into corners
          const cw = Math.max(4, Math.floor(W * 0.12));
          const ch = Math.max(4, Math.floor(H * 0.12));
          const corners = [
            [0, 0],
            [W - cw, 0],
            [0, H - ch],
            [W - cw, H - ch],
          ];
          let cornerHits = 0;
          let cornerSamples = 0;
          for (const [ox, oy] of corners) {
            for (let y = 0; y < ch; y += 2) {
              for (let x = 0; x < cw; x += 2) {
                const d = ctx.getImageData(
                  Math.min(W - 1, ox + x),
                  Math.min(H - 1, oy + y),
                  1,
                  1
                ).data;
                cornerSamples++;
                if (!isBg(d[0], d[1], d[2], d[3])) cornerHits++;
              }
            }
          }
          cornerDense = cornerSamples ? cornerHits / cornerSamples : 0;
        }
      } catch (e) {
        readErr = String(e && e.message ? e.message : e);
      }

      const dprX = cr.width > 0 ? canvas.width / cr.width : 0;
      const dprY = cr.height > 0 ? canvas.height / cr.height : 0;
      const cssAspect = cr.height > 0 ? cr.width / cr.height : 0;
      const bufAspect = canvas.height > 0 ? canvas.width / canvas.height : 0;
      const aspectDelta =
        cssAspect > 0 && bufAspect > 0
          ? Math.abs(Math.log(cssAspect / bufAspect))
          : 0;

      // Style forced larger than visible box → classic dual-canvas resize bug
      const styleOverflowH = styleH > 0 && cr.height > 0 && styleH > cr.height * 1.35 + 24;
      const styleOverflowW = styleW > 0 && cr.width > 0 && styleW > cr.width * 1.35 + 24;
      // Buffer claims full parent while CSS is half (Poisson-style)
      const slotMismatch =
        sr.height > 40 &&
        cr.height > 40 &&
        Math.abs(sr.height - cr.height) / sr.height > 0.35 &&
        canvas.height > 0 &&
        Math.abs(canvas.height / (window.devicePixelRatio || 1) - sr.height) / sr.height < 0.2;

      return {
        index,
        id: canvas.id || `canvas-${index}`,
        slotId: (slot && slot.id) || '',
        css: { w: +cr.width.toFixed(1), h: +cr.height.toFixed(1) },
        buf: { w: canvas.width, h: canvas.height },
        style: { w: styleW, h: styleH },
        slot: { w: +sr.width.toFixed(1), h: +sr.height.toFixed(1) },
        dprX: +dprX.toFixed(3),
        dprY: +dprY.toFixed(3),
        aspectDelta: +aspectDelta.toFixed(3),
        fillRatio: samples ? +(nonBg / samples).toFixed(4) : 0,
        uniqueColors: colors.size,
        hasContent: samples > 0 && (nonBg >= 2 || nonBg / samples >= 0.005 || colors.size >= 2),
        edgeBrightRatio: edgeN ? +(edgeBright / edgeN).toFixed(4) : 0,
        cornerDense: +cornerDense.toFixed(4),
        defaultSized: canvas.width === 300 && canvas.height === 150,
        styleOverflowH,
        styleOverflowW,
        slotMismatch,
        readErr,
      };
    });
  });
}

/**
 * Find overlapping DOM labels/text in the active panel.
 * Ignores nested parent/child pairs and decorative empty nodes.
 * @param {import('@playwright/test').Page} page
 */
async function measureLabelOverlaps(page) {
  return page.evaluate(() => {
    function shown(el) {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden' || Number(s.opacity) === 0) return false;
      const r = el.getBoundingClientRect();
      return r.width > 2 && r.height > 2;
    }

    const panel =
      [...document.querySelectorAll(
        '.panel.active, .workspace.active, .tab-panel.active, [data-role="panel"].active'
      )].find(shown) ||
      [...document.querySelectorAll('.panel, .workspace, .tab-panel')].find(shown) ||
      document.body;

    const SELECTORS = [
      'label',
      '.section-lbl',
      '.val-disp',
      '.hint',
      '.plbl',
      '.panel-labels > *',
      '.info-box',
      '.info-bar > *',
      '.callout',
      '.eq-title',
      '.stat',
      '[class*="label"]',
      '.main-area > div',
      '.canvas-wrap > div',
      '.sidebar .vrow',
    ].join(',');

    const nodes = [...panel.querySelectorAll(SELECTORS)].filter((el) => {
      if (!shown(el)) return false;
      const t = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
      if (t.length < 1) return false;
      // Skip pure containers that only wrap inputs
      if (el.matches('label') && el.querySelector('input,select,textarea') && t.length < 2) {
        return false;
      }
      return true;
    });

    // Deduplicate by taking leaf-most elements when nested
    const items = nodes
      .map((el) => {
        const r = el.getBoundingClientRect();
        const text = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60);
        return {
          el,
          text,
          tag: el.tagName.toLowerCase(),
          cls: (el.className && String(el.className).slice(0, 40)) || '',
          x: r.left,
          y: r.top,
          w: r.width,
          h: r.height,
          right: r.right,
          bottom: r.bottom,
        };
      })
      .filter((a) => a.w * a.h < 120000); // skip huge blocks

    function intersects(a, b) {
      const ix = Math.max(0, Math.min(a.right, b.right) - Math.max(a.x, b.x));
      const iy = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.y, b.y));
      return ix * iy;
    }

    const overlaps = [];
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const a = items[i];
        const b = items[j];
        // Nested: one contains the other → not a layout bug
        if (a.el.contains(b.el) || b.el.contains(a.el)) continue;
        const area = intersects(a, b);
        if (area < 24) continue;
        const minArea = Math.min(a.w * a.h, b.w * b.h);
        const ratio = minArea > 0 ? area / minArea : 0;
        // Require meaningful overlap of the smaller label
        if (ratio < 0.18 && area < 80) continue;
        overlaps.push({
          a: { text: a.text, tag: a.tag, cls: a.cls, box: [+a.x.toFixed(0), +a.y.toFixed(0), +a.w.toFixed(0), +a.h.toFixed(0)] },
          b: { text: b.text, tag: b.tag, cls: b.cls, box: [+b.x.toFixed(0), +b.y.toFixed(0), +b.w.toFixed(0), +b.h.toFixed(0)] },
          area: +area.toFixed(1),
          ratio: +ratio.toFixed(3),
        });
      }
    }

    // Labels that overflow the main canvas / wrap
    const wrap =
      panel.querySelector('.main-area, .canvas-wrap, .panel-main-row') || panel;
    const wr = wrap.getBoundingClientRect();
    const outOfMain = [];
    for (const it of items) {
      // only check overlays near the canvas area
      if (!it.el.closest('.main-area, .canvas-wrap, .canvas-slot, .panel-labels')) continue;
      if (
        it.right > wr.right + 4 ||
        it.bottom > wr.bottom + 4 ||
        it.x < wr.left - 4 ||
        it.y < wr.top - 4
      ) {
        outOfMain.push({
          text: it.text,
          cls: it.cls,
          box: [+it.x.toFixed(0), +it.y.toFixed(0), +it.w.toFixed(0), +it.h.toFixed(0)],
        });
      }
    }

    return {
      labelCount: items.length,
      overlaps: overlaps.slice(0, 40),
      overlapCount: overlaps.length,
      outOfMain: outOfMain.slice(0, 20),
      outOfMainCount: outOfMain.length,
    };
  });
}

/**
 * Classify multi-canvas fit + label overlap results.
 * @returns {{ hard: string[], soft: string[] }}
 */
function classifyFitAndLabels(canvases, labels, { tabLabel = '' } = {}) {
  const hard = [];
  const soft = [];
  const p = tabLabel ? `[${tabLabel}] ` : '';

  if (!canvases || !canvases.length) {
    soft.push(p + 'no canvases in active panel');
    return { hard, soft };
  }

  for (const c of canvases) {
    const id = c.id || `canvas[${c.index}]`;
    if (c.defaultSized && c.css.w >= 200) {
      hard.push(p + `${id}: default 300×150 while CSS ${c.css.w}×${c.css.h}`);
    }
    if (c.css.w >= 200 && c.css.h >= 100 && (c.buf.w < 80 || c.buf.h < 50)) {
      hard.push(p + `${id}: buffer ${c.buf.w}×${c.buf.h} too small for CSS ${c.css.w}×${c.css.h}`);
    }
    if (c.styleOverflowH || c.styleOverflowW) {
      hard.push(
        p +
          `${id}: style size ${c.style.w}×${c.style.h} overflows visible ${c.css.w}×${c.css.h} (wrong parent resize)`
      );
    }
    if (c.dprX > 0 && c.css.w > 40 && (c.dprX < 0.4 || c.dprX > 4.5 || c.dprY < 0.4 || c.dprY > 4.5)) {
      hard.push(p + `${id}: buf/css ratio dpr=${c.dprX}×${c.dprY}`);
    }
    // Aspect mismatch → drawing coordinate system wrong / stretched
    if (c.aspectDelta > 0.35 && c.css.w > 100 && c.css.h > 80) {
      soft.push(
        p +
          `${id}: aspect mismatch css ${c.css.w}×${c.css.h} vs buf ${c.buf.w}×${c.buf.h} (Δln=${c.aspectDelta})`
      );
    }
    if (c.edgeBrightRatio > 0.4) {
      soft.push(p + `${id}: high edge paint ${c.edgeBrightRatio} (content may overflow canvas)`);
    }
    if (c.cornerDense > 0.55) {
      soft.push(
        p +
          `${id}: dense corners ${c.cornerDense} (possible stacked canvas labels)`
      );
    }
    if (!c.hasContent && c.buf.w > 50 && !c.defaultSized) {
      soft.push(p + `${id}: sparse/blank fill=${c.fillRatio}`);
    }
  }

  if (labels) {
    // Hard if many severe overlaps in the main view
    const severe = (labels.overlaps || []).filter((o) => o.ratio >= 0.35 || o.area >= 200);
    if (severe.length >= 3) {
      hard.push(
        p +
          `${severe.length} severe DOM label overlaps (e.g. "${severe[0].a.text}" ∩ "${severe[0].b.text}")`
      );
    } else if (severe.length > 0) {
      soft.push(
        p +
          `${severe.length} label overlap(s): "${severe[0].a.text}" ∩ "${severe[0].b.text}"`
      );
    } else if (labels.overlapCount > 0) {
      soft.push(p + `${labels.overlapCount} mild label overlap(s)`);
    }

    if (labels.outOfMainCount > 0) {
      soft.push(
        p +
          `${labels.outOfMainCount} label(s) outside main view (e.g. "${(labels.outOfMain[0] || {}).text}")`
      );
    }
  }

  return { hard, soft };
}

module.exports = {
  measureActiveCanvas,
  classifyCanvasMeasure,
  waitFrames,
  tryKickDraw,
  timeDrawFns,
  measureAllCanvases,
  measureLabelOverlaps,
  classifyFitAndLabels,
};
