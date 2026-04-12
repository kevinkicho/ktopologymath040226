#!/usr/bin/env node
// regression.js — Visual regression test for all modules
// Usage:
//   node tests/regression.js              # capture baselines
//   node tests/regression.js --compare    # compare against baselines
//   node tests/regression.js --module 09  # test specific module
//
// Screenshots saved to tests/screenshots/
// Checks: page loads, canvas renders, pause/speed/export buttons present

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const PORT = 4271;
const BASE = `http://localhost:${PORT}`;
const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');
const REPORT_FILE = path.join(__dirname, 'regression-report.json');

const args = process.argv.slice(2);
const compareMode = args.includes('--compare');
const moduleFilter = args.includes('--module') ? args[args.indexOf('--module') + 1] : null;

// Find all module HTML files
const projectDir = path.join(__dirname, '..');
const modules = fs.readdirSync(projectDir)
  .filter(f => /^\d+_.*\.html$/.test(f))
  .filter(f => !moduleFilter || f.startsWith(moduleFilter + '_'))
  .sort();

async function run() {
  if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  const results = [];
  let pass = 0, fail = 0;

  for (const m of modules) {
    const name = m.replace('.html', '');
    const result = { module: m, status: 'unknown', checks: {} };

    try {
      await page.goto(`${BASE}/${m}`, { timeout: 10000 });
      await page.waitForTimeout(2500);

      // Run checks
      const checks = await page.evaluate(() => {
        const cvs = document.querySelectorAll('canvas');
        const visibleCvs = Array.from(cvs).filter(c => c.offsetParent !== null && c.width > 0);
        return {
          hasCanvas: visibleCvs.length > 0,
          canvasCount: visibleCvs.length,
          hasPause: !!(document.getElementById('kpause-btn') || document.querySelector('.pauseBtn')),
          hasSpeed: !!document.getElementById('ktour-speed-ctrl'),
          hasExport: !!document.getElementById('kexport-btn'),
          hasNav: !!document.getElementById('kmod-nav'),
          title: document.title || '',
        };
      });

      result.checks = checks;

      // Screenshot
      const screenshotPath = path.join(SCREENSHOT_DIR, name + '.png');
      if (compareMode && fs.existsSync(screenshotPath)) {
        // Save to temp for comparison
        const tempPath = path.join(SCREENSHOT_DIR, name + '_new.png');
        await page.screenshot({ path: tempPath });
        const oldSize = fs.statSync(screenshotPath).size;
        const newSize = fs.statSync(tempPath).size;
        const sizeChange = Math.abs(newSize - oldSize) / oldSize;
        result.checks.sizeChange = (sizeChange * 100).toFixed(1) + '%';
        result.checks.significantChange = sizeChange > 0.15;
        fs.unlinkSync(tempPath);
      } else {
        await page.screenshot({ path: screenshotPath });
      }

      // Determine pass/fail
      const passed = checks.hasCanvas && checks.hasPause && checks.hasSpeed;
      result.status = passed ? 'PASS' : 'FAIL';
      if (passed) pass++;
      else fail++;

      const icon = passed ? '\u2705' : '\u274c';
      const missing = [];
      if (!checks.hasCanvas) missing.push('canvas');
      if (!checks.hasPause) missing.push('pause');
      if (!checks.hasSpeed) missing.push('speed');
      if (!checks.hasExport) missing.push('export');
      const extra = missing.length ? ' [missing: ' + missing.join(', ') + ']' : '';
      console.log(`${icon} ${m.padEnd(40)} ${checks.canvasCount} canvases${extra}`);

    } catch (e) {
      result.status = 'ERROR';
      result.error = e.message.slice(0, 100);
      fail++;
      console.log(`\u274c ${m.padEnd(40)} ERROR: ${e.message.slice(0, 60)}`);
    }

    results.push(result);
  }

  await browser.close();

  // Write report
  const report = {
    timestamp: new Date().toISOString(),
    mode: compareMode ? 'compare' : 'baseline',
    total: modules.length,
    pass,
    fail,
    results,
  };
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

  console.log(`\n${'─'.repeat(60)}`);
  console.log(`Results: ${pass}/${modules.length} passed, ${fail} failed`);
  console.log(`Report: ${REPORT_FILE}`);
  console.log(`Screenshots: ${SCREENSHOT_DIR}/`);
}

run().catch(e => { console.error(e); process.exit(1); });
