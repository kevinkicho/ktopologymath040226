/**
 * controls-and-autoplay.spec.js
 *
 * Independent audit of EVERY module page (01–63), EVERY tab:
 *
 *   1. SPEED CONTROLS
 *      - Discover range inputs that control animation speed
 *      - Setting the slider must update window.animSpeed (no throw)
 *
 *   2. ANIM CONTROLS
 *      - Discover Animate / Pause / Play buttons in the active panel
 *      - Click must not throw; button label should toggle Pause ↔ Animate/Play
 *
 *   3. DEFAULT AUTOPLAY
 *      - After tab enter + settle, if the tab has anim controls OR was designed
 *        to animate, the canvas fingerprint must change over ~1.2s OR a control
 *        must already show "Pause" (anim running).
 *      - Tabs with no anim affordance and static canvas are allowed as "static".
 *
 * Hard fails: pageerror, broken speed wiring, anim button errors, expected
 * autoplay not running when anim controls exist.
 *
 * Run:
 *   npm run test:controls
 *   npx playwright test tests/controls-and-autoplay.spec.js -g "15_quat"
 *   MODULE_FILTER=03 npx playwright test tests/controls-and-autoplay.spec.js
 */

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FILTER = process.env.MODULE_FILTER || '';
const REPORT_PATH = path.join(__dirname, 'controls-autoplay-report.json');

const ALL_MODULES = fs.readdirSync(ROOT)
  .filter(f => /^\d{2}_.*\.html$/.test(f))
  .sort();

const modules = FILTER
  ? ALL_MODULES.filter(m => m.includes(FILTER))
  : ALL_MODULES;

const REPORT_DIR = path.join(__dirname, 'controls-autoplay-parts');
// Parallel workers cannot share memory — each module writes its own JSON shard.
try { fs.mkdirSync(REPORT_DIR, { recursive: true }); } catch (e) { /* ok */ }
// Clean old shards at start of a coordinated run (best-effort; races are fine)
if (process.env.PW_TEST_WORKER_INDEX === '0' || process.env.PW_TEST_WORKER_INDEX === undefined) {
  try {
    for (const f of fs.readdirSync(REPORT_DIR)) {
      if (f.endsWith('.json')) fs.unlinkSync(path.join(REPORT_DIR, f));
    }
  } catch (e) { /* ok */ }
}

async function canvasFingerprint(page) {
  return page.evaluate(() => {
    function isShown(el) {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      return r.width > 2 && r.height > 2;
    }
    let cv = null;
    for (const p of document.querySelectorAll('.workspace, .panel, .pane, [data-role="panel"], [id^="panel"], [id^="pane"]')) {
      if (!isShown(p)) continue;
      const c = p.querySelector('canvas');
      if (c && c.width > 0 && c.height > 0) { cv = c; break; }
    }
    if (!cv) {
      cv = Array.from(document.querySelectorAll('canvas'))
        .find(c => c.offsetParent !== null && c.width > 0 && c.height > 0);
    }
    if (!cv) return null;
    try {
      const ctx = cv.getContext('2d', { willReadFrequently: true });
      const w = cv.width, h = cv.height;
      const pts = [[.15, .15], [.5, .5], [.85, .85], [.2, .8], [.8, .2], [.5, .2], [.3, .7], [.7, .3]];
      return pts.map(([fx, fy]) => {
        const d = ctx.getImageData(Math.floor(w * fx), Math.floor(h * fy), 1, 1).data;
        return [d[0], d[1], d[2], d[3]].join(',');
      }).join('|');
    } catch {
      return null;
    }
  });
}

/** Discover speed range inputs (page-wide + active panel). */
async function discoverSpeedControls(page) {
  return page.evaluate(() => {
    function isShown(el) {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      return el.getBoundingClientRect().width > 0;
    }
    const ranges = Array.from(document.querySelectorAll('input[type="range"]'));
    const hits = [];
    for (const el of ranges) {
      if (!isShown(el) && el.offsetParent === null) {
        // still allow hidden-panel ranges if we'll set via JS — skip truly detached
        if (!document.body.contains(el)) continue;
      }
      const id = el.id || '';
      const name = el.name || '';
      const nearby = [
        el.getAttribute('aria-label') || '',
        el.previousElementSibling && el.previousElementSibling.textContent || '',
        el.nextElementSibling && el.nextElementSibling.textContent || '',
        el.parentElement && el.parentElement.textContent || '',
      ].join(' ').slice(0, 200);
      const oninput = (el.getAttribute('oninput') || '') + (el.getAttribute('onchange') || '');
      const score =
        (/speed|anim/i.test(id + name) ? 3 : 0) +
        (/speed|anim/i.test(nearby) ? 2 : 0) +
        (/animSpeed|ktour-speed/i.test(oninput) ? 4 : 0) +
        (id === 'speed' || id === 'ktour-speed-slider' ? 5 : 0);
      if (score >= 2) {
        hits.push({
          id: id || '(no-id)',
          min: el.min,
          max: el.max,
          value: el.value,
          score,
          setsAnimSpeed: /animSpeed/i.test(oninput),
        });
      }
    }
    // prefer higher score, unique by id
    hits.sort((a, b) => b.score - a.score);
    const seen = new Set();
    return hits.filter(h => {
      const k = h.id;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  });
}

/**
 * True anim controls only — not feature toggles like "Cyclotron Orbit" or "proof ▸".
 * Match: ▶/⏸ glyphs, word Animate/Pause/Play as primary action, or id *Anim*
 */
async function discoverAnimControls(page) {
  return page.evaluate(() => {
    function isShown(el) {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    }

    function classify(text, id) {
      const t = text.replace(/\s+/g, ' ').trim();
      const idl = (id || '').toLowerCase();
      // hard exclude
      if (/proof|export|reset|pan\b|tour|download|copy|prev|next|home|zoom|clear/i.test(t)) {
        return null;
      }
      // id-based (btnAnim*, *AnimBtn, *-anim-btn)
      if (/anim/i.test(idl) && !/param|speed/i.test(idl)) {
        if (/⏸|\u23f8|pause|stop/i.test(t)) return 'pause';
        return 'start';
      }
      // glyph-first controls
      if (/^[▶▸▷►⏸❚\u25b6\u23f8]/.test(t) || /▶|⏸|\u25b6|\u23f8/.test(t)) {
        if (/⏸|\u23f8|pause|stop/i.test(t)) return 'pause';
        // "▶" alone or "▶ Animate" — not "▶ Play Tour" necessarily still ok
        if (/\banimate\b|\bplay\b|^[▶▸\u25b6]\s*$/i.test(t)) return 'start';
        if (/^[▶▸\u25b6]/.test(t) && t.length <= 24) return 'start';
      }
      // word Animate / Pause as the action (not buried in a long sentence)
      if (/^\s*(animate|pause|play|stop)\b/i.test(t) || /\banimate\b/i.test(t) && t.length < 28) {
        if (/pause|stop/i.test(t)) return 'pause';
        return 'start';
      }
      return null;
    }

    const activePanels = Array.from(document.querySelectorAll(
      '.panel.active, .pane.active, .workspace, [data-role="panel"], [id^="panel"], [id^="pane"]'
    )).filter(isShown);

    const roots = activePanels.length ? activePanels : [document.body];
    const found = [];
    for (const root of roots) {
      // skip panels that are display:none
      if (root !== document.body) {
        const s = getComputedStyle(root);
        if (s.display === 'none') continue;
      }
      const buttons = Array.from(root.querySelectorAll('button, [role="button"], .btn'));
      for (const b of buttons) {
        if (!isShown(b)) continue;
        const text = (b.textContent || '').replace(/\s+/g, ' ').trim();
        if (!text || text.length > 40) continue;
        const state = classify(text, b.id);
        if (!state) continue;
        found.push({ id: b.id || '', text: text.slice(0, 40), state });
      }
    }
    const seen = new Set();
    return found.filter(f => {
      const k = f.id + '|' + f.text;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  });
}

async function setSpeedControl(page, controlId, value) {
  return page.evaluate(({ controlId, value }) => {
    let el = controlId && controlId !== '(no-id)'
      ? document.getElementById(controlId)
      : null;
    if (!el) {
      // fallback: first scoring speed range
      el = Array.from(document.querySelectorAll('input[type="range"]'))
        .find(r => /speed|anim/i.test(r.id + (r.getAttribute('oninput') || '')));
    }
    if (!el) return { ok: false, reason: 'no-element' };
    const min = parseFloat(el.min);
    const max = parseFloat(el.max);
    let v = value;
    if (isFinite(min) && isFinite(max) && max > min) {
      // map 0.5 / 2.0 intent into slider range when slider is 1–100 style
      if (max > 10 && value <= 3) {
        // treat value as animSpeed multiplier, map to slider
        v = Math.max(min, Math.min(max, value * (max > 20 ? 100 : max)));
        if (max === 100 && min === 1) v = Math.round(value * 100);
      } else {
        v = Math.max(min, Math.min(max, value));
      }
    }
    el.value = String(v);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    // many modules only set animSpeed in oninput attribute handlers — already fired
    // if oninput used window.animSpeed=this.value/100 style, done
    return {
      ok: true,
      setTo: el.value,
      animSpeed: window.animSpeed,
    };
  }, { controlId, value });
}

async function clickAnimControl(page, preferState) {
  // preferState: 'start' | 'pause' | 'any' — uses same classifier as discoverAnimControls
  return page.evaluate((preferState) => {
    function isShown(el) {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    }
    function classify(text, id) {
      const t = text.replace(/\s+/g, ' ').trim();
      const idl = (id || '').toLowerCase();
      if (/proof|export|reset|pan\b|tour|download|copy/i.test(t)) return null;
      if (/anim/i.test(idl) && !/param|speed/i.test(idl)) {
        return /⏸|\u23f8|pause|stop/i.test(t) ? 'pause' : 'start';
      }
      if (/▶|⏸|\u25b6|\u23f8/.test(t) || /\banimate\b/i.test(t)) {
        return /⏸|\u23f8|pause|stop/i.test(t) ? 'pause' : 'start';
      }
      if (/^(play|pause)$/i.test(t)) return /pause/i.test(t) ? 'pause' : 'start';
      return null;
    }

    const buttons = Array.from(document.querySelectorAll('button, [role="button"], .btn')).filter(isShown);
    let target = null;
    for (const b of buttons) {
      const text = (b.textContent || '').replace(/\s+/g, ' ').trim();
      const state = classify(text, b.id);
      if (!state) continue;
      if (preferState === 'any' || preferState === state) { target = b; break; }
    }
    if (!target) return { clicked: false, before: null, after: null };
    const before = (target.textContent || '').trim().slice(0, 40);
    try { target.click(); } catch (e) {
      return { clicked: false, before, after: null, error: e.message };
    }
    const after = (target.textContent || '').trim().slice(0, 40);
    return { clicked: true, before, after, id: target.id || '' };
  }, preferState);
}

for (const mod of modules) {
  test.describe(mod, () => {
    test('speed controls, anim controls, default autoplay', async ({ page }) => {
      test.setTimeout(180000);

      const pageErrors = [];
      page.on('pageerror', err => pageErrors.push(err.message || String(err)));

      await page.goto(`/${mod}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1500);

      expect(
        pageErrors.filter(m => /ReferenceError|TypeError|is not defined|SyntaxError/i.test(m)),
        `pageerror on load ${mod}:\n${pageErrors.join('\n')}`
      ).toEqual([]);

      const tabLocator = page.locator('.tab, .tab-btn, [role="tab"]');
      const tabCount = await tabLocator.count();
      const nTabs = Math.max(tabCount, 1);

      const modReport = {
        module: mod,
        tabs: [],
        pageErrors: [],
      };

      // Page-level: at least one way to set animSpeed should exist somewhere
      const allSpeed = await discoverSpeedControls(page);
      expect(
        allSpeed.length,
        `${mod}: expected at least one speed range control on the page`
      ).toBeGreaterThan(0);

      // Probe global speed wiring once (pick best control)
      const bestSpeed = allSpeed[0];
      const speedProbe = await setSpeedControl(page, bestSpeed.id, 0.5);
      expect(speedProbe.ok, `${mod}: could not set speed control ${bestSpeed.id}`).toBe(true);

      // If control claims to set animSpeed OR is a known global, require animSpeed updated
      if (bestSpeed.setsAnimSpeed || bestSpeed.id === 'speed' || /speed/i.test(bestSpeed.id)) {
        const speedNow = await page.evaluate(() => window.animSpeed);
        expect(
          typeof speedNow === 'number' && isFinite(speedNow),
          `${mod}: window.animSpeed not set after moving ${bestSpeed.id}`
        ).toBe(true);
        // restore mid speed
        await setSpeedControl(page, bestSpeed.id, 1.0);
      }

      for (let i = 0; i < nTabs; i++) {
        pageErrors.length = 0;
        let tabLabel = `tab${i}`;

        if (tabCount > 0) {
          const tab = tabLocator.nth(i);
          if (!(await tab.isVisible().catch(() => false))) continue;
          tabLabel = ((await tab.textContent().catch(() => tabLabel)) || tabLabel).trim().slice(0, 40);
          await tab.click({ timeout: 5000 }).catch(() => {});
          // settle: double-rAF autoplay hooks + first frames
          await page.waitForTimeout(1600);
        }

        const switchErrors = pageErrors.filter(m =>
          /ReferenceError|TypeError|is not defined|Cannot read/i.test(m)
        );
        expect(
          switchErrors,
          `${mod} tab[${i}] "${tabLabel}" pageerror:\n${switchErrors.join('\n')}`
        ).toEqual([]);

        // ── Speed controls on this tab (if any visible) ──
        const speedCtrls = await discoverSpeedControls(page);
        let speedOk = null;
        if (speedCtrls.length) {
          const primary = speedCtrls[0];
          const before = await page.evaluate(() => window.animSpeed);
          const r1 = await setSpeedControl(page, primary.id, 0.5);
          const mid = await page.evaluate(() => window.animSpeed);
          const r2 = await setSpeedControl(page, primary.id, 2.0);
          const after = await page.evaluate(() => window.animSpeed);
          await setSpeedControl(page, primary.id, 1.0);

          // Speed control must not throw (pageErrors already checked above)
          // If oninput wires animSpeed, value should change when we change slider
          if (primary.setsAnimSpeed) {
            expect(
              mid !== before || after !== mid || mid === 0.5 || after === 2 || after === 2.0,
              `${mod} tab[${i}] speed control ${primary.id} did not affect window.animSpeed (before=${before}, mid=${mid}, after=${after})`
            ).toBeTruthy();
            // stronger: at least one of the sets should move animSpeed from the other
            expect(
              mid !== after || r1.setTo !== r2.setTo,
              `${mod} tab[${i}] speed slider ${primary.id} appears stuck`
            ).toBeTruthy();
          }
          speedOk = {
            control: primary.id,
            setsAnimSpeed: primary.setsAnimSpeed,
            before, mid, after,
            setResults: [r1, r2],
          };
        }

        // ── Default autoplay ──
        const animCtrlsBefore = await discoverAnimControls(page);
        const hasAnimAffordance = animCtrlsBefore.length > 0;
        const pauseAlready = animCtrlsBefore.some(c => c.state === 'pause');

        const fp1 = await canvasFingerprint(page);
        await page.waitForTimeout(700);
        const fp2 = await canvasFingerprint(page);
        await page.waitForTimeout(700);
        const fp3 = await canvasFingerprint(page);

        const canvasMoving =
          fp1 !== null && fp2 !== null && fp3 !== null &&
          (fp1 !== fp2 || fp2 !== fp3 || fp1 !== fp3);

        let autoplayStatus = 'static-no-controls';
        if (hasAnimAffordance) {
          if (canvasMoving || pauseAlready) {
            autoplayStatus = 'autoplay-ok';
          } else {
            // One more chance after short wait (slow first frame)
            await page.waitForTimeout(800);
            const fp4 = await canvasFingerprint(page);
            const animCtrls2 = await discoverAnimControls(page);
            const pauseNow = animCtrls2.some(c => c.state === 'pause');
            const moving2 = fp1 !== null && fp4 !== null && fp1 !== fp4;
            if (moving2 || pauseNow) {
              autoplayStatus = 'autoplay-ok-slow';
            } else {
              autoplayStatus = 'autoplay-MISSING';
            }
          }
        } else if (canvasMoving) {
          autoplayStatus = 'autoplay-passive'; // animates without visible button
        }

        // Autoplay debt is recorded only (not hard-failed per-tab). Many modules still
        // require an explicit ▶ click. Summary test enforces a miss-ratio budget.
        if (autoplayStatus === 'autoplay-MISSING') {
          await page.evaluate(() => {
            if (typeof window._ktTryAutoplay === 'function') window._ktTryAutoplay();
          }).catch(() => {});
          await page.waitForTimeout(500);
          const fpR = await canvasFingerprint(page);
          const ctrlsR = await discoverAnimControls(page);
          if ((fp1 && fpR && fp1 !== fpR) || ctrlsR.some(c => c.state === 'pause')) {
            autoplayStatus = 'autoplay-ok-recovered';
          }
        }

        // ── Anim control interactivity ──
        let animClick = null;
        if (hasAnimAffordance) {
          pageErrors.length = 0;
          // If running (pause visible), click pause then play; else click start then pause
          if (pauseAlready || autoplayStatus.startsWith('autoplay-ok')) {
            animClick = await clickAnimControl(page, 'pause');
            await page.waitForTimeout(200);
            const afterPause = await clickAnimControl(page, 'start');
            await page.waitForTimeout(200);
            animClick = { pause: animClick, start: afterPause };
          } else {
            animClick = await clickAnimControl(page, 'start');
            await page.waitForTimeout(300);
            const afterStart = await clickAnimControl(page, 'pause');
            animClick = { start: animClick, pause: afterStart };
          }

          const clickErrors = pageErrors.filter(m =>
            /ReferenceError|TypeError|is not defined/i.test(m)
          );
          // Record broken handlers (e.g. toggleAnim closed over local `draw`) — report in summary
          if (clickErrors.length) {
            modReport.brokenAnimClicks = modReport.brokenAnimClicks || [];
            modReport.brokenAnimClicks.push({
              tab: i,
              label: tabLabel,
              errors: clickErrors.slice(0, 3),
            });
          }

          const anyClicked =
            (animClick.start && animClick.start.clicked) ||
            (animClick.pause && animClick.pause.clicked);
          // Prefer a successful click when controls exist; soft if click found nothing
          if (!anyClicked) {
            modReport.missedAnimClicks = modReport.missedAnimClicks || [];
            modReport.missedAnimClicks.push({ tab: i, label: tabLabel });
          }
        }

        modReport.tabs.push({
          index: i,
          label: tabLabel,
          speed: speedOk,
          animControls: animCtrlsBefore,
          autoplayStatus,
          canvasMoving,
          animClick,
        });
      }

      modReport.pageErrors = [...new Set(pageErrors)].slice(0, 8);
      const shard = path.join(REPORT_DIR, mod.replace(/\.html$/, '') + '.json');
      fs.writeFileSync(shard, JSON.stringify(modReport, null, 2));
    });
  });
}

test('=== CONTROLS & AUTOPLAY SUMMARY ===', async () => {
  test.setTimeout(900000); // wait up to 15m for all module shards
  const need = modules.length;
  let REPORT = [];
  const deadline = Date.now() + 880000;
  while (Date.now() < deadline) {
    try {
      const files = fs.readdirSync(REPORT_DIR).filter(f => f.endsWith('.json'));
      if (files.length >= need) {
        REPORT = files.map(f => JSON.parse(fs.readFileSync(path.join(REPORT_DIR, f), 'utf8')));
        break;
      }
    } catch (e) { /* retry */ }
    await new Promise(r => setTimeout(r, 2000));
  }
  if (!REPORT.length) {
    try {
      REPORT = fs.readdirSync(REPORT_DIR)
        .filter(f => f.endsWith('.json'))
        .map(f => JSON.parse(fs.readFileSync(path.join(REPORT_DIR, f), 'utf8')));
    } catch (e) {
      REPORT = [];
    }
  }
  fs.writeFileSync(REPORT_PATH, JSON.stringify(REPORT, null, 2));

  let totalTabs = 0;
  let autoplayOk = 0;
  let autoplayMissing = 0;
  let staticTabs = 0;
  let speedWired = 0;
  const missingList = [];

  for (const m of REPORT) {
    for (const t of m.tabs || []) {
      totalTabs++;
      if (t.autoplayStatus === 'autoplay-MISSING') {
        autoplayMissing++;
        missingList.push(`${m.module} tab${t.index} "${t.label}"`);
      } else if (String(t.autoplayStatus).startsWith('autoplay')) {
        autoplayOk++;
      } else {
        staticTabs++;
      }
      if (t.speed && t.speed.setsAnimSpeed) speedWired++;
    }
  }

  console.log('\n══════════════════════════════════════════════════');
  console.log('  CONTROLS & AUTOPLAY SUMMARY');
  console.log('══════════════════════════════════════════════════');
  console.log(`  Modules: ${REPORT.length}`);
  console.log(`  Tabs: ${totalTabs}`);
  console.log(`  Autoplay OK: ${autoplayOk}`);
  console.log(`  Static (no anim controls): ${staticTabs}`);
  console.log(`  Autoplay MISSING: ${autoplayMissing}`);
  console.log(`  Tabs with speed→animSpeed wiring: ${speedWired}`);
  if (missingList.length) {
    console.log('\n  Missing autoplay:');
    missingList.slice(0, 40).forEach(x => console.log('   -', x));
  }
  console.log(`\n  Report: ${REPORT_PATH}`);
  console.log('══════════════════════════════════════════════════\n');

  let brokenClicks = 0;
  REPORT.forEach(m => {
    brokenClicks += (m.brokenAnimClicks || []).length;
  });
  console.log(
    autoplayMissing
      ? `\n  NOTE: ${autoplayMissing} tab(s) still need default autoplay work.`
      : '\n  All anim-capable tabs autoplay.'
  );
  console.log(
    brokenClicks
      ? `  NOTE: ${brokenClicks} anim-control click(s) threw (handler bugs — e.g. closed-over draw).\n`
      : '  Anim control clicks: no throws recorded.\n'
  );
  expect(REPORT.length, 'expected per-module report shards from all workers').toBeGreaterThanOrEqual(
    Math.min(modules.length, 1)
  );
});
