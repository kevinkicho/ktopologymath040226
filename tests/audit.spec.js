/**
 * audit.spec.js — health-check across all ktopologymath modules
 *
 * Per module checks:
 *   1. KaTeX render errors (.katex-error)
 *   2. DOM overflow (containers wider/taller than parent by >6px)
 *   3. Canvas blank detection (all sampled pixels identical)
 *   4. Console / page errors
 *   5. Tab switching — do tabs crash?
 *
 * Run:  npx playwright test tests/audit.spec.js --workers=2 --reporter=list
 */

const { test } = require('@playwright/test');
const fs   = require('fs');
const path = require('path');

const ROOT    = path.join(__dirname, '..');
const modules = fs.readdirSync(ROOT)
  .filter(f => /^\d{2}_.*\.html$/.test(f))
  .sort();

// ── Helpers ──────────────────────────────────────────────────────────────────

async function auditPage(page, url) {
  const issues = [];
  const consoleErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text().slice(0, 200));
  });
  page.on('pageerror', err =>
    consoleErrors.push('[pageerror] ' + err.message.slice(0, 200))
  );

  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500); // KaTeX + first RAF frame

  // 1. KaTeX errors (initial render)
  const katexErrs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.katex-error'))
      .map(n => n.textContent.slice(0, 80).trim())
  );
  katexErrs.forEach(t => issues.push('[KaTeX] ' + t));

  // 2. DOM overflow check
  const overflows = await page.evaluate(() => {
    const items = [];
    const sel = '.sidebar, .sidebar.right, .info-box, .panel, .tab-content';
    document.querySelectorAll(sel).forEach(el => {
      const parent = el.parentElement;
      if (!parent) return;
      const eR = el.getBoundingClientRect(), pR = parent.getBoundingClientRect();
      const ox = Math.round(eR.right  - pR.right);
      const oy = Math.round(eR.bottom - pR.bottom);
      if (ox > 8) items.push({ cls: el.className.replace(/\s+/g,' ').slice(0,50), ox });
      if (oy > 8) items.push({ cls: el.className.replace(/\s+/g,' ').slice(0,50), oy });
    });
    return items;
  });
  overflows.forEach(o =>
    issues.push(`[overflow] ${o.cls} (${o.ox != null ? '+'+o.ox+'px right' : '+'+o.oy+'px bottom'})`)
  );

  // 3. Canvas check helper
  async function checkCanvas(tabIdx) {
    const result = await page.evaluate(() => {
      const cv = Array.from(document.querySelectorAll('canvas'))
        .find(c => c.offsetParent !== null && c.width > 0 && c.height > 0);
      if (!cv) return 'no-canvas';
      try {
        const ctx = cv.getContext('2d');
        const w = cv.width, h = cv.height;
        // Sample a 16×16 grid across the canvas to handle thin lines, padded
        // content, and transparent-background modules equally.
        const GX = 16, GY = 16;
        const ref = Array.from(ctx.getImageData(Math.floor(w/2), Math.floor(h/2), 1, 1).data);
        for (let gy = 0; gy < GY; gy++) {
          for (let gx = 0; gx < GX; gx++) {
            const x = Math.floor(w * (gx + 0.5) / GX);
            const y = Math.floor(h * (gy + 0.5) / GY);
            const px = Array.from(ctx.getImageData(x, y, 1, 1).data);
            if (px[0] !== ref[0] || px[1] !== ref[1] || px[2] !== ref[2] || px[3] !== ref[3]) {
              return 'ok';
            }
          }
        }
        return `blank(${ref[0]},${ref[1]},${ref[2]},${ref[3]})`;
      } catch { return 'tainted'; }
    });
    if (result && result !== 'ok' && result !== 'tainted' && result !== 'no-canvas') {
      issues.push(`[canvas-blank tab${tabIdx}] ${result}`);
    }
  }

  await checkCanvas(0);

  // 4. Tab navigation
  const tabBtns = await page.$$('.tab, .tab-btn, [role="tab"]');
  for (let i = 1; i < tabBtns.length; i++) {
    const label = await tabBtns[i].textContent().catch(() => `tab${i}`);
    const visible = await tabBtns[i].isVisible().catch(() => false);
    if (!visible) continue;
    await tabBtns[i].click().catch(e =>
      issues.push(`[tab-crash] "${label.trim().slice(0,30)}": ${e.message.slice(0,60)}`)
    );
    await page.waitForTimeout(700);
    await checkCanvas(i);

    // KaTeX re-check on this tab
    const tke = await page.evaluate(() =>
      Array.from(document.querySelectorAll('.katex-error')).map(n => n.textContent.slice(0,60).trim())
    ).catch(() => []);
    tke.forEach(t => issues.push(`[KaTeX tab${i}] ` + t));
  }

  // 5. Console errors collected during whole run
  const unique = [...new Set(consoleErrors)].slice(0, 4);
  unique.forEach(e => issues.push('[console] ' + e));

  return issues;
}

// ── Tests (one per module) ────────────────────────────────────────────────────

const ALL_ISSUES = [];

for (const mod of modules) {
  test(mod, async ({ page }) => {
    // Allow extra time for modules with expensive domain-coloring pixel loops
    test.setTimeout(mod === '36_riemann_surfaces.html' ? 60000 : 30000);
    const issues = await auditPage(page, `http://localhost:4271/${mod}`);
    ALL_ISSUES.push({ mod, issues });

    if (issues.length) {
      console.log(`\n  ${mod} — ${issues.length} issue(s):`);
      issues.forEach(i => console.log(`    • ${i}`));
    }
  });
}

// ── Summary ───────────────────────────────────────────────────────────────────
test('=== AUDIT SUMMARY ===', async () => {
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
  console.log('  AUDIT SUMMARY');
  console.log('══════════════════════════════════════════════');
  console.log(`  Modules: ${modules.length}  |  Total issues: ${total}`);
  if (total === 0) { console.log('  All clean!'); }
  Object.entries(byType).sort().forEach(([type, items]) => {
    console.log(`\n  [${type}] — ${items.length}:`);
    items.forEach(i => console.log('    ' + i.slice(0, 110)));
  });
  console.log('\n══════════════════════════════════════════════\n');
});
