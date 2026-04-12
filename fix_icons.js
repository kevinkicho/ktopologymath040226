const fs = require('fs');
const path = require('path');

const projectDir = process.cwd();
const brainDir = path.resolve(projectDir, '../../../../.gemini/antigravity/brain/f98e13d9-3279-4d56-a430-2250e0d0936e');
const iconsDir = path.join(projectDir, 'icons');

if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

const files = [
    { src: 'icon_fixed_128x128_1775610251529.png', dest: 'icon128.png' },
    { src: 'icon_fixed_48x48_1775610252518.png', dest: 'icon48.png' },
    { src: 'icon_fixed_16x16_1775610253506.png', dest: 'icon16.png' }
];

files.forEach(f => {
    const srcPath = path.join(brainDir, f.src);
    const destPath = path.join(iconsDir, f.dest);
    try {
        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log('Copied ' + f.dest);
        } else {
            console.error('Missing source: ' + srcPath);
        }
    } catch (err) {
        console.error('Error: ' + err.message);
    }
});
