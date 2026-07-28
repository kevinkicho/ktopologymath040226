/**
 * canvas-fit-and-labels.spec.js
 *
 * Diagnoses:
 *   A) Main-view contents not fitting the canvas
 *      - wrong parent resize (style ≫ visible CSS)
 *      - default 300×150 buffer
 *      - buffer/CSS mismatch, aspect stretch
 *      - edge-ring paint (drawing past canvas)
 *      - multi-canvas tabs (each slot measured)
 *
 *   B) Labels overlapping / hindering views
 *      - pairwise DOM label overlap in active panel
 *      - labels overflowing main-area / canvas-wrap
 *      - dense canvas corners (soft: stacked drawText labels)
 *
 * Hard fails: style overflow, default size, severe multi-label collisions,
 *             JS pageerrors on tab switch
 *
 * Soft report: tests/canvas-fit-labels-report.json (+ shards)
 *
 * Run:
 *   npm run test:fit
 *   npm run test:fit:pins
 *   MODULE_FILTER=10 npm run test:fit
 */

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const {
  waitFrames,
  tryKickDraw,
  measureAllCanvases,
  measureLabelOverlaps,
  classifyFitAndLabels,
} = require('./helpers/canvas-layout');

const ROOT = path.join(__dirname, '..');
const FILTER = process.env.MODULE_FILTER || '';
const REPORT_PATH = path.join(__dirname, 'canvas-fit-labels-report.json');
const REPORT_DIR = path.join(__dirname, 'canvas-fit-labels-parts');

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
    const merged = {
      generatedAt: new Date().toISOString(),
      modules: shards.length,
      hardTotal: shards.reduce((a, s) => a + (s.hard || []).length, 0),
      softTotal: shards.reduce((a, s) => a + (s.soft || []).length, 0),
      topHard: shards
        .flatMap((s) => (s.hard || []).map((h) => ({ module: s.module, msg: h })))
        .slice(0, 80),
      topSoft: shards
        .flatMap((s) => (s.soft || []).map((h) => ({ module: s.module, msg: h })))
        .slice(0, 120),
      shards: shards.map((s) => ({
        module: s.module,
        tabs: s.tabs,
        hard: s.hard,
        soft: s.soft,
        worstTabs: (s.details || [])
          .filter((d) => (d.hard && d.hard.length) || (d.soft && d.soft.length))
          .slice(0, 8)
          .map((d) => ({
            name: d.name,
            hard: d.hard,
            soft: d.soft,
            canvases: (d.canvases || []).map((c) => ({
              id: c.id,
              css: c.css,
              buf: c.buf,
              styleOverflowH: c.styleOverflowH,
              edge: c.edgeBrightRatio,
              cornerDense: c.cornerDense,
            })),
            labelOverlaps: d.labels && d.labels.overlapCount,
          })),
      })),
    };
    fs.writeFileSync(REPORT_PATH, JSON.stringify(merged, null, 2));
  } catch (_) {
    /* ignore merge races */
  }
}

for (const mod of modules) {
  test.describe(mod, () => {
    test('fit + labels: canvas content fits, DOM labels do not collide', async ({ page }) => {
      test.setTimeout(200000);

      const pageErrors = [];
      page.on('pageerror', (err) => {
        pageErrors.push(err.message || String(err));
      });

      await page.goto(`/${mod}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(800);

      const loadErrors = pageErrors.filter((msg) =>
        /ReferenceError|TypeError|is not defined|is not a function|Cannot read/i.test(msg)
      );
      expect(loadErrors, `pageerror on load ${mod}:\n${loadErrors.join('\n')}`).toEqual([]);

      const tabLocator = page.locator('.tab, .tab-btn, [role="tab"]');
      const tabCount = await tabLocator.count();
      const n = Math.max(tabCount, 1);

      const details = [];
      const allHard = [];
      const allSoft = [];

      for (let i = 0; i < n; i++) {
        pageErrors.length = 0;
        let tabName = `tab[${i}]`;

        if (tabCount > 0) {
          const tab = tabLocator.nth(i);
          if (!(await tab.isVisible().catch(() => false))) {
            details.push({ index: i, skipped: true, reason: 'hidden' });
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
        await page.waitForTimeout(400);

        // Optional kick for blank tabs
        let canvases = await measureAllCanvases(page);
        if (
          canvases.length &&
          canvases.every((c) => !c.hasContent || c.fillRatio < 0.01)
        ) {
          const kick = await tryKickDraw(page);
          if (kick && kick.clicked) {
            await page.waitForTimeout(500);
            await waitFrames(page, 2);
            canvases = await measureAllCanvases(page);
          }
        }

        const labels = await measureLabelOverlaps(page);
        const label = `${mod} · ${tabName}`;
        const { hard, soft } = classifyFitAndLabels(canvases, labels, { tabLabel: label });

        const switchErrors = pageErrors.filter((msg) =>
          /ReferenceError|TypeError|is not defined|is not a function|Cannot read/i.test(msg)
        );
        expect(
          switchErrors,
          `${label} pageerror:\n${switchErrors.join('\n')}`
        ).toEqual([]);

        if (hard.length) allHard.push(...hard);
        if (soft.length) allSoft.push(...soft);

        details.push({
          index: i,
          name: tabName,
          canvases,
          labels: {
            labelCount: labels.labelCount,
            overlapCount: labels.overlapCount,
            outOfMainCount: labels.outOfMainCount,
            overlaps: (labels.overlaps || []).slice(0, 8),
            outOfMain: (labels.outOfMain || []).slice(0, 5),
          },
          hard,
          soft,
        });
      }

      // Module hard-fail aggregate
      expect(
        allHard,
        `${mod} fit/label hard failures:\n${allHard.slice(0, 15).join('\n')}`
      ).toEqual([]);

      writeShard(mod, {
        module: mod,
        at: new Date().toISOString(),
        tabs: details.length,
        hard: allHard,
        soft: allSoft,
        details,
      });
      mergeReports();
    });
  });
}

// ── Focused pins for bugs we have seen ──────────────────────────────────────
test.describe('fit+labels regression pins', () => {
  test('10_lagrangian Poisson Brackets dual-canvas fits slots', async ({ page }) => {
    test.setTimeout(60000);
    const errs = [];
    page.on('pageerror', (e) => errs.push(e.message));
    await page.goto('/10_lagrangian.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(600);
    await page.evaluate(() => {
      if (typeof switchTab === 'function') switchTab(8);
    });
    await waitFrames(page, 3);
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      if (typeof pbDraw === 'function') pbDraw();
    });

    const canvases = await measureAllCanvases(page);
    const labels = await measureLabelOverlaps(page);
    const { hard } = classifyFitAndLabels(canvases, labels, {
      tabLabel: 'poisson',
    });

    expect(errs.filter((e) => /is not a function|ReferenceError|TypeError/i.test(e))).toEqual(
      []
    );
    expect(canvases.length, 'expected dual canvases').toBeGreaterThanOrEqual(2);

    for (const c of canvases) {
      expect(c.defaultSized, `${c.id} default sized`).toBe(false);
      expect(c.styleOverflowH, `${c.id} styleOverflowH`).toBe(false);
      expect(c.css.h, `${c.id} css height`).toBeGreaterThan(80);
      // Buffer CSS height should roughly match visible (allow DPR)
      const cssHFromBuf = c.buf.h / Math.max(0.5, c.dprY || 1);
      expect(
        Math.abs(cssHFromBuf - c.css.h) / Math.max(1, c.css.h),
        `${c.id} buf height ${c.buf.h} vs css ${c.css.h}`
      ).toBeLessThan(0.25);
    }

    expect(hard, hard.join('\n')).toEqual([]);
  });

  test('22_path_integrals WKB content stays in canvas bounds', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('/22_path_integrals.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      if (typeof switchTab === 'function') switchTab(7);
    });
    await waitFrames(page, 2);
    await page.evaluate(() => {
      if (typeof draw7 === 'function') draw7();
    });
    const canvases = await measureAllCanvases(page);
    expect(canvases.length).toBeGreaterThan(0);
    const c = canvases[0];
    expect(c.defaultSized).toBe(false);
    expect(c.styleOverflowH).toBe(false);
    expect(c.css.h).toBeGreaterThanOrEqual(400);
    expect(c.edgeBrightRatio).toBeLessThan(0.55);
  });

  test('20_thermodynamics fluctuation theorem fit', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('/20_thermodynamics.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      if (typeof switchTab === 'function') switchTab(7);
    });
    await waitFrames(page, 2);
    await page.evaluate(() => {
      if (typeof updateFT === 'function') updateFT();
      if (typeof runFTTrajectories === 'function') runFTTrajectories();
      if (typeof draw7 === 'function') draw7();
    });
    const canvases = await measureAllCanvases(page);
    const c = canvases[0];
    expect(c).toBeTruthy();
    expect(c.defaultSized).toBe(false);
    expect(c.hasContent).toBe(true);
    expect(c.edgeBrightRatio).toBeLessThan(0.5);
  });

  test('12_gauge BRST multi-tab no style overflow', async ({ page }) => {
    test.setTimeout(90000);
    await page.goto('/12_gauge_theory.html', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(700);
    for (let i = 8; i <= 14; i++) {
      await page.evaluate((n) => {
        if (typeof switchTab === 'function') switchTab(n);
      }, i);
      await waitFrames(page, 2);
      await page.waitForTimeout(250);
      const canvases = await measureAllCanvases(page);
      for (const c of canvases) {
        expect(c.defaultSized, `tab ${i} ${c.id}`).toBe(false);
        expect(c.styleOverflowH, `tab ${i} ${c.id} styleH`).toBe(false);
        expect(c.css.w, `tab ${i} css.w`).toBeGreaterThan(300);
      }
    }
  });
});
