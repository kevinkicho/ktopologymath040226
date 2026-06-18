# Changelog — June 2026

## Overview

General bug-fix session targeting runtime errors, animation auto-start, canvas sizing, and performance across ~35 modules. Root causes fell into four categories: (1) canvas dimensions zero at draw time because layout hadn't completed, (2) stale RAF handles / boolean flags captured before variable assignment, (3) root-absolute asset paths broken under project subpath deployment, and (4) missing or miswired animation start calls.

---

## Path Fixes (69 HTML files + assets)

- Converted root-absolute href/src paths (`/ktopologymath040226/...`) to relative everywhere — all 69 `.html` files, `manifest.json`, and `sw.js` — for deployment at `kevinkicho.github.io/ktopologymath040226/`.

---

## CI / Deployment

- Added `.github/workflows/deploy-pages.yml` for GitHub Actions Pages deployment.
- Replaced stale Gradle CI (`ci.yml`) with node-based boot-verify CI (installs deps, starts server, pings health endpoint).

---

## Shared Infrastructure

| File | Fix |
|---|---|
| `auto-start.js` | `resizeCanvas` null guard added; now returns `[W, H, ctx]` to match local overrides (fixes cascade destructure errors) |

---

## Module Fixes

| Module | Fix |
|---|---|
| 12_gauge_theory | RAF handle captured in mutable object instead of array literal (array captured null at script load) |
| 15_quaternions | `resizeCanvas` infinite recursion — guard against re-entrant calls |
| 16_diff_forms | `wedgeAnimT` TDZ (`let` → `var`); deferred `init()` calls via `setTimeout` |
| 17_fiber_bundles | SU(2) Yang-Mills field: offscreen canvas cache for static background + 256-entry colour LUT (eliminated per-pixel `hslToRgb`) |
| 21_quantum_measurement | `switchTab` layout timing: wrap tab init in `setTimeout` |
| 24_loop_quantum_gravity | `toggleAnim` button selected by wrong `querySelectorAll` index |
| 25_higgs_field | LHC/Yukawa/EWP/Vac animations: `setTimeout` for start + pulsing rAF loops |
| 28_ccc_or | CMB Hawking points: offscreen canvas cache for static Perlin noise field |
| 31_instantons | Default speed set to 0.1; boolean flags reset in `_cancelAllAnims31` |
| 32_representation_theory | Clebsch–Gordan chart: rAF for layout timing + looping animation via modulo |
| 34_riemann_zeta | GUE / Functional Equation animation booleans reset; looping re-enabled |
| 36_riemann_surfaces | Boolean flag resets in `_cancelAllAnims36`; `btnTorusSpin` added to reset list |
| 37_maxwell | "undefined is not iterable" cascade — resolved by auto-start `resizeCanvas` return-value fix |
| 39_quantum_field_theory | RG/LSZ/Fock animation state booleans; speed slider width set to 80px |
| 41_homotopy | Bott periodicity tab: auto-start added |
| 42_clifford_algebras | Multiplication-table animation loop — rAF in `toggleAnim3` |
| 43_conformal_field_theory | AdS/CFT temperature default changed to 0.75 |
| 45_bell_theorem | CHSH formula signs corrected; `E(θ)` angle normalization (wrap to 0–2π); optimal QM angles |
| 46_gravitational_waves | Auto-start tabs 1/2/3; `draw1`/`draw2`/`draw3` called inside `start1`/`start2`/`start3` |
| 47_quantum_optics | Syntax error: orphaned event handlers outside `initPane2` |
| 49_quantum_networks | Missing `animQec`/`animPhoton` flags; Micius Earth position; button state on start |
| 50_semiconductor_quantum | NaN `t0` — replaced sync loop with rAF pattern |
| 52_category_theory | `drawOmega` pulsing animation wired through `tab3T` |
| 53_attosecond | Removed call to undefined `syncSpeed53` |
| 54_trapped_ions | Removed stray `switchTab(0)` call that blanked the page |
| 55_neutrino_oscillations | `fitCanvas` fallback dimensions; `setTimeout` in `switchTab` for layout timing |
| 56_muon_g2 | Same pattern as 55 |
| 57_nuclear_fusion | Same pattern as 55 |
| 58_dark_energy | `_tabSignal = null` → `new AbortController()` |
| 59_spin_glasses | Same AbortController fix as 58 |
| 60_penrose_singularity | Added rAF loop for guided tour animation |
| 61_string_theory | Calabi–Yau shape size: `scaledR` 0.3 → 1.0 |
| 62_adscft | Holographic RG animation start + `rgAnimating` flag reset |

---

## Graph3D

- Rotation speed: 0.003 → 0.0008.
- Improved force-directed layout parameters and rendering.

---

## index.html

- Removed redundant "All 01–63" TOC tab.

---

## README

- Added live site URL at the top.
