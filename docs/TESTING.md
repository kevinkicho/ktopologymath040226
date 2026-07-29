# Testing & Pre-commit Guards

Playwright hard guards for all **63** numbered modules (`01_*.html` … `63_*.html`).  
CI (`.github/workflows/ci.yml`) only verifies the Express server boots; run the full guard suite **locally before push**.

## Quick commands

```bash
npm install
npx playwright install chromium   # once per machine

# Recommended pre-commit (all hard guards)
npm run test:all-guards

# Individual suites
npm run test:lifecycle
npm run test:controls
npm run test:layout
npm run test:fit
npm run test:all-canvases

# Filter one module
MODULE_FILTER=62 npm run test:all-canvases
npx playwright test tests/tab-lifecycle.spec.js -g "15_quaternions"
```

Server: Playwright starts Express on port **4271** via `playwright.config.js` (`reuseExistingServer: true`).

## Hard guard specs

| Spec | npm script | Scope | Hard fail conditions |
|------|------------|--------|----------------------|
| `tests/tab-lifecycle.spec.js` | `test:lifecycle` | Every visible tab | `ReferenceError` / `TypeError` on load or switch; duplicate labels; ≥50% canvas tabs blank |
| `tests/controls-and-autoplay.spec.js` | `test:controls` | Every tab | Control clicks throw; reports speed wiring + default autoplay |
| `tests/canvas-layout.spec.js` | `test:layout` | Primary canvas per tab | Default 300×150, tiny wrap, bad DPR, layout collapse |
| `tests/canvas-fit-and-labels.spec.js` | `test:fit` | Canvas + DOM labels | Content outside bounds; colliding labels |
| `tests/all-canvases.spec.js` | `test:all-canvases` | **Every canvas** in active panel | Zero CSS size; nested under `display:none`; nested inactive panels; blank dense sample; stuck 300×150 |

`test:all-guards` runs all five.

### all-canvases (exhaustive)

Added July 2026 after empty late tabs (Ion-Photon / Metrology / dS Holography).

For each module:

1. Load without pageerror  
2. Click every `.tab` / `.tab-btn` / `[role="tab"]`  
3. Measure **all** canvases in the active `.panel` / `.pane` / `.workspace` / `[role="tabpanel"]`  
4. Skip canvases that only exist because inactive tab panels were wrongly nested (but **hard-fail** that nesting)  
5. Dense pixel sample (stride ≈ min(W,H)/96) so sparse line drawings still count as painted  

Report shards: `tests/all-canvases-parts/*.json` → merged `tests/all-canvases-report.json` (local; usually untracked).

## Soft audits (reporting)

| Spec | Purpose |
|------|---------|
| `tests/audit.spec.js` | KaTeX, overflow, blank samples, tab click stability |
| `tests/deep-audit.spec.js` | Speed/animate buttons, frozen canvases, tour scripts |
| `tests/full-tab-audit.spec.js` | Per-tab issue inventory |
| `tests/passive-anim-test.spec.js` | Passive animation vs static |
| `tests/visualizations.spec.js` | Smoke: page loads without crash |

These print summaries and may still **pass** while listing soft issues. Prefer hard guards for gatekeeping.

## Failure modes we hard-fail

### 1. Nested panels (0×0 canvas)

**Symptom:** Late tab looks empty; main canvas never paints.

**Cause:** Unescaped `<` in HTML math, e.g.

```html
<!-- BAD: browser parses <n or <j as a tag and swallows closing </div>s -->
$k<n$
\sum_{i<j}
```

Later `.panel` / `.pane` nodes nest inside an earlier panel. When the parent is `display:none`, children stay **0×0**.

**Fix:**

```html
$k\lt n$
\sum_{i\lt j}
```

Optional runtime recovery (examples in `54_trapped_ions.html`, `62_adscft.html`):

- Reparent panels under `.content` / `#main`
- Activate panels by **id**, not only index
- Double-`requestAnimationFrame` before first draw

### 2. Resize never runs

Canvas bitmap stuck at default **300×150** while CSS is large → `test:layout` / `test:all-canvases` fail. Ensure `switchTab` / `startTab` resizes after layout (double-rAF).

### 3. pageerror on switch

Missing helpers (`_setPauseBtn`), TDZ (`const` used before init), bad `getElementById` → lifecycle hard fail.

## Pre-commit checklist

1. `npm run test:all-guards` (or at least `test:all-canvases` + `test:lifecycle` for the modules you touched)  
2. Boot check: `PORT=3100 node server.js` then `curl -sf http://localhost:3100/`  
3. Commit source + docs; do **not** require committing `tests/*-report.json` / `tests/*-parts/`  
4. `git push origin main` → CI boot + Pages deploy  

## Related docs

- [`TAB_CONTROLLER.md`](TAB_CONTROLLER.md) — optional tab lifecycle helper  
- [`ANIMATION_FIXES.md`](ANIMATION_FIXES.md) — animation button / cancel patterns  
- [`CHANGELOG_JUNE2026.md`](CHANGELOG_JUNE2026.md) — earlier infra notes  
