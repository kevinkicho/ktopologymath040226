// tour-data.js — auto-generated 2026-04-04
// 203 tabs · 922 steps · 63 modules

window.KTOUR_DATA = {
  "01_complex_explorer.html": {
    "0": [
      {
        "title": "The Argand Plane",
        "body": "Every complex number $z = a + bi$ lives as a point on the 2D plane — the real part $a$ is the horizontal axis, the imaginary part $b$ is the vertical. Drag the cyan dot to watch its rectangular and polar forms update live.",
        "duration": 8000
      },
      {
        "title": "Addition: Parallelogram Rule",
        "body": "Select z₁ + z₂ and drag both dots: the result is the tip-to-tail vector sum, identical to 2D vector addition. Addition in $\\mathbb{C}$ is just translation.",
        "duration": 8000
      },
      {
        "title": "Multiplication Rotates and Scales",
        "body": "Switch to z₁ × z₂ and watch the result: multiplying two complex numbers adds their arguments and multiplies their moduli, so every complex number is simultaneously a rotation-scaling operator.",
        "duration": 10000
      },
      {
        "title": "Division Inverts the Map",
        "body": "Try z₁ ÷ z₂: the argument of the result is $\\arg(z_1) - \\arg(z_2)$ and the modulus is $|z_1|/|z_2|$. Division undoes the rotation-scaling that multiplication applies.",
        "duration": 8000
      },
      {
        "title": "Conjugation Reflects",
        "body": "Select z̄₁ conj: the conjugate $\\bar{z} = a - bi$ is the reflection of $z$ across the real axis. Notice $z \\cdot \\bar{z} = |z|^2$ — purely real and always non-negative.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Euler's Formula Animates",
        "body": "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ — the complex exponential traces the unit circle as $\\theta$ grows. Watch the point sweep counterclockwise while the real and imaginary projections oscillate as cosine and sine.",
        "duration": 10000
      },
      {
        "title": "Drag the θ Slider",
        "body": "Drag the θ slider slowly from 0 to $2\\pi$ and observe the angle display: the real part (cos θ) and imaginary part (sin θ) are read off as projections onto the axes.",
        "duration": 8000
      },
      {
        "title": "The Real Part a — Spirals",
        "body": "Adjust the real part $a$ slider away from zero: $e^{a+i\\theta} = e^a(\\cos\\theta + i\\sin\\theta)$ — the radius grows or shrinks exponentially, turning the circle into a spiral.",
        "duration": 10000
      },
      {
        "title": "Euler's Identity Appears",
        "body": "At $\\theta = \\pi$ the animation flashes Euler's Identity: $e^{i\\pi} + 1 = 0$, linking $e$, $i$, $\\pi$, 1, and 0 in a single equation that expresses the half-revolution of the unit circle.",
        "duration": 10000
      },
      {
        "title": "Taylor Series Connection",
        "body": "The formula follows by substituting $z = i\\theta$ into the Taylor series $e^z = \\sum z^n/n!$ and separating real and imaginary parts — the even terms give $\\cos\\theta$, the odd terms give $i\\sin\\theta$.",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "Conformal Maps Warp Grids",
        "body": "Select a function from the dropdown and watch the regular grid on the left transform into a curved grid on the right. Angles at grid intersections are preserved — this is conformality.",
        "duration": 8000
      },
      {
        "title": "z² Doubles All Angles",
        "body": "With f(z) = z² active, $re^{i\\theta}\\mapsto r^2 e^{2i\\theta}$: moduli are squared and angles are doubled. Vertical lines become rightward-opening parabolas, horizontal lines become leftward ones.",
        "duration": 10000
      },
      {
        "title": "1/z Inverts the Plane",
        "body": "Select 1/z — inversion: points outside the unit disk map inside and vice versa, while circles through the origin become lines. Notice the grid squares still have right-angle corners everywhere except at the origin (a pole).",
        "duration": 8000
      },
      {
        "title": "Morph Animation Shows Flow",
        "body": "Press the Morph Animation button to smoothly interpolate the grid from identity to $f(z)$. The flow reveals how the holomorphic function continuously deforms the complex plane without tearing or folding.",
        "duration": 8000
      },
      {
        "title": "Grid Density Reveals Detail",
        "body": "Increase the Grid Density slider: finer grids show that the map is conformal (angle-preserving) everywhere except at critical points where $f'(z) = 0$, such as $z = 0$ for $z^2$.",
        "duration": 8000
      }
    ]
  },
  "02_penrose_tiling.html": {},
  "03_mandelbrot.html": {},
  "04_hyperbolic.html": {
    "0": [
      {
        "title": "The Poincaré Disk Model",
        "body": "The entire hyperbolic plane $\\mathbb{H}^2$ is mapped into the open unit disk: the boundary circle represents infinity and is never reached. Drag any colored vertex — geodesics (shortest paths) appear as arcs meeting the boundary at right angles.",
        "duration": 10000
      },
      {
        "title": "Angle Sum Below 180°",
        "body": "In Euclidean geometry, triangle angles sum to exactly $\\pi$. Here the sum $\\alpha + \\beta + \\gamma$ is always strictly less than $\\pi$ — drag a vertex toward the boundary to watch the sum plunge toward zero.",
        "duration": 8000
      },
      {
        "title": "Area Equals Angle Deficit",
        "body": "The Gauss-Bonnet theorem for hyperbolic triangles states $A = \\pi - (\\alpha + \\beta + \\gamma)$: the area is exactly the angular deficit. A larger triangle has a smaller angle sum.",
        "duration": 10000
      },
      {
        "title": "Hyperbolic Distance Formula",
        "body": "The Poincaré metric is $d(z,w) = 2\\tanh^{-1}\\!\\left(\\frac{|z-w|}{|1-\\bar{w}z|}\\right)$ — distances expand rapidly near the boundary, so steps that look small in Euclidean pixels are geometrically huge.",
        "duration": 10000
      },
      {
        "title": "Ideal Triangle at Boundary",
        "body": "Drag all three vertices to the boundary circle: the angles all approach 0° and the area approaches $\\pi$ — the maximum possible area for a hyperbolic triangle (the ideal triangle).",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Geodesics as Circular Arcs",
        "body": "Click inside the disk to place points and watch geodesics drawn between them: they are arcs of circles that meet the boundary at exactly 90°. The only exception — diameters through the center — are straight lines.",
        "duration": 8000
      },
      {
        "title": "The Parallel Postulate Fails",
        "body": "Switch to Parallels mode, define a geodesic with two clicks, then click a third point off the line: infinitely many geodesics through that point never meet the original — Euclid's fifth postulate fails dramatically.",
        "duration": 10000
      },
      {
        "title": "No Two Parallel Lines Are Equidistant",
        "body": "Unlike Euclidean parallel lines, hyperbolic geodesics that never meet diverge: the distance between them grows without bound as you travel along them. There is no constant-width strip.",
        "duration": 8000
      },
      {
        "title": "Boundary Is Points at Infinity",
        "body": "The boundary circle is not part of $\\mathbb{H}^2$ — it represents the ideal boundary at infinity. Every geodesic terminates at two ideal points on the boundary, but no path of finite hyperbolic length ever reaches it.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Infinite Tilings of the Disk",
        "body": "The {p, q} notation specifies a regular hyperbolic tiling: $p$-sided polygons meeting $q$ at each vertex. The existence condition $\\frac{1}{p}+\\frac{1}{q}<\\frac{1}{2}$ ensures negative curvature — infinitely many valid tilings exist.",
        "duration": 10000
      },
      {
        "title": "Escher's Circle Limit Revealed",
        "body": "M. C. Escher used exactly these tilings for his Circle Limit prints: each fish or angel near the boundary is the same hyperbolic size as those at the center — only the Euclidean distortion of the Poincaré model makes them appear smaller.",
        "duration": 8000
      },
      {
        "title": "Depth Slider Adds Tiles",
        "body": "Drag the Depth slider from 1 up to 7 and watch the tiling grow layer by layer, filling the disk with exponentially more tiles at each ring. The boundary is never reached but tiles crowd ever closer.",
        "duration": 8000
      },
      {
        "title": "Circumradius of Each Tile",
        "body": "The hyperbolic circumradius of each $p$-gon is given by $\\cosh R = \\cos(\\pi/q)/\\sin(\\pi/p)$. As $p$ or $q$ grows, $R$ grows — tiles become larger in hyperbolic terms even as they look smaller near the boundary.",
        "duration": 10000
      },
      {
        "title": "Color Encodes Geometry",
        "body": "Toggle between By Depth and By Angle coloring: depth coloring shows the hierarchical generation of tiles, while angle coloring reveals the rotational symmetry and the fundamental domain of the tiling group.",
        "duration": 6000
      }
    ]
  },
  "05_fourier.html": {
    "0": [
      {
        "title": "Summing Sine Waves",
        "body": "A square wave is built from odd harmonics: $\\frac{4}{\\pi}\\sum_{k=0}^{\\infty}\\frac{\\sin(2k+1)t}{2k+1}$. Drag the Harmonics slider upward to add more terms and watch the approximation sharpen toward the perfect square.",
        "duration": 10000
      },
      {
        "title": "Toggle Components On and Off",
        "body": "Press the Components button to overlay each individual sine wave in a lighter color — you can see exactly how each harmonic contributes its share of the total shape.",
        "duration": 6000
      },
      {
        "title": "Gibbs Phenomenon Never Vanishes",
        "body": "Near every jump discontinuity (the vertical edges of the square wave), the partial sum always overshoots by approximately 9% of the jump height no matter how many harmonics are added — the Gibbs phenomenon.",
        "duration": 10000
      },
      {
        "title": "Parseval: Energy Is Conserved",
        "body": "Parseval's theorem states $\\|f\\|^2 = |a_0|^2/2 + \\sum (a_n^2+b_n^2)/2$: total energy in the time domain equals total energy in the frequency domain. Watch the Captured % rise as more harmonics are included.",
        "duration": 10000
      },
      {
        "title": "Triangle Wave Decays Faster",
        "body": "Switch to the Triangle wave: its coefficients fall off as $1/n^2$ rather than $1/n$, so far fewer harmonics are needed for a good approximation — smoother functions have faster-decaying spectra.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Any Path as Spinning Circles",
        "body": "Draw a closed shape on the canvas, then press Play: the DFT decomposes your path into rotating circles of different radii and speeds, and their chain tip traces your original shape exactly.",
        "duration": 8000
      },
      {
        "title": "Ptolemy's Epicycles Vindicated",
        "body": "Ancient astronomers used circles-on-circles (epicycles) to predict planetary positions. Fourier theory proves this always works: any periodic 2D path can be represented as a finite sum of circular motions.",
        "duration": 10000
      },
      {
        "title": "DFT Formula Extracts Each Circle",
        "body": "Each rotating circle has radius $|C_k| = \\frac{1}{N}|\\sum_{n} z_n e^{-2\\pi ikn/N}|$ and starting phase $\\phi_k = \\arg(C_k)$. The DFT simultaneously extracts all $N$ circles from $N$ sampled points.",
        "duration": 10000
      },
      {
        "title": "More Circles Improve Accuracy",
        "body": "Drag the Circles shown slider: with few circles, the traced path is a rough approximation; increase to 100+ and the reconstruction becomes indistinguishable from your original drawing.",
        "duration": 8000
      },
      {
        "title": "Try a Preset Shape",
        "body": "Click Star or Trefoil to load a preset, then press Play — shapes with sharp corners require many high-frequency circles (high $k$) to reconstruct the pointed tips accurately.",
        "duration": 6000
      }
    ],
    "2": [
      {
        "title": "The Frequency Spectrum",
        "body": "The spectrum bar chart shows the amplitude $|C_k|$ of each frequency component. A square wave has energy only at odd harmonics (1, 3, 5, …), producing a characteristic sparse comb pattern.",
        "duration": 8000
      },
      {
        "title": "Switch Source: Wave or Drawing",
        "body": "Use the Source buttons to view the spectrum of either the Waveform tab's signal or the Epicycles drawing you made — the spectrum always shows which frequencies dominate your shape.",
        "duration": 6000
      },
      {
        "title": "Log Scale Reveals Weak Components",
        "body": "Toggle to Log scale: weak high-frequency components that are invisible on the linear scale now appear clearly, revealing the power-law decay rate of each waveform type.",
        "duration": 8000
      },
      {
        "title": "Phase Spectrum Shows Timing",
        "body": "Switch to Phase view: the phase angle $\\phi_k$ of each component tells when that frequency reaches its peak within one period. Phase relationships determine whether sharp edges align or cancel.",
        "duration": 8000
      },
      {
        "title": "Parseval's Theorem Visualized",
        "body": "The total area under the amplitude-squared spectrum equals the mean-square value of the signal: $\\frac{1}{T}\\int_0^T|f|^2dt = \\sum|c_n|^2$. No energy is created or destroyed in the Fourier transform.",
        "duration": 10000
      }
    ]
  },
  "06_complex_calculus.html": {
    "0": [
      {
        "title": "Real Smoothness Classes",
        "body": "Select each function to see its derivatives overlaid: $C^\\omega$ (analytic) functions like $\\sin x$ have derivatives of all orders agreeing with their Taylor series, while $|x|$ fails to be differentiable at $x = 0$.",
        "duration": 8000
      },
      {
        "title": "The Bump Function: Smooth but Not Analytic",
        "body": "Select Bump: $\\phi(x) = e^{-1/(1-x^2)}$ for $|x|<1$ and 0 otherwise is infinitely differentiable ($C^\\infty$) everywhere, yet its Taylor series at $x=0$ is identically zero — so $\\phi$ cannot be analytic.",
        "duration": 10000
      },
      {
        "title": "Toggle Derivative Orders",
        "body": "Press f, f', f'', f''' to layer up to four derivatives on screen: for $\\sin x$ each derivative is just another sinusoid, demonstrating that analytic functions are incredibly rigid compared to their real counterparts.",
        "duration": 6000
      },
      {
        "title": "Holomorphic Implies Analytic",
        "body": "In complex analysis, once differentiable always analytic: a function differentiable in $\\mathbb{C}$ (holomorphic) automatically equals its Taylor series everywhere in its domain. This key difference has no real parallel.",
        "duration": 10000
      },
      {
        "title": "Partitions of Unity Fail in $\\mathbb{C}$",
        "body": "The bump function enables $C^\\infty$ partitions of unity in real geometry — patching together local data. These constructions fail entirely in complex analysis, forcing global rigidity on holomorphic functions.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Domain Coloring Maps the Plane",
        "body": "The canvas shows the full complex plane colored by the argument (hue) and modulus (brightness) of $f(z)$. Zeros appear as dark points where all hues converge; poles appear as bright points where all hues radiate outward.",
        "duration": 10000
      },
      {
        "title": "Poles Are Visible Singularities",
        "body": "Select 1/z: the origin is a simple pole — all colors cycle once around it. For $1/(z^2+1)$, two poles at $\\pm i$ each show a full color cycle, making the singularity structure immediately visible.",
        "duration": 8000
      },
      {
        "title": "Draw a Contour Integral",
        "body": "Click Show contour to overlay a circular integration path. Adjust its Radius and Center sliders, then read off the contour integral $\\oint f\\,dz$ from the right panel — watch it equal $2\\pi i \\cdot \\sum \\text{Res}$ when poles are enclosed.",
        "duration": 10000
      },
      {
        "title": "Cauchy's Theorem: Zero Integral",
        "body": "Move the contour so it encloses no poles: Cauchy's theorem guarantees $\\oint_\\gamma f\\,dz = 0$ for any holomorphic function integrated over a closed loop in a simply connected domain.",
        "duration": 10000
      },
      {
        "title": "Residue Theorem Extracts Values",
        "body": "The Residue Theorem $\\oint_\\gamma f\\,dz = 2\\pi i\\sum_k \\mathrm{Res}(f,z_k)$ means only the pole structure inside the contour determines the integral — a profound global constraint from local data.",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "Riemann Surfaces Unwind Branches",
        "body": "Select $\\sqrt{z}$: its two branches are displayed as two overlapping sheets joined along the branch cut (the negative real axis). The Riemann surface makes $\\sqrt{z}$ single-valued — at the cost of living on a 2-sheeted surface.",
        "duration": 10000
      },
      {
        "title": "Walk Around the Branch Point",
        "body": "Click Walk around branch point: as a path circles $z=0$ once, the value of $\\sqrt{z}$ moves from sheet 1 to sheet 2. A second full revolution returns it — the monodromy group has order 2.",
        "duration": 10000
      },
      {
        "title": "log z Has Infinitely Many Sheets",
        "body": "Switch to log z: each time you circle the origin, the imaginary part increases by $2\\pi i$, so the full Riemann surface is an infinite helical staircase with no single-valued branch on all of $\\mathbb{C}\\setminus\\{0\\}$.",
        "duration": 10000
      },
      {
        "title": "Branch Cut Highlights the Seam",
        "body": "Select Branch cut highlight to see exactly where the two (or more) sheets are glued together. Crossing the cut discontinuously jumps between branches — the cut is a choice of where to make $\\sqrt{z}$ single-valued.",
        "duration": 8000
      },
      {
        "title": "Riemann Mapping Theorem",
        "body": "Any simply-connected domain $D \\neq \\mathbb{C}$ is conformally equivalent to the open unit disk — a stunning global result. Riemann surfaces generalize this: every multi-valued function lives naturally on exactly one such surface.",
        "duration": 10000
      }
    ],
    "3": [
      {
        "title": "Modulus as Landscape Height",
        "body": "The 3D surface plots $|f(z)|$ as height above the complex plane: valleys are zeros, capped spires are poles. Rotate with the Azimuth and Elevation sliders to explore the landscape from different angles.",
        "duration": 8000
      },
      {
        "title": "Poles Tower Upward",
        "body": "Select 1/z: a single towering peak rises from the origin (the simple pole). Select $1/(z^2+1)$: two symmetric peaks appear at $\\pm i$, each capped at height 3 by the renderer's scale limit.",
        "duration": 8000
      },
      {
        "title": "Domain Coloring on the Surface",
        "body": "Switch Color Mode to Domain color (arg): the hue of each point encodes $\\arg f(z)$ while height encodes $|f(z)|$. Zeros and poles become visually unmistakable as vortex points where all colors meet.",
        "duration": 8000
      },
      {
        "title": "Animate and Inspect the Surface",
        "body": "Press Animate rotation to spin the surface automatically — useful for spotting hidden features at the back. Drag the Zoom slider to scale in and examine fine structure near a branch point or saddle.",
        "duration": 6000
      },
      {
        "title": "Zeros Are Punctures in the Valley",
        "body": "Select $z^3 - z$: three zeros at $0, \\pm 1$ appear as perfect dips touching zero height, while the surrounding surface rises into arching saddle shapes — the generic topology of a holomorphic function near simple zeros.",
        "duration": 8000
      }
    ]
  },
  "07_spinors_lie.html": {
    "0": [
      {
        "title": "SO(2): The Circle Group",
        "body": "Drag the SO(2) angle slider: the 2×2 rotation matrix $R(\\theta)$ updates in real time. Every element is a rotation of the plane, and the group is abelian — $R(\\alpha)R(\\beta) = R(\\alpha+\\beta)$, so order doesn't matter.",
        "duration": 8000
      },
      {
        "title": "SO(3): Non-Commutative Rotations",
        "body": "Adjust the three Euler angle sliders Yaw, Pitch, Roll for SO(3): the 3×3 matrix updates to show the combined rotation. Try swapping the order of two sliders — rotations in 3D do not commute!",
        "duration": 8000
      },
      {
        "title": "SO(3) Has the Topology of RP³",
        "body": "The 3D rotation group $\\text{SO}(3)$ is topologically a ball of radius $\\pi$ with antipodal boundary points identified — real projective 3-space $\\mathbb{RP}^3$. Its fundamental group $\\pi_1(\\text{SO}(3)) = \\mathbb{Z}_2$ is why spinors exist.",
        "duration": 10000
      },
      {
        "title": "Lie Algebra: Infinitesimal Generators",
        "body": "The generators $J_x, J_y, J_z$ satisfy $[J_i, J_j] = \\varepsilon_{ijk}J_k$ — the same Lie algebra as Pauli matrices divided by $2i$. Finite rotations are recovered via the exponential map $R = \\exp(\\theta\\,\\hat{n}\\cdot\\mathbf{J})$.",
        "duration": 10000
      }
    ],
    "1": [
      {
        "title": "The Bloch Sphere Is SU(2)",
        "body": "The Bloch sphere represents the state space of a qubit: every unit vector on $S^2$ corresponds to a pure state $|\\psi\\rangle = \\cos(\\theta/2)|0\\rangle + e^{i\\phi}\\sin(\\theta/2)|1\\rangle$. The full group SU(2) $\\cong S^3$ is a double cover of this $S^2$.",
        "duration": 10000
      },
      {
        "title": "Drag θ and φ to Explore",
        "body": "Drag the Polar θ slider from 0 to $\\pi$: the Bloch vector descends from the north pole $|0\\rangle$ to the south pole $|1\\rangle$. Drag the Azimuthal φ slider to see the state rotate around the equator through all superpositions.",
        "duration": 8000
      },
      {
        "title": "Spinor 720° Tour: The Sign Flip",
        "body": "Click Spinor 720° Tour and watch the phase bar: after a 360° rotation the SU(2) matrix returns $-I$, flipping the spinor's sign. Only after 720° does it return to $+I$ — this is not a trick, it is measurable in neutron interferometry.",
        "duration": 10000
      },
      {
        "title": "SU(2) Matrix Encodes the State",
        "body": "The SU(2) matrix displayed updates continuously: for a spin-½ particle, $U_z(\\theta) = \\mathrm{diag}(e^{i\\theta/2}, e^{-i\\theta/2})$, confirming that the spinor acquires a phase of $\\theta/2$ — half the rotation angle.",
        "duration": 10000
      },
      {
        "title": "SU(2) Double Covers SO(3)",
        "body": "Both $U$ and $-U$ in SU(2) produce the same physical rotation in $\\mathbb{R}^3$ via the adjoint map. This 2:1 cover $\\varphi: \\text{SU}(2) \\to \\text{SO}(3)$ with $\\ker\\varphi = \\{+I, -I\\}$ is the mathematical heart of electron spin.",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "The Plate Trick Made Rigorous",
        "body": "Press Rotate 360°: the plate (orange square) turns while the belts connecting it to the wall twist. After 360°, the belts are knotted and cannot be untwisted without moving the plate — a physical demonstration of $\\pi_1(\\text{SO}(3)) = \\mathbb{Z}_2$.",
        "duration": 10000
      },
      {
        "title": "720° Untangles the Belts",
        "body": "After the first 360°, press +360° (720° total): the belts unwind completely back to their original flat state. Two full rotations — and only two — undo the topological twist that a single rotation creates.",
        "duration": 8000
      },
      {
        "title": "Fermions Live in SU(2) Not SO(3)",
        "body": "Electrons, quarks, and all fermions are described by spinors — mathematical objects that live in SU(2), the double cover of the rotation group. The belt trick makes the difference topologically visible without any equations.",
        "duration": 10000
      },
      {
        "title": "Fundamental Group of SO(3)",
        "body": "The single non-contractible loop in $\\text{SO}(3)$ (one full rotation) corresponds to the nontrivial element of $\\pi_1(\\text{SO}(3)) = \\mathbb{Z}_2$. Two such loops compose to the contractible loop — exactly why 720° untwists.",
        "duration": 10000
      }
    ]
  },
  "08_spacetime.html": {
    "0": [
      {
        "title": "Events on the Spacetime Diagram",
        "body": "Drag the cyan event A and the gold event B anywhere on the Minkowski diagram: each point is a spacetime event with coordinates $(x, ct)$. The light cone through the origin divides spacetime into causal regions.",
        "duration": 8000
      },
      {
        "title": "The Spacetime Interval Is Invariant",
        "body": "$\\Delta s^2 = (c\\Delta t)^2 - (\\Delta x)^2$ is unchanged by any Lorentz boost — all inertial observers agree on this value even though they disagree on $\\Delta t$ and $\\Delta x$ separately.",
        "duration": 10000
      },
      {
        "title": "Three Kinds of Separation",
        "body": "Watch the interval type label update as you drag events: $\\Delta s^2 > 0$ is timelike (causal influence possible), $\\Delta s^2 = 0$ is lightlike (on the light cone), and $\\Delta s^2 < 0$ is spacelike (no causal link in any frame).",
        "duration": 10000
      },
      {
        "title": "Draw Worldlines",
        "body": "Click Add Worldline then click two canvas points to draw a particle trajectory: its slope $\\Delta x/\\Delta(ct)$ equals $v/c = \\beta$. No worldline can be steeper than the 45° light cone boundaries.",
        "duration": 8000
      },
      {
        "title": "Simultaneity Is Frame-Dependent",
        "body": "Two events that are horizontally aligned (same $ct$) are simultaneous in this frame — but a boosted observer tilts their $t$-axis and sees them at different times. Simultaneity is not absolute.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Drag β to Boost the Frame",
        "body": "Move the β = v/c slider: the Lorentz factor $\\gamma = 1/\\sqrt{1-\\beta^2}$ updates instantly. On the left canvas the boosted axes tilt, and on the right the moving frame S′ appears with its own rulers.",
        "duration": 8000
      },
      {
        "title": "Length Contraction Is Real",
        "body": "The contracted length $L = L_0/\\gamma$ appears in the right panel: at $\\beta = 0.87$ ($\\gamma = 2$), a meter stick moving at 87% of $c$ is only half a meter long in the rest frame. Drag β toward ±1 to see contraction approach zero.",
        "duration": 10000
      },
      {
        "title": "Time Dilation Slows Clocks",
        "body": "Moving clocks tick slowly: a proper-time interval $\\Delta\\tau$ becomes $\\Delta t = \\gamma\\Delta\\tau$ in the rest frame. The boost matrix $\\Lambda^\\mu_{\\;\\nu} = \\begin{pmatrix}\\gamma & -\\gamma\\beta \\\\ -\\gamma\\beta & \\gamma\\end{pmatrix}$ encodes both effects simultaneously.",
        "duration": 10000
      },
      {
        "title": "Simultaneity Shift Grows with Distance",
        "body": "The Simultaneity Shift panel shows $\\Delta x \\cdot \\beta/c$: events separated in space are seen at different times by a moving observer, and the time gap grows with the spatial separation $\\Delta x$.",
        "duration": 8000
      },
      {
        "title": "The Boost Matrix Is a Hyperbolic Rotation",
        "body": "Write $\\beta = \\tanh\\phi$ where $\\phi$ is the rapidity; then $\\gamma = \\cosh\\phi$ and $\\gamma\\beta = \\sinh\\phi$. The Lorentz boost is a rotation by imaginary angle in Minkowski spacetime — SO(1,1) not SO(2).",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "Two Twins, Two Worldlines",
        "body": "The cyan worldline stays vertical (at rest), while the gold worldline goes out and returns. Press Start Journey to animate both twins aging in real time: proper time accumulates differently along each path.",
        "duration": 8000
      },
      {
        "title": "The Traveling Twin Ages Less",
        "body": "Watch the Age (travel) counter fall behind Age (stay): the traveling twin experiences less proper time $\\tau_{\\text{travel}} < \\tau_{\\text{stay}}$ because their worldline is shorter in Minkowski metric — not in Euclidean distance.",
        "duration": 10000
      },
      {
        "title": "Straight Lines Maximize Proper Time",
        "body": "In Minkowski spacetime, the straight (inertial) worldline between two events has the longest proper time — the opposite of Euclidean geometry where a straight path minimizes distance. This is the twin paradox resolved.",
        "duration": 10000
      },
      {
        "title": "Adjust T and D Parameters",
        "body": "Drag the T slider (total coordinate time) and D slider (max distance) to change the journey: larger D means higher speed and greater time dilation, widening the age gap $\\Delta\\tau$ shown in red.",
        "duration": 8000
      },
      {
        "title": "The Geodesic Principle Points to GR",
        "body": "The straight worldline maximizing proper time is a timelike geodesic. In General Relativity this principle is promoted: freely falling objects follow geodesics in curved spacetime, with gravity as curvature rather than force.",
        "duration": 10000
      }
    ]
  },
  "09_quantum.html": {
    "0": [
      {
        "title": "Particle in a Box",
        "body": "A quantum particle confined to a box of length $L$ can only occupy discrete energy eigenstates $\\psi_n(x)=\\sqrt{2/L}\\sin(n\\pi x/L)$. Use the quantum number selector to switch between modes and watch the wavefunction change shape.",
        "duration": 8000
      },
      {
        "title": "Energy Scales as $n^2$",
        "body": "The energy eigenvalues obey $E_n = n^2 E_1$, so the third state has nine times the ground-state energy. Watch the Energy Level Diagram as you raise $n$ — levels fan out quadratically.",
        "duration": 8000
      },
      {
        "title": "Nodes Count Excitations",
        "body": "Each eigenstate $\\psi_n$ has $n-1$ interior nodes where the wavefunction is exactly zero. The node count shown in the sidebar increases by one each time you raise $n$.",
        "duration": 6000
      },
      {
        "title": "Superposition Beats Oscillate",
        "body": "Mix two eigenstates with the $n_1$, $n_2$, and $\\theta$ sliders: the probability density $|\\Psi|^2$ oscillates in time at the beat frequency $(E_{n_2}-E_{n_1})/\\hbar$. Watch the lower canvas to see the pattern shift.",
        "duration": 10000
      },
      {
        "title": "Quantization from Confinement",
        "body": "Discrete energy levels arise purely from the boundary conditions $\\psi(0)=\\psi(L)=0$ — no arbitrary assumption is needed. This is the same mechanism that gives atoms their spectral lines.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Position-Momentum Trade-Off",
        "body": "Drag the $\\sigma$ slider to narrow the position-space wave packet $|\\psi(x)|^2$ on the left canvas and watch the momentum-space distribution $|\\phi(k)|^2$ on the right broaden simultaneously.",
        "duration": 8000
      },
      {
        "title": "Heisenberg Bound $\\hbar/2$",
        "body": "The sidebar displays the live product $\\sigma_x \\cdot \\sigma_p$ and the hard lower bound $\\hbar/2$. The uncertainty gauge shows how close the current packet is to saturating the inequality.",
        "duration": 8000
      },
      {
        "title": "Gaussian Achieves Minimum",
        "body": "Switch the wave packet Type to Gaussian: it is the unique shape that saturates $\\sigma_x \\sigma_p = \\hbar/2$. Square and triangle packets always sit above the minimum.",
        "duration": 8000
      },
      {
        "title": "Wave Packet Disperses in Time",
        "body": "The lower propagation canvas shows how the packet spreads as it travels — momentum components with different velocities $v=p/m$ separate, broadening $\\sigma_x$ over time.",
        "duration": 8000
      },
      {
        "title": "Robertson Inequality",
        "body": "The Heisenberg relation is a special case of the Robertson inequality $\\sigma_A \\sigma_B \\geq \\frac{1}{2}|\\langle[\\hat{A},\\hat{B}]\\rangle|$, here applied to $[\\hat{x},\\hat{p}]=i\\hbar$. It reflects an intrinsic property of quantum states, not measurement clumsiness.",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "Bloch Sphere Encodes Spin",
        "body": "A spin-$\\frac{1}{2}$ state is represented by a point on the Bloch sphere: $|\\psi\\rangle = \\cos\\frac{\\theta}{2}|{\\uparrow}\\rangle + e^{i\\varphi}\\sin\\frac{\\theta}{2}|{\\downarrow}\\rangle$. Drag the $\\theta$ and $\\varphi$ sliders to move the state vector on the sphere.",
        "duration": 10000
      },
      {
        "title": "Born Rule Gives Probabilities",
        "body": "The sidebar live-updates $P(\\uparrow) = \\cos^2(\\theta/2)$ and $P(\\downarrow) = \\sin^2(\\theta/2)$ as you move the Bloch sphere angle. Press Measure! to sample one outcome from this distribution.",
        "duration": 8000
      },
      {
        "title": "Statistics from 100 Trials",
        "body": "Click Run 100 trials to see the histogram fill according to the Born rule. At $\\theta=90°$ the bar should approach 50-50 spin up and down — the expected probabilities for an equatorial state.",
        "duration": 8000
      },
      {
        "title": "Axis Choice Matters",
        "body": "Switch the measurement axis between Z, X, and Y buttons. A state pointing along $+Z$ gives deterministic $\\uparrow_z$ outcomes but completely random $\\uparrow_x$ results — a live demonstration of complementarity.",
        "duration": 8000
      },
      {
        "title": "Sequential Measurements Lose Info",
        "body": "Press Run sequence to send spins through Z then X then Z detectors. The Z → X measurement collapses the state, randomizing the final Z outcome. This non-commutativity is the algebraic root of quantum complementarity.",
        "duration": 10000
      }
    ]
  },
  "10_lagrangian.html": {
    "0": [
      {
        "title": "Chaotic Double Pendulum",
        "body": "The double pendulum is the canonical example of classical chaos: infinitesimally different initial angles $\\theta_1$ and $\\theta_2$ produce wildly different trajectories. Set the angles with the sliders and press Reset to watch the colored trail diverge.",
        "duration": 8000
      },
      {
        "title": "Lagrangian $L = T - V$",
        "body": "The sidebar shows the live Lagrangian $L = T - V$, kinetic energy $T$ (cyan) and potential energy $V$ (orange). Unlike Newtonian mechanics, the Lagrangian formulation needs only generalized coordinates — no forces required.",
        "duration": 8000
      },
      {
        "title": "Hamiltonian Is Conserved",
        "body": "Watch $H = T + V$ (purple) in the sidebar: it stays nearly constant throughout the chaotic motion, confirming energy conservation despite the extreme sensitivity to initial conditions.",
        "duration": 8000
      },
      {
        "title": "Sensitivity to Initial Conditions",
        "body": "Switch to Double mode and adjust $\\theta_1$ by a single degree: two initially-close trajectories separate exponentially, with Lyapunov exponent $\\lambda > 0$. This is the hallmark of deterministic chaos.",
        "duration": 8000
      },
      {
        "title": "Trail Length Reveals Attractor",
        "body": "Increase the Trail slider to trace the full history of the tip's path. The resulting tangle of curves fills phase space densely, illustrating that the chaotic attractor is not a simple closed orbit.",
        "duration": 6000
      }
    ],
    "1": [
      {
        "title": "Phase Space Portraits",
        "body": "Each point $(\\theta, p)$ in phase space represents a unique state of the pendulum. Click anywhere on the portrait to launch a new trajectory from that point and watch it trace a constant-$H$ contour.",
        "duration": 8000
      },
      {
        "title": "Libration vs Rotation",
        "body": "Gold curves inside the separatrix are libration orbits — the pendulum swings back and forth without passing over the top. Cyan curves outside are full-rotation orbits. The golden separatrix at $H=1$ separates these regimes.",
        "duration": 8000
      },
      {
        "title": "Liouville's Theorem",
        "body": "Hamiltonian flow preserves the area of any region in phase space, since $\\nabla \\cdot \\mathbf{v} = 0$. No matter how the individual trajectories tangle, the total volume occupied by a bundle of initial conditions stays constant.",
        "duration": 10000
      },
      {
        "title": "Symplectic 2-Form",
        "body": "The phase portrait geometry is governed by the symplectic 2-form $\\omega = dq \\wedge dp$, which is invariant under Hamiltonian evolution. This symplectomorphism is the geometric heart of classical mechanics.",
        "duration": 10000
      },
      {
        "title": "Switch to Harmonic Oscillator",
        "body": "Press the Harmonic button to switch systems: the phase portrait becomes perfect concentric ellipses — closed, non-chaotic orbits. Compare the separatrix structure with the pendulum to see how nonlinearity creates chaos.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Principle of Stationary Action",
        "body": "The physical path of a particle extremizes the action $S[q] = \\int L\\, dt$. Drag the Deviation $A$ slider away from zero to deform the path and watch the action $S$ rise above its minimum.",
        "duration": 8000
      },
      {
        "title": "Action Minimum at True Path",
        "body": "Press the True Path button to snap deviation back to $A = 0$. The mini graph on the right shows $S(A)$ as a parabola — the physical trajectory sits exactly at its stationary point $\\delta S = 0$.",
        "duration": 8000
      },
      {
        "title": "Three Scenario Comparison",
        "body": "Use the Scenario selector to switch between Free Particle, Constant Gravity, and Harmonic Oscillator. Each has a different Lagrangian but the same variational principle selects the unique extremizing path.",
        "duration": 8000
      },
      {
        "title": "Virtual Paths in Path Integral",
        "body": "In quantum mechanics, Feynman's path integral sums $e^{iS/\\hbar}$ over all virtual paths. The green physical path dominates because nearby paths interfere constructively; paths far from $\\delta S=0$ cancel.",
        "duration": 10000
      },
      {
        "title": "Sweep to See the Parabola",
        "body": "Press Sweep A to animate the deviation continuously and watch both the path on the canvas and the $S(A)$ plot update. The $\\Delta S$ readout on the right confirms the action is always positive relative to the true minimum.",
        "duration": 8000
      }
    ]
  },
  "11_dirac.html": {
    "0": [
      {
        "title": "The Negative-Energy Sea",
        "body": "Dirac resolved the negative-energy problem by postulating that all negative-energy states are already filled. This Fermi sea of electrons prevents real particles from falling into negative-energy states via the Pauli exclusion principle.",
        "duration": 8000
      },
      {
        "title": "Pair Creation Threshold",
        "body": "Select Pair Create: a photon with energy $E_\\gamma \\geq 2m_e c^2 \\approx 1.022\\,\\text{MeV}$ can kick an electron out of the sea. Drag the Photon energy slider above the threshold to trigger the animation.",
        "duration": 8000
      },
      {
        "title": "Holes Are Positrons",
        "body": "A vacancy (hole) in the Dirac sea behaves exactly like a particle with positive charge and the same mass as the electron — the antiparticle called the positron, discovered by Anderson in 1932.",
        "duration": 8000
      },
      {
        "title": "Annihilation to Two Photons",
        "body": "Select Annihilate: an electron drops into a hole, releasing two photons. Two photons are required to simultaneously conserve energy and momentum — a single photon cannot satisfy both conservation laws.",
        "duration": 8000
      },
      {
        "title": "Vacuum Fluctuations",
        "body": "Select Vacuum Fluct to see spontaneous virtual pair creation and annihilation. These short-lived excursions are permitted by the time-energy uncertainty relation $\\Delta E \\cdot \\Delta t \\sim \\hbar$ and contribute to the Casimir effect.",
        "duration": 10000
      }
    ],
    "1": [
      {
        "title": "Four-Component Spinor",
        "body": "The Dirac equation $(i\\gamma^\\mu\\partial_\\mu - m)\\psi = 0$ has a four-component spinor solution $\\psi$. The upper two components describe the large (particle) part; the lower two describe the small (antiparticle) part.",
        "duration": 10000
      },
      {
        "title": "Relativistic Dispersion Relation",
        "body": "Use the Component selector and momentum slider to explore each spinor component. The dispersion panel shows $E^2 = p^2 c^2 + m^2 c^4$ — Dirac's equation automatically encodes special relativity.",
        "duration": 8000
      },
      {
        "title": "Particle vs Antiparticle Sign",
        "body": "Toggle between the $+E$ (particle) and $-E$ (anti) buttons: the phase of the wave oscillates in opposite senses for positive and negative frequency solutions, corresponding to particles and antiparticles.",
        "duration": 8000
      },
      {
        "title": "Mass Sets the Compton Scale",
        "body": "Slide mass $m$ toward zero: the de Broglie wavelength $\\lambda_{dB}$ displayed in the sidebar diverges and the phase velocity $v_{\\text{phase}} > c$ — a reminder that the phase velocity of a massive wave packet is not the group (signal) velocity.",
        "duration": 10000
      },
      {
        "title": "Spin Emerges Automatically",
        "body": "Dirac needed four components — not two — to linearize the Klein-Gordon equation. The extra structure automatically produces spin-$\\frac{1}{2}$ with the correct $g = 2$ magnetic moment, without any ad hoc assumption.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Chiral Projectors Split Spinors",
        "body": "The projectors $P_L = (1-\\gamma^5)/2$ and $P_R = (1+\\gamma^5)/2$ split any Dirac spinor into left- and right-handed Weyl components. Select Weyl Decomposition to see $\\psi_L$ and $\\psi_R$ displayed separately.",
        "duration": 10000
      },
      {
        "title": "Massless Limit: Chirality Equals Helicity",
        "body": "Set mass $m = 0$: the chiral mixing bar shows $|\\psi_L|^2$ and $|\\psi_R|^2$ become fixed — chirality and helicity coincide, and left and right components decouple into independent Weyl equations.",
        "duration": 8000
      },
      {
        "title": "Mass Mixes Left and Right",
        "body": "Raise the mass slider: the mixing $\\sin^2\\theta$ shown in the sidebar increases. The mass term $m\\bar\\psi\\psi = m(\\bar\\psi_L\\psi_R + \\bar\\psi_R\\psi_L)$ couples the two chiralities — mass is the coupling between left and right.",
        "duration": 10000
      },
      {
        "title": "Helicity vs Chirality Mode",
        "body": "Switch to the Helicity vs Chirality view to compare both quantities as momentum varies. For massive particles helicity depends on the observer's frame (it flips if you overtake the particle), but chirality is Lorentz-invariant.",
        "duration": 8000
      },
      {
        "title": "Standard Model Chiral Symmetry",
        "body": "In the Standard Model the Higgs mechanism generates mass by coupling $\\psi_L$ and $\\psi_R$ — without the Higgs field both would be independent massless Weyl fermions. The chiral mixing bar visualizes exactly this breaking.",
        "duration": 10000
      }
    ]
  },
  "12_gauge_theory.html": {
    "0": [
      {
        "title": "Global vs Local Symmetry",
        "body": "A global $U(1)$ phase rotation $\\psi \\to e^{i\\alpha}\\psi$ by a constant $\\alpha$ leaves all observable physics unchanged. Drag the Phase $\\alpha$ slider and watch the field arrows rotate uniformly — predictions are unaffected.",
        "duration": 8000
      },
      {
        "title": "Local Phase Demands a Field",
        "body": "Switch to Local U(1) and move the slider: each lattice point now rotates by a different $\\alpha(x)$. The derivative $\\partial_\\mu\\psi$ picks up an extra term, breaking invariance — unless a gauge field $A_\\mu$ compensates.",
        "duration": 8000
      },
      {
        "title": "Covariant Derivative Fixes It",
        "body": "Replacing $\\partial_\\mu$ with $D_\\mu = \\partial_\\mu - ieA_\\mu$ restores invariance, provided $A_\\mu \\to A_\\mu + \\frac{1}{e}\\partial_\\mu\\alpha$. The covariant derivative ensures $D_\\mu\\psi \\to e^{i\\alpha(x)}D_\\mu\\psi$.",
        "duration": 10000
      },
      {
        "title": "Photon Is Geometrically Forced",
        "body": "The field strength $F_{\\mu\\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu$ is automatically gauge invariant, and its kinetic term $-\\frac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu}$ is the Maxwell Lagrangian. Electromagnetism is a consequence of local $U(1)$ symmetry.",
        "duration": 10000
      },
      {
        "title": "Aharonov-Bohm Is Physical",
        "body": "Even where $\\mathbf{B}=0$, the potential $A_\\mu$ shifts quantum phases around a solenoid — the Aharonov-Bohm effect. Gauge fields are not mere mathematical redundancy; they carry physical information.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Feynman Diagram Rules",
        "body": "Each vertex in QED contributes a factor of $-ie$, each fermion propagator $i(\\not{p}+m)/(p^2-m^2)$, and each photon propagator $-ig_{\\mu\\nu}/k^2$. The amplitude $\\mathcal{M}$ is the product over all diagram elements.",
        "duration": 10000
      },
      {
        "title": "Electron-Positron Scattering",
        "body": "Select e$^-$e$^+$ Scatter to see the leading-order $t$-channel diagram. The coupling slider changes $\\alpha = 1/137$ to larger values: watch the amplitude scale and the perturbative expansion break down.",
        "duration": 8000
      },
      {
        "title": "Compton Scattering",
        "body": "Select Compton: an electron absorbs a photon and re-emits it. Two tree-level diagrams contribute — $s$-channel and $u$-channel — and their interference gives the Klein-Nishina cross section.",
        "duration": 8000
      },
      {
        "title": "Loop Diagrams and $\\alpha^L$",
        "body": "Select Self-Energy to see the one-loop electron propagator correction. Loop counting shows that $L$ loops contribute a factor $\\alpha^L \\approx (1/137)^L$, justifying the perturbative expansion for small coupling.",
        "duration": 8000
      },
      {
        "title": "QED Precision Predictions",
        "body": "Higher-order QED diagrams predict the electron anomalous magnetic moment $g-2$ and the Lamb shift to better than ten significant figures — the most precise agreement between theory and experiment in all of physics.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "QED Coupling Grows",
        "body": "Select QED $\\alpha(\\mu)$: as the energy scale $\\mu$ increases, virtual electron-positron pairs screen the bare charge, making the effective coupling $\\alpha$ grow logarithmically — a process called charge screening.",
        "duration": 8000
      },
      {
        "title": "QCD Asymptotic Freedom",
        "body": "Switch to QCD $\\alpha_s(\\mu)$: the strong coupling decreases at high energy because gluon self-interactions anti-screen the color charge. At high energies quarks interact weakly — asymptotic freedom, Nobel Prize 2004.",
        "duration": 10000
      },
      {
        "title": "Beta Function Controls Running",
        "body": "The running is governed by $\\mu\\,d\\alpha/d\\mu = \\beta(\\alpha)$. QED has $\\beta > 0$ (coupling grows); QCD has $\\beta < 0$ for $N_f < 17$ active quark flavors (coupling shrinks). The sign difference has profound physical consequences.",
        "duration": 10000
      },
      {
        "title": "Three Couplings Displayed",
        "body": "Select All Three to overlay QED, QCD, and the weak coupling on one plot. In the standard model they almost meet near $10^{15}\\,\\text{GeV}$ — the grand unification scale where a single force may underlie all three.",
        "duration": 8000
      },
      {
        "title": "Unification Hint",
        "body": "In supersymmetric extensions of the Standard Model the three coupling curves meet precisely at a single point near $10^{15}\\,\\text{GeV}$, providing one of the strongest indirect hints for physics beyond the standard model.",
        "duration": 8000
      }
    ]
  },
  "13_cosmology.html": {
    "0": [
      {
        "title": "Friedmann Equation Drives Expansion",
        "body": "The scale factor $a(t)$ of the universe satisfies $H^2 = (8\\pi G/3)\\rho - kc^2/a^2 + \\Lambda c^2/3$. Adjust $\\Omega_m$, $\\Omega_r$, and $\\Omega_\\Lambda$ sliders and watch the $a(t)$ curve on the main canvas reshape.",
        "duration": 10000
      },
      {
        "title": "Density Determines Geometry",
        "body": "The Geometry readout on the right changes between flat ($\\Omega_{tot}=1$), closed ($>1$), and open ($<1$) as you move sliders. A closed universe eventually recollapses; an open one expands forever.",
        "duration": 8000
      },
      {
        "title": "Dark Energy Accelerates Expansion",
        "body": "Increase $\\Omega_\\Lambda$: the $a(t)$ curve bends upward, showing accelerated expansion. This cosmological constant was discovered in 1998 via Type Ia supernovae — it constitutes about 69% of the total energy budget today.",
        "duration": 8000
      },
      {
        "title": "Preset Cosmologies",
        "body": "Press the Observed, Flat Matter, de Sitter, and Closed presets to jump between landmark cosmological models. Compare how the age of the universe and future fate change with each configuration.",
        "duration": 8000
      },
      {
        "title": "Hubble Parameter Evolves",
        "body": "The right sidebar shows $H(a) = H_0\\sqrt{\\Omega_m/a^3 + \\Omega_r/a^4 + \\Omega_\\Lambda}$: radiation dominates early (steep $a^{-4}$), matter follows ($a^{-3}$), then dark energy takes over and $H$ approaches a constant.",
        "duration": 10000
      }
    ],
    "1": [
      {
        "title": "Conformal Compactification",
        "body": "A Penrose diagram maps all of infinite spacetime onto a finite square using conformal coordinates that preserve causal (light-cone) structure. Light rays always travel at exactly 45° regardless of which region you examine.",
        "duration": 8000
      },
      {
        "title": "Schwarzschild Regions",
        "body": "The Schwarzschild black hole has four regions: the exterior ($r>2M$), the interior ($r<2M$), a white hole, and a parallel exterior. Select Schwarzschild BH and use the Show selector to trace light rays and infalling particles.",
        "duration": 8000
      },
      {
        "title": "Event Horizon Is a Membrane",
        "body": "Inside the event horizon (yellow diagonal), all future-directed causal curves must hit the singularity (red top edge). Press Animate to watch an infalling particle cross the horizon and inevitably reach $r=0$.",
        "duration": 8000
      },
      {
        "title": "de Sitter and Minkowski",
        "body": "Switch to de Sitter or Minkowski: the former has a cosmological horizon analogous to the black hole horizon, while Minkowski is the flat baseline. Comparing diagrams makes causal differences immediately visible.",
        "duration": 8000
      },
      {
        "title": "Null Infinity Bounds the Diagram",
        "body": "The boundaries $\\mathscr{I}^+$ (future null infinity) and $\\mathscr{I}^-$ (past null infinity) represent the asymptotic destinations of outgoing and incoming light. They are the natural arena for defining S-matrix scattering in quantum gravity.",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "Hawking Temperature Scales as $1/M$",
        "body": "The Hawking temperature $T_H = \\hbar c^3 / (8\\pi G M k_B)$ is inversely proportional to mass. Drag the Mass $M$ slider toward smaller values and watch $T_H$ rise rapidly on the temperature-vs-mass canvas.",
        "duration": 10000
      },
      {
        "title": "Smaller Holes Are Hotter",
        "body": "A solar-mass black hole has a temperature far below the cosmic microwave background, making it effectively unobservable. A primordial black hole with $M \\sim 10^{11}\\,\\text{kg}$ would be evaporating today with a gamma-ray burst.",
        "duration": 8000
      },
      {
        "title": "Evaporation Time Scales as $M^3$",
        "body": "The evaporation time $t_{evap} \\approx 5120\\pi G^2 M^3 / (\\hbar c^4)$ grows steeply with mass. Press Evaporate! to animate the black hole shrinking: the final stages are explosively fast as $T_H \\to \\infty$.",
        "duration": 10000
      },
      {
        "title": "Thermal Radiation Spectrum",
        "body": "Switch the View to Radiation Spectrum: the emission follows a blackbody (Planck) spectrum at temperature $T_H$. Unlike classical black holes, quantum black holes radiate, slowly losing mass to a bath of particles and antiparticles.",
        "duration": 8000
      },
      {
        "title": "Information Paradox",
        "body": "Hawking radiation is perfectly thermal — it carries no information about what fell into the black hole. Penrose argued this signals a fundamental conflict between general relativity and quantum mechanics, still unresolved today.",
        "duration": 10000
      }
    ]
  },
  "14_diff_geometry.html": {
    "0": [
      {
        "title": "Gaussian Curvature Colors Surfaces",
        "body": "Select any surface from the dropdown: green regions have positive Gaussian curvature $K = \\kappa_1 \\kappa_2 > 0$ (dome-like), red regions have $K < 0$ (saddle-like), and grey regions are flat. Drag to rotate.",
        "duration": 8000
      },
      {
        "title": "Theorema Egregium",
        "body": "Gauss proved that $K$ is an intrinsic property — it can be measured entirely from within the surface without reference to an embedding. This is the geometric foundation that Einstein used for general relativity.",
        "duration": 8000
      },
      {
        "title": "Torus Has Mixed Sign Curvature",
        "body": "Select Torus: the outer equator has $K > 0$, the inner ring has $K < 0$, and the top and bottom circles are flat ($K = 0$). The total integral $\\iint K\\,dA = 0$, matching the Euler characteristic $\\chi = 0$.",
        "duration": 8000
      },
      {
        "title": "Wireframe Reveals Mesh",
        "body": "Toggle Wireframe to expose the triangular mesh used to approximate the surface. Increasing the Resolution slider refines the mesh and makes the curvature coloring more accurate near high-curvature regions.",
        "duration": 6000
      },
      {
        "title": "Principal Curvatures Defined",
        "body": "At each point, $\\kappa_1$ and $\\kappa_2$ are the maximum and minimum normal curvatures in orthogonal directions. Their product $K = \\kappa_1 \\kappa_2$ is invariant under bending — a sheet of paper rolled into a cylinder has $K = 0$ everywhere.",
        "duration": 10000
      }
    ],
    "1": [
      {
        "title": "Geodesics Are Curved Straight Lines",
        "body": "On any surface, a geodesic is the locally shortest path between two points — the generalization of a straight line to curved space. On a sphere, all geodesics are great circles. Press Animate to trace them.",
        "duration": 8000
      },
      {
        "title": "Geodesic Equation Uses Christoffel Symbols",
        "body": "Geodesics satisfy $d^2x^\\mu/ds^2 + \\Gamma^\\mu_{\\nu\\rho}(dx^\\nu/ds)(dx^\\rho/ds) = 0$. The Christoffel symbols $\\Gamma^\\mu_{\\nu\\rho}$ encode how coordinates curve and replace the straight-line condition of flat space.",
        "duration": 10000
      },
      {
        "title": "Starting Angle Changes Geodesic",
        "body": "Vary the Starting angle slider to launch geodesics at different directions from the north pole. On the sphere they always return; on the saddle surface they diverge, reflecting the negative curvature.",
        "duration": 8000
      },
      {
        "title": "Parallel Transport Reveals Holonomy",
        "body": "Switch to Parallel Transport mode: a vector carried around a closed loop on a curved surface returns rotated. The holonomy angle shown in the sidebar equals $\\iint_\\Sigma K\\,dA$ — curvature enclosed by the path.",
        "duration": 10000
      },
      {
        "title": "Holonomy Measures Curvature",
        "body": "This is the Ambrose-Singer theorem in action. The holonomy of Earth's rotation axis transported around a line of latitude gives the Foucault pendulum precession angle $2\\pi\\sin(\\text{latitude})$ — an experimentally measurable effect.",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "Gauss-Bonnet Links Geometry to Topology",
        "body": "The theorem states $\\iint_M K\\,dA + \\oint_{\\partial M}\\kappa_g\\,ds = 2\\pi\\chi(M)$. The left side is purely geometric; the right side $\\chi = 2 - 2g$ depends only on the number of holes — topology trumps geometry.",
        "duration": 10000
      },
      {
        "title": "Sphere Always Integrates to $4\\pi$",
        "body": "Select Sphere ($\\chi=2$): the curvature integral $\\iint K\\,dA$ is always $4\\pi$ regardless of the sphere's shape or radius, because $\\chi = 2$ is fixed by topology. Watch the Live Values confirm this as you animate.",
        "duration": 8000
      },
      {
        "title": "Torus Integrates to Zero",
        "body": "Switch to Torus ($\\chi=0$): positive curvature on the outer ring exactly cancels negative curvature on the inner ring, giving $\\iint K\\,dA = 0$. No matter how you deform the torus, the integral stays zero.",
        "duration": 8000
      },
      {
        "title": "Triangle Angle Excess Encodes $K$",
        "body": "Drag the Triangle size slider on the sphere: the angle sum readout exceeds $\\pi$ by exactly $K \\cdot A$, where $A$ is the enclosed area. On the 2-torus ($\\chi=-2$), the excess is negative.",
        "duration": 8000
      },
      {
        "title": "Euler Characteristic Is a Topological Invariant",
        "body": "The formula $\\chi = 2 - 2g$ means a coffee mug and a donut have the same $\\chi = 0$ — you cannot continuously deform one into a sphere without tearing. Gauss-Bonnet makes this a theorem, not just a counting curiosity.",
        "duration": 10000
      }
    ]
  },
  "15_quaternions.html": {
    "0": [
      {
        "title": "Quaternion Algebra Defined",
        "body": "Quaternions extend the complex numbers with three imaginary units satisfying $i^2 = j^2 = k^2 = ijk = -1$. Use the $q_1$ and $q_2$ sliders to set two quaternions and watch their product computed live in the results panel.",
        "duration": 8000
      },
      {
        "title": "Non-Commutativity Is the Key",
        "body": "The results panel confirms $q_1 q_2 \\neq q_2 q_1$ in general: swapping the factors changes the sign of the vector part. The anti-commutation rules $ij = k$, $ji = -k$ are the source of this non-commutativity.",
        "duration": 8000
      },
      {
        "title": "Norm Is Multiplicative",
        "body": "Despite non-commutativity, the quaternion norm satisfies $|q_1 q_2| = |q_1||q_2|$. This makes $\\mathbb{H}$ a normed division algebra — every nonzero quaternion has a well-defined inverse $q^{-1} = \\bar{q}/|q|^2$.",
        "duration": 8000
      },
      {
        "title": "Four-Dimensional Visualization",
        "body": "The canvas plots the real and vector components of $q_1$, $q_2$, and their product simultaneously. Sliding $d_1$ (the $k$-component) shows how the fourth dimension influences the three imaginary parts of the output.",
        "duration": 8000
      },
      {
        "title": "Hamilton's Discovery of 1843",
        "body": "Hamilton spent a decade trying to extend complex numbers to 3D before realizing he needed four dimensions. He carved $i^2 = j^2 = k^2 = ijk = -1$ into Brougham Bridge in Dublin on 16 October 1843 — the birth of quaternions.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Quaternions Encode 3D Rotations",
        "body": "A unit quaternion $q = \\cos(\\theta/2) + \\hat{n}\\sin(\\theta/2)$ encodes a rotation by angle $\\theta$ about the unit axis $\\hat{n}$. Use the Axis and Angle sliders to set the rotation and watch the cube transform.",
        "duration": 8000
      },
      {
        "title": "Conjugation Formula $v' = qvq^{-1}$",
        "body": "A 3D vector $\\mathbf{v}$ is embedded as a pure quaternion $v = v_x i + v_y j + v_z k$ and rotated via $v' = qvq^{-1}$. This is algebraically equivalent to the Rodrigues rotation formula but avoids all trigonometric bookkeeping.",
        "duration": 10000
      },
      {
        "title": "No Gimbal Lock",
        "body": "Unlike Euler angles, quaternion composition $R_2 \\circ R_1 \\leftrightarrow q_2 q_1$ never suffers gimbal lock — the degeneracy that causes two rotation axes to align and lose a degree of freedom. Press Animate to see smooth continuous rotation.",
        "duration": 8000
      },
      {
        "title": "The 720° Double Cover",
        "body": "Press 720° Tour to animate a full $720°$ rotation: the quaternion returns to $q$ after $720°$, not $360°$. Both $q$ and $-q$ represent the same physical rotation — this 2-to-1 map is the double cover $SU(2) \\to SO(3)$.",
        "duration": 10000
      },
      {
        "title": "Spinors Need $720°$ to Close",
        "body": "The double cover explains why quantum spin-$\\frac{1}{2}$ particles are spinors: a $360°$ rotation multiplies the state by $-1$, and only after $720°$ does the state return to itself. This is not a mathematical curiosity — it has measurable neutron-interferometry consequences.",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "Hurwitz's Four Algebras",
        "body": "Hurwitz proved in 1898 that the only normed division algebras over $\\mathbb{R}$ are $\\mathbb{R}$ (dim 1), $\\mathbb{C}$ (dim 2), $\\mathbb{H}$ (dim 4), and $\\mathbb{O}$ (dim 8). Click each highlight button to see its properties displayed.",
        "duration": 8000
      },
      {
        "title": "Cayley-Dickson Construction",
        "body": "Press Cayley-Dickson to animate the doubling process: each step applies $(a,b)(c,d) = (ac - \\bar{d}b,\\; da + b\\bar{c})$ to double the dimension. Each doubling sacrifices one algebraic property.",
        "duration": 8000
      },
      {
        "title": "Properties Lost at Each Step",
        "body": "The right panel lists what is surrendered: $\\mathbb{R} \\to \\mathbb{C}$ loses ordering, $\\mathbb{C} \\to \\mathbb{H}$ loses commutativity, $\\mathbb{H} \\to \\mathbb{O}$ loses associativity. Beyond octonions, the division algebra property itself is lost.",
        "duration": 10000
      },
      {
        "title": "Octonions and Exceptional Lie Groups",
        "body": "Though non-associative, octonions satisfy the Moufang identities and their automorphism group is the exceptional Lie group $G_2$. They are connected to $F_4$, $E_6$, $E_7$, $E_8$ — structures that appear in string theory and M-theory.",
        "duration": 10000
      },
      {
        "title": "Why Only Four Algebras Exist",
        "body": "Click $\\mathbb{O}$ (Octonions) and then highlight $\\mathbb{S}$ (Sedenions) in the diagram: the 16-dimensional sedenions have zero divisors, meaning $ab = 0$ with $a,b \\neq 0$. Division breaks down — Hurwitz's theorem stops the sequence here.",
        "duration": 8000
      }
    ]
  },
  "16_diff_forms.html": {
    "0": [
      {
        "title": "1-Forms as Covectors",
        "body": "A 1-form $\\omega = P\\,dx + Q\\,dy$ assigns a number to each tangent vector — it is the dual of a vector field. The arrow field you see shows how $\\omega$ acts at each grid point.",
        "duration": 8000
      },
      {
        "title": "Wedge Product Rules",
        "body": "The wedge product is antisymmetric: $dx \\wedge dy = -dy \\wedge dx$ and $dx \\wedge dx = 0$. This encodes oriented area, not just magnitude.",
        "duration": 8000
      },
      {
        "title": "Exterior Derivative",
        "body": "The 2-form $d\\omega = \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right)dx \\wedge dy$ measures the infinitesimal circulation of $\\omega$. Toggle 'show $d\\omega$' to overlay the curl density.",
        "duration": 10000
      },
      {
        "title": "Poincaré Lemma",
        "body": "The nilpotency $d(d\\omega) = 0$ means every exact form is closed. Adjust the form buttons to compare which forms have $d\\omega = 0$ (closed) versus $d\\omega \\neq 0$.",
        "duration": 8000
      },
      {
        "title": "Arrow Scale Exploration",
        "body": "Use the Arrow scale slider to magnify small covector values. Increase Grid density to reveal the continuous field structure underlying the discrete sample.",
        "duration": 6000
      }
    ],
    "1": [
      {
        "title": "Stokes' Theorem",
        "body": "The generalized Stokes' theorem states $\\oint_{\\partial M} \\omega = \\int_M d\\omega$: the boundary integral of a form equals the interior integral of its exterior derivative.",
        "duration": 10000
      },
      {
        "title": "Line vs. Area Integrals",
        "body": "Watch the sidebar display both the line integral $\\oint \\mathbf{F}\\cdot d\\mathbf{r}$ and the area integral $\\iint (\\partial_x Q - \\partial_y P)\\,dA$ update in real time — they must agree.",
        "duration": 8000
      },
      {
        "title": "Animate the Boundary",
        "body": "Press 'Animate Path' to see a point trace the boundary $\\partial M$, accumulating the line integral step by step. Try the Rectangle, Disk, and Triangle regions to compare shapes.",
        "duration": 8000
      },
      {
        "title": "Green's Theorem as Special Case",
        "body": "Green's theorem $\\oint_C P\\,dx + Q\\,dy = \\iint_D (Q_x - P_y)\\,dA$ is Stokes in 2D. Switch to $F = (-y, x)$ and observe the clean constant curl filling the region.",
        "duration": 10000
      },
      {
        "title": "Divergence Theorem Too",
        "body": "The divergence theorem $\\oiint \\mathbf{F}\\cdot d\\mathbf{A} = \\iiint \\nabla\\cdot\\mathbf{F}\\,dV$ is also a special case of $\\int_M d\\omega = \\int_{\\partial M}\\omega$, unifying all of classical vector calculus.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Maxwell as a 2-Form",
        "body": "The Faraday 2-form $F = E_i\\,c\\,dt \\wedge dx^i + \\tfrac{1}{2}B_k \\epsilon_{ijk}\\,dx^i \\wedge dx^j$ packages all six electromagnetic field components into a single geometric object.",
        "duration": 10000
      },
      {
        "title": "$dF = 0$ Encodes Gauss and Faraday",
        "body": "The equation $dF = 0$ is equivalent to $\\nabla \\cdot \\mathbf{B} = 0$ (no monopoles) and $\\nabla \\times \\mathbf{E} = -\\partial_t \\mathbf{B}$ (Faraday's law). Try Field Lines B to see the divergence-free structure.",
        "duration": 10000
      },
      {
        "title": "$d{\\star}F = J$ Sources EM",
        "body": "The sourced equation $d{\\star}F = J$ encodes both Gauss's law for $\\mathbf{E}$ and the Ampère-Maxwell law. Adjust the Charge Q and Current I sliders to deform the field patterns.",
        "duration": 10000
      },
      {
        "title": "Gauge Potential",
        "body": "Because $dF = 0$, the Poincaré lemma guarantees $F = dA$ locally, where $A$ is the electromagnetic 4-potential. Gauge freedom is the freedom to add any $d\\chi$ to $A$.",
        "duration": 8000
      },
      {
        "title": "Animate the EM Wave",
        "body": "Press 'Animate EM Wave' to watch $E$ and $B$ oscillate in phase quadrature. The 2-Form visualization mode shows the wave as a traveling section of the Faraday tensor.",
        "duration": 8000
      }
    ]
  },
  "17_fiber_bundles.html": {
    "0": [
      {
        "title": "Möbius Band as Bundle",
        "body": "The Möbius band is a non-trivial $\\mathbb{R}$-bundle over $S^1$: the fiber (a line segment) is attached with one half-twist so $E \\neq S^1 \\times \\mathbb{R}$. Set Twist to 0 to compare the trivial (cylinder) case.",
        "duration": 10000
      },
      {
        "title": "Twist Controls Orientability",
        "body": "Even numbers of half-turns give an orientable (cylinder-like) surface; odd numbers give a non-orientable Möbius band. Drag the Twist slider and watch the self-crossing appear.",
        "duration": 8000
      },
      {
        "title": "Bundle Terminology",
        "body": "Every fiber bundle $(E, B, F, \\pi)$ has a total space $E$, base $B$, fiber $F$, and projection $\\pi: E \\to B$. Transition functions $g_{ij}: U_i \\cap U_j \\to G$ capture how local patches are glued.",
        "duration": 10000
      },
      {
        "title": "Euler Characteristic Zero",
        "body": "The Möbius band has Euler characteristic $\\chi = 0$ and a single boundary edge (when Twist = 1). Rotate the view with View angle sliders to trace this single edge all the way around.",
        "duration": 8000
      },
      {
        "title": "Rotate to Reveal Structure",
        "body": "Press 'Rotate' to animate. Notice how any local patch of the band looks like a trivial strip — only the global topology is non-trivial, visible only by traveling around the full circle.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Hopf Fibration Structure",
        "body": "The Hopf fibration $S^1 \\hookrightarrow S^3 \\to S^2$ covers the 3-sphere by circles: every point on $S^2$ has exactly one fiber circle in $S^3$, and any two distinct fibers are linked exactly once.",
        "duration": 10000
      },
      {
        "title": "Stereographic Projection",
        "body": "The circles in $\\mathbb{R}^3$ are stereographic images of fibers from $S^3$. The Stereographic scale slider zooms the projection; watch how distant fibers swell into large linked rings.",
        "duration": 8000
      },
      {
        "title": "Hopf Invariant and Spinors",
        "body": "The Hopf fibration generates $\\pi_3(S^2) \\cong \\mathbb{Z}$, detected by the Hopf invariant $H: \\pi_3(S^2) \\to \\mathbb{Z}$. Since $S^3 \\cong SU(2)$, this bundle encodes the geometry of spinors.",
        "duration": 10000
      },
      {
        "title": "Fibers Count Controls Density",
        "body": "Increase the Fibers shown slider to pack more latitude circles onto $S^2$. Each new circle adds a new torus-shaped family of linked fibers in 3D space.",
        "duration": 6000
      },
      {
        "title": "Animate the Hopf Bundle",
        "body": "Press 'Animate' to rotate. Notice that no fiber ever crosses another — the entire $S^3$ is foliated by pairwise-linked circles with no intersections.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Connection as Transport Rule",
        "body": "A connection tells you how to parallel transport a vector along a path in the base manifold $B$. On a curved surface the transported vector does not return to its starting direction.",
        "duration": 8000
      },
      {
        "title": "Holonomy Measures Curvature",
        "body": "After a full loop, a parallel-transported vector is rotated by the holonomy angle $\\Delta\\phi = 2\\pi\\sin\\lambda$ on a sphere at latitude $\\lambda$. Move the Loop latitude slider to vary the enclosed solid angle.",
        "duration": 10000
      },
      {
        "title": "Curvature 2-Form",
        "body": "The curvature 2-form is $\\Omega = d\\omega + \\omega \\wedge \\omega$, where $\\omega$ is the connection 1-form. Non-zero $\\Omega$ signals that parallel transport around an infinitesimal loop does not return to the identity.",
        "duration": 10000
      },
      {
        "title": "Compare Three Geometries",
        "body": "Switch between Sphere ($K=1$), Flat ($K=0$), and Hyperbolic ($K < 0$) to see how the holonomy angle changes sign with curvature. Flat space gives zero rotation regardless of loop size.",
        "duration": 8000
      },
      {
        "title": "Gauge Fields are Connections",
        "body": "In physics, the electromagnetic potential $A_\\mu$ and the Yang-Mills field are connections on principal bundles. The path-ordered holonomy $\\mathcal{P}\\exp\\oint A$ gives the Aharonov-Bohm phase and Wilson loops.",
        "duration": 10000
      }
    ]
  },
  "18_infinity.html": {
    "0": [
      {
        "title": "Countable vs. Uncountable",
        "body": "Two sets have the same cardinality if there is a bijection between them. $|\\mathbb{N}| = \\aleph_0$ is countably infinite; $|\\mathbb{R}| = 2^{\\aleph_0}$ is strictly larger — there are more real numbers than natural numbers.",
        "duration": 10000
      },
      {
        "title": "Bijection Demos",
        "body": "Select 'ℕ ↔ ℤ (even/odd)' to see how the integers pair with naturals, or 'ℕ ↔ ℚ (zigzag)' to see Cantor's diagonal enumeration of the rationals. All three sets share cardinality $\\aleph_0$.",
        "duration": 8000
      },
      {
        "title": "Rationals Are Countable",
        "body": "Cantor's zigzag argument shows every positive rational $p/q$ eventually appears in the enumeration of $\\mathbb{N}^2$, so $|\\mathbb{Q}| = \\aleph_0$. This is a genuinely counterintuitive result about density vs. size.",
        "duration": 8000
      },
      {
        "title": "Continuum Is Larger",
        "body": "The bijection $(0,1) \\leftrightarrow \\mathbb{R}$ via $\\tan(\\pi x - \\pi/2)$ shows the open interval and the full real line are the same size, both of cardinality $\\mathfrak{c} = 2^{\\aleph_0} > \\aleph_0$.",
        "duration": 8000
      },
      {
        "title": "Continuum Hypothesis",
        "body": "The Continuum Hypothesis asks whether $2^{\\aleph_0} = \\aleph_1$ — is there a cardinality strictly between $\\aleph_0$ and $\\mathfrak{c}$? Gödel and Cohen showed this statement is independent of ZFC set theory.",
        "duration": 10000
      }
    ],
    "1": [
      {
        "title": "Diagonalization Setup",
        "body": "Cantor's diagonal argument assumes a purported list $f: \\mathbb{N} \\to \\{0,1\\}^{\\mathbb{N}}$ of all infinite binary sequences. The table shows each sequence as a row.",
        "duration": 8000
      },
      {
        "title": "Flipping the Diagonal",
        "body": "Press 'Animate diagonal' to watch the construction: the anti-diagonal sequence is built by setting $d_n = 1 - f(n)_n$, flipping each diagonal entry. The highlighted diagonal cell differs from row $n$ at position $n$.",
        "duration": 10000
      },
      {
        "title": "Escaping Every Row",
        "body": "The constructed sequence $(d_n)$ differs from $f(1)$ at position 1, from $f(2)$ at position 2, and so on — it cannot appear anywhere in the list. The assumed surjection is impossible.",
        "duration": 8000
      },
      {
        "title": "Power Set Corollary",
        "body": "The same argument proves $|\\mathcal{P}(S)| > |S|$ for any set $S$: suppose $f: S \\to \\mathcal{P}(S)$ is surjective, define $D = \\{x : x \\notin f(x)\\}$, and derive a contradiction. This generates the infinite tower $\\aleph_0 < 2^{\\aleph_0} < 2^{2^{\\aleph_0}} < \\cdots$",
        "duration": 10000
      },
      {
        "title": "Try a New Table",
        "body": "Press '↻ New random table' to generate fresh bit sequences. The diagonal argument works for any such table — the escape sequence is always constructible from the diagonal alone.",
        "duration": 6000
      }
    ],
    "2": [
      {
        "title": "Gödel's First Theorem",
        "body": "Any consistent formal system strong enough to encode arithmetic contains a statement $G$ such that $G \\Leftrightarrow \\neg\\text{Provable}(G)$ — a sentence that says 'I am not provable.' It is true but unprovable from within the system.",
        "duration": 10000
      },
      {
        "title": "Gödel Numbering",
        "body": "Gödel encoded syntax as arithmetic by mapping each symbol and formula to a unique natural number via $\\ulcorner\\phi\\urcorner = \\prod p_i^{a_i}$. This turns self-reference from rhetoric into mathematics.",
        "duration": 10000
      },
      {
        "title": "Second Incompleteness Theorem",
        "body": "The Second Incompleteness Theorem states $T \\nvdash \\text{Con}(T)$: no sufficiently powerful consistent theory can prove its own consistency. Adjust the numbering base slider to see different prime encodings.",
        "duration": 8000
      },
      {
        "title": "Provability Landscape",
        "body": "Select 'Provability landscape' to see how theorems cluster: the inner region represents provable statements, while the outer ring visualizes the zone of true-but-unprovable sentences Gödel guaranteed must exist.",
        "duration": 8000
      },
      {
        "title": "Halting Problem Connection",
        "body": "Switch to 'Halting problem' view: Turing's proof that no program can decide whether all programs halt is another instance of the same diagonalization trick Cantor used — self-reference creates an inescapable contradiction.",
        "duration": 10000
      }
    ]
  },
  "19_general_relativity.html": {
    "0": [
      {
        "title": "Einstein Field Equations",
        "body": "The field equations $G_{\\mu\\nu} = 8\\pi G\\,T_{\\mu\\nu}$ equate spacetime curvature (left) with energy-momentum content (right). Mass tells spacetime how to curve; curvature tells mass how to move.",
        "duration": 10000
      },
      {
        "title": "Schwarzschild Geometry",
        "body": "The Schwarzschild metric $ds^2 = -(1-r_s/r)\\,dt^2 + (1-r_s/r)^{-1}dr^2 + r^2 d\\Omega^2$ describes the unique spherically symmetric vacuum solution. Drag the Mass M slider to see the embedding diagram deepen.",
        "duration": 10000
      },
      {
        "title": "Event Horizon and Singularity",
        "body": "At $r = r_s = 2GM/c^2$ the metric coefficient changes sign — this is the event horizon. Nothing inside can causally influence the outside. Select 'Light cones' to see how cones tip inward near the horizon.",
        "duration": 10000
      },
      {
        "title": "Tidal Forces",
        "body": "Switch to 'Tidal deformation' to observe how nearby geodesics diverge (tidal stretching along radial direction, compression transversely). This is the physical signature of spacetime curvature on an extended body.",
        "duration": 8000
      },
      {
        "title": "Geodesics Extremize Action",
        "body": "Free-fall trajectories are geodesics — they extremize the proper time $\\int ds$. There is no gravitational force; objects simply follow the straightest possible paths through curved spacetime.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Mercury's Precession",
        "body": "General relativity predicts an additional perihelion advance $\\Delta\\phi_{GR} = 6\\pi GM / (c^2 l(1-e^2))$ per orbit beyond the Newtonian prediction. Mercury's observed 43″/century was one of GR's first confirmations.",
        "duration": 10000
      },
      {
        "title": "GR Correction to Potential",
        "body": "The effective potential gains a GR term $-GML^2/(c^2 r^3)$ relative to the Newtonian form. This extra $1/r^3$ term prevents perfectly closed ellipses, causing the orbit to slowly precess.",
        "duration": 10000
      },
      {
        "title": "Eccentricity Effect",
        "body": "Drag the Eccentricity slider toward higher values — more eccentric orbits show more dramatic precession per cycle because the body spends more time close to the central mass where the GR correction is strongest.",
        "duration": 8000
      },
      {
        "title": "Precession Readout",
        "body": "The Orbits shown slider lets you accumulate the petal pattern: at high eccentricity you can see the rosette shape build up over many orbits. The live readout shows precession per orbit in radians.",
        "duration": 6000
      },
      {
        "title": "No Newtonian Precession",
        "body": "The Newtonian inverse-square potential produces exactly closed Keplerian ellipses (Bertrand's theorem). Any non-zero precession readout you see is a pure relativistic effect.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Linearized Gravity Waves",
        "body": "Small perturbations $h_{\\mu\\nu}$ of flat spacetime obey the wave equation $\\Box\\bar{h}_{\\mu\\nu} = -16\\pi G\\,T_{\\mu\\nu}$, predicting gravitational waves that travel at $c$ — confirmed by LIGO in 2015.",
        "duration": 10000
      },
      {
        "title": "Two Polarizations",
        "body": "In the transverse-traceless (TT) gauge only $h_{ij}^{TT}$ survives. The $h_+$ polarization squeezes the $x$-axis while stretching $y$; $h_\\times$ squeezes the diagonals. Select each mode to see the test-mass ring deform.",
        "duration": 10000
      },
      {
        "title": "Frequency and Amplitude",
        "body": "Raise the Frequency slider to increase the oscillation rate of spacetime distortion. The Amplitude slider controls the strain $h$, which for real astrophysical sources is of order $10^{-21}$ — incredibly small.",
        "duration": 8000
      },
      {
        "title": "Circular Polarization",
        "body": "Select 'Circular' polarization to see the superposition of $h_+$ and $h_\\times$ with a 90° phase shift. The test-mass ring rotates like a breathing ellipse, as expected from a circular binary inspiral.",
        "duration": 8000
      },
      {
        "title": "Energy Radiated",
        "body": "The radiated power is $\\dot{E} = -(G/5c^5)\\langle \\dddot{Q}_{ij}^2 \\rangle$ (quadrupole formula). Press 'Binary inspiral view' to see how an orbiting pair radiates energy and spirals inward.",
        "duration": 10000
      }
    ]
  },
  "20_thermodynamics.html": {
    "0": [
      {
        "title": "Boltzmann Entropy",
        "body": "Boltzmann's formula $S = k_B \\ln W$ defines entropy as the logarithm of the number of microstates $W$ compatible with the observed macrostate. More particles spread across more speeds means higher $S$.",
        "duration": 10000
      },
      {
        "title": "Maxwell-Boltzmann Distribution",
        "body": "At thermal equilibrium the speed distribution approaches $f(v) \\propto v^2 e^{-mv^2/2k_BT}$. The histogram in the upper panel builds toward the orange MB curve — watch it converge as you add particles.",
        "duration": 10000
      },
      {
        "title": "Temperature from Kinetic Energy",
        "body": "The mean kinetic energy satisfies $\\langle \\tfrac{1}{2}mv^2 \\rangle = \\tfrac{3}{2}k_BT$. Press 'Heat Gas' to raise $T$ and observe both the histogram shifting right and the live $T$ readout increasing.",
        "duration": 8000
      },
      {
        "title": "Particle Number Effect",
        "body": "Drag the Particles N slider from 20 to 200 and watch the histogram smooth out. Statistical mechanics becomes exact only in the thermodynamic limit $N \\to \\infty$; small systems show large fluctuations.",
        "duration": 8000
      },
      {
        "title": "Entropy Grows on Heating",
        "body": "The live $S/k$ readout increases each time you heat the gas: more kinetic energy spreads particles across more microstates, raising $W$ and hence $S$. Cooling reverses this.",
        "duration": 6000
      }
    ],
    "1": [
      {
        "title": "Phase Space and Liouville",
        "body": "Each particle's state is a point $(x, v_x)$ in phase space. Liouville's theorem $d\\rho/dt = 0$ guarantees Hamiltonian flow preserves phase-space volume — the distribution is incompressible.",
        "duration": 10000
      },
      {
        "title": "Coarse-Grained Entropy Grows",
        "body": "Although fine-grained volume is conserved, the cloud of points stretches into thin filaments that fill more coarse-grained cells. The $S(t)$ readout tracks this coarse entropy increase even as $d\\rho/dt = 0$ microscopically.",
        "duration": 10000
      },
      {
        "title": "Time Reversal",
        "body": "Press 'Reverse Time' to flip all velocities. Entropy briefly decreases as the phase-space cloud retraces its path, then rises again — this is the Loschmidt paradox: time-reversible laws can still exhibit irreversibility statistically.",
        "duration": 10000
      },
      {
        "title": "Penrose's Arrow of Time",
        "body": "Penrose argues the second law traces back to the extraordinarily low-entropy initial state of the universe (low Weyl curvature at the Big Bang), not to any intrinsic time asymmetry in the fundamental laws.",
        "duration": 8000
      },
      {
        "title": "Reset and Observe Spreading",
        "body": "Press 'Reset Cluster' to initialize a tight cluster of phase-space points. Animate and watch them spread irreversibly — the same spreading that makes eggs hard to unscramble.",
        "duration": 6000
      }
    ],
    "2": [
      {
        "title": "Maxwell's Demon Idea",
        "body": "Maxwell imagined a demon watching individual molecules and opening a door to let fast ones through one way and slow ones the other — apparently sorting the gas into hot and cold halves without doing work, violating the second law.",
        "duration": 10000
      },
      {
        "title": "Speed Threshold",
        "body": "Drag the Speed threshold slider to set the demon's sorting criterion. Particles above the threshold are guided right (hotter), below it to the left (cooler). Watch $S_{left}$ and $S_{right}$ diverge as sorting proceeds.",
        "duration": 8000
      },
      {
        "title": "Landauer's Resolution",
        "body": "Landauer's principle states that erasing 1 bit of information costs at least $\\Delta S \\geq k_B \\ln 2$ of entropy dissipated as heat. The demon must record each particle decision and eventually erase that memory.",
        "duration": 10000
      },
      {
        "title": "Bits Erased Restores Entropy",
        "body": "Watch the 'Bits erased' and 'Landauer cost' counters accumulate. The total entropy change of gas plus demon memory plus environment remains non-negative — the second law is saved by information physics.",
        "duration": 8000
      },
      {
        "title": "Information is Physical",
        "body": "Bennett (1982) showed measurement itself is reversible; only erasure is irreversible. This deep connection between thermodynamics and information theory underlies modern quantum computing error-correction costs.",
        "duration": 8000
      }
    ]
  },
  "21_quantum_measurement.html": {
    "0": [
      {
        "title": "Wave Function as Amplitude",
        "body": "The Gaussian wave packet $\\psi(x)$ has $|\\psi(x)|^2$ as the probability density for finding the particle at position $x$. The Position spread $\\sigma_x$ slider controls the packet's initial width.",
        "duration": 8000
      },
      {
        "title": "Heisenberg Uncertainty",
        "body": "The uncertainty principle $\\sigma_x \\sigma_p \\geq \\hbar/2$ is a fundamental constraint. Watch the live $\\sigma_x \\cdot \\sigma_p$ readout — it always stays at or above the minimum as you adjust the momentum slider $k_0$.",
        "duration": 10000
      },
      {
        "title": "Collapse on Measurement",
        "body": "Press 'Measure Position' to collapse $\\psi$ to a narrow spike at the measured location. Press 'Animate Spread' to watch the packet re-broaden under free Schrödinger evolution, restoring uncertainty.",
        "duration": 10000
      },
      {
        "title": "Momentum Measurement",
        "body": "Press 'Measure Momentum' instead: the wave function collapses to an extended plane wave of definite $k$, making position maximally uncertain. The two incompatible measurements are mutually exclusive.",
        "duration": 8000
      },
      {
        "title": "Free Spreading Formula",
        "body": "The packet width grows as $\\sigma_x(t) = \\sigma_0\\sqrt{1+(\\hbar t / 2m\\sigma_0^2)^2}$. Narrower initial packets (small $\\sigma_0$) spread faster because they require larger momentum components to be localized.",
        "duration": 10000
      }
    ],
    "1": [
      {
        "title": "EPR Entangled Pair",
        "body": "The singlet state $|\\Psi^-\\rangle = \\tfrac{1}{\\sqrt{2}}(|01\\rangle - |10\\rangle)$ is maximally entangled: measuring one qubit instantly determines the outcome of measuring the other, regardless of separation.",
        "duration": 10000
      },
      {
        "title": "CHSH Inequality",
        "body": "Any local hidden variable theory satisfies $|S| \\leq 2$ for the CHSH correlator $S = E(a,b) - E(a,b') + E(a',b) + E(a',b')$. Quantum mechanics allows $|S| \\leq 2\\sqrt{2} \\approx 2.83$ — a genuine violation.",
        "duration": 10000
      },
      {
        "title": "Quantum Correlation",
        "body": "The quantum correlation function is $E(\\alpha,\\beta) = -\\cos(\\alpha - \\beta)$. Set the four angle sliders to $0°, 45°, 90°, 135°$ to reach the Tsirelson bound $|S| = 2\\sqrt{2}$ — nature's maximum.",
        "duration": 10000
      },
      {
        "title": "Angle Controls Violation",
        "body": "Drag any angle slider away from the optimal configuration and watch $|S|$ decrease toward 2. The live Violation readout shows how much above the classical bound the current setting achieves.",
        "duration": 8000
      },
      {
        "title": "No Faster-Than-Light Signal",
        "body": "Despite the nonlocal correlations, Alice cannot use her measurement to send a signal to Bob: her outcomes are individually random. Bell violation proves no local hidden variables, but respects relativistic causality.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Bloch Sphere State Space",
        "body": "Any qubit state $|\\psi\\rangle = \\cos\\tfrac{\\theta}{2}|0\\rangle + e^{i\\phi}\\sin\\tfrac{\\theta}{2}|1\\rangle$ lives on the Bloch sphere. Pure states are on the surface; mixed states fill the interior. Drag $\\theta$ and $\\phi$ to explore.",
        "duration": 10000
      },
      {
        "title": "Decoherence Decay",
        "body": "Coupling to an environment causes off-diagonal elements to decay: $\\rho_{01}(t) = \\rho_{01}(0)\\,e^{-t/\\tau_D}$. Decrease the Decoherence $\\tau_D$ slider and watch the Bloch vector shrink toward the center.",
        "duration": 10000
      },
      {
        "title": "Von Neumann Entropy",
        "body": "The von Neumann entropy $S = -\\mathrm{Tr}(\\rho \\ln \\rho)$ measures quantum mixedness. Watch the $S_{vN}$ readout rise from 0 (pure state) toward $\\ln 2$ as decoherence converts the pure qubit to a maximally mixed state.",
        "duration": 10000
      },
      {
        "title": "Many-Worlds Interpretation",
        "body": "In the Everett view there is no collapse: the universal wave function unitarily branches so every outcome occurs in some branch. Decoherence selects the preferred pointer basis — the apparent collapse basis — from environmental entanglement.",
        "duration": 8000
      },
      {
        "title": "Wigner's Friend Scenario",
        "body": "Press \"Wigner's Friend\" to toggle the nested-observer scenario: Wigner outside the lab describes his friend's measurement as unitary entanglement, while the friend experiences definite collapse — quantum mechanics is observer-dependent.",
        "duration": 8000
      }
    ]
  },
  "22_path_integrals.html": {
    "0": [
      {
        "title": "Sum Over All Paths",
        "body": "Feynman's path integral $\\langle x_f,t_f | x_i,t_i \\rangle = \\int \\mathcal{D}[x(t)]\\,e^{iS[x]/\\hbar}$ sums a phase $e^{iS/\\hbar}$ over every conceivable trajectory — not just the classical one.",
        "duration": 10000
      },
      {
        "title": "Phase Cancellation",
        "body": "Paths far from the classical trajectory contribute rapidly oscillating phases that cancel in pairs. Only paths near the classical trajectory, where $\\delta S \\approx 0$, add constructively. Reduce the $\\hbar$ (eff) slider to see the classical path emerge.",
        "duration": 10000
      },
      {
        "title": "Classical Limit",
        "body": "As $\\hbar \\to 0$, the stationary-phase approximation recovers the Euler-Lagrange equation $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot x} - \\frac{\\partial L}{\\partial x} = 0$: least action is the classical limit of quantum interference.",
        "duration": 10000
      },
      {
        "title": "Amplitude Vectors",
        "body": "Check 'Show amplitudes' to display each path's phasor (unit vector at angle $S/\\hbar$). Their vector sum gives the total transition amplitude whose squared magnitude is the detection probability shown in the info bar.",
        "duration": 8000
      },
      {
        "title": "More Paths Improve Accuracy",
        "body": "Increase the Paths slider to add more sampled trajectories. The probability readout stabilizes as the Monte Carlo sum converges — showing how the continuum integral $\\mathcal{D}[x]$ is approximated by discrete sampling.",
        "duration": 6000
      }
    ],
    "1": [
      {
        "title": "Two-Slit Interference",
        "body": "Each particle takes all possible paths through both slits simultaneously. The interference pattern arises from the cross term $2\\,\\mathrm{Re}(\\psi_1^*\\psi_2)$ in $|\\psi_1 + \\psi_2|^2$ — a purely wave-amplitude effect.",
        "duration": 10000
      },
      {
        "title": "Fringe Spacing Formula",
        "body": "The fringe separation $\\Delta y = \\lambda L / d$ depends on wavelength $\\lambda$, screen distance $L$, and slit separation $d$. Drag the Slit sep slider and watch the fringes widen as $d$ decreases.",
        "duration": 8000
      },
      {
        "title": "Wavelength Controls Pattern",
        "body": "Increase the $\\lambda$ slider to lengthen the de Broglie wavelength. Wider fringes appear because longer-wavelength particles diffract more strongly and their path-length differences accumulate more slowly.",
        "duration": 8000
      },
      {
        "title": "Particle Buildup",
        "body": "Press 'Animate Particles' to fire individual particles one at a time. Each lands at a random location, but after many arrivals the interference pattern emerges statistically — the hallmark of quantum probability.",
        "duration": 10000
      },
      {
        "title": "Which-Path Destroys Fringes",
        "body": "Any which-path information (e.g., a detector at one slit) destroys the interference: $|\\psi_1 + \\psi_2|^2 \\to |\\psi_1|^2 + |\\psi_2|^2$. Complementarity is built into the path integral — paths through different slits become orthogonal.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Feynman Propagator",
        "body": "The propagator $\\Delta_F(x-y) = \\int \\frac{d^4p}{(2\\pi)^4}\\frac{e^{ip\\cdot(x-y)}}{p^2 - m^2 + i\\varepsilon}$ is the amplitude for a particle to travel from $y$ to $x$. The $i\\varepsilon$ prescription encodes the causal (time-ordered) boundary condition.",
        "duration": 10000
      },
      {
        "title": "Virtual Particles and Off-Shell",
        "body": "Internal lines in Feynman diagrams correspond to propagator factors. These 'virtual' particles satisfy $p^2 \\neq m^2$ — they are off the mass shell, representing quantum fluctuations that borrow energy within the Heisenberg limit.",
        "duration": 10000
      },
      {
        "title": "Loop Corrections",
        "body": "Vacuum polarization loops give logarithmically divergent integrals, regularized and absorbed into a running coupling. The readout $\\alpha(Q^2)$ shows how the fine-structure constant grows from $1/137$ at low energy to $\\approx 1/128$ at $M_Z$.",
        "duration": 10000
      },
      {
        "title": "Loop Size and Scale",
        "body": "Drag the Loop size and $Q^2$ scale sliders to change the momentum flowing through the virtual loop. Larger loop momenta probe shorter distances and increase the effective coupling — asymptotic freedom in QCD works the opposite way.",
        "duration": 8000
      },
      {
        "title": "QFT Generating Functional",
        "body": "The partition function $Z[J] = \\int \\mathcal{D}[\\phi]\\,e^{i(S[\\phi] + \\int J\\phi\\,d^4x)}$ encodes all $n$-point correlation functions via functional derivatives $\\delta^n \\ln Z / \\delta J(x_1)\\cdots\\delta J(x_n)$ — the complete dictionary of a quantum field theory.",
        "duration": 10000
      }
    ]
  },
  "23_twistor_theory.html": {
    "0": [
      {
        "title": "Twistor Space & Null Rays",
        "body": "A spacetime point $x^{A\\dot{A}}$ maps to a projective line $\\mathbb{CP}^1$ in twistor space — the set of all null rays through that point. Drag the point on the Minkowski diagram to watch its twistor image transform in the right panel.",
        "duration": 8000
      },
      {
        "title": "Incidence Relation",
        "body": "The incidence relation $\\omega^A = ix^{A\\dot{A}}\\pi_{\\dot{A}}$ links a spacetime point to every twistor passing through it. This linear equation is the fundamental duality at the heart of twistor geometry.",
        "duration": 10000
      },
      {
        "title": "Null Ray Correspondence",
        "body": "A single twistor $(\\omega^A, \\pi_{\\dot{A}})$ corresponds to an entire null ray in spacetime. Toggle 'Show dual' to overlay both the spacetime ray and its twistor image simultaneously.",
        "duration": 8000
      },
      {
        "title": "Animate Null Geodesics",
        "body": "Press Animate and adjust the Speed slider to watch null geodesics sweep through Minkowski space. In twistor space their images are points on a fixed line $\\mathbb{CP}^1$.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Celestial Sphere",
        "body": "The sky seen from any spacetime point is the celestial sphere $S^2 \\cong \\mathbb{CP}^1$. Stereographic coordinates assign a complex number $\\zeta = e^{i\\phi}\\tan(\\theta/2)$ to each null direction.",
        "duration": 8000
      },
      {
        "title": "Möbius Transformations",
        "body": "The Lorentz group $SO(3,1)^+$ acts on the celestial sphere as $SL(2,\\mathbb{C})$ Möbius transformations $\\zeta \\mapsto (a\\zeta+b)/(c\\zeta+d)$. Adjust sliders Möbius a and b to deform the sphere's grid lines.",
        "duration": 10000
      },
      {
        "title": "Animate Möbius Flow",
        "body": "Click 'Animate Möbius' to see the sphere's coordinate grid flow under a continuous Lorentz boost. Stars near the direction of motion appear bunched together — relativistic aberration.",
        "duration": 8000
      },
      {
        "title": "Stereographic Coordinate",
        "body": "Watch the $\\zeta$ readout as you rotate the sphere. The north pole maps to $\\zeta=\\infty$ (projectivized) and the south pole to $\\zeta=0$, making the full sphere a compact complex manifold $\\mathbb{CP}^1$.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Penrose Transform",
        "body": "Massless free fields of helicity $s$ on spacetime correspond to cohomology classes $H^1(\\mathbb{PT}^+, \\mathcal{O}(2s-2))$ on twistor space. Select helicity $s$ with the Helicity slider to switch between photon ($s=1$) and graviton ($s=2$) field lines.",
        "duration": 10000
      },
      {
        "title": "Helicity of Massless Particles",
        "body": "Helicity $h = \\tfrac{1}{2}Z^\\alpha\\bar{Z}_\\alpha$ measures the projection of spin onto momentum. Positive and negative helicity photons correspond to self-dual $F_{AB}$ and anti-self-dual $\\bar{F}_{\\dot{A}\\dot{B}}$ Maxwell fields respectively.",
        "duration": 10000
      },
      {
        "title": "Field Lines & Cohomology",
        "body": "Increase the Field lines slider to see more field lines; the twisting pattern encodes the cohomology class in $\\mathbb{PT}^+$. The winding number around the Riemann sphere records the helicity charge.",
        "duration": 8000
      },
      {
        "title": "Animate Helicity Flow",
        "body": "Press 'Animate Helicity' to watch the massless field propagate. The automatic satisfaction of Maxwell's equations $\\nabla^{A\\dot{A}}\\phi_{A\\ldots B}=0$ is built in by the twistor construction — no field equation needs to be imposed separately.",
        "duration": 10000
      }
    ]
  },
  "24_loop_quantum_gravity.html": {
    "0": [
      {
        "title": "Spin Networks",
        "body": "Spin networks are graphs whose edges carry $SU(2)$ representations labeled by half-integer spins $j \\in \\{0, \\tfrac{1}{2}, 1, \\tfrac{3}{2}, 2, \\ldots\\}$. They form an orthonormal basis for quantum geometry in LQG.",
        "duration": 8000
      },
      {
        "title": "Quantum Area from Spins",
        "body": "The area of a surface $S$ is quantized: $A_S = 8\\pi\\gamma\\ell_P^2\\sum_{p \\in S\\cap\\Gamma}\\sqrt{j_p(j_p+1)}$. Click any edge crossing the dashed surface line to cycle its spin and watch the area readout change.",
        "duration": 10000
      },
      {
        "title": "Intertwiners at Vertices",
        "body": "Vertices of the spin network carry intertwiners — invariant tensors in $\\mathrm{Inv}(\\bigotimes_e V^{j_e})$. They ensure the Gauss (gauge) constraint is satisfied at each node, encoding the quantum geometry of a polyhedron face.",
        "duration": 8000
      },
      {
        "title": "Animate Spin Network",
        "body": "Press Animate to see quantum excitations pulse along the edges. Each glowing dot represents a quantum of geometry propagating along a link carrying spin $j$.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Spin Foam Evolution",
        "body": "A spin foam is a 2-complex interpolating between spin networks: faces carry spin amplitudes, edges carry intertwiners, and vertices represent quantum spacetime events where topology changes.",
        "duration": 8000
      },
      {
        "title": "EPRL Vertex Amplitude",
        "body": "The path integral for quantum gravity sums over spin foams: $Z = \\sum_{\\text{foams}} \\prod_f A_f \\prod_e A_e \\prod_v A_v$. The EPRL vertex amplitude $A_v$ reproduces the Einstein–Hilbert action in the semiclassical limit.",
        "duration": 10000
      },
      {
        "title": "3D Spin Foam Geometry",
        "body": "Adjust the Rotation and Tilt sliders to orbit the 3D spin foam diagram. Each internal face carries a spin label; its amplitude is a $SU(2)$ Clebsch-Gordan coefficient generalization.",
        "duration": 8000
      },
      {
        "title": "Topology Change Events",
        "body": "Vertices in the spin foam (shown as node flashes in the animation) are where two spin networks merge or split — genuine quantum-gravitational events with no classical analogue.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Discrete Area Spectrum",
        "body": "LQG predicts area is fundamentally discrete. The eigenvalues are $A_n = 8\\pi\\gamma\\ell_P^2\\sqrt{j(j+1)}$ with minimum quantum $\\sim 4\\pi\\sqrt{3}\\,\\gamma\\ell_P^2 \\approx 10^{-70}\\,\\mathrm{m}^2$ — far below any current experimental reach.",
        "duration": 10000
      },
      {
        "title": "Barbero-Immirzi Parameter",
        "body": "The dimensionless parameter $\\gamma$ (Barbero-Immirzi) is a free constant of LQG. Adjust the $\\gamma$ slider to rescale all area eigenvalues proportionally. It is fixed to $\\gamma \\approx 0.274$ by demanding agreement with the Bekenstein-Hawking black hole entropy.",
        "duration": 10000
      },
      {
        "title": "Increasing j_max",
        "body": "Drag the $j_{\\max}$ slider rightward to reveal higher area eigenvalues on the spectrum plot. The gaps between levels grow as $\\sim\\sqrt{j}$, making quantum geometry coarser at higher spins.",
        "duration": 8000
      },
      {
        "title": "LQG vs. Strings",
        "body": "Unlike string theory, LQG is background-independent: it quantizes the geometry of spacetime directly using Ashtekar variables $A_a^i = \\Gamma_a^i + \\gamma K_a^i$ without presupposing a fixed metric background.",
        "duration": 10000
      }
    ]
  },
  "25_higgs_field.html": {
    "0": [
      {
        "title": "Vacuum Expectation Value",
        "body": "The Higgs field acquires a non-zero vacuum expectation value $\\langle\\phi\\rangle = v/\\sqrt{2} \\approx 174\\,\\mathrm{GeV}$. Use the VEV $v$ slider to tune it from 0 to 300 GeV and watch the electroweak phase diagram shift.",
        "duration": 8000
      },
      {
        "title": "Electroweak Phase Transition",
        "body": "Above the electroweak temperature $T_{EW} \\approx 159\\,\\mathrm{GeV}$, the symmetry is restored and $v=0$. Below it, the universe condenses into the broken phase. Press 'Animate Phase Transition' to replay this cooling.",
        "duration": 8000
      },
      {
        "title": "W and Z Masses Set by v",
        "body": "The W and Z masses are locked to the VEV: $m_W = \\tfrac{1}{2}gv \\approx 80.4\\,\\mathrm{GeV}$ and $m_Z \\approx 91.2\\,\\mathrm{GeV}$. Drag the VEV slider down to zero and both masses vanish — restoring symmetry.",
        "duration": 10000
      },
      {
        "title": "Higgs Condensate as Medium",
        "body": "In the broken phase the Higgs field permeates all of space like an invisible medium. Particles moving through it acquire effective inertia — the origin of mass. The Higgs boson at 125 GeV is the quantum of ripple around $v$.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Mexican Hat Potential",
        "body": "The Higgs potential $V(\\phi) = -\\mu^2|\\phi|^2 + \\lambda|\\phi|^4$ has a circle of degenerate minima at $|\\phi| = v/\\sqrt{2}$. Adjust the $\\mu^2/\\lambda$ slider to widen or shrink the brim of the hat.",
        "duration": 8000
      },
      {
        "title": "Spontaneous Symmetry Breaking",
        "body": "The potential has exact $U(1)$ symmetry, but the ground state picks one point on the minimum ring, breaking it. Press 'Roll Ball' to watch a particle roll off the unstable hilltop and settle into the vacuum.",
        "duration": 8000
      },
      {
        "title": "Goldstone Boson Mode",
        "body": "Click 'Goldstone Mode' to orbit the minimum ring — this flat direction costs zero energy and corresponds to a massless Goldstone boson. In the gauged electroweak theory, this mode is absorbed by the W and Z, giving them longitudinal polarization.",
        "duration": 8000
      },
      {
        "title": "Radial Mode = Higgs Boson",
        "body": "Oscillating radially away from the minimum ring costs energy $\\sim m_H^2 = 2\\mu^2 = 2\\lambda v^2$. This radial excitation is the physical Higgs boson, discovered at CERN in 2012 with $m_H \\approx 125\\,\\mathrm{GeV}$.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Mass Generation Mechanism",
        "body": "All Standard Model masses scale linearly with the VEV: gauge bosons as $m_W = \\tfrac{1}{2}gv$ and fermions as $m_f = y_f v/\\sqrt{2}$. Drag the VEV $v$ slider to zero and every massive particle becomes massless simultaneously.",
        "duration": 10000
      },
      {
        "title": "Yukawa Couplings & Flavor",
        "body": "Fermion masses are set by dimensionless Yukawa couplings $y_f$, ranging from $y_e \\approx 2.9 \\times 10^{-6}$ for the electron to $y_t \\approx 1$ for the top quark. Why these values span six orders of magnitude is the unsolved 'flavor puzzle'.",
        "duration": 10000
      },
      {
        "title": "Photon Stays Massless",
        "body": "The photon remains massless because the electromagnetic $U(1)_{EM}$ subgroup is left unbroken by $\\langle\\phi\\rangle$. Only the $SU(2)_L \\times U(1)_Y$ combination that couples directly to the Higgs condensate is broken.",
        "duration": 8000
      },
      {
        "title": "Hierarchy Problem",
        "body": "Quantum corrections naively push $m_H^2$ up to the Planck scale $M_{Pl}^2 \\approx (10^{19}\\,\\mathrm{GeV})^2$. The observed $m_H = 125\\,\\mathrm{GeV}$ requires a 34-order-of-magnitude cancellation — the hierarchy problem motivates supersymmetry and extra dimensions.",
        "duration": 10000
      }
    ]
  },
  "25_string_theory.html": {
    "0": [
      {
        "title": "Strings & Worldsheets",
        "body": "A relativistic string sweeps out a 2D worldsheet parameterized by $\\tau$ (time) and $\\sigma$ (position along the string). The Nambu-Goto action $S = -\\frac{1}{2\\pi\\alpha'}\\int d\\tau\\,d\\sigma\\sqrt{-\\det(\\partial_\\alpha X^\\mu \\partial_\\beta X_\\mu)}$ minimizes the worldsheet area.",
        "duration": 10000
      },
      {
        "title": "Oscillation Mode n",
        "body": "Adjust the Mode n slider to change the oscillation quantum number. The mass spectrum is $m^2 = (n-1)/\\alpha'$ — mode $n=1$ gives massless gauge bosons, while $n=0$ yields a tachyon signaling the need for supersymmetry.",
        "duration": 10000
      },
      {
        "title": "String Tension Alpha'",
        "body": "The parameter $\\alpha' = \\ell_s^2$ sets the string tension. Drag the Alpha' slider to see the worldsheet oscillation frequency change. At low energies ($E \\ll 1/\\ell_s$) strings appear point-like and reduce to ordinary field theory.",
        "duration": 8000
      },
      {
        "title": "Critical Dimension = 10",
        "body": "Anomaly cancellation forces the superstring to live in exactly $D=10$ dimensions. The extra six must be compactified on a small internal manifold — their geometry determines the low-energy particle physics we observe.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Calabi-Yau Compactification",
        "body": "The six extra dimensions are curled into a Calabi-Yau 3-fold: a complex manifold with $SU(3)$ holonomy and Ricci-flat Kähler metric. Adjust the CY radius R slider to scale the internal space.",
        "duration": 8000
      },
      {
        "title": "Hodge Numbers & Generations",
        "body": "Hodge numbers $(h^{1,1}, h^{2,1})$ count independent complex deformation modes. The number of quark-lepton generations equals $|h^{1,1} - h^{2,1}|$. Vary the h11 and h21 sliders to change the particle content.",
        "duration": 10000
      },
      {
        "title": "Mirror Symmetry",
        "body": "Mirror symmetry is a profound duality: a Calabi-Yau with Hodge numbers $(h^{1,1}, h^{2,1})$ gives the same physics as its mirror with $(h^{2,1}, h^{1,1})$ swapped. This exchanges geometric and quantum corrections.",
        "duration": 8000
      },
      {
        "title": "The String Landscape",
        "body": "Different flux compactifications yield $\\sim 10^{500}$ metastable vacua (the landscape). Each vacuum has different particle masses and coupling constants — a vast discretuum explored by eternal inflation and the anthropic principle.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "T-Duality",
        "body": "A string compactified on a circle of radius $R$ is physically equivalent to one compactified on radius $\\ell_s^2/R$, with momentum modes $p$ and winding modes $w$ exchanged. Adjust the Winding w slider to see the dual description.",
        "duration": 8000
      },
      {
        "title": "Winding Modes",
        "body": "Strings can wrap around compact dimensions, carrying winding charge $w$. The energy of a wound string grows as $wR/\\ell_s^2$, becoming light at small $R$ where momentum modes become heavy — a perfect duality.",
        "duration": 8000
      },
      {
        "title": "T-Duality Energy Spectrum",
        "body": "The full spectrum is $E^2 = (p/R)^2 + (wR/\\ell_s^2)^2 + \\text{oscillators}$. Animate and vary Momentum p and Winding w to see how the two contributions interchange under $R \\leftrightarrow \\ell_s^2/R$.",
        "duration": 10000
      },
      {
        "title": "Dualities Unify Five Theories",
        "body": "T-duality (and its cousin S-duality) relate all five superstring theories and 11D supergravity into a single web. The conjectured master theory, M-theory, lives in 11 dimensions and has no small-coupling expansion.",
        "duration": 8000
      }
    ]
  },
  "26_number_systems.html": {
    "0": [
      {
        "title": "The Number Tower",
        "body": "The number systems $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}$ form a tower of increasing richness. The real line is drawn with rationals dense yet of measure zero — use the Zoom slider to reveal the rational crowd.",
        "duration": 8000
      },
      {
        "title": "Transcendentals vs Algebraics",
        "body": "Click the special constants $\\sqrt{2}$, $\\phi$, $\\pi$, and $e$ on the number line to inspect their types. Algebraic irrationals like $\\sqrt{2}$ satisfy polynomials; transcendentals like $\\pi$ and $e$ do not.",
        "duration": 8000
      },
      {
        "title": "Density vs. Measure",
        "body": "Cantor showed $|\\mathbb{Q}| = |\\mathbb{N}|$ (countable) while $|\\mathbb{R}| > |\\mathbb{N}|$ (uncountable by the diagonal argument). The rationals are dense in $\\mathbb{R}$ yet have Lebesgue measure zero — infinitely many holes.",
        "duration": 10000
      },
      {
        "title": "Complex Plane Above",
        "body": "The canvas places $\\mathbb{C}$ above and below the real axis. The Gaussian integers $\\mathbb{Z}[i]$ appear as a square lattice. Complex numbers are essential to quantum mechanics — wave functions are inherently complex-valued.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Continued Fractions",
        "body": "Every real number has a continued fraction expansion $x = a_0 + \\cfrac{1}{a_1 + \\cfrac{1}{a_2 + \\cdots}}$. Select $\\phi$, $e$, $\\pi$, or $\\sqrt{2}$ from the dropdown to visualize their expansions.",
        "duration": 8000
      },
      {
        "title": "Golden Ratio Most Irrational",
        "body": "The golden ratio $\\phi = [1;1,1,1,\\ldots]$ has the slowest-converging continued fraction — all ones — making it the 'most irrational' number and the hardest to approximate by rationals. Its convergents are consecutive Fibonacci ratios $F_{n+1}/F_n$.",
        "duration": 8000
      },
      {
        "title": "Best Rational Approximations",
        "body": "Drag the convergents slider to add more terms. Each convergent $p_n/q_n$ satisfies $|x - p_n/q_n| < 1/q_n^2$ (Dirichlet's theorem) and alternates above and below the true value, closing in rapidly.",
        "duration": 8000
      },
      {
        "title": "Animate Convergents",
        "body": "Press 'Animate Convergents' to watch the rational approximations home in on the target. Notice how $\\pi = [3;7,15,1,292,\\ldots]$ lurches dramatically at the large partial quotient 292.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "p-adic Numbers",
        "body": "For each prime $p$, the $p$-adic absolute value $|x|_p = p^{-v_p(x)}$ measures divisibility by $p$ instead of size. Choose a prime from the dropdown to switch between the 2-adic, 3-adic, 5-adic, or 7-adic trees.",
        "duration": 8000
      },
      {
        "title": "p-adic Tree Structure",
        "body": "$\\mathbb{Q}_p$ is visualized as an infinite $p$-ary tree: at each node, $p$ branches correspond to residues $0, 1, \\ldots, p-1$. Paths toward the leaves represent successive digits in the $p$-adic expansion $\\sum_{n=0}^\\infty a_n p^n$.",
        "duration": 8000
      },
      {
        "title": "Powers of p Are Small",
        "body": "In the $p$-adic metric, $|p^n|_p = p^{-n} \\to 0$: high powers of $p$ are *near* zero. The info box reminds you that in the 2-adic world $\\ldots1111_2 = -1$ — the series $1+2+4+8+\\cdots$ converges to $-1$.",
        "duration": 10000
      },
      {
        "title": "Ostrowski & Adèles",
        "body": "Ostrowski's theorem: every non-trivial absolute value on $\\mathbb{Q}$ is either the real absolute value or a $p$-adic one. The adèle ring $\\mathbb{A}_{\\mathbb{Q}} = \\mathbb{R} \\times \\prod_p \\mathbb{Q}_p$ packages all completions into a single framework fundamental to modern number theory.",
        "duration": 10000
      }
    ]
  },
  "27_visual_calculus.html": {
    "0": [
      {
        "title": "Limits & Derivatives",
        "body": "The derivative is the limit of the difference quotient $f'(x_0) = \\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$. Drag the Step h slider toward zero to watch the secant line rotate into the tangent.",
        "duration": 8000
      },
      {
        "title": "ε-δ Definition of Limit",
        "body": "Enable ε-δ mode and adjust the ε and δ sliders to explore the formal definition: for every $\\varepsilon > 0$ there exists $\\delta > 0$ such that $|x - x_0| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon$. The colored bands visualize both tolerances.",
        "duration": 10000
      },
      {
        "title": "Non-Differentiable: |x|",
        "body": "Select the $|x|$ function. At $x=0$ the left secant slope is $-1$ and the right is $+1$ — they never agree, so the limit does not exist. Differentiability is strictly stronger than continuity.",
        "duration": 8000
      },
      {
        "title": "Animate h→0",
        "body": "Press 'Animate h→0' to replay the limit process in slow motion. Watch the secant collapse onto the tangent and read off the slope — for $x^3 - x$ at the selected point, it equals $3x_0^2 - 1$.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Riemann Integration",
        "body": "The Riemann integral $\\int_a^b f\\,dx = \\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x_i$ is the area under the curve. Drag the N rectangles slider from 1 upward to see the approximation improve.",
        "duration": 8000
      },
      {
        "title": "Left, Right, Midpoint, Trap",
        "body": "Switch the Method dropdown between Left Riemann, Right Riemann, Midpoint, and Trapezoid rules. The Midpoint and Trapezoid rules converge as $O(1/N^2)$, one order faster than one-sided rules.",
        "duration": 8000
      },
      {
        "title": "Animate N→∞",
        "body": "Press 'Animate N→∞' and watch the rectangles multiply until the staircase becomes a smooth filled area. The error between approximation and exact value is displayed in the info box.",
        "duration": 8000
      },
      {
        "title": "Fundamental Theorem of Calculus",
        "body": "The FTC states $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$: differentiation and integration are inverse operations. The exact area for $\\sin x$ on $[0,\\pi]$ is $[-\\cos x]_0^\\pi = 2$.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Taylor Series",
        "body": "A smooth function is approximated by partial sums $\\sum_{n=0}^N \\frac{f^{(n)}(a)}{n!}(x-a)^n$. Each colored curve in the canvas is a successive partial sum; the white curve is the exact function.",
        "duration": 8000
      },
      {
        "title": "Drag the Expansion Point",
        "body": "Drag the expansion point $a$ slider away from zero to re-center the series. A Taylor series converges within a radius $R$ of its center; notice that $\\ln(1+x)$ diverges for $|x|>1$ regardless of $a$.",
        "duration": 8000
      },
      {
        "title": "Adding Terms",
        "body": "Increase the Terms shown slider one step at a time to watch each polynomial correction snap the curve closer to truth. For $\\sin(x)$, each added pair of terms extends the accurate range by roughly one period.",
        "duration": 8000
      },
      {
        "title": "Radius of Convergence",
        "body": "The Cauchy-Hadamard formula gives $R = 1/\\limsup|a_n|^{1/n}$. For $e^x$ the radius is $\\infty$; for $1/(1-x)$ it is exactly 1. Press 'Animate Terms' to see the convergence radius boundary form.",
        "duration": 10000
      }
    ]
  },
  "28_ccc_or.html": {
    "0": [
      {
        "title": "Conformal Cyclic Cosmology",
        "body": "Penrose's CCC proposes that the remote future $\\mathscr{I}^+$ of one aeon is conformally identical to the Big Bang of the next. The conformal rescaling $\\tilde{g} = \\Omega^2 g$ maps vast cold emptiness to a hot dense origin.",
        "duration": 10000
      },
      {
        "title": "Aeons & Crossover Surface",
        "body": "Press Animate to watch aeons unfold. The crossover surface $\\partial$(Aeon N) is identified with the Big Bang of Aeon N+1 — entropy resets because all massive particles have decayed, leaving only massless conformally-invariant fields.",
        "duration": 8000
      },
      {
        "title": "Hawking Points in CMB",
        "body": "Supermassive black holes in one aeon evaporate near $\\mathscr{I}^+$, releasing Hawking radiation that imprints as low-variance rings ('Hawking points') in the CMB of the next aeon — a testable prediction, though contested.",
        "duration": 8000
      },
      {
        "title": "Weyl Tensor at Crossover",
        "body": "The Weyl curvature tensor vanishes at each crossover, enforcing Penrose's Weyl Curvature Hypothesis and giving each new aeon a specially low-entropy gravitational initial state. See Tab 3 for the full visualization.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Objective Reduction (OR)",
        "body": "Penrose proposes quantum superpositions collapse objectively when their gravitational self-energy $E_G \\approx Gm^2/d$ exceeds $\\hbar/\\tau_{OR}$, giving a collapse time $\\tau_{OR} = \\hbar/E_G$. This collapse requires no observer or environment.",
        "duration": 10000
      },
      {
        "title": "Mass & Separation Sliders",
        "body": "Adjust the Mass (log AMU) slider and Separation (nm) slider. Watch $E_G$ and $\\tau_{OR}$ update live. A proton has $\\tau_{OR} \\sim 10^7$ years; a 1 µm dust grain collapses in $\\sim 10^{-7}$ s.",
        "duration": 8000
      },
      {
        "title": "Superposition to Collapse",
        "body": "The State readout tracks whether the system is in SUPERPOSITION or has undergone OR COLLAPSE. Increase mass or decrease separation to push $E_G$ above the threshold and trigger collapse.",
        "duration": 8000
      },
      {
        "title": "Orch OR & Consciousness",
        "body": "Penrose and Hameroff propose that microtubules in neurons ($m \\sim 10^{12}$ AMU, nm separations) hit the OR threshold at $\\tau \\sim 25$ ms — the timescale of neural gamma oscillations — suggesting consciousness arises from objective quantum gravity collapses.",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "Weyl Curvature Hypothesis",
        "body": "The Weyl curvature $C_{abcd}$ encodes tidal, shape-distorting gravitational fields. Penrose's Weyl Curvature Hypothesis states $C_{abcd} = 0$ at the Big Bang — a maximally special, low-entropy initial condition.",
        "duration": 8000
      },
      {
        "title": "Weyl=0 Means Low Entropy",
        "body": "Press Animate and watch the cosmic timeline. Despite the extremely hot Big Bang (high thermal entropy), the Weyl $= 0$ condition froze gravitational degrees of freedom, giving the universe its low total entropy and the arrow of time.",
        "duration": 8000
      },
      {
        "title": "Ricci vs Weyl Curvature",
        "body": "The Ricci tensor $R_{ab}$ sources curvature from matter/energy (Einstein's equation), while $C_{abcd}$ is the 'free' gravitational field. High Weyl means clumped matter and black holes; low Weyl means a smooth, uniform distribution.",
        "duration": 8000
      },
      {
        "title": "Entropy Paradox Resolved",
        "body": "The apparent paradox — the Big Bang was hot (high thermal entropy) yet had low total entropy — is resolved because gravitational entropy was near zero ($C=0$). The Second Law operates as gravitational clumping converts Weyl-zero into Weyl-large over cosmic time.",
        "duration": 10000
      }
    ]
  },
  "29_symplectic.html": {
    "0": [
      {
        "title": "Symplectic Phase Space",
        "body": "Phase space carries the symplectic 2-form $\\omega = \\sum_i dq^i \\wedge dp_i$. Hamilton's equations $\\dot{q}^i = \\partial H/\\partial p_i$, $\\dot{p}_i = -\\partial H/\\partial q^i$ generate the Hamiltonian vector field $X_H$ satisfying $\\iota_{X_H}\\omega = dH$.",
        "duration": 10000
      },
      {
        "title": "Liouville's Theorem",
        "body": "Because $\\mathcal{L}_{X_H}\\omega = 0$, the Hamiltonian flow preserves the symplectic volume form $\\omega^n$. Watch the colored parallelogram flow with the vector field — its area remains exactly constant no matter how it deforms.",
        "duration": 8000
      },
      {
        "title": "Phase Portraits",
        "body": "Switch between Harmonic, Anharmonic, and Pendulum Hamiltonians using the three buttons. Level curves of $H(q,p) = \\mathrm{const}$ are the phase-space trajectories; elliptic centers and hyperbolic saddles become visible in the anharmonic and pendulum portraits.",
        "duration": 8000
      },
      {
        "title": "Darboux's Theorem",
        "body": "Darboux's theorem guarantees that every symplectic manifold locally looks like $(\\mathbb{R}^{2n}, \\sum dq^i \\wedge dp_i)$. Unlike Riemannian geometry, symplectic geometry has no local curvature invariants — all topology is global.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Liouville Tori",
        "body": "The Arnold-Liouville theorem states that a completely integrable $n$-DOF system with $n$ conserved quantities in involution ($\\{H_i, H_j\\}=0$) foliates phase space into invariant $n$-tori. The 3D torus spins in the main canvas; the flat $[0,2\\pi]^2$ domain is shown in the angle panel.",
        "duration": 10000
      },
      {
        "title": "Action-Angle Variables",
        "body": "In action-angle coordinates $(I_i, \\theta^i)$ the dynamics is trivially linear: $\\dot{\\theta}^i = \\omega_i = \\partial H/\\partial I_i = \\mathrm{const}$. The trajectory wraps as a straight line of slope $\\omega_2/\\omega_1$ on the flat torus.",
        "duration": 8000
      },
      {
        "title": "Rational vs Irrational Ratio",
        "body": "Toggle between Rational $\\omega_1/\\omega_2$ and Irrational $\\omega_1/\\omega_2$ modes. A rational ratio gives a closed periodic orbit; an irrational ratio produces a trajectory that fills the torus densely (ergodic, Weyl equidistribution theorem).",
        "duration": 8000
      },
      {
        "title": "Frequency Ratio Slider",
        "body": "Drag the $\\omega_1/\\omega_2$ slider to tune the frequency ratio. Watch the winding number on the torus surface change and the angle-space trail shift slope. Near rational values the orbit nearly closes before drifting.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "KdV Solitons",
        "body": "The Korteweg-de Vries equation $\\partial_t u + 6u\\,\\partial_x u + \\partial_x^3 u = 0$ governs shallow water waves. Its 1-soliton solution $u(x,t) = -2\\kappa^2\\,\\mathrm{sech}^2(\\kappa(x - 4\\kappa^2 t - x_0))$ is a localized wave of permanent form.",
        "duration": 10000
      },
      {
        "title": "Elastic Soliton Scattering",
        "body": "Switch to '2 Solitons' mode and press Animate to watch two solitons collide. They pass through each other and emerge with exactly their original shapes and speeds — only a phase shift remains. This elastic scattering is guaranteed by complete integrability.",
        "duration": 8000
      },
      {
        "title": "Tune Soliton Widths",
        "body": "Adjust the $\\kappa_1$ and $\\kappa_2$ sliders to change the amplitudes and speeds of the two solitons (taller = faster, since speed $= 4\\kappa^2$). The phase shift after collision grows when the ratio $\\kappa_1/\\kappa_2$ departs from 1.",
        "duration": 8000
      },
      {
        "title": "Infinite Conserved Charges",
        "body": "KdV has infinitely many conserved quantities $I_n = \\int P_n(u, u_x, \\ldots)\\,dx$, making it completely integrable via the Lax pair / inverse scattering transform. This links solitons directly to the symplectic and Liouville-torus structure in the previous tabs.",
        "duration": 10000
      }
    ]
  },
  "30_spinor_calculus.html": {
    "0": [
      {
        "title": "The Flagpole Picture",
        "body": "A 2-spinor $\\kappa^A \\in \\mathbb{C}^2$ encodes a null direction (the flagpole) on $S^2$ and a spin phase (the flag plane). Drag the sphere to move the flagpole and watch both components update.",
        "duration": 8000
      },
      {
        "title": "Spinor Sign Ambiguity",
        "body": "Both $\\kappa^A$ and $-\\kappa^A$ point the flagpole in the same direction — spinors have an intrinsic $\\pm 1$ ambiguity that vectors do not. The Sign readout shows which branch you are on.",
        "duration": 8000
      },
      {
        "title": "The 4π Periodicity",
        "body": "After a $2\\pi$ rotation of the physical direction, the spinor acquires a factor of $-1$: $R(2\\pi): \\kappa^A \\to -\\kappa^A$. Click Animate 360° and watch the rotation counter — only after two full turns does the spinor return to its starting value.",
        "duration": 10000
      },
      {
        "title": "Stereographic Components",
        "body": "The two spinor components are $\\kappa^0 = \\cos(\\theta/2)$ and $\\kappa^1 = \\sin(\\theta/2)e^{i\\phi}$, mirroring the Bloch sphere but with the half-angle encoding spin-$\\frac{1}{2}$ behavior.",
        "duration": 10000
      },
      {
        "title": "Null Vector from Spinor",
        "body": "The outer product $l^a = \\kappa^A \\bar{\\kappa}^{\\dot{A}}$ is always a null vector. This spinor factorization of null vectors is the foundation of Penrose's twistor program.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Spin-Weighted Harmonics",
        "body": "A function on $S^2$ has spin weight $s$ if under the rotation $\\phi \\to \\phi + \\alpha$ it transforms as ${}_{s}Y_{lm} \\to e^{is\\alpha}\\, {}_{s}Y_{lm}$. Use the s buttons to switch between scalar ($s=0$), EM ($s=\\pm 1$), and gravitational-wave ($s=\\pm 2$) modes.",
        "duration": 8000
      },
      {
        "title": "The Eth Operator",
        "body": "The ð (eth) operator raises spin weight by 1: $\\eth: {}_s\\eta \\to {}_{s+1}\\eta$. Applying $|s|$ times to standard spherical harmonics generates the entire family ${}_{s}Y_{lm}$.",
        "duration": 10000
      },
      {
        "title": "Domain Coloring",
        "body": "Hue encodes the phase $\\arg(Y)$ over $[0, 2\\pi]$ while brightness encodes magnitude $|Y|$. Black regions are zeros; the number of full color cycles around any point gives the winding number.",
        "duration": 8000
      },
      {
        "title": "Physical Spin Weights",
        "body": "$s=0$ fields are ordinary scalars; $s=\\pm 2$ encode the two polarization modes $h_+$ and $h_\\times$ of gravitational waves. Try l=2 with s=±2 to see the quadrupole radiation pattern.",
        "duration": 8000
      },
      {
        "title": "Selection Rule |s| ≤ l",
        "body": "The condition $|s| \\le l$ must be satisfied for the harmonic to exist. The panel flags violations in red — this constraint mirrors the $|m| \\le l$ rule for ordinary spherical harmonics.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Petrov Classification",
        "body": "The Weyl curvature tensor $C_{abcd}$ reduces to a degree-4 polynomial $P(\\zeta)$ whose roots are the principal null directions. The multiplicity pattern of these roots classifies the gravitational field.",
        "duration": 10000
      },
      {
        "title": "Type D: Black Holes",
        "body": "Type D has two double roots (pattern 2+2). Schwarzschild and Kerr spacetimes are both Type D — they have exactly two repeated principal null directions, reflecting their high symmetry.",
        "duration": 8000
      },
      {
        "title": "Type N: Pure Radiation",
        "body": "Type N has a single four-fold root, meaning all four principal null directions coincide. This is the fingerprint of a plane gravitational wave far from its source where only $\\Psi_4 \\ne 0$.",
        "duration": 8000
      },
      {
        "title": "NP Weyl Scalars",
        "body": "The five Newman–Penrose scalars $\\Psi_0$–$\\Psi_4$ label ingoing/outgoing transverse and longitudinal wave content plus the Coulomb component $\\Psi_2$. The Petrov type determines which scalars vanish.",
        "duration": 10000
      },
      {
        "title": "Specialization Hierarchy",
        "body": "The Petrov types form a hierarchy I → II → III → O and I → D → N → O. Each step adds a coinciding root, meaning increasingly special (more symmetric) gravitational fields.",
        "duration": 8000
      }
    ]
  },
  "31_instantons.html": {
    "0": [
      {
        "title": "Self-Dual Decomposition",
        "body": "Any gauge field $F$ splits as $F = F^+ + F^-$ where $\\star F^+ = +F^+$ (self-dual) and $\\star F^- = -F^-$ (anti-self-dual). Drag the point on the phase diagram to explore the ratio $\\|F^+\\|^2$ vs $\\|F^-\\|^2$.",
        "duration": 8000
      },
      {
        "title": "Bogomolny Bound",
        "body": "The Yang-Mills action satisfies $S_{YM} \\ge 8\\pi^2|Q|$ with equality only when $F^\\mp = 0$. The glowing instanton valley on the diagram marks this lower bound where all action is topological.",
        "duration": 10000
      },
      {
        "title": "Topological Charge Q",
        "body": "The instanton number $Q = (\\|F^+\\|^2 - \\|F^-\\|^2)/8\\pi^2$ is always an integer, classifying gauge configurations by their topology. Points on the horizontal axis have $Q = S/8\\pi^2$ exactly.",
        "duration": 10000
      },
      {
        "title": "Tunneling Trajectories",
        "body": "Instantons are solutions in Euclidean $\\mathbb{R}^4$, not Minkowski space. They represent quantum tunneling paths between vacuum sectors of differing Chern-Simons number, invisible to any order in perturbation theory.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "BPST Solution",
        "body": "The Belavin-Polyakov-Schwarz-Tyupkin instanton has gauge field $A_\\mu^a = \\frac{2}{g}\\eta_{a\\mu\\nu}\\frac{x_\\nu}{x^2+\\rho^2}$, where $\\eta$ are the 't Hooft symbols. Use the Size $\\rho$ slider to rescale it.",
        "duration": 10000
      },
      {
        "title": "Scale Modulus ρ",
        "body": "Because Yang-Mills theory is conformally invariant in 4D, instantons come in all sizes with identical action $S = 8\\pi^2/g^2$. The size $\\rho$ is a free parameter — a modulus of the solution space.",
        "duration": 8000
      },
      {
        "title": "Localized Field Strength",
        "body": "The field strength density $f(r) = 192\\rho^4/(r^2+\\rho^2)^4$ is sharply localized within radius $\\sim \\rho$ of the center. The total integral $\\int f\\,d^4x = 8\\pi^2$ is independent of $\\rho$.",
        "duration": 10000
      },
      {
        "title": "Moduli Space Dimension",
        "body": "For SU(2) with charge $k$, the instanton moduli space has dimension $8k - 3$: 4 center positions plus 1 size for $k=1$ (after modding out gauge rotations), matching $\\dim = 5$.",
        "duration": 8000
      },
      {
        "title": "Toggle Multi-Instanton",
        "body": "Click Multi-Instanton to overlay several BPST solutions. In the dilute instanton gas approximation, the QCD vacuum is a superposition of widely-separated instantons driving chiral symmetry breaking.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Atiyah-Singer Index",
        "body": "The index theorem states $\\mathrm{ind}(\\not\\!D_A) = Q$: the net number of Dirac zero modes in an instanton background equals the topological charge. Drag the Q slider to see zero modes appear and disappear.",
        "duration": 10000
      },
      {
        "title": "Chern-Simons 3-Form",
        "body": "The Chern-Simons form $\\mathrm{CS}(A) = \\mathrm{Tr}(A \\wedge dA + \\tfrac{2}{3}A \\wedge A \\wedge A)$ lives on the 3D boundary. Under large gauge transformations its value jumps by an integer winding number $w(g) \\in \\mathbb{Z}$.",
        "duration": 10000
      },
      {
        "title": "The θ-Vacuum",
        "body": "The true QCD vacuum is a superposition $|\\theta\\rangle = \\sum_n e^{in\\theta}|n\\rangle$ over sectors of definite Chern-Simons number. The instanton tunneling amplitude is $\\propto e^{-8\\pi^2/g^2}$ — purely non-perturbative.",
        "duration": 10000
      },
      {
        "title": "U(1) Axial Anomaly",
        "body": "Instantons induce 't Hooft vertices that violate axial baryon number $U(1)_A$. This explains why the $\\eta'$ meson is heavier than the other pseudoscalar mesons — a purely topological effect in QCD.",
        "duration": 8000
      }
    ]
  },
  "32_representation_theory.html": {
    "0": [
      {
        "title": "Root Systems",
        "body": "A root system is a finite set of vectors in $\\mathbb{R}^n$ closed under reflections in hyperplanes perpendicular to each root. Select $A_1$ through $G_2$ to see the geometry, and click Animate Weyl to watch the Weyl group act.",
        "duration": 8000
      },
      {
        "title": "Simple Roots & Dynkin Diagram",
        "body": "A basis of simple roots encodes the entire root system via the Cartan matrix $A_{ij} = 2\\langle \\alpha_i, \\alpha_j\\rangle / \\langle \\alpha_j, \\alpha_j\\rangle$. The Dynkin diagram in the side panel draws nodes for simple roots, with edge multiplicity from $A_{ij}$.",
        "duration": 10000
      },
      {
        "title": "ADE Classification",
        "body": "All simple Lie algebras fall into four infinite families $A_n, B_n, C_n, D_n$ plus five exceptionals $G_2, F_4, E_6, E_7, E_8$. This exhaustive list is one of the most beautiful results in all of mathematics.",
        "duration": 8000
      },
      {
        "title": "E₈ — The Largest Exceptional",
        "body": "$E_8$ has dimension 248 and underlies the $E_8 \\times E_8$ heterotic string theory. Select E₈ (schematic) to see how its 240 roots pack with perfect efficiency in 8 dimensions.",
        "duration": 8000
      },
      {
        "title": "Weyl Group Symmetry",
        "body": "The Weyl group acts by reflections across root hyperplanes, permuting the roots among themselves. For $A_2$ (i.e., SU(3)) the Weyl group is $S_3$, the permutation group on three quarks.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "SU(2) Weight Diagrams",
        "body": "For spin $j$, the weight diagram has $2j+1$ equally-spaced points from $-j$ to $+j$. Select half-integer $j = \\frac{1}{2}$ for the fundamental spinor representation or $j=1$ for the adjoint of SU(2).",
        "duration": 8000
      },
      {
        "title": "SU(3) Weight Lattice",
        "body": "SU(3) representations live on a hexagonal lattice arising from the $A_2$ root system. The fundamental $\\mathbf{3}$ is a triangle; the adjoint $\\mathbf{8}$ is a hexagon with two central states.",
        "duration": 8000
      },
      {
        "title": "Dimension Formula",
        "body": "For SU(3) the dimension of representation $(m,n)$ is $\\dim(m,n) = (1+m)(1+n)(1+\\frac{m+n}{2})$. Try the $\\mathbf{27}$ to see the large hexagonal array of 27 weight states.",
        "duration": 10000
      },
      {
        "title": "Weyl Symmetry of Weights",
        "body": "Click Animate Weyl to watch the $S_3$ Weyl symmetry act on the weight diagram, rotating the hexagonal pattern. Weights related by Weyl reflections always appear with the same multiplicity.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "The Eightfold Way",
        "body": "Gell-Mann's 1961 insight: the light hadrons form representations of SU(3) flavor symmetry. The meson octet and baryon octet/decuplet are exactly the $\\mathbf{8}$ and $\\mathbf{10}$ representations drawn on the canvas.",
        "duration": 8000
      },
      {
        "title": "Quark Content",
        "body": "Quarks $u$, $d$, $s$ transform in the fundamental $\\mathbf{3}$, antiquarks in $\\bar{\\mathbf{3}}$. Mesons ($q\\bar{q}$) decompose as $\\mathbf{3} \\otimes \\bar{\\mathbf{3}} = \\mathbf{8} \\oplus \\mathbf{1}$; baryons ($qqq$) give $\\mathbf{10} \\oplus \\mathbf{8} \\oplus \\mathbf{8} \\oplus \\mathbf{1}$.",
        "duration": 10000
      },
      {
        "title": "Symmetry Breaking",
        "body": "Click Animate Symmetry Breaking to watch the SU(3) symmetry break as the strange quark mass splits the ideal mass pattern. The $\\Omega^-$ baryon (bottom corner of the decuplet) was predicted and then discovered, confirming the model.",
        "duration": 8000
      },
      {
        "title": "Hypercharge & Isospin",
        "body": "The two axes of the weight diagram for hadrons are isospin $I_3$ (horizontal) and hypercharge $Y = B + S$ (vertical). Each particle sits at a lattice point determined by its quark content.",
        "duration": 8000
      }
    ]
  },
  "33_cohomology.html": {
    "0": [
      {
        "title": "Closed vs Exact Forms",
        "body": "A 1-form $\\omega$ is closed if $d\\omega = 0$ and exact if $\\omega = df$ globally. The form $\\omega = (x\\,dy - y\\,dx)/(x^2+y^2) = d\\theta$ is locally exact but not globally — the hole at the origin prevents a single-valued $\\theta$.",
        "duration": 10000
      },
      {
        "title": "Winding Number",
        "body": "Click Loop Around Hole to draw the cyan path. Its integral $\\oint_\\gamma \\omega = 2\\pi n$ gives the winding number $n$ — a topological invariant measuring how many times the path encircles the puncture.",
        "duration": 8000
      },
      {
        "title": "First Cohomology Group",
        "body": "$H^1(\\mathbb{R}^2 \\setminus \\{0\\}) = \\mathbb{R}$: the hole creates a non-trivial cohomology class $[\\omega]$. On the full plane without a hole this class vanishes because $\\theta = \\arctan(y/x)$ is well-defined everywhere.",
        "duration": 10000
      },
      {
        "title": "Aharonov-Bohm Connection",
        "body": "Click Animate Traversal to see the running integral build up. This is the mathematical origin of the Aharonov-Bohm effect: a solenoid creates a puncture in space where the vector potential cannot be globally gauged away.",
        "duration": 8000
      },
      {
        "title": "Arrow Field Interpretation",
        "body": "The colored arrows visualize the 1-form: hue encodes direction and length encodes magnitude. The swirling pattern around the origin reflects the rotational symmetry of $d\\theta$ — it points tangentially everywhere.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Betti Numbers",
        "body": "Betti numbers $b_k = \\dim H^k(M)$ count independent $k$-dimensional holes: $b_0$ = connected components, $b_1$ = independent loops, $b_2$ = enclosed cavities. Click + Handle to add genus and watch the numbers update.",
        "duration": 8000
      },
      {
        "title": "de Rham's Theorem",
        "body": "de Rham's theorem establishes $H^k_{\\mathrm{dR}}(M) \\cong H^k(M;\\mathbb{R})$: differential forms (analysis) compute the same topological invariants as singular cohomology (combinatorics).",
        "duration": 10000
      },
      {
        "title": "Euler Characteristic",
        "body": "The Euler characteristic $\\chi = b_0 - b_1 + b_2$ is a topological invariant. Gauss-Bonnet confirms this geometrically: $\\int_M K\\,dA = 2\\pi\\chi(M)$ regardless of how the surface is curved.",
        "duration": 10000
      },
      {
        "title": "Hodge's Harmonic Forms",
        "body": "The Hodge theorem guarantees that every de Rham cohomology class contains a unique harmonic representative satisfying $\\Delta\\omega = 0$. This bridges topology, analysis, and geometry in one statement.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "First Chern Class",
        "body": "For a complex line bundle with curvature 2-form $F$, the first Chern class is $c_1(E) = [F/2\\pi i] \\in H^2(M,\\mathbb{Z})$. Move the Monopole charge slider to see the integer-valued flux change.",
        "duration": 10000
      },
      {
        "title": "Dirac Monopole",
        "body": "The Dirac quantization condition $n = \\int_{S^2} F/2\\pi \\in \\mathbb{Z}$ is exactly $c_1 \\in \\mathbb{Z}$. Click Animate Transport to watch parallel transport around the sphere accumulate a Berry phase equal to $2\\pi n$.",
        "duration": 10000
      },
      {
        "title": "Chern-Weil Theory",
        "body": "Invariant polynomials of the curvature $F$ always descend to integral cohomology classes: $c_2(E) = [(\\mathrm{Tr}\\,F)^2 - \\mathrm{Tr}\\,F^2]/8\\pi^2$ recovers the Yang-Mills instanton number.",
        "duration": 10000
      },
      {
        "title": "Atiyah-Singer via Chern",
        "body": "The full index theorem reads $\\mathrm{ind}(D) = \\int \\mathrm{ch}(E) \\cdot \\hat{A}(TM)$, expressing an analytic quantity (dimension of kernel minus cokernel) purely in terms of Chern characters and Pontryagin classes.",
        "duration": 8000
      },
      {
        "title": "String Theory Anomaly",
        "body": "Anomaly cancellation in 10D superstring theory requires $c_2(E) = c_2(TM)$, the Green-Schwarz condition. This algebraic identity between characteristic classes constrains the entire gauge group to be $E_8 \\times E_8$ or $\\mathrm{SO}(32)$.",
        "duration": 8000
      }
    ]
  },
  "34_riemann_zeta.html": {
    "0": [
      {
        "title": "Domain Coloring ζ(s)",
        "body": "Hue encodes $\\arg\\,\\zeta(s)$ and brightness encodes $\\log|\\zeta(s)|$. Points where all colors converge are zeros; the white dashed vertical line is the critical line $\\mathrm{Re}(s) = \\frac{1}{2}$.",
        "duration": 8000
      },
      {
        "title": "The Pole at s = 1",
        "body": "The bright blowup near $s=1$ is the simple pole of $\\zeta(s)$. This single pole encodes the divergence of the harmonic series $\\sum 1/n$ and drives the Prime Number Theorem.",
        "duration": 8000
      },
      {
        "title": "Trivial vs Non-Trivial Zeros",
        "body": "Trivial zeros at $s = -2, -4, -6, \\ldots$ appear as evenly-spaced dots on the negative real axis. The non-trivial zeros cluster on $\\mathrm{Re}(s) = \\frac{1}{2}$, starting at $t_1 \\approx 14.135$.",
        "duration": 8000
      },
      {
        "title": "Riemann Hypothesis",
        "body": "The Riemann Hypothesis asserts that ALL non-trivial zeros lie on $\\mathrm{Re}(s) = \\frac{1}{2}$. It remains unproven since 1859 and carries a \\$1 million Millennium Prize — use Zoom + to inspect the critical strip.",
        "duration": 8000
      },
      {
        "title": "Analytic Continuation",
        "body": "The Dirichlet series $\\zeta(s) = \\sum n^{-s}$ converges only for $\\mathrm{Re}(s) > 1$, but the domain-colored canvas shows the unique analytic continuation to all of $\\mathbb{C}$ via the functional equation $\\zeta(s) = 2^s\\pi^{s-1}\\sin(\\pi s/2)\\,\\Gamma(1-s)\\,\\zeta(1-s)$.",
        "duration": 10000
      }
    ],
    "1": [
      {
        "title": "Hardy's Z-Function",
        "body": "Hardy's $Z(t) = e^{i\\theta(t)}\\zeta(\\frac{1}{2}+it)$ is real-valued for real $t$, computed here via the Riemann-Siegel formula. Every sign change of $Z(t)$ marks a zero of $\\zeta$ on the critical line.",
        "duration": 10000
      },
      {
        "title": "Reading Sign Changes",
        "body": "Blue regions are where $Z(t) > 0$, orange where $Z(t) < 0$. Each crossing of zero is a zero of $\\zeta(\\frac{1}{2}+it)$. Use the t min / t max sliders to scroll through higher zeros.",
        "duration": 8000
      },
      {
        "title": "Gram Points",
        "body": "Gram points $g_n$ satisfy $\\theta(g_n) = n\\pi$; between consecutive Gram points one typically finds exactly one zero. Rare 'Gram block' violations where the pattern fails keep the zero distribution deeply mysterious.",
        "duration": 8000
      },
      {
        "title": "Zeros Verified",
        "body": "Over $10^{13}$ non-trivial zeros have been computed numerically — all lying on $\\mathrm{Re}(s) = \\frac{1}{2}$, consistent with the Riemann Hypothesis. The side panel lists the first several exact values $t_n$.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Euler Product",
        "body": "The identity $\\zeta(s) = \\prod_p (1 - p^{-s})^{-1}$ over all primes $p$ is the analytic bridge between $\\zeta$ and prime numbers. The top canvas animates the partial product spiraling in the complex plane toward $\\zeta(s)$.",
        "duration": 10000
      },
      {
        "title": "Special Values",
        "body": "At $s=2$ the product converges to $\\pi^2/6 \\approx 1.6449$ (Basel problem), and at $s=\\frac{1}{2}+14.13i$ the partial products spiral to zero. Click the preset buttons to watch the Euler spiral collapse.",
        "duration": 8000
      },
      {
        "title": "Prime Number Theorem",
        "body": "The bottom canvas compares the prime-counting function $\\pi(x)$ with the logarithmic integral $\\mathrm{Li}(x) \\sim x/\\ln x$. The Riemann Hypothesis implies the error is $O(x^{1/2+\\varepsilon})$ — the tightest possible bound.",
        "duration": 10000
      },
      {
        "title": "Zeros Drive Prime Oscillations",
        "body": "Increase the Zeros slider to add explicit zero contributions $-x^{\\rho}/|\\rho|$ to the approximation. Each non-trivial zero $\\rho$ contributes an oscillation to $\\pi(x) - \\mathrm{Li}(x)$, revealing the deep harmony between primes and zeros.",
        "duration": 10000
      }
    ]
  },
  "35_black_holes.html": {
    "0": [
      {
        "title": "Penrose-Carter Diagrams",
        "body": "A conformal compactification maps all of spacetime — including infinities — into a finite diamond, preserving causal structure. Null geodesics always travel at exactly 45° on every diagram.",
        "duration": 8000
      },
      {
        "title": "Causal Boundaries",
        "body": "The symbols $i^+$, $i^-$, $i^0$, $\\mathscr{J}^+$, $\\mathscr{J}^-$ label the five causal infinities. Click the canvas to shoot a null ray and watch it respect the 45° constraint across all spacetime regions.",
        "duration": 8000
      },
      {
        "title": "Schwarzschild Structure",
        "body": "Select Schwarzschild to see the maximal Kruskal extension. Four regions appear: exterior I, black hole II, white hole III, and a second exterior IV, connected by the Einstein-Rosen bridge (wormhole).",
        "duration": 8000
      },
      {
        "title": "Kerr & de Sitter",
        "body": "Select Kerr or de Sitter to compare their causal diagrams. Kerr's diagram has an inner Cauchy horizon (dashed) — a region of extreme gravitational blue-shifting that may be classically unstable.",
        "duration": 8000
      },
      {
        "title": "Event Horizon Teleology",
        "body": "The event horizon is defined as the boundary of the causal past of $\\mathscr{J}^+$ — a global, teleological concept requiring knowledge of the entire future history of spacetime, not just local conditions.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Gravitational Collapse",
        "body": "Set the initial mass with the M₀ slider and click Collapse to watch the stellar surface fall inward. The Penrose diagram shows the moment the event horizon forms, growing outward to meet the infalling matter.",
        "duration": 8000
      },
      {
        "title": "Hawking Temperature",
        "body": "Quantum field theory near the horizon predicts thermal radiation at $T_H = \\hbar c^3 / (8\\pi G M k_B)$. Click Evaporate after collapse to watch the black hole lose mass as the temperature rises.",
        "duration": 10000
      },
      {
        "title": "Evaporation Lifetime",
        "body": "The evaporation timescale $\\tau \\sim M^3$ means stellar-mass black holes last $\\sim 10^{74}$ years — far longer than the age of the universe. Only primordial black holes light enough could be evaporating today.",
        "duration": 8000
      },
      {
        "title": "Information Paradox",
        "body": "Hawking radiation is thermal — apparently carrying no information about the infalling matter. This conflicts with quantum unitarity. Modern holographic arguments suggest information is scrambled and released near the Page time $t_P \\sim M^3/2$.",
        "duration": 8000
      },
      {
        "title": "Bekenstein-Hawking Entropy",
        "body": "Black hole entropy $S_{BH} = k_B A / (4\\ell_P^2)$ is proportional to horizon area, not volume. This holographic scaling — one bit per Planck area — is a foundational clue about quantum gravity.",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "Kerr Geometry",
        "body": "A rotating black hole is characterized by mass $M$ and spin $a = J/M \\le M$. Use the Mass M and Spin a/M sliders to sculpt the horizon radii $r_\\pm = M \\pm \\sqrt{M^2 - a^2}$.",
        "duration": 8000
      },
      {
        "title": "The Ergosphere",
        "body": "The ergosphere boundary $r_{\\mathrm{erg}} = M + \\sqrt{M^2 - a^2\\cos^2\\theta}$ lies outside the horizon. Inside it, no observer can remain stationary — frame dragging exceeds the speed of light relative to infinity.",
        "duration": 10000
      },
      {
        "title": "Penrose Process",
        "body": "Click inside the ergosphere to drop a particle that splits: one fragment acquires negative energy and falls in, the other escapes with more energy than the original. Up to $\\approx 29\\%$ of the black hole's total mass can be extracted this way.",
        "duration": 8000
      },
      {
        "title": "Four Laws of Thermodynamics",
        "body": "The side panel lists the four laws of black hole mechanics mirroring ordinary thermodynamics: the zeroth (uniform surface gravity $\\kappa$), first ($dM = \\frac{\\kappa}{8\\pi}dA + \\Omega\\,dJ$), second ($dA \\ge 0$), and third ($\\kappa \\to 0$ is unreachable).",
        "duration": 10000
      },
      {
        "title": "Black Hole Mergers",
        "body": "Click Merge BHs to combine two rotating black holes. The area theorem requires the final horizon area to exceed the sum of the initial areas: $A_f \\ge A_1 + A_2$, a gravitational analogue of the second law of thermodynamics.",
        "duration": 8000
      }
    ]
  },
  "36_riemann_surfaces.html": {
    "0": [
      {
        "title": "Multi-Sheeted Surfaces",
        "body": "A Riemann surface resolves multi-valuedness by stacking copies of $\\mathbb{C}$, one per branch. Select $\\sqrt{z}$ (2 sheets) or $\\log z$ (infinitely many) and drag the canvas to explore which sheet you are on.",
        "duration": 8000
      },
      {
        "title": "Branch Points & Cuts",
        "body": "The thick dashed line on the negative real axis is the branch cut where adjacent sheets are glued. Crossing it advances you from sheet $k$ to sheet $k+1$. Click the rotation buttons to orbit the branch point at $z=0$.",
        "duration": 8000
      },
      {
        "title": "Monodromy",
        "body": "Looping once around $z=0$ permutes sheets cyclically: the monodromy element is $\\sigma = (0\\;1\\;\\cdots\\;n-1)$ for $z^{1/n}$. For $\\log z$ the monodromy group is $\\mathbb{Z}$ — infinitely many sheets, no return.",
        "duration": 10000
      },
      {
        "title": "Branch Formula",
        "body": "Each sheet of $z^{1/n}$ is given by $r^{1/n}e^{i(\\theta + 2\\pi k)/n}$ for $k = 0, \\ldots, n-1$. The Sheet display updates as you navigate — watch the Winding diagram on the right to track your ascent.",
        "duration": 8000
      },
      {
        "title": "Log z: Infinite Staircase",
        "body": "Select log z to see a four-sheet segment of an infinite helical staircase. Every full orbit of the origin climbs to a new sheet: $\\log z = \\ln r + i(\\theta + 2\\pi k)$. There is no sheet to return to — the Riemann surface is non-compact.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Analytic Continuation",
        "body": "An analytic function on a disk $D$ extends to any overlapping disk by matching values on their intersection. Click Continue $\\sqrt{z}$ above / below to trace two different paths around the branch point to $z = -1$.",
        "duration": 8000
      },
      {
        "title": "Path Dependence",
        "body": "Continuing $\\sqrt{z}$ above the real axis to $z=-1$ gives $+i$; continuing below gives $-i$. Two paths to the same endpoint yield different values — a concrete failure of the Monodromy Theorem due to the puncture at $z=0$.",
        "duration": 8000
      },
      {
        "title": "Monodromy Theorem",
        "body": "On a simply-connected domain (no holes), every analytic continuation returns to its starting value. The failure here is exactly because $\\pi_1(\\mathbb{C}\\setminus\\{0\\}) \\cong \\mathbb{Z}$ — the fundamental group is non-trivial.",
        "duration": 10000
      },
      {
        "title": "Identity Theorem",
        "body": "If two analytic functions agree on any set with an accumulation point they agree everywhere on the connected domain. This makes analytic continuation unique: there is only one way to extend a function across any gap.",
        "duration": 8000
      },
      {
        "title": "Riemann's Insight",
        "body": "A multi-valued function IS single-valued on its Riemann surface — the surface is the natural domain. Click Log around origin to see the path wind upward through sheets, its value changing uniquely at each level.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Topological Classification",
        "body": "Every compact orientable surface is classified by its genus $g$ (number of handles). Click + Add Handle to increase $g$ and watch the Euler characteristic $\\chi = 2 - 2g$ decrease by 2 each time.",
        "duration": 8000
      },
      {
        "title": "Surfaces as Function Domains",
        "body": "$g=0$: the Riemann sphere $\\mathbb{CP}^1$ is the natural domain for all rational functions. $g=1$: a torus arises from $w^2 = z(z-1)(z-2)$ — three branch points create one handle in the compactification.",
        "duration": 8000
      },
      {
        "title": "Genus-Degree Formula",
        "body": "For a hyperelliptic curve $w^2 = P(z)$ with $\\deg P = 2g+1$ or $2g+2$, the genus is exactly $g$. Click Genus-2 to see the five-branch-point surface $w^2 = z(z-1)(z-2)(z-3)(z-4)$.",
        "duration": 10000
      },
      {
        "title": "Riemann-Hurwitz Formula",
        "body": "For a holomorphic map of degree $n$ between surfaces: $\\chi(S) = n\\,\\chi(\\mathbb{CP}^1) - \\sum_p(e_p - 1)$, where $e_p$ is the ramification order. This tracks how branch points contribute handles.",
        "duration": 10000
      },
      {
        "title": "Moduli Space",
        "body": "The space of all complex structures on a genus-$g$ surface is the moduli space $\\mathcal{M}_g$ with $\\dim_{\\mathbb{C}} \\mathcal{M}_g = 3g-3$ for $g \\ge 2$. Elliptic curves ($g=1$) are parameterized by $\\tau \\in \\mathbb{H}/\\mathrm{SL}_2(\\mathbb{Z})$.",
        "duration": 10000
      }
    ]
  },
  "37_maxwell.html": {
    "0": [
      {
        "title": "Maxwell's Four Equations",
        "body": "The side panel shows all four equations: $\\nabla\\cdot\\mathbf{E} = \\rho/\\varepsilon_0$, $\\nabla\\cdot\\mathbf{B} = 0$, $\\nabla\\times\\mathbf{E} = -\\partial\\mathbf{B}/\\partial t$, $\\nabla\\times\\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\varepsilon_0\\partial\\mathbf{E}/\\partial t$. Left-click to place a positive charge, right-click for negative.",
        "duration": 10000
      },
      {
        "title": "Field Lines & Superposition",
        "body": "Click Dipole or Quadrupole to place preset charge configurations. The electric field lines are drawn by integrating $d\\mathbf{x}/ds = \\mathbf{E}(\\mathbf{x})/|\\mathbf{E}|$, illustrating the superposition principle.",
        "duration": 8000
      },
      {
        "title": "Gauss's Law",
        "body": "Enable the Gaussian Surface and move it over charges. The flux readout shows $\\oint_S \\mathbf{E}\\cdot d\\mathbf{A} = Q_{\\mathrm{enc}}/\\varepsilon_0$ — only enclosed charge contributes, regardless of the surface shape.",
        "duration": 8000
      },
      {
        "title": "4-Potential Formulation",
        "body": "Combining E and B into the antisymmetric field tensor $F_{\\mu\\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu$ reduces all four Maxwell equations to $\\partial^\\mu F_{\\mu\\nu} = \\mu_0 J_\\nu$ plus the Bianchi identity $\\partial_{[\\lambda}F_{\\mu\\nu]} = 0$.",
        "duration": 10000
      },
      {
        "title": "Magnetic Field Mode",
        "body": "Switch to Show B field and click to place current-carrying wires (current out of page). The concentric circular field lines show Ampère's law $\\oint \\mathbf{B}\\cdot d\\mathbf{l} = \\mu_0 I_{\\mathrm{enc}}$ in action.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Electromagnetic Wave",
        "body": "Maxwell's displacement current $\\mu_0\\varepsilon_0\\partial\\mathbf{E}/\\partial t$ completes the curl equations and implies a wave equation $\\nabla^2\\mathbf{E} = \\mu_0\\varepsilon_0\\,\\partial^2\\mathbf{E}/\\partial t^2$. The red $\\mathbf{E}$ and cyan $\\mathbf{B}$ oscillate in phase and perpendicular to each other.",
        "duration": 10000
      },
      {
        "title": "Speed of Light",
        "body": "The wave speed $c = 1/\\sqrt{\\mu_0\\varepsilon_0} \\approx 3\\times 10^8$ m/s follows directly from the electromagnetic constants — Maxwell's prediction that light is an electromagnetic wave. Adjust the Frequency slider to change wavelength.",
        "duration": 8000
      },
      {
        "title": "Poynting Vector & Energy",
        "body": "The energy flux $\\mathbf{S} = \\mathbf{E}\\times\\mathbf{B}/\\mu_0$ (Poynting vector) flows along $\\mathbf{k}$. Energy density $u = \\varepsilon_0 E^2/2 + B^2/2\\mu_0$ is shared equally between electric and magnetic fields in a plane wave.",
        "duration": 8000
      },
      {
        "title": "Polarization States",
        "body": "Use the Polarization slider to rotate the plane of $\\mathbf{E}$. Enable Circular Polarization to see the field vector trace a helix — a superposition of two linear modes with a $\\pi/2$ phase offset.",
        "duration": 8000
      },
      {
        "title": "Electromagnetic Spectrum",
        "body": "The spectrum bar at the bottom locates the current frequency: radio waves at one extreme, gamma rays at the other. Visible light occupies a tiny slice of this $\\sim 20$-decade span, all described by the same four Maxwell equations.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Gauge Invariance",
        "body": "The transformation $A_\\mu \\to A_\\mu + \\partial_\\mu\\chi$ leaves $F_{\\mu\\nu}$ unchanged for any smooth function $\\chi(x)$. The canvas shows a charged particle — its trajectory is gauge-independent even as the potential arrows change.",
        "duration": 8000
      },
      {
        "title": "Cyclotron Motion",
        "body": "With E field = 0, the particle traces a circle of radius $r = mv/qB$ at cyclotron frequency $\\omega_c = qB/m$. Increase the B field slider to tighten the orbit; this is the operating principle of every particle accelerator.",
        "duration": 8000
      },
      {
        "title": "E×B Drift",
        "body": "With both fields nonzero the guiding center drifts perpendicular to both: $\\mathbf{v}_d = (\\mathbf{E}\\times\\mathbf{B})/B^2$. Toggle between Coulomb and Lorenz gauge — the physical drift is identical, demonstrating gauge invariance.",
        "duration": 10000
      },
      {
        "title": "Aharonov-Bohm Effect",
        "body": "Outside a solenoid $\\mathbf{B} = 0$ yet $\\mathbf{A} \\ne 0$. Electron paths acquire a phase $\\Delta\\varphi = q\\Phi_B/\\hbar$ producing observable interference despite zero local field — proof that $A_\\mu$ is physically real, not merely a mathematical convenience.",
        "duration": 10000
      },
      {
        "title": "U(1) Symmetry & Charge",
        "body": "The gauge group of electromagnetism is $U(1)$: the local phase symmetry $\\psi \\to e^{i\\alpha(x)}\\psi$. By Noether's theorem this symmetry implies conservation of electric charge — every photon mediates this gauge interaction.",
        "duration": 8000
      }
    ]
  },
  "38_standard_model.html": {
    "0": [
      {
        "title": "The SM Gauge Group",
        "body": "The Standard Model is built on the symmetry group $SU(3)_C \\times SU(2)_L \\times U(1)_Y$. Use the filter buttons to isolate quarks, leptons, or bosons and see how each sector fills out.",
        "duration": 8000
      },
      {
        "title": "Quarks and Color",
        "body": "Quarks carry color charge (R, G, B) and are never observed free — only color-neutral hadrons survive. Hover a quark particle to inspect its generation, charge, and mass.",
        "duration": 8000
      },
      {
        "title": "Three Generations",
        "body": "Each row of the table is a heavier copy of the first: $(u,d,e,\\nu_e)$, $(c,s,\\mu,\\nu_\\mu)$, $(t,b,\\tau,\\nu_\\tau)$. Why nature chose exactly three remains one of the deepest mysteries.",
        "duration": 8000
      },
      {
        "title": "Left-Right Asymmetry",
        "body": "Left-handed fermions form $SU(2)_L$ doublets while right-handed ones are singlets: $Q_L = \\binom{u}{d}_L$. This built-in left-right asymmetry is why the weak force violates parity $P$.",
        "duration": 10000
      },
      {
        "title": "Animate Annihilation",
        "body": "Click 'Animate Annihilation' to watch an $e^+e^-$ pair annihilate into a photon. The process is mediated by the QED vertex — strength set by the fine-structure constant $\\alpha \\approx 1/137$.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Reading Feynman Diagrams",
        "body": "Each topology in the diagram library corresponds to a term in the S-matrix. External lines are incoming/outgoing particles; internal lines are virtual propagators $\\Delta_F(q) = i/(q^2 - m^2 + i\\epsilon)$.",
        "duration": 10000
      },
      {
        "title": "QED Lagrangian",
        "body": "The QED Lagrangian $\\mathcal{L} = \\bar\\psi(i\\not\\!\\partial - m)\\psi - \\tfrac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu} - e\\bar\\psi\\not\\!A\\psi$ gives the three-point vertex. Each $e$ vertex contributes a factor of $\\sqrt{\\alpha}$ to the amplitude.",
        "duration": 10000
      },
      {
        "title": "Crossing Symmetry",
        "body": "Flip an outgoing particle to an incoming antiparticle — the diagram amplitude is the same up to crossing. Use Prev/Next to see how $e^+e^- \\to \\gamma\\gamma$ relates to Compton scattering.",
        "duration": 8000
      },
      {
        "title": "Speed Slider",
        "body": "Drag the Speed slider to control animation rate. Watching the particle flow highlights time-ordering: left-to-right is not fundamental — only the topology and coupling structure matter.",
        "duration": 8000
      },
      {
        "title": "Gluon Self-Coupling",
        "body": "Unlike photons, gluons carry color and self-interact via 3- and 4-gluon vertices. This non-Abelian structure of $SU(3)_C$ is responsible for confinement and asymptotic freedom.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Mexican Hat Potential",
        "body": "The Higgs potential $V(\\phi) = -\\mu^2|\\phi|^2 + \\lambda|\\phi|^4$ has a circle of minima at $|\\phi| = v = \\sqrt{\\mu^2/2\\lambda}$. Drag the $\\mu^2/\\lambda$ slider to watch the flat top deepen into the famous hat shape.",
        "duration": 10000
      },
      {
        "title": "Roll Ball — SSB",
        "body": "Click 'Roll Ball' to see the field spontaneously choose a vacuum direction — breaking the original $U(1)$ symmetry. The radial oscillation is the Higgs boson; the circular mode is the Goldstone boson.",
        "duration": 8000
      },
      {
        "title": "Goldstone Theorem",
        "body": "Every broken continuous symmetry yields a massless Goldstone boson. $SU(2)_L \\times U(1)_Y \\to U(1)_{EM}$ breaks 3 generators, producing three Goldstone modes — exactly what is needed.",
        "duration": 10000
      },
      {
        "title": "Gauge Boson Masses",
        "body": "In a gauge theory the Goldstone bosons are 'eaten,' giving longitudinal polarizations to $W^\\pm$ and $Z$. Watch the mass bar chart as you slide vev $v$: $m_W = \\tfrac{1}{2}gv$ and $m_Z = \\tfrac{1}{2}\\sqrt{g^2 + g'^2}\\,v$.",
        "duration": 10000
      },
      {
        "title": "Yukawa and Grand Unification",
        "body": "Fermion masses arise from Yukawa couplings $m_f = y_f v/\\sqrt{2}$. At $\\sim 10^{15}$ GeV the three running couplings $\\alpha_1, \\alpha_2, \\alpha_3$ approximately converge — the hint of a Grand Unified Theory.",
        "duration": 8000
      }
    ]
  },
  "39_quantum_field_theory.html": {
    "0": [
      {
        "title": "Quantum Fields and Vacuum",
        "body": "A quantum field is an operator at every spacetime point. Click 'Vacuum Only' to see zero-point fluctuations: even with no particles, every mode $\\vec{k}$ has energy $\\tfrac{1}{2}\\omega_k$, giving a divergent vacuum energy density.",
        "duration": 10000
      },
      {
        "title": "Adding Particles",
        "body": "Switch to 'One Particle' to excite a single mode above the vacuum. The Klein–Gordon equation $(\\partial_\\mu\\partial^\\mu + m^2)\\phi = 0$ governs the propagation; drag the mass slider to see how the dispersion $E^2 = p^2 + m^2$ changes the wave.",
        "duration": 10000
      },
      {
        "title": "Casimir Effect",
        "body": "Two conducting plates restrict which vacuum modes can exist between them, creating a measurable force $F = -\\hbar c \\pi^2 A / 240d^4$. Drag the plate-separation slider to watch the Casimir force scale as $d^{-4}$.",
        "duration": 10000
      },
      {
        "title": "Two Particles Collide",
        "body": "Select 'Two Particles Collide' to watch wavepackets scatter. The field amplitude (green = positive, red = negative) shows how particles are excitations of the underlying field — not point objects.",
        "duration": 8000
      },
      {
        "title": "Vacuum Energy Divergence",
        "body": "The vacuum energy density $\\langle 0|T_{00}|0\\rangle = \\tfrac{1}{2}\\int \\frac{d^3k}{(2\\pi)^3}\\omega_k$ diverges as $\\Lambda^4$ — the cosmological constant problem. Normal-ordering subtracts this infinity by definition.",
        "duration": 10000
      }
    ],
    "1": [
      {
        "title": "Sum Over All Paths",
        "body": "Feynman's path integral $Z = \\int \\mathcal{D}\\phi\\, e^{iS[\\phi]/\\hbar}$ sums all field configurations weighted by phase $e^{iS/\\hbar}$. Only near the classical path $\\delta S = 0$ do phases align and interfere constructively.",
        "duration": 10000
      },
      {
        "title": "Stationary Phase",
        "body": "As $\\hbar \\to 0$, rapidly oscillating phases cancel everywhere except at the classical trajectory. This is why macroscopic objects follow Newton's laws — quantum paths exist, but they destructively interfere away from the classical one.",
        "duration": 8000
      },
      {
        "title": "Wick Rotation",
        "body": "Switch to 'Euclidean (imaginary time)' to replace $t \\to -i\\tau$. The oscillating weight $e^{iS/\\hbar}$ becomes the damping factor $e^{-S_E/\\hbar}$, making the integral well-defined and connecting QFT to statistical mechanics.",
        "duration": 10000
      },
      {
        "title": "ħ Slider — Quantum vs Classical",
        "body": "Drag the $\\hbar$ slider from large to small. At large $\\hbar$ many paths contribute; at small $\\hbar$ only the classical path survives. This is the WKB approximation: $\\psi \\sim e^{iS_{cl}/\\hbar}$.",
        "duration": 8000
      },
      {
        "title": "Instantons",
        "body": "In Euclidean time, saddle points of $S_E$ that connect different classical vacua are called instantons. They describe quantum tunneling between degenerate vacua — exponentially suppressed by $e^{-S_E/\\hbar}$.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "UV Divergences in Loops",
        "body": "The one-loop self-energy $\\Sigma(p) = \\int \\frac{d^4k}{(2\\pi)^4} \\frac{1}{(k^2-m^2)((k+p)^2-m^2)}$ diverges logarithmically. Drag the UV cutoff $\\Lambda$ slider to see how the loop integral grows.",
        "duration": 10000
      },
      {
        "title": "Renormalization Group",
        "body": "The $\\beta$-function $\\mu \\frac{d\\alpha}{d\\mu} = \\beta(\\alpha)$ describes how couplings run with energy. QED has $\\beta > 0$ (coupling grows), while QCD has $\\beta < 0$ — the origin of asymptotic freedom.",
        "duration": 10000
      },
      {
        "title": "Asymptotic Freedom",
        "body": "QCD: $\\beta_{QCD} = -\\frac{(11 - 2N_f/3)\\alpha_s^2}{2\\pi} < 0$. Drag the energy scale $\\mu$ slider to watch $\\alpha_s$ shrink at high energies — quarks interact weakly at short distances, explaining deep inelastic scattering.",
        "duration": 10000
      },
      {
        "title": "Landau Pole in QED",
        "body": "QED's coupling $\\alpha$ grows logarithmically and formally diverges at the Landau pole near $\\mu \\sim 10^{286}$ eV — far beyond any physical scale. The theory is internally consistent because this pole is unreachable.",
        "duration": 8000
      },
      {
        "title": "Renormalizability",
        "body": "A theory is renormalizable if all divergences can be absorbed into a finite number of counterterms matching the original Lagrangian. The SM is renormalizable; gravity (as a QFT) is not — each loop order introduces new counterterms.",
        "duration": 8000
      }
    ]
  },
  "40_chaos.html": {
    "0": [
      {
        "title": "Sensitive Dependence",
        "body": "Click 'Add Twin' to launch a second pendulum with angle differing by $0.001$ rad from the first. The Lyapunov exponent $\\lambda = \\lim_{t\\to\\infty} \\frac{1}{t}\\ln\\frac{|\\delta\\vec{x}(t)|}{|\\delta\\vec{x}(0)|}$ quantifies the exponential divergence rate.",
        "duration": 10000
      },
      {
        "title": "Initial Angle Sliders",
        "body": "Drag the $\\theta_1$ and $\\theta_2$ sliders to set the starting configuration. Small initial angles give quasi-periodic, near-integrable motion; large angles (above ~120°) rapidly become fully chaotic.",
        "duration": 8000
      },
      {
        "title": "Energy Conservation",
        "body": "The equations of motion follow from $\\frac{d}{dt}\\vec{q} = \\{H, \\vec{q}\\}$. Watch the Energy readout for drift — a sign of numerical error accumulation in the symplectic integrator.",
        "duration": 8000
      },
      {
        "title": "KAM Theorem",
        "body": "The Kolmogorov-Arnold-Moser theorem guarantees that most invariant tori survive small perturbations of an integrable system. The double pendulum is non-integrable; at high energy almost all orbits are chaotic.",
        "duration": 8000
      },
      {
        "title": "Clear Trail",
        "body": "Use 'Clear Trail' to reset the path history and observe a fresh orbit. Notice how nearby trajectories with positive $\\lambda$ quickly diverge to fill phase space — the hallmark of deterministic chaos.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Stroboscopic Phase Portrait",
        "body": "The Poincaré section records $(\\theta, \\dot{\\theta})$ once per drive period $T = 2\\pi/\\omega_d$. Integrable orbits trace closed curves (KAM tori); chaotic orbits scatter as a diffuse cloud.",
        "duration": 8000
      },
      {
        "title": "Amplitude A — Route to Chaos",
        "body": "Increase the drive amplitude $A$ slider. Rational KAM tori break first into Birkhoff island chains (Poincaré-Birkhoff theorem); surrounding thin chaotic layers widen as $A$ grows.",
        "duration": 8000
      },
      {
        "title": "Frequency Tuning",
        "body": "Adjust $\\omega$ to detune from resonance. Irrational frequency ratios (noble numbers) are the last tori to break, explaining why quasi-periodic orbits persist longest near golden-ratio frequency relationships.",
        "duration": 8000
      },
      {
        "title": "Adding Orbits",
        "body": "Click 'Add Orbit' multiple times to compare sections from different initial conditions on the same canvas. Nested island chains around stable fixed points contrast sharply with the chaotic sea between them.",
        "duration": 8000
      },
      {
        "title": "Arnold Diffusion",
        "body": "In systems with $\\geq 3$ degrees of freedom, chaotic regions connect across phase space even when KAM tori appear to block them in 2D sections — trajectories can wander globally over exponentially long times.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Lorenz Attractor",
        "body": "The Lorenz system $\\dot{x} = \\sigma(y-x)$, $\\dot{y} = x(\\rho-z)-y$, $\\dot{z} = xy-\\beta z$ contracts volume at rate $-(\\sigma+1+\\beta)$ yet its attractor has fractal dimension $\\approx 2.06$ — volume-contracting but not area-contracting.",
        "duration": 10000
      },
      {
        "title": "Drag to Rotate",
        "body": "Drag the 3D view to inspect the butterfly-shaped attractor from all angles. Notice how the trajectory spirals out on one lobe, crosses to the other, spirals again — never repeating, never self-intersecting.",
        "duration": 8000
      },
      {
        "title": "Logistic Bifurcation",
        "body": "Switch to 'Logistic Bifurcation' to see the period-doubling route to chaos. The Feigenbaum constant $\\delta \\approx 4.669$ is the universal ratio of successive bifurcation widths — the same for every unimodal map.",
        "duration": 10000
      },
      {
        "title": "Rössler and Hénon",
        "body": "Explore the Rössler attractor (one large and one small lobe) and the Hénon map (a 2D discrete-time attractor). Each has distinct fractal dimension and Lyapunov spectrum, yet all share the universal structure of strange attractors.",
        "duration": 8000
      },
      {
        "title": "Takens Embedding",
        "body": "Takens' theorem guarantees that a scalar time series $x(t)$ can reconstruct the full attractor geometry via delay embedding $\\vec{v}(t) = (x(t), x(t+\\tau), \\ldots)$ — the basis of modern nonlinear time-series analysis.",
        "duration": 8000
      }
    ]
  },
  "41_homotopy.html": {
    "0": [
      {
        "title": "Loops and Winding",
        "body": "Click the canvas to place holes (punctures), then draw or contract loops. A loop that encircles a hole cannot be shrunk to a point — its homotopy class $[\\gamma] \\neq e \\in \\pi_1$. Orange loops are non-trivial; blue loops are contractible.",
        "duration": 8000
      },
      {
        "title": "Fundamental Group $\\pi_1$",
        "body": "The fundamental group classifies loops up to continuous deformation: $\\pi_1(S^1) = \\mathbb{Z}$ (winding number), $\\pi_1(S^2) = 0$ (sphere is simply connected), $\\pi_1(T^2) = \\mathbb{Z}^2$ (torus has two independent loops).",
        "duration": 10000
      },
      {
        "title": "Van Kampen's Theorem",
        "body": "If $X = A \\cup B$ with $A \\cap B$ path-connected, then $\\pi_1(X) \\cong \\pi_1(A) *_{\\pi_1(A \\cap B)} \\pi_1(B)$. Use 'Loop Multiply' to compose two generators and see the group operation directly.",
        "duration": 10000
      },
      {
        "title": "Homotopy Equivalence",
        "body": "Two maps $f, g: X \\to Y$ are homotopic if a continuous family $H: X \\times [0,1] \\to Y$ connects them. Switch to the 'Torus' preset to see $\\pi_1 = \\mathbb{Z}^2$ — two commuting generators corresponding to the two torus circles.",
        "duration": 8000
      },
      {
        "title": "Deformation Retract",
        "body": "A subspace $A \\subset X$ is a deformation retract if $X$ can be continuously squeezed onto $A$ while fixing $A$ pointwise. Click 'Contract Loop' on a contractible loop to watch the deformation retract to a point.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Universal Cover of $S^1$",
        "body": "The covering map $p: \\mathbb{R} \\to S^1$, $p(t) = e^{2\\pi i t}$ unrolls the circle onto the real line. Each lift of a loop going once around $S^1$ moves exactly one unit on $\\mathbb{R}$ — making the fiber $\\mathbb{Z}$ and confirming $\\pi_1(S^1) \\cong \\mathbb{Z}$.",
        "duration": 10000
      },
      {
        "title": "n-Sheeted Covers",
        "body": "Use the $n$ slider to explore $n$-sheeted covers of $S^1$. An $n$-sheeted cover corresponds to the subgroup $n\\mathbb{Z} \\subset \\mathbb{Z} = \\pi_1(S^1)$ — the Galois correspondence between covers and subgroups of $\\pi_1$.",
        "duration": 10000
      },
      {
        "title": "Unique Path Lifting",
        "body": "Every path in the base $B$ lifts uniquely once you fix a starting point in the cover $\\tilde{X}$. Watch an animated path in $S^1$ lift to a straight walk on $\\mathbb{R}$, demonstrating the fundamental lifting property.",
        "duration": 8000
      },
      {
        "title": "Figure-8 Cover",
        "body": "Switch to 'Figure-8 Cover': the universal cover of the figure-8 is an infinite tree — the Cayley graph of the free group $F_2 = \\langle a, b \\rangle$. Each vertex has 4 edges labeled $a, b, a^{-1}, b^{-1}$.",
        "duration": 8000
      },
      {
        "title": "Deck Transformations",
        "body": "Deck transformations are self-homeomorphisms of $\\tilde{X}$ that commute with $p$. For the universal cover they form a group isomorphic to $\\pi_1(X)$ — the automorphism group of the covering acts simply transitively on each fiber.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Knot Invariants Panel",
        "body": "Select Trefoil, Figure-8, Hopf Link, or Borromean from the buttons. The panel instantly updates the crossing number, unknotting number, Alexander polynomial $\\Delta(t)$, and Jones polynomial $V(t)$.",
        "duration": 8000
      },
      {
        "title": "Knot Group",
        "body": "The knot group $\\pi_1(S^3 \\setminus K)$ is the fundamental group of the knot complement. For the trefoil it is the braid group $B_3$, distinguishing it from the unknot despite both being simple closed curves.",
        "duration": 8000
      },
      {
        "title": "Reidemeister Moves",
        "body": "Click 'Reidemeister I' to apply a local move. Two knot diagrams represent the same knot if and only if they are connected by a finite sequence of the three Reidemeister moves — the combinatorial foundation of knot theory.",
        "duration": 8000
      },
      {
        "title": "Jones Polynomial via Skein",
        "body": "The skein relation $t^{-1}V_+ - tV_- = (t^{1/2} - t^{-1/2})V_0$ computes the Jones polynomial recursively from crossing changes. Compare Trefoil vs Figure-8: both non-trivial but with distinct $V(t)$.",
        "duration": 10000
      },
      {
        "title": "Chern-Simons and Witten",
        "body": "The Jones polynomial arises from Chern-Simons gauge theory: $Z = \\int \\mathcal{D}A\\, e^{ik\\,\\text{CS}(A)}$ with gauge group $SU(2)$. This is a profound bridge between 3D topology and quantum field theory.",
        "duration": 10000
      }
    ]
  },
  "42_clifford_algebras.html": {
    "0": [
      {
        "title": "Algebra Hierarchy Graph",
        "body": "Click any node in the hierarchy to see its multiplication table. $\\text{Cl}(p,q)$ has $2^{p+q}$ basis elements with defining relation $e_i e_j + e_j e_i = 2\\eta_{ij}$, where $\\eta_{ij} = +1$ for $i \\le p$ and $-1$ for $i > p$.",
        "duration": 10000
      },
      {
        "title": "Grade Structure",
        "body": "Basis blades are grouped by grade: scalars (grade 0), vectors (grade 1), bivectors (grade 2), ..., pseudoscalar (grade $n$). In $\\text{Cl}(3,0)$ there are $1 + 3 + 3 + 1 = 8$ basis elements — the full geometric algebra of 3D space.",
        "duration": 8000
      },
      {
        "title": "Bott Periodicity",
        "body": "The periodicity theorem states $\\text{Cl}(p+8, q) \\cong \\text{Cl}(p,q) \\otimes \\text{Mat}(16, \\mathbb{R})$. This period-8 pattern underlies K-theory and the 10-fold classification of topological insulators and superconductors.",
        "duration": 10000
      },
      {
        "title": "Spin Groups",
        "body": "$\\text{Spin}(n) \\subset \\text{Cl}(n,0)$ is the double cover of $SO(n)$. Spinors are elements of the minimal left ideal of the algebra — they encode half-integer representations that cannot be realized by tensors.",
        "duration": 8000
      },
      {
        "title": "Complex and Quaternion Subalgebras",
        "body": "$\\text{Cl}(0,1) \\cong \\mathbb{C}$ and $\\text{Cl}(0,2) \\cong \\mathbb{H}$ (quaternions). Select these nodes to see how the familiar number systems embed naturally as low-dimensional Clifford algebras.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Geometric Product",
        "body": "The geometric product $ab = a \\cdot b + a \\wedge b$ unifies the dot product (scalar, symmetric) and the wedge product (bivector, antisymmetric) into a single invertible operation. Drag the vectors from the origin to explore.",
        "duration": 8000
      },
      {
        "title": "Rotor and Rotation",
        "body": "A rotor is $R = e^{e_{12}\\theta/2} = \\cos\\tfrac{\\theta}{2} + \\sin\\tfrac{\\theta}{2}\\, e_{12}$. Drag the 'Rotor angle $\\theta$' slider: the vector rotates via the sandwich product $v' = RvR^\\dagger$, with $e_{12}^2 = -1$ playing the role of $i$.",
        "duration": 10000
      },
      {
        "title": "Two Reflections = Rotation",
        "body": "Click 'Two Reflections = Rotation' to see that composing two mirror reflections gives a rotation by twice the angle between the mirrors. This is the fundamental geometric reason rotations form a group.",
        "duration": 8000
      },
      {
        "title": "Double Cover Spin(n) → SO(n)",
        "body": "Both $R$ and $-R$ produce the same rotation $v' = RvR^\\dagger$. A spinor must be rotated through $720°$ to return to its original state — not $360°$. This double cover is the geometric origin of spin-$\\tfrac{1}{2}$.",
        "duration": 10000
      },
      {
        "title": "Live Product Readout",
        "body": "Watch the live product $ab$ display as you drag the vectors. The scalar part is the familiar dot product; the bivector part encodes the oriented area of the parallelogram spanned by $a$ and $b$.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Spacetime Algebra Cl(1,3)",
        "body": "The spacetime algebra $\\text{Cl}(1,3)$ has 16 basis blades. Click 'Animate' to see them organized by grade: the grade-2 bivectors $\\gamma^{0i}$ and $\\gamma^{ij}$ encode the electric and magnetic parts of the electromagnetic field tensor.",
        "duration": 10000
      },
      {
        "title": "EM Field as One Bivector",
        "body": "The full electromagnetic field is $F = \\mathbf{E} + I\\mathbf{B}$ — a single geometric object (bivector) in $\\text{Cl}(1,3)$. Maxwell's four equations collapse to one: $\\nabla F = J$.",
        "duration": 8000
      },
      {
        "title": "Dirac Equation — GA Form",
        "body": "The Dirac equation becomes $\\nabla \\psi\\, I\\sigma_3 = m\\psi\\gamma^0$ in geometric algebra — one compact equation replacing four coupled complex PDEs. The spinor $\\psi$ is an element of the minimal left ideal of $\\text{Cl}(1,3)$.",
        "duration": 10000
      },
      {
        "title": "Spinor as Flag",
        "body": "Click 'Rotate Spinor 360°': the flag (half-plane) returns upside-down — a sign change. Click 'Rotate Spinor 720°': it restores. This flag picture makes the double-valuedness of spin-$\\tfrac{1}{2}$ geometrically transparent.",
        "duration": 8000
      },
      {
        "title": "Larmor Precession",
        "body": "Toggle 'Larmor Precession' to see a spinor precess around a magnetic field axis at the Larmor frequency $\\omega_L = eB/2m$. In the STA language this is just $\\psi \\to e^{I\\theta/2}\\psi$ with $\\theta$ growing linearly in time.",
        "duration": 8000
      }
    ]
  },
  "43_conformal_field_theory.html": {
    "0": [
      {
        "title": "Conformal = Angle-Preserving",
        "body": "A holomorphic map $w = f(z)$ with $f'(z) \\neq 0$ is conformal: it preserves angles at every point. Select different maps from the dropdown and drag slider $t$ to interpolate — watch the grid lines remain perpendicular under the mapping.",
        "duration": 8000
      },
      {
        "title": "Möbius Transformations",
        "body": "The Möbius map $w = (az+b)/(cz+d)$ with $ad - bc = 1$ sends circles and lines to circles and lines. The global conformal group of $\\hat{\\mathbb{C}}$ is $PSL(2,\\mathbb{C})$ — just 6 real parameters.",
        "duration": 8000
      },
      {
        "title": "Infinite 2D Symmetry",
        "body": "In $d = 2$, the conformal group is infinite-dimensional: every holomorphic function is locally conformal. The symmetry algebra is the Witt algebra $[\\ell_m, \\ell_n] = (m-n)\\ell_{m+n}$ with generators $\\ell_n = -z^{n+1}\\partial_z$.",
        "duration": 10000
      },
      {
        "title": "Joukowski Airfoil",
        "body": "Select the Joukowski map $w = z + 1/z$: a circle maps to a wing cross-section. Conformal equivalence preserves potential-flow solutions — the entire aerodynamic analysis transfers from the disk to the airfoil.",
        "duration": 8000
      },
      {
        "title": "Worldsheet and Strings",
        "body": "The map $w = \\ln z$ unrolls a cylinder to the complex plane. A closed-string worldsheet is conformally equivalent to $\\mathbb{C} \\setminus \\{0\\}$ — this is why conformal field theory is the natural language of string theory.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Witt Generator Flow",
        "body": "Use the $n$ slider to select the generator $\\ell_n = -z^{n+1}\\partial_z$. Watch the vector field: $\\ell_{-1}$ is uniform translation, $\\ell_0$ is dilation from the origin, $\\ell_1$ is special conformal, higher $|n|$ give increasingly twisted flows.",
        "duration": 8000
      },
      {
        "title": "Virasoro Central Charge",
        "body": "The quantum Virasoro algebra $[L_m, L_n] = (m-n)L_{m+n} + \\tfrac{c}{12}(m^3-m)\\delta_{m+n,0}$ gains an anomaly term. Drag the central charge $c$ slider — $c$ measures the number of degrees of freedom in the CFT.",
        "duration": 10000
      },
      {
        "title": "Kac Table of Primaries",
        "body": "Toggle the Kac table to see which primary field dimensions $h_{r,s}$ are allowed for a given $c$. Rational CFTs have finitely many primaries; the Ising model ($c = 1/2$) and free boson ($c = 1$) are landmark examples.",
        "duration": 8000
      },
      {
        "title": "OPE and Primary Fields",
        "body": "The operator product expansion $T(z)\\phi(w) \\sim \\frac{h\\,\\phi(w)}{(z-w)^2} + \\frac{\\partial\\phi(w)}{z-w}$ defines a primary field of weight $h$: it transforms as $\\phi \\to (\\partial w/\\partial z)^{-h}\\phi$ under conformal maps.",
        "duration": 10000
      },
      {
        "title": "Partition Function",
        "body": "The torus partition function $Z = \\text{Tr}\\, q^{L_0-c/24}\\bar{q}^{\\bar{L}_0-c/24}$ encodes the entire spectrum. Modular invariance ($q \\to e^{2\\pi i\\tau}$) severely constrains which CFTs are consistent — this bootstraps the theory.",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "AdS/CFT Correspondence",
        "body": "Maldacena's conjecture (1997): Type IIB superstrings on $\\text{AdS}_5 \\times S^5$ is exactly dual to $\\mathcal{N}=4$ super Yang-Mills in 4D. Drag the Temperature slider to form a black hole horizon in the bulk — dual to a thermal state on the boundary.",
        "duration": 10000
      },
      {
        "title": "Poincaré Disk Geodesics",
        "body": "The $\\text{AdS}_2$ bulk is visualized as the Poincaré disk with hyperbolic geodesics. Straight lines in the bulk correspond to conformal transformations on the boundary circle — the isometry group $SO(2,1)$ acts on both.",
        "duration": 8000
      },
      {
        "title": "Ryu-Takayanagi Formula",
        "body": "Drag the RT interval $\\theta$ slider. The entanglement entropy of a boundary interval $A$ equals the length of the minimal bulk geodesic: $S_A = \\text{Area}(\\gamma_A)/(4G_N\\hbar)$. Entanglement entropy is literally geometry.",
        "duration": 10000
      },
      {
        "title": "AdS/CFT Dictionary",
        "body": "Each bulk field maps to a boundary operator: a scalar of mass $m$ ↔ operator of dimension $\\Delta = \\tfrac{d}{2} + \\sqrt{\\tfrac{d^2}{4} + m^2R^2}$; the bulk graviton ↔ boundary stress tensor $T_{\\mu\\nu}$; a black hole ↔ thermal state.",
        "duration": 10000
      },
      {
        "title": "Holographic Entanglement",
        "body": "Toggle 'Bulk Wave' and 'RT Surface' together: as temperature rises and a horizon forms, the RT surface wraps around it. This encodes the Page curve of Hawking radiation and suggests spacetime geometry emerges from entanglement.",
        "duration": 8000
      }
    ]
  },
  "44_twistors.html": {
    "0": [
      {
        "title": "Twistors and Spacetime",
        "body": "A twistor is a pair $Z^\\alpha = (\\omega^A, \\pi_{A'})$ of two-component spinors in $\\mathbb{T} \\cong \\mathbb{C}^4$. Drag point P on the left canvas: each spacetime point maps to a $\\mathbb{CP}^1$ Riemann sphere (line) in projective twistor space $\\mathbb{PT} \\cong \\mathbb{CP}^3$.",
        "duration": 10000
      },
      {
        "title": "Incidence Relation",
        "body": "The incidence relation $\\omega^A = i\\, x^{AA'}\\pi_{A'}$ links a spacetime point $x$ to all twistors incident with it. For fixed $x$ this is a $\\mathbb{CP}^1$ line in $\\mathbb{PT}$; for fixed $Z^\\alpha$ it is a null ray in Minkowski space.",
        "duration": 10000
      },
      {
        "title": "Null Separation = Intersection",
        "body": "Two spacetime points are null-separated if and only if their corresponding $\\mathbb{CP}^1$ lines intersect in $\\mathbb{PT}$: $x \\text{ null-sep } y \\iff L_x \\cap L_y \\neq \\emptyset$. The causal structure of spacetime is encoded in the geometry of lines in $\\mathbb{CP}^3$.",
        "duration": 10000
      },
      {
        "title": "Toggle Null Rays",
        "body": "Click 'Show Null Rays' to visualize the family of null geodesics through P. Each single twistor point corresponds to one null ray — the entire light cone through a spacetime point becomes the $\\mathbb{CP}^1$ line in twistor space.",
        "duration": 8000
      },
      {
        "title": "Riemann Sphere at Infinity",
        "body": "Click 'Show Riemann Sphere' to see the celestial sphere — the space of null directions seen by an observer. Twistor space makes this sphere intrinsic: the spinor ratio $\\pi_{A'}/\\pi_{0'}$ is the stereographic coordinate on the celestial $S^2$.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Penrose Transform",
        "body": "A massless field of helicity $s$ on Minkowski space corresponds to a sheaf cohomology class $f \\in H^1(\\mathbb{PT}^+, \\mathcal{O}(2s-2))$, recovered by the contour integral $\\phi_{A_1 \\cdots A_{2s}}(x) = \\oint_{\\mathbb{CP}^1} \\pi_{A_1} \\cdots \\pi_{A_{2s}}\\, f(Z)\\, d\\pi$.",
        "duration": 10000
      },
      {
        "title": "Helicity Checkboxes",
        "body": "Toggle the helicity checkboxes: $s = 0$ is the scalar Higgs field, $s = \\pm\\tfrac{1}{2}$ the electron/Weyl neutrino, $s = \\pm 1$ the photon (Maxwell equations), $s = \\pm\\tfrac{3}{2}$ the gravitino, and $s = \\pm 2$ the graviton.",
        "duration": 8000
      },
      {
        "title": "Double Fibration",
        "body": "Click 'Show Double Fibration': the correspondence space $\\mathbb{F} = \\mathbb{M} \\times \\mathbb{CP}^1$ sits between Minkowski space and twistor space as $\\mathbb{M} \\xleftarrow{q} \\mathbb{F} \\xrightarrow{p} \\mathbb{PT}$. Pulling back cohomology from $\\mathbb{PT}$ and integrating over $\\mathbb{CP}^1$ fibers yields fields on $\\mathbb{M}$.",
        "duration": 10000
      },
      {
        "title": "Line Bundles O(k)",
        "body": "Each helicity uses a different line bundle: $s = +\\tfrac{1}{2}$ uses $\\mathcal{O}(-1)$, photons use $\\mathcal{O}(0)$, gravitons use $\\mathcal{O}(2)$. The shift by 2 per unit of helicity reflects the spin-weight of the spinor indices being contracted.",
        "duration": 10000
      },
      {
        "title": "Contour Integral on CP¹",
        "body": "The right canvas shows the cohomology class and contour integral geometry. For $s = 1$ (Maxwell): $F_{AB}(x) = \\oint \\pi_A \\pi_B\\, f(Z)\\, d\\pi$ recovers the free-field Maxwell spinor — twistors linearize the field equations.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Hopf Fibration S³ → S²",
        "body": "The Hopf map $h: S^3 \\to S^2$ sends $(z_1, z_2) \\mapsto (2\\text{Re}(z_1\\bar{z}_2), 2\\text{Im}(z_1\\bar{z}_2), |z_1|^2 - |z_2|^2)$. Each fiber $h^{-1}(p) \\cong S^1$ is a great circle in $S^3$, projecting to a Villarceau circle in $\\mathbb{R}^3$.",
        "duration": 10000
      },
      {
        "title": "Every Fiber is Linked",
        "body": "Click 'Highlight Linking' to mark two fibers: every pair of distinct Hopf fibers is linked exactly once — linking number 1. This topological fact is what makes the Hopf fibration the generator of $\\pi_3(S^2) \\cong \\mathbb{Z}$.",
        "duration": 8000
      },
      {
        "title": "Robinson Congruence",
        "body": "A single non-null twistor $Z^\\alpha$ determines a Robinson congruence: a twisted family of null rays whose cross-sections sweep out circles forming a torus — precisely the Hopf fibration pattern projected into Minkowski space.",
        "duration": 8000
      },
      {
        "title": "Spin-½ from Hopf",
        "body": "The Hopf fiber $S^1 \\subset S^3$ double-covers $SO(2)$. A $2\\pi$ rotation maps a spinor to its negative; a full $4\\pi$ restores it. Use the Fibers slider to add more circles and see the global structure of the principal $U(1)$-bundle.",
        "duration": 8000
      },
      {
        "title": "Quaternionic Hopf",
        "body": "There is a quaternionic cousin: $S^7 \\to S^4$ with fibers $S^3$, related to octonions and the Yang-Mills instanton moduli space. The three Hopf fibrations ($S^1 \\to S^3 \\to S^2$, $S^3 \\to S^7 \\to S^4$, $S^7 \\to S^{15} \\to S^8$) correspond to $\\mathbb{C}, \\mathbb{H}, \\mathbb{O}$.",
        "duration": 8000
      }
    ],
    "3": [
      {
        "title": "Momentum Twistors",
        "body": "Hodges introduced momentum twistors $Z_i = (\\lambda_i, \\mu_i)$ with $\\mu_i^{A'} = x_i^{AA'}\\lambda_{iA}$. Momentum conservation becomes automatic and the BCFW recursion is a simple geometric statement in $\\mathbb{CP}^3$.",
        "duration": 10000
      },
      {
        "title": "Amplituhedron Geometry",
        "body": "Arkani-Hamed and Trnka (2013) showed all tree-level and loop amplitudes of $\\mathcal{N}=4$ SYM are the volume of a geometric object $\\mathcal{A}_{n,k,L} \\subset \\text{Gr}(k,n)$ — the amplituhedron in the Grassmannian. No Feynman diagrams needed.",
        "duration": 10000
      },
      {
        "title": "Add Particles — BCFW",
        "body": "Click 'Add Particle' to grow the amplituhedron and watch it triangulate. Each BCFW term $A_n = \\sum A_L \\cdot P^{-2} \\cdot A_R$ corresponds to one triangle (simplex) in the triangulation of the amplituhedron.",
        "duration": 8000
      },
      {
        "title": "Canonical Form Ω",
        "body": "The amplitude is the integral of the canonical form $\\Omega = \\langle 1\\,2\\,3\\,4\\rangle^4 / (\\langle 1\\,2\\,3\\,4\\rangle \\cdots \\langle n\\,1\\,2\\,3\\rangle)$ where $\\langle i\\,j\\,k\\,l\\rangle = \\det(Z_i, Z_j, Z_k, Z_l)$. The form has logarithmic singularities on all boundaries.",
        "duration": 10000
      },
      {
        "title": "Emergence of Locality",
        "body": "Locality and unitarity are not inputs — they emerge from the amplituhedron's geometry. Toggle 'Animate Deformation' to see the shape change as particle kinematics vary. The volume encodes all physical scattering information.",
        "duration": 8000
      }
    ],
    "4": [
      {
        "title": "MHV Amplitudes",
        "body": "Maximally Helicity Violating (MHV) amplitudes have exactly two negative-helicity gluons. All others vanish by helicity conservation. Click any gluon label to flip its helicity and watch the amplitude type update — MHV, NMHV, or zero.",
        "duration": 10000
      },
      {
        "title": "Parke-Taylor Formula",
        "body": "The MHV amplitude collapses to a single line: $A_n(1^-2^-3^+\\cdots n^+) = \\langle 12\\rangle^4 / (\\langle 12\\rangle\\langle 23\\rangle\\cdots\\langle n1\\rangle)$. The angle bracket $\\langle ij\\rangle = \\epsilon_{AB}\\lambda_i^A\\lambda_j^B$ is a Lorentz-invariant spinor inner product — this replaced thousands of Feynman diagrams.",
        "duration": 12000
      },
      {
        "title": "Spinor-Helicity Formalism",
        "body": "Every massless momentum is rank-1: $p^{AA'} = \\lambda^A\\tilde\\lambda^{A'}$. Helicity $+1$ uses $\\tilde\\lambda$; helicity $-1$ uses $\\lambda$. The denominators $\\langle i\\,i{+}1\\rangle$ encode collinear poles — exactly the boundaries of the amplituhedron.",
        "duration": 10000
      }
    ],
    "5": [
      {
        "title": "BCFW Complex Momentum Shift",
        "body": "Britto, Cachazo, Feng and Witten (2005) shift two momenta by a complex parameter: $\\hat{p}_1(z) = p_1 + z\\eta$, $\\hat{p}_2(z) = p_2 - z\\eta$. The shifted amplitude $A_n(z)$ is rational in $z$ and vanishes as $|z|\\to\\infty$.",
        "duration": 10000
      },
      {
        "title": "Poles and Residues",
        "body": "Watch $z$ sweep the complex plane — the × markers are BCFW poles where an internal propagator goes on-shell: $\\hat{P}_I^2(z_i)=0$. When $z$ nears a pole, the corresponding diagram lights up. By Cauchy's theorem, $A_n(0) = -\\sum_i \\text{Res}_{z=z_i} A_n(z)$.",
        "duration": 12000
      },
      {
        "title": "On-Shell Factorization",
        "body": "At each pole the amplitude factorizes: $A_n = \\sum_{I,h} A_L(\\hat{1},\\ldots,\\hat{P}_I^{-h})\\,\\frac{i}{P_I^2}\\,A_R(\\hat{P}_I^h,\\ldots,\\hat{2})$. Each term is a pair of lower-point on-shell amplitudes stitched by a propagator — the right-hand BCFW diagrams show each factorization channel.",
        "duration": 12000
      }
    ]
  },
  "45_bell_theorem.html": {
    "0": [
      {
        "title": "EPR Singlet State",
        "body": "The singlet state $|\\Psi^-\\rangle = \\tfrac{1}{\\sqrt{2}}(|{\\uparrow\\downarrow}\\rangle - |{\\downarrow\\uparrow}\\rangle)$ has total spin zero. If Alice measures spin-up along any axis, Bob must measure spin-down along the same axis — instantaneously, at any distance.",
        "duration": 10000
      },
      {
        "title": "Adjust Measurement Axes",
        "body": "Drag 'Alice θ' and 'Bob θ' sliders to change measurement directions. The quantum correlation is $P(+,+|\\theta_A,\\theta_B) = \\tfrac{1}{2}\\sin^2\\tfrac{\\theta_A-\\theta_B}{2}$ — it depends only on the angle between axes, not on any shared clock or signal.",
        "duration": 10000
      },
      {
        "title": "Hidden Variables Intuition",
        "body": "Einstein argued correlations arise from hidden variables $\\lambda$ pre-set at the source — like a pair of gloves. If Alice finds a left glove, Bob must have the right one. No spooky action, just missing information. Bell proved this is wrong.",
        "duration": 8000
      },
      {
        "title": "Entanglement vs Product States",
        "body": "Click 'Same Basis' to see perfect anti-correlation; click 'Orthogonal' to see zero correlation. A product state $|\\psi_A\\rangle \\otimes |\\psi_B\\rangle$ cannot reproduce the $-\\cos(\\theta_A - \\theta_B)$ correlation curve — entanglement is essential.",
        "duration": 8000
      },
      {
        "title": "Speed Control",
        "body": "Use the Speed slider to slow down or speed up the particle-pair animation. Even at maximum speed the correlations are instantaneous — yet no information travels faster than light, because the individual outcomes are random.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "CHSH Inequality",
        "body": "Any local hidden variable theory must satisfy $|S| = |\\langle AB\\rangle - \\langle AB'\\rangle + \\langle A'B\\rangle + \\langle A'B'\\rangle| \\leq 2$. Quantum mechanics achieves the Tsirelson bound $S_{\\max} = 2\\sqrt{2} \\approx 2.828$, definitively exceeding this limit.",
        "duration": 10000
      },
      {
        "title": "Optimal Angles",
        "body": "Click 'Optimal QM' to set $a = 0°$, $a' = 45°$, $b = 22.5°$, $b' = 67.5°$. At these angles $S = 2\\sqrt{2}$ — the maximum quantum violation. The CHSH meter jumps into the red zone beyond the classical limit.",
        "duration": 8000
      },
      {
        "title": "Quantum Correlation Curve",
        "body": "The QM correlation $E(\\theta) = -\\cos\\theta$ is plotted as the smooth curve; the piecewise-linear LHV bound is the triangle wave. Quantum mechanics beats any local-realist model everywhere between $0°$ and $90°$.",
        "duration": 8000
      },
      {
        "title": "Tsirelson Bound",
        "body": "No quantum state can exceed $|S| = 2\\sqrt{2}$, even though no-signaling theories could in principle reach $|S| = 4$. The Tsirelson bound is a fundamental limit of quantum mechanics, lying strictly between the classical bound 2 and the algebraic maximum 4.",
        "duration": 10000
      },
      {
        "title": "Tune the Four Angles",
        "body": "Use all four sliders to explore the $S$ parameter space. Drag any angle away from the optimum and watch $S$ drop on the CHSH meter. The sharp peak at the optimal configuration makes this inequality maximally sensitive to quantum nonlocality.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Aspect 1982 Experiment",
        "body": "Click 'Run Experiment' to replay Aspect's landmark test: $S = 2.697 \\pm 0.015$, exceeding the classical bound of 2.000 by over 40 standard deviations. Aspect added fast electro-optic switching, closing the locality loophole.",
        "duration": 8000
      },
      {
        "title": "Coincidence Counting",
        "body": "Watch the Coincidences counter accumulate. In the real experiment, photon pairs from calcium cascade were counted in coincidence windows. The QM fit (toggle it on) matches the $-\\cos\\theta$ prediction perfectly across all angles.",
        "duration": 8000
      },
      {
        "title": "Closing the Loopholes",
        "body": "Toggle 'Classical Bound' to mark the $|S| = 2$ line. The detection loophole requires $\\eta > 82.8\\%$ efficiency; the locality loophole requires spacelike-separated setting choices. Hensen (2015) closed both simultaneously using nitrogen-vacancy centers 1.3 km apart.",
        "duration": 10000
      },
      {
        "title": "2022 Nobel Prize",
        "body": "Click the '2022 Nobel ★' button for the full citation. Aspect, Clauser, and Zeilinger were awarded the Nobel Prize in Physics for establishing that Bell inequalities are violated — proving nature is fundamentally nonlocal at the quantum level.",
        "duration": 8000
      },
      {
        "title": "Timeline of Bell Tests",
        "body": "Clauser (1972) was first but had loopholes; Aspect (1982) closed the locality loophole; Zeilinger (1997) extended to 400 m and later satellite distances; Hensen (2015) achieved the first fully loophole-free test. Each step tightened the case against local realism.",
        "duration": 8000
      }
    ],
    "3": [
      {
        "title": "GHZ State — Three Qubits",
        "body": "The Greenberger-Horne-Zeilinger state $|GHZ\\rangle = \\tfrac{1}{\\sqrt{2}}(|000\\rangle + |111\\rangle)$ is maximally entangled across three parties. Click 'Run GHZ Test' to see quantum and LHV predictions compared round by round.",
        "duration": 8000
      },
      {
        "title": "Deterministic Contradiction",
        "body": "QM predicts $X_A X_B X_C = +1$ and $X_A Y_B Y_C = X_B Y_A Y_C = Y_A Y_B X_C = -1$. Multiplying all four: the left side must be $+1$ (since each $X_i^2 = Y_i^2 = 1$), but the right side is $-1$. Thus LHV implies $+1 = -1$.",
        "duration": 10000
      },
      {
        "title": "No Statistics Needed",
        "body": "Unlike Bell's inequality (which requires statistics), the GHZ argument is a single-shot logical contradiction. Toggle 'Show LHV' to compare the LHV strategy prediction to quantum outcomes — on every single run, LHV fails.",
        "duration": 8000
      },
      {
        "title": "Run 100 Rounds",
        "body": "Click 'Run 100 Rounds' to accumulate statistics. Watch the score display: QM achieves 100% success on all four measurement settings simultaneously; any LHV box must fail on at least one setting in every round.",
        "duration": 8000
      },
      {
        "title": "Mermin's Impossible Boxes",
        "body": "Mermin rephrased GHZ as three boxes with buttons 1 and 2 and R/G lights: pressing all 1s must give an even number of R lights; one 1 and two 2s must give an odd number. No pre-programmed strategy works — yet quantum mechanics satisfies both rules every time.",
        "duration": 8000
      }
    ]
  },
  "46_gravitational_waves.html": {
    "0": [
      {
        "title": "Binary Inspiral Overview",
        "body": "Two black holes orbit each other, losing energy to gravitational waves and spiraling inward. The chirp mass $\\mathcal{M} = (m_1 m_2)^{3/5}/(m_1+m_2)^{1/5}$ is the single best-measured quantity from the waveform.",
        "duration": 8000
      },
      {
        "title": "Quadrupole Radiation",
        "body": "Only changing mass quadrupoles radiate; the power is $P = -\\frac{G}{5c^5}\\overset{...}{Q}_{ij}\\overset{...}{Q}^{ij}$. Adjust Mass₁ and Mass₂ sliders to see how different binary configurations affect the chirp mass readout.",
        "duration": 10000
      },
      {
        "title": "Peters Orbital Decay",
        "body": "The semi-major axis shrinks as $da/dt = -\\frac{64}{5}\\frac{G^3 m_1 m_2(m_1+m_2)}{c^5 a^3}$. Watch the orbital separation display decrease toward merger as the simulation runs.",
        "duration": 10000
      },
      {
        "title": "Inspiral to Ringdown",
        "body": "As the orbit decays, the gravitational wave frequency rises — the characteristic 'chirp.' The Phase label transitions from INSPIRAL through MERGER to RINGDOWN. Use the Time scrubber to replay any moment.",
        "duration": 8000
      },
      {
        "title": "GW150914 Parameters",
        "body": "The default $29\\,M_\\odot + 36\\,M_\\odot$ replicates GW150914, where $\\sim 3\\,M_\\odot c^2 \\approx 5\\times10^{47}$ J was radiated in gravitational waves — briefly outshining the entire observable universe.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Michelson Interferometer",
        "body": "LIGO splits a laser between two 4-km arms. A passing gravitational wave stretches one arm and compresses the other, inducing a phase shift $\\Delta\\phi = 4\\pi L h(t)/\\lambda$. Toggle 'GW On' to watch the arm-length oscillation.",
        "duration": 8000
      },
      {
        "title": "Fabry-Pérot Cavities",
        "body": "Each arm bounces light ~300 times, creating an effective arm length of ~1200 km and boosting sensitivity 300×. The circulating power reaches ~100 kW from just 200 W input via the Power Recycling mirror.",
        "duration": 8000
      },
      {
        "title": "Extraordinary Sensitivity",
        "body": "With strain $h \\sim 10^{-21}$, the arm length changes by $\\Delta L = 4\\times10^{-18}$ m — one-thousandth of a proton diameter. Slide the Strain $h$ control and watch the output toggle between dark and lit.",
        "duration": 10000
      },
      {
        "title": "Noise Sources",
        "body": "Below 10 Hz seismic noise dominates; thermal noise rules 10–100 Hz; above 100 Hz quantum shot noise sets the floor. LIGO is most sensitive at 100–300 Hz where $h \\sim 3\\times10^{-24}/\\sqrt{\\text{Hz}}$.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "The Chirp Waveform",
        "body": "GW150914 swept from ~35 Hz to ~150 Hz in just 0.2 seconds. Click 'Play Waveform' and hover to read the cursor time and frequency as the chirp evolves.",
        "duration": 8000
      },
      {
        "title": "Matched Filtering",
        "body": "Detection uses the inner product $S/N = \\langle s|h\\rangle/\\sqrt{\\langle h|h\\rangle}$ weighted by the noise PSD $S_n(f)$. Toggle 'Show Template' to overlay the theoretical waveform and 'Show SNR' to see the signal-to-noise peak.",
        "duration": 10000
      },
      {
        "title": "Noise & Detection",
        "body": "Enable 'Add Noise' to see the raw strain — the signal is buried until the matched filter reveals it. LIGO achieved a combined $\\text{SNR} \\approx 24$ and a false alarm rate of less than once per 203,000 years ($5.1\\sigma$).",
        "duration": 8000
      },
      {
        "title": "Ringdown Quasi-Normal Modes",
        "body": "After merger the remnant black hole radiates as $h(t) \\propto e^{-t/\\tau}\\cos(2\\pi f_\\text{QNM}\\,t)$. The mode frequencies are unique fingerprints of Kerr geometry, testing the 'no-hair' theorem.",
        "duration": 10000
      }
    ],
    "3": [
      {
        "title": "GW Event Catalog",
        "body": "The GWTC-3 catalog contains 90 confirmed events from O1–O3. Click any dot on the timeline to inspect masses, distance, and source type. Use the Filter selector to isolate BH-BH, NS-NS, or BH-NS events.",
        "duration": 8000
      },
      {
        "title": "GW170817 Multimessenger",
        "body": "The first neutron-star merger detected in both gravitational waves and light. A short gamma-ray burst arrived 1.7 s after the GW signal, followed by an optical kilonova in NGC 4993 and weeks-long X-ray/radio afterglow.",
        "duration": 8000
      },
      {
        "title": "Speed of Gravity Bound",
        "body": "The 1.7 s GW-GRB delay over ~40 Mpc constrains $|v_\\text{GW}-c|/c < 5\\times10^{-16}$ — ruling out many modified gravity theories in a single observation.",
        "duration": 10000
      },
      {
        "title": "Standard Sirens & $H_0$",
        "body": "Gravitational wave sources are self-calibrating 'standard sirens,' yielding $H_0 = 70^{+12}_{-8}\\,\\text{km s}^{-1}\\text{Mpc}^{-1}$ from GW170817 with no distance ladder. Enable 'Sky Localization' to see the error ellipse.",
        "duration": 8000
      },
      {
        "title": "Future Detectors",
        "body": "LISA (space-based, millihertz band), the Einstein Telescope, and Cosmic Explorer will push sensitivity orders of magnitude further — opening the entire cosmic gravitational-wave sky.",
        "duration": 8000
      }
    ]
  },
  "47_quantum_optics.html": {
    "0": [
      {
        "title": "Doppler Cooling Principle",
        "body": "Six counter-propagating lasers red-detuned by $\\delta < 0$ exert a friction force $F = -\\alpha v$ on moving atoms. A moving atom sees the laser Doppler-shifted into resonance and is decelerated by $\\hbar k/m$ per photon.",
        "duration": 8000
      },
      {
        "title": "Tuning Detuning",
        "body": "The damping coefficient $\\alpha = \\hbar k^2 \\frac{8|\\delta|/\\Gamma}{(1+4\\delta^2/\\Gamma^2)^2}$ peaks near $\\delta = -\\Gamma/2$. Adjust the Detuning $\\delta$ slider and watch how the atom cloud temperature changes.",
        "duration": 10000
      },
      {
        "title": "Doppler Limit",
        "body": "The minimum Doppler cooling temperature is $T_D = \\hbar\\Gamma/(2k_B)$. For Rb-87 with $\\Gamma/2\\pi \\approx 6$ MHz, $T_D \\approx 146\\,\\mu$K. Click 'Add Heat' then watch cooling restore order.",
        "duration": 8000
      },
      {
        "title": "MOT Confinement",
        "body": "A magneto-optical trap adds a quadrupole magnetic field giving force $F = -\\alpha v - \\kappa x$ — both cooling and spatial confinement. This workhorse device is the starting point of virtually all cold-atom experiments.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Bose-Einstein Condensation",
        "body": "Below the critical temperature $T_c$, bosons macroscopically occupy the ground state. The condensate fraction grows as $N_0/N = 1-(T/T_c)^3$. Drag the $T/T_c$ slider below 1 to watch the condensate peak appear.",
        "duration": 8000
      },
      {
        "title": "Critical Temperature",
        "body": "Condensation occurs when the thermal de Broglie wavelength $\\lambda_T \\sim n^{-1/3}$: $T_c = \\frac{2\\pi\\hbar^2}{mk_B}\\left(\\frac{N}{\\zeta(3/2)V}\\right)^{2/3}$ where $\\zeta(3/2)\\approx 2.612$.",
        "duration": 10000
      },
      {
        "title": "Gross-Pitaevskii Equation",
        "body": "The condensate order parameter $\\Psi(\\mathbf{r},t)$ obeys $i\\hbar\\partial_t\\Psi = \\left(-\\frac{\\hbar^2\\nabla^2}{2m}+V+g|\\Psi|^2\\right)\\Psi$. Superfluidity, vortices, and matter-wave interference all follow from this single equation.",
        "duration": 10000
      },
      {
        "title": "Interference Fringes",
        "body": "Click 'Two Condensates' and then 'Release Trap' to watch two BEC clouds expand and interfere — a direct demonstration that the condensate is a single macroscopic quantum object with a definite phase.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Gradient Force Trapping",
        "body": "A tightly focused laser attracts a dielectric bead toward the intensity maximum: $\\mathbf{F}_\\text{grad} = (\\alpha/2)\\nabla|\\mathbf{E}|^2$. Click and drag the bead on the canvas to feel the restoring force arrows.",
        "duration": 8000
      },
      {
        "title": "Trap Stiffness",
        "body": "Near the focus the potential is harmonic: $U(r) = -(\\alpha/2)|E_0|^2 e^{-2r^2/w_0^2}$ with stiffness $\\kappa \\approx 4\\alpha I_0/(w_0^2 c)$. Increase Laser Power or decrease Waist to stiffen the trap.",
        "duration": 10000
      },
      {
        "title": "Brownian Motion & Equipartition",
        "body": "Thermal fluctuations cause the bead to jitter; by equipartition $\\langle x^2\\rangle = k_BT/\\kappa$. This lets experimenters measure forces in the piconewton range — exactly the scale of molecular motors.",
        "duration": 8000
      },
      {
        "title": "Biology Mode",
        "body": "Toggle 'Biology Mode' to switch from a silica bead to a cell or DNA strand. Optical tweezers have measured kinesin step forces, DNA elasticity, and virus trapping — earning Arthur Ashkin the 2018 Nobel Prize.",
        "duration": 8000
      }
    ],
    "3": [
      {
        "title": "CPA: Stretch-Amplify-Compress",
        "body": "Chirped Pulse Amplification stretches a femtosecond pulse in time by factor $M$ (chirping: $\\omega(t)=\\omega_0+\\beta t$), safely amplifies it, then recompresses — yielding $M^2$ times more peak power.",
        "duration": 8000
      },
      {
        "title": "Time-Bandwidth Product",
        "body": "A transform-limited pulse saturates $\\Delta t\\cdot\\Delta\\nu \\geq 1/(4\\pi)$. Use the Stretch slider to see how a larger stretch factor separates spectral colors and reduces peak intensity before amplification.",
        "duration": 10000
      },
      {
        "title": "Peak Power Scale",
        "body": "Ti:sapphire CPA systems achieve peak powers up to $10^{15}$ W. Toggle 'Freq Color' to see how each color component of the chirped pulse is separated in time before recompression.",
        "duration": 8000
      },
      {
        "title": "CPA Applications",
        "body": "From LASIK eye surgery to NIF nuclear fusion ignition, CPA-driven pulses open ultrafast science. The ELI-NP facility reaches intensities of $10^{23}$ W/cm² — probing physics at the Schwinger limit.",
        "duration": 8000
      }
    ]
  },
  "48_topological_matter.html": {
    "0": [
      {
        "title": "Hall Conductance Quantization",
        "body": "In a 2D electron gas under strong magnetic field, the Hall conductance is exactly $\\sigma_{xy} = n\\,e^2/h$ where integer $n$ is the Chern number — a topological invariant immune to disorder.",
        "duration": 8000
      },
      {
        "title": "Landau Levels",
        "body": "A magnetic field quantizes electron energies: $E_n = \\hbar\\omega_c(n+\\frac{1}{2})$ with cyclotron frequency $\\omega_c = eB/m$. Toggle 'Landau Levels' and slide the B field to watch the Fermi energy cross between plateaus.",
        "duration": 10000
      },
      {
        "title": "Filling Factor & TKNN",
        "body": "The filling factor $\\nu = nh/(eB)$ counts occupied Landau levels. The Chern number $C = \\frac{1}{2\\pi}\\int_\\text{BZ}\\Omega_n\\,d^2k$ integrates Berry curvature over the Brillouin zone, giving the topological origin of quantization.",
        "duration": 10000
      },
      {
        "title": "Edge States",
        "body": "Toggle 'Edge States' to see chiral edge channels — electrons that propagate in one direction without backscattering. These are protected by topology, making them dissipationless even with impurities.",
        "duration": 8000
      },
      {
        "title": "Fractional QHE",
        "body": "Enable 'Fractional QHE' to explore filling $\\nu = 1/3, 2/5, \\ldots$ where strong interactions create anyonic quasiparticles with fractional charge — a manifestation of topological order beyond free electrons.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Berry Phase Definition",
        "body": "When a quantum state is adiabatically transported around a closed loop $C$ in parameter space, it acquires a geometric phase $\\gamma_n = i\\oint_C \\langle n|\\nabla_R|n\\rangle\\cdot dR$ independent of the speed of transport.",
        "duration": 10000
      },
      {
        "title": "Berry Curvature as Magnetic Field",
        "body": "The Berry curvature $\\boldsymbol{\\Omega} = \\nabla_R\\times\\mathcal{A}$ acts as a magnetic field in parameter space, with a Dirac monopole at the origin as its source. Adjust the loop radius to see the enclosed phase change.",
        "duration": 10000
      },
      {
        "title": "Solid Angle on Bloch Sphere",
        "body": "For a spin-1/2 in a magnetic field, the Berry phase equals half the solid angle subtended on the Bloch sphere: $\\gamma = \\Omega_\\text{solid}/2$. Watch the right panel as the loop parameter traces the spin around.",
        "duration": 8000
      },
      {
        "title": "Loop Shape Effects",
        "body": "Switch the Shape selector to Figure-8 or Square to explore how non-circular loops accumulate different Berry phases. A figure-8 enclosing zero net solid angle gives $\\gamma = 0$.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Topological Insulators",
        "body": "These materials have an insulating bulk but conducting surface states protected by time-reversal symmetry. The $\\mathbb{Z}_2$ invariant $\\nu=1$ guarantees gapless edge modes that cannot be removed by any time-reversal-preserving perturbation.",
        "duration": 8000
      },
      {
        "title": "Bulk-Boundary Correspondence",
        "body": "The number of gapless edge modes equals the bulk Chern number: $\\#\\text{ edge modes} = |C_\\text{bulk}|$. Toggle between Topological and trivial phases to see the edge current appear and vanish.",
        "duration": 8000
      },
      {
        "title": "Spin-Momentum Locking",
        "body": "Edge electrons obey $H_\\text{edge} = v_F(\\hat{z}\\times\\boldsymbol{\\sigma})\\cdot\\mathbf{k}$: spin is locked perpendicular to momentum. Backscattering requires a spin flip, which time-reversal symmetry forbids — making the edges perfectly conducting.",
        "duration": 10000
      },
      {
        "title": "Robustness to Disorder",
        "body": "Click 'Add Impurity' and observe that the edge current flows around it unimpeded. This topological protection is the key to proposed dissipation-free quantum devices and topological quantum computing.",
        "duration": 8000
      }
    ],
    "3": [
      {
        "title": "Giant Magnetoresistance",
        "body": "In a ferromagnet/normal-metal/ferromagnet spin valve, resistance is low when magnetizations are parallel and high when antiparallel. The GMR ratio is $\\Delta R/R = 2P^2/(1-P^2)$ where $P$ is the spin polarization.",
        "duration": 8000
      },
      {
        "title": "Two-Current Model",
        "body": "Spin-up and spin-down electrons form independent channels. Toggle between Parallel and Antiparallel to see: in parallel alignment one channel passes freely; in antiparallel, both channels scatter — the origin of GMR.",
        "duration": 8000
      },
      {
        "title": "Hard Drive Read Heads",
        "body": "Enable 'Hard Drive' mode to see how the read head scans magnetic domains. Resistance transitions $R_P \\leftrightarrow R_{AP}$ as domain walls pass, encoding bits 0 and 1 — a technology that enabled terabyte-scale storage.",
        "duration": 8000
      },
      {
        "title": "2007 Nobel Prize",
        "body": "Albert Fert (Fe/Cr multilayers) and Peter Grünberg independently discovered GMR in 1988. The technology went from laboratory discovery to ubiquitous hard drive read heads within a decade.",
        "duration": 8000
      }
    ]
  },
  "49_quantum_networks.html": {
    "0": [
      {
        "title": "Bell States & Entanglement",
        "body": "The maximally entangled Bell state $|\\Phi^+\\rangle = \\frac{1}{\\sqrt{2}}(|00\\rangle+|11\\rangle)$ has one ebit of entanglement entropy $S = \\ln 2$. The density matrix has off-diagonal coherences that are the signature of entanglement.",
        "duration": 8000
      },
      {
        "title": "Decoherence Process",
        "body": "Drag the Decoherence slider to watch the density matrix evolve from a pure Bell state toward $\\rho = \\mathbf{I}/4$. The fidelity $F = 1-3p/4$ and purity $\\text{Tr}(\\rho^2)$ both fall as the channel degrades.",
        "duration": 8000
      },
      {
        "title": "QKD Fidelity Threshold",
        "body": "Quantum key distribution requires $F > 0.5$ to guarantee security. Below this threshold an eavesdropper could have extracted more information than the legitimate parties. Watch the Fidelity readout approach this bound.",
        "duration": 8000
      },
      {
        "title": "Instantaneous Collapse, No FTL",
        "body": "Measuring one qubit instantly collapses the other regardless of distance — yet no information travels faster than light, because the outcome is random and requires classical communication to be useful.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "The Micius Satellite (2017)",
        "body": "Pan Jianwei's team distributed entangled photon pairs from a ~500 km orbit to ground stations at Delingha and Lijiang, 1200 km apart — the first satellite-based entanglement distribution.",
        "duration": 8000
      },
      {
        "title": "Fiber vs Satellite Loss",
        "body": "Fiber accumulates $0.2\\,\\text{dB/km}\\times 1200\\,\\text{km} = 240$ dB of loss (transmission $\\sim 10^{-24}$). The satellite free-space route has only ~27 dB loss — vacuum is orders of magnitude more transparent. Toggle channels to compare.",
        "duration": 10000
      },
      {
        "title": "CHSH Bell Violation",
        "body": "Classical correlations satisfy $S\\leq 2$; quantum mechanics allows up to $2\\sqrt{2}$. Micius measured $S = 2.37\\pm0.09$, a clear Bell violation at intercontinental distance — ruling out local hidden-variable theories at cosmic scales.",
        "duration": 10000
      },
      {
        "title": "SPDC Photon Source",
        "body": "A BBO crystal on-board generates entangled pairs via spontaneous parametric down-conversion. One photon of each pair is simultaneously sent to each ground station through narrow optical telescopes tracking with sub-arcsecond precision.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Teleportation Protocol",
        "body": "Alice transmits an arbitrary qubit $|\\psi\\rangle = \\alpha|0\\rangle+\\beta|1\\rangle$ to Bob using one pre-shared Bell pair and just two classical bits — without the physical qubit ever traveling. Watch the animated protocol run stage by stage.",
        "duration": 8000
      },
      {
        "title": "Bell Measurement Step",
        "body": "Alice jointly measures her unknown qubit and her half of the Bell pair, projecting into one of four Bell outcomes. This destroys the original state — consistent with the no-cloning theorem.",
        "duration": 8000
      },
      {
        "title": "Classical Correction",
        "body": "Bob receives Alice's 2-bit result and applies one of $\\{I, X, Z, XZ\\}$ to reconstruct $|\\psi\\rangle$ exactly. The classical channel (speed $\\leq c$) is essential — before it arrives, Bob's qubit is maximally mixed, $\\rho_B = I/2$.",
        "duration": 10000
      },
      {
        "title": "No Faster-Than-Light Signalling",
        "body": "The quantum correlations cannot by themselves convey information. The mandatory classical communication step limits the protocol to $v\\leq c$, preserving causality despite the apparent 'instantaneous' collapse.",
        "duration": 8000
      }
    ],
    "3": [
      {
        "title": "Exponential Loss Problem",
        "body": "Direct fiber transmission has probability $P(L) = e^{-L/L_\\text{att}}$ with $L_\\text{att}\\approx 20$ km. At 1000 km, $P\\approx e^{-50}\\approx 10^{-22}$ — completely infeasible for quantum communication.",
        "duration": 8000
      },
      {
        "title": "Entanglement Swapping",
        "body": "A Bell State Measurement at repeater node $R_1$ projects: $|\\Phi^+\\rangle_{AR_1}\\otimes|\\Phi^+\\rangle_{R_1 B}\\xrightarrow{\\text{BSM}}|\\Phi^+\\rangle_{AB}$, extending entanglement across two short links without measuring the transmitted quantum state.",
        "duration": 10000
      },
      {
        "title": "Polynomial vs Exponential Scaling",
        "body": "With $n$ segments, the success rate scales polynomially rather than exponentially with total distance. Adjust the Segments slider and toggle 'Show Scaling' to see the dramatic improvement in the rate-vs-distance curve.",
        "duration": 8000
      },
      {
        "title": "Quantum Memory Requirement",
        "body": "Repeaters must store entanglement while waiting for neighbouring links to succeed. Leading platforms include atomic ensembles, nitrogen-vacancy centres in diamond, and trapped ions — each offering different fidelity and storage time trade-offs.",
        "duration": 8000
      }
    ]
  },
  "50_semiconductor_quantum.html": {
    "0": [
      {
        "title": "Quantum Confinement",
        "body": "When a semiconductor dimension shrinks below the de Broglie wavelength (~10 nm for Si electrons), energy levels become discrete: $E_n = n^2\\pi^2\\hbar^2/(2m^*L^2)$ with $m^*\\approx 0.19\\,m_e$. Shrink the Width L slider to watch levels spread.",
        "duration": 10000
      },
      {
        "title": "Standing-Wave Wavefunctions",
        "body": "The eigenstates are standing waves $\\psi_n(x) = \\sqrt{2/L}\\sin(n\\pi x/L)$ vanishing at both walls. Switch Mode n from 1 to 3 to count the extra nodes and observe the rising energy.",
        "duration": 8000
      },
      {
        "title": "Density of States Geometry",
        "body": "A quantum well (confined in 1D) has a staircase density of states; a quantum wire (confined in 2D) has 1D van Hove singularities. Use the Geometry selector to compare both, noting how each new subband changes the DOS.",
        "duration": 8000
      },
      {
        "title": "1/L² Energy Scaling",
        "body": "As $L$ halves, $E_n$ quadruples. This rapid increase with decreasing size is the fundamental reason GAA transistors at the 2 nm node require quantum-mechanical design — classical band theory alone is insufficient.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Gate-All-Around Architecture",
        "body": "In a GAA nanosheet transistor the gate wraps all four sides of the silicon channel (~3 nm thick), giving near-ideal electrostatic control and suppressing leakage that plagued FinFETs with only three-sided gating.",
        "duration": 8000
      },
      {
        "title": "Band Bending & Threshold",
        "body": "Gate voltage bends the conduction band: $\\phi_s \\propto V_G - V_{th}$. Sweep $V_G$ through the threshold and watch the channel switch from Sub-threshold to Inversion as electrons flood the quantum wire channel.",
        "duration": 8000
      },
      {
        "title": "Subthreshold Swing Limit",
        "body": "The fundamental limit on how sharply a MOSFET can switch is $60\\,\\text{mV/dec}$ at room temperature. GAA geometry approaches this limit more closely than FinFET, enabling lower supply voltages and reduced power consumption.",
        "duration": 8000
      },
      {
        "title": "Moore's Law at 2 nm",
        "body": "Samsung's 3 nm GAA (2022), TSMC's 2 nm GAA (2025), and Intel 18A all exploit nanosheet channels where the silicon is only ~10 atoms across. At this scale quantum confinement is not a nuisance — it is the operating principle.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Larmor Precession",
        "body": "An electron spin precesses around an applied magnetic field at $\\omega_L = eB/m_e$ — the Larmor frequency. This precession underpins NMR, MRI, and all spintronic device concepts.",
        "duration": 8000
      },
      {
        "title": "GMR Spin Valve",
        "body": "In a ferromagnet/normal-metal/ferromagnet stack, $\\Delta R/R = 2P^2/(1-P^2)$. Toggle Parallel vs Antiparallel alignment to see: in parallel, one spin channel passes freely; in antiparallel, both channels scatter — high resistance.",
        "duration": 8000
      },
      {
        "title": "Two-Current Model Details",
        "body": "Spin-up and spin-down electrons act as independent parallel resistors. Adjust the Field H slider to rotate the free layer and watch the resistance transition continuously — this is how a hard-drive read head works.",
        "duration": 8000
      },
      {
        "title": "Spintronics Applications",
        "body": "The 2007 Nobel Prize to Fert and Grünberg recognized that GMR enabled terabyte-scale magnetic storage. Modern spintronics extends to MRAM, spin-orbit torque devices, and topological magnets.",
        "duration": 8000
      }
    ],
    "3": [
      {
        "title": "Magnetic Tunnel Junction",
        "body": "A ~1 nm MgO barrier sandwiched between two ferromagnets forms an MTJ. Electrons tunnel through with spin-dependent probability, giving tunneling magnetoresistance $\\text{TMR} = (R_{AP}-R_P)/R_P \\approx 2P^2/(1-P^2)$ — up to 600% in MgO junctions.",
        "duration": 10000
      },
      {
        "title": "Spin-Hall Effect",
        "body": "A charge current $J_c$ through a heavy metal (Pt, Ta, W) generates a transverse spin current $J_s = \\theta_\\text{SH}\\frac{\\hbar}{2e}\\hat{z}\\times J_c$ via spin-orbit coupling. This spin current exerts a torque on the adjacent free ferromagnet.",
        "duration": 10000
      },
      {
        "title": "SOT Switching",
        "body": "Increase the Current $J$ slider past threshold to watch the spin-orbit torque flip the free layer — deterministically switching the MTJ between State 0 (parallel, low $R$) and State 1 (antiparallel, high $R$) in sub-nanosecond time.",
        "duration": 8000
      },
      {
        "title": "MRAM in Context",
        "body": "SOT-MRAM combines the non-volatility of a hard drive with SRAM-like read/write speed and endurance exceeding $10^{12}$ cycles — a candidate for last-level cache in post-DRAM memory hierarchies.",
        "duration": 8000
      }
    ]
  },
  "51_photonics_fiber.html": {
    "0": [
      {
        "title": "Fiber Modes & Bessel Functions",
        "body": "The transverse field in a step-index fiber core obeys $E_z \\propto J_m(ur/a)$ inside and $E_z \\propto K_m(wr/a)$ outside. The canvas shows the intensity $|E|^2$ pattern of the HE₁₁, TE₀₁, and HE₂₁ guided modes.",
        "duration": 8000
      },
      {
        "title": "V-Number Controls Modes",
        "body": "The normalized frequency $V = \\frac{2\\pi a}{\\lambda}\\sqrt{n_1^2-n_2^2}$ determines which modes propagate. Below $V_c = 2.405$ only the HE₁₁ (fundamental) mode exists — single-mode fiber. Slide V-number past 2.405 to see higher modes appear.",
        "duration": 10000
      },
      {
        "title": "Characteristic Equation",
        "body": "Guidance requires matching fields at the core-cladding boundary: $J_0(u)/[u\\,J_1(u)] = -K_0(w)/[w\\,K_1(w)]$. The right panel plots $J_0, J_1, J_2$ and the evanescent $K_0$ to show how the zero crossings define allowed modes.",
        "duration": 10000
      },
      {
        "title": "Mode Selector",
        "body": "Use the Mode dropdown to switch between $J_0$ (HE₁₁, Gaussian-like), $J_1$ (doughnut profile), and $J_2$ (petal pattern). Single-mode fiber carries only $J_0$, enabling near-diffraction-limited beam quality over thousands of kilometres.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Total Internal Reflection",
        "body": "When $\\theta > \\theta_c = \\arcsin(n_2/n_1)$, light undergoes TIR and all power is reflected. Drag the Angle $\\theta$ slider below the critical angle to watch the refracted ray reappear and power leak into the cladding.",
        "duration": 8000
      },
      {
        "title": "Evanescent Field",
        "body": "Even under TIR, the field penetrates the cladding exponentially: $E \\propto e^{-\\kappa z}$ with $\\kappa = \\frac{2\\pi}{\\lambda}\\sqrt{n_1^2\\sin^2\\theta - n_2^2}$. This evanescent tail is exploited in directional couplers and biosensors.",
        "duration": 10000
      },
      {
        "title": "Directional Coupler",
        "body": "Toggle 'Directional Coupler' to bring a second fiber core close enough for evanescent overlap. Power oscillates between cores as $P_2(z)=\\sin^2(\\pi z/2L_c)$ — the basis of optical power splitters and wavelength-selective switches.",
        "duration": 8000
      },
      {
        "title": "Numerical Aperture",
        "body": "The fiber's acceptance cone is set by $\\text{NA} = \\sqrt{n_1^2-n_2^2}$. A larger NA accepts more light but supports more modes. Single-mode fiber for telecom uses small NA (~0.12) to ensure low dispersion.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Poincaré Sphere",
        "body": "Every polarization state maps to a unique point on the Poincaré sphere via Stokes parameters $S_1 = \\cos 2\\chi\\cos 2\\psi$, $S_2 = \\cos 2\\chi\\sin 2\\psi$, $S_3 = \\sin 2\\chi$. North/south poles are right/left circular; the equator is all linear states.",
        "duration": 10000
      },
      {
        "title": "The Sphere is $\\mathbb{CP}^1$",
        "body": "A polarization state is a complex line through the origin in $\\mathbb{C}^2$ — a point in $\\mathbb{CP}^1 \\cong S^2$. This is the same space as the Bloch sphere, the Riemann sphere, and the twistor sky — a profound unity across quantum mechanics, optics, and geometry.",
        "duration": 10000
      },
      {
        "title": "Wave Plates as Rotations",
        "body": "A quarter-wave plate rotates the Poincaré sphere by $\\pi/2$ about $S_1$, converting linear to circular polarization. A half-wave plate rotates by $\\pi$, flipping helicity. Cycle 'Wave Plate' to see QWP and HWP effects on the state dot.",
        "duration": 8000
      },
      {
        "title": "Birefringent Fiber",
        "body": "Toggle 'Birefringent Fiber' to watch the polarization state trace a great circle as different phase velocities along the two principal axes accumulate a growing phase difference — a Jones-matrix rotation about the $S_1$ axis.",
        "duration": 8000
      }
    ],
    "3": [
      {
        "title": "Silicon Photonic Chip",
        "body": "Silicon (n≈3.5) ridge waveguides on SiO₂ (n≈1.44) confine light to micron-scale modes and support millimetre-radius bends — enabling full photonic circuits on standard CMOS wafers.",
        "duration": 8000
      },
      {
        "title": "Ring Resonator Filter",
        "body": "At resonance $m\\lambda_\\text{res} = n_\\text{eff}\\cdot 2\\pi R$, light circulates and the bus sees a transmission dip with free spectral range $\\text{FSR} = \\lambda^2/(n_g\\cdot 2\\pi R)$. Adjust Ring R to tune the resonance wavelength.",
        "duration": 10000
      },
      {
        "title": "Mach-Zehnder Modulator",
        "body": "The Pockels effect shifts the refractive index of one arm with applied voltage: $P_\\text{out} = P_\\text{in}\\cos^2(\\Delta\\phi/2)$ where $\\Delta\\phi = \\pi V/V_\\pi$. Sweep MZM voltage from 0 to $V_\\pi$ to swing from full ON to full OFF.",
        "duration": 8000
      },
      {
        "title": "NVLink 5.0 & WDM",
        "body": "Wavelength-division multiplexing packs 8 channels at ~112 Gbps each onto one waveguide: $8\\times 112\\,\\text{Gbps}\\approx 1\\,\\text{Tbps}$. NVIDIA's NVLink 5.0 uses silicon photonics to connect GPU chiplets with lower latency and power than copper.",
        "duration": 8000
      }
    ]
  },
  "52_category_theory.html": {
    "0": [
      {
        "title": "What is a Category?",
        "body": "A category has objects, morphisms (arrows) between them, identity arrows, and associative composition. The axioms are $\\text{id}_B\\circ f = f$ and $(h\\circ g)\\circ f = h\\circ(g\\circ f)$. Drag objects on the canvas and watch arrows update.",
        "duration": 8000
      },
      {
        "title": "Key Examples",
        "body": "Set (sets and functions), Grp (groups and homomorphisms), Top (spaces and continuous maps), Vect (vector spaces and linear maps) are all categories. Use the Example dropdown to relabel the diagram for each.",
        "duration": 8000
      },
      {
        "title": "Commutative Diagrams",
        "body": "A diagram commutes when all paths between two objects compose to the same morphism: $g\\circ f = h\\circ k$. Toggle 'Commutative Sq.' and 'Show g∘f' to see the composed arrow appear across the diagram.",
        "duration": 8000
      },
      {
        "title": "Category Theory Unifies Math",
        "body": "The 'sameness' of mathematical structures — isomorphism — is categorical at heart. Penrose emphasizes that understanding a space through all its maps into other spaces (the Yoneda philosophy) is deeper than studying it in isolation.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Functors Preserve Structure",
        "body": "A functor $F:\\mathbf{C}\\to\\mathbf{D}$ maps objects and morphisms while preserving composition: $F(g\\circ f)=F(g)\\circ F(f)$ and $F(\\text{id}_A)=\\text{id}_{F(A)}$. Click 'Animate F' to watch the source category map onto the target.",
        "duration": 8000
      },
      {
        "title": "Physical Examples of Functors",
        "body": "The fundamental group $\\pi_1:\\mathbf{Top}_*\\to\\mathbf{Grp}$, singular homology $H_n:\\mathbf{Top}\\to\\mathbf{Ab}$, and the determinant $\\det:GL_n\\to\\mathbb{R}^*$ are all functors. Select one from the dropdown to relabel the diagram.",
        "duration": 8000
      },
      {
        "title": "Natural Transformations",
        "body": "A natural transformation $\\eta:F\\Rightarrow G$ assigns to each object $A$ a morphism $\\eta_A:F(A)\\to G(A)$ satisfying $\\eta_B\\circ F(f) = G(f)\\circ\\eta_A$ — the naturality square. Click 'Animate η' to see this square fill in.",
        "duration": 10000
      },
      {
        "title": "Mac Lane's Insight",
        "body": "Categories were defined to define functors, which were defined to define natural transformations. Natural transformations capture the idea that a construction is 'canonical' — it works uniformly across all objects without making arbitrary choices.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Universal Properties",
        "body": "A universal property characterizes an object uniquely (up to isomorphism) by the morphisms into or out of it — the most powerful concept in category theory. Click the canvas to place object $Z$ and see the unique mediating arrow appear.",
        "duration": 8000
      },
      {
        "title": "Products & Coproducts",
        "body": "The product $A\\times B$ satisfies: for all $Z$, there is a unique $\\langle f,g\\rangle: Z\\to A\\times B$ with $\\pi_1\\circ\\langle f,g\\rangle = f$ and $\\pi_2\\circ\\langle f,g\\rangle = g$. Toggle 'Coproduct A+B' to reverse all arrows and get disjoint union.",
        "duration": 10000
      },
      {
        "title": "Pullback & Fiber Product",
        "body": "The pullback $A\\times_C B = \\{(a,b)\\mid f(a)=g(b)\\}$ is the categorical 'overlap' over $C$. In algebraic geometry this is the fiber product of schemes. Click 'Pullback' and drag $Z$ to visualize the unique factorization.",
        "duration": 8000
      },
      {
        "title": "Adjoint Functors",
        "body": "$F\\dashv G$ means $\\text{Hom}(FA,B)\\cong\\text{Hom}(A,GB)$ naturally. Examples: free group ⊣ forgetful, tensor ⊣ internal hom, suspension ⊣ loop space, quantization ⊣ classical limit. Click 'Adjoints F⊣G' to see the bijection visualized.",
        "duration": 10000
      }
    ],
    "3": [
      {
        "title": "What is a Topos?",
        "body": "A topos is a category behaving like Set: it has finite limits, exponentials, and a subobject classifier $\\Omega$. In Set, $\\Omega = \\{\\top,\\bot\\}$; in a general topos $\\Omega$ can encode richer logical structure.",
        "duration": 8000
      },
      {
        "title": "Subobject Classifier",
        "body": "Every subset $S\\hookrightarrow X$ is classified by a unique map $\\chi_S:X\\to\\Omega$ where $\\chi_S(x)=\\top$ iff $x\\in S$. This generalises power sets. Click 'Subobj. Classifier Ω' to explore how subsets correspond to characteristic functions.",
        "duration": 10000
      },
      {
        "title": "Heyting Algebra & Intuitionistic Logic",
        "body": "In a general topos, $\\Omega$ is a Heyting algebra — it may have more than two truth values and $\\neg\\neg p \\neq p$ in general. Click 'Heyting Algebra' to see the lattice of truth values and how excluded middle can fail.",
        "duration": 10000
      },
      {
        "title": "Sheaves & Gauge Fields",
        "body": "Sheaves on $X$ form a topos $\\text{Sh}(X)$ with $\\Omega_{\\text{Sh}(X)}=\\text{open sets of }X$. A gauge field is a sheaf of local trivializations; the transition functions are Čech cocycles. Click 'Sheaves' and 'ZX-Calculus' to see quantum circuits as a monoidal category.",
        "duration": 10000
      }
    ]
  },
  "53_attosecond.html": {
    "0": [
      {
        "title": "Three-Step Model of HHG",
        "body": "High Harmonic Generation proceeds in three steps: tunnel ionization of the atom, free acceleration of the electron in the laser field, and recollision with the parent ion emitting an XUV photon. Watch the step label cycle through all three.",
        "duration": 8000
      },
      {
        "title": "Keldysh Parameter",
        "body": "Tunnel ionization requires $\\gamma = \\omega\\sqrt{2m_e I_p}/(eE_0) < 1$. The ponderomotive energy $U_p = e^2E_0^2/(4m_e\\omega^2)$ sets the electron's quiver amplitude. At 800 nm, $3\\times10^{14}$ W/cm² gives $\\gamma\\approx 0.9$.",
        "duration": 10000
      },
      {
        "title": "Harmonic Cutoff Energy",
        "body": "The maximum photon energy emitted at recollision is $E_\\text{cut} = I_p + 3.17\\,U_p$. Increase the Intensity slider to extend the cutoff — at higher intensity the electron quivers farther and returns with more kinetic energy.",
        "duration": 8000
      },
      {
        "title": "Laser Wavelength Effect",
        "body": "Cutoff scales as $U_p \\propto \\lambda^2$, so mid-infrared driving lasers ($\\lambda \\sim 2$ μm) can push harmonics into the keV range. Adjust the Wavelength slider to watch how $U_p$ and the cutoff energy change.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Attosecond Pulse Train",
        "body": "HHG produces XUV bursts every half laser cycle (~1.3 fs at 800 nm), forming an attosecond pulse train. The time-domain canvas shows these periodic bursts riding on the infrared laser field.",
        "duration": 8000
      },
      {
        "title": "Odd Harmonic Comb",
        "body": "Inversion symmetry of the two-half-cycle interaction means only odd harmonics appear: $\\omega_n = (2n+1)\\omega_L$. Toggle to Freq. Domain to see the characteristic odd-harmonic frequency comb extending to the cutoff.",
        "duration": 8000
      },
      {
        "title": "Pulse Duration Scaling",
        "body": "Coherently adding $N$ harmonics gives a pulse duration $\\tau_\\text{pulse} \\sim 1/(N_\\text{harm}\\,\\omega_L)$. More harmonics (wider plateau) means shorter pulses — the bandwidth of the harmonic comb directly limits the pulse duration.",
        "duration": 8000
      },
      {
        "title": "Isolated Attosecond Pulses",
        "body": "Selecting only the cutoff harmonics from a few-cycle driving pulse yields a single isolated attosecond burst lasting 100–200 as — the shortest controlled events ever created, enabling real-time movies of electron motion in atoms.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Electron Wave Packet",
        "body": "A coherent superposition of atomic eigenstates forms a localised electron wave packet $|\\psi(x,t)|^2 \\propto e^{-(x-x_0)^2/(2\\sigma^2)}$. Use the time scrubber to step through the evolution in attoseconds.",
        "duration": 8000
      },
      {
        "title": "Quantum Dispersion",
        "body": "The wavefunction width grows as $\\sigma(t)\\propto\\sqrt{t}$ due to the spread of momenta in the packet. An attosecond pulse captures a snapshot before significant spreading — just as a stroboscope freezes fast motion.",
        "duration": 8000
      },
      {
        "title": "ADK Tunnel Ionization Rate",
        "body": "The Ammosov-Delone-Krainov rate $W(E)\\sim e^{-2(2I_p)^{3/2}/(3E)}$ gives the probability per unit time of tunnel ionization at field strength $E$. Only the most intense half-cycles of the driving field contribute significantly.",
        "duration": 10000
      },
      {
        "title": "2023 Nobel Prize",
        "body": "Anne L'Huillier, Ferenc Krausz, and Pierre Agostini received the 2023 Nobel Prize in Physics for experimental methods that generate attosecond pulses — opening a new frontier where electron dynamics in matter can be observed in real time.",
        "duration": 8000
      }
    ]
  },
  "54_trapped_ions.html": {
    "0": [
      {
        "title": "Paul Trap Basics",
        "body": "A Paul trap confines ions using oscillating radio-frequency fields. The DC voltage $a$ and RF amplitude $q$ determine whether the ion stays trapped inside the Mathieu stability zone.",
        "duration": 8000
      },
      {
        "title": "Mathieu Stability Zone",
        "body": "Stability requires $(a, q)$ inside the first Mathieu lobe: $q < 0.908$. Drag the RF slider past 0.908 and watch the ion escape — Mathieu instability causes exponential runaway.",
        "duration": 8000
      },
      {
        "title": "Micromotion vs Secular",
        "body": "A trapped ion undergoes two superimposed motions: fast micromotion at the RF drive frequency $\\Omega$, and a slow secular oscillation. Together they form the characteristic Lissajous path visible on-screen.",
        "duration": 8000
      },
      {
        "title": "Trap Parameters",
        "body": "The dimensionless Mathieu parameters are $a_u = -4eU/(m\\Omega^2 r_0^2)$ and $q_u = 2eV/(m\\Omega^2 r_0^2)$. Smaller $a$ (lower DC) keeps the operating point inside the stability triangle.",
        "duration": 10000
      }
    ],
    "1": [
      {
        "title": "Jaynes-Cummings Model",
        "body": "The Jaynes-Cummings Hamiltonian $H = \\hbar g(a\\sigma_+ + a^\\dagger\\sigma_-)$ describes a two-level atom exchanging single photons with a cavity mode. The Bloch sphere shows the atom state evolving in real time.",
        "duration": 10000
      },
      {
        "title": "Vacuum Rabi Oscillations",
        "body": "Even with zero photons ($n=0$), the atom oscillates at the vacuum Rabi frequency $\\Omega_0 = g\\sqrt{1}$, driven by coupling to zero-point field fluctuations — a purely quantum effect.",
        "duration": 8000
      },
      {
        "title": "Photon-Number Scaling",
        "body": "The Rabi frequency scales as $\\Omega_n = g\\sqrt{n+1}$. Increase the Photon number slider and watch the oscillation speed up — each added photon enhances the coupling.",
        "duration": 8000
      },
      {
        "title": "Photon Bar Chart",
        "body": "The bar chart shows the probability of finding $n$ or $n+1$ photons in the cavity as the atom cycles between excited and ground states. The two bars oscillate in anti-phase.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Schrödinger Cat State",
        "body": "A cat state is a superposition of two coherent states $|\\alpha\\rangle + |-\\alpha\\rangle$ in opposite phase-space locations. The Wigner function $W(\\alpha)$ reveals the quantum fringes between the two peaks.",
        "duration": 8000
      },
      {
        "title": "Negative Wigner Values",
        "body": "The red regions in the Wigner plot show $W(\\alpha) < 0$ — a definitive signature that the state cannot be described by any classical probability distribution.",
        "duration": 8000
      },
      {
        "title": "Decoherence Destroys Fringes",
        "body": "Increase the Decoherence rate slider to see the interference fringes vanish exponentially fast. The cat collapses to a classical mixture of two separate blobs with no negative $W$ values.",
        "duration": 8000
      },
      {
        "title": "Wigner Function Formula",
        "body": "The Wigner function is defined as $W(\\alpha) = \\frac{2}{\\pi}\\text{Tr}[\\hat{\\rho}\\,\\hat{D}(\\alpha)\\hat{P}\\hat{D}^\\dagger(\\alpha)]$. The superposition phase $\\theta$ rotates the orientation of the fringe pattern.",
        "duration": 10000
      }
    ]
  },
  "55_neutrino_oscillations.html": {
    "0": [
      {
        "title": "Flavor Oscillation Curves",
        "body": "Neutrinos are born in a flavor eigenstate ($\\nu_e$, $\\nu_\\mu$, $\\nu_\\tau$) but propagate as mass eigenstates. The oscillation probability is $P = \\sin^2 2\\theta \\sin^2\\!\\frac{\\Delta m^2 L}{4E}$.",
        "duration": 10000
      },
      {
        "title": "Presets: Solar vs Atmospheric",
        "body": "Use the Solar, Atm., Reactor, and Beam preset buttons to switch between different $L$-scales and energies. Each regime highlights different mixing angles and mass splittings.",
        "duration": 8000
      },
      {
        "title": "Mixing Angle Sliders",
        "body": "Drag $\\sin^2\\theta_{12}$, $\\sin^2\\theta_{23}$, or $\\sin^2\\theta_{13}$ to see how each mixing angle controls the amplitude of oscillation between flavor pairs. Best-fit values are from NuFit 5.2.",
        "duration": 8000
      },
      {
        "title": "Energy Dependence",
        "body": "The oscillation length scales as $L_{\\rm osc} \\propto E / \\Delta m^2$. Lower the Energy slider and watch the curves oscillate faster — shorter-wavelength flavor changes at low energy.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "PMNS Matrix Structure",
        "body": "The full mixing matrix is $U = R_{23}\\cdot R_{13}(\\delta)\\cdot R_{12}$. Each cell $|U_{\\alpha i}|^2$ gives the probability for flavor $\\alpha$ to be detected as mass eigenstate $i$.",
        "duration": 10000
      },
      {
        "title": "CP Violation Phase",
        "body": "The CP phase $\\delta_{CP}$ rotates the off-diagonal elements via complex phases in $R_{13}$. Watch the matrix cells shift color as you drag the $\\delta_{CP}/\\pi$ slider.",
        "duration": 8000
      },
      {
        "title": "Unitarity Check",
        "body": "Unitarity demands that each column sums to 1. The readout at the bottom confirms $\\sum_\\alpha |U_{\\alpha i}|^2 = 1$ — a consistency test of the three-generation framework.",
        "duration": 8000
      },
      {
        "title": "CP Asymmetry Indicator",
        "body": "The bar below the matrix shows the CP-sensitive cross-term $2s_{12}c_{12}s_{23}c_{23}s_{13}\\cos\\delta$. Current best fit ($\\delta \\approx 1.2\\pi$ from T2K/NOvA) gives a non-zero bar.",
        "duration": 10000
      }
    ],
    "2": [
      {
        "title": "Neutrino Flight Tube",
        "body": "A neutrino born as $\\nu_\\mu$ (atmospheric) or $\\nu_e$ (solar) travels across the tube. The tube's color at each point is the instantaneous flavor-probability mix: yellow=$\\nu_e$, cyan=$\\nu_\\mu$, magenta=$\\nu_\\tau$.",
        "duration": 8000
      },
      {
        "title": "Real-Time Probability Bars",
        "body": "Three bars below the tube update as the neutrino dot travels, showing $P(\\nu_e)$, $P(\\nu_\\mu)$, and $P(\\nu_\\tau)$ at the current baseline $L$. Watch $\\nu_\\mu$ nearly vanish for atmospheric neutrinos.",
        "duration": 8000
      },
      {
        "title": "Super-K and SNO Results",
        "body": "Super-Kamiokande (1998) observed nearly complete $\\nu_\\mu$ disappearance, revealing $\\theta_{23}\\approx 45°$. SNO (2002) confirmed the solar $\\nu_e$ deficit was flavor change, not a solar model error.",
        "duration": 8000
      },
      {
        "title": "Switch Source Type",
        "body": "Toggle between Atmospheric and Solar sources using the sidebar buttons. Solar neutrinos travel $\\sim 1.5 \\times 10^8$ km — the much longer baseline smears oscillations into an average over many cycles.",
        "duration": 8000
      }
    ]
  },
  "56_muon_g2.html": {
    "0": [
      {
        "title": "Anomalous Magnetic Moment",
        "body": "The anomalous magnetic moment is $a_\\mu = (g_\\mu - 2)/2$. For a Dirac point particle $g=2$ exactly; quantum loops push $g$ above 2 by the Schwinger term $a_\\mu^{\\rm QED(1)} = \\alpha/(2\\pi)$.",
        "duration": 10000
      },
      {
        "title": "Storage Ring Precession",
        "body": "In Fermilab's 14.185 m ring the muon spin precesses slightly faster than its momentum vector because $a_\\mu \\neq 0$. This growing phase gap encodes $a_\\mu$ to 0.2 ppm precision.",
        "duration": 8000
      },
      {
        "title": "SM vs Measured Toggle",
        "body": "Click SM Pred. then Measured to see the phase drift amplified $\\times 10^7$ for visibility. In reality the gap is only $\\sim 249 \\times 10^{-11}$ in $a_\\mu$ units — but it is a $5.1\\sigma$ discrepancy.",
        "duration": 8000
      },
      {
        "title": "Speed and Spin Arrow",
        "body": "Use the Speed slider to slow the ring animation. The yellow arrow is the spin direction; the pink arrow is the momentum tangent. Any visible separation is the anomalous precession drift.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "QED Loop Hierarchy",
        "body": "The leading QED contribution (Schwinger) gives $+116140.97 \\times 10^{-11}$ from a single virtual photon loop. Click it to see it highlighted and its running total.",
        "duration": 8000
      },
      {
        "title": "Hadronic VP Dominates Uncertainty",
        "body": "The hadronic vacuum polarization (HVP) contributes $+6845 \\times 10^{-11}$ — the largest correction after QED — and carries most of the SM theory uncertainty because it cannot be computed perturbatively.",
        "duration": 8000
      },
      {
        "title": "Click Any Diagram",
        "body": "Click each Feynman diagram card to highlight it. The running total at the bottom accumulates contributions from QED, electroweak, and hadronic loops, showing how each term builds up $a_\\mu$.",
        "duration": 8000
      },
      {
        "title": "HLbL: Smallest but Key",
        "body": "The hadronic light-by-light (HLbL) diagram contributes only $+92 \\times 10^{-11}$ but its calculation required new lattice QCD methods and dispersion relations developed in 2019–2023.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "The Tension Meter",
        "body": "The number line plots SM dispersive, BMW lattice, and Fermilab 2023 values of $a_\\mu$ with their error bars. The dashed arrow and $\\sigma$ label shows the statistical tension between SM and experiment.",
        "duration": 8000
      },
      {
        "title": "Dispersive vs Lattice QCD",
        "body": "Toggle HVP Method between Dispersive and BMW Lattice in the sidebar. The dispersive (e$^+$e$^-$ data) gives $4.2\\sigma$ tension; the BMW 2020 lattice gives only $1.5\\sigma$ — a direct conflict within the SM itself.",
        "duration": 8000
      },
      {
        "title": "Animated Explanation Steps",
        "body": "The text box cycles through five steps explaining how $a_\\mu$ is calculated, how HVP enters, how Fermilab measures precession, and why the unresolved SM internal conflict makes the anomaly hard to interpret.",
        "duration": 8000
      },
      {
        "title": "5.1σ Combined Result",
        "body": "Fermilab 2023 combined: $a_\\mu = 116\\,592\\,059(22) \\times 10^{-11}$. SM dispersive: $116\\,591\\,810(43) \\times 10^{-11}$. The $5.1\\sigma$ gap is the strongest hint of new physics in precision QED.",
        "duration": 10000
      }
    ]
  },
  "57_nuclear_fusion.html": {
    "0": [
      {
        "title": "Lawson Criterion",
        "body": "For net fusion energy the triple product must satisfy $n\\tau_E T \\geq 3\\times10^{21}$ keV·s/m$^3$. All three factors — density, confinement time, and temperature — must be simultaneously large.",
        "duration": 10000
      },
      {
        "title": "D-T vs Other Reactions",
        "body": "Use the D-T, D-D, and p-$^{11}$B buttons to compare Lawson thresholds. D-T is easiest ($T_{\\rm opt}\\approx 20$ keV); aneutronic p-B requires $10^5\\times$ higher triple product.",
        "duration": 8000
      },
      {
        "title": "NIF 2022 Ignition",
        "body": "The gold dot (NIF 2022) lies above the D-T Lawson contour — the first time a fusion experiment produced more energy than it absorbed: 3.15 MJ out from 2.05 MJ in, giving $Q \\approx 1.54$.",
        "duration": 8000
      },
      {
        "title": "Device Comparison",
        "body": "JET 1997 and JET 2022 appear well below the ignition contour. ITER (projected) targets the D-T threshold. NIF 2022's position on the log-log plot reveals how great a leap ignition required.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Implosion Animation",
        "body": "The animation shows a hohlraum (gold box) converting laser light to X-rays that uniformly ablate and implode the fuel capsule. Compression reduces the shell radius $R$ by up to $\\sim 30\\times$.",
        "duration": 8000
      },
      {
        "title": "Hot Spot Formation",
        "body": "Past 40% compression a white-hot central hot spot appears. It must reach $\\sim 50$ keV temperature for alpha-particle self-heating to ignite the surrounding cold fuel — the alpha-burn wave.",
        "duration": 8000
      },
      {
        "title": "Rayleigh-Taylor Instability",
        "body": "Toggle Show RT instability to see how the ablation front deforms. The RT growth rate is $\\gamma_{RT} = \\sqrt{A k g}$, where $A$ is the Atwood number and $k$ the wavenumber. High-$k$ modes grow fastest.",
        "duration": 10000
      },
      {
        "title": "Indirect Drive Hohlraum",
        "body": "NIF uses indirect drive: lasers heat a gold hohlraum to $\\sim 300$ eV, producing quasi-isotropic thermal X-rays that minimize drive asymmetry and RT seeding compared to direct laser illumination.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "NIF Shot History",
        "body": "Each dot on the gain curve is an NIF implosion shot. The x-axis is laser energy in, y-axis is fusion yield out. The dashed diagonal marks $Q=1$ — energy breakeven.",
        "duration": 8000
      },
      {
        "title": "Exponential Improvement",
        "body": "From 2018 to 2022, fusion yield climbed from 3 kJ to 3.15 MJ — a factor of $\\sim 1000$ in five years, driven by improved capsule symmetry, surface finish, and laser pulse shaping.",
        "duration": 8000
      },
      {
        "title": "Ignition Shot Highlighted",
        "body": "The glowing gold dot is shot N221205 (December 5 2022). It is the only point above the $Q=1$ line, marking the first scientific demonstration of fusion ignition in a laboratory.",
        "duration": 8000
      },
      {
        "title": "Commercial Gap",
        "body": "Commercial fusion power requires $Q \\gtrsim 100$ to account for driver efficiency and thermal conversion losses. NIF's $Q \\approx 1.54$ is a physics milestone, not yet an engineering solution — the gain curve must climb further.",
        "duration": 8000
      }
    ]
  },
  "58_dark_energy.html": {
    "0": [
      {
        "title": "Standard Candle Hubble Diagram",
        "body": "Type Ia supernovae have a known intrinsic luminosity, so their apparent brightness directly gives distance modulus $\\mu = 5\\log_{10}(d_L/10\\,\\text{pc})$. Plotting $\\mu$ vs redshift $z$ traces cosmic expansion history.",
        "duration": 10000
      },
      {
        "title": "Supernovae Above Empty Universe",
        "body": "The data points (yellow) sit above the empty-universe and matter-only reference lines — the distant supernovae are fainter than expected. This means they are farther away, implying accelerating expansion.",
        "duration": 8000
      },
      {
        "title": "ΛCDM Model Fit",
        "body": "The blue curve shows the ΛCDM model with $\\Omega_\\Lambda$ and $\\Omega_m$ sliders. Adjust them to fit the data: the best fit is $\\Omega_\\Lambda \\approx 0.70$, $\\Omega_m \\approx 0.30$ — about 70% dark energy.",
        "duration": 8000
      },
      {
        "title": "Hubble Tension Preview",
        "body": "Use the $H_0$ slider to shift between the SH0ES value (73 km/s/Mpc) and Planck CMB value (67.4 km/s/Mpc). The small vertical shift in the curve encodes the $\\sim 5\\sigma$ Hubble tension.",
        "duration": 8000
      },
      {
        "title": "Auto-Demo Walk-through",
        "body": "Click the Auto-demo button to animate through the empty, matter-only, and ΛCDM models with explanatory tooltips. Watch the blue model curve move to match the data as $\\Omega_\\Lambda$ is dialled in.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Scale Factor a(t)",
        "body": "The scale factor $a(t)$ measures how cosmic distances grow over time. In a matter-only universe $a \\propto t^{2/3}$; adding dark energy ($\\Omega_\\Lambda > 0$) causes $a(t)$ to curve upward — accelerated expansion.",
        "duration": 10000
      },
      {
        "title": "Inflection Point",
        "body": "The inflection point on $a(t)$ marks when dark energy began dominating over matter. Toggle Mark inflection to see it. For $\\Omega_\\Lambda \\approx 0.7$ this occurs about 6 Gyr after the Big Bang.",
        "duration": 8000
      },
      {
        "title": "Vary Omega Lambda",
        "body": "Drag $\\Omega_\\Lambda$ from 0 to 0.99 and watch the scale factor evolve. At $\\Omega_\\Lambda = 0$ the universe decelerates; high $\\Omega_\\Lambda$ produces a steeply accelerating, nearly exponential expansion.",
        "duration": 8000
      },
      {
        "title": "Today Marker",
        "body": "The Mark today checkbox shows where we are on the $a(t)$ curve. The age of the universe readout updates with $\\Omega_\\Lambda$ and $\\Omega_m$: standard ΛCDM gives $\\approx 13.8$ Gyr.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "H₀ Measurement Tension",
        "body": "Early-universe methods (Planck CMB + BAO) give $H_0 \\approx 67$ km/s/Mpc; late-universe distance ladders (Cepheids + SN Ia, SH0ES) give $H_0 \\approx 73$. The $\\sim 5\\sigma$ discrepancy is the Hubble tension.",
        "duration": 8000
      },
      {
        "title": "Early vs Late Universe Methods",
        "body": "Blue dots are CMB/BAO-based early-universe inferences. Red dots are late-universe distance-ladder measurements. Green dots show intermediate methods (e.g., gravitational lensing time delays) that often fall between.",
        "duration": 8000
      },
      {
        "title": "Systematic or New Physics?",
        "body": "The tension could arise from unknown systematic errors in Cepheid calibration or CMB physics, or from genuinely new physics — early dark energy, extra relativistic species, or modified gravity. No consensus yet.",
        "duration": 8000
      },
      {
        "title": "5σ Significance",
        "body": "A $5\\sigma$ discrepancy has a one-in-a-million chance of being statistical fluctuation. The tension has grown as both CMB and SH0ES data have improved, making a systematic explanation increasingly difficult.",
        "duration": 8000
      }
    ]
  },
  "59_spin_glasses.html": {
    "0": [
      {
        "title": "Edwards-Anderson Spin Glass",
        "body": "In a spin glass, bonds $J_{ij}$ are randomly ferromagnetic (+) or antiferromagnetic (−). Competing bonds create frustration: no spin configuration can satisfy all neighbors simultaneously.",
        "duration": 8000
      },
      {
        "title": "Metropolis Monte Carlo",
        "body": "Each Monte Carlo step proposes a random spin flip; it is accepted if $\\Delta E < 0$, or with probability $e^{-\\Delta E / kT}$ otherwise. Watch frustrated bonds (yellow lines) appear and shift as the system evolves.",
        "duration": 8000
      },
      {
        "title": "Temperature and Freezing",
        "body": "Lower the Temperature slider below $T_c \\approx 2.27$ and the spins slow, freezing into a metastable configuration — the spin glass phase. Above $T_c$ the system is paramagnetic and constantly disordered.",
        "duration": 8000
      },
      {
        "title": "J Disorder Control",
        "body": "The J disorder slider interpolates from a pure ferromagnet (0) to a fully random spin glass (1). At 0 all bonds are FM and spins align; at 1 random bonds frustrate every plaquette.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Ultrametric Energy Landscape",
        "body": "The Parisi solution reveals infinitely many metastable pure states arranged in a hierarchical ultrametric tree. The 2D projection is shown as a heatmap — blue valleys are local minima separated by red barriers.",
        "duration": 8000
      },
      {
        "title": "Barrier Growth with System Size",
        "body": "In spin glasses, barrier heights grow with system size, causing aging: the larger the system, the longer it takes to explore its landscape. This is why macroscopic spin glasses never truly equilibrate.",
        "duration": 8000
      },
      {
        "title": "Drop Particle Button",
        "body": "Click Drop particle to release a virtual system state on the landscape. It rolls downhill following gradient descent modified by thermal noise (Temperature slider). Watch it settle into a local minimum.",
        "duration": 8000
      },
      {
        "title": "Roughness Slider",
        "body": "The Roughness slider controls how many Gaussian wells are superimposed. High roughness creates a landscape with many competing basins — mimicking the exponential complexity of the real spin glass state space.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Parisi Overlap P(q)",
        "body": "The overlap $q$ between two replicas measures how similar their spin configurations are. In a ferromagnet $P(q)$ is a single delta function; in a spin glass it spreads into a continuous band — the hallmark of replica symmetry breaking.",
        "duration": 10000
      },
      {
        "title": "Temperature Cooling Animation",
        "body": "Click Animate T cooling to watch $P(q)$ transform as temperature drops below $T_c$. The continuous band fills in, the delta peaks at $\\pm q_{\\rm EA}$ sharpen, and the overlap distribution becomes nontrivial.",
        "duration": 8000
      },
      {
        "title": "Parisi Order Parameter m",
        "body": "The Parisi $m$ parameter (0 to 1) weights the continuous band relative to the delta peaks. As $m \\to 0$ the band dominates — infinitely many pure states contribute with equal weight.",
        "duration": 8000
      },
      {
        "title": "Compare Ferromagnet",
        "body": "Toggle Compare ferromagnet to overlay the FM $P(q)$ — a single sharp spike at $q_{\\rm FM} = \\sqrt{1 - T/T_c}$. The contrast with the spin glass's broad distribution shows why Parisi's RSB solution was revolutionary.",
        "duration": 8000
      }
    ]
  },
  "60_penrose_singularity.html": {
    "0": [
      {
        "title": "Penrose Conformal Diagram",
        "body": "A Penrose diagram compresses all of spacetime into a finite diamond while preserving causal structure: light rays always travel at exactly 45°. The jagged red top line is the singularity at $r = 0$.",
        "duration": 8000
      },
      {
        "title": "Event Horizon Structure",
        "body": "The yellow diagonal is the event horizon. Toggle Show Horizon to highlight it. Once a signal crosses inward, every future-directed null geodesic terminates on the singularity — escape is causally forbidden.",
        "duration": 8000
      },
      {
        "title": "Trapped Surface",
        "body": "The purple circle marks a trapped surface — a closed 2-sphere where both ingoing and outgoing null rays converge toward $r=0$. Penrose's 1965 theorem states: trapped surface + Null Energy Condition $\\Rightarrow$ singularity.",
        "duration": 8000
      },
      {
        "title": "Mass Slider and Schwarzschild Radius",
        "body": "Drag the Mass slider to scale $r_s = 2GM/c^2$. At $M = 1\\,M_\\odot$, $r_s \\approx 2.95$ km. Increasing mass shifts the trapped surface and horizon positions within the conformal diagram.",
        "duration": 8000
      },
      {
        "title": "Guided Tour Button",
        "body": "Click Guided tour to step through all five key features — singularity, horizon, trapped surface, interior and exterior regions — with annotated explanations appearing directly on the diagram.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "Raychaudhuri Equation",
        "body": "The expansion $\\theta$ of a null geodesic congruence obeys $d\\theta/d\\lambda = -\\theta^2/2 - \\sigma_{\\mu\\nu}\\sigma^{\\mu\\nu} + \\omega_{\\mu\\nu}\\omega^{\\mu\\nu} - R_{\\mu\\nu}k^\\mu k^\\nu$. Every term on the right is non-positive under the Null Energy Condition with zero rotation.",
        "duration": 10000
      },
      {
        "title": "Focusing Theorem",
        "body": "Under the NEC ($R_{\\mu\\nu}k^\\mu k^\\nu \\geq 0$) and for irrotational congruences ($\\omega = 0$), $\\theta$ must decrease and reach $-\\infty$ in finite affine parameter $\\lambda$ — a geodesic caustic, signalling a singularity.",
        "duration": 10000
      },
      {
        "title": "Initial Expansion θ₀",
        "body": "Set $\\theta_0 > 0$ (diverging rays) and watch $\\theta$ still collapse to $-\\infty$ once gravity dominates. Set $\\theta_0 < 0$ (already converging) and the caustic forms much sooner — matching the trapped surface situation.",
        "duration": 8000
      },
      {
        "title": "Shear and Ricci Contributions",
        "body": "The Shear $\\sigma$ slider adds anisotropic distortion — it always accelerates focusing. The Ric ($R_{\\mu\\nu}k^2$) slider controls the matter/curvature focusing term. Both are non-negative, hastening the caustic.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Stellar Collapse to Black Hole",
        "body": "A massive star contracts under gravity. As the shell radius $R$ passes below the Schwarzschild radius $r_s = 2GM/c^2$, an event horizon forms around it. Light emitted from $R < r_s$ can no longer reach distant observers.",
        "duration": 8000
      },
      {
        "title": "Trapped Surface Birth",
        "body": "Once inside the horizon, both outgoing and ingoing null rays from any point converge inward — the trapped surface is born. By Penrose's theorem, a singularity at $r=0$ is then mathematically inevitable.",
        "duration": 8000
      },
      {
        "title": "Collapse Speed Slider",
        "body": "The Collapse speed slider controls how quickly the shell contracts. Faster collapse reaches the Schwarzschild radius in fewer animation frames; the white hot-spot ignition flash and Ignition label mark the moment of horizon formation.",
        "duration": 8000
      },
      {
        "title": "Phase Readout",
        "body": "The readout bar shows the collapse phase and the ratio $r/r_s$ in real time. When $r/r_s$ drops below 1, the trapped surface region lights up and Penrose's singularity theorem is activated.",
        "duration": 8000
      }
    ]
  },
  "62_adscft.html": {
    "0": [
      {
        "title": "Welcome to AdS/CFT",
        "body": "The AdS/CFT correspondence is one of the deepest ideas in modern theoretical physics: a quantum theory of gravity in anti-de Sitter space is exactly equivalent to a conformal field theory living on its boundary.",
        "duration": 9000
      },
      {
        "title": "The Poincar\u00e9 Disk",
        "body": "You\u2019re looking at a Poincar\u00e9 disk model of $\\text{AdS}_2$. The metric is $ds^2 = \\frac{L^2}{z^2}(dz^2 + dx^2)$. Geodesics appear as circular arcs meeting the boundary at right angles.",
        "duration": 9000
      },
      {
        "title": "Geodesics in Hyperbolic Space",
        "body": "Click \u2018Add Geodesic\u2019 to generate new geodesic arcs. Each one is the shortest path between two boundary points in the hyperbolic metric\u2014even though they look curved in our Euclidean screen.",
        "duration": 8000
      },
      {
        "title": "Conformal Boundary",
        "body": "The outer circle is the conformal boundary where $z \\to 0$. This is where the dual CFT lives. All bulk physics is encoded holographically in boundary data.",
        "duration": 8000
      }
    ],
    "1": [
      {
        "title": "The Holographic Dictionary",
        "body": "AdS/CFT provides a precise dictionary: every bulk field $\\phi(z,x)$ maps to a boundary operator $\\mathcal{O}(x)$ with conformal dimension $\\Delta$.",
        "duration": 9000
      },
      {
        "title": "GKPW Formula",
        "body": "The GKPW relation $Z_{\\text{CFT}}[J] = Z_{\\text{grav}}[\\phi|_{\\partial}=J]$ equates the CFT generating functional to the gravitational partition function with boundary conditions set by the source $J$.",
        "duration": 9000
      },
      {
        "title": "Mass-Dimension Relation",
        "body": "Use the $\\Delta$ slider to change the conformal dimension. The mass-dimension relation $m^2 L^2 = \\Delta(\\Delta - d)$ links the bulk field mass to the boundary operator scaling.",
        "duration": 8000
      },
      {
        "title": "Two-Point Function",
        "body": "The right panel shows the boundary correlator $\\langle \\mathcal{O}(x)\\mathcal{O}(0)\\rangle \\sim 1/|x|^{2\\Delta}$. Watch how it sharpens or broadens as you change $\\Delta$.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Ryu-Takayanagi Formula",
        "body": "One of the most profound results in AdS/CFT: the entanglement entropy of a boundary region $A$ equals the area of the minimal bulk surface anchored to $\\partial A$, divided by $4G_N$.",
        "duration": 9000
      },
      {
        "title": "Drag the Endpoints",
        "body": "Drag the two boundary endpoints to resize the interval $A$. The minimal geodesic (RT surface) recomputes in real time, and the entropy $S = \\text{len}/4G$ updates live.",
        "duration": 8000
      },
      {
        "title": "Entanglement Wedge",
        "body": "Toggle the shading to see the entanglement wedge\u2014the bulk region reconstructible from boundary subregion $A$. This is the geometric manifestation of subregion duality.",
        "duration": 8000
      },
      {
        "title": "Page Curve",
        "body": "The inset shows the Page curve $S(t)$ for an evaporating black hole. The entropy first rises, then falls after the Page time\u2014a key prediction of the island formula $S = \\min\\,\\text{ext}\\left[\\frac{A}{4G} + S_{\\text{bulk}}\\right]$.",
        "duration": 9000
      }
    ],
    "3": [
      {
        "title": "BTZ Black Hole",
        "body": "The BTZ black hole is a (2+1)-dimensional black hole solution in AdS$_3$. Despite the low dimension, it has a horizon, temperature, and entropy\u2014making it a perfect toy model for holography.",
        "duration": 9000
      },
      {
        "title": "Penrose Diagram",
        "body": "The left panel shows the causal structure: singularity at top, horizon as diagonal lines, and the AdS boundary on the right. Watch quanta escape the horizon as animated dots.",
        "duration": 8000
      },
      {
        "title": "Thermal CFT",
        "body": "The right panel shows the thermal circle on the CFT boundary with circumference $\\beta = 1/T_H$. The Hawking temperature $T_H = r_+/2\\pi L^2$ links bulk geometry to boundary thermodynamics.",
        "duration": 9000
      },
      {
        "title": "Mass Slider",
        "body": "Use the mass slider to change $r_+$. The Bekenstein-Hawking entropy $S = 2\\pi r_+/4G$ and temperature update in real time. Heavier black holes are hotter in 3D!",
        "duration": 8000
      }
    ],
    "4": [
      {
        "title": "Holographic RG Flow",
        "body": "In AdS/CFT, the radial direction $z$ maps to the energy scale $\\mu$ of the boundary theory. Moving deeper into the bulk corresponds to flowing toward the infrared.",
        "duration": 9000
      },
      {
        "title": "The Onion Diagram",
        "body": "Concentric rings represent AdS radial slices at different energy scales. The coupling $g(\\mu)$ runs along a trajectory from the UV boundary to the IR center.",
        "duration": 8000
      },
      {
        "title": "Beta Function",
        "body": "The side panel plots $\\beta(g) = \\mu\\,\\partial g/\\partial\\mu$. Fixed points where $\\beta = 0$ correspond to conformal field theories\u2014the UV and IR endpoints of the flow.",
        "duration": 8000
      },
      {
        "title": "c-Theorem",
        "body": "The holographic c-theorem guarantees $dc/d\\mu \\leq 0$: the number of effective degrees of freedom always decreases from UV to IR. This is a deep consequence of the null energy condition in the bulk.",
        "duration": 9000
      }
    ],
    "5": [
      {
        "title": "Tensor Networks",
        "body": "Tensor networks like MERA provide a discrete model of the AdS/CFT correspondence. The hierarchical structure of the network mirrors the geometry of anti-de Sitter space.",
        "duration": 9000
      },
      {
        "title": "MERA Structure",
        "body": "The MERA (Multiscale Entanglement Renormalization Ansatz) tree has two types of tensors: disentanglers that remove short-range entanglement, and isometries that coarse-grain.",
        "duration": 8000
      },
      {
        "title": "Causal Cones",
        "body": "Click any tensor to highlight its causal cone\u2014the set of boundary sites it can influence. This cone is the tensor network analogue of the entanglement wedge in AdS/CFT.",
        "duration": 8000
      },
      {
        "title": "HaPPY Code",
        "body": "Toggle to the HaPPY pentagon code view. This tiling of pentagons with perfect tensors gives an exact holographic error-correcting code\u2014connecting AdS/CFT to quantum error correction.",
        "duration": 9000
      }
    ],
    "6": [
      {
        "title": "Large N Expansion",
        "body": "The AdS/CFT correspondence becomes tractable in the large $N$ limit. The gauge theory partition function organizes as $F = \\sum_g N^{2-2g} f_g(\\lambda)$, a sum over topologies.",
        "duration": 9000
      },
      {
        "title": "Ribbon Graphs",
        "body": "In double-line (\u2018t Hooft) notation, each Feynman diagram becomes a ribbon graph. The topology of the ribbon surface determines its $N$-scaling: genus $g$ contributes at order $N^{2-2g}$.",
        "duration": 9000
      },
      {
        "title": "Planar Dominance",
        "body": "Use the $N$ slider. At large $N$, only planar diagrams ($g=0$) survive\u2014non-planar diagrams are suppressed by powers of $1/N^2$. Watch the genus bar chart shift.",
        "duration": 8000
      },
      {
        "title": "String Theory Dual",
        "body": "The planar limit of $\\mathcal{N}=4$ SYM at strong \u2018t Hooft coupling $\\lambda = g^2 N$ is dual to Type IIB string theory on $\\text{AdS}_5 \\times S^5$. Genus expansion = string loop expansion.",
        "duration": 9000
      }
    ],
    "7": [
      {
        "title": "Real-World Applications",
        "body": "AdS/CFT has found surprising applications far beyond quantum gravity. These four panels show some of the most important connections to condensed matter and nuclear physics.",
        "duration": 9000
      },
      {
        "title": "Quark-Gluon Plasma",
        "body": "Top-left: The viscosity-to-entropy ratio $\\eta/s$ of the quark-gluon plasma. The KSS bound $\\eta/s \\geq 1/4\\pi$ from holography matches RHIC data remarkably well.",
        "duration": 8000
      },
      {
        "title": "Strange Metals",
        "body": "Bottom-left: Strange metals show linear-$T$ resistivity ($\\rho \\sim T$) instead of the Fermi liquid $T^2$ scaling. Holographic models with charged black holes naturally produce this anomalous behavior.",
        "duration": 9000
      },
      {
        "title": "Holographic Superconductors",
        "body": "Top-right: Below a critical temperature $T_c$, a charged scalar field condenses near a black hole horizon\u2014the holographic dual of superconducting order. The order parameter $|\\psi|$ drops to zero at $T_c$.",
        "duration": 9000
      }
    ]
  },
  "63_qec.html": {
    "0": [
      {
        "title": "Why Quantum Errors Matter",
        "body": "Quantum states are extraordinarily fragile. Unlike classical bits, qubits suffer from continuous errors\u2014decoherence destroys quantum information on timescales of microseconds to milliseconds.",
        "duration": 9000
      },
      {
        "title": "The Bloch Sphere",
        "body": "The Bloch sphere represents a single qubit state $|\\psi\\rangle = \\cos(\\theta/2)|0\\rangle + e^{i\\phi}\\sin(\\theta/2)|1\\rangle$. Watch how errors push the state vector toward decoherence.",
        "duration": 9000
      },
      {
        "title": "Amplitude Damping",
        "body": "Toggle to amplitude damping mode. The state spirals down to $|0\\rangle$ (the north pole)\u2014this models energy relaxation with characteristic time $T_1$. The density matrix $\\rho$ updates in real time.",
        "duration": 8000
      },
      {
        "title": "Dephasing",
        "body": "Toggle to dephasing mode. The state collapses toward the $Z$-axis without losing energy\u2014off-diagonal elements of $\\rho$ decay with time $T_2$. This is often the dominant error in superconducting qubits.",
        "duration": 9000
      }
    ],
    "1": [
      {
        "title": "The 3-Qubit Code",
        "body": "The simplest quantum error-correcting code encodes one logical qubit into three physical qubits: $|\\bar{0}\\rangle = |000\\rangle$, $|\\bar{1}\\rangle = |111\\rangle$. This protects against single bit-flip errors.",
        "duration": 9000
      },
      {
        "title": "Inject an Error",
        "body": "Click any of the three Bloch spheres to inject a bit-flip ($X$) or phase-flip ($Z$) error. Watch the affected qubit\u2019s Bloch vector flip instantly.",
        "duration": 8000
      },
      {
        "title": "Syndrome Measurement",
        "body": "Click \u2018Measure Syndrome\u2019 to run the CNOT circuit. The syndrome bits $Z_1 Z_2$ and $Z_2 Z_3$ identify which qubit flipped\u2014without disturbing the encoded quantum information.",
        "duration": 9000
      },
      {
        "title": "Error Correction",
        "body": "Click \u2018Correct\u2019 to apply the recovery operation. The key insight: we detect and fix errors by measuring correlations between qubits, never measuring the logical state itself.",
        "duration": 8000
      }
    ],
    "2": [
      {
        "title": "Stabilizer Formalism",
        "body": "The stabilizer formalism provides a compact, algebraic framework for quantum error correction. A code is defined by its stabilizer group $S$\u2014a set of Pauli operators that fix the code space.",
        "duration": 9000
      },
      {
        "title": "Pauli Multiplication",
        "body": "The top panel shows the $4 \\times 4$ Pauli multiplication table for $\\{I, X, Y, Z\\}$. These operators form the building blocks of all stabilizer codes. Note that $XZ = -iY$.",
        "duration": 8000
      },
      {
        "title": "Code Space",
        "body": "The code space $C(S) = \\{|\\psi\\rangle : g|\\psi\\rangle = |\\psi\\rangle\\}$ is the simultaneous $+1$ eigenspace of all stabilizer generators. Toggle generators on/off to see how the code space changes.",
        "duration": 9000
      },
      {
        "title": "Logical Operators",
        "body": "Logical operators $\\bar{X}$ and $\\bar{Z}$ commute with all stabilizers but act non-trivially on the code space. The code parameters $[[n,k,d]]$ encode $k$ logical qubits in $n$ physical qubits with distance $d$.",
        "duration": 9000
      }
    ],
    "3": [
      {
        "title": "Shor\u2019s 9-Qubit Code",
        "body": "Peter Shor\u2019s $[[9,1,3]]$ code was the first quantum error-correcting code. It concatenates a 3-qubit bit-flip code with a 3-qubit phase-flip code to protect against arbitrary single-qubit errors.",
        "duration": 9000
      },
      {
        "title": "Steane\u2019s 7-Qubit Code",
        "body": "Toggle to the $[[7,1,3]]$ Steane code. This CSS (Callan-Shor-Steane) code is more efficient: only 7 qubits, built from classical Hamming codes, and it supports transversal CNOT gates (highlighted green).",
        "duration": 9000
      },
      {
        "title": "Inject and Decode",
        "body": "Click \u2018Inject Error\u2019 to introduce a random single-qubit error. Then step through the syndrome extraction circuit to see how the code detects and localizes the error.",
        "duration": 8000
      },
      {
        "title": "CSS Construction",
        "body": "CSS codes are built from two nested classical codes $C_1 \\supset C_2$. $X$-errors are corrected by $C_1$ and $Z$-errors by $C_2^\\perp$. The logical error rate drops to $p_L \\sim p^2$ for single errors.",
        "duration": 9000
      }
    ],
    "4": [
      {
        "title": "The Surface Code",
        "body": "The surface code is the leading candidate for fault-tolerant quantum computing. Data qubits sit on edges of a 2D lattice, with $X$-stabilizers on faces and $Z$-stabilizers on vertices.",
        "duration": 9000
      },
      {
        "title": "Interactive Lattice",
        "body": "Click any data qubit (circle) to inject an $X$ or $Z$ error. Excitations appear at adjacent stabilizers\u2014these are the anyonic excitations of the surface code.",
        "duration": 8000
      },
      {
        "title": "MWPM Decoder",
        "body": "Click \u2018Run Decoder\u2019 to apply minimum-weight perfect matching. The decoder pairs up excitations and applies corrections along minimum-weight paths. If a non-contractible loop forms, the logical qubit is corrupted.",
        "duration": 9000
      },
      {
        "title": "Threshold",
        "body": "The surface code has a threshold $p_{\\text{th}} \\approx 1\\%$. Below this, increasing the code distance $d$ exponentially suppresses the logical error rate: $p_L \\sim (p/p_{\\text{th}})^{\\lceil(d+1)/2\\rceil}$.",
        "duration": 9000
      },
      {
        "title": "Change Lattice Size",
        "body": "Use the size selector to switch between $3 \\times 3$ and $7 \\times 7$ lattices. Larger lattices have more stabilizers and higher distance\u2014more protection but more physical qubits.",
        "duration": 8000
      }
    ],
    "5": [
      {
        "title": "The Threshold Theorem",
        "body": "The threshold theorem is the most important result in quantum error correction: if the physical error rate $p$ is below a threshold $p_{\\text{th}}$, arbitrarily long quantum computation is possible.",
        "duration": 9000
      },
      {
        "title": "Threshold Curves",
        "body": "The left plot shows $\\log p_L$ vs $\\log p$ for code distances $d = 3, 5, 7, 9$. All curves cross at the threshold $p_{\\text{th}} \\approx 1\\%$. Below threshold, higher distance gives exponential suppression.",
        "duration": 9000
      },
      {
        "title": "Concatenation",
        "body": "The right panel shows a concatenation tree: each logical qubit is encoded in 7 physical qubits (Steane code), recursively. At level $k$, the logical error rate drops as $p_L \\leq (p/p_{\\text{th}})^{2^k}$.",
        "duration": 9000
      },
      {
        "title": "Magic State Distillation",
        "body": "The $T$ gate cannot be implemented transversally. Instead, we prepare noisy $|T\\rangle = T|+\\rangle$ states and distill them to high fidelity. This is the most resource-intensive part of fault-tolerant quantum computing.",
        "duration": 9000
      }
    ],
    "6": [
      {
        "title": "Topological Codes",
        "body": "Topological codes protect quantum information using the global topology of a surface. Errors must form non-contractible loops to cause logical failures\u2014making them robust against local perturbations.",
        "duration": 9000
      },
      {
        "title": "The Toric Code",
        "body": "The toric code lives on a torus (rectangle with identified edges). $e$-anyons (red) are $X$-stabilizer violations; $m$-anyons (blue) are $Z$-stabilizer violations. They can only be created and annihilated in pairs.",
        "duration": 9000
      },
      {
        "title": "Anyon Braiding",
        "body": "Drag anyons around each other to braid them. The accumulated topological phase depends only on the braid topology, not the path details. This is the basis of topological quantum computation.",
        "duration": 8000
      },
      {
        "title": "Fibonacci Anyons",
        "body": "Toggle to the Fibonacci anyon view. These non-Abelian anyons obey the fusion rule $\\tau \\times \\tau = 1 + \\tau$. Their braid matrices are dense in $SU(2)$\u2014braiding alone gives universal quantum computation.",
        "duration": 9000
      }
    ],
    "7": [
      {
        "title": "Hardware Landscape",
        "body": "Building a fault-tolerant quantum computer requires millions of physical qubits. This tab surveys the current hardware landscape and the roadmap to practical quantum error correction.",
        "duration": 9000
      },
      {
        "title": "Qubit Overhead",
        "body": "Top-left: Physical qubits needed per logical qubit. Google\u2019s Willow chip demonstrated ~105:1 overhead. IBM targets ~1000:1 for their error-corrected roadmap. The gap between physical and logical is enormous.",
        "duration": 9000
      },
      {
        "title": "Error Rate Timeline",
        "body": "Top-right: Two-qubit gate error rates from 2015\u20132030 for superconducting, trapped ion, and photonic platforms. The horizontal line marks the surface code threshold $p_{\\text{th}} \\approx 1\\%$.",
        "duration": 8000
      },
      {
        "title": "The Road Ahead",
        "body": "Bottom panels show gate fidelity metrics and the milestone timeline: NISQ era (now) \u2192 early fault tolerance (~2027) \u2192 full fault-tolerant era (~2030+). Each stage unlocks qualitatively new computational capabilities.",
        "duration": 9000
      }
    ]
  }
};