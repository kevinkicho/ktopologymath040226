/**
 * canvas-layout.spec.js — hard + soft guards for canvas fit / blank / resize
 *
 * Hard fails (assert):
 *   1. pageerror (ReferenceError / TypeError / is not a function) on load or tab switch
 *   2. Canvas stuck at default 300×150 while CSS is large
 *   3. Wrap / CSS canvas tiny on a tab that has a canvas
 *   4. Buffer tiny relative to CSS (resize failed)
 *   5. Canvas wrap < ~28% of wide panel with 2 sidebars (stacked layout collapse)
 *   6. buf/css DPR ratio insane
 *
 * Soft report (tests/canvas-layout-report.json + shards):
 *   - likely blank fillRatio (may need Run click)
 *   - high edge-bright ratio (possible drawing overflow)
 *   - sidebars not row-aligned
 *   - slow draw fn when discoverable
 *
 * Run:
 *   npm run test:layout
 *   MODULE_FILTER=12 npm run test:layout
 *   npx playwright test tests/canvas-layout.spec.js -g "03_mandelbrot"
 */

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const {
  measureActiveCanvas,
  classifyCanvasMeasure,
  waitFrames,
  tryKickDraw,
  timeDrawFns,
} = require('./helpers/canvas-layout');

const ROOT = path.join(__dirname, '..');
const FILTER = process.env.MODULE_FILTER || '';
const REPORT_PATH = path.join(__dirname, 'canvas-layout-report.json');
const REPORT_DIR = path.join(__dirname, 'canvas-layout-parts');

const ALL_MODULES = fs
  .readdirSync(ROOT)
  .filter((f) => /^\d{2}_.*\.html$/.test(f))
  .sort();

const modules = FILTER
  ? ALL_MODULES.filter((m) => m.includes(FILTER))
  : ALL_MODULES;

// Parallel workers write shards; merge not required for CI hard-fail path
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

/** Draw names to time if present on window (soft perf). */
const DRAW_CANDIDATES = [
  'drawStructure',
  'draw7',
  'draw6',
  'draw5',
  'draw0',
  'redrawBRST',
  'redrawGH',
  'redrawGF',
  'mwDraw',
  'piDraw',
  'drawFT',
];

function writeShard(mod, payload) {
  const safe = mod.replace(/[^\w.-]+/g, '_');
  fs.writeFileSync(path.join(REPORT_DIR, safe + '.json'), JSON.stringify(payload, null, 2));
}

for (const mod of modules) {
  test.describe(mod, () => {
    test('canvas layout: size, resize, fit, paint', async ({ page }) => {
      test.setTimeout(180000);

      const pageErrors = [];
      page.on('pageerror', (err) => {
        pageErrors.push(err.message || String(err));
      });

      await page.goto(`/${mod}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(900);

      const loadErrors = pageErrors.filter((msg) =>
        /ReferenceError|TypeError|is not defined|is not a function|Cannot read/i.test(msg)
      );
      expect(loadErrors, `pageerror on load of ${mod}:\n${loadErrors.join('\n')}`).toEqual([]);

      const tabLocator = page.locator('.tab, .tab-btn, [role="tab"]');
      const tabCount = await tabLocator.count();
      const n = Math.max(tabCount, 1);

      const tabReports = [];
      const allHard = [];

      for (let i = 0; i < n; i++) {
        pageErrors.length = 0;
        let tabName = `tab[${i}]`;

        if (tabCount > 0) {
          const tab = tabLocator.nth(i);
          if (!(await tab.isVisible().catch(() => false))) {
            tabReports.push({ index: i, skipped: true, reason: 'hidden-tab' });
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

        await waitFrames(page, 2);
        await page.waitForTimeout(450);

        // One extra redraw hook used by some modules
        await page
          .evaluate(() => {
            try {
              if (typeof redrawTab === 'function') redrawTab();
            } catch (_) {
              /* ignore */
            }
          })
          .catch(() => {});

        let m = await measureActiveCanvas(page);

        // If blank-looking, try kick + remeasure once
        let kicked = null;
        if (m.ok && m.fillRatio < 0.01 && !m.defaultSized) {
          kicked = await tryKickDraw(page);
          if (kicked && kicked.clicked) {
            await page.waitForTimeout(600);
            await waitFrames(page, 2);
            m = await measureActiveCanvas(page);
          }
        }

        const switchErrors = pageErrors.filter((msg) =>
          /ReferenceError|TypeError|is not defined|is not a function|Cannot read/i.test(msg)
        );
        expect(
          switchErrors,
          `${mod} ${tabName} pageerror:\n${switchErrors.join('\n')}`
        ).toEqual([]);

        // No canvas tabs are fine
        if (!m.ok && m.reason === 'no-canvas') {
          tabReports.push({
            index: i,
            name: tabName,
            noCanvas: true,
          });
          continue;
        }

        const label = `${mod} · ${tabName}`;
        const { hard, soft } = classifyCanvasMeasure(m, { tabLabel: label });

        // Soft: time a draw if available (first tab only or when blank recovery)
        let drawTiming = null;
        if (i === 0 || (m.ok && m.fillRatio < 0.02)) {
          drawTiming = await timeDrawFns(page, DRAW_CANDIDATES);
          if (drawTiming && drawTiming.ms > 250) {
            soft.push(
              `[${label}] slow draw ${drawTiming.name}=${drawTiming.ms}ms`
            );
          }
        }

        if (hard.length) {
          allHard.push(...hard);
        }

        tabReports.push({
          index: i,
          name: tabName,
          measure: m,
          hard,
          soft,
          kicked,
          drawTiming,
        });
      }

      // Aggregate: at least one canvas tab should exist on most modules; don't require it
      const canvasTabs = tabReports.filter((t) => t.measure && t.measure.ok);
      if (canvasTabs.length > 0) {
        // Hard fail if ANY tab had hard layout issues
        expect(
          allHard,
          `${mod} canvas layout hard failures:\n${allHard.slice(0, 12).join('\n')}`
        ).toEqual([]);

        // Module-level: majority of canvas tabs must not be default-sized
        const defaultCount = canvasTabs.filter((t) => t.measure.defaultSized).length;
        expect(
          defaultCount,
          `${mod}: ${defaultCount}/${canvasTabs.length} tabs still default 300×150`
        ).toBe(0);
      }

      const softAll = tabReports.flatMap((t) => t.soft || []);
      writeShard(mod, {
        module: mod,
        at: new Date().toISOString(),
        tabs: tabReports.length,
        canvasTabs: canvasTabs.length,
        hard: allHard,
        soft: softAll,
        details: tabReports,
      });

      // Also refresh merged report best-effort (last writer wins is ok for local)
      try {
        const shards = fs
          .readdirSync(REPORT_DIR)
          .filter((f) => f.endsWith('.json'))
          .map((f) => JSON.parse(fs.readFileSync(path.join(REPORT_DIR, f), 'utf8')));
        const merged = {
          generatedAt: new Date().toISOString(),
          modules: shards.length,
          hardTotal: shards.reduce((a, s) => a + (s.hard || []).length, 0),
          softTotal: shards.reduce((a, s) => a + (s.soft || []).length, 0),
          shards: shards.map((s) => ({
            module: s.module,
            canvasTabs: s.canvasTabs,
            hard: s.hard,
            soft: s.soft,
          })),
        };
        fs.writeFileSync(REPORT_PATH, JSON.stringify(merged, null, 2));
      } catch (_) {
        /* ignore merge races */
      }
    });
  });
}

// Focused regression for bugs fixed in recent sessions
test.describe('layout regression pins', () => {
  test('12_gauge_theory BRST–Gauge-Fixing not default-sized / not blank', async ({ page }) => {
    test.setTimeout(90000);
    const errs = [];
    page.on('pageerror', (e) => errs.push(e.message));
    await page.goto('/12_gauge_theory.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);

    for (let i = 8; i <= 14; i++) {
      errs.length = 0;
      await page.evaluate((n) => {
        if (typeof switchTab === 'function') switchTab(n);
      }, i);
      await waitFrames(page, 2);
      await page.waitForTimeout(500);
      // Force the tab redraw in case RAF loop lost a race
      await page.evaluate((n) => {
        const map = {
          8: 'redrawBRST',
          9: 'redrawGH',
          10: 'redrawREN',
          11: 'redrawEA',
          12: 'redrawSM',
          13: 'redrawWI',
          14: 'redrawGF',
        };
        const fn = window[map[n]];
        if (typeof fn === 'function') fn();
      }, i);
      await waitFrames(page, 1);
      const m = await measureActiveCanvas(page);
      expect(errs.filter((e) => /is not a function|ReferenceError|TypeError/i.test(e))).toEqual(
        []
      );
      expect(m.ok, `tab ${i} measure`).toBe(true);
      expect(m.defaultSized, `tab ${i} default size`).toBe(false);
      expect(m.canvasBuf.w, `tab ${i} buf w`).toBeGreaterThan(400);
      // Geometry is the regression (was 300×150 blank). Paint can be sparse line art.
      expect(
        m.hasContent || m.fillRatio > 0.002 || m.uniqueColors >= 2,
        `tab ${i} no content fill=${m.fillRatio} colors=${m.uniqueColors} buf=${m.canvasBuf.w}x${m.canvasBuf.h}`
      ).toBe(true);
    }
  });

  test('22_path_integrals WKB canvas fits without default size', async ({ page }) => {
    test.setTimeout(60000);
    const errs = [];
    page.on('pageerror', (e) => errs.push(e.message));
    await page.goto('/22_path_integrals.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(600);
    await page.evaluate(() => {
      if (typeof switchTab === 'function') switchTab(7);
    });
    await waitFrames(page, 2);
    await page.waitForTimeout(400);
    // Force draw
    await page.evaluate(() => {
      if (typeof draw7 === 'function') draw7();
    });
    const m = await measureActiveCanvas(page);
    expect(errs.filter((e) => /ReferenceError|TypeError/i.test(e))).toEqual([]);
    expect(m.ok).toBe(true);
    expect(m.defaultSized).toBe(false);
    expect(m.canvasCss.h).toBeGreaterThanOrEqual(400);
    expect(m.fillRatio).toBeGreaterThan(0.01);
  });

  test('13_cosmology structure formation canvas sized and draws', async ({ page }) => {
    test.setTimeout(60000);
    const errs = [];
    page.on('pageerror', (e) => errs.push(e.message));
    await page.goto('/13_cosmology.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);
    await page.evaluate(() => {
      if (typeof switchTab === 'function') switchTab(8);
    });
    await waitFrames(page, 2);
    await page.waitForTimeout(500);
    const timing = await page.evaluate(() => {
      if (typeof drawStructure !== 'function') return { ms: 0, missing: true };
      const t0 = performance.now();
      drawStructure();
      return { ms: performance.now() - t0 };
    });
    const m = await measureActiveCanvas(page);
    expect(errs.filter((e) => /ReferenceError|TypeError/i.test(e))).toEqual([]);
    expect(m.ok).toBe(true);
    expect(m.defaultSized).toBe(false);
    expect(m.canvasBuf.w).toBeGreaterThan(400);
    if (!timing.missing) {
      expect(timing.ms, `drawStructure took ${timing.ms}ms`).toBeLessThan(400);
    }
    expect(m.fillRatio).toBeGreaterThan(0.01);
  });

  test('20_thermodynamics fluctuation theorem draws inside canvas', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('/20_thermodynamics.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(600);
    await page.evaluate(() => {
      if (typeof switchTab === 'function') switchTab(7);
    });
    await waitFrames(page, 2);
    await page.waitForTimeout(300);
    await page.evaluate(() => {
      if (typeof updateFT === 'function') updateFT();
      if (typeof runFTTrajectories === 'function') runFTTrajectories();
      if (typeof draw7 === 'function') draw7();
    });
    const m = await measureActiveCanvas(page);
    expect(m.ok).toBe(true);
    expect(m.defaultSized).toBe(false);
    expect(m.canvasBuf.w).toBeGreaterThan(300);
    expect(m.fillRatio).toBeGreaterThan(0.02);
    // Soft-ish: edge not completely painted (overflow)
    expect(m.edgeBrightRatio).toBeLessThan(0.5);
  });
});
