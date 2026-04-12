// @ts-check
const { test, expect } = require('@playwright/test');

const HTML_FILES = [
  '01_complex_explorer.html',
  '02_penrose_tiling.html',
  '03_mandelbrot.html',
  '04_hyperbolic.html',
  '05_fourier.html',
  '06_complex_calculus.html',
  '07_spinors_lie.html',
  '08_spacetime.html',
  '09_quantum.html',
  '10_lagrangian.html',
  '11_dirac.html',
  '12_gauge_theory.html',
  '13_cosmology.html',
  '14_diff_geometry.html',
  '15_quaternions.html',
  '16_diff_forms.html',
  '17_fiber_bundles.html',
  '18_infinity.html',
  '19_general_relativity.html',
  '20_thermodynamics.html',
  '21_quantum_measurement.html',
  '22_path_integrals.html',
  '23_twistor_theory.html',
  '24_loop_quantum_gravity.html',
  '25_higgs_field.html',
  '25_string_theory.html',
  '26_number_systems.html',
  '27_visual_calculus.html',
  '28_ccc_or.html',
  '29_symplectic.html',
  '30_spinor_calculus.html',
  '31_instantons.html',
  '32_representation_theory.html',
  '33_cohomology.html',
  '34_riemann_zeta.html',
  '35_black_holes.html',
  '36_riemann_surfaces.html',
  '37_maxwell.html',
  '38_standard_model.html',
  '39_quantum_field_theory.html',
  '40_chaos.html',
  '41_homotopy.html',
  '42_clifford_algebras.html',
  '43_conformal_field_theory.html',
  '44_twistors.html',
  '45_bell_theorem.html',
  '46_gravitational_waves.html',
  '47_quantum_optics.html',
  '48_topological_matter.html',
  '49_quantum_networks.html',
  '50_semiconductor_quantum.html',
  '51_photonics_fiber.html',
  '52_category_theory.html',
  '53_attosecond.html',
  '54_trapped_ions.html',
  '55_neutrino_oscillations.html',
  '56_muon_g2.html',
  '57_nuclear_fusion.html',
  '58_dark_energy.html',
  '59_spin_glasses.html',
  '60_penrose_singularity.html',
];

// Stubs served instead of CDN resources — eliminates network round-trips.
// katex.min.js also pre-defines renderMathInElement so the onload="..." on
// the same script tag doesn't throw before auto-render.min.js loads.
const KATEX_JS_STUB = `
window.katex={render:function(){},renderToString:function(){return'';},version:'0.16.9'};
window.renderMathInElement=function(){};
`;
const AUTO_RENDER_STUB = `window.renderMathInElement=function(){};`;

for (const file of HTML_FILES) {
  test(`loads without errors: ${file}`, async ({ page }) => {
    // Intercept CDN requests with local stubs (no network round-trip).
    await page.route('**/katex.min.js', (r) =>
      r.fulfill({ contentType: 'application/javascript', body: KATEX_JS_STUB })
    );
    await page.route('**/auto-render.min.js', (r) =>
      r.fulfill({ contentType: 'application/javascript', body: AUTO_RENDER_STUB })
    );
    await page.route('**/katex.min.css', (r) =>
      r.fulfill({ contentType: 'text/css', body: '' })
    );

    const jsErrors = [];
    page.on('pageerror', (err) => jsErrors.push(err.message));

    await page.goto(`/${file}`, { waitUntil: 'domcontentloaded' });
    // Poll for canvas readiness (avoids a fixed sleep; exits as soon as ready).
    await page.waitForFunction(() => {
      const canvas = document.querySelector('canvas');
      if (canvas) return canvas.width > 0 && canvas.height > 0;
      return document.readyState === 'complete';
    }, { timeout: 5000 }).catch(() => {});

    expect(jsErrors, `JS errors in ${file}: ${jsErrors.join('; ')}`).toHaveLength(0);
  });
}
