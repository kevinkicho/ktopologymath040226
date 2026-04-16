// quiz-data.js — 3–5 multiple-choice questions per module
// Keys match HTML filenames (without .html extension)

const QUIZ_DATA = {

"01_complex_explorer": [
  { q: "What does multiplying a complex number by i do geometrically on the Argand plane?",
    opts: ["Reflects it across the real axis","Rotates it 90° counterclockwise","Doubles its magnitude","Translates it one unit right"],
    ans: 1, exp: "Multiplication by i = e^(iπ/2) rotates every point 90° counterclockwise around the origin." },
  { q: "Euler's formula states e^(iθ) equals:",
    opts: ["cos θ + i sin θ","sin θ + i cos θ","cosh θ + sinh θ","e^θ · i"],
    ans: 0, exp: "Euler's formula e^(iθ) = cos θ + i sin θ links exponentials to trigonometry via the unit circle." },
  { q: "A conformal map preserves:",
    opts: ["Area","Lengths","Angles between curves","Parallel lines globally"],
    ans: 2, exp: "Conformal (analytic) maps are angle-preserving: they distort shape and scale but leave local angles intact." },
  { q: "The modulus |z| of z = 3 + 4i is:",
    opts: ["5","7","12","25"],
    ans: 0, exp: "|3+4i| = √(9+16) = √25 = 5 by the Pythagorean theorem on the Argand plane." }
],

"02_penrose_tiling": [
  { q: "Penrose tilings are remarkable because they are:",
    opts: ["Periodic with a square lattice","Aperiodic yet display 5-fold symmetry","Random with no long-range order","Composed of only one tile shape"],
    ans: 1, exp: "Penrose tilings never repeat periodically yet show quasi-5-fold (decagonal) symmetry — a hallmark of quasicrystals." },
  { q: "The two tile shapes in the classic P2 Penrose tiling are:",
    opts: ["Square and triangle","Kite and dart","Rhombus and hexagon","Pentagon and star"],
    ans: 1, exp: "The P2 tiling uses kite and dart shapes whose matching rules force aperiodicity." },
  { q: "The ratio of kite-to-dart tile counts in a Penrose tiling approaches:",
    opts: ["π","√2","The golden ratio φ ≈ 1.618","e ≈ 2.718"],
    ans: 2, exp: "As the tiling grows, the ratio of kites to darts converges to φ = (1+√5)/2, the golden ratio." }
],

"03_mandelbrot": [
  { q: "A point c belongs to the Mandelbrot set if the iteration z → z² + c:",
    opts: ["Reaches zero in finite steps","Diverges to infinity","Remains bounded forever","Becomes periodic after one step"],
    ans: 2, exp: "The Mandelbrot set is defined as the set of c for which 0 → c → c²+c → … never escapes to infinity." },
  { q: "The boundary of the Mandelbrot set is:",
    opts: ["A smooth ellipse","A fractal curve of infinite length","A perfect circle","A finite polygon"],
    ans: 1, exp: "The Mandelbrot boundary is a fractal — it has infinite perimeter and self-similar structure at every zoom level." },
  { q: "Julia sets and the Mandelbrot set are related because:",
    opts: ["Julia sets are subsets of the Mandelbrot set","Each point c in ℂ generates its own Julia set Jc","They share the same equation but different variables","They are only defined in 3D"],
    ans: 1, exp: "For each parameter c, the Julia set Jc uses the same map z→z²+c but iterates z rather than c. The Mandelbrot set encodes which c values give connected Julia sets." }
],

"04_hyperbolic": [
  { q: "In hyperbolic geometry, the sum of angles of a triangle is:",
    opts: ["Exactly 180°","More than 180°","Less than 180°","Always 90°"],
    ans: 2, exp: "Hyperbolic triangles have angle sums strictly less than 180°; the deficit is proportional to the triangle's area." },
  { q: "The Poincaré disk model represents the entire hyperbolic plane inside:",
    opts: ["A square","An open unit disk","A hemisphere","A cylinder"],
    ans: 1, exp: "The open unit disk |z| < 1 models the whole hyperbolic plane; 'straight lines' appear as circular arcs meeting the boundary at right angles." },
  { q: "Escher's Circle Limit prints illustrate hyperbolic geometry because:",
    opts: ["The fish grow larger near the edge","All fish are the same hyperbolic size despite looking smaller in Euclidean eyes","The pattern repeats periodically","The boundary is infinitely far away in Euclidean distance"],
    ans: 1, exp: "Each fish is congruent in hyperbolic metric; the Euclidean shrinking is an artifact of the Poincaré disk's conformal distortion." }
],

"05_fourier": [
  { q: "The Fourier transform decomposes a signal into:",
    opts: ["Polynomials","Sine and cosine (frequency) components","Wavelets only","Discrete pulses"],
    ans: 1, exp: "The Fourier transform expresses any integrable function as a (continuous) superposition of complex exponentials e^(iωt), revealing its frequency content." },
  { q: "If a signal is perfectly localized in time (a delta function), its Fourier transform is:",
    opts: ["Also a delta function","Zero everywhere","Spread across all frequencies equally","A Gaussian"],
    ans: 2, exp: "The Dirac delta δ(t) has a flat Fourier transform: all frequencies contribute equally, embodying the Heisenberg uncertainty principle." },
  { q: "Parseval's theorem states that:",
    opts: ["Total energy in time domain equals total energy in frequency domain","The Fourier series always converges pointwise","High frequencies carry more energy","Convolution equals multiplication in time"],
    ans: 0, exp: "Parseval's theorem: ∫|f(t)|² dt = ∫|F(ω)|² dω — energy (L²-norm) is preserved by the Fourier transform." }
],

"06_complex_calculus": [
  { q: "The Cauchy-Riemann equations are conditions for a function to be:",
    opts: ["Continuous","Real-differentiable","Complex-differentiable (holomorphic)","Harmonic but not analytic"],
    ans: 2, exp: "A function f = u + iv is holomorphic iff ∂u/∂x = ∂v/∂y and ∂u/∂y = −∂v/∂x — the Cauchy-Riemann equations." },
  { q: "Cauchy's integral theorem says that for a holomorphic function on a simply-connected domain, the contour integral around any closed loop is:",
    opts: ["Equal to 2πi times the residue","Zero","Proportional to the winding number","Always divergent"],
    ans: 1, exp: "If f is holomorphic and the domain has no holes, ∮f(z)dz = 0 for every closed contour — no 'charge' inside." },
  { q: "A function holomorphic everywhere in ℂ (entire) that is also bounded must be:",
    opts: ["Periodic","Polynomial","Constant (Liouville's theorem)","Nowhere differentiable"],
    ans: 2, exp: "Liouville's theorem: bounded entire functions are constant. This is why non-constant functions like e^z must be unbounded." }
],

"07_spinors_lie": [
  { q: "A spinor returns to its original state after a rotation of:",
    opts: ["90°","180°","360°","720°"],
    ans: 3, exp: "Spinors have a 4π periodicity: a 360° spatial rotation flips their sign, and only a 720° rotation restores them — a topological fact captured by π₁(SO(3)) = ℤ₂." },
  { q: "The Lie algebra su(2) is spanned by matrices related to the:",
    opts: ["Pauli matrices","Euler angles","Quaternion units only","Gamma matrices"],
    ans: 0, exp: "The generators of SU(2) are (i/2 times) the three Pauli matrices σ₁, σ₂, σ₃, satisfying [σⱼ, σₖ] = 2iεⱼₖₗ σₗ." },
  { q: "SU(2) is the double cover of SO(3), meaning:",
    opts: ["They have the same Lie algebra but SU(2) is simply-connected","They are isomorphic as groups","SO(3) covers SU(2) twice","They share no common subgroup"],
    ans: 0, exp: "Both groups share the same Lie algebra (same local structure), but SU(2) ≅ S³ is simply-connected while SO(3) has π₁ = ℤ₂ — two SU(2) elements map to each SO(3) rotation." }
],

"08_spacetime": [
  { q: "In special relativity, the spacetime interval s² = c²t² − x² − y² − z² is:",
    opts: ["Always positive","Always negative","Frame-dependent","Frame-independent (invariant)"],
    ans: 3, exp: "The spacetime interval is Lorentz-invariant — all inertial observers agree on its value, even though they disagree on separate space and time coordinates." },
  { q: "A light cone divides spacetime into regions because:",
    opts: ["Light travels faster than information","Events outside the cone cannot be causally connected to the vertex","Gravity bends it","It is only defined in flat spacetime"],
    ans: 1, exp: "Only events inside or on the light cone (timelike/null separated) can causally influence the vertex event; spacelike-separated events cannot exchange signals at or below c." },
  { q: "The Lorentz factor γ = 1/√(1−v²/c²) appears in time dilation as:",
    opts: ["Δt′ = Δt/γ (moving clocks run fast)","Δt′ = γ·Δt (moving clocks run slow)","Δt′ = Δt (no change)","Δt′ = γ²·Δt"],
    ans: 1, exp: "A moving clock ticks slower: Δt′ = γ Δt ≥ Δt since γ ≥ 1. This is 'time dilation' — the twin paradox is its extreme version." }
],

"09_quantum": [
  { q: "The Schrödinger equation describes how a quantum state evolves:",
    opts: ["Discontinuously at random times","Unitarily and deterministically between measurements","Only for particles in a box","Through stochastic diffusion"],
    ans: 1, exp: "Between measurements the wavefunction evolves via iℏ ∂ψ/∂t = Ĥψ — a deterministic, unitary (norm-preserving) flow." },
  { q: "The probability of finding a particle at position x is:",
    opts: ["ψ(x)","Re[ψ(x)]","|ψ(x)|²","ψ*(x)"],
    ans: 2, exp: "Born's rule: the probability density is |ψ(x)|² = ψ*(x)ψ(x), the squared modulus of the wavefunction." },
  { q: "Heisenberg's uncertainty principle ΔxΔp ≥ ℏ/2 is a consequence of:",
    opts: ["Measurement disturbing the particle","The non-commutativity of position and momentum operators","Thermal noise","Relativistic effects"],
    ans: 1, exp: "Since [x̂, p̂] = iℏ, Robertson's inequality gives ΔxΔp ≥ ℏ/2 — it's a fundamental algebraic fact, not just a measurement limitation." }
],

"10_lagrangian": [
  { q: "Hamilton's principle of stationary action says the physical path:",
    opts: ["Maximizes the action S","Minimizes kinetic energy","Makes the action stationary (usually a saddle point)","Follows a straight line in configuration space"],
    ans: 2, exp: "The physical trajectory satisfies δS = 0 — the action is stationary (not necessarily minimum), leading to the Euler-Lagrange equations." },
  { q: "Noether's theorem connects symmetries to:",
    opts: ["Conserved quantities","Entropy increase","Chaos","Boundary conditions"],
    ans: 0, exp: "Every continuous symmetry of the action yields a conserved current (Noether's theorem): time-translation → energy, spatial translation → momentum, rotation → angular momentum." },
  { q: "The Hamiltonian H is related to the Lagrangian L by:",
    opts: ["H = L − T","H = pq̇ − L (Legendre transform)","H = ∂L/∂q","H = L + V"],
    ans: 1, exp: "H = Σ pᵢq̇ᵢ − L is the Legendre transform switching from (q, q̇) to (q, p) phase-space variables." }
],

"11_dirac": [
  { q: "The Dirac equation was the first to combine quantum mechanics with:",
    opts: ["Thermodynamics","General relativity","Special relativity","Statistical mechanics"],
    ans: 2, exp: "Dirac's 1928 equation (iγᵘ∂ᵘ − m)ψ = 0 is Lorentz-covariant, unifying quantum mechanics and special relativity for spin-½ particles." },
  { q: "The Dirac equation predicted the existence of:",
    opts: ["Neutrons","Neutrinos","Antiparticles (positron)","Quarks"],
    ans: 2, exp: "Negative-energy solutions of the Dirac equation led Dirac to predict antiparticles; the positron (anti-electron) was discovered by Anderson in 1932." },
  { q: "Gamma matrices γᵘ in the Dirac equation satisfy:",
    opts: ["{γᵘ, γᵛ} = 2ηᵘᵛ (Clifford algebra)","[γᵘ, γᵛ] = 0 (they commute)","γᵘγᵛ = δᵘᵛ","(γᵘ)² = −I always"],
    ans: 0, exp: "The defining relation {γᵘ, γᵛ} = γᵘγᵛ + γᵛγᵘ = 2ηᵘᵛI is the Clifford algebra of Minkowski space, encoding the metric into the matrices." }
],

"12_gauge_theory": [
  { q: "A gauge transformation in electromagnetism is:",
    opts: ["A physical change in the electric field","A change in potentials (A, φ) that leaves E and B unchanged","A Lorentz boost","A change in the charge distribution"],
    ans: 1, exp: "A→A+∇χ, φ→φ−∂χ/∂t leaves F=dA unchanged — this redundancy is gauge freedom, not a physical change." },
  { q: "The gauge group of quantum electrodynamics (QED) is:",
    opts: ["SU(2)","SU(3)","U(1)","SO(3)"],
    ans: 2, exp: "QED is a U(1) gauge theory — the photon arises from requiring invariance under local phase rotations ψ→e^(iα(x))ψ." },
  { q: "In Yang-Mills theory, the gauge bosons are:",
    opts: ["Electrically neutral scalars","Themselves charged under the gauge group (non-Abelian case)","Always massless Dirac fermions","Gravitons"],
    ans: 1, exp: "In non-Abelian theories (SU(2), SU(3)), gauge bosons carry the charge they mediate and self-interact — unlike the photon in Abelian U(1)." }
],

"13_cosmology": [
  { q: "The Friedmann equation governs:",
    opts: ["Black hole formation","The expansion rate (Hubble parameter) of the Universe","Nucleosynthesis","Cosmic ray propagation"],
    ans: 1, exp: "The Friedmann equation (ȧ/a)² = 8πGρ/3 − k/a² relates the Hubble rate H = ȧ/a to the energy density ρ and spatial curvature k." },
  { q: "Cosmic inflation solves the flatness and horizon problems by:",
    opts: ["Slowing expansion dramatically","Exponentially expanding a tiny causally-connected patch to become our visible Universe","Introducing a cosmological constant after recombination","Reversing the arrow of time"],
    ans: 1, exp: "A ~60 e-fold inflationary expansion stretches one causally-coherent region to encompass the entire observable Universe, explaining its uniformity and near-flatness." },
  { q: "The CMB (cosmic microwave background) temperature today is approximately:",
    opts: ["0 K","2.7 K","273 K","3000 K"],
    ans: 1, exp: "The CMB has cooled to ~2.725 K as the Universe expanded by a factor ~1100 since recombination at ~3000 K." }
],

"14_diff_geometry": [
  { q: "A manifold is a space that locally looks like:",
    opts: ["A sphere","Euclidean space ℝⁿ","Hyperbolic space","A vector space with inner product"],
    ans: 1, exp: "An n-manifold has charts mapping each neighborhood homeomorphically to an open subset of ℝⁿ — locally flat, globally curved." },
  { q: "The Gaussian curvature of a sphere of radius R is:",
    opts: ["0","1/R","1/R²","R²"],
    ans: 2, exp: "Gaussian curvature K = 1/R² for a sphere (positive, constant). A flat plane has K=0 and a saddle has K<0." },
  { q: "Parallel transport around a closed loop on a curved surface:",
    opts: ["Always returns the vector unchanged","Rotates the vector by an angle equal to the enclosed area times curvature (holonomy)","Translates the vector","Scales the vector"],
    ans: 1, exp: "The holonomy angle equals ∫∫ K dA by the Gauss-Bonnet theorem — direct evidence of intrinsic curvature." }
],

"15_quaternions": [
  { q: "Hamilton's quaternion algebra has the fundamental identity:",
    opts: ["i² = j² = k² = ijk = −1","i² = j² = k² = 1","ij = ji","i + j + k = 1"],
    ans: 0, exp: "Hamilton inscribed i² = j² = k² = ijk = −1 on Brougham Bridge in 1843 — the defining relations of the quaternion group Q₈." },
  { q: "Quaternions of unit length (|q|=1) represent:",
    opts: ["Translations in 3D","3D rotations (elements of SO(3) via double cover)","2D reflections","Lorentz boosts"],
    ans: 1, exp: "Unit quaternions form the group SU(2) ≅ S³, which double-covers SO(3): q and −q give the same rotation." },
  { q: "To rotate a 3D vector v by a unit quaternion q, you compute:",
    opts: ["q + v","q · v","q v q* (quaternion sandwich)","q² v"],
    ans: 2, exp: "The rotation formula is v′ = q v q⁻¹ = q v q* (since |q|=1 implies q⁻¹=q*) — the 'sandwich product'." }
],

"16_diff_forms": [
  { q: "A differential 1-form ω on a manifold is most precisely:",
    opts: ["A scalar field","A covector field (section of the cotangent bundle)","A vector field","A 2-tensor"],
    ans: 1, exp: "A 1-form assigns to each point a linear functional on tangent vectors — it's a covector field, the dual to vector fields." },
  { q: "The exterior derivative d satisfies d² = 0 because:",
    opts: ["Partial derivatives commute (equality of mixed partials)","Forms are antisymmetric","The Hodge star is its own inverse","Manifolds are compact"],
    ans: 0, exp: "d² = 0 follows from the symmetry of second partial derivatives: ∂²f/∂xⁱ∂xʲ = ∂²f/∂xʲ∂xⁱ, which cancels in the antisymmetric wedge product." },
  { q: "Stokes' theorem ∫_∂M ω = ∫_M dω generalizes:",
    opts: ["Only the fundamental theorem of calculus","The divergence theorem, Green's theorem, and the classical Stokes' theorem all at once","Only Maxwell's equations","Only Gauss's law"],
    ans: 1, exp: "Stokes' theorem in differential-form language unifies the fundamental theorem of calculus, Green's, Gauss's, and classical Stokes' theorems into one statement." }
],

"17_fiber_bundles": [
  { q: "A fiber bundle E→B consists of a total space E, base B, and:",
    opts: ["A metric on B","A fiber F attached above each point of B","A global section always","A Lie group action on B"],
    ans: 1, exp: "A fiber bundle locally looks like U×F over each open U⊂B; the fiber F is 'attached' above every base point, possibly twisted globally." },
  { q: "The Möbius band is a non-trivial fiber bundle because:",
    opts: ["Its fiber is a circle","Its total space is not orientable — the fiber twists once around the base circle","It has no global sections","Its base is a sphere"],
    ans: 1, exp: "The Möbius band is an ℝ¹ bundle over S¹ that cannot be globally trivialized (≠ S¹×ℝ) — the fiber flips sign once around, making it non-orientable." },
  { q: "A connection on a principal bundle is used in physics to define:",
    opts: ["The metric","The gauge field (e.g., the electromagnetic potential A)","The curvature scalar","The matter field ψ"],
    ans: 1, exp: "A connection (Ehresmann connection) on a principal G-bundle gives a way to 'lift' paths in the base — in physics this is precisely the gauge potential Aᵘ." }
],

"18_infinity": [
  { q: "Cantor showed that the real numbers are 'more infinite' than the natural numbers by:",
    opts: ["Showing ℝ is uncountable via the diagonal argument","Counting them both","Proving the continuum hypothesis","Using the axiom of choice"],
    ans: 0, exp: "Cantor's diagonal argument: any supposed list of reals misses at least one real (the diagonal-altered number), so |ℝ| > |ℕ|." },
  { q: "The Riemann sphere compactifies the complex plane by:",
    opts: ["Removing the origin","Adding a single point at infinity, making ℂ ∪ {∞} ≅ S²","Mapping ℂ to the upper half-plane","Identifying antipodal points"],
    ans: 1, exp: "Stereographic projection from S² to ℂ shows ℂ ∪ {∞} ≅ S² (the Riemann sphere) — infinity is just the north pole." },
  { q: "Penrose's conformal cyclic cosmology uses conformal infinity to:",
    opts: ["Prove the Universe is finite","Identify the end of one aeon with the beginning of the next, via conformal rescaling","Eliminate dark energy","Resolve the black hole information paradox directly"],
    ans: 1, exp: "CCC proposes that the conformal future boundary of one aeon is conformally equivalent to the Big Bang of the next, making 'infinity' physically real and recurrent." }
],

"19_general_relativity": [
  { q: "Einstein's field equations Gᵘᵛ + Λgᵘᵛ = 8πG Tᵘᵛ relate:",
    opts: ["Momentum to force","Spacetime curvature to energy-momentum content","Entropy to temperature","Electric field to charge"],
    ans: 1, exp: "The Einstein tensor Gᵘᵛ encodes spacetime curvature; Tᵘᵛ is the stress-energy tensor. Mass-energy curves spacetime, which in turn governs how matter moves." },
  { q: "Geodesics in curved spacetime are paths that:",
    opts: ["Minimize proper time for massive particles","Maximize proper time for massive particles (extremize action)","Follow constant coordinate lines","Require external force to maintain"],
    ans: 1, exp: "Free-falling massive particles follow timelike geodesics — paths of maximal proper time (Fermat-like principle for gravity). Light follows null geodesics." },
  { q: "The Schwarzschild radius of a mass M is:",
    opts: ["Rs = GM/c²","Rs = 2GM/c²","Rs = 4GM/c²","Rs = GM/c"],
    ans: 1, exp: "Rs = 2GM/c² marks the event horizon of a Schwarzschild black hole — the radius at which escape velocity equals c." }
],

"20_thermodynamics": [
  { q: "The second law of thermodynamics states:",
    opts: ["Energy is conserved","Entropy of an isolated system never decreases","Heat flows from cold to hot spontaneously","Absolute zero is attainable"],
    ans: 1, exp: "The second law (Clausius): the total entropy S of an isolated system satisfies dS/dt ≥ 0 — it can only increase or stay the same." },
  { q: "Boltzmann's entropy formula S = k_B ln Ω means:",
    opts: ["Entropy is the log of total energy","Entropy counts the number of microstates Ω consistent with the macrostate","Entropy is inversely proportional to temperature","Entropy is always extensive"],
    ans: 1, exp: "Ω is the number of microscopic arrangements compatible with the observed macrostate; S = k_B ln Ω is Boltzmann's statistical definition of entropy." },
  { q: "Hawking radiation implies that black holes:",
    opts: ["Grow indefinitely","Are perfectly cold","Evaporate and have a temperature proportional to surface gravity","Violate the second law of thermodynamics"],
    ans: 2, exp: "Hawking temperature T_H = ℏc³/(8πGMk_B) — black holes radiate thermally and slowly lose mass through quantum effects near the horizon." }
],

"21_quantum_measurement": [
  { q: "The 'measurement problem' in quantum mechanics refers to:",
    opts: ["The finite resolution of instruments","Why wavefunction collapse is not described by the Schrödinger equation","The impossibility of measuring spin","Decoherence being too slow"],
    ans: 1, exp: "The Schrödinger equation is linear and unitary — it never selects a single outcome. 'Collapse' is added as a postulate, creating a tension that the measurement problem highlights." },
  { q: "Decoherence explains why quantum superpositions appear classical by:",
    opts: ["Physically collapsing the wavefunction","Entangling the system with its environment, making interference terms unobservable","Removing off-diagonal terms from the universal wavefunction","Violating unitarity"],
    ans: 1, exp: "Environmental entanglement spreads quantum coherence into many degrees of freedom; the reduced density matrix of the system becomes effectively diagonal — classicality emerges without true collapse." },
  { q: "Penrose's OR (Objective Reduction) proposal suggests collapse occurs when:",
    opts: ["An observer becomes conscious of the result","The gravitational self-energy of the superposition exceeds a threshold (~ℏ/t_Planck)","The temperature drops below 1 K","The superposition lasts longer than the Poincaré recurrence time"],
    ans: 1, exp: "Penrose proposes that a quantum superposition of spacetime geometries becomes unstable when the gravitational self-energy ΔE ~ ℏ/τ — spacetime uncertainty triggers objective collapse." }
],

"22_path_integrals": [
  { q: "In Feynman's path integral formulation, a quantum particle:",
    opts: ["Follows the classical least-action path","Sums amplitudes e^(iS/ℏ) over all possible paths","Chooses the shortest path","Tunnels only through classically allowed regions"],
    ans: 1, exp: "The propagator K(b,a) = ∫𝒟x e^(iS[x]/ℏ) sums complex amplitudes over every conceivable path; classical mechanics emerges when ℏ→0 (stationary phase)." },
  { q: "Wick rotation converts a path integral in Minkowski space to:",
    opts: ["A path integral in de Sitter space","A statistical mechanics partition function in Euclidean space","A classical field equation","A lattice gauge theory directly"],
    ans: 1, exp: "Replacing t → −iτ (Wick rotation) makes e^(iS_Mink) → e^(−S_Eucl), converting oscillatory integrals into convergent Boltzmann weights — identical in form to the partition function Z = ∫𝒟φ e^(−S_E)." },
  { q: "The stationary phase approximation of the path integral gives:",
    opts: ["An exact result","The classical trajectory (Euler-Lagrange equation) plus quantum corrections","A random walk","The Bohm potential"],
    ans: 1, exp: "When ℏ is small, only paths near δS=0 (classical paths) contribute significantly — the semiclassical approximation recovers classical mechanics plus ℏ-corrections." }
],

"23_twistor_theory": [
  { q: "A twistor is most concisely described as:",
    opts: ["A spinning black hole","A null ray in complexified Minkowski space, carrying spinor data","A supersymmetric partner of the graviton","A braid in 3D topology"],
    ans: 1, exp: "A twistor Zᵅ = (ωᴬ, π_{Ȧ'}) encodes a null ray in (complexified) Minkowski space together with a spinor, living in ℂP³ (twistor space)." },
  { q: "Penrose's original motivation for twistor theory was to:",
    opts: ["Quantize gravity by reformulating spacetime in terms of light rays","Explain dark matter","Unify electromagnetism and gravity classically","Solve the three-body problem"],
    ans: 0, exp: "Penrose hoped that replacing spacetime points with null rays (twistors) as fundamental would make quantum gravity more natural — locality in spacetime becomes non-local in twistor space." },
  { q: "The twistor correspondence maps a point in Minkowski space to:",
    opts: ["A point in twistor space","A line (ℂP¹) in twistor space ℂP³","A sphere in twistor space","A torus"],
    ans: 1, exp: "Each spacetime point x maps to a projective line (Riemann sphere) in ℂP³ — the Penrose transform turns field equations on spacetime into cohomological data in twistor space." }
],

"24_loop_quantum_gravity": [
  { q: "In loop quantum gravity, areas are:",
    opts: ["Continuous real numbers","Discrete — the area spectrum is quantized in units of the Planck area ℓ²_P","Infinite for any surface","Zero at the Planck scale"],
    ans: 1, exp: "The area operator in LQG has a discrete spectrum proportional to ℓ²_P Σ √(j(j+1)), labelled by half-integer spins j — space itself is granular." },
  { q: "Spin networks are the basis states of LQG's Hilbert space. They are:",
    opts: ["Lattices with a fixed background metric","Graphs with edges labelled by SU(2) representations and nodes by intertwiners, with no background metric","String worldsheets","Feynman diagrams in flat space"],
    ans: 1, exp: "Spin networks are combinatorial graphs that encode quantum geometry without any reference to a background spacetime — geometry is relational and discrete." },
  { q: "Loop quantum cosmology resolves the Big Bang singularity by:",
    opts: ["Removing it from the theory by hand","Replacing it with a 'Big Bounce' where quantum pressure halts collapse","Showing the Universe always had infinite size","Using string theory dualities"],
    ans: 1, exp: "In LQC, quantum geometry effects create an effective repulsive pressure at Planck density (~10⁹⁶ kg/m³), replacing the classical singularity with a bounce." }
],

"61_string_theory": [
  { q: "In string theory, fundamental particles are replaced by:",
    opts: ["Point masses with spin","One-dimensional vibrating strings","Two-dimensional membranes exclusively","Loops of quantized flux"],
    ans: 1, exp: "The basic objects in string theory are 1D strings (open or closed); different vibrational modes correspond to different particles — one mode gives the graviton." },
  { q: "T-duality relates a string theory compactified on a circle of radius R to one with radius:",
    opts: ["2R","R + ℓ_s","ℓ_s²/R","1/R²"],
    ans: 2, exp: "T-duality: R ↔ ℓ_s²/R (string length ℓ_s = √α′). Winding modes and momentum modes exchange, showing large and small radii are physically equivalent." },
  { q: "The extra dimensions in superstring theory are required to number:",
    opts: ["4","6","10","26"],
    ans: 2, exp: "Superstring theory is anomaly-free in 10 spacetime dimensions (9 space + 1 time). The extra 6 are compactified, typically on a Calabi-Yau manifold." }
],

"25_higgs_field": [
  { q: "The Higgs mechanism gives particles mass by:",
    opts: ["Direct coupling to gravity","Spontaneous breaking of the electroweak gauge symmetry via a non-zero vacuum expectation value","Confinement of quarks","Radiative corrections only"],
    ans: 1, exp: "The Higgs field has a 'Mexican hat' potential; its non-zero vacuum value ⟨φ⟩ ≠ 0 breaks SU(2)×U(1)→U(1)_EM, and Yukawa couplings to this vev give fermions mass." },
  { q: "The Higgs boson discovered at the LHC in 2012 has a mass of approximately:",
    opts: ["80 GeV","91 GeV","125 GeV","173 GeV"],
    ans: 2, exp: "The Higgs boson has m_H ≈ 125.09 GeV — discovered by ATLAS and CMS at CERN on July 4 2012, completing the Standard Model particle spectrum." },
  { q: "The 'Mexican hat' shape of the Higgs potential is described by V(φ) ∝:",
    opts: ["φ²","−φ² + φ⁴","sin φ","e^φ"],
    ans: 1, exp: "V(φ) = −μ²|φ|² + λ|φ|⁴ (with μ²,λ > 0) has a maximum at φ=0 and a ring of minima at |φ| = √(μ²/2λ) — the brim of the hat." }
],

"26_number_systems": [
  { q: "The p-adic absolute value |n|_p of an integer n = p^k · m (gcd(m,p)=1) is:",
    opts: ["p^k","k","p^(−k)","1/k"],
    ans: 2, exp: "|p^k m|_p = p^(−k): numbers divisible by higher powers of p are 'smaller' p-adically — the opposite of the usual absolute value." },
  { q: "The surreal numbers, invented by Conway, are notable for containing:",
    opts: ["Only real numbers and ω","All ordinals, all real numbers, and infinitesimals in one ordered field","Only hyperreals","Only finite numbers"],
    ans: 1, exp: "The surreal numbers form the largest ordered field: they include ℝ, all ordinals (ω, ω², …), and all infinitesimals (1/ω, …) in a single coherent structure." },
  { q: "Hensel's lemma is a p-adic analogue of:",
    opts: ["The Fundamental Theorem of Algebra","Newton's method / implicit function theorem (lifting solutions mod p to p-adic solutions)","The Riemann mapping theorem","Zorn's lemma"],
    ans: 1, exp: "Hensel's lemma: if f(a) ≡ 0 mod p and f′(a) ≢ 0 mod p, the root can be 'lifted' uniquely to a p-adic root — mirroring Newton iteration in the p-adic metric." }
],

"27_visual_calculus": [
  { q: "The Fundamental Theorem of Calculus connects:",
    opts: ["Integration and differentiation as inverse operations","Derivatives of polynomials to their degree","Arc length to curvature","Series convergence to differentiation"],
    ans: 0, exp: "FTC: d/dx ∫_a^x f(t)dt = f(x) and ∫_a^b f′(x)dx = f(b)−f(a) — differentiation and integration undo each other." },
  { q: "The geometric meaning of the derivative f′(a) is:",
    opts: ["The area under f near a","The slope of the tangent line to the graph of f at x=a","The average value of f on [0,a]","The curvature of f at a"],
    ans: 1, exp: "f′(a) = lim_{h→0}(f(a+h)−f(a))/h is the instantaneous rate of change — geometrically the slope of the tangent line at the point (a, f(a))." },
  { q: "Taylor's theorem approximates a smooth function f near x=a using:",
    opts: ["A Fourier series","A power series Σ f^(n)(a)/n! · (x−a)^n","An integral of f","A rational function"],
    ans: 1, exp: "The Taylor series expresses f as an infinite sum of its derivatives at a; truncated to degree n it gives the best polynomial approximation of order n." }
],

"28_ccc_or": [
  { q: "In Penrose's Conformal Cyclic Cosmology (CCC), an 'aeon' is:",
    opts: ["A Planck-time interval","An entire universe epoch from Big Bang to infinite future","A single CMB fluctuation","A cosmic string loop"],
    ans: 1, exp: "An aeon is one complete universe history; CCC proposes the conformally-rescaled far future of one aeon is identical to the Big Bang of the next, in an endless cycle." },
  { q: "The 'Hawking points' predicted by CCC are:",
    opts: ["Primordial black holes","Concentric rings in the CMB from Hawking radiation of supermassive black holes in the prior aeon","Gravitational wave bursts","Dark matter halos"],
    ans: 1, exp: "Penrose & Gurzadyan claim to see concentric low-variance rings in the CMB — predicted as imprints of last-scattering of Hawking radiation from black holes in the previous aeon." },
  { q: "Penrose's Objective Reduction (OR) proposes that quantum state collapse is triggered by:",
    opts: ["Conscious observation","Thermal fluctuations","Quantum gravity: when superposed mass distributions differ by ~1 Planck mass, spacetime uncertainty forces reduction","Decoherence alone"],
    ans: 2, exp: "OR sets a gravitational collapse threshold: when the energy uncertainty ΔE of a superposition reaches ~ℏ/t_P (Planck scale), the state objectively reduces on timescale τ ~ ℏ/ΔE." }
],

"29_symplectic": [
  { q: "A symplectic manifold (M, ω) has ω which is:",
    opts: ["A Riemannian metric","A closed, non-degenerate 2-form","A volume form only","A Killing vector field"],
    ans: 1, exp: "The symplectic form ω is a closed (dω=0), non-degenerate antisymmetric 2-form — it defines area (not distance) and governs Hamiltonian mechanics." },
  { q: "Liouville's theorem in Hamiltonian mechanics states that phase-space volume is:",
    opts: ["Always increasing","Always decreasing","Conserved under Hamiltonian flow","Proportional to temperature"],
    ans: 2, exp: "The Hamiltonian flow preserves the symplectic volume form ω^n — equivalently ℒ_X_H ω = 0, which is why entropy of a closed Hamiltonian system is conserved." },
  { q: "The Darboux theorem guarantees that symplectic manifolds locally look like:",
    opts: ["Flat Euclidean space","ℝ²ⁿ with the standard symplectic form Σ dqᵢ∧dpᵢ","A sphere","An arbitrary curved space"],
    ans: 1, exp: "Unlike Riemannian geometry, symplectic geometry has no local invariants (no curvature analogue) — all symplectic manifolds of the same dimension are locally equivalent (Darboux)." }
],

"30_spinor_calculus": [
  { q: "In 2-component spinor notation, a Weyl spinor ξᴬ transforms under:",
    opts: ["SO(3,1) directly","SL(2,ℂ), the double cover of the Lorentz group","U(1)","GL(4,ℝ)"],
    ans: 1, exp: "SL(2,ℂ) is the double (universal) cover of the proper orthochronous Lorentz group SO⁺(3,1); Weyl spinors are its fundamental representations." },
  { q: "The spinor ε_AB (Levi-Civita spinor) is used to:",
    opts: ["Define the metric","Raise and lower spinor indices","Define parallel transport","Compute traces"],
    ans: 1, exp: "ε_AB = −ε_BA (antisymmetric) raises/lowers spinor indices: ξᴬ = ε^AB ξ_B — it plays the role of the metric tensor in spinor space." },
  { q: "The Newman-Penrose formalism uses a null tetrad because:",
    opts: ["It simplifies the metric to Minkowski form","Gravitational radiation (peeling) is most naturally described in terms of null directions and spin-weight quantities","Spinors cannot be defined in a coordinate basis","It avoids complex numbers"],
    ans: 1, exp: "The NP formalism uses null frame (l,n,m,m̄) to decompose curvature into spin-weighted scalars (Weyl scalars Ψ₀…Ψ₄), naturally isolating gravitational wave degrees of freedom." }
],

"31_instantons": [
  { q: "An instanton is a solution to the Yang-Mills equations that:",
    opts: ["Exists at a single moment in time (hence 'instant')","Is a self-dual solution in Euclidean spacetime, mediating tunneling between vacua","Has infinite action","Only exists in flat spacetime"],
    ans: 1, exp: "Instantons (self-dual: F = ★F) are finite-action Euclidean solutions; in Minkowski time they appear as tunneling events between topologically distinct vacuum sectors, contributing to the θ-vacuum." },
  { q: "The BPST instanton in SU(2) gauge theory has topological charge (Pontryagin number) k =",
    opts: ["0","1","1/2","∞"],
    ans: 1, exp: "The basic BPST instanton has k = (1/16π²)∫Tr(F∧F) = 1 — it connects two vacua differing by one unit of winding number." },
  { q: "Instanton contributions to path integrals are non-perturbative because they scale as:",
    opts: ["g² (weak coupling)","1/g (linear)","e^(−1/g²) (exponentially small in coupling constant)","log g"],
    ans: 2, exp: "The instanton action S_inst ∝ 1/g² gives a factor e^(−S_inst) = e^(−8π²/g²) — this is invisible to all orders in perturbation theory (a non-perturbative effect)." }
],

"32_representation_theory": [
  { q: "A representation of a group G on a vector space V is:",
    opts: ["A subgroup of G","A homomorphism ρ: G → GL(V)","An isomorphism G → V","A bilinear form on V"],
    ans: 1, exp: "A representation is a group homomorphism ρ: G → GL(V): each group element acts linearly on V, with ρ(gh) = ρ(g)ρ(h) preserving structure." },
  { q: "The irreducible representations of SU(2) are labeled by spin j, where j is:",
    opts: ["Any real number","A non-negative integer or half-integer (0, ½, 1, 3/2, …)","A positive integer only","Any complex number"],
    ans: 1, exp: "SU(2) irreps have dimension 2j+1 for j = 0, ½, 1, 3/2, … Integer j gives ordinary tensors; half-integer j gives spinor representations." },
  { q: "Schur's lemma states that an intertwiner (equivariant map) between two irreducible representations is:",
    opts: ["Always an isomorphism","Either zero or an isomorphism (a scalar multiple of the identity if the irreps are equivalent)","Always zero","A projection"],
    ans: 1, exp: "Schur's lemma: any G-equivariant map between irreps is either 0 (different irreps) or a scalar times the identity (same irrep). This underpins the orthogonality of characters." }
],

"33_cohomology": [
  { q: "The de Rham cohomology group H^k(M) measures:",
    opts: ["The volume of M","Closed k-forms modulo exact k-forms — topological 'holes' of dimension k","The curvature of M","The number of vector fields on M"],
    ans: 1, exp: "H^k_dR(M) = ker(d: Ω^k→Ω^{k+1}) / im(d: Ω^{k-1}→Ω^k) — it detects topological obstructions to integrating forms globally, encoded by k-dimensional holes." },
  { q: "The Euler characteristic χ(M) is computed from Betti numbers bₖ = dim H^k as:",
    opts: ["Σ bₖ","Σ (−1)^k bₖ","max bₖ","b₀ − bₙ only"],
    ans: 1, exp: "χ(M) = Σₖ (−1)^k bₖ (alternating sum of Betti numbers). For a torus: b₀=b₂=1, b₁=2, so χ = 1−2+1 = 0." },
  { q: "Poincaré duality on an oriented closed n-manifold M states:",
    opts: ["H^k(M) ≅ H^k(M) (trivially)","H^k(M) ≅ H^{n−k}(M)","All cohomology groups vanish","H^k(M) ≅ π_k(M)"],
    ans: 1, exp: "Poincaré duality: H^k(M) ≅ H^{n−k}(M) — it pairs complementary-dimensional cycles via the cap product with the fundamental class [M]." }
],

"34_riemann_zeta": [
  { q: "The Riemann zeta function ζ(s) = Σ n^(−s) converges for Re(s) >",
    opts: ["0","½","1","2"],
    ans: 2, exp: "The Dirichlet series Σ n^(−s) converges absolutely for Re(s) > 1; the functional equation analytically continues ζ to all ℂ except s=1." },
  { q: "The Riemann Hypothesis conjectures that all non-trivial zeros of ζ(s) lie on:",
    opts: ["The real axis","The imaginary axis","The critical line Re(s) = ½","The unit circle |s| = 1"],
    ans: 2, exp: "The non-trivial zeros (other than the trivial negative even integers) are conjectured to all have Re(s) = ½ — the most famous unsolved problem in mathematics." },
  { q: "The prime-counting function π(x) is related to ζ by:",
    opts: ["π(x) = log x","π(x) ≈ li(x) (logarithmic integral), with error controlled by the zeros of ζ","π(x) = ζ(x)","π(x) = x/log x exactly"],
    ans: 1, exp: "The explicit formula for π(x) involves a sum over non-trivial zeros ρ of ζ: π(x) = li(x) − Σ_ρ li(x^ρ) + … — the Riemann Hypothesis bounds the error to O(√x log x)." }
],

"35_black_holes": [
  { q: "The event horizon of a black hole is:",
    opts: ["A physical surface you feel when crossing","A null hypersurface — the causal boundary beyond which light cannot escape","The singularity itself","The photon sphere"],
    ans: 1, exp: "The event horizon is a null hypersurface defined globally: it's the boundary of the causal past of future null infinity. Locally it is smooth — you'd feel nothing special crossing it." },
  { q: "Bekenstein-Hawking entropy of a black hole is proportional to:",
    opts: ["Its mass","Its volume","Its surface area A (specifically S = A/4ℓ²_P)","Its angular momentum"],
    ans: 2, exp: "S_BH = k_B A/(4ℓ²_P) — entropy is proportional to the horizon area, not volume, suggesting the holographic principle: 1 bit per Planck area." },
  { q: "Penrose's singularity theorem proves that singularities form whenever:",
    opts: ["Mass exceeds the Chandrasekhar limit","A trapped surface forms and energy conditions hold — geodesic incompleteness is inevitable","The cosmological constant is positive","Horizons merge"],
    ans: 1, exp: "Penrose (1965): given a trapped surface and the null energy condition, geodesics must be incomplete — a singularity forms. No need to assume symmetry." }
],

"36_riemann_surfaces": [
  { q: "A Riemann surface is:",
    opts: ["A 2D surface with a Riemannian metric","A 1-dimensional complex manifold (2D real manifold with complex structure)","A sphere in 3D Euclidean space","A real algebraic variety"],
    ans: 1, exp: "A Riemann surface is a complex 1-manifold: charts map to ℂ with holomorphic transition functions. Every orientable surface admits a Riemann surface structure." },
  { q: "The genus g of a Riemann surface determines its topology by Euler characteristic:",
    opts: ["χ = g","χ = 2g","χ = 2−2g","χ = g−2"],
    ans: 2, exp: "χ(Σ_g) = 2−2g: sphere (g=0) has χ=2, torus (g=1) has χ=0, genus-2 surface has χ=−2." },
  { q: "The uniformization theorem says every simply-connected Riemann surface is conformally equivalent to:",
    opts: ["A torus","One of: ℂ, D (unit disk), or ℂP¹ (Riemann sphere)","A surface of negative curvature only","The real line ℝ"],
    ans: 1, exp: "Uniformization: every simply-connected Riemann surface is biholomorphic to exactly one of ℂ (flat), D (hyperbolic), or ℂP¹ (spherical) — the three constant-curvature geometries." }
],

"37_maxwell": [
  { q: "Maxwell's equations in differential form language are:",
    opts: ["dF = 0 and d★F = J","∇·E = 0 and ∇×B = 0 only","F = dA only","d²A = 0"],
    ans: 0, exp: "F = dA → dF = d²A = 0 (Bianchi identity); d★F = J (sourced by the 4-current). This encodes all four Maxwell equations elegantly." },
  { q: "The electromagnetic field tensor F_{μν} in terms of potentials is:",
    opts: ["F = A","F_{μν} = ∂_μA_ν − ∂_νA_μ","F = ★A","F = grad A"],
    ans: 1, exp: "F_{μν} = ∂_μA_ν − ∂_νA_μ = (dA)_{μν} — this automatically satisfies dF=0 and encodes E and B as components." },
  { q: "Electromagnetic duality (F ↔ ★F) exchanges:",
    opts: ["Charge and mass","Electric and magnetic fields and charges","Left and right circular polarization","Space and time"],
    ans: 1, exp: "The duality rotation F→★F (Hodge dual) swaps E↔B and electric↔magnetic charges — the symmetry Dirac exploited to argue for magnetic monopoles." }
],

"38_standard_model": [
  { q: "The gauge group of the Standard Model is:",
    opts: ["U(1)","SU(2)×U(1)","SU(3)×SU(2)×U(1)","SU(5)"],
    ans: 2, exp: "The SM gauge group is SU(3)_C × SU(2)_L × U(1)_Y: SU(3) for strong force (QCD), SU(2)×U(1) for electroweak unified by Glashow-Salam-Weinberg." },
  { q: "Quarks are confined because the QCD potential between them:",
    opts: ["Decreases as 1/r² at large distances","Grows linearly with separation (string tension) at large r","Is purely Coulombic","Vanishes at the Planck scale"],
    ans: 1, exp: "Asymptotic freedom: QCD coupling grows at low energy; quark–antiquark potential ~ σr at large r (string tension σ ~ 1 GeV/fm), making isolation require infinite energy." },
  { q: "CP violation in the Standard Model is parameterized by:",
    opts: ["The Weinberg angle","The CKM matrix phase δ (or the Jarlskog invariant)","The strong coupling αs","The Higgs quartic coupling λ"],
    ans: 1, exp: "CP violation in quark mixing is encoded in the complex phase of the 3×3 CKM matrix (Cabibbo-Kobayashi-Maskawa), specifically the Jarlskog invariant J ≈ 3×10⁻⁵." }
],

"39_quantum_field_theory": [
  { q: "Normal ordering :φ²: differs from φ² by:",
    opts: ["A sign flip","An infinite constant (the vacuum expectation value ⟨φ²⟩)","A factor of ℏ","A delta function"],
    ans: 1, exp: "Normal ordering subtracts the UV-divergent vacuum bubble ⟨0|φ²|0⟩ = ∞, placing all creation operators to the left. This removes the vacuum energy divergence." },
  { q: "The LSZ reduction formula connects:",
    opts: ["Lagrangian parameters to physical masses","S-matrix elements (scattering amplitudes) to time-ordered correlation functions","Path integrals to partition functions","Renormalization group to beta functions"],
    ans: 1, exp: "LSZ: ⟨out|S|in⟩ = (residue of poles) × ⟨Ω|T{φ…φ}|Ω⟩ — it extracts physical S-matrix elements from the full interacting Green's functions." },
  { q: "The Wilsonian renormalization group integrates out modes with energy above a cutoff Λ to give:",
    opts: ["An exact result independent of Λ","An effective field theory with running couplings valid below Λ","A theory with fewer degrees of freedom and the same UV divergences","A non-local action"],
    ans: 1, exp: "Wilson's RG successively integrates out high-energy modes, producing effective Lagrangians with coupling constants that 'run' with scale — making QFT UV divergences conceptually natural." }
],

"40_chaos": [
  { q: "The Lyapunov exponent λ of a chaotic system quantifies:",
    opts: ["The fractal dimension of the attractor","The rate of exponential divergence of nearby trajectories","The period of the motion","The energy dissipation rate"],
    ans: 1, exp: "λ = lim_{t→∞} (1/t) ln|δx(t)/δx(0)| — positive λ means nearby initial conditions diverge exponentially, the hallmark of chaos and 'butterfly effect'." },
  { q: "A strange attractor has:",
    opts: ["Integer fractal dimension","Non-integer (fractal) dimension and sensitive dependence on initial conditions","A stable fixed point at its center","Periodic orbits only"],
    ans: 1, exp: "Strange attractors (e.g., Lorenz attractor) have fractal dimension d ∈ (2,3) and exponential sensitivity — they are the long-time fate of dissipative chaotic systems." },
  { q: "The KAM theorem (Kolmogorov-Arnold-Moser) states that in near-integrable Hamiltonian systems:",
    opts: ["All tori are destroyed by perturbation","Most invariant tori survive small perturbations (those with sufficiently irrational frequency ratios)","Chaos is suppressed entirely","Only resonant tori survive"],
    ans: 1, exp: "KAM: tori with frequencies satisfying a Diophantine condition (badly approximable by rationals) survive small perturbations; resonant tori break into chaos, creating the characteristic Poincaré section structure." }
],

"41_homotopy": [
  { q: "The fundamental group π₁(S¹) of the circle is:",
    opts: ["Trivial {e}","ℤ (the integers)","ℤ₂","The free group on 2 generators"],
    ans: 1, exp: "Loops in S¹ are classified by how many times they wind around; the winding number is an integer, so π₁(S¹) = ℤ." },
  { q: "Two spaces are homotopy equivalent if:",
    opts: ["They are homeomorphic","There exist continuous maps f: X→Y and g: Y→X such that g∘f ≃ id_X and f∘g ≃ id_Y","They have the same dimension","They are both compact"],
    ans: 1, exp: "Homotopy equivalence is weaker than homeomorphism: X ~ Y if continuous maps exist that compose to maps homotopic (continuously deformable) to the identity." },
  { q: "The Hopf fibration S³ → S² has fiber:",
    opts: ["S⁰","S¹","S²","ℝ"],
    ans: 1, exp: "The Hopf fibration (1931) fibers S³ over S² with fiber S¹: each point of S² has a circle above it in S³. It's the archetypal non-trivial fiber bundle, with Hopf invariant 1." }
],

"42_clifford_algebras": [
  { q: "The Clifford algebra Cl(p,q) is generated by basis vectors eᵢ satisfying:",
    opts: ["{eᵢ, eⱼ} = δᵢⱼ","eᵢeⱼ + eⱼeᵢ = 2ηᵢⱼ (where η encodes the signature)","[eᵢ, eⱼ] = εᵢⱼₖ eₖ","eᵢ² = 1 always"],
    ans: 1, exp: "{eᵢ, eⱼ} = 2ηᵢⱼ defines the Clifford algebra — generalizing complex numbers (Cl(0,1)) and quaternions (Cl(0,2)) to any metric signature." },
  { q: "Spinors in d dimensions are representations of the spin group Spin(d), which is related to Clifford algebras because:",
    opts: ["Spinors are the Clifford algebra itself","The even subalgebra Cl⁰(d) contains the spinor representation","Clifford algebras have no relation to spinors","Spinors are the dual of the Clifford algebra"],
    ans: 1, exp: "Spin(d) embeds in the even subalgebra Cl⁰(d); spinors are the minimal faithful representation of Cl(d), explaining why Dirac matrices are 4×4 in 4D." },
  { q: "The product of all n basis vectors e₁e₂⋯eₙ in Cl(n) is called the pseudoscalar. In Cl(3,0) (3D Euclidean) it satisfies:",
    opts: ["(e₁e₂e₃)² = +1","(e₁e₂e₃)² = −1","(e₁e₂e₃)² = 0","e₁e₂e₃ = 1"],
    ans: 1, exp: "In Cl(3,0): (e₁e₂e₃)² = e₁e₂e₃e₁e₂e₃ = −1 (after anticommuting), so the pseudoscalar i = e₁e₂e₃ behaves like the imaginary unit i — linking Clifford algebra to complex numbers." }
],

"43_conformal_field_theory": [
  { q: "A primary operator O of weight (h, h̄) in 2D CFT transforms under scaling z→λz as:",
    opts: ["O → O (unchanged)","O → λ^h λ̄^h̄ O","O → λ O","O → O/λ"],
    ans: 1, exp: "Primary operators transform covariantly: O(λz, λ̄z̄) = λ^{−h}λ̄^{−h̄} O(z,z̄) — the conformal weight (h,h̄) encodes the scaling dimension Δ=h+h̄ and spin s=h−h̄." },
  { q: "The central charge c in 2D CFT appears in the operator product expansion of the stress-energy tensor as:",
    opts: ["T(z)T(w) ~ c/(z−w)⁴ + …","T(z)T(w) ~ c/2/(z−w)⁴ + 2T(w)/(z−w)² + ∂T(w)/(z−w) + …","T(z)T(w) ~ 0","T(z)T(w) ~ c·δ(z−w)"],
    ans: 1, exp: "The TT OPE has a c/2(z−w)⁴ term measuring the 'quantum anomaly'; c=1 for a free boson, c=1/2 for a free Majorana fermion. It governs the Virasoro algebra." },
  { q: "The AdS/CFT correspondence (Maldacena duality) equates:",
    opts: ["QED in 4D with string theory in 10D","Type IIB string theory on AdS₅×S⁵ with 𝒩=4 SU(N) super-Yang-Mills in 4D","General relativity with Newtonian gravity","A 2D CFT with 3D quantum gravity (only)"],
    ans: 1, exp: "Maldacena's 1997 duality: Type IIB on AdS₅×S⁵ (N units of 5-form flux) ≅ 4D 𝒩=4 SU(N) SYM — the most precise realization of holography." }
],

"44_twistors": [
  { q: "In twistor string theory, MHV (maximally helicity violating) gluon amplitudes are computed from:",
    opts: ["Feynman diagrams in momentum space","Holomorphic curves in twistor space (Witten's 2003 insight)","Lattice gauge theory","S-matrix bootstrap"],
    ans: 1, exp: "Witten showed gluon amplitudes localize on curves in ℂP³ twistor space; MHV amplitudes come from degree-1 lines, NMHV from degree-2, etc. — exposing hidden simplicity." },
  { q: "The Penrose-Ward transform relates solutions to the self-dual Yang-Mills equations on spacetime to:",
    opts: ["Riemannian metrics on twistor space","Holomorphic bundles on twistor space","Harmonic maps from twistor space","Real structures on ℂP¹"],
    ans: 1, exp: "Self-dual connections on spacetime ↔ holomorphic vector bundles on twistor space ℂP³ — the Ward correspondence, which generated huge interest in integrable systems." },
  { q: "Amplituhedron geometry, related to twistor theory, encodes scattering amplitudes as:",
    opts: ["Volumes of polytopes in momentum twistor space","Eigenvalues of the S-matrix","Residues of loop integrals directly","Winding numbers in phase space"],
    ans: 0, exp: "Arkani-Hamed & Trnka's amplituhedron: tree-level (and some loop) amplitudes in 𝒩=4 SYM equal volumes of a geometric object in momentum-twistor Grassmannian space — locality and unitarity are derived, not assumed." }
],

"45_bell_theorem": [
  { q: "Bell's theorem proves that:",
    opts: ["Quantum mechanics is incomplete","No local hidden-variable theory can reproduce all predictions of quantum mechanics","Entanglement allows faster-than-light communication","Measurement collapses the wavefunction"],
    ans: 1, exp: "Bell (1964) derived inequalities that any local realistic (hidden-variable) theory must satisfy. QM violates them, as confirmed by Aspect (1982) and many subsequent experiments." },
  { q: "The CHSH inequality is violated in quantum mechanics up to a maximum value of:",
    opts: ["2","2√2 (Tsirelson bound)","4","π"],
    ans: 1, exp: "Classical theories: |⟨CHSH⟩| ≤ 2. QM reaches 2√2 ≈ 2.828 (Tsirelson bound) with maximally entangled states — definitively ruling out local realism when observed experimentally." },
  { q: "The 2022 Nobel Prize in Physics was awarded for experimental work on:",
    opts: ["The Higgs boson","Gravitational waves","Bell inequality violations and entanglement (Aspect, Clauser, Zeilinger)","Neutrino oscillations"],
    ans: 2, exp: "Clauser, Aspect, and Zeilinger shared the 2022 Nobel Prize for pioneering experiments establishing Bell inequality violations and proving the reality of quantum entanglement." }
],

"46_gravitational_waves": [
  { q: "Gravitational waves are ripples in spacetime produced by:",
    opts: ["Any accelerating mass","Asymmetrically accelerating masses (quadrupole or higher moment changes)","Static gravitational fields","Spherically symmetric pulsations"],
    ans: 1, exp: "By Birkhoff's theorem, spherically symmetric motion produces no gravitational radiation. Waves require changing quadrupole (or higher) mass moments — e.g., binary inspiral." },
  { q: "LIGO detects gravitational waves using:",
    opts: ["A radio telescope array","Michelson interferometers sensitive to arm-length changes of ~10⁻¹⁸ m (smaller than a proton)","A Weber bar resonator","A pulsar timing array"],
    ans: 1, exp: "LIGO's L-shaped interferometers measure differential arm-length changes δL/L ~ 10⁻²¹ — the passing wave alternately stretches and squeezes perpendicular directions." },
  { q: "The first gravitational wave detection (GW150914) confirmed the merger of two:",
    opts: ["Neutron stars","Neutron star and black hole","Black holes of ~29 and ~36 solar masses","White dwarfs"],
    ans: 2, exp: "GW150914 (Sept. 14, 2015, announced Feb. 2016): two black holes of 29 M☉ and 36 M☉ merged at ~1.3 billion light-years, radiant power briefly exceeding all visible stars combined." }
],

"47_quantum_optics": [
  { q: "A coherent state |α⟩ (laser light) is:",
    opts: ["A Fock (number) state","An eigenstate of the photon annihilation operator: â|α⟩ = α|α⟩","A thermal state","A superposition of exactly two Fock states"],
    ans: 1, exp: "Coherent states are eigenstates of â with eigenvalue α ∈ ℂ; they have Poissonian photon statistics and minimum uncertainty — the 'most classical' quantum states of light." },
  { q: "Hong-Ou-Mandel (HOM) interference occurs when two identical photons enter a 50:50 beam splitter: they:",
    opts: ["Always exit from different ports","Always exit from the same port (bunch together)","Exit independently with 50% probability each","Annihilate each other"],
    ans: 1, exp: "Two indistinguishable photons entering both input ports of a 50:50 BS always exit together (both in one output port) — bosonic bunching due to quantum interference of amplitudes." },
  { q: "Squeezed light has reduced quantum noise in one quadrature at the cost of:",
    opts: ["Reduced total energy","Increased noise in the conjugate quadrature (Heisenberg trade-off)","Increased photon number","Reduced coherence time"],
    ans: 1, exp: "Squeezing redistributes vacuum fluctuations: ΔX₁ < ½ but ΔX₂ ≥ 1/(4ΔX₁) > ½, keeping ΔX₁ΔX₂ ≥ ¼. LIGO uses squeezed light to beat the standard quantum limit." }
],

"48_topological_matter": [
  { q: "The quantum Hall effect is topological because the Hall conductance σ_xy = νe²/h is:",
    opts: ["Sensitive to sample geometry","Quantized in integer or fractional multiples of e²/h, protected by topology (Chern number)","Temperature-dependent","Due to classical drift"],
    ans: 1, exp: "The TKNN invariant (Chern number) of filled Bloch bands counts the topological winding of the Berry phase, directly giving σ_xy = Ce²/h — robust against disorder because topology is discrete." },
  { q: "Topological insulators are special because:",
    opts: ["They have zero band gap","They are insulating in the bulk but host gapless conducting surface states protected by time-reversal symmetry","They superconduct at room temperature","They have fractional electron charge"],
    ans: 1, exp: "Topological insulators have a ℤ₂ topological invariant (Kane-Mele). The bulk gap coexists with topologically protected Dirac cone surface states that cannot be gapped without breaking time-reversal symmetry." },
  { q: "Anyons in 2D topological phases are exotic because:",
    opts: ["They are bosons with fractional mass","They have fractional exchange statistics — braiding two anyons multiplies the state by e^(iθ) for any θ, not just 0 or π","They travel faster than light","They violate charge conservation"],
    ans: 1, exp: "In 2+1D, particle exchange is topologically a braid (not a permutation); anyons accumulate a phase e^(iθ) for any θ under exchange — neither bosonic (θ=0) nor fermionic (θ=π)." }
],

"49_quantum_networks": [
  { q: "Quantum key distribution (QKD) achieves information-theoretic security because:",
    opts: ["It uses very long keys","Any eavesdropping on quantum states disturbs them, revealing the spy","It relies on computational hardness","It uses entanglement to encrypt directly"],
    ans: 1, exp: "The no-cloning theorem prevents copying an unknown quantum state; any measurement by Eve disturbs the state, introducing detectable errors — security follows from quantum mechanics, not algorithmic hardness." },
  { q: "Quantum teleportation transmits a qubit state using:",
    opts: ["Faster-than-light channels","One entangled pair + two classical bits of communication","Pure entanglement, no classical channel","Only quantum error correction"],
    ans: 1, exp: "Bennett et al. (1993): teleportation uses a shared Bell pair plus 2 classical bits. No information travels faster than light; the 2 classical bits are essential to complete the protocol." },
  { q: "A quantum repeater is needed for long-distance quantum networks because:",
    opts: ["Photons are too slow","Quantum signals cannot be amplified (no-cloning) but errors can be corrected using entanglement purification and swapping","Classical repeaters suffice","Fiber optic dispersion is quantum"],
    ans: 1, exp: "Classical optical amplifiers clone light (forbidden for qubits). Quantum repeaters instead use entanglement swapping + purification to extend entanglement over long distances without copying states." }
],

"50_semiconductor_quantum": [
  { q: "A quantum dot confines electrons in:",
    opts: ["One dimension only","All three dimensions, creating discrete atomic-like energy levels","A 2D sheet","A 1D wire"],
    ans: 1, exp: "Quantum dots are 'artificial atoms' — electrons are confined in all 3 directions (nanometer scale), giving discrete energy levels tunable by size and shape." },
  { q: "The Josephson effect in a superconductor-insulator-superconductor junction produces:",
    opts: ["Normal tunneling current only","A supercurrent flowing at zero voltage (DC Josephson effect)","A voltage proportional to temperature","Magnetic flux quantization only"],
    ans: 1, exp: "DC Josephson: a phase difference between two superconductors drives a dissipationless current I = I_c sin(Δφ) at zero voltage — a purely quantum tunneling of Cooper pairs." },
  { q: "In a 2D electron gas at high magnetic field, Landau levels are:",
    opts: ["Continuous energy bands","Discrete, equally-spaced energy levels En = ℏω_c(n+½)","Broadened into a single level","Non-degenerate"],
    ans: 1, exp: "A magnetic field quantizes in-plane kinetic energy into Landau levels En = ℏω_c(n+½) where ω_c = eB/m; each level is highly degenerate (one state per flux quantum h/e)." }
],

"51_photonics_fiber": [
  { q: "Total internal reflection in an optical fiber occurs when light hits the cladding at angles:",
    opts: ["Greater than the Brewster angle","Greater than the critical angle θ_c = arcsin(n₂/n₁)","Less than the critical angle","Exactly 45°"],
    ans: 1, exp: "For n₁ > n₂ (core denser than cladding), light totally internally reflects for incidence angles θ > θ_c = arcsin(n₂/n₁) — the guiding mechanism in optical fibers." },
  { q: "Photonic crystals control light propagation by:",
    opts: ["Absorption","Periodic refractive index variation creating a photonic band gap (analogous to electronic band gaps)","Magnetic fields","Nonlinear polarization only"],
    ans: 1, exp: "Photonic crystals are periodic dielectric structures; the periodicity Bragg-scatters light, creating photonic band gaps where certain frequencies cannot propagate — the optical analogue of semiconductor electronics." },
  { q: "Solitons in optical fibers maintain their shape because:",
    opts: ["Dispersion and nonlinearity exactly cancel each other","The fiber is lossless","They travel at the group velocity","They are immune to all noise"],
    ans: 0, exp: "A soliton balances anomalous group-velocity dispersion (which broadens pulses) against self-phase modulation (Kerr nonlinearity, which narrows them) — the two effects precisely cancel for the right pulse shape." }
],

"52_category_theory": [
  { q: "A functor F: C → D is a map between categories that:",
    opts: ["Only maps objects","Maps objects and morphisms, preserving composition and identities","Reverses all morphisms","Maps morphisms to objects"],
    ans: 1, exp: "A functor maps objects to objects and morphisms to morphisms while preserving F(g∘f) = F(g)∘F(f) and F(id_X) = id_{F(X)} — a structure-preserving map between categories." },
  { q: "A natural transformation η: F ⇒ G between two functors assigns to each object X a morphism η_X: F(X) → G(X) such that:",
    opts: ["η_X is an isomorphism always","The naturality square commutes: G(f)∘η_X = η_Y∘F(f) for every f: X→Y","η is the identity on objects","η_X depends only on the morphisms of C"],
    ans: 1, exp: "Naturality: the diagram F(X)→G(X)→G(Y) equals F(X)→F(Y)→G(Y) — morphisms transform consistently between the two functors. Mac Lane: 'categories to define functors, functors to define natural transformations.'" },
  { q: "An adjunction F ⊣ G (F left adjoint to G) is characterized by a natural bijection:",
    opts: ["Hom(FA, B) ≅ Hom(A, GB) for all A in C, B in D","F∘G = id","G = F⁻¹","Hom(A, B) ≅ Hom(FA, GB)"],
    ans: 0, exp: "F ⊣ G iff Hom_D(FA, B) ≅ Hom_C(A, GB) naturally — adjunctions unify free/forgetful pairs, products/exponentials, limits/colimits, quantifiers, and much more across mathematics." }
],

"53_attosecond": [
  { q: "The Keldysh parameter γ = √(Ip/2Up) distinguishes ionisation regimes. γ ≪ 1 indicates:",
    opts: ["Multiphoton ionisation","Tunnel ionisation","Above-threshold ionisation","Photoelectric effect"],
    ans: 1, exp: "γ ≪ 1 means the ponderomotive energy Up dominates — the laser field suppresses the Coulomb barrier to a narrow tunnel, and the electron exits by quantum tunneling: the tunnel ionisation regime that enables HHG." },
  { q: "The HHG cutoff photon energy is:",
    opts: ["Ip only","Ip + 3.17 Up","2 Up","3.17 Up only"],
    ans: 1, exp: "Electrons returning with maximum classical kinetic energy 3.17 Up upon recollision emit ℏω_cutoff = Ip + 3.17 Up, where Ip is the re-ionisation energy and Up = e²E₀²/4mω² is the ponderomotive energy." },
  { q: "HHG produces a comb of only odd harmonics because:",
    opts: ["The laser is circularly polarised","Inversion symmetry makes every half-cycle emit an identical burst shifted by π, causing destructive interference for even harmonics","Photon conservation","The detector is frequency-selective"],
    ans: 1, exp: "Gases have inversion symmetry: successive half-cycles emit identical bursts with a π phase shift. Superposition destroys even harmonics and reinforces odd ones — hence the characteristic odd-harmonic XUV spectrum." },
  { q: "The 2023 Nobel Prize in Physics was awarded for:",
    opts: ["LIGO gravitational wave detection","Discovery of neutrino mass","Attosecond pulse generation enabling study of electron dynamics","Topological phase transitions"],
    ans: 2, exp: "L'Huillier, Agostini, and Krausz received the 2023 Nobel for developing experimental tools to generate attosecond pulses of light, allowing real-time imaging of electron motion in atoms and molecules." }
],

"54_trapped_ions": [
  { q: "A Paul trap confines ions using:",
    opts: ["Static magnetic fields","Oscillating RF quadrupole fields producing stable Mathieu-equation trajectories","Laser cooling alone","A static electric saddle point"],
    ans: 1, exp: "Earnshaw's theorem forbids 3D trapping with static fields. An oscillating RF quadrupole creates a time-averaged pseudopotential well via Mathieu stability — ions execute stable secular oscillations superimposed on micromotion at the drive frequency." },
  { q: "Vacuum Rabi splitting 2g in the Jaynes-Cummings model occurs because:",
    opts: ["Two photon modes interfere","Coupling g mixes |e,0⟩ and |g,1⟩ into dressed states separated by 2g even with zero photons in the cavity","The cavity has two normal modes","The rotating wave approximation breaks down"],
    ans: 1, exp: "The coupling H = ℏg(a†σ₋ + aσ₊) hybridises |excited atom, 0 photons⟩ with |ground atom, 1 photon⟩, splitting them by 2g — the vacuum Rabi splitting, a direct signature of quantised light-matter coupling." },
  { q: "Negative values of the Wigner function W(x,p) indicate:",
    opts: ["The state is unphysical","Non-classical quantum behavior — no classical probability distribution can produce W < 0","A measurement error","The state is mixed"],
    ans: 1, exp: "The Wigner function is a quasi-probability; W(x,p) < 0 has no classical analogue and is a definitive signature of quantum non-classicality. Schrödinger cat states show striking negative interference fringes between their two coherent-state lobes." },
  { q: "The 2012 Nobel Prize in Physics (Wineland & Haroche) recognised:",
    opts: ["Higgs boson discovery","Neutrino mass","Experimental methods to measure and manipulate individual quantum systems without destroying them","Giant magnetoresistance"],
    ans: 2, exp: "Wineland (trapped ions) and Haroche (cavity QED) independently demonstrated non-destructive measurement and manipulation of single quantum systems — foundational for quantum computing, quantum metrology, and tests of quantum mechanics." }
],

"55_neutrino_oscillations": [
  { q: "Neutrino oscillation probability P(να→νβ) depends on L/E because:",
    opts: ["Neutrinos travel slower than light","Phase differences between mass eigenstates accumulate as Δm²L/4E, producing quantum interference","Neutrinos decay","Mixing angles change with energy"],
    ans: 1, exp: "Mass eigenstates acquire phases e^{−im_i²L/2E}. The phase difference Δm²L/4E (in natural units) causes the flavour superposition to oscillate. When Δm²L/4E ≈ π/2, maximum flavour conversion occurs." },
  { q: "Super-Kamiokande proved atmospheric neutrino oscillation in 1998 by observing:",
    opts: ["A total flux deficit","An angular asymmetry: upward-going νμ (L~13,000 km) depleted relative to downward-going (L~15 km)","Direct νe→νμ conversion","A CP asymmetry"],
    ans: 1, exp: "The L/E dependence was directly seen: νμ produced overhead had short baselines and arrived unoscillated; νμ from below had traversed the entire Earth (~13,000 km) and ~50% had oscillated to ντ — conclusive evidence for neutrino mass." },
  { q: "The SNO experiment resolved the solar neutrino problem by:",
    opts: ["Detecting only charged-current reactions","Comparing CC (νe only) and NC (all flavours) reaction rates, proving total solar ν flux matches SSM while νe fraction is reduced","Building a heavier-water tank","Measuring neutrino spin precession"],
    ans: 1, exp: "SNO's heavy water allowed both CC (sensitive only to νe) and NC (sensitive to all flavours). The NC rate matched the Standard Solar Model prediction; the CC rate was ~1/3 of it — proving 2/3 of solar νe had converted to νμ,τ by the MSW effect." },
  { q: "A non-zero CP-violating phase δ in the PMNS matrix implies:",
    opts: ["Neutrino masses are equal","P(να→νβ) ≠ P(ν̄α→ν̄β) — neutrinos and antineutrinos oscillate differently","Neutrinos are Majorana","Lepton number is conserved exactly"],
    ans: 1, exp: "The CP phase δ breaks the symmetry between neutrino and antineutrino oscillation probabilities. If δ ≠ 0, leptonic CP violation exists — potentially linked via leptogenesis to the observed matter-antimatter asymmetry of the universe." }
],

"56_muon_g2": [
  { q: "Why is the muon's anomalous magnetic moment a_μ more sensitive to BSM physics than the electron's?",
    opts: ["The muon has a larger charge","Virtual loop corrections from heavy particles scale as (m/M)², so the muon is ~(m_μ/m_e)² ≈ 43,000 times more sensitive","The muon is unstable","The muon has spin 3/2"],
    ans: 1, exp: "Loop contributions from new particles of mass M scale as m²/M². With m_μ ≈ 207 m_e, the muon's sensitivity is (207)² ≈ 43,000× greater — making a_μ an ideal precision probe of particles too heavy to produce directly at colliders." },
  { q: "In the Fermilab E989 storage ring, a_μ is extracted from:",
    opts: ["The cyclotron period of muons","The anomalous precession frequency ω_a = (g−2)eB/2m, measured via the oscillating positron count rate from μ→eνν̄ decay","The muon lifetime","The muon beam polarisation loss"],
    ans: 1, exp: "The spin precesses at ω_S and the orbit at ω_C; their difference ω_a = ω_S−ω_C = a_μ eB/m is measured. Positrons from parity-violating muon decay are emitted preferentially along the spin direction, so ω_a modulates the detected positron rate." },
  { q: "The hadronic vacuum polarisation (HVP) contribution to a_μ is controversial because:",
    opts: ["It is negligible","BMW lattice QCD (2020) gives an HVP inconsistent with data-driven dispersive estimates, with the two approaches differing by ~2.5σ","It has been measured directly","It requires renormalization"],
    ans: 1, exp: "The data-driven approach uses e⁺e⁻→hadrons cross-sections to compute HVP and gives ~5σ tension with experiment; BMW lattice QCD gives an HVP that reduces tension to ~1.5σ. Resolving this theoretical puzzle is now as urgent as the experimental measurement." },
  { q: "The current Fermilab+BNL world-average tension between a_μ(exp) and a_μ(SM-dispersive) is approximately:",
    opts: ["<1σ","~2σ","~5σ — strong hint of BSM physics",">10σ"],
    ans: 2, exp: "The combined world average gives a discrepancy of Δa_μ ≈ 251(59)×10⁻¹¹ with the dispersive SM — approximately 4.2–5σ. This is a strong hint of new physics but stops short of definitive discovery, partly due to unresolved HVP theory uncertainty." }
],

"57_nuclear_fusion": [
  { q: "The Lawson criterion triple product nτT for DT ignition requires approximately:",
    opts: ["10¹⁸ m⁻³·s·keV","3×10²¹ m⁻³·s·keV at T≈10–20 keV","10²⁵ m⁻³·s·keV","10¹⁵ m⁻³·s·keV"],
    ans: 1, exp: "Alpha-particle self-heating must exceed all losses. For DT at its cross-section peak (~65 keV lab / ~10–20 keV plasma), nτT ≳ 3×10²¹ m⁻³ s keV is required — the triple product goal for every fusion device." },
  { q: "Rayleigh-Taylor instability in ICF implosions is harmful because:",
    opts: ["It reflects laser light","Cold ablator jets penetrate the hot spot during shell deceleration, quenching ignition","It increases compression","It slows the shock"],
    ans: 1, exp: "As the dense shell decelerates against lighter hot-spot gas, the RT instability grows. Fingers of cold, dense ablator penetrate the hot spot, diluting it below ignition temperature. Controlling RT seeding is the central engineering challenge in achieving fusion gain." },
  { q: "What does Q > 1 mean in the context of the NIF December 2022 experiment?",
    opts: ["Total electrical output > input","Fusion energy out > UV laser energy delivered to the capsule","Plasma temperature > 100 keV","Confinement time > 1 second"],
    ans: 1, exp: "Q = E_fusion / E_laser. N221205 produced 3.15 MJ from 2.05 MJ of laser energy on the capsule (Q≈1.54) — the first time fusion yield exceeded input energy at the capsule level. Wall-plug Q remains far below 1; commercial fusion requires Q >> 10." },
  { q: "Proton-boron (p-B¹¹) fusion is attractive but challenging because:",
    opts: ["It is aneutronic (no neutrons) but requires plasma temperatures ~10× higher than DT","It produces more energy per reaction than DT","It requires less confinement","The cross-section peaks at ~10 keV"],
    ans: 0, exp: "p + B¹¹ → 3 He⁴ produces no neutrons (aneutronic — no structural activation, simpler shielding), but its cross-section peaks near ~300 keV plasma temperature, ~30× higher than DT's optimum. No current or planned confinement technology can reach these conditions." }
],

"58_dark_energy": [
  { q: "Type Ia supernovae at z≈0.5 appearing fainter than expected in a matter-only universe implies:",
    opts: ["They are younger","They are further away — the universe is accelerating, driven by dark energy with negative pressure","The Hubble constant is smaller","Dust extinction"],
    ans: 1, exp: "If the universe were decelerating (matter-only), distant SNe would be closer (brighter) than the empty-universe prediction. The 1998 discovery that SNe Ia are ~25% further away implies acceleration, requiring a negative-pressure dark energy component." },
  { q: "The equation of state w = −1 for dark energy corresponds to:",
    opts: ["Pressureless matter","Radiation (w=1/3)","A cosmological constant Λ — energy density constant in time","A scalar field (quintessence)"],
    ans: 2, exp: "w = p/ρc² = −1 gives p = −ρc² — negative pressure. The energy density stays constant as the universe expands (neither dilutes like matter nor redshifts like radiation). This is Einstein's cosmological constant Λ, physically equivalent to vacuum energy." },
  { q: "The Hubble tension (~5σ) is the discrepancy between:",
    opts: ["Two dark energy equation-of-state measurements","H₀ from CMB/BAO (~67 km/s/Mpc) vs Cepheid+SN Ia distance ladder (~73 km/s/Mpc)","Ω_m and Ω_Λ","The CMB temperature and predictions"],
    ans: 1, exp: "Planck (2018): H₀ = 67.4±0.5; SH0ES (2022): H₀ = 73.0±1.0 km/s/Mpc. Both measurements are precise and internally consistent, but mutually inconsistent at ~5σ — suggesting either unknown systematics or physics beyond ΛCDM (early dark energy, extra neutrinos, etc.)." },
  { q: "The inflection of the ΛCDM scale factor a(t) — when acceleration begins — occurs at:",
    opts: ["a = 1 (today)","a_infl = (Ω_m/2Ω_Λ)^(1/3), around z≈0.64 for standard parameters","When T = 0","When Ω_m = 1"],
    ans: 1, exp: "The deceleration parameter q = 0 when ρ_m = 2ρ_Λ, giving a³_infl = Ω_m/(2Ω_Λ). For Ω_m=0.3, Ω_Λ=0.7: a_infl ≈ 0.61, i.e., z_infl ≈ 0.64, approximately 7 billion years ago — the universe was decelerating before this and has been accelerating since." }
],

"59_spin_glasses": [
  { q: "A spin glass differs from a ferromagnet because:",
    opts: ["It has no long-range order at any temperature","Random ±Jij couplings create frustration — spins freeze into a disordered configuration below Tg without a net magnetisation","It has a higher Curie temperature","It is always paramagnetic"],
    ans: 1, exp: "Random competing interactions (ferromagnetic and antiferromagnetic) frustrate the system — no configuration satisfies all bonds simultaneously. Below Tg, spins freeze into a random non-ergodic state with q_EA > 0 but zero net magnetisation. This is qualitatively different from any ordered phase." },
  { q: "The Edwards-Anderson order parameter q_EA = [⟨Sᵢ⟩²_t]_J is non-zero below Tg because:",
    opts: ["The net magnetisation is non-zero","Individual spins freeze in random but fixed directions: ⟨Sᵢ⟩_t ≠ 0 for each i, even though the spatial average vanishes","The Hamiltonian breaks time-reversal symmetry","The specific heat diverges"],
    ans: 1, exp: "In the spin glass phase, ergodicity is broken: each spin is trapped near one orientation for exponentially long times. ⟨Sᵢ⟩_t ≠ 0 for every site, though the directions are random so ∑ᵢ⟨Sᵢ⟩_t ≈ 0. q_EA measures the variance of these frozen local moments." },
  { q: "Parisi's full RSB gives a P(q) distribution that:",
    opts: ["Is a single delta function at q_EA","Is continuous between −q_EA and q_EA (plus delta peaks at ±q_EA), reflecting infinitely many pure states at different overlaps","Is flat across all q","Is zero for q < 0"],
    ans: 1, exp: "Full RSB → the Parisi order parameter function q(x) on [0,1] is continuous, producing a continuous spectral distribution P(q) between −q_EA and q_EA. This contrasts sharply with the ferromagnet (single δ(q−m²)) and 1-RSB (δ(q) plus δ(q−q₁)) solutions." },
  { q: "Giorgio Parisi received the 2021 Nobel Prize for:",
    opts: ["Discovering the Higgs mechanism","Climate modelling","The replica symmetry breaking solution of spin glasses, revealing complex systems with infinitely many metastable states","Renormalization group methods"],
    ans: 2, exp: "Parisi's RSB solution of the SK model (1979–83) was the founding contribution to the physics of complex disordered systems. The ultrametric landscape it revealed has since appeared in neural networks, combinatorial optimization, protein folding, and evolutionary dynamics." }
],

"60_penrose_singularity": [
  { q: "Penrose's 1965 singularity theorem requires the existence of a trapped surface because:",
    opts: ["All massive stars rotate","A trapped surface (θ<0 for both null congruences) combined with the NEC forces null geodesic incompleteness — without it the proof fails","Spherical symmetry guarantees singularities","The Schwarzschild solution has one"],
    ans: 1, exp: "The trapped surface is the key topological input. It forces the Raychaudhuri equation to drive θ→−∞ in finite affine parameter under the NEC. Without a trapped surface the focusing argument cannot guarantee incompleteness." },
  { q: "The Raychaudhuri equation dθ/dλ ≤ −θ²/2 (under NEC, ω=0) implies a caustic forms within affine parameter:",
    opts: ["λ = ∞","λ ≤ 2/|θ₀| if θ₀ < 0","λ = 1/σ²","λ = H⁻¹"],
    ans: 1, exp: "If θ(0) = θ₀ < 0, then dθ/dλ ≤ −θ²/2 means θ reaches −∞ no later than λ = 2/|θ₀|. This caustic corresponds to neighboring geodesics crossing — the congruence develops a singularity, which Penrose's theorem identifies with spacetime incompleteness." },
  { q: "A trapped surface inside a Schwarzschild black hole is the set of points where:",
    opts: ["Only ingoing light converges","Both ingoing AND outgoing null rays converge (θ_in < 0 and θ_out < 0) — the surface is trapped in all null directions","The metric is singular","The Ricci scalar diverges"],
    ans: 1, exp: "For a normal 2-sphere in flat space, ingoing rays converge (θ<0) and outgoing rays diverge (θ>0). Inside the Schwarzschild horizon, even outgoing null rays converge — both families of light rays are drawn toward the singularity. This is the defining property of a trapped surface." },
  { q: "The singularity in the Penrose diagram of a Schwarzschild black hole appears as:",
    opts: ["A vertical timelike line (a place in space)","A point at the centre","A spacelike horizontal line at the top — the future boundary hit by all causal curves inside the horizon","A diagonal null surface"],
    ans: 2, exp: "In Kruskal-Szekeres/Penrose coordinates, r=0 is a spacelike hypersurface — it lies to the future of all interior points. The singularity is not a place but a time: every future-directed causal curve inside the event horizon unavoidably reaches it." }
],

"62_adscft": [
  { q: "The AdS/CFT correspondence relates a gravitational theory in anti-de Sitter space to:",
    opts: ["A free field theory in flat space","A conformal field theory on the boundary of AdS","A supersymmetric theory in de Sitter space","A topological field theory in 2D"],
    ans: 1, exp: "Maldacena's conjecture states that type IIB string theory on AdS₅×S⁵ is dual to N=4 Super Yang-Mills on the 4D boundary. The bulk gravity theory and the boundary CFT encode the same physics." },
  { q: "In the AdS/CFT dictionary, the radial coordinate z in AdS corresponds to:",
    opts: ["Time in the boundary theory","The energy scale (RG flow) of the boundary CFT","A spatial dimension on the boundary","A compactification modulus"],
    ans: 1, exp: "Moving toward the AdS boundary (z→0) corresponds to UV physics of the CFT; moving into the bulk (z→∞) maps to IR. This is the bulk-boundary dictionary key: z ↔ energy scale." },
  { q: "The Ryu-Takayanagi formula relates boundary entanglement entropy to:",
    opts: ["The volume of a bulk region","The area of a minimal surface in the bulk anchored to the boundary subregion","The action of a bulk Wilson line","The number of bulk gravitons"],
    ans: 1, exp: "S(ρ_A) = Area(γ_A)/(4G_N), where γ_A is the minimal-area surface in the bulk whose boundary matches the boundary region A. This geometric formula transforms entanglement into geometry." },
  { q: "The BTZ black hole in 2+1D AdS is dual to a thermal state in the boundary CFT because:",
    opts: ["It has Hawking radiation","It can be constructed by identifying points in AdS₃ (quotient), producing a boundary CFT at finite temperature","It violates the null energy condition","It has no horizon"],
    ans: 1, exp: "The BTZ metric comes from a discrete identification of AdS₃ points, which induces periodic boundary conditions in Euclidean time on the CFT side — precisely a thermal state at the Hawking temperature." }
],

"63_qec": [
  { q: "The [[n,k,d]] notation for a quantum error-correcting code describes:",
    opts: ["n physical qubits encoding k logical qubits with distance d","n logical qubits protected by k physical qubits at distance d","n errors corrected in k steps with depth d","n gates, k measurements, d circuit depth"],
    ans: 0, exp: "An [[n,k,d]] stabilizer code encodes k logical qubits into n physical qubits. The distance d is the minimum weight of a logical operator — the code corrects up to ⌊(d-1)/2⌋ errors." },
  { q: "The Shor [[9,1,3]] code protects against:",
    opts: ["Any single-qubit error (bit-flip or phase-flip)","Only bit-flip errors","Only phase-flip errors","Any two-qubit error"],
    ans: 0, exp: "Shor's code concatenates a 3-qubit bit-flip code with a 3-qubit phase-flip code. It detects and corrects any single-qubit X or Z error (and hence any single-qubit Pauli, since Y=iXZ)." },
  { q: "The surface (toric) code's key advantage for fault-tolerant quantum computing is:",
    opts: ["It requires no ancilla qubits","It has a high threshold (~1%) and needs only nearest-neighbor interactions in 2D","It achieves the quantum capacity bound","It corrects arbitrary errors without measurement"],
    ans: 1, exp: "The surface code's error threshold around 1% is the highest known for any code, and its stabilizer measurements involve only local (nearest-neighbor) 4-body plaquette and star operators on a 2D lattice — making it the leading candidate for scalable FTQC." },
  { q: "A stabilizer code's code space is the simultaneous +1 eigenspace of all stabilizer generators. If the stabilizer group has (n-k) independent generators, the code space has dimension:",
    opts: ["2ⁿ","2ᵏ","2ⁿ⁻ᵏ","n - k"],
    ans: 1, exp: "Each independent stabilizer cuts the Hilbert space dimension in half. Starting from dimension 2ⁿ, applying (n-k) generators yields 2ⁿ / 2ⁿ⁻ᵏ = 2ᵏ — encoding k logical qubits." }
]

}; // end QUIZ_DATA
