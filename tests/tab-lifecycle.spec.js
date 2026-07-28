/**
 * tab-lifecycle.spec.js — hard guardrails for tab switch safety
 *
 * Hard asserts (fail the build):
 *   1. Module loads without pageerror
 *   2. Every tab click produces no ReferenceError / TypeError pageerror
 *   3. Tab labels are unique within a module
 *   4. Opt-in TabController modules expose window.TabController
 *   5. Fewer than half of canvas tabs are fully blank after settle
 *
 * Does NOT require animations to run — auto-start/speed stay module-owned.
 *
 * Run:
 *   npm run test:lifecycle
 *   npm run test:lifecycle:15
 *   MODULE_FILTER=03 npx playwright test tests/tab-lifecycle.spec.js
 */

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FILTER = process.env.MODULE_FILTER || '';

const ALL_MODULES = fs.readdirSync(ROOT)
  .filter(f => /^\d{2}_.*\.html$/.test(f))
  .sort();

const modules = FILTER
  ? ALL_MODULES.filter(m => m.includes(FILTER))
  : ALL_MODULES;

/** Modules that opt into TabController (expand as you migrate). */
const TAB_CONTROLLER_MODULES = new Set([
  '15_quaternions.html',
]);

/** Prefer canvas inside a visible panel/workspace. */
async function canvasHealth(page) {
  return page.evaluate(() => {
    function isShown(el) {
      if (!el) return false;
      const s = window.getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      return r.width > 2 && r.height > 2;
    }
    let cv = null;
    const panels = document.querySelectorAll('.workspace, .panel, [data-role="panel"], [id^="panel"]');
    for (const p of panels) {
      if (!isShown(p)) continue;
      const c = p.querySelector('canvas');
      if (c && c.width > 0 && c.height > 0) { cv = c; break; }
    }
    if (!cv) {
      cv = Array.from(document.querySelectorAll('canvas'))
        .find(c => c.offsetParent !== null && c.width > 0 && c.height > 0);
    }
    if (!cv) return { status: 'no-canvas' };
    try {
      const ctx = cv.getContext('2d', { willReadFrequently: true });
      const w = cv.width, h = cv.height;
      if (w < 2 || h < 2) return { status: 'tiny', w, h };
      const GX = 14, GY = 14;
      const colors = new Set();
      let nonBg = 0;
      function isBg(r, g, b, a) {
        if (a < 10) return true;
        return r < 22 && g < 22 && b < 35;
      }
      for (let gy = 0; gy < GY; gy++) {
        for (let gx = 0; gx < GX; gx++) {
          const x = Math.floor(w * (gx + 0.5) / GX);
          const y = Math.floor(h * (gy + 0.5) / GY);
          const d = ctx.getImageData(x, y, 1, 1).data;
          colors.add([d[0], d[1], d[2], d[3]].join(','));
          if (!isBg(d[0], d[1], d[2], d[3])) nonBg++;
        }
      }
      if (nonBg === 0 && colors.size <= 2) {
        return { status: 'blank', uniqueColors: colors.size, sample: [...colors][0] || null, w, h };
      }
      return { status: 'ok', uniqueColors: colors.size, nonBg, w, h };
    } catch {
      return { status: 'tainted' };
    }
  });
}

async function tabLabelAudit(page) {
  return page.evaluate(() => {
    const tabs = Array.from(document.querySelectorAll('.tab, .tab-btn, [role="tab"]'))
      .filter(t => t.offsetParent !== null || t.getClientRects().length > 0);
    const labels = tabs.map(t => (t.textContent || '').replace(/\s+/g, ' ').trim());
    const counts = Object.create(null);
    labels.forEach(l => {
      if (!l) return;
      counts[l] = (counts[l] || 0) + 1;
    });
    const duplicates = Object.keys(counts).filter(k => counts[k] > 1);
    return { labels, duplicates, count: labels.length };
  });
}

for (const mod of modules) {
  test.describe(mod, () => {
    test('tab lifecycle: no throw, unique labels, canvas paints', async ({ page }) => {
      test.setTimeout(120000);

      const pageErrors = [];
      page.on('pageerror', err => {
        pageErrors.push(err.message || String(err));
      });

      await page.goto(`/${mod}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1200);

      const loadErrors = pageErrors.slice();
      expect(loadErrors, `pageerror on load of ${mod}:\n${loadErrors.join('\n')}`).toEqual([]);

      if (TAB_CONTROLLER_MODULES.has(mod)) {
        const hasTC = await page.evaluate(() => !!(window.TabController && window.TabController.create));
        expect(hasTC, `${mod} should load lib/tab-controller.js`).toBe(true);
      }

      const labelInfo = await tabLabelAudit(page);
      expect(
        labelInfo.duplicates,
        `Duplicate tab labels in ${mod}: ${labelInfo.duplicates.join(', ')}`
      ).toEqual([]);

      const tabLocator = page.locator('.tab, .tab-btn, [role="tab"]');
      const tabCount = await tabLocator.count();
      const n = Math.max(tabCount, 1);
      const blankTabs = [];
      let paintedTabs = 0;

      for (let i = 0; i < n; i++) {
        pageErrors.length = 0;

        if (tabCount > 0) {
          const tab = tabLocator.nth(i);
          if (!(await tab.isVisible().catch(() => false))) continue;
          await tab.click({ timeout: 5000 }).catch(() => {});
          // TabController: double-rAF enter; leave time for first draw/autoStart
          await page.waitForTimeout(900);
          // Sync redraw only (do not call switchTab again — that re-cancels deferred enter)
          await page.evaluate(() => {
            try {
              if (typeof redrawTab === 'function') redrawTab();
            } catch (e) { /* ignore */ }
          }).catch(() => {});
          await page.waitForTimeout(200);
        }

        const switchErrors = pageErrors.filter(msg =>
          /ReferenceError|TypeError|is not defined|Cannot read/i.test(msg)
        );
        expect(
          switchErrors,
          `${mod} tab[${i}] pageerror:\n${switchErrors.join('\n')}`
        ).toEqual([]);

        let health = await canvasHealth(page);
        if (health.status === 'no-canvas' || health.status === 'tainted' || health.status === 'tiny') {
          continue;
        }
        if (health.status === 'blank') {
          await page.waitForTimeout(700);
          health = await canvasHealth(page);
        }
        if (health.status === 'no-canvas' || health.status === 'tainted' || health.status === 'tiny') {
          continue;
        }
        if (health.status === 'ok') paintedTabs++;
        else blankTabs.push({ index: i, sample: health.sample, w: health.w, h: health.h });
      }

      if (paintedTabs + blankTabs.length > 0) {
        const blankRatio = blankTabs.length / (paintedTabs + blankTabs.length);
        expect(
          blankRatio,
          `${mod}: too many blank canvases (${blankTabs.length}/${paintedTabs + blankTabs.length}): ${JSON.stringify(blankTabs.slice(0, 6))}`
        ).toBeLessThan(0.5);
      }
    });
  });
}

test('TabController unit behavior on 15_quaternions', async ({ page }) => {
  test.setTimeout(60000);
  const pageErrors = [];
  page.on('pageerror', err => pageErrors.push(err.message));

  await page.goto('/15_quaternions.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  const api = await page.evaluate(() => {
    const TC = window.TabController;
    if (!TC) return { ok: false, reason: 'missing TabController' };
    const pageIds = Object.keys(TC._pages || {});
    return {
      ok: true,
      version: TC.version,
      pageIds,
      animSpeed: window.animSpeed,
    };
  });

  expect(api.ok, api.reason || 'TabController missing').toBe(true);
  expect(api.pageIds.length).toBeGreaterThan(0);

  // Sequential switches with a frame between so deferred enter can complete
  for (const t of [6, 0, 14, 1]) {
    await page.evaluate((id) => { if (typeof switchTab === 'function') switchTab(id); }, t);
    await page.waitForTimeout(250);
  }

  expect(pageErrors.filter(m => /ReferenceError|is not defined/i.test(m))).toEqual([]);

  const speed = await page.evaluate(() => {
    window.TabController.setSpeed(1.7);
    return window.animSpeed;
  });
  expect(speed).toBeCloseTo(1.7, 5);
});
