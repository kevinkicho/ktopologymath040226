/**
 * passive-anim-test.spec.js — check which tabs have continuously running animations
 * WITHOUT clicking any buttons. Just observe if canvas changes over 3 seconds.
 */
const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const modules = fs.readdirSync(ROOT)
  .filter(f => /^\d{2}_.*\.html$/.test(f))
  .sort();

async function fingerprint(page) {
  return page.evaluate(() => {
    const cv = Array.from(document.querySelectorAll('canvas'))
      .find(c => c.offsetParent !== null && c.width > 0 && c.height > 0);
    if (!cv) return null;
    try {
      const ctx = cv.getContext('2d');
      const w = cv.width, h = cv.height;
      // 8-point grid for better detection
      const pts = [[.1,.1],[.3,.3],[.5,.5],[.7,.7],[.9,.9],[.2,.8],[.8,.2],[.5,.2]];
      return pts.map(([fx,fy]) => {
        const d = Array.from(ctx.getImageData(Math.floor(w*fx),Math.floor(h*fy),1,1).data);
        return d.join(',');
      }).join('|');
    } catch { return null; }
  });
}

const RESULTS = [];

for (const mod of modules) {
  test(mod, async ({ page }) => {
    test.setTimeout(120000);
    const consoleErrors = [];
    page.on('pageerror', err => consoleErrors.push(err.message.slice(0, 100)));

    await page.goto(`http://localhost:4271/${mod}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2500); // let auto-start and animations settle

    const tabBtns = await page.$$('.tab, .tab-btn, [role="tab"]');
    const modResult = { module: mod, tabs: [] };

    for (let i = 0; i < Math.max(tabBtns.length, 1); i++) {
      let label = `tab${i}`;
      if (i > 0 && tabBtns[i]) {
        const visible = await tabBtns[i].isVisible().catch(() => false);
        if (!visible) continue;
        label = (await tabBtns[i].textContent().catch(() => `tab${i}`)).trim().slice(0, 25);
        await tabBtns[i].click().catch(() => {});
        await page.waitForTimeout(800);
      } else if (i === 0 && tabBtns[0]) {
        label = (await tabBtns[0].textContent().catch(() => 'tab0')).trim().slice(0, 25);
      }

      // Take 3 fingerprints over 3 seconds — passive, no clicking
      const fp1 = await fingerprint(page);
      await page.waitForTimeout(1000);
      const fp2 = await fingerprint(page);
      await page.waitForTimeout(1000);
      const fp3 = await fingerprint(page);

      let status = 'no-canvas';
      if (fp1 !== null) {
        if (fp1 !== fp2 || fp2 !== fp3 || fp1 !== fp3) {
          status = 'animating';
        } else {
          status = 'static';
        }
      }

      // Check canvas has content
      const health = await page.evaluate(() => {
        const cv = Array.from(document.querySelectorAll('canvas'))
          .find(c => c.offsetParent !== null && c.width > 0 && c.height > 0);
        if (!cv) return 'no-canvas';
        const ctx = cv.getContext('2d');
        const w = cv.width, h = cv.height;
        const colors = new Set();
        for (let gy = 0; gy < 10; gy++) {
          for (let gx = 0; gx < 10; gx++) {
            const d = Array.from(ctx.getImageData(
              Math.floor(w * (gx + .5) / 10), Math.floor(h * (gy + .5) / 10), 1, 1).data);
            colors.add(d.join(','));
          }
        }
        return colors.size <= 1 ? 'blank' : 'rendered';
      });

      modResult.tabs.push({ index: i, label, animStatus: status, canvas: health });
    }
    modResult.errors = [...new Set(consoleErrors)].slice(0, 3);
    RESULTS.push(modResult);
  });
}

test('=== PASSIVE ANIMATION SUMMARY ===', async () => {
  test.setTimeout(10000);
  let totalTabs = 0;
  const counts = { animating: 0, static: 0, 'no-canvas': 0 };
  const blankTabs = [];
  const staticTabs = [];
  const animatingTabs = [];

  RESULTS.forEach(m => m.tabs.forEach(t => {
    totalTabs++;
    counts[t.animStatus] = (counts[t.animStatus] || 0) + 1;
    if (t.canvas === 'blank') blankTabs.push(`${m.module}:tab${t.index}(${t.label})`);
    if (t.animStatus === 'static') staticTabs.push(`${m.module}:tab${t.index}(${t.label})`);
    if (t.animStatus === 'animating') animatingTabs.push(`${m.module}:tab${t.index}(${t.label})`);
  }));

  console.log('\n══════════════════════════════════════════════');
  console.log('  PASSIVE ANIMATION SUMMARY');
  console.log('══════════════════════════════════════════════');
  console.log(`  Modules: ${RESULTS.length}  |  Total tabs: ${totalTabs}`);
  console.log(`\n  Animating: ${counts.animating}  |  Static: ${counts.static}  |  No canvas: ${counts['no-canvas'] || 0}`);

  if (blankTabs.length) {
    console.log(`\n  ── Blank Canvas (${blankTabs.length}) ──`);
    blankTabs.forEach(t => console.log('    ' + t));
  }

  console.log(`\n  ── Animating Tabs (${animatingTabs.length}) ──`);
  animatingTabs.forEach(t => console.log('    ' + t));

  console.log(`\n  ── Static Tabs (${staticTabs.length}) ──`);
  staticTabs.forEach(t => console.log('    ' + t));

  // Console errors
  const errMods = RESULTS.filter(m => m.errors.length);
  if (errMods.length) {
    console.log(`\n  ── Console Errors (${errMods.length} modules) ──`);
    errMods.forEach(m => console.log(`    ${m.module}: ${m.errors[0]}`));
  }

  console.log('\n══════════════════════════════════════════════\n');

  fs.writeFileSync(path.join(__dirname, 'passive-anim-report.json'), JSON.stringify(RESULTS, null, 2));
});
