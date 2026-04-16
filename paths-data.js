// paths-data.js — Static definitions for all learning paths
// Loaded by paths.html and auto-start.js

window.LEARNING_PATHS = [
  // ── Book-Aligned Paths (8) ──────────────────────────────────────
  {
    id: 'penrose-foundations',
    type: 'book',
    title: 'Mathematical Foundations',
    subtitle: 'Chapters 1\u20138',
    icon: '\u2102',
    color: '#00e5ff',
    description: 'Build the mathematical toolkit: complex numbers, fractals, hyperbolic geometry, Fourier analysis, calculus, number systems.',
    modules: [
      '01_complex_explorer', '03_mandelbrot', '04_hyperbolic',
      '05_fourier', '06_complex_calculus', '18_infinity',
      '26_number_systems', '27_visual_calculus'
    ]
  },
  {
    id: 'penrose-geometry',
    type: 'book',
    title: 'Geometry & Manifolds',
    subtitle: 'Chapters 12\u201315',
    icon: '\u2207',
    color: '#aa77ff',
    description: 'Differential geometry, differential forms, symplectic structures, and Riemann surfaces \u2014 the language of modern physics.',
    modules: [
      '14_diff_geometry', '16_diff_forms', '29_symplectic', '36_riemann_surfaces'
    ]
  },
  {
    id: 'penrose-algebra',
    type: 'book',
    title: 'Algebra & Structure',
    subtitle: 'Chapters 11\u201313',
    icon: '\u2297',
    color: '#ff8844',
    description: 'Spinors, Lie groups, quaternions, representation theory, cohomology, homotopy, Clifford algebras, and category theory.',
    modules: [
      '07_spinors_lie', '15_quaternions', '32_representation_theory',
      '33_cohomology', '41_homotopy', '42_clifford_algebras', '52_category_theory'
    ]
  },
  {
    id: 'penrose-classical',
    type: 'book',
    title: 'Classical Physics',
    subtitle: 'Chapters 17\u201320',
    icon: '\u2699',
    color: '#ffd700',
    description: 'Spacetime, Lagrangian mechanics, thermodynamics, Maxwell\'s equations, and chaos theory.',
    modules: [
      '08_spacetime', '10_lagrangian', '20_thermodynamics', '37_maxwell', '40_chaos'
    ]
  },
  {
    id: 'penrose-quantum',
    type: 'book',
    title: 'Quantum Mechanics',
    subtitle: 'Chapters 21\u201324',
    icon: '\u03c8',
    color: '#00ff99',
    description: 'Quantum states, the Dirac equation, measurement problem, path integrals, and Bell\'s theorem.',
    modules: [
      '09_quantum', '11_dirac', '21_quantum_measurement',
      '22_path_integrals', '45_bell_theorem'
    ]
  },
  {
    id: 'penrose-qft',
    type: 'book',
    title: 'Quantum Fields & Particles',
    subtitle: 'Chapters 25\u201326',
    icon: '\u27e8\u27e9',
    color: '#ff4477',
    description: 'Gauge theory, the Higgs field, the Standard Model, quantum field theory, and conformal field theory.',
    modules: [
      '12_gauge_theory', '25_higgs_field', '38_standard_model',
      '39_quantum_field_theory', '43_conformal_field_theory'
    ]
  },
  {
    id: 'penrose-gravity',
    type: 'book',
    title: 'Gravity & Cosmology',
    subtitle: 'Chapters 27\u201334',
    icon: '\ud83c\udf0c',
    color: '#5599ff',
    description: 'General relativity, black holes, cosmology, twistor theory, loop quantum gravity, gravitational waves, dark energy, and Penrose\'s singularity theorem.',
    modules: [
      '13_cosmology', '19_general_relativity', '23_twistor_theory',
      '24_loop_quantum_gravity', '35_black_holes', '44_twistors',
      '46_gravitational_waves', '58_dark_energy', '60_penrose_singularity'
    ]
  },
  {
    id: 'penrose-frontiers',
    type: 'book',
    title: 'Frontiers & Experiment',
    subtitle: 'Beyond the book',
    icon: '\ud83d\udd2c',
    color: '#ff44ff',
    description: 'Penrose tilings, CCC, spinor calculus, instantons, Riemann zeta, string theory, AdS/CFT, quantum error correction, and 21st-century experiments.',
    modules: [
      '02_penrose_tiling', '61_string_theory', '28_ccc_or',
      '30_spinor_calculus', '31_instantons', '34_riemann_zeta',
      '47_quantum_optics', '48_topological_matter', '49_quantum_networks',
      '50_semiconductor_quantum', '51_photonics_fiber', '53_attosecond',
      '54_trapped_ions', '55_neutrino_oscillations', '56_muon_g2',
      '57_nuclear_fusion', '59_spin_glasses', '62_adscft', '63_qec'
    ]
  },

  // ── Thematic Journeys (5) ───────────────────────────────────────
  {
    id: 'theme-symmetry',
    type: 'thematic',
    title: 'Symmetry Everywhere',
    subtitle: 'Groups, gauge fields & the Standard Model',
    icon: '\u2b21',
    color: '#ff8844',
    description: 'Trace symmetry from Lie groups through gauge theory to the Higgs mechanism and the Standard Model.',
    modules: [
      '07_spinors_lie', '12_gauge_theory', '25_higgs_field',
      '32_representation_theory', '42_clifford_algebras', '38_standard_model'
    ]
  },
  {
    id: 'theme-quantum',
    type: 'thematic',
    title: 'The Quantum World',
    subtitle: 'From wavefunctions to entanglement',
    icon: '\u269b',
    color: '#00ff99',
    description: 'A complete quantum journey: states, Dirac\'s equation, measurement, path integrals, QFT, Bell\'s theorem, and quantum optics.',
    modules: [
      '09_quantum', '11_dirac', '21_quantum_measurement',
      '22_path_integrals', '39_quantum_field_theory', '45_bell_theorem',
      '47_quantum_optics'
    ]
  },
  {
    id: 'theme-spacetime',
    type: 'thematic',
    title: 'Spacetime & Gravity',
    subtitle: 'From Minkowski to singularities',
    icon: '\u25d0',
    color: '#5599ff',
    description: 'Explore spacetime geometry, general relativity, twistors, black holes, gravitational waves, and Penrose\'s singularity theorem.',
    modules: [
      '08_spacetime', '14_diff_geometry', '19_general_relativity',
      '23_twistor_theory', '35_black_holes', '44_twistors',
      '46_gravitational_waves', '60_penrose_singularity'
    ]
  },
  {
    id: 'theme-topology',
    type: 'thematic',
    title: 'Topology & Geometry',
    subtitle: 'Shapes, holes & invariants',
    icon: '\ud83c\udf69',
    color: '#aa77ff',
    description: 'Hyperbolic geometry, manifolds, differential forms, cohomology, Riemann surfaces, homotopy, and topological matter.',
    modules: [
      '04_hyperbolic', '14_diff_geometry', '16_diff_forms',
      '33_cohomology', '36_riemann_surfaces', '41_homotopy',
      '48_topological_matter'
    ]
  },
  {
    id: 'theme-lab',
    type: 'thematic',
    title: '21st Century Lab',
    subtitle: 'Modern experiments & technology',
    icon: '\u26a1',
    color: '#ffcc00',
    description: 'Cutting-edge experimental physics: semiconductors, photonics, attosecond science, trapped ions, neutrinos, muon g-2, fusion, and quantum computing.',
    modules: [
      '50_semiconductor_quantum', '51_photonics_fiber', '53_attosecond',
      '54_trapped_ions', '55_neutrino_oscillations', '56_muon_g2',
      '57_nuclear_fusion', '62_adscft', '63_qec'
    ]
  }
];

// Helper: module ID to display name
window.moduleDisplayName = function(moduleId) {
  return moduleId
    .replace(/_/g, ' ')
    .replace(/^(\d+)\s/, function(_, n) { return n.padStart(2, '0') + ' \u2014 '; })
    .replace(/\b\w/g, function(c) { return c.toUpperCase(); });
};
