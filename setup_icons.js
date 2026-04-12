const fs = require('fs');
const path = require('path');

const brain = 'C:/Users/kevin/.gemini/antigravity/brain/f98e13d9-3279-4d56-a430-2250e0d0936e';
const iconsDir = path.join(__dirname, 'icons');

if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

const copies = [
    ['icon192_1775612440694.png', 'icon192.png'],
    ['icon512_1775612459970.png', 'icon512.png'],
    ['icon16_1775612478414.png', 'icon16.png']
];

let ok = 0;
copies.forEach(([src, dest]) => {
    const srcPath = path.join(brain, src);
    const destPath = path.join(iconsDir, dest);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        const stat = fs.statSync(destPath);
        console.log('OK: ' + dest + ' (' + stat.size + ' bytes)');
        ok++;
    } else {
        console.error('MISSING: ' + srcPath);
    }
});

// Also clean up heartbeat.txt
const hb = path.join(iconsDir, 'heartbeat.txt');
if (fs.existsSync(hb)) fs.unlinkSync(hb);

console.log('\nDone: ' + ok + '/' + copies.length + ' icons copied');
