// sw.js — Service Worker for offline support
// Strategy: cache-first for local assets, network-first for Firebase/external

var CACHE_NAME = 'kmath-v3.3';

// Core assets to pre-cache on install
var PRECACHE = [
  '/',
  '/index.html',
  '/paths.html',
  '/graph.html',
  '/graph3d.html',
  '/glossary.html',
  '/analytics.html',
  '/auto-start.js',
  '/paths-data.js',
  '/challenges-data.js',
  '/connections-data.js',
  '/difficulty-data.js',
  '/glossary-data.js',
  '/glossary-tooltip.js',
  '/quiz-data.js',
  '/search-data.js',
  '/tour-data.js',
  '/tour.js',
  '/firebase-progress.js',
  '/icon.svg',
  '/sw.js',
  '/01_complex_explorer.html',
  '/02_penrose_tiling.html',
  '/03_mandelbrot.html',
  '/04_hyperbolic.html',
  '/05_fourier.html',
  '/06_complex_calculus.html',
  '/07_spinors_lie.html',
  '/08_spacetime.html',
  '/09_quantum.html',
  '/10_lagrangian.html',
  '/11_dirac.html',
  '/12_gauge_theory.html',
  '/13_cosmology.html',
  '/14_diff_geometry.html',
  '/15_quaternions.html',
  '/16_diff_forms.html',
  '/17_fiber_bundles.html',
  '/18_infinity.html',
  '/19_general_relativity.html',
  '/20_thermodynamics.html',
  '/21_quantum_measurement.html',
  '/22_path_integrals.html',
  '/23_twistor_theory.html',
  '/24_loop_quantum_gravity.html',
  '/25_string_theory.html',
  '/25_higgs_field.html',
  '/26_number_systems.html',
  '/27_visual_calculus.html',
  '/28_ccc_or.html',
  '/29_symplectic.html',
  '/30_spinor_calculus.html',
  '/31_instantons.html',
  '/32_representation_theory.html',
  '/33_cohomology.html',
  '/34_riemann_zeta.html',
  '/35_black_holes.html',
  '/36_riemann_surfaces.html',
  '/37_maxwell.html',
  '/38_standard_model.html',
  '/39_quantum_field_theory.html',
  '/40_chaos.html',
  '/41_homotopy.html',
  '/42_clifford_algebras.html',
  '/43_conformal_field_theory.html',
  '/44_twistors.html',
  '/45_bell_theorem.html',
  '/46_gravitational_waves.html',
  '/47_quantum_optics.html',
  '/48_topological_matter.html',
  '/49_quantum_networks.html',
  '/50_semiconductor_quantum.html',
  '/51_photonics_fiber.html',
  '/52_category_theory.html',
  '/53_attosecond.html',
  '/54_trapped_ions.html',
  '/55_neutrino_oscillations.html',
  '/56_muon_g2.html',
  '/57_nuclear_fusion.html',
  '/58_dark_energy.html',
  '/59_spin_glasses.html',
  '/60_penrose_singularity.html',
  '/62_adscft.html',
  '/63_qec.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) { return n !== CACHE_NAME; })
          .map(function(n) { return caches.delete(n); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // Network-only for external APIs and analytics
  if (url.origin !== self.location.origin) {
    return; // let browser handle external requests normally
  }

  // Cache-first for local assets
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) {
        // Return cache hit, but also update cache in background
        var fetchPromise = fetch(event.request).then(function(response) {
          if (response.ok) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        }).catch(function() {});
        return cached;
      }
      // Not in cache — fetch and cache
      return fetch(event.request).then(function(response) {
        if (response.ok && url.origin === self.location.origin) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      });
    })
  );
});
