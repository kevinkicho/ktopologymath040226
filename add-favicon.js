const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let updated = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('<link rel="icon"')) {
    content = content.replace('<head>', '<head>\n<link rel="icon" type="image/svg+xml" href="icon.svg">');
    fs.writeFileSync(filePath, content);
    updated++;
  }
}

console.log(`Updated ${updated} HTML files to include favicon link.`);
