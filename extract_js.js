const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\kevin\\.gemini\\antigravity\\brain\\f98e13d9-3279-4d56-a430-2250e0d0936e\\.system_generated\\steps\\320\\content.md';
const dest = 'lib/katex/katex.min.js';

try {
    const data = fs.readFileSync(src, 'utf8');
    // Content starts after the first "---" and newlines
    const parts = data.split('---');
    if (parts.length < 2) throw new Error('Could not find delimiter');
    
    let jsContent = parts.slice(1).join('---').trim();
    
    // Ensure the directory exists
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    fs.writeFileSync(dest, jsContent);
    console.log('Successfully wrote ' + jsContent.length + ' bytes to ' + dest);
} catch (err) {
    console.error('Error: ' + err.message);
    process.exit(1);
}
