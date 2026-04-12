const fs = require('fs');

const file = '01_complex_explorer.html';
let code = fs.readFileSync(file, 'utf8');

// Fix 1: Button
code = code.replace(
  '<button class="btn" id="morph-btn" onclick="toggleMorph()">▶ Morph Animation</button>',
  '<button class="btn" id="morph-btn" onclick="toggleMorph()">⏸ Stop Morph</button>'
);

// Fix 2: M object morphing state
code = code.replace(
  "const M={func:'sq',N:12,morphT:0,morphing:false,raf:null};",
  "const M={func:'sq',N:12,morphT:0,morphing:true,raf:null};"
);

// Fix 3: initMaps logic
code = code.replace(
  "function initMaps(){\n  const c=document.getElementById('cm');\n  resizeC(c);\n  drawMaps();\n}",
  "function initMaps(){\n  const c=document.getElementById('cm');\n  resizeC(c);\n  if(M.morphing && !M.raf) animMorph();\n  else drawMaps();\n}"
);

// Fix 4: c2Sphere math bounds
code = code.replace(
  "const p=c2Sphere({re:Math.cos(t)*1.2,im:Math.sin(t)*0.8});",
  "const p=c2Sphere({re:Math.cos(t),im:Math.sin(t)});"
);

// Euler fix just for fun (pause CPU leak) while we're at it!
// Replace unconditional renderEuler(c); with dirty check.
// Wait, to keep it safe I will just stick to what we discussed!

fs.writeFileSync(file, code);
console.log('Patched ' + file);
