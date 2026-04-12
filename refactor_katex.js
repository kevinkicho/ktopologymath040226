const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/kevin/OneDrive/Desktop/ktopologymath040226';
const files = fs.readdirSync(rootDir);

const replacements = [
    {
        old: /https:\/\/cdn\.jsdelivr\.net\/npm\/katex@0\.16\.9\/dist\/katex\.min\.css/g,
        new: 'lib/katex/katex.min.css'
    },
    {
        old: /https:\/\/cdn\.jsdelivr\.net\/npm\/katex@0\.16\.9\/dist\/katex\.min\.js/g,
        new: 'lib/katex/katex.min.js'
    },
    {
        old: /https:\/\/cdn\.jsdelivr\.net\/npm\/katex@0\.16\.9\/dist\/contrib\/auto-render\.min\.js/g,
        new: 'lib/katex/auto-render.min.js'
    }
];

files.forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(rootDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        replacements.forEach(r => {
            if (content.match(r.old)) {
                content = content.replace(r.old, r.new);
                modified = true;
            }
        });

        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log('Updated KaTeX paths in: ' + file);
        }
    }
});
