# Road to Reality — Math Playground

Interactive visualizations of mathematics from **The Road to Reality** by Sir Roger Penrose, plus 21st-century experimental physics. **63 self-contained modules** — no build step, no bundler, no framework. Served locally via Express.

---

## Quick Start

```bash
npm install   # first time only
node server.js   # starts Express (OS picks port, printed to console)
```

---

## Recent Progress (April 2026)

Major interactive improvements to modules 05, 06, 07, 08, 09, and 13:

### 13_cosmology.html — Cosmology & Quantum Gravity
Complete overhaul of Tab 1 (Penrose Diagram) and Tab 2 (Hawking Radiation), plus animation lifecycle fixes across all 7 tabs:

- **Penrose Diagram**: Replaced single dropdown with 3 independent checkboxes (Light ray, Observer, Labels); checkbox state now correctly toggles visualization elements including static diagram labels (singularity, horizon, region names, i∞, ℐ±); default midpoint rendering when animation not started so elements are always visible; ping-pong animation via `requestAnimationFrame` (replaced `setInterval`)
- **Hawking Radiation**: Split single-view layout into 4 simultaneous quadrants (Temperature vs Mass, Radiation Spectrum, Evaporation Time, Luminosity vs Mass); removed View dropdown; all quadrants update live during evaporation animation; single `bhMass` variable drives slider + sidebar + all quadrant dots in sync; `bhMassBase` stores user's initial mass for animation loop; `userDraggingMass` flag prevents animation from clobbering slider thumb during drag; evaporation animates `bhMass` downward and restores upward in a loop
- **All tabs**: Deferred first-frame rendering via `requestAnimationFrame` wrapper to prevent race condition (canvas dimensions 0 when panel not yet laid out); `cancelAnimationFrame` replaces `clearInterval` throughout; proper animation cleanup in `_cancelAllAnims()`

### 06_complex_calculus.html — Complex Calculus & Riemann Surfaces
Complete overhaul of all 9 tabs with guided tours, animation lifecycle, and DPR-safe rendering:

- **All 9 tabs**: DPR-safe rendering (`setTransform(dpr,0,0,dpr,0,0)` + offscreen canvas for pixel-level domain coloring), responsive canvas sizing via CSS `100%` (no inline px), auto-start animation on tab entry, proper cleanup on exit, `visibilitychange` pause/resume
- **Tab 0 Smooth World**: Taylor series convergence animation, 11-step guided tour, derivative toggles during animation
- **Tab 1 Holomorphic Maps**: Animated z-point with gold trail, pole/zero markers, f(z) phasor display, 8-step guided tour
- **Tab 2 Riemann Surfaces**: Rewritten walk-around-branch-point animation with ghost sheet points, transition flash, f(z) info overlay, sheet/loop counter, 8-step guided tour, auto-start walk animation
- **Tab 3 3D Surface**: Cached auto-fit camera (no breathing during rotation), 7-step guided tour, zoom-fit via wrapper div
- **Tab 4 Laurent & Poles**: Zoom-fit domain coloring so annulus circles stay within panels, pulsing annulus boundaries during animation, large N counter overlay, 6-step guided tour
- **Tab 5 Residue→Real**: 4-step guided tour, auto-start contour animation
- **Tab 6 Analytic Continuation**: Per-demo animation overlays (geom: convergence point tracing, disks: continuation path trail, zeta: evaluation point on ζ landscape), 5-step guided tour
- **Tab 7 Saddle Point**: 4-step guided tour, auto-start N→∞ animation
- **Tab 8 Physics Apps**: 4-step guided tour, auto-start animation
- **Animation lifecycle**: `cancelAllAnimations()` sets all `animating=false` and cancels all rAF loops; each `initXxx()` sets `animating=true` and restarts — no stale frames, no memory leaks

### 09_quantum.html — Quantum Mechanics (completed earlier)
- **Laplace & Z tab**: Complete redesign — all 4 quadrants simultaneous (s-plane, z-plane, Bode, impulse response); live pole/zero dragging on s-plane with z-plane auto-computed via z=e^(sT); pole-stability animation
- **Wavelets tab**: Added auto-starting animation sweeping scale/translation; play/pause/reset/speed controls; fixed scalogram range
- **Fourier Physics tab**: QM wavepacket view-tracking; looping 20-second animations for heat/wave/QM modes
- **Waveforms tab**: Fixed top clipping with padTopY offset
- **Global animation speed**: Unified `setAnimSpeed()` function syncs all sliders

### 07_spinors_lie.html — Lie Groups & Spinors
All 8 tabs now have consistent sidebar+canvas layout, play/pause/reset controls, speed sliders, and auto-start/pause on tab switch:

- **Rotation Groups**: Redesigned from dual-panel to sidebar layout with SO(2)/SO(3)/Both mode selector; auto-rotating animation; educational content on U(1)≅S¹ and RP³ topology
- **SU(2) & Bloch Sphere**: Play/pause/reset for 720° spinor tour; compact SU(2) matrix format; fixed state display overflow
- **Plate Trick (Dirac Belt)**: Belt endpoints now rotate with the plate via proper coordinate transform; toggle 360°/720° looping with 3-second pause at completion; speed slider; gold attachment dots on plate; sidebar moved to left
- **Lie Manifolds**: 3D orbit mode for stereographic S³ projection; speed slider; improved scale and labels; single render loop for path+orbit
- **Exp Map**: Frame-by-frame animation with speed control; auto-start/pause; reset button
- **Matrix overflow fix**: All sidebars have `overflow-x:hidden`; compact `fc()` complex number formatter (e.g. `0.5+0.3i` instead of `0.500+0.000i  0.300+0.000i`)
- **DPR scaling**: Applied `setTransform(dpr,0,0,dpr,0,0)` + CSS pixel coordinates pattern across all draw functions
- **Canvas sizing**: All resize functions use `parentElement.getBoundingClientRect()` instead of canvas

---

## Chapters Covered

### Chapters 01–27 — Penrose Core

| File | Title | Penrose Chapters |
|------|-------|-----------------|
| 01 | Complex Number Explorer | Ch. 4–7 |
| 02 | Penrose Tiling Generator | Ch. 1 |
| 03 | Mandelbrot & Julia Sets | Ch. 7 |
| 04 | Hyperbolic Geometry | Ch. 2–3 |
| 05 | Fourier Series Visualizer | Ch. 9 |
| 06 | Complex Calculus & Riemann Surfaces | Ch. 6–8 |
| 07 | Spinors & Lie Groups | Ch. 13, 22 |
| 08 | Special Relativity & Minkowski Spacetime | Ch. 17–18 |
| 09 | Quantum Mechanics & Wavefunctions | Ch. 21–23 |
| 10 | Lagrangian & Hamiltonian Mechanics | Ch. 19–20 |
| 11 | Dirac Equation & Antiparticles | Ch. 24 |
| 12 | Gauge Theory & QFT | Ch. 25–26 |
| 13 | Cosmology & Quantum Gravity | Ch. 27–34 |
| 14 | Differential Geometry | Ch. 10, 12 |
| 15 | Quaternions & Octonions | Ch. 11 |
| 16 | Differential Forms | Ch. 14 |
| 17 | Fiber Bundles | Ch. 15 |
| 18 | Infinity & Cantor | Ch. 16 |
| 19 | General Relativity | Ch. 17 (deep) |
| 20 | Thermodynamics & Entropy | Ch. 27 |
| 21 | Quantum Measurement | Ch. 29 |
| 22 | Path Integrals & QFT | Ch. 23 |
| 23 | Twistor Theory | Ch. 33 |
| 24 | Loop Quantum Gravity | Ch. 32 |
| 25 | String Theory & Extra Dimensions | Ch. 31 |
| 26 | Number Systems | Ch. 3 |
| 27 | Visual Calculus | Ch. 6 |

### Chapters 28–43 — Deep Dives

| File | Title | Key Topics |
|------|-------|-----------|
| 28 | CCC & Objective Reduction | Conformal cyclic cosmology, OR threshold τ = ℏ/E_G, Weyl curvature hypothesis |
| 29 | Symplectic Geometry | Phase space, Hamiltonian flows, symplectomorphisms |
| 30 | Spinor Calculus | 2-component spinors, twistor incidence relation |
| 31 | Instantons & Topology | BPST instanton, Yang-Mills, topological charge |
| 32 | Representation Theory | Weight diagrams, Dynkin diagrams, Casimir operators |
| 33 | Cohomology | de Rham, Čech, sheaf cohomology |
| 34 | Riemann Zeta | Zeros, Euler product, Riemann hypothesis |
| 35 | Black Holes | Schwarzschild metric, Penrose diagrams, Hawking radiation |
| 36 | Topology & Genus | Surfaces, Euler characteristic χ = 2−2g |
| 37 | Maxwell & Gauge | EM waves, 4-potential, Aharonov-Bohm effect |
| 38 | Standard Model | Particle zoo, Feynman diagrams, Higgs mechanism |
| 39 | Quantum Field Theory | Vacuum fluctuations, Casimir effect, path integrals |
| 40 | Chaos & Dynamical Systems | Hénon attractor, logistic map, Poincaré sections |
| 41 | Homotopy & Covering Spaces | Fundamental group π₁, van Kampen, universal cover |
| 42 | Clifford Algebras & Spinors | Algebra hierarchy, spacetime spinors, Dirac algebra |
| 43 | Conformal Field Theory | OPE, Virasoro algebra, central charge |

### Chapters 44–48 — Nobel Prize Frontiers ★

| File | Title | Nobel | Key Topics |
|------|-------|-------|-----------|
| 44 | Twistor Theory | — | Twistor correspondence, Penrose transform (7 helicity checkboxes), Hopf fibration, Amplituhedron (up to 12 particles) |
| 45 | Bell's Theorem & Nonlocality | 2022 | EPR paradox, CHSH inequality, Aspect experiment, GHZ state |
| 46 | Gravitational Waves & LIGO | 2017 | Binary inspiral with time scrubber, LIGO interferometer, chirp waveform, notable events timeline |
| 47 | Laser Physics & Quantum Optics | 1997/2001/2018 | Laser cooling, BEC, optical tweezers with zoom/pan, CPA |
| 48 | Topological Quantum Matter | 2007/2016 | Quantum Hall effect, Berry phase, topological insulators, GMR |

### Chapters 49–52 — 21st-Century Experimental & Applied

| File | Title | Key Topics |
|------|-------|-----------|
| 49 | Quantum Networks & Micius Satellite | Pan Jianwei's 2017 satellite entanglement (1200 km), quantum teleportation circuit animation, repeater chains with entanglement swapping |
| 50 | Semiconductor Quantum Physics | GAA nanosheet transistors, quantum confinement subbands, spintronics GMR, SOT-MRAM switching |
| 51 | Photonics & Fiber Optics | Bessel waveguide modes, Poincaré sphere (= CP¹ from twistors), TIR evanescent fields, silicon photonics ring resonators, NVLink |
| 52 | Category Theory & Toposes | Draggable commutative diagrams, functors, natural transformations, universal constructions, sheaves as gauge fields, ZX-calculus |

### Chapters 53–60 — Experimental Frontiers ★★

| File | Title | Key Topics |
|------|-------|-----------|
| 53 | Attosecond Physics | Ultrafast laser pulses, HHG, electron wavepacket imaging |
| 54 | Trapped Ion Quantum Computing | Ion qubits, Mølmer-Sørensen gates, decoherence |
| 55 | Neutrino Oscillations | PMNS matrix, 3-flavor probabilities, Raychaudhuri detector view |
| 56 | Muon g−2 Anomaly | Anomalous magnetic moment, BNL/FNAL experiments |
| 57 | Nuclear Fusion | Tokamak, inertial confinement, Lawson criterion |
| 58 | Dark Energy & Cosmological Constant | ΛCDM, supernovae data, equation of state w |
| 59 | Spin Glasses | Edwards-Anderson model, RSB order parameter, Parisi P(q) |
| 60 | Penrose Singularity Theorem | Penrose diagram, Raychaudhuri phase portrait, gravitational collapse animation |

### Standalone
- **`25_higgs_field.html`** — VEV bar with 246 GeV electroweak threshold, Mexican hat potential heatmap, SM mass generation chart

---

## Global Infrastructure

These shared files are injected into every module and serve as the backbone of the UX layer:

### `glossary-data.js`
Shared dataset of 100+ physics and mathematics terms (key, title, level `ug`/`grad`/`res`, definition, related terms). Loaded by all 61 modules and by `glossary.html`.

### `glossary-tooltip.js`
Global term-tooltip engine. Scans page text on idle (`requestIdleCallback`, 2 s timeout) and wraps recognized terms in dashed-underline `<span class="gtip">` elements. Hovering a term shows a pin-able popup:
- Displays term title, difficulty badge (Undergrad / Graduate / Research), definition, and a link to the full glossary entry
- **Hold for 3 seconds** to pin the popup — a Warhammer Total War–style top-border charge bar animates the countdown; the popup then stays open until dismissed
- Pinned popup is fully interactive (link clickable, close button, Escape key)
- `<body data-nogloss>` skips scanning entirely for heavy interactive modules (e.g. 05_fourier)

### `glossary.html`
Standalone searchable glossary with 100+ entries filterable by level. Deep-link anchors (`#g-<key>`) are supported for direct linking from tooltip popups.

### `auto-start.js`
Universal animation launcher and control injector for all modules:
- **On page load** — clicks the first visible start/play button 420 ms after load
- **On tab switch** — clicks the start button in the newly visible panel 380 ms after tab click
- **Live detection** — `canvasIsLive()` skips auto-start if animation is already rendering
- **Watchdog loop** — samples a 5-point canvas fingerprint every 12 s; if the canvas has been static for ~24 s, automatically restarts the animation
- **Per-panel sidebar controls** — injects Animate, Pause, and Speed slider into every module's sidebar/controls panel (broad CSS selector covers both vertical `.sidebar` and horizontal `.controls` layouts)
- **rAF timestamp scaler** — monkey-patches `requestAnimationFrame` to scale virtual time by `window.animSpeed`, giving global speed control. Pause is implemented by skipping callbacks when `window.isPaused` is true
- **Speed persistence** — speed value stored in `sessionStorage` and synced across all injected sliders

---

## Testing

A Playwright audit covers all 61 modules:

```bash
npx playwright test tests/audit.spec.js --workers=2 --reporter=list
```

Checks per module:
1. **KaTeX errors** — no `.katex-error` elements
2. **DOM overflow** — no sidebar/panel escaping its container
3. **Canvas blank** — 16×16 grid pixel sampling detects un-rendered canvases
4. **Console errors** — no uncaught JS errors
5. **Tab stability** — clicking every tab does not crash the page

Current status: **0 issues** across 60/61 modules (05_fourier has a pre-existing headless-Chrome crash on the Epicycles tab unrelated to app code).

---

## Common Architecture

Every file follows the same structure:

```
header  (back link ←, file number badge, title, subtitle)
    ↓
tab bar  (2–3 tabs)
    ↓
workspace  (sidebar with controls + main canvas area)
    ↓
proof panel  (collapsible, KaTeX-rendered derivations — 6 per file)
```

**CSS design tokens (shared):**
```css
--bg:#05050f   --bg2:#0b0b1e   --bg3:#111128
--border:#1c1c44   --text:#c0c0ea   --dim:#55558a
```
Each file adds its own `--accent` color.

**Canvas patterns used throughout:**
- `devicePixelRatio` scaling for crisp retina rendering
- Per-tab `pans[]` and `zooms[]` arrays; scroll-to-zoom + drag-to-pan on every canvas
- Animate offset pattern: free-accumulating `xxxOffset` variable added to slider at draw time (avoids slider-clamp bug)
- RK4 numerical integration for physics simulations
- Painter's algorithm (z-sorted quads) for 3D surfaces, with LOD reduction during drag and rAF-throttled mouse events for smooth interaction

**Dependencies (CDN only):**
- KaTeX 0.16.9 — math equation rendering in proof panels

**No frameworks. No build step. No bundler.**

---

## Features

- **63 interactive modules** with real-time canvas animation at 60 fps
- **Global glossary tooltips** — hover any term to get a definition popup; hold 3 s to pin
- **Auto-start animations** — every module starts its animation automatically on load
- **Animation lifecycle management** — `cancelAllAnimations()` stops all rAF loops and sets `animating=false` on tab switch; each `initXxx()` sets `animating=true` and restarts — implemented in 01, 06, 07, 08, 09, 10, 18, 33 + 7 modules with built-in cleanup; `visibilitychange` handler pauses/resumes all animations when browser tab is hidden/shown
- **Animation watchdog** — detects frozen animations and restarts them automatically (~24 s)
- **KaTeX** equation rendering throughout
- **Per-panel speed controls** — each module has its own Play/Pause/Reset buttons and speed slider (0.1×–3×) integrated into the sidebar; speed reads per-frame for real-time adjustment
- **Guided tours** — step-by-step walkthroughs with progress dots, prev/next navigation, and auto-configuration of sliders/buttons per step (module 06: all 9 tabs; module 09: all 8 tabs)
- **Time scrubber** on binary inspiral (Ch. 46) — drag to rewind to the merger moment
- **Helicity checkboxes** on Penrose transform (Ch. 44) — overlay up to 7 massless field species simultaneously
- **Draggable commutative diagrams** in category theory (Ch. 52)
- **Zoom + pan** on all canvas visualizations via scroll wheel and drag
- TOC sidebar with By File / By Chapter / All 01–61 sorted views, star legend for deep-dive modules

---

*Based on **The Road to Reality** by Sir Roger Penrose · Built with HTML · CSS · JavaScript · April 2026*
