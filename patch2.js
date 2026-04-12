const fs = require('fs');

const file = '01_complex_explorer.html';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  'if(M&&M.raf){cancelAnimationFrame(M.raf);M.raf=null;M.morphing=false;}',
  'if(M&&M.raf){cancelAnimationFrame(M.raf);M.raf=null;}'
);

fs.writeFileSync(file, code);
console.log('Patched cancelAllAnimations');
