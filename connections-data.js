// connections-data.js — Cross-module relationship graph
// Derived from graph.html EDGES with human-readable labels.
// Loaded by auto-start.js; consumed by injectRelatedPanel().

window.MODULE_CONNECTIONS = {

  '01_complex_explorer': [
    { target: '03_mandelbrot',   label: 'Complex iteration & Julia sets' },
    { target: '04_hyperbolic',   label: 'Conformal maps to Poincaré disk' },
    { target: '06_complex_calculus', label: 'Complex analysis foundations' },
    { target: '36_riemann_surfaces', label: 'Multi-valued functions & branch cuts' },
    { target: '18_infinity',     label: 'Riemann sphere & compactification' },
    { target: '23_twistor_theory', label: 'Complex geometry of null rays' }
  ],

  '02_penrose_tiling': [
    { target: '04_hyperbolic',   label: 'Non-Euclidean tessellations' },
    { target: '40_chaos',        label: 'Aperiodic order & quasi-crystals' }
  ],

  '03_mandelbrot': [
    { target: '01_complex_explorer', label: 'Complex plane fundamentals' },
    { target: '04_hyperbolic',   label: 'Fractal boundaries & curvature' },
    { target: '36_riemann_surfaces', label: 'Iteration on Riemann surfaces' }
  ],

  '04_hyperbolic': [
    { target: '01_complex_explorer', label: 'Conformal models of the plane' },
    { target: '02_penrose_tiling',   label: 'Hyperbolic tessellations' },
    { target: '03_mandelbrot',   label: 'Fractal geometry connections' },
    { target: '14_diff_geometry', label: 'Constant negative curvature' }
  ],

  '05_fourier': [
    { target: '27_visual_calculus', label: 'Calculus of periodic functions' },
    { target: '47_quantum_optics',  label: 'Frequency decomposition of light' },
    { target: '09_quantum',      label: 'Momentum-space wavefunctions' },
    { target: '51_photonics_fiber', label: 'Signal analysis in fiber optics' },
    { target: '53_attosecond',   label: 'Ultrafast pulse decomposition' }
  ],

  '06_complex_calculus': [
    { target: '01_complex_explorer', label: 'Complex number foundations' },
    { target: '36_riemann_surfaces', label: 'Multi-sheeted analytic continuation' },
    { target: '18_infinity',     label: 'Poles & essential singularities' },
    { target: '34_riemann_zeta', label: 'Analytic continuation of zeta' },
    { target: '43_conformal_field_theory', label: 'Conformal maps in 2D physics' }
  ],

  '07_spinors_lie': [
    { target: '09_quantum',      label: 'SU(2) symmetry of spin' },
    { target: '11_dirac',        label: 'Spinor representations in Dirac eq.' },
    { target: '32_representation_theory', label: 'Group representations' },
    { target: '15_quaternions',  label: 'Quaternions encode SU(2) rotations' },
    { target: '42_clifford_algebras', label: 'Clifford algebra generates spinors' },
    { target: '30_spinor_calculus', label: '2-spinor formalism' }
  ],

  '08_spacetime': [
    { target: '09_quantum',      label: 'Quantum mechanics in Minkowski space' },
    { target: '11_dirac',        label: 'Relativistic quantum mechanics' },
    { target: '19_general_relativity', label: 'From flat to curved spacetime' },
    { target: '37_maxwell',      label: 'Electromagnetic field tensor' }
  ],

  '09_quantum': [
    { target: '07_spinors_lie',  label: 'Spin and SU(2) symmetry' },
    { target: '08_spacetime',    label: 'Non-relativistic limit' },
    { target: '10_lagrangian',   label: 'Hamiltonian from Lagrangian' },
    { target: '11_dirac',        label: 'Relativistic extension' },
    { target: '22_path_integrals', label: 'Feynman path integral formulation' },
    { target: '21_quantum_measurement', label: 'Measurement problem' },
    { target: '45_bell_theorem', label: 'Entanglement & nonlocality' },
    { target: '47_quantum_optics', label: 'Quantized electromagnetic field' },
    { target: '05_fourier',      label: 'Position-momentum duality' },
    { target: '20_thermodynamics', label: 'Statistical mechanics bridge' },
    { target: '53_attosecond',   label: 'Ultrafast quantum dynamics' },
    { target: '54_trapped_ions', label: 'Single-atom quantum control' },
    { target: '55_neutrino_oscillations', label: 'Quantum flavor mixing' },
    { target: '57_nuclear_fusion', label: 'Quantum tunneling in fusion' },
    { target: '59_spin_glasses', label: 'Disordered quantum systems' }
  ],

  '10_lagrangian': [
    { target: '09_quantum',      label: 'Classical-quantum correspondence' },
    { target: '22_path_integrals', label: 'Action principle in path integrals' },
    { target: '19_general_relativity', label: 'Einstein-Hilbert action' },
    { target: '29_symplectic',   label: 'Hamiltonian phase space' },
    { target: '27_visual_calculus', label: 'Calculus of variations' }
  ],

  '11_dirac': [
    { target: '09_quantum',      label: 'Non-relativistic limit' },
    { target: '08_spacetime',    label: 'Lorentz covariance' },
    { target: '07_spinors_lie',  label: 'Spinor structure of solutions' },
    { target: '39_quantum_field_theory', label: 'Second quantization' },
    { target: '38_standard_model', label: 'Fermion fields in SM' },
    { target: '42_clifford_algebras', label: 'Gamma matrices from Clifford algebra' },
    { target: '30_spinor_calculus', label: '2-spinor decomposition' },
    { target: '55_neutrino_oscillations', label: 'Neutrino mass & Dirac vs Majorana' }
  ],

  '12_gauge_theory': [
    { target: '37_maxwell',      label: 'U(1) gauge field = electromagnetism' },
    { target: '38_standard_model', label: 'Non-abelian gauge group of SM' },
    { target: '31_instantons',   label: 'Topological gauge field solutions' },
    { target: '17_fiber_bundles', label: 'Gauge fields as connections' },
    { target: '32_representation_theory', label: 'Matter reps of gauge groups' },
    { target: '25_higgs_field',  label: 'Spontaneous symmetry breaking' }
  ],

  '13_cosmology': [
    { target: '19_general_relativity', label: 'Friedmann equations from GR' },
    { target: '28_ccc_or',       label: 'Conformal cyclic cosmology' },
    { target: '35_black_holes',  label: 'Primordial black holes' },
    { target: '57_nuclear_fusion', label: 'Stellar nucleosynthesis' },
    { target: '58_dark_energy',  label: 'Accelerating expansion' }
  ],

  '14_diff_geometry': [
    { target: '16_diff_forms',   label: 'Forms on manifolds' },
    { target: '17_fiber_bundles', label: 'Bundles over manifolds' },
    { target: '19_general_relativity', label: 'Curved spacetime geometry' },
    { target: '29_symplectic',   label: 'Symplectic manifolds' },
    { target: '04_hyperbolic',   label: 'Model spaces of constant curvature' },
    { target: '60_penrose_singularity', label: 'Trapped surfaces & geodesic focusing' }
  ],

  '15_quaternions': [
    { target: '07_spinors_lie',  label: 'SU(2) double cover via quaternions' },
    { target: '42_clifford_algebras', label: 'Quaternions inside Cl(0,2)' }
  ],

  '16_diff_forms': [
    { target: '14_diff_geometry', label: 'Forms on curved manifolds' },
    { target: '17_fiber_bundles', label: 'Connection forms on bundles' },
    { target: '33_cohomology',   label: 'De Rham cohomology from forms' },
    { target: '37_maxwell',      label: 'Maxwell equations as dF = 0, d*F = J' },
    { target: '48_topological_matter', label: 'Berry phase as connection form' }
  ],

  '17_fiber_bundles': [
    { target: '14_diff_geometry', label: 'Base manifold geometry' },
    { target: '16_diff_forms',   label: 'Connection & curvature forms' },
    { target: '12_gauge_theory', label: 'Gauge fields = bundle connections' },
    { target: '31_instantons',   label: 'Topological bundle invariants' },
    { target: '33_cohomology',   label: 'Characteristic classes' },
    { target: '41_homotopy',     label: 'Classifying spaces & homotopy' },
    { target: '25_string_theory', label: 'Compactification geometry' },
    { target: '52_category_theory', label: 'Functorial bundle constructions' }
  ],

  '18_infinity': [
    { target: '01_complex_explorer', label: 'Riemann sphere at infinity' },
    { target: '06_complex_calculus', label: 'Poles & singularities' },
    { target: '36_riemann_surfaces', label: 'Compactification of surfaces' },
    { target: '34_riemann_zeta', label: 'Analytic continuation & infinity' },
    { target: '26_number_systems', label: 'Transfinite number hierarchies' }
  ],

  '19_general_relativity': [
    { target: '08_spacetime',    label: 'Flat spacetime limit' },
    { target: '14_diff_geometry', label: 'Riemannian geometry of spacetime' },
    { target: '10_lagrangian',   label: 'Einstein-Hilbert action' },
    { target: '13_cosmology',    label: 'Cosmological solutions' },
    { target: '35_black_holes',  label: 'Schwarzschild & Kerr solutions' },
    { target: '46_gravitational_waves', label: 'Linearized GR & wave solutions' },
    { target: '20_thermodynamics', label: 'Black hole thermodynamics' },
    { target: '24_loop_quantum_gravity', label: 'Quantum gravity approach' },
    { target: '58_dark_energy',  label: 'Cosmological constant in GR' },
    { target: '60_penrose_singularity', label: 'Singularity theorems' }
  ],

  '20_thermodynamics': [
    { target: '09_quantum',      label: 'Quantum statistical mechanics' },
    { target: '19_general_relativity', label: 'Black hole thermodynamics' },
    { target: '35_black_holes',  label: 'Hawking temperature & entropy' },
    { target: '28_ccc_or',       label: 'Entropy in cyclic cosmology' },
    { target: '57_nuclear_fusion', label: 'Plasma confinement energetics' },
    { target: '58_dark_energy',  label: 'Thermodynamic arrow of time' },
    { target: '59_spin_glasses', label: 'Frustrated spin thermodynamics' }
  ],

  '21_quantum_measurement': [
    { target: '09_quantum',      label: 'The measurement problem' },
    { target: '28_ccc_or',       label: 'Objective reduction theory' },
    { target: '45_bell_theorem', label: 'Non-locality & measurement' }
  ],

  '22_path_integrals': [
    { target: '09_quantum',      label: 'Sum-over-histories formulation' },
    { target: '10_lagrangian',   label: 'Action weighting of paths' },
    { target: '29_symplectic',   label: 'Phase-space path integrals' },
    { target: '39_quantum_field_theory', label: 'QFT generating functionals' },
    { target: '31_instantons',   label: 'Tunneling via saddle points' },
    { target: '56_muon_g2',      label: 'Loop corrections from path integrals' },
    { target: '59_spin_glasses', label: 'Replica path integrals' }
  ],

  '23_twistor_theory': [
    { target: '01_complex_explorer', label: 'Complex projective geometry' },
    { target: '44_twistors',     label: 'Scattering amplitude applications' },
    { target: '30_spinor_calculus', label: 'Twistors from 2-spinors' },
    { target: '43_conformal_field_theory', label: 'Conformal structure' }
  ],

  '24_loop_quantum_gravity': [
    { target: '19_general_relativity', label: 'Quantization of GR' },
    { target: '28_ccc_or',       label: 'Alternative quantum gravity' },
    { target: '41_homotopy',     label: 'Spin networks & topology' },
    { target: '25_string_theory', label: 'Competing quantum gravity approaches' },
    { target: '60_penrose_singularity', label: 'Singularity resolution via LQG' }
  ],

  '25_string_theory': [
    { target: '24_loop_quantum_gravity', label: 'Alternative quantum gravity' },
    { target: '43_conformal_field_theory', label: 'Worldsheet CFT' },
    { target: '17_fiber_bundles', label: 'Calabi-Yau compactification' },
    { target: '39_quantum_field_theory', label: 'String-derived QFTs' },
    { target: '41_homotopy',     label: 'Topological aspects of strings' }
  ],

  '25_higgs_field': [
    { target: '38_standard_model', label: 'Electroweak symmetry breaking' },
    { target: '12_gauge_theory', label: 'Spontaneous symmetry breaking' }
  ],

  '26_number_systems': [
    { target: '34_riemann_zeta', label: 'p-adic & analytic number theory' },
    { target: '18_infinity',     label: 'Transfinite cardinal hierarchies' }
  ],

  '27_visual_calculus': [
    { target: '05_fourier',      label: 'Fourier as calculus tool' },
    { target: '10_lagrangian',   label: 'Calculus of variations' }
  ],

  '28_ccc_or': [
    { target: '21_quantum_measurement', label: 'Objective reduction of state' },
    { target: '13_cosmology',    label: 'Conformal cyclic cosmology' },
    { target: '35_black_holes',  label: 'Information in CCC transitions' },
    { target: '20_thermodynamics', label: 'Entropy reset between aeons' },
    { target: '24_loop_quantum_gravity', label: 'Quantum gravity alternatives' }
  ],

  '29_symplectic': [
    { target: '14_diff_geometry', label: 'Symplectic manifold structure' },
    { target: '10_lagrangian',   label: 'Hamiltonian mechanics' },
    { target: '22_path_integrals', label: 'Phase-space quantization' },
    { target: '40_chaos',        label: 'KAM theorem & phase space' }
  ],

  '30_spinor_calculus': [
    { target: '07_spinors_lie',  label: 'Lie group underpinning' },
    { target: '23_twistor_theory', label: 'Twistors from spinor pairs' },
    { target: '42_clifford_algebras', label: 'Clifford algebra framework' },
    { target: '11_dirac',        label: '2-spinor form of Dirac equation' }
  ],

  '31_instantons': [
    { target: '12_gauge_theory', label: 'Topological gauge solutions' },
    { target: '17_fiber_bundles', label: 'Self-dual connections on bundles' },
    { target: '22_path_integrals', label: 'Tunneling saddle points' },
    { target: '32_representation_theory', label: 'Moduli space structure' }
  ],

  '32_representation_theory': [
    { target: '07_spinors_lie',  label: 'Lie group representations' },
    { target: '38_standard_model', label: 'Particle multiplets as irreps' },
    { target: '12_gauge_theory', label: 'Matter field representations' },
    { target: '31_instantons',   label: 'Moduli of gauge instantons' },
    { target: '52_category_theory', label: 'Representation categories' }
  ],

  '33_cohomology': [
    { target: '16_diff_forms',   label: 'Closed & exact forms' },
    { target: '41_homotopy',     label: 'Homotopy vs homology' },
    { target: '48_topological_matter', label: 'Topological invariants of matter' },
    { target: '17_fiber_bundles', label: 'Characteristic classes' }
  ],

  '34_riemann_zeta': [
    { target: '06_complex_calculus', label: 'Analytic continuation' },
    { target: '36_riemann_surfaces', label: 'Zeta as function on surfaces' },
    { target: '18_infinity',     label: 'Divergent series & regularization' },
    { target: '26_number_systems', label: 'Prime distribution & p-adics' }
  ],

  '35_black_holes': [
    { target: '19_general_relativity', label: 'Schwarzschild & Kerr metrics' },
    { target: '20_thermodynamics', label: 'Bekenstein-Hawking entropy' },
    { target: '28_ccc_or',       label: 'Information paradox & CCC' },
    { target: '46_gravitational_waves', label: 'Binary merger ringdown' },
    { target: '13_cosmology',    label: 'Primordial & supermassive BHs' },
    { target: '58_dark_energy',  label: 'Black holes in expanding universe' },
    { target: '60_penrose_singularity', label: 'Singularity theorem origins' }
  ],

  '36_riemann_surfaces': [
    { target: '01_complex_explorer', label: 'Complex plane as simplest surface' },
    { target: '03_mandelbrot',   label: 'Julia sets on Riemann surfaces' },
    { target: '06_complex_calculus', label: 'Multi-valued analytic functions' },
    { target: '34_riemann_zeta', label: 'Zeta function landscape' },
    { target: '18_infinity',     label: 'Compactification & genus' },
    { target: '43_conformal_field_theory', label: 'CFT on Riemann surfaces' },
    { target: '44_twistors',     label: 'Twistor curves' }
  ],

  '37_maxwell': [
    { target: '08_spacetime',    label: 'Covariant electrodynamics' },
    { target: '12_gauge_theory', label: 'U(1) gauge theory = EM' },
    { target: '16_diff_forms',   label: 'Faraday 2-form formulation' },
    { target: '46_gravitational_waves', label: 'Wave equation analogy' }
  ],

  '38_standard_model': [
    { target: '12_gauge_theory', label: 'SU(3)×SU(2)×U(1) gauge group' },
    { target: '32_representation_theory', label: 'Particle representations' },
    { target: '39_quantum_field_theory', label: 'QFT framework of SM' },
    { target: '11_dirac',        label: 'Fermionic matter fields' },
    { target: '25_higgs_field',  label: 'Electroweak symmetry breaking' },
    { target: '55_neutrino_oscillations', label: 'Neutrino sector of SM' },
    { target: '56_muon_g2',      label: 'Precision SM predictions' }
  ],

  '39_quantum_field_theory': [
    { target: '11_dirac',        label: 'Dirac field quantization' },
    { target: '22_path_integrals', label: 'Path integral quantization' },
    { target: '38_standard_model', label: 'SM as a QFT' },
    { target: '25_string_theory', label: 'String-derived field theories' },
    { target: '56_muon_g2',      label: 'Higher-order loop calculations' }
  ],

  '40_chaos': [
    { target: '29_symplectic',   label: 'KAM theorem in phase space' },
    { target: '02_penrose_tiling', label: 'Deterministic aperiodicity' }
  ],

  '41_homotopy': [
    { target: '33_cohomology',   label: 'Algebraic topology duality' },
    { target: '17_fiber_bundles', label: 'Classifying spaces' },
    { target: '48_topological_matter', label: 'Topological classification' },
    { target: '25_string_theory', label: 'String topology' },
    { target: '24_loop_quantum_gravity', label: 'Spin network topology' },
    { target: '52_category_theory', label: 'Higher category theory' }
  ],

  '42_clifford_algebras': [
    { target: '07_spinors_lie',  label: 'Spinors from Clifford algebra' },
    { target: '15_quaternions',  label: 'Quaternions as Cl(0,2)' },
    { target: '30_spinor_calculus', label: 'Gamma matrices & spinor calculus' },
    { target: '11_dirac',        label: 'Dirac algebra is Cl(1,3)' }
  ],

  '43_conformal_field_theory': [
    { target: '06_complex_calculus', label: 'Conformal maps in 2D' },
    { target: '36_riemann_surfaces', label: 'CFT on higher-genus surfaces' },
    { target: '23_twistor_theory', label: 'Conformal geometry bridge' },
    { target: '25_string_theory', label: 'Worldsheet CFT' },
    { target: '44_twistors',     label: 'Conformal symmetry & amplitudes' },
    { target: '62_adscft',       label: 'CFT side of AdS/CFT' }
  ],

  '44_twistors': [
    { target: '23_twistor_theory', label: 'Classical twistor foundations' },
    { target: '36_riemann_surfaces', label: 'Algebraic curves in twistor space' },
    { target: '43_conformal_field_theory', label: 'Conformal invariance' }
  ],

  '45_bell_theorem': [
    { target: '09_quantum',      label: 'Quantum entanglement foundations' },
    { target: '21_quantum_measurement', label: 'Measurement & nonlocality' },
    { target: '47_quantum_optics', label: 'Photon entanglement experiments' },
    { target: '49_quantum_networks', label: 'Entanglement distribution' },
    { target: '54_trapped_ions', label: 'Loophole-free Bell tests' }
  ],

  '46_gravitational_waves': [
    { target: '19_general_relativity', label: 'Linearized GR wave solutions' },
    { target: '35_black_holes',  label: 'Binary merger signals' },
    { target: '37_maxwell',      label: 'Wave equation parallels' }
  ],

  '47_quantum_optics': [
    { target: '09_quantum',      label: 'Quantum states of light' },
    { target: '05_fourier',      label: 'Spectral decomposition' },
    { target: '45_bell_theorem', label: 'Photon Bell experiments' },
    { target: '49_quantum_networks', label: 'Optical quantum channels' },
    { target: '51_photonics_fiber', label: 'Guided quantum light' },
    { target: '50_semiconductor_quantum', label: 'Single-photon emitters' },
    { target: '53_attosecond',   label: 'Ultrafast laser-matter interaction' },
    { target: '54_trapped_ions', label: 'Ion-photon interfaces' }
  ],

  '48_topological_matter': [
    { target: '33_cohomology',   label: 'Topological invariants' },
    { target: '41_homotopy',     label: 'Homotopy classification of phases' },
    { target: '16_diff_forms',   label: 'Berry connection & Chern numbers' },
    { target: '50_semiconductor_quantum', label: 'Topological band structure' }
  ],

  '49_quantum_networks': [
    { target: '45_bell_theorem', label: 'Entanglement as resource' },
    { target: '47_quantum_optics', label: 'Optical links & photon states' },
    { target: '50_semiconductor_quantum', label: 'Solid-state quantum nodes' },
    { target: '54_trapped_ions', label: 'Ion-trap network nodes' },
    { target: '63_qec',          label: 'Error correction for networking' }
  ],

  '50_semiconductor_quantum': [
    { target: '47_quantum_optics', label: 'Single-photon sources' },
    { target: '48_topological_matter', label: 'Topological semiconductor phases' },
    { target: '49_quantum_networks', label: 'Solid-state qubits' }
  ],

  '51_photonics_fiber': [
    { target: '05_fourier',      label: 'Pulse & mode analysis' },
    { target: '47_quantum_optics', label: 'Fiber-guided quantum light' }
  ],

  '52_category_theory': [
    { target: '17_fiber_bundles', label: 'Functorial bundle constructions' },
    { target: '32_representation_theory', label: 'Representation categories' },
    { target: '41_homotopy',     label: 'Higher categories & homotopy' }
  ],

  '53_attosecond': [
    { target: '09_quantum',      label: 'Ultrafast quantum dynamics' },
    { target: '47_quantum_optics', label: 'High-harmonic laser physics' },
    { target: '05_fourier',      label: 'Fourier-limited pulse trains' }
  ],

  '54_trapped_ions': [
    { target: '09_quantum',      label: 'Single-ion quantum control' },
    { target: '45_bell_theorem', label: 'Loophole-free Bell tests' },
    { target: '47_quantum_optics', label: 'Ion-photon coupling' },
    { target: '49_quantum_networks', label: 'Ion-trap network nodes' }
  ],

  '55_neutrino_oscillations': [
    { target: '09_quantum',      label: 'Quantum flavor superposition' },
    { target: '38_standard_model', label: 'Lepton sector of SM' },
    { target: '11_dirac',        label: 'Dirac vs Majorana mass terms' }
  ],

  '56_muon_g2': [
    { target: '39_quantum_field_theory', label: 'Higher-order QFT loops' },
    { target: '38_standard_model', label: 'Precision SM test' },
    { target: '22_path_integrals', label: 'Loop diagram calculations' }
  ],

  '57_nuclear_fusion': [
    { target: '20_thermodynamics', label: 'Plasma confinement energetics' },
    { target: '13_cosmology',    label: 'Stellar nucleosynthesis' },
    { target: '09_quantum',      label: 'Quantum tunneling through Coulomb barrier' }
  ],

  '58_dark_energy': [
    { target: '13_cosmology',    label: 'Accelerating cosmic expansion' },
    { target: '19_general_relativity', label: 'Cosmological constant Λ' },
    { target: '35_black_holes',  label: 'De Sitter horizons' },
    { target: '20_thermodynamics', label: 'Thermodynamic arrow & dark energy' }
  ],

  '59_spin_glasses': [
    { target: '09_quantum',      label: 'Disordered quantum spin systems' },
    { target: '20_thermodynamics', label: 'Frustration & entropy landscapes' },
    { target: '22_path_integrals', label: 'Replica trick via path integrals' }
  ],

  '60_penrose_singularity': [
    { target: '19_general_relativity', label: 'Singularity theorems in GR' },
    { target: '35_black_holes',  label: 'Trapped surfaces & collapse' },
    { target: '14_diff_geometry', label: 'Geodesic incompleteness' },
    { target: '24_loop_quantum_gravity', label: 'Singularity resolution attempts' }
  ],

  '62_adscft': [
    { target: '43_conformal_field_theory', label: 'CFT dual of bulk gravity' },
    { target: '25_string_theory', label: 'String theory origin of duality' },
    { target: '35_black_holes',  label: 'Black hole information via holography' },
    { target: '19_general_relativity', label: 'Anti-de Sitter spacetime' }
  ],

  '63_qec': [
    { target: '09_quantum',      label: 'Protecting quantum information' },
    { target: '49_quantum_networks', label: 'Error correction for networks' },
    { target: '48_topological_matter', label: 'Topological quantum codes' },
    { target: '45_bell_theorem', label: 'Entanglement in error correction' }
  ]
};
