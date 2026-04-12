const fs = require('fs');
let code = fs.readFileSync('02_penrose_tiling.html', 'utf8');
code = code.split('\n').filter(line => line.trim() !== '\\').join('\n');
fs.writeFileSync('02_penrose_tiling.html', code);
console.log('Fixed slashes');
