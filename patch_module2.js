const fs = require('fs');
const file = '02_penrose_tiling.html';
let code = fs.readFileSync(file, 'utf8');
code = code.replace(/\r\n/g, '\n');

// 1. P object & Tab 1 anim
code = code.replace(
  "pan: {x:0, y:0}, zoom: 220, dragging: false, dragStart: null, dragPan: null,",
  "pan: {x:0, y:0}, zoom: 220, dragging: false, dragStart: null, dragPan: null, animating: true, animT: 0, raf: null,"
);

const domTab1Btn = `    <div>
      <button class="btn" style="width:100%;margin-bottom:8px" id="pan-anim-btn" onclick="togglePanAnim(this)">⏸ Stop Pan</button>
    </div>
    <div>
      <button class="btn" style="width:100%" onclick="resetView()">↻ Reset View</button>
    </div>`;
code = code.replace(
  "    <div>\n      <button class=\"btn\" style=\"width:100%\" onclick=\"resetView()\">&#8634; Reset View</button>\n    </div>",
  domTab1Btn.replace(/↻/g, '&#8634;')
);

const jsTab1Anim = `function togglePanAnim(btn) {
  P.animating = !P.animating;
  if(btn) btn.textContent = P.animating ? '⏸ Stop Pan' : '▶ Animate View';
  if(P.animating) panAnimate();
}
function panAnimate() {
  if(!P.animating || _activeTab !== 1) return;
  if(!P.dragging) {
    P.animT += 0.003 * (window.animSpeed||1);
    P.pan.x = Math.sin(P.animT) * 120;
    P.pan.y = Math.cos(P.animT * 0.7) * 90;
    render();
  }
  P.raf = requestAnimationFrame(panAnimate);
}
function initCanvas() {`;
code = code.replace("function initCanvas() {", jsTab1Anim);


// 2. DB Tab
code = code.replace(
  '<button class="btn active" id="db-anim-btn" onclick="dbToggleAnim(this)">Animate &#947;</button>',
  '<button class="btn active" id="db-anim-btn" onclick="dbToggleAnim(this)">⏸ Stop Animation</button>'
);
code = code.replace("requestAnimationFrame(dbAnimate);", "DB.animFrame = requestAnimationFrame(dbAnimate);");


// 3. QC Tab
code = code.replace(
  '<button class="btn-cyan active" id="qc-xray-btn" onclick="qcToggleXray(this)">Animate X-ray</button>',
  '<button class="btn-cyan active" id="qc-xray-btn" onclick="qcToggleXray(this)">⏸ Stop X-ray</button>'
);
code = code.replace("requestAnimationFrame(qcAnimate);", "QC.animFrame = requestAnimationFrame(qcAnimate);");


// 4. INFL Tab
code = code.replace(
  '<button class="btn active" id="infl-anim-btn" onclick="inflToggleAnim(this)">Animate Inflate/Deflate</button>',
  '<button class="btn active" id="infl-anim-btn" onclick="inflToggleAnim(this)">⏸ Stop Inflate</button>'
);
code = code.replace("requestAnimationFrame(inflAnimate);", "INFL.animFrame = requestAnimationFrame(inflAnimate);");


// 5. MR Tab (Matching Rules)
code = code.replace(
  '<button class="btn active" id="mr-enforce-btn" onclick="mrToggleEnforce(this)">Enforce Rules</button>',
  '<button class="btn active" id="mr-enforce-btn" onclick="mrToggleEnforce(this)">Enforce Rules</button>\n      <button class="btn active" id="mr-anim-btn" onclick="mrToggleAnim(this)">⏸ Stop Anim</button>'
);
code = code.replace(
  '<button class="btn-green" id="mr-worms-btn" onclick="mrToggleWorms(this)">Show Conway Worms</button>',
  '<button class="btn-green active" id="mr-worms-btn" onclick="mrToggleWorms(this)">Show Conway Worms</button>'
);
code = code.replace(
  "showWorms: false, enforce: true,",
  "showWorms: true, enforce: true, anim: true, animT: 0, animFrame: null,"
);

const mrAnimSys = `function mrToggleAnim(btn) {
  MR.anim = !MR.anim;
  if(btn) btn.textContent = MR.anim ? '⏸ Stop Anim' : '▶ Animate Rules';
  if(MR.anim) mrAnimate();
}
function mrAnimate() {
  if(!MR.anim || _activeTab !== 5) return;
  MR.animT += 0.02 * (window.animSpeed||1);
  drawMR();
  MR.animFrame = requestAnimationFrame(mrAnimate);
}
function drawMR() {`;
code = code.replace("function drawMR() {", mrAnimSys);

code = code.replace(
  "    ctx.strokeStyle = 'rgba(0,255,153,0.5)';\n    ctx.lineWidth = 2.5;\n    ctx.setLineDash([4,4]);",
  "    ctx.strokeStyle = \`hsla(\${(MR.animT*40)%360},100%,60%,0.6)\`;\n    ctx.lineWidth = 2.5;\n    ctx.setLineDash([4,4]);\n    if(MR.anim) ctx.lineDashOffset = -(MR.animT * 20);"
);

// 6. switchTab Engine & cancelAllAnimations
const switchEngine = `var _activeTab = 1;
function cancelAllAnimations() {
  if (P.raf) { cancelAnimationFrame(P.raf); P.raf = null; }
  if (DB.animFrame) { cancelAnimationFrame(DB.animFrame); DB.animFrame = null; }
  if (QC.animFrame) { cancelAnimationFrame(QC.animFrame); QC.animFrame = null; }
  if (INFL.animFrame) { cancelAnimationFrame(INFL.animFrame); INFL.animFrame = null; }
  if (MR.animFrame) { cancelAnimationFrame(MR.animFrame); MR.animFrame = null; }
}
function switchTab(n) {
  cancelAllAnimations();
  document.querySelectorAll('.tab').forEach(function(t,i){ t.classList.toggle('active', i+1===n); });
  document.querySelectorAll('.tab-panel').forEach(function(p,i){ p.classList.toggle('active', i+1===n); });
  _activeTab = n;
  if (n===1) { initCanvas(); render(); if (P.animating) panAnimate(); }
  else if (n===2) { initDBCanvas(); drawDB(); if (DB.anim) dbAnimate(); }
  else if (n===3) { initQCCanvas(); drawQC(); if (QC.xrayAnim) qcAnimate(); }
  else if (n===4) { initInflCanvas(); drawInfl(); if (INFL.anim) inflAnimate(); }
  else if (n===5) { initMRCanvas(); drawMR(); if (MR.anim) mrAnimate(); }
}`;

const oldSwitchTabRegex = /var _activeTab = 1;[\s\n]*function switchTab\(n\) \{[\s\S]*?else if \(n===5\) \{ initMRCanvas\(\); drawMR\(\); \}\n\}/;
code = code.replace(oldSwitchTabRegex, switchEngine);

// 7. window.addEventListener load
code = code.replace(
  "  render();\n  // Start animations for background tabs\n  dbAnimate();\n  qcAnimate();\n  inflAnimate();",
  "  render();\n  if (P.animating) panAnimate();"
);
code = code.replace(
  "  render();\n  dbAnimate();\n  qcAnimate();\n  inflAnimate();",
  "  render();\n  if (P.animating) panAnimate();"
);

code = code.replace(/\n/g, '\r\n');
fs.writeFileSync(file, code);
console.log('Module 2 animations fully patched!');
