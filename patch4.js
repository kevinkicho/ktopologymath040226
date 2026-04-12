const fs = require('fs');

const file = '01_complex_explorer.html';
let code = fs.readFileSync(file, 'utf8');

// CT patch
code = code.replace('deforming:false,deformT:0', 'deforming:true,deformT:0');
code = code.replace(
  '<button class="btn" id="ct-deform-btn" onclick="toggleCTDeform()">▶ Deform Contour</button>',
  '<button class="btn" id="ct-deform-btn" onclick="toggleCTDeform()">⏸ Stop Deform</button>'
);
code = code.replace(
  /function initCT\(\)([\s\S]*?)if\(CT\.needRedraw\|\|CT\.deforming\)\{[\s\S]*?\}\)\(\);\r?\n\}/,
`function initCT()$1if(CT.deforming) ctAnimLoop();
  else {
    (function loop(){
      CT.raf=requestAnimationFrame(loop);
      if(CT.needRedraw){renderCT(c);CT.needRedraw=false;}
    })();
  }
}`
);

// BC patch
code = code.replace('animating:false,pathT:0,raf:null,needRedraw:true', 'animating:true,pathT:0,raf:null,needRedraw:true');
code = code.replace(
  '<button class="btn" id="bc-anim-btn" onclick="toggleBCPath()">▶ Wind Around Branch Point</button>',
  '<button class="btn" id="bc-anim-btn" onclick="toggleBCPath()">⏸ Stop</button>'
);
code = code.replace(
  /function initBC\(\)([\s\S]*?)if\(BC\.needRedraw\|\|BC\.animating\)\{[\s\S]*?\}\)\(\);\r?\n\}/,
`function initBC()$1if(BC.animating) bcAnimLoop();
  else {
    (function loop(){
      BC.raf=requestAnimationFrame(loop);
      if(BC.needRedraw){renderBC(c);BC.needRedraw=false;}
    })();
  }
}`
);

// CF patch
code = code.replace('morphing:false,morphT:0,raf:null,needRedraw:true', 'morphing:true,morphT:0,raf:null,needRedraw:true');
code = code.replace(
  '<button class="btn" id="conf-morph-btn" onclick="toggleCFMorph()">▶ Animate Morph</button>',
  '<button class="btn" id="conf-morph-btn" onclick="toggleCFMorph()">⏸ Stop Morph</button>'
);
code = code.replace(
  /function initCF\(\)([\s\S]*?)if\(CF\.needRedraw\|\|CF\.morphing\)\{[\s\S]*?\}\)\(\);\r?\n\}/,
`function initCF()$1if(CF.morphing) cfAnimLoop();
  else {
    (function loop(){
      CF.raf=requestAnimationFrame(loop);
      if(CF.needRedraw){drawCF();CF.needRedraw=false;}
    })();
  }
}`
);

// JL patch
code = code.replace('pathAnim:false,pathT:0', 'pathAnim:true,pathT:0');
code = code.replace(
  '<button class="btn" id="julia-path-btn" onclick="toggleJuliaPath()">▶ Animate c along path</button>',
  '<button class="btn" id="julia-path-btn" onclick="toggleJuliaPath()">⏸ Stop</button>'
);

fs.writeFileSync(file, code);
console.log('All tabs patched successfully');
