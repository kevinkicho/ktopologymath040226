const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.js'));
let found = [];
for (const f of files) {
    const txt = fs.readFileSync(f, 'utf8');
    if (txt.includes('kanim') || txt.includes('animate') || txt.includes('speed') || txt.includes('Animate')) {
        found.push(f);
    }
}
fs.writeFileSync('found_injector.txt', found.join('\n'));
