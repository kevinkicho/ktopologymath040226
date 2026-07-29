# Changelog — July 2026

## Overview

Canvas layout / blank-tab fixes, Schwinger–Dyson logic corrections, exhaustive every-canvas Playwright guard, and documentation for pre-commit testing.

## Hard guards

| Item | Detail |
|------|--------|
| `tests/all-canvases.spec.js` | New: every module × every tab × every active-panel canvas |
| `npm run test:all-canvases` | Dedicated script |
| `npm run test:all-guards` | Now includes all-canvases with lifecycle, controls, layout, fit |
| `docs/TESTING.md` | Pre-commit guide + blank-canvas failure modes |

## Blank-tab / nesting fixes

Raw `<` in HTML LaTeX was parsed as tags and swallowed `</div>`s, nesting late panels inside `display:none` parents (0×0 canvas).

| Module | Fix |
|--------|-----|
| `62_adscft.html` | dS Holography: `\sum_{i_1\lt\cdots\lt i_q}`; `_fixPaneParents62`; id activation; double-rAF start |
| `54_trapped_ions.html` | Ion-Photon / Metrology / Scalable reparent; Ising `i\lt j` |
| `41_homotopy.html` | Hurewicz `$k\lt n$` (panes 9–14 were nested under pane 8) |
| `48_topological_matter.html` | Laughlin `i\lt j` |
| `19_general_relativity.html` | Lens inequality `$0\lt\|\beta\|\lt\theta_E$` |

## Physics / content fixes

| Module | Fix |
|--------|-----|
| `22_path_integrals.html` | Schwinger–Dyson Dyson form + mean-field residual Newton solve |
| `39_quantum_field_theory.html` | Matching SD / diagram captions |

## Docs

- `README.md` — Testing section rewritten for 63 modules + guard suite  
- `docs/TESTING.md` — new  
- `docs/TAB_CONTROLLER.md` — points at full guards  
