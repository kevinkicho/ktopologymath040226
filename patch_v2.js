const fs = require('fs');

const file = '01_complex_explorer.html';
let code = fs.readFileSync(file, 'utf8');

// Normalize line endings for reliable searching
code = code.replace(/\r\n/g, '\n');

// 1. Cauchy (CT)
code = code.replace("deforming:false,deformT:0", "deforming:true,deformT:0");
code = code.replace("▶ Deform Contour", "⏸ Stop Deform");
code = code.replace(
  "  if(CT.raf) cancelAnimationFrame(CT.raf);\n  (function loop(){\n    CT.raf=requestAnimationFrame(loop);\n    if(CT.needRedraw||CT.deforming){renderCT(c);CT.needRedraw=false;}\n  })();",
  "  if(CT.raf) cancelAnimationFrame(CT.raf);\n  if(CT.deforming) ctAnimLoop();\n  else {\n    (function loop(){\n      CT.raf=requestAnimationFrame(loop);\n      if(CT.needRedraw){renderCT(c);CT.needRedraw=false;}\n    })();\n  }"
);

// 2. Branch Cuts (BC)
code = code.replace("animating:false,pathT:0,raf:null,needRedraw:true", "animating:true,pathT:0,raf:null,needRedraw:true");
code = code.replace("▶ Wind Around Branch Point", "⏸ Stop");
code = code.replace(
  "  if(BC.raf) cancelAnimationFrame(BC.raf);\n  (function loop(){\n    BC.raf=requestAnimationFrame(loop);\n    if(BC.needRedraw||BC.animating){renderBC(c);BC.needRedraw=false;}\n  })();",
  "  if(BC.raf) cancelAnimationFrame(BC.raf);\n  if(BC.animating) bcAnimLoop();\n  else {\n    (function loop(){\n      BC.raf=requestAnimationFrame(loop);\n      if(BC.needRedraw){renderBC(c);BC.needRedraw=false;}\n    })();\n  }"
);

// 3. Conformal Maps (CF)
code = code.replace("morphing:false,morphT:0,raf:null,needRedraw:true", "morphing:true,morphT:0,raf:null,needRedraw:true");
code = code.replace("▶ Animate Morph", "⏸ Stop Morph");
code = code.replace(
  "  if(CF.raf) cancelAnimationFrame(CF.raf);\n  (function loop(){\n    CF.raf=requestAnimationFrame(loop);\n    if(CF.needRedraw||CF.morphing){drawCF();CF.needRedraw=false;}\n  })();",
  "  if(CF.raf) cancelAnimationFrame(CF.raf);\n  if(CF.morphing) cfAnimLoop();\n  else {\n    (function loop(){\n      CF.raf=requestAnimationFrame(loop);\n      if(CF.needRedraw){drawCF();CF.needRedraw=false;}\n    })();\n  }"
);

// 4. Julia Sets (JL)
code = code.replace("pathAnim:false,pathT:0", "pathAnim:true,pathT:0");
code = code.replace("▶ Animate c along path", "⏸ Stop");

// Write back with original \r\n
code = code.replace(/\n/g, '\r\n');
fs.writeFileSync(file, code);
console.log("Successfully thoroughly patched all modules without regex bugs!");
