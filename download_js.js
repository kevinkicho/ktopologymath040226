const https = require('https');
const fs = require('fs');

const url = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';
const dest = 'lib/katex/katex.min.js';

const file = fs.createWriteStream(dest);
https.get(url, (response) => {
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res) => {
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log('DONE');
                process.exit(0);
            });
        });
    } else {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log('DONE');
            process.exit(0);
        });
    }
}).on('error', (err) => {
    console.error(err);
    process.exit(1);
});
