const fs = require('fs');
let code = fs.readFileSync('03_mandelbrot.html', 'utf-8');
code = code.replace('<button class="btn active" id="orbit-btn" onclick="toggleOrbit(this)">Orbit</button>', '<button class="btn" id="orbit-btn" onclick="toggleOrbit(this)">Orbit</button>');
code = code.replace(/showOrbit:true,\s*showAxes:true,/, 'showOrbit:false,\n  showAxes:true,');
fs.writeFileSync('03_mandelbrot.html', code);
console.log('Successfully patched UI defaults without destroying HTML integrity');
