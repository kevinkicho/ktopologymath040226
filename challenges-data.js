// challenges-data.js — Interactive challenge definitions per module
// Each challenge has: id, title, hint, check (function returning true when achieved)
// check() reads live DOM state — slider values, globals, text content.

window.MODULE_CHALLENGES = {

  '01_complex_explorer': [
    {
      id: 'euler-full-circle',
      title: 'Trace the full unit circle',
      hint: 'Go to the Euler tab and drag the \u03b8 slider all the way to 2\u03c0 (6.28).',
      check: function() {
        var sl = document.getElementById('theta-sl');
        return sl && +sl.value >= 620; // 628 = 2pi*100
      }
    },
    {
      id: 'julia-connected',
      title: 'Find a connected Julia set',
      hint: 'In the Julia Sets tab, set c inside the Mandelbrot set (try c = 0+0i).',
      check: function() {
        var re = document.getElementById('jc-re');
        var im = document.getElementById('jc-im');
        if (!re || !im) return false;
        var r = +re.value / 100, i = +im.value / 100;
        return (r * r + i * i) < 0.25; // inside main cardioid approx
      }
    }
  ],

  '03_mandelbrot': [
    {
      id: 'deep-zoom',
      title: 'Zoom in over 100x',
      hint: 'Click repeatedly on the boundary to zoom deeper and deeper.',
      check: function() {
        // Most Mandelbrot implementations track zoom/scale
        var zoomDisp = document.querySelector('[id*="zoom"]') || document.querySelector('[id*="scale"]');
        if (zoomDisp && +zoomDisp.value > 500) return true;
        // Fallback: check if any global scale variable is large
        return typeof window.mScale !== 'undefined' && window.mScale > 100;
      }
    }
  ],

  '05_fourier': [
    {
      id: 'square-wave',
      title: 'Approximate a square wave closely',
      hint: 'Drag the harmonics slider past 20 \u2014 watch the Gibbs ringing shrink.',
      check: function() {
        var sl = document.getElementById('harm-sl');
        return sl && +sl.value >= 20;
      }
    },
    {
      id: 'minimum-uncertainty',
      title: 'Achieve minimum uncertainty product',
      hint: 'In the Uncertainty tab, the Gaussian is already minimal \u2014 just open that tab!',
      check: function() {
        var panel = document.getElementById('panel-uncertainty');
        return panel && panel.classList.contains('active');
      }
    }
  ],

  '09_quantum': [
    {
      id: 'spin-up',
      title: 'Create a pure spin-up eigenstate',
      hint: 'On the Stern-Gerlach tab, set \u03b8 (polar) to 0\u00b0.',
      check: function() {
        var sl = document.getElementById('sgTh');
        return sl && +sl.value <= 2;
      }
    },
    {
      id: 'max-decoherence',
      title: 'Maximize quantum decoherence',
      hint: 'On the Decoherence tab, push the decoherence slider to 1.0.',
      check: function() {
        var sl = document.getElementById('decohSlider');
        return sl && +sl.value >= 0.95;
      }
    },
    {
      id: 'narrow-wavepacket',
      title: 'Make an extremely localized wavepacket',
      hint: 'On the Wavepackets tab, set \u03c3 below 0.6 \u2014 watch momentum spread widen!',
      check: function() {
        var sl = document.getElementById('sigmaSlider');
        return sl && +sl.value < 0.65;
      }
    }
  ],

  '11_dirac': [
    {
      id: 'high-z-binding',
      title: 'Find Z where 1s binding > 10 keV',
      hint: 'On the H Atom tab, slide Z above ~14. Watch the energy display.',
      check: function() {
        var sl = document.getElementById('hZSlider');
        return sl && +sl.value >= 14;
      }
    },
    {
      id: 'massless-weyl',
      title: 'Create a massless Weyl fermion',
      hint: 'On the Chirality tab, set mass to 0. Helicity becomes chirality!',
      check: function() {
        return typeof chiralMass !== 'undefined' && chiralMass < 0.05;
      }
    },
    {
      id: 'pair-creation',
      title: 'Trigger electron-positron pair creation',
      hint: 'On the Dirac Sea tab, click "Pair Creation" and watch the animation.',
      check: function() {
        return typeof seaScenario !== 'undefined' && seaScenario === 1;
      }
    }
  ],

  '22_path_integrals': [
    {
      id: 'classical-limit',
      title: 'Make the classical path dominate',
      hint: 'Reduce \u0127 to near zero \u2014 quantum paths collapse to the classical trajectory.',
      check: function() {
        var sl = document.querySelector('[id*="hbar"]') || document.querySelector('[id*="planck"]');
        return sl && +sl.value < 0.15;
      }
    }
  ],

  '40_chaos': [
    {
      id: 'period-3',
      title: 'Find the period-3 window',
      hint: 'In the logistic map, look near r = 3.83 for a period-3 orbit.',
      check: function() {
        if (typeof logisticRevealR !== 'undefined') return logisticRevealR > 3.8;
        var sl = document.querySelector('[id*="rSlider"]') || document.querySelector('[id*="r-slider"]');
        return sl && +sl.value > 3.8;
      }
    }
  ],

  '45_bell_theorem': [
    {
      id: 'violate-chsh',
      title: 'Violate the CHSH inequality',
      hint: 'Set measurement angles to \u03b8a=0, \u03b8b=\u03c0/4, \u03b8a\'=\u03c0/2, \u03b8b\'=\u03c0/4 for maximum violation.',
      check: function() {
        // Look for a CHSH value display > 2
        var chsh = document.querySelector('[id*="chsh"]') || document.querySelector('[id*="CHSH"]');
        if (chsh) {
          var val = parseFloat(chsh.textContent || chsh.value);
          return !isNaN(val) && Math.abs(val) > 2.0;
        }
        return false;
      }
    }
  ],

  '37_maxwell': [
    {
      id: 'standing-wave',
      title: 'Create a standing electromagnetic wave',
      hint: 'Superpose two waves traveling in opposite directions with equal amplitude.',
      check: function() {
        // Check if both forward and backward waves are active
        var btns = document.querySelectorAll('button.active, button[aria-pressed="true"]');
        var hasStanding = false;
        btns.forEach(function(b) {
          if (/standing/i.test(b.textContent)) hasStanding = true;
        });
        return hasStanding;
      }
    }
  ],

  '20_thermodynamics': [
    {
      id: 'carnot-efficiency',
      title: 'Maximize Carnot efficiency',
      hint: 'Set the cold reservoir very low and hot reservoir very high.',
      check: function() {
        var hot = document.querySelector('[id*="hotSlider"]') || document.querySelector('[id*="Th"]');
        var cold = document.querySelector('[id*="coldSlider"]') || document.querySelector('[id*="Tc"]');
        if (hot && cold) {
          var th = +hot.value, tc = +cold.value;
          if (th > 0) return (1 - tc / th) > 0.7;
        }
        return false;
      }
    }
  ],

  '35_black_holes': [
    {
      id: 'photon-sphere',
      title: 'Find the photon sphere',
      hint: 'Look for the orbit at r = 3M (1.5 Schwarzschild radii).',
      check: function() {
        var sl = document.querySelector('[id*="rSlider"]') || document.querySelector('[id*="radius"]');
        if (sl) {
          var v = +sl.value;
          return v > 2.8 && v < 3.2;
        }
        return false;
      }
    }
  ],

  // ── Expanded challenges for remaining modules ──────────────────────

  '02_penrose_tiling': [
    {
      id: 'high-subdivision',
      title: 'Subdivide a Penrose tiling 7 times',
      hint: 'Push the level slider all the way up to reveal deep fractal structure.',
      check: function() {
        var sl = document.getElementById('level-sl');
        return sl && +sl.value >= 7;
      }
    },
    {
      id: 'inflate-high',
      title: 'Inflate to level 6+',
      hint: 'On the Inflation tab, push the level slider past 6.',
      check: function() {
        var sl = document.getElementById('infl-level');
        return sl && +sl.value >= 6;
      }
    }
  ],

  '04_hyperbolic': [
    {
      id: 'deep-tessellation',
      title: 'Create a depth-6 tessellation',
      hint: 'Push the depth slider to maximum for an intricate hyperbolic pattern.',
      check: function() {
        var sl = document.getElementById('depth-sl');
        return sl && +sl.value >= 6;
      }
    }
  ],

  '06_complex_calculus': [
    {
      id: 'high-res-contour',
      title: 'Maximize contour resolution',
      hint: 'Push the resolution slider high to see smooth contour lines.',
      check: function() {
        var sl = document.getElementById('ac-res-sl');
        return sl && +sl.value >= 80;
      }
    },
    {
      id: 'many-poles',
      title: 'Sum 20+ Laurent terms',
      hint: 'On the Laurent tab, push N past 20.',
      check: function() {
        var sl = document.getElementById('lN-sl');
        return sl && +sl.value >= 20;
      }
    }
  ],

  '07_spinors_lie': [
    {
      id: 'full-rotation',
      title: 'Rotate through 360° in SO(2)',
      hint: 'Drag the θ slider all the way to 2π (628).',
      check: function() {
        var sl = document.getElementById('so2-theta');
        return sl && +sl.value >= 620;
      }
    },
    {
      id: 'bloch-equator',
      title: 'Place a state on the Bloch equator',
      hint: 'Set θ to π/2 (157) on the SU(2) tab — the state lies in the xy plane.',
      check: function() {
        var sl = document.getElementById('bloch-theta');
        return sl && Math.abs(+sl.value - 157) < 10;
      }
    }
  ],

  '08_spacetime': [
    {
      id: 'ultra-relativistic',
      title: 'Reach near light speed',
      hint: 'Push the β slider above 0.95 — watch length contraction and time dilation explode.',
      check: function() {
        var sl = document.getElementById('beta-slider');
        return sl && +sl.value > 95;
      }
    }
  ],

  '10_lagrangian': [
    {
      id: 'double-pendulum-chaos',
      title: 'Create chaotic double pendulum motion',
      hint: 'Set both angle sliders past 120° and watch the trajectory fill phase space.',
      check: function() {
        var a1 = document.getElementById('ang1');
        var a2 = document.getElementById('ang2');
        return a1 && a2 && +a1.value > 120 && +a2.value > 120;
      }
    }
  ],

  '12_gauge_theory': [
    {
      id: 'full-phase',
      title: 'Complete a full gauge rotation',
      hint: 'Drag the phase slider to 2π — the wavefunction returns to itself.',
      check: function() {
        var sl = document.getElementById('phaseSlider');
        return sl && +sl.value >= 620;
      }
    }
  ],

  '13_cosmology': [
    {
      id: 'flat-universe',
      title: 'Create a spatially flat universe',
      hint: 'Adjust Ωm and ΩΛ so they sum to 1.0.',
      check: function() {
        var om = document.getElementById('OmSlider');
        var ol = document.getElementById('OlSlider');
        if (!om || !ol) return false;
        var total = (+om.value + +ol.value) / 100;
        return Math.abs(total - 1.0) < 0.05;
      }
    }
  ],

  '14_diff_geometry': [
    {
      id: 'high-curvature-loop',
      title: 'Maximize the Riemann curvature',
      hint: 'Push the curvature K slider to its maximum on the curvature tab.',
      check: function() {
        var sl = document.getElementById('riemannK');
        return sl && +sl.value >= 90;
      }
    }
  ],

  '15_quaternions': [
    {
      id: 'unit-quaternion',
      title: 'Create a pure rotation quaternion',
      hint: 'Set the components so a²+b²+c²+d²=1 — try (1,0,0,0).',
      check: function() {
        var a = document.getElementById('a1');
        var b = document.getElementById('b1');
        var c = document.getElementById('c1');
        var d = document.getElementById('d1');
        if (!a) return false;
        var norm = Math.sqrt(Math.pow(+a.value,2)+Math.pow(+b.value,2)+Math.pow(+c.value,2)+Math.pow(+d.value,2));
        return Math.abs(norm - 1) < 0.15 || Math.abs(norm - 100) < 15;
      }
    }
  ],

  '16_diff_forms': [
    {
      id: 'fine-grid',
      title: 'Maximize the form visualization grid',
      hint: 'Push the grid N slider to maximum for detailed field visualization.',
      check: function() {
        var sl = document.getElementById('gridN');
        return sl && +sl.value >= 20;
      }
    }
  ],

  '17_fiber_bundles': [
    {
      id: 'many-fibers',
      title: 'Visualize 10+ fibers',
      hint: 'Increase the number of fibers slider to see dense bundle structure.',
      check: function() {
        var sl = document.getElementById('nFibers');
        return sl && +sl.value >= 10;
      }
    },
    {
      id: 'high-winding',
      title: 'Create a high winding number',
      hint: 'Push the winding number N to 5+ on the Topology tab.',
      check: function() {
        var sl = document.getElementById('windN');
        return sl && +sl.value >= 5;
      }
    }
  ],

  '18_infinity': [
    {
      id: 'high-base',
      title: 'Explore a large number base',
      hint: 'Set the base slider high to see how different bases represent numbers.',
      check: function() {
        var sl = document.getElementById('gbase');
        return sl && +sl.value >= 8;
      }
    }
  ],

  '19_general_relativity': [
    {
      id: 'extreme-mass',
      title: 'Create an extreme-mass gravitational field',
      hint: 'Push the mass slider to maximum and watch geodesics curve dramatically.',
      check: function() {
        var sl = document.getElementById('mass');
        return sl && +sl.value >= 90;
      }
    },
    {
      id: 'elliptical-orbit',
      title: 'Create a highly elliptical orbit',
      hint: 'Set eccentricity above 0.8 to see extreme orbital shapes.',
      check: function() {
        var sl = document.getElementById('ecc');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '21_quantum_measurement': [
    {
      id: 'strong-decoherence',
      title: 'Maximize decoherence rate',
      hint: 'Push the γ (gamma) slider to its maximum value.',
      check: function() {
        var sl = document.getElementById('sl_gamma');
        return sl && +sl.value >= 90;
      }
    }
  ],

  '23_twistor_theory': [
    {
      id: 'many-null-lines',
      title: 'Visualize 20+ null lines',
      hint: 'Increase the number of lines slider to see the twistor correspondence.',
      check: function() {
        var sl = document.getElementById('nLines');
        return sl && +sl.value >= 20;
      }
    }
  ],

  '24_loop_quantum_gravity': [
    {
      id: 'high-spin-network',
      title: 'Explore high-j spin networks',
      hint: 'Push j-max to its maximum to see large spin network states.',
      check: function() {
        var sl = document.getElementById('jmaxSlider');
        return sl && +sl.value >= 8;
      }
    }
  ],

  '61_string_theory': [
    {
      id: 'high-vibration',
      title: 'Excite a high vibration mode',
      hint: 'Push the mode slider past 8 to see complex string oscillation patterns.',
      check: function() {
        var sl = document.getElementById('modeSlider');
        return sl && +sl.value >= 8;
      }
    }
  ],

  '25_higgs_field': [
    {
      id: 'symmetry-restore',
      title: 'Restore electroweak symmetry',
      hint: 'Increase temperature until the Higgs VEV drops to zero.',
      check: function() {
        var sl = document.getElementById('sldTemp');
        return sl && +sl.value >= 90;
      }
    }
  ],

  '26_number_systems': [
    {
      id: 'deep-surreal',
      title: 'Explore surreal numbers to depth 5+',
      hint: 'Push the surreal depth slider to reveal deep number tree structure.',
      check: function() {
        var sl = document.getElementById('surDepth');
        return sl && +sl.value >= 5;
      }
    }
  ],

  '27_visual_calculus': [
    {
      id: 'many-rectangles',
      title: 'Approximate an integral with 50+ rectangles',
      hint: 'Push the N slider high — watch the Riemann sum converge to the true area.',
      check: function() {
        var sl = document.getElementById('nRectSlider');
        return sl && +sl.value >= 50;
      }
    },
    {
      id: 'many-taylor-terms',
      title: 'Use 15+ Taylor series terms',
      hint: 'On the Taylor tab, push N high to see the polynomial match the function.',
      check: function() {
        var sl = document.getElementById('nTermSlider');
        return sl && +sl.value >= 15;
      }
    }
  ],

  '28_ccc_or': [
    {
      id: 'massive-or',
      title: 'Explore high-mass objective reduction',
      hint: 'Push the mass slider to maximum to see rapid state reduction.',
      check: function() {
        var sl = document.getElementById('orchMass');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '29_symplectic': [
    {
      id: 'kam-breakdown',
      title: 'Break KAM tori with strong perturbation',
      hint: 'Push the ε slider past 0.5 to see phase space become chaotic.',
      check: function() {
        var sl = document.getElementById('kamEpsSlider');
        return sl && +sl.value >= 50;
      }
    }
  ],

  '30_spinor_calculus': [
    {
      id: 'high-spin-weight',
      title: 'Explore spin-weight l ≥ 4',
      hint: 'Push the l slider to 4+ to see higher spin-weighted spherical harmonics.',
      check: function() {
        var sl = document.getElementById('lSlider');
        return sl && +sl.value >= 4;
      }
    }
  ],

  '31_instantons': [
    {
      id: 'large-instanton',
      title: 'Create a large instanton',
      hint: 'Push ρ (size) to maximum — the instanton dominates the field.',
      check: function() {
        var sl = document.getElementById('rhoSlider');
        return sl && +sl.value >= 80;
      }
    },
    {
      id: 'high-charge',
      title: 'Set topological charge to maximum',
      hint: 'Push the Q slider high — multiple instantons superpose.',
      check: function() {
        var sl = document.getElementById('qSlider');
        return sl && +sl.value >= 4;
      }
    }
  ],

  '32_representation_theory': [
    {
      id: 'full-rotation-rep',
      title: 'Rotate through all 360°',
      hint: 'Drag the rotation angle through a full circle.',
      check: function() {
        var sl = document.getElementById('rotAngle');
        return sl && +sl.value >= 350;
      }
    }
  ],

  '33_cohomology': [
    {
      id: 'many-vortices',
      title: 'Create 5+ vortices',
      hint: 'Push the vortex count slider to see how topology constrains the field.',
      check: function() {
        var sl = document.getElementById('vortexN');
        return sl && +sl.value >= 5;
      }
    }
  ],

  '34_riemann_zeta': [
    {
      id: 'many-zeros',
      title: 'Find 20+ non-trivial zeros',
      hint: 'Increase the zero count to see them line up on the critical strip.',
      check: function() {
        var sl = document.getElementById('nzeros');
        return sl && +sl.value >= 20;
      }
    }
  ],

  '36_riemann_surfaces': [
    {
      id: 'rotate-surface',
      title: 'Explore the full Riemann surface',
      hint: 'Drag the θ/τ slider through its full range to see all sheets.',
      check: function() {
        var sl = document.getElementById('thetaTauSlider');
        return sl && +sl.value >= 90;
      }
    }
  ],

  '38_standard_model': [
    {
      id: 'high-vev',
      title: 'Maximize the Higgs VEV',
      hint: 'Push the VEV slider to maximum to see how particle masses scale.',
      check: function() {
        var sl = document.getElementById('sldVev');
        return sl && +sl.value >= 90;
      }
    }
  ],

  '39_quantum_field_theory': [
    {
      id: 'strong-coupling',
      title: 'Enter the strong coupling regime',
      hint: 'Push λ past 5 — perturbation theory breaks down!',
      check: function() {
        var sl = document.getElementById('slLambda');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '41_homotopy': [
    {
      id: 'high-winding',
      title: 'Create a loop with winding number 5+',
      hint: 'Push the winding slider to see multiply-wound paths.',
      check: function() {
        var sl = document.getElementById('slWind');
        return sl && +sl.value >= 5;
      }
    }
  ],

  '42_clifford_algebras': [
    {
      id: 'full-rotor',
      title: 'Apply a full rotor rotation',
      hint: 'Drag the rotor slider to 360° to complete a geometric algebra rotation.',
      check: function() {
        var sl = document.getElementById('rotorSlider');
        return sl && +sl.value >= 350;
      }
    }
  ],

  '43_conformal_field_theory': [
    {
      id: 'high-central-charge',
      title: 'Explore high central charge',
      hint: 'Push c to its maximum to see how conformal symmetry changes.',
      check: function() {
        var sl = document.getElementById('cSlider');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '44_twistors': [
    {
      id: 'many-mhv',
      title: 'Compute a high-n MHV amplitude',
      hint: 'Set n ≥ 8 on the MHV Amplitudes tab.',
      check: function() {
        var sl = document.getElementById('mhvN');
        return sl && +sl.value >= 8;
      }
    }
  ],

  '46_gravitational_waves': [
    {
      id: 'high-mass-merger',
      title: 'Simulate a massive binary merger',
      hint: 'Push both mass sliders high to see strong gravitational wave signal.',
      check: function() {
        var m1 = document.getElementById('m1sl');
        var m2 = document.getElementById('m2sl');
        return m1 && m2 && +m1.value >= 80 && +m2.value >= 80;
      }
    }
  ],

  '47_quantum_optics': [
    {
      id: 'squeezed-state',
      title: 'Create a strongly squeezed state',
      hint: 'Push the squeeze parameter past 0.8.',
      check: function() {
        var sl = document.getElementById('sqrSlider');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '48_topological_matter': [
    {
      id: 'strong-field',
      title: 'Apply a strong magnetic field',
      hint: 'Push B to maximum — watch Landau levels separate clearly.',
      check: function() {
        var sl = document.getElementById('bSlider');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '49_quantum_networks': [
    {
      id: 'many-segments',
      title: 'Build a large quantum network',
      hint: 'Push the segments slider to maximum for a long entanglement chain.',
      check: function() {
        var sl = document.getElementById('segSlider');
        return sl && +sl.value >= 8;
      }
    }
  ],

  '50_semiconductor_quantum': [
    {
      id: 'deep-well',
      title: 'Create a deep quantum well',
      hint: 'Push the potential slider high to see many bound states.',
      check: function() {
        var sl = document.getElementById('slVg');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '51_photonics_fiber': [
    {
      id: 'total-reflection',
      title: 'Achieve total internal reflection',
      hint: 'Set the angle above the critical angle — light stays trapped in the fiber.',
      check: function() {
        var sl = document.getElementById('angleSlider');
        return sl && +sl.value >= 60;
      }
    }
  ],

  '52_category_theory': [
    {
      id: 'explore-category',
      title: 'Explore the category diagram',
      hint: 'Click through all the tabs to see how functors map between categories.',
      check: function() {
        var tabs = document.querySelectorAll('.tab');
        return tabs.length >= 3 && tabs[2] && tabs[2].classList.contains('active');
      }
    }
  ],

  '53_attosecond': [
    {
      id: 'high-intensity',
      title: 'Reach the tunneling regime',
      hint: 'Push laser intensity high — the Keldysh parameter drops below 1.',
      check: function() {
        var sl = document.getElementById('intSl');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '54_trapped_ions': [
    {
      id: 'many-ions',
      title: 'Trap 8+ ions',
      hint: 'Push the ion count slider to see a long Coulomb crystal.',
      check: function() {
        var sl = document.getElementById('ionNSl');
        return sl && +sl.value >= 8;
      }
    }
  ],

  '55_neutrino_oscillations': [
    {
      id: 'maximal-mixing',
      title: 'Set maximal atmospheric mixing',
      hint: 'Push θ₂₃ to 45° — the atmospheric mixing angle is near-maximal in nature!',
      check: function() {
        var sl = document.getElementById('th23Sl');
        return sl && Math.abs(+sl.value - 45) < 5;
      }
    }
  ],

  '56_muon_g2': [
    {
      id: 'fast-precession',
      title: 'Maximize precession speed',
      hint: 'Push the ring speed to maximum to see rapid muon spin precession.',
      check: function() {
        var sl = document.getElementById('ringSpeedSl');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '57_nuclear_fusion': [
    {
      id: 'ignition-temp',
      title: 'Reach fusion ignition temperature',
      hint: 'Push temperature above 100 million K — the Lawson criterion is nearly met.',
      check: function() {
        var sl = document.getElementById('p4TempSlider');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '58_dark_energy': [
    {
      id: 'dark-dominated',
      title: 'Create a dark-energy dominated universe',
      hint: 'Set ΩΛ above 0.9 — the universe expands exponentially.',
      check: function() {
        var sl = document.getElementById('omL');
        return sl && +sl.value >= 90;
      }
    }
  ],

  '59_spin_glasses': [
    {
      id: 'low-temperature',
      title: 'Freeze a spin glass',
      hint: 'Cool the system to near zero temperature — watch spins freeze in random orientations.',
      check: function() {
        var sl = document.getElementById('tempSlider');
        return sl && +sl.value <= 10;
      }
    }
  ],

  '60_penrose_singularity': [
    {
      id: 'trapped-surface',
      title: 'Form a trapped surface',
      hint: 'Increase the mass until a trapped surface appears — singularity is inevitable!',
      check: function() {
        var sl = document.getElementById('massSlider');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '62_adscft': [
    {
      id: 'strong-coupling',
      title: 'Explore strong coupling via holography',
      hint: 'Push λ (coupling) to maximum — the gravity dual becomes weakly curved.',
      check: function() {
        var sl = document.getElementById('slLambda');
        return sl && +sl.value >= 80;
      }
    }
  ],

  '63_qec': [
    {
      id: 'low-error',
      title: 'Push error rate below threshold',
      hint: 'Lower the physical error rate below the threshold — logical errors vanish!',
      check: function() {
        var sl = document.getElementById('slPth');
        return sl && +sl.value <= 15;
      }
    }
  ]
};
