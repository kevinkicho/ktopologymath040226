/**
 * full-tab-audit.spec.js — comprehensive per-tab audit across ALL modules
 *
 * For every tab in every module:
 *   1. Canvas has rendered content (non-blank pixel diversity)
 *   2. If start/animate button exists → click it, verify canvas changes
 *   3. Animation liveness after button click (fingerprint delta over 1.5s)
 *   4. No duplicate injected ▶ Animate buttons
 *   5. No JS errors on this tab
 *   6. KaTeX errors on this tab
 *
 * Produces a JSON report at tests/full-tab-report.json
 *
 * Run: npx playwright test tests/full-tab-audit.spec.js --workers=2 --reporter=list
 */

const { test } = require('@playwright/test');
const fs   = require('fs');
const path = require('path');

const ROOT    = path.join(__dirname, '..');
const modules = fs.readdirSync(ROOT)
  .filter(f => /^\d{2}_.*\.html$/.test(f))
  .sort();

const REPORT = [];

/** Sample a grid of pixels and return diversity info. */
async function canvasHealth(page) {
  return page.evaluate(() => {
    const cv = Array.from(document.querySelectorAll('canvas'))
      .find(c => c.offsetParent !== null && c.width > 0 && c.height > 0);
    if (!cv) return { status: 'no-canvas' };
    try {
      const ctx = cv.getContext('2d');
      const w = cv.width, h = cv.height;
      const GX = 12, GY = 12;
      const colors = new Set();
      for (let gy = 0; gy < GY; gy++) {
        for (let gx = 0; gx < GX; gx++) {
          const x = Math.floor(w * (gx + 0.5) / GX);
          const y = Math.floor(h * (gy + 0.5) / GY);
          const d = Array.from(ctx.getImageData(x, y, 1, 1).data);
          colors.add(d.join(','));
        }
      }
      if (colors.size <= 1) {
        const only = [...colors][0] || '0,0,0,0';
        return { status: 'blank', uniqueColors: 1, sample: only };
      }
      return { status: 'ok', uniqueColors: colors.size };
    } catch { return { status: 'tainted' }; }
  });
}

/** 5-point fingerprint for animation detection. */
async function fingerprint(page) {
  return page.evaluate(() => {
    const cv = Array.from(document.querySelectorAll('canvas'))
      .find(c => c.offsetParent !== null && c.width > 0 && c.height > 0);
    if (!cv) return null;
    try {
      const ctx = cv.getContext('2d');
      const w = cv.width, h = cv.height;
      const pts = [[.15,.15],[.85,.15],[.5,.5],[.15,.85],[.85,.85]];
      return pts.map(([fx,fy]) => {
        const d = Array.from(ctx.getImageData(Math.floor(w*fx),Math.floor(h*fy),1,1).data);
        return d.join(',');
      }).join('|');
    } catch { return null; }
  });
}

/** Find and click start/animate buttons, return what was clicked. */
async function clickStartButtons(page) {
  return page.evaluate(() => {
    const START_RE = /^(▶|▸|▷|►|\u25b6|\u25ba)|\b(animate|start|begin|play|run\s+sim|launch|show\s+anim)/i;
    const SKIP_RE  = /stop|pause|reset|slow|fast|cool|heat|clear|undo|reverse|toggle|sweep|tour|proof/i;
    const buttons = Array.from(document.querySelectorAll('button'))
      .filter(b => b.offsetParent !== null && START_RE.test(b.textContent.trim()) && !SKIP_RE.test(b.textContent.trim()));
    const clicked = [];
    buttons.forEach(b => {
      try { b.click(); clicked.push(b.textContent.trim().slice(0, 40)); } catch {}
    });
    return clicked;
  });
}

async function auditModule(page, url, modName) {
  const modReport = { module: modName, tabs: [], errors: [] };
  const consoleErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text().slice(0, 150));
  });
  page.on('pageerror', err =>
    consoleErrors.push('[pageerror] ' + err.message.slice(0, 150))
  );

  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2200); // auto-start + KaTeX + first frame

  // Get all tab buttons
  const tabBtns = await page.$$('.tab, .tab-btn, [role="tab"]');
  const tabCount = tabBtns.length || 1;

  for (let i = 0; i < Math.max(tabCount, 1); i++) {
    const tabErrors = [];

    // Click tab (skip for first if no tabs or already active)
    let tabLabel = `tab${i}`;
    if (i > 0 && tabBtns[i]) {
      const visible = await tabBtns[i].isVisible().catch(() => false);
      if (!visible) continue;
      tabLabel = await tabBtns[i].textContent().catch(() => `tab${i}`);
      tabLabel = tabLabel.trim().slice(0, 30);
      await tabBtns[i].click().catch(() => {});
      await page.waitForTimeout(1000);
    } else if (i === 0 && tabBtns[0]) {
      tabLabel = await tabBtns[0].textContent().catch(() => 'tab0');
      tabLabel = tabLabel.trim().slice(0, 30);
    }

    // 1. Canvas health — does it have rendered content?
    const health = await canvasHealth(page);

    // 2. KaTeX errors on this tab
    const katexErrs = await page.evaluate(() =>
      Array.from(document.querySelectorAll('.katex-error'))
        .map(n => n.textContent.slice(0, 60).trim())
    ).catch(() => []);

    // 3. Find and click start/animate buttons
    const fp_before = await fingerprint(page);
    const clickedBtns = await clickStartButtons(page);
    await page.waitForTimeout(1500);
    const fp_after = await fingerprint(page);

    // Did clicking the button change the canvas?
    let animStatus = 'no-animation-button';
    if (clickedBtns.length > 0) {
      if (fp_before === null || fp_after === null) {
        animStatus = 'no-canvas-to-check';
      } else if (fp_before !== fp_after) {
        animStatus = 'animation-working';
      } else {
        // Try waiting longer for slower animations
        await page.waitForTimeout(1500);
        const fp_later = await fingerprint(page);
        if (fp_later !== fp_before) {
          animStatus = 'animation-working-slow';
        } else {
          animStatus = 'animation-NOT-responding';
        }
      }
    } else {
      // No start button — check if canvas is continuously animated
      await page.waitForTimeout(1500);
      const fp_passive = await fingerprint(page);
      if (fp_before !== null && fp_passive !== null && fp_before !== fp_passive) {
        animStatus = 'continuous-animation';
      } else {
        animStatus = 'static-or-interactive';
      }
    }

    // 4. Duplicate animate buttons
    const animBtnInfo = await page.evaluate(() => {
      const all = Array.from(document.querySelectorAll('button'))
        .filter(b => /animate/i.test(b.textContent) && b.offsetParent !== null);
      return {
        injected: all.filter(b => b.id === 'kanim-btn').length,
        moduleOwn: all.filter(b => b.id !== 'kanim-btn').length,
        texts: all.map(b => b.textContent.trim().slice(0, 30)),
      };
    });

    // 5. Speed slider
    const speedInfo = await page.evaluate(() => ({
      count: document.querySelectorAll('#ktour-speed-slider').length,
      ctrlCount: document.querySelectorAll('#ktour-speed-ctrl').length,
    }));

    // Collect issues for this tab
    const issues = [];
    if (health.status === 'blank') issues.push(`canvas-blank(${health.sample})`);
    if (health.status === 'no-canvas') issues.push('no-canvas');
    if (katexErrs.length) issues.push(`katex-errors(${katexErrs.length}): ${katexErrs[0]}`);
    if (animBtnInfo.injected > 1) issues.push(`duplicate-injected-animate(${animBtnInfo.injected})`);
    if (animBtnInfo.injected >= 1 && animBtnInfo.moduleOwn >= 1) {
      issues.push(`coexist-animate: ${animBtnInfo.texts.join(', ')}`);
    }
    if (speedInfo.count > 1) issues.push(`duplicate-speed-slider(${speedInfo.count})`);
    if (speedInfo.count === 0) issues.push('no-speed-slider');
    if (animStatus === 'animation-NOT-responding') issues.push('animate-button-not-working');

    modReport.tabs.push({
      index: i,
      label: tabLabel,
      canvas: health.status,
      uniqueColors: health.uniqueColors || 0,
      animStatus,
      buttonsClicked: clickedBtns,
      animateButtons: { injected: animBtnInfo.injected, moduleOwn: animBtnInfo.moduleOwn },
      speedSlider: speedInfo.count,
      katexErrors: katexErrs.length,
      issues,
    });
  }

  // Console errors for the whole module
  modReport.errors = [...new Set(consoleErrors)].slice(0, 6);

  return modReport;
}

// ── Tests ────────────────────────────────────────────────────────────────────

for (const mod of modules) {
  test(mod, async ({ page }) => {
    test.setTimeout(180000); // 3 min per module
    const report = await auditModule(page, `http://localhost:4271/${mod}`, mod);
    REPORT.push(report);

    // Print summary for this module
    const issueCount = report.tabs.reduce((s, t) => s + t.issues.length, 0) + report.errors.length;
    if (issueCount > 0) {
      console.log(`\n  ${mod} — ${issueCount} issue(s):`);
      report.tabs.forEach(t => {
        if (t.issues.length) console.log(`    tab${t.index} "${t.label}": ${t.issues.join('; ')}`);
      });
      report.errors.forEach(e => console.log(`    [console] ${e}`));
    }
  });
}

// ── Summary & Report ─────────────────────────────────────────────────────────
test('=== FULL TAB AUDIT SUMMARY ===', async () => {
  test.setTimeout(10000);

  let totalTabs = 0, totalIssues = 0;
  const issuesByType = {};
  const blankTabs = [], animNotWorking = [], duplicateAnimate = [], katexTabs = [];
  const noSpeedSlider = [], coexistAnimate = [], consoleErrModules = [];

  REPORT.forEach(mod => {
    mod.tabs.forEach(t => {
      totalTabs++;
      t.issues.forEach(issue => {
        totalIssues++;
        const type = issue.split('(')[0].split(':')[0];
        (issuesByType[type] = issuesByType[type] || []).push(`${mod.module} tab${t.index} "${t.label}"`);
      });
      if (t.canvas === 'blank') blankTabs.push(`${mod.module}:tab${t.index}(${t.label})`);
      if (t.animStatus === 'animation-NOT-responding') animNotWorking.push(`${mod.module}:tab${t.index}(${t.label}) btns=[${t.buttonsClicked.join(',')}]`);
      if (t.issues.some(i => i.includes('duplicate-injected'))) duplicateAnimate.push(`${mod.module}:tab${t.index}`);
      if (t.issues.some(i => i.includes('coexist-animate'))) coexistAnimate.push(`${mod.module}:tab${t.index}`);
      if (t.katexErrors > 0) katexTabs.push(`${mod.module}:tab${t.index}`);
      if (t.issues.some(i => i.includes('no-speed-slider'))) noSpeedSlider.push(`${mod.module}:tab${t.index}`);
    });
    if (mod.errors.length) consoleErrModules.push({ mod: mod.module, errors: mod.errors });
  });

  // Animation status breakdown
  const animCounts = {};
  REPORT.forEach(mod => mod.tabs.forEach(t => {
    animCounts[t.animStatus] = (animCounts[t.animStatus] || 0) + 1;
  }));

  console.log('\n══════════════════════════════════════════════');
  console.log('  FULL TAB AUDIT SUMMARY');
  console.log('══════════════════════════════════════════════');
  console.log(`  Modules: ${REPORT.length}  |  Total tabs: ${totalTabs}  |  Total issues: ${totalIssues}`);

  console.log('\n  ── Animation Status Breakdown ──');
  Object.entries(animCounts).sort((a,b) => b[1]-a[1]).forEach(([status, count]) => {
    console.log(`    ${status}: ${count}`);
  });

  if (blankTabs.length) {
    console.log(`\n  ── Blank Canvas (${blankTabs.length}) ──`);
    blankTabs.forEach(t => console.log('    ' + t));
  }

  if (animNotWorking.length) {
    console.log(`\n  ── Animate Button NOT Working (${animNotWorking.length}) ──`);
    animNotWorking.forEach(t => console.log('    ' + t));
  }

  if (duplicateAnimate.length) {
    console.log(`\n  ── Duplicate Injected ▶ Animate (${duplicateAnimate.length}) ──`);
    duplicateAnimate.forEach(t => console.log('    ' + t));
  }

  if (coexistAnimate.length) {
    console.log(`\n  ── Coexisting Injected + Module Animate (${coexistAnimate.length}) ──`);
    coexistAnimate.forEach(t => console.log('    ' + t));
  }

  if (katexTabs.length) {
    console.log(`\n  ── KaTeX Errors (${katexTabs.length}) ──`);
    katexTabs.forEach(t => console.log('    ' + t));
  }

  if (noSpeedSlider.length) {
    console.log(`\n  ── Missing Speed Slider (${noSpeedSlider.length}) ──`);
    noSpeedSlider.forEach(t => console.log('    ' + t));
  }

  if (consoleErrModules.length) {
    console.log(`\n  ── Console Errors (${consoleErrModules.length} modules) ──`);
    consoleErrModules.forEach(({ mod, errors }) => {
      console.log(`    ${mod}:`);
      errors.forEach(e => console.log(`      ${e.slice(0, 100)}`));
    });
  }

  console.log('\n══════════════════════════════════════════════\n');

  // Write detailed JSON report
  const reportPath = path.join(__dirname, 'full-tab-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(REPORT, null, 2));
  console.log(`  Detailed JSON report: ${reportPath}`);
});
