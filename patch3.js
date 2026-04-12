const fs = require('fs');

const file = '01_complex_explorer.html';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  /function initMaps\(\)\{[\s\S]*?drawMaps\(\);\r?\n\}/,
`function initMaps(){
  const c=document.getElementById('cm');
  resizeC(c);
  if(M.morphing && !M.raf) animMorph();
  else drawMaps();
}`
);

fs.writeFileSync(file, code);
console.log('initMaps patched correctly');
