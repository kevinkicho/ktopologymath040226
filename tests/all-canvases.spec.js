/**
 * all-canvases.spec.js — exhaustive hard guard
 *
 * For every numbered module HTML file:
 *   1. Load without ReferenceError / TypeError
 *   2. Click every visible tab
 *   3. Measure EVERY canvas in the active panel (not just the first)
 *   4. Hard-fail if any such canvas is:
 *      - zero CSS size while its active panel is shown
 *      - stuck at default bitmap 300×150 while CSS is large
 *      - fully blank (no non-background samples) after settle + one kick
 *      - throws on tab switch
 *
 * Text-only tabs (no canvas) are OK.
 * Hidden canvases in inactive panels are ignored.
 *
 * Run:
 *   npm run test:all-canvases
 *   MODULE_FILTER=62 npm run test:all-canvases
 *   npx playwright test tests/all-canvases.spec.js -g "54_trapped"
 */

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FILTER = process.env.MODULE_FILTER || '';
const REPORT_PATH = path.join(__dirname, 'all-canvases-report.json');
const REPORT_DIR = path.join(__dirname, 'all-canvases-parts');

const ALL_MODULES = fs
  .readdirSync(ROOT)
  .filter((f) => /^\d{2}_.*\.html$/.test(f))
  .sort();

const modules = FILTER
  ? ALL_MODULES.filter((m) => m.includes(FILTER))
  : ALL_MODULES;

try {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
} catch (_) {
  /* ok */
}
if (process.env.PW_TEST_WORKER_INDEX === '0' || process.env.PW_TEST_WORKER_INDEX === undefined) {
  try {
    for (const f of fs.readdirSync(REPORT_DIR)) {
      if (f.endsWith('.json')) fs.unlinkSync(path.join(REPORT_DIR, f));
    }
  } catch (_) {
    /* ok */
  }
}

function writeShard(mod, payload) {
  const safe = mod.replace(/[^\w.-]+/g, '_');
  fs.writeFileSync(path.join(REPORT_DIR, safe + '.json'), JSON.stringify(payload, null, 2));
}

function mergeReports() {
  try {
    const shards = fs
      .readdirSync(REPORT_DIR)
      .filter((f) => f.endsWith('.json'))
      .map((f) => JSON.parse(fs.readFileSync(path.join(REPORT_DIR, f), 'utf8')));
    const report = {
      generatedAt: new Date().toISOString(),
      modules: shards.length,
      hardTotal: shards.reduce((a, s) => a + (s.hard || []).length, 0),
      canvasChecked: shards.reduce((a, s) => a + (s.canvasChecked || 0), 0),
      tabsVisited: shards.reduce((a, s) => a + (s.tabsVisited || 0), 0),
      shards: shards
        .map((s) => ({
          module: s.module,
          tabsVisited: s.tabsVisited,
          canvasChecked: s.canvasChecked,
          hard: s.hard,
          soft: s.soft,
        }))
        .sort((a, b) => a.module.localeCompare(b.module)),
    };
    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
    return report;
  } catch (e) {
    return null;
  }
}

/** Measure every canvas belonging to the active tab panel. */
async function measureAllActiveCanvases(page) {
  return page.evaluate(() => {
    function shown(el) {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden' || Number(s.opacity) === 0) {
        return false;
      }
      const r = el.getBoundingClientRect();
      return r.width > 0.5 && r.height > 0.5;
    }

    function isBg(r, g, b, a) {
      if (a < 10) return true;
      // Dark theme backgrounds across modules
      return r < 28 && g < 28 && b < 45;
    }

    // Active panel selectors (includes .pane used by 62_adscft)
    const activeSel =
      '.panel.active, .pane.active, .workspace.active, .tab-panel.active, [data-role="panel"].active, [role="tabpanel"].active';
    let panel =
      [...document.querySelectorAll(activeSel)].find((p) => {
        // Prefer panels that claim to be active even if size is 0 (nesting bug)
        return p.classList.contains('active') || p.getAttribute('aria-hidden') === 'false';
      }) || null;

    if (!panel) {
      panel =
        [...document.querySelectorAll(
          '.panel, .pane, .workspace, .tab-panel, [data-role="panel"], [role="tabpanel"]'
        )].find(shown) || null;
    }

    // Nested inactive tab panels inside active panel = HTML nesting bug (like dS / homotopy)
    const nestedInactive = [];
    if (panel) {
      panel
        .querySelectorAll(
          '.panel, .pane, .workspace, .tab-panel, [data-role="panel"], [role="tabpanel"]'
        )
        .forEach((p) => {
          if (p === panel) return;
          // A sibling panel wrongly parented under this one
          if (
            !p.classList.contains('active') ||
            getComputedStyle(p).display === 'none'
          ) {
            nestedInactive.push(p.id || p.className.slice(0, 30));
          }
        });
    }

    // Collect canvases belonging to THIS panel only (not nested inactive tab panels)
    function underNestedInactive(canvas) {
      let el = canvas.parentElement;
      while (el && el !== panel) {
        if (
          el.matches &&
          el.matches(
            '.panel, .pane, .workspace, .tab-panel, [data-role="panel"], [role="tabpanel"]'
          )
        ) {
          return true;
        }
        el = el.parentElement;
      }
      return false;
    }

    let canvases = [];
    if (panel) {
      canvases = [...panel.querySelectorAll('canvas')].filter((c) => !underNestedInactive(c));
    } else {
      canvases = [...document.querySelectorAll('canvas')].filter(
        (c) => shown(c) || (c.width > 0 && c.height > 0)
      );
    }

    const panelRect = panel ? panel.getBoundingClientRect() : null;
    const panelShown = panel ? shown(panel) || panel.classList.contains('active') : false;
    const panelSize = panelRect
      ? { w: panelRect.width, h: panelRect.height }
      : { w: 0, h: 0 };

    return {
      panelId: (panel && (panel.id || panel.getAttribute('data-role'))) || '',
      panelClass: panel ? String(panel.className).slice(0, 80) : '',
      panelParent:
        panel && panel.parentElement
          ? panel.parentElement.id || String(panel.parentElement.className).slice(0, 40)
          : '',
      panelSize,
      panelShown,
      nestedInactive,
      count: canvases.length,
      canvases: canvases.map((canvas, index) => {
        const cr = canvas.getBoundingClientRect();
        const cssW = cr.width;
        const cssH = cr.height;
        const bufW = canvas.width;
        const bufH = canvas.height;
        const id = canvas.id || `canvas[${index}]`;
        const aria = canvas.getAttribute('aria-label') || '';

        // Ancestor chain: detect nested-in-hidden-parent (0×0 while "active")
        let nestedUnderHidden = false;
        let ancestor = canvas.parentElement;
        while (ancestor && ancestor !== document.body) {
          const s = getComputedStyle(ancestor);
          if (s.display === 'none') {
            nestedUnderHidden = true;
            break;
          }
          ancestor = ancestor.parentElement;
        }

        let nonBg = 0;
        let samples = 0;
        const colors = new Set();
        let readErr = null;
        let hasWebGL = false;

        try {
          if (canvas.getContext('webgl') || canvas.getContext('webgl2')) {
            hasWebGL = true;
          }
        } catch (_) {
          /* ignore */
        }

        try {
          if (bufW > 2 && bufH > 2) {
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (ctx) {
              // Dense stride sample so sparse line drawings (Feynman, geodesics) still hit
              const stride = Math.max(1, Math.floor(Math.min(bufW, bufH) / 96));
              for (let y = 0; y < bufH; y += stride) {
                for (let x = 0; x < bufW; x += stride) {
                  const d = ctx.getImageData(x, y, 1, 1).data;
                  samples++;
                  colors.add(d[0] + ',' + d[1] + ',' + d[2]);
                  if (!isBg(d[0], d[1], d[2], d[3])) nonBg++;
                }
              }
            }
          }
        } catch (e) {
          readErr = String(e && e.message ? e.message : e);
        }

        const fillRatio = samples > 0 ? nonBg / samples : 0;
        const defaultSized = bufW === 300 && bufH === 150;
        const cssLarge = cssW >= 200 && cssH >= 120;

        return {
          index,
          id,
          aria: aria.slice(0, 60),
          cssW: Math.round(cssW),
          cssH: Math.round(cssH),
          bufW,
          bufH,
          defaultSized,
          cssLarge,
          fillRatio: Math.round(fillRatio * 10000) / 10000,
          uniqueColors: colors.size,
          nonBg,
          samples,
          nestedUnderHidden,
          hasWebGL,
          readErr,
          zeroCss: cssW < 2 || cssH < 2,
          zeroBuf: bufW < 2 || bufH < 2,
        };
      }),
    };
  });
}

async function tryKickDraw(page) {
  return page.evaluate(() => {
    const kicks = [
      'redrawTab',
      'drawTab',
      'draw',
      'redraw',
      'render',
      'paint',
      'update',
      'startAnim',
      'resume',
    ];
    const tried = [];
    for (const name of kicks) {
      try {
        if (typeof window[name] === 'function') {
          window[name]();
          tried.push(name + '()');
        }
      } catch (_) {
        /* ignore */
      }
    }
    // Common per-tab draw names
    for (let i = 0; i < 20; i++) {
      const fn = window['drawTab' + i] || window['draw' + i];
      try {
        if (typeof fn === 'function') {
          fn();
          tried.push('drawTab' + i);
        }
      } catch (_) {
        /* ignore */
      }
    }
    // Click a visible Run / Play if present
    const btns = [...document.querySelectorAll('button, .btn')];
    const re = /^(run|play|start|animate|▶)/i;
    for (const b of btns) {
      const t = (b.textContent || '').trim();
      if (re.test(t) && b.offsetParent !== null) {
        try {
          b.click();
          tried.push('click:' + t.slice(0, 20));
          break;
        } catch (_) {
          /* ignore */
        }
      }
    }
    return tried;
  });
}

function classifyCanvas(c, { mod, tabName, panel }) {
  const hard = [];
  const soft = [];
  const label = `${mod} · ${tabName} · #${c.id}`;

  // Nesting / 0×0 while tab claims active — the dS / ion-network failure mode
  if (c.nestedUnderHidden || (c.zeroCss && panel && panel.panelClass && /active/.test(panel.panelClass))) {
    hard.push(
      `[${label}] zero-size or nested under display:none (css ${c.cssW}×${c.cssH}, parent=${panel.panelParent})`
    );
    return { hard, soft };
  }

  if (c.zeroCss && c.zeroBuf) {
    hard.push(`[${label}] zero CSS and buffer size`);
    return { hard, soft };
  }

  if (c.zeroCss) {
    hard.push(`[${label}] zero CSS size ${c.cssW}×${c.cssH} (buf ${c.bufW}×${c.bufH})`);
  }

  // Default bitmap while layout is large — resize never ran
  if (c.defaultSized && c.cssLarge) {
    hard.push(
      `[${label}] stuck at default 300×150 while CSS is ${c.cssW}×${c.cssH}`
    );
  }

  // Fully blank 2d canvas: no non-bg pixels in dense sample AND almost no color variety.
  // Sparse line art can have very low fillRatio but many uniqueColors / some nonBg hits.
  if (
    !c.hasWebGL &&
    !c.readErr &&
    c.samples > 50 &&
    c.nonBg === 0 &&
    c.uniqueColors <= 2 &&
    c.cssLarge
  ) {
    hard.push(
      `[${label}] blank canvas fill=${c.fillRatio} colors=${c.uniqueColors} nonBg=${c.nonBg}/${c.samples} buf=${c.bufW}×${c.bufH}`
    );
  } else if (c.readErr && !c.hasWebGL) {
    soft.push(`[${label}] pixel read error: ${c.readErr}`);
  } else if (c.hasWebGL && c.nonBg === 0) {
    soft.push(`[${label}] WebGL canvas (2d sample empty — not hard-failed)`);
  }

  // Tiny buffer on a large slot
  if (!c.zeroBuf && c.bufW > 0 && c.bufH > 0 && c.cssLarge) {
    const ratio = Math.min(c.bufW / Math.max(c.cssW, 1), c.bufH / Math.max(c.cssH, 1));
    if (ratio < 0.25 && !c.defaultSized) {
      soft.push(`[${label}] buffer much smaller than CSS (ratio=${ratio.toFixed(2)})`);
    }
  }

  return { hard, soft };
}

for (const mod of modules) {
  test.describe(mod, () => {
    test('every tab · every canvas: size + paint', async ({ page }) => {
      test.setTimeout(240000);

      const pageErrors = [];
      page.on('pageerror', (err) => {
        pageErrors.push(err.message || String(err));
      });

      await page.goto(`/${mod}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(800);

      const loadErrors = pageErrors.filter((msg) =>
        /ReferenceError|TypeError|is not defined|is not a function|Cannot read/i.test(msg)
      );
      expect(loadErrors, `pageerror on load of ${mod}:\n${loadErrors.join('\n')}`).toEqual([]);

      const tabLocator = page.locator('.tab, .tab-btn, [role="tab"]');
      const tabCount = await tabLocator.count();
      const n = Math.max(tabCount, 1);

      const allHard = [];
      const allSoft = [];
      let tabsVisited = 0;
      let canvasChecked = 0;
      const tabDetails = [];

      for (let i = 0; i < n; i++) {
        pageErrors.length = 0;
        let tabName = `tab[${i}]`;

        if (tabCount > 0) {
          const tab = tabLocator.nth(i);
          const visible = await tab.isVisible().catch(() => false);
          if (!visible) {
            tabDetails.push({ index: i, skipped: true, reason: 'hidden-tab' });
            continue;
          }
          tabName = ((await tab.textContent().catch(() => '')) || tabName)
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 48);
          await tab.click({ timeout: 5000 }).catch(() => {});
        } else {
          await page
            .evaluate((idx) => {
              if (typeof switchTab === 'function') {
                try {
                  switchTab(idx);
                } catch (_) {
                  try {
                    switchTab(String(idx));
                  } catch (__) {
                    /* ignore */
                  }
                }
              }
            }, i)
            .catch(() => {});
        }

        // Double-rAF + settle for flex layout / deferred start
        await page.evaluate(
          () =>
            new Promise((r) =>
              requestAnimationFrame(() => requestAnimationFrame(() => r()))
            )
        );
        await page.waitForTimeout(750);

        const switchErrors = pageErrors.filter((msg) =>
          /ReferenceError|TypeError|is not defined|is not a function|Cannot read/i.test(msg)
        );
        expect(
          switchErrors,
          `${mod} ${tabName} pageerror:\n${switchErrors.join('\n')}`
        ).toEqual([]);

        tabsVisited++;
        let measure = await measureAllActiveCanvases(page);

        // Nested inactive panels under active panel = structural HTML bug
        if (measure.nestedInactive && measure.nestedInactive.length) {
          allHard.push(
            `[${mod} · ${tabName}] nested inactive panels under active #${measure.panelId}: ${measure.nestedInactive.slice(0, 8).join(', ')}`
          );
        }

        // No canvases → text-only tab, OK
        if (!measure.count) {
          tabDetails.push({
            index: i,
            name: tabName,
            noCanvas: true,
            panelId: measure.panelId,
            nestedInactive: measure.nestedInactive,
          });
          continue;
        }

        // If any blank / zero, kick once and remeasure
        const needsKick = measure.canvases.some(
          (c) =>
            c.zeroCss ||
            c.nestedUnderHidden ||
            (c.defaultSized && c.cssLarge) ||
            (c.samples > 0 && c.nonBg === 0 && !c.hasWebGL)
        );
        if (needsKick) {
          await tryKickDraw(page);
          await page.evaluate(
            () =>
              new Promise((r) =>
                requestAnimationFrame(() => requestAnimationFrame(() => r()))
              )
          );
          await page.waitForTimeout(700);
          measure = await measureAllActiveCanvases(page);
        }

        const canvasHard = [];
        const canvasSoft = [];
        for (const c of measure.canvases) {
          canvasChecked++;
          const { hard, soft } = classifyCanvas(c, {
            mod,
            tabName,
            panel: measure,
          });
          canvasHard.push(...hard);
          canvasSoft.push(...soft);
        }

        if (canvasHard.length) allHard.push(...canvasHard);
        if (canvasSoft.length) allSoft.push(...canvasSoft);

        tabDetails.push({
          index: i,
          name: tabName,
          panelId: measure.panelId,
          panelParent: measure.panelParent,
          canvasCount: measure.count,
          hard: canvasHard,
          soft: canvasSoft,
          canvases: measure.canvases.map((c) => ({
            id: c.id,
            css: `${c.cssW}x${c.cssH}`,
            buf: `${c.bufW}x${c.bufH}`,
            fill: c.fillRatio,
            colors: c.uniqueColors,
          })),
        });
      }

      writeShard(mod, {
        module: mod,
        tabsVisited,
        canvasChecked,
        hard: allHard,
        soft: allSoft,
        tabs: tabDetails,
      });

      expect(
        allHard,
        `${mod}: ${allHard.length} hard canvas failure(s):\n${allHard.slice(0, 20).join('\n')}`
      ).toEqual([]);
    });
  });
}

test('=== ALL-CANVASES SUMMARY ===', async () => {
  const report = mergeReports();
  expect(report, 'report written').toBeTruthy();
  // eslint-disable-next-line no-console
  console.log(
    `\nALL-CANVASES: modules=${report.modules} tabs=${report.tabsVisited} canvases=${report.canvasChecked} hard=${report.hardTotal}`
  );
  if (report.hardTotal > 0) {
    const tops = report.shards
      .filter((s) => s.hard && s.hard.length)
      .flatMap((s) => s.hard.map((h) => `  ${s.module}: ${h}`))
      .slice(0, 30);
    // eslint-disable-next-line no-console
    console.log('Hard failures:\n' + tops.join('\n'));
  }
  // Summary test does not re-fail — per-module tests already failed hard items
});
