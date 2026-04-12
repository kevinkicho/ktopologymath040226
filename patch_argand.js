const fs = require('fs');
const file = '01_complex_explorer.html';
let code = fs.readFileSync(file, 'utf8');

// Normalize line endings
code = code.replace(/\r\n/g, '\n');

// 1. Update A definition
code = code.replace("const A={op:'add', z1:{re:1.5,im:1}, z2:{re:-0.5,im:1.2}, scale:75, drag:null, raf:null, dirty:true};", "const A={op:'add', z1:{re:1.5,im:1}, z2:{re:-0.5,im:1.2}, scale:75, drag:null, raf:null, dirty:true, animating:true};\n\nfunction toggleArgandAnim(){\n  A.animating=!A.animating;\n  const b=document.getElementById('argand-anim-btn');\n  if(b) {\n    b.textContent=A.animating?'\\u23f8 Stop Orbit':'\\u25b6 Animate Sandbox';\n    b.className='btn'+(A.animating?'':' paused');\n  }\n}");

// Write back
code = code.replace(/\n/g, '\r\n');
fs.writeFileSync(file, code);
console.log("Argand fixed");
