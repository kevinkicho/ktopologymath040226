const fs = require('fs');
const file = '01_complex_explorer.html';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(/\r\n/g, '\n');

// 1. the correct A object
code = code.replace(
  "const A={z1:{re:2,im:1.5},z2:{re:-1,im:2},op:'add',scale:75,drag:null,raf:null,dirty:true};",
  "const A={z1:{re:2,im:1.5},z2:{re:-1,im:2},op:'add',scale:75,drag:null,raf:null,dirty:true,animating:true};\n\nfunction toggleArgandAnim(){\n  A.animating=!A.animating;\n  const b=document.getElementById('argand-anim-btn');\n  if(b) b.textContent=A.animating?'\\u23f8 Stop Orbit':'\\u25b6 Animate Sandbox';\n}"
);

code = code.replace(/\n/g, '\r\n');
fs.writeFileSync(file, code);
console.log("Fixed toggle func");
