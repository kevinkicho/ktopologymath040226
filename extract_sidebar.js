const fs = require('fs');
const code = fs.readFileSync('03_mandelbrot.html', 'utf8');
const p1 = code.indexOf('<div class="sidebar">');
const p2 = code.indexOf('<!-- ── CANVAS ── -->');
if (p1 !== -1 && p2 !== -1) {
    fs.writeFileSync('debug_sidebar.txt', code.substring(p1, p2));
} else {
    fs.writeFileSync('debug_sidebar.txt', 'Tags not found');
}
