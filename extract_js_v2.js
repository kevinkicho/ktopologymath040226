const fs = require('fs');
const path = require('path');

const logFile = 'c:/Users/kevin/OneDrive/Desktop/ktopologymath040226/extract_log.txt';
const src = 'C:/Users/kevin/.gemini/antigravity/brain/f98e13d9-3279-4d56-a430-2250e0d0936e/.system_generated/steps/320/content.md';
const dest = 'c:/Users/kevin/OneDrive/Desktop/ktopologymath040226/lib/katex/katex.min.js';

function log(msg) {
    fs.appendFileSync(logFile, msg + '\n');
}

log('Starting extraction...');

try {
    if (!fs.existsSync(src)) {
        log('Source not found: ' + src);
        process.exit(1);
    }
    
    const data = fs.readFileSync(src, 'utf8');
    log('Read ' + data.length + ' bytes');
    
    const parts = data.split('---');
    if (parts.length < 2) {
        log('Could not find delimiter');
        process.exit(1);
    }
    
    let jsContent = parts.slice(1).join('---').trim();
    log('Processed ' + jsContent.length + ' bytes of JS');
    
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    fs.writeFileSync(dest, jsContent);
    log('Wrote successfully to ' + dest);
} catch (err) {
    log('Error: ' + err.message);
    process.exit(1);
}
