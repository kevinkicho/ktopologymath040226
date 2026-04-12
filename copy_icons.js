const fs = require('fs');
const path = require('path');

const files = [
    { src: 'C:/Users/kevin/.gemini/antigravity/brain/f98e13d9-3279-4d56-a430-2250e0d0936e/icon_fixed_128x128_1775610251529.png', dest: 'icons/icon128.png' },
    { src: 'C:/Users/kevin/.gemini/antigravity/brain/f98e13d9-3279-4d56-a430-2250e0d0936e/icon_fixed_48x48_1775610252518.png', dest: 'icons/icon48.png' },
    { src: 'C:/Users/kevin/.gemini/antigravity/brain/f98e13d9-3279-4d56-a430-2250e0d0936e/icon_fixed_16x16_1775610253506.png', dest: 'icons/icon16.png' }
];

files.forEach(f => {
    try {
        if (!fs.existsSync(f.src)) {
            console.error('Source missing: ' + f.src);
            return;
        }
        fs.copyFileSync(f.src, f.dest);
        console.log('Copied ' + f.dest);
    } catch (err) {
        console.error('Error copying ' + f.dest + ': ' + err.message);
    }
});
