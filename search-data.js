// search-data.js — Pre-built search index for global search
// Generated from module titles, tags, tour narrations, challenge titles, glossary
// Loaded by auto-start.js; consumed by global search overlay.

(function() {
  'use strict';

  // Build index from available data sources
  var entries = [];

  // Wait for data scripts to load, then build index
  function buildIndex() {
    // 1. Module titles + tags from graph nodes (if available)
    var modules = [
      { id: '01_complex_explorer', title: 'Complex Number Explorer', tags: 'Argand Plane, Euler Formula, Conformal Maps, complex numbers, imaginary' },
      { id: '02_penrose_tiling', title: 'Penrose Tiling', tags: 'Aperiodic, Golden Ratio, 5-fold Symmetry, quasicrystal' },
      { id: '03_mandelbrot', title: 'Mandelbrot Set', tags: 'Fractals, Complex Iteration, Julia Sets, zoom, boundary' },
      { id: '04_hyperbolic', title: 'Hyperbolic Geometry', tags: 'Poincare Disk, Negative Curvature, Tessellations, non-Euclidean' },
      { id: '05_fourier', title: 'Fourier Series', tags: 'Frequency Analysis, Epicycles, Gibbs Phenomenon, harmonics, square wave' },
      { id: '06_complex_calculus', title: 'Complex Calculus', tags: 'Contour Integration, Residues, Cauchy Theorem, analytic' },
      { id: '07_spinors_lie', title: 'Spinors & Lie Groups', tags: 'SU(2), SO(3), Spinors, rotation, double cover' },
      { id: '08_spacetime', title: 'Spacetime', tags: 'Special Relativity, Lorentz Boost, Light Cone, Minkowski' },
      { id: '09_quantum', title: 'Quantum Mechanics', tags: 'Wavefunctions, Uncertainty, Schrodinger, Bloch sphere, spin' },
      { id: '10_lagrangian', title: 'Lagrangian Mechanics', tags: 'Action, Noether Theorem, Euler-Lagrange, variational' },
      { id: '11_dirac', title: 'Dirac Equation', tags: 'Relativistic QM, Antiparticles, Gamma Matrices, spinor, positron' },
      { id: '12_gauge_theory', title: 'Gauge Theory', tags: 'Gauge Invariance, Yang-Mills, U(1), fiber bundle, connection' },
      { id: '13_cosmology', title: 'Cosmology', tags: 'Friedmann Equation, Inflation, CMB, Big Bang, expansion' },
      { id: '14_diff_geometry', title: 'Differential Geometry', tags: 'Manifolds, Curvature, Geodesics, Riemann tensor' },
      { id: '15_quaternions', title: 'Quaternions', tags: 'Hamilton, Rotations, Division Algebra, i j k' },
      { id: '16_diff_forms', title: 'Differential Forms', tags: 'Exterior Derivative, Stokes Theorem, k-forms, wedge product' },
      { id: '17_fiber_bundles', title: 'Fiber Bundles', tags: 'Connections, Holonomy, Principal Bundles, parallel transport' },
      { id: '18_infinity', title: 'Infinity & Cantor', tags: 'Cardinality, Riemann Sphere, Uncountability, diagonal argument' },
      { id: '19_general_relativity', title: 'General Relativity', tags: 'Einstein Equations, Geodesics, Spacetime Curvature, gravity' },
      { id: '20_thermodynamics', title: 'Thermodynamics', tags: 'Entropy, Boltzmann, Black Hole Thermodynamics, Carnot, heat' },
      { id: '21_quantum_measurement', title: 'Quantum Measurement', tags: 'Decoherence, Wavefunction Collapse, Objective Reduction' },
      { id: '22_path_integrals', title: 'Path Integrals', tags: 'Feynman, Action, Wick Rotation, sum over histories' },
      { id: '23_twistor_theory', title: 'Twistor Theory', tags: 'Null Rays, Penrose, CP3, complex projective' },
      { id: '24_loop_quantum_gravity', title: 'Loop Quantum Gravity', tags: 'Spin Networks, Discrete Space, Bounce, Planck scale' },
      { id: '25_string_theory', title: 'String Theory', tags: 'Strings, Compactification, T-Duality, extra dimensions' },
      { id: '25_higgs_field', title: 'Higgs Field', tags: 'Symmetry Breaking, Higgs Boson, LHC, mass generation' },
      { id: '26_number_systems', title: 'Number Systems', tags: 'p-adic, Surreal Numbers, Hensel Lemma, completions' },
      { id: '27_visual_calculus', title: 'Visual Calculus', tags: 'Derivatives, Integrals, Taylor Series, limits' },
      { id: '28_ccc_or', title: 'CCC & Objective Reduction', tags: 'Penrose, Conformal Cycles, consciousness, gravity' },
      { id: '29_symplectic', title: 'Symplectic Geometry', tags: 'Phase Space, Poisson Brackets, Darboux, Hamiltonian' },
      { id: '30_spinor_calculus', title: 'Spinor Calculus', tags: '2-Spinors, SL(2,C), Newman-Penrose, twistor' },
      { id: '31_instantons', title: 'Instantons', tags: 'Self-Dual, Tunneling, Topology, gauge field' },
      { id: '32_representation_theory', title: 'Representation Theory', tags: 'Irreps, Characters, Schur Lemma, group theory' },
      { id: '33_cohomology', title: 'De Rham Cohomology', tags: 'Betti Numbers, Euler Characteristic, Poincare Duality, topology' },
      { id: '34_riemann_zeta', title: 'Riemann Zeta Function', tags: 'Riemann Hypothesis, Primes, Critical Line, zeros' },
      { id: '35_black_holes', title: 'Black Holes', tags: 'Event Horizon, Singularity, Hawking Radiation, Schwarzschild' },
      { id: '36_riemann_surfaces', title: 'Riemann Surfaces', tags: 'Genus, Uniformization, Branch Cuts, multi-valued' },
      { id: '37_maxwell', title: 'Maxwell Equations', tags: 'EM Field Tensor, Gauge Theory, Duality, electromagnetic' },
      { id: '38_standard_model', title: 'Standard Model', tags: 'SU(3) SU(2) U(1), Quarks, QCD, particles, forces' },
      { id: '39_quantum_field_theory', title: 'Quantum Field Theory', tags: 'Feynman Diagrams, Renormalization, LSZ, propagator' },
      { id: '40_chaos', title: 'Chaos Theory', tags: 'Lyapunov Exponent, Strange Attractor, KAM, logistic map, butterfly' },
      { id: '41_homotopy', title: 'Homotopy Theory', tags: 'Fundamental Group, Hopf Fibration, Homotopy Equivalence, loops' },
      { id: '42_clifford_algebras', title: 'Clifford Algebras', tags: 'Clifford Algebra, Pseudoscalar, Rotors, geometric algebra' },
      { id: '43_conformal_field_theory', title: 'Conformal Field Theory', tags: 'Primary Operators, Central Charge, AdS/CFT, 2D' },
      { id: '44_twistors', title: 'Twistors & Amplitudes', tags: 'MHV Amplitudes, Amplituhedron, Ward Transform, scattering' },
      { id: '45_bell_theorem', title: 'Bell Theorem', tags: 'Entanglement, CHSH, Local Realism, nonlocality, EPR' },
      { id: '46_gravitational_waves', title: 'Gravitational Waves', tags: 'LIGO, Chirp, Quadrupole Radiation, merger' },
      { id: '47_quantum_optics', title: 'Quantum Optics', tags: 'Coherent States, HOM Effect, Squeezed Light, photon' },
      { id: '48_topological_matter', title: 'Topological Matter', tags: 'Quantum Hall, Anyons, Topological Insulators, Berry phase' },
      { id: '49_quantum_networks', title: 'Quantum Networks', tags: 'QKD, Teleportation, Quantum Repeaters, entanglement distribution' },
      { id: '50_semiconductor_quantum', title: 'Semiconductor Quantum', tags: 'Quantum Dots, Josephson Effect, Landau Levels, superconductor' },
      { id: '51_photonics_fiber', title: 'Photonics & Fiber', tags: 'Total Internal Reflection, Photonic Crystals, Solitons, waveguide' },
      { id: '52_category_theory', title: 'Category Theory', tags: 'Functors, Natural Transformations, Adjunctions, morphisms' },
      { id: '53_attosecond', title: 'Attosecond Physics', tags: 'HHG, Keldysh Parameter, Ultrafast, femtosecond, laser' },
      { id: '54_trapped_ions', title: 'Trapped Ions', tags: 'Paul Trap, Jaynes-Cummings, Wigner Function, quantum computing' },
      { id: '55_neutrino_oscillations', title: 'Neutrino Oscillations', tags: 'PMNS Matrix, CP Violation, Mass Hierarchy, flavor' },
      { id: '56_muon_g2', title: 'Muon g-2', tags: 'Anomalous Moment, Feynman Diagrams, BSM, magnetic moment' },
      { id: '57_nuclear_fusion', title: 'Nuclear Fusion', tags: 'Lawson Criterion, Hohlraum, NIF, plasma, tokamak' },
      { id: '58_dark_energy', title: 'Dark Energy', tags: 'LCDM, Hubble Tension, SN Ia, cosmological constant, vacuum energy' },
      { id: '59_spin_glasses', title: 'Spin Glasses', tags: 'Edwards-Anderson, Parisi RSB, Frustration, disorder' },
      { id: '60_penrose_singularity', title: 'Penrose Singularity Theorem', tags: 'Raychaudhuri, Trapped Surface, geodesic incompleteness' },
      { id: '62_adscft', title: 'AdS/CFT Correspondence', tags: 'holography, Maldacena, bulk boundary, duality' },
      { id: '63_qec', title: 'Quantum Error Correction', tags: 'stabilizer codes, surface code, logical qubit, fault tolerant' }
    ];

    modules.forEach(function(m) {
      entries.push({
        type: 'module',
        id: m.id,
        title: m.title,
        text: (m.title + ' ' + m.tags).toLowerCase(),
        url: '/' + m.id + '.html'
      });
    });

    // 2. Tour steps (if tour-data loaded)
    if (window.KTOUR_DATA) {
      Object.keys(window.KTOUR_DATA).forEach(function(filename) {
        var moduleId = filename.replace('.html', '');
        var tabs = window.KTOUR_DATA[filename];
        Object.keys(tabs).forEach(function(tabIdx) {
          tabs[tabIdx].forEach(function(step) {
            entries.push({
              type: 'tour',
              id: moduleId,
              title: step.title,
              text: (step.title + ' ' + step.body).toLowerCase(),
              url: '/' + filename + '#tab=' + tabIdx
            });
          });
        });
      });
    }

    // 3. Challenges (if loaded)
    if (window.MODULE_CHALLENGES) {
      Object.keys(window.MODULE_CHALLENGES).forEach(function(moduleId) {
        window.MODULE_CHALLENGES[moduleId].forEach(function(ch) {
          entries.push({
            type: 'challenge',
            id: moduleId,
            title: ch.title,
            text: (ch.title + ' ' + ch.hint).toLowerCase(),
            url: '/' + moduleId + '.html'
          });
        });
      });
    }
  }

  function search(query) {
    if (!query || query.length < 2) return [];
    var q = query.toLowerCase();
    var words = q.split(/\s+/);
    return entries.filter(function(entry) {
      return words.every(function(w) { return entry.text.indexOf(w) !== -1; });
    }).slice(0, 20);
  }

  // Build index after a delay to let other scripts load
  setTimeout(buildIndex, 1500);

  window.globalSearch = {
    search: search,
    rebuild: buildIndex
  };
})();
