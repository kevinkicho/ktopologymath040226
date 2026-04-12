const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
    { url: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js', dest: 'lib/katex/katex.min.js' },
    { url: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css', dest: 'lib/katex/katex.min.css' },
    { url: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js', dest: 'lib/katex/auto-render.min.js' }
];

async function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                download(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

(async () => {
    for (const item of urls) {
        console.log(`Downloading ${item.url}...`);
        try {
            await download(item.url, item.dest);
            console.log(`Saved to ${item.dest}`);
        } catch (err) {
            console.error(`Error downloading ${item.url}: ${err.message}`);
        }
    }
})();
