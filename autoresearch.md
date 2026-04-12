# Autoresearch: Optimize Test Suite Runtime

## Objective
Build a Playwright test suite for all 52 HTML visualization files, then iteratively optimize its total wall-clock runtime. Each test loads a file via the local Express server (port 4271), waits for the canvas/content to appear, and checks for no uncaught JS errors.

## Primary Metric
**Total test suite wall-clock time (seconds)** — lower is better.

## Secondary Metrics
- Pass rate (must stay at 100% — never sacrifice correctness for speed)
- Per-file median load time

## Constraints
- All 53 files (52 numbered + 1 duplicate `25_string_theory.html`) must pass
- Tests must actually load pages in a real browser (Chromium headless)
- The Express server must be running on port 4271 during the test run
- Changes to HTML/JS source files are allowed only if they genuinely improve render time

## Run Command
```bash
npx playwright test
```

## Current Best Configuration
- **File**: `playwright.config.js` + `tests/visualizations.spec.js`
- **Workers**: 8
- **Wait strategy**: `domcontentloaded` + canvas-ready poll (`canvas.width > 0`)
- **CDN mocking**: KaTeX (katex.min.js, auto-render.min.js, katex.min.css) → local stubs
- **Browser flags**: lean set (`--disable-gpu`, `--no-sandbox`, `--disable-extensions`, `--disable-background-networking`, `--disable-sync`, `--mute-audio`, `--no-first-run`, `--disable-translate`)

## Results Summary

| Run | Label                   | Total ms | Passed | Notes                                      |
|-----|-------------------------|----------|--------|--------------------------------------------|
| 0   | baseline                | 37360    | 52/53  | Files 01-04 hit CDN cold: 13.6s each       |
| 1   | exp1-cdn-mock           | 14833    | 53/53  | Mock KaTeX CDN; fix renderMathInElement    |
| 2   | exp2-8workers-smart-wait| 9555     | 53/53  | 8 workers + canvas-ready poll              |
| 3   | exp3-12workers          | 13311    | 53/53  | REGRESSED: too much contention             |
| 4   | exp4-load-150ms         | 11350    | 53/53  | REGRESSED: waitUntil:load is slower        |
| 5   | exp5-lean-chromium      | 8828     | 53/53  | **BEST**: lean browser flags               |
| 6   | exp6-context-routes     | 11215    | 53/53  | REGRESSED: custom fixture overhead         |
| 7   | exp7-6workers           | 10171    | 53/53  | REGRESSED: fewer workers = more batches    |

**Total improvement: 37.4s → 8.8s (76% faster)**

## Key Findings
1. **CDN cold-start was the biggest bottleneck** (13.6s per file for first 4 tests). Mocking KaTeX locally cut this to ~1.6s — a 12× speedup for those files.
2. **8 workers is the sweet spot** on this machine. 12 workers causes resource contention; 6 is too sequential.
3. **Canvas-ready poll beats fixed sleep**: polling exits as soon as the canvas is drawn, saving 100-300ms per test vs. a fixed 500ms wait.
4. **Lean Chromium flags save ~150ms per test** by disabling background services, extensions, and first-run UI.
5. **Context-level routes add overhead** — per-page route setup (3 calls) is faster than a custom fixture.

## Possible Next Experiments
- Serve KaTeX locally (add `node_modules/katex` to `package.json` and serve it via Express), eliminating the need for stubs
- Investigate the 1.7-2.1s first-batch time further (browser startup vs. canvas init)
- Try `chromium_headless_shell` executable path directly
- Try `--single-process` Chromium flag (risky for parallel workers)
