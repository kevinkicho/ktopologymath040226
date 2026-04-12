/**
 * deep-audit.spec.js — extended behavioral health-check across all modules
 *
 * Checks (beyond the basic audit):
 *   1. ▶ Animate button injected & clickable
 *   2. Animation is alive (canvas fingerprint changes over 2s)
 *   3. Speed control slider injected, updates window.animSpeed
 *   4. No duplicate Animate buttons or speed controls
 *   5. Script load timing (auto-start, glossary, tour)
 *   6. Per-tab animation liveness after tab switch
 *
 * Run:  npx playwright test tests/deep-audit.spec.js --workers=2 --reporter=list
 */

const { test } = require('@playwright/test');
const fs   = require('fs');
const path = require('path');

const ROOT    = path.join(__dirname, '..');
const modules = fs.readdirSync(ROOT)
  .filter(f => /^\d{2}_.*\.html$/.test(f))
  .sort();

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Take a 5-point canvas fingerprint (corners + center). */
async function fingerprint(page) {
  return page.evaluate(() => {
    const cv = Array.from(document.querySelectorAll('canvas'))
      .find(c => c.offsetParent !== null && c.width > 0 && c.height > 0);
    if (!cv) return null;
    try {
      const ctx = cv.getContext('2d');
      const w = cv.width, h = cv.height;
      const pts = [
        [Math.floor(w*0.1), Math.floor(h*0.1)],
        [Math.floor(w*0.9), Math.floor(h*0.1)],
        [Math.floor(w*0.5), Math.floor(h*0.5)],
        [Math.floor(w*0.1), Math.floor(h*0.9)],
        [Math.floor(w*0.9), Math.floor(h*0.9)],
      ];
      return pts.map(([x,y]) => {
        const d = Array.from(ctx.getImageData(x,y,1,1).data);
        return d.join(',');
      }).join('|');
    } catch { return null; }
  });
}

async function deepAudit(page, url) {
  const issues = [];
  const consoleErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text().slice(0, 200));
  });
  page.on('pageerror', err =>
    consoleErrors.push('[pageerror] ' + err.message.slice(0, 200))
  );

  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000); // let auto-start + injections run

  // ── 1. Animate button presence & duplicates ─────────────────────────────
  // Count injected ▶ Animate buttons (id=kanim-btn) separately from module-specific ones
  const animBtnInfo = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('button'))
      .filter(b => /animate/i.test(b.textContent) && b.offsetParent !== null);
    const injected = all.filter(b => b.id === 'kanim-btn');
    const moduleOwn = all.filter(b => b.id !== 'kanim-btn');
    return { total: all.length, injected: injected.length, moduleOwn: moduleOwn.length,
             texts: all.map(b => b.textContent.trim().slice(0, 40)) };
  });
  if (animBtnInfo.total === 0) {
    issues.push('[animate-btn] no visible Animate button found');
  }
  if (animBtnInfo.injected > 1) {
    issues.push(`[duplicate-injected-animate] ${animBtnInfo.injected} injected ▶ Animate buttons`);
  }
  // Flag if both injected AND module-specific animate buttons coexist (confusing UX)
  if (animBtnInfo.injected >= 1 && animBtnInfo.moduleOwn >= 1) {
    issues.push(`[coexist-animate] injected ▶ Animate + ${animBtnInfo.moduleOwn} module button(s): ${animBtnInfo.texts.join(', ')}`);
  }

  // ── 2. Speed control presence & count ───────────────────────────────────
  const speedCtrls = await page.evaluate(() => {
    const sliders = Array.from(document.querySelectorAll('#ktour-speed-slider'));
    const ctrls   = Array.from(document.querySelectorAll('#ktour-speed-ctrl'));
    return { sliders: sliders.length, ctrls: ctrls.length };
  });
  if (speedCtrls.sliders === 0) {
    issues.push('[speed-ctrl] no speed slider found');
  } else if (speedCtrls.sliders > 1) {
    issues.push(`[duplicate-speed] ${speedCtrls.sliders} speed sliders found`);
  }
  if (speedCtrls.ctrls > 1) {
    issues.push(`[duplicate-speed-ctrl] ${speedCtrls.ctrls} speed control containers`);
  }

  // ── 3. Speed slider functionality ───────────────────────────────────────
  const speedWorks = await page.evaluate(() => {
    const slider = document.getElementById('ktour-speed-slider');
    if (!slider) return 'no-slider';
    const before = window.animSpeed;
    // Set to 0.5 and fire input event
    slider.value = '0.5';
    slider.dispatchEvent(new Event('input', { bubbles: true }));
    const after = window.animSpeed;
    // Restore
    slider.value = '1';
    slider.dispatchEvent(new Event('input', { bubbles: true }));
    if (Math.abs(after - 0.5) > 0.01) return `speed-mismatch: set 0.5, got ${after}`;
    return 'ok';
  });
  if (speedWorks !== 'ok' && speedWorks !== 'no-slider') {
    issues.push(`[speed-func] ${speedWorks}`);
  }

  // ── 4. Script load check ────────────────────────────────────────────────
  const scripts = await page.evaluate(() => {
    const srcs = Array.from(document.querySelectorAll('script[src]')).map(s => s.src);
    return {
      autoStart:     srcs.some(s => s.includes('auto-start.js')),
      glossaryData:  srcs.some(s => s.includes('glossary-data.js')),
      glossaryTip:   srcs.some(s => s.includes('glossary-tooltip.js')),
      tourData:      srcs.some(s => s.includes('tour-data.js')),
      tourJs:        srcs.some(s => s.includes('tour.js')),
    };
  });
  if (!scripts.autoStart)    issues.push('[script] auto-start.js not loaded');
  if (!scripts.glossaryData) issues.push('[script] glossary-data.js not loaded');
  if (!scripts.glossaryTip)  issues.push('[script] glossary-tooltip.js not loaded');
  // tour-data.js and tour.js are dynamically loaded by auto-start; check after delay
  await page.waitForTimeout(1500);
  const tourLoaded = await page.evaluate(() => {
    const srcs = Array.from(document.querySelectorAll('script[src]')).map(s => s.src);
    return {
      tourData: srcs.some(s => s.includes('tour-data.js')),
      tourJs:   srcs.some(s => s.includes('tour.js')),
    };
  });
  if (!tourLoaded.tourData) issues.push('[script] tour-data.js not dynamically loaded');
  if (!tourLoaded.tourJs)   issues.push('[script] tour.js not dynamically loaded');

  // ── 5. Tab-0 animation liveness ─────────────────────────────────────────
  const fp1 = await fingerprint(page);
  await page.waitForTimeout(2000);
  const fp2 = await fingerprint(page);
  if (fp1 !== null && fp2 !== null && fp1 === fp2) {
    issues.push('[anim-frozen tab0] canvas unchanged after 2s');
  }

  // ── 6. Per-tab: animation liveness + duplicate button check ─────────────
  const tabBtns = await page.$$('.tab, .tab-btn, [role="tab"]');
  for (let i = 1; i < tabBtns.length; i++) {
    const visible = await tabBtns[i].isVisible().catch(() => false);
    if (!visible) continue;
    const label = await tabBtns[i].textContent().catch(() => `tab${i}`);
    await tabBtns[i].click().catch(() => {});
    await page.waitForTimeout(1200);

    // Check for duplicate injected animate buttons after tab switch
    const animInfo = await page.evaluate(() => {
      const all = Array.from(document.querySelectorAll('button'))
        .filter(b => /animate/i.test(b.textContent) && b.offsetParent !== null);
      return { injected: all.filter(b => b.id === 'kanim-btn').length, total: all.length };
    });
    if (animInfo.injected > 1) {
      issues.push(`[duplicate-injected-animate tab${i}] ${animInfo.injected} injected ▶ Animate buttons after "${label.trim().slice(0,20)}"`);
    }

    // Animation liveness on this tab
    const tfp1 = await fingerprint(page);
    await page.waitForTimeout(2000);
    const tfp2 = await fingerprint(page);
    if (tfp1 !== null && tfp2 !== null && tfp1 === tfp2) {
      issues.push(`[anim-frozen tab${i}] canvas unchanged after 2s on "${label.trim().slice(0,20)}"`);
    }

    // Check speed slider still unique after tab switch
    const sliderCount = await page.evaluate(() =>
      document.querySelectorAll('#ktour-speed-slider').length
    );
    if (sliderCount > 1) {
      issues.push(`[duplicate-speed tab${i}] ${sliderCount} speed sliders after tab switch`);
    }
  }

  // ── 7. Console errors ───────────────────────────────────────────────────
  const unique = [...new Set(consoleErrors)].slice(0, 4);
  unique.forEach(e => issues.push('[console] ' + e));

  return issues;
}

// ── Tests ────────────────────────────────────────────────────────────────────

const ALL_ISSUES = [];

for (const mod of modules) {
  test(mod, async ({ page }) => {
    // Extra time: we wait 2s per tab for animation checks
    test.setTimeout(120000);
    const issues = await deepAudit(page, `http://localhost:4271/${mod}`);
    ALL_ISSUES.push({ mod, issues });

    if (issues.length) {
      console.log(`\n  ${mod} — ${issues.length} issue(s):`);
      issues.forEach(i => console.log(`    • ${i}`));
    }
  });
}

// ── Summary ──────────────────────────────────────────────────────────────────
test('=== DEEP AUDIT SUMMARY ===', async () => {
  test.setTimeout(5000);
  const byType = {};
  let total = 0;
  ALL_ISSUES.forEach(({ mod, issues }) => {
    total += issues.length;
    issues.forEach(i => {
      const type = (i.match(/^\[([^\]]+)\]/) || ['','other'])[1];
      (byType[type] = byType[type] || []).push(`${mod}: ${i}`);
    });
  });

  console.log('\n══════════════════════════════════════════════');
  console.log('  DEEP AUDIT SUMMARY');
  console.log('══════════════════════════════════════════════');
  console.log(`  Modules: ${modules.length}  |  Total issues: ${total}`);
  if (total === 0) { console.log('  All clean!'); }
  Object.entries(byType).sort().forEach(([type, items]) => {
    console.log(`\n  [${type}] — ${items.length}:`);
    items.forEach(i => console.log('    ' + i.slice(0, 120)));
  });
  console.log('\n══════════════════════════════════════════════\n');
});
