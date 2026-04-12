const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 0;

const BLOCKED = /\.(env|key|pem|secret|string)$/i;
const BLOCKED_FILES = new Set([
  'firebase-config.js',
  'database.rules.json',
  'firestore.rules',
  'storage.rules',
  '.gitignore',
]);

app.use((req, res, next) => {
  const base = path.basename(req.path);
  if (BLOCKED_FILES.has(base) || BLOCKED.test(req.path)) {
    return res.status(404).end();
  }
  next();
});

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(PORT, () => {
  const addr = server.address();
  const url = `http://localhost:${addr.port}`;
  const pad = Math.max(0, 30 - url.length);
  console.log('');
  console.log('  ╔══════════════════════════════════════════╗');
  console.log('  ║   Road to Reality — Math Playground      ║');
  console.log(`  ║   ${url}${' '.repeat(pad)}║`);
  console.log('  ╚══════════════════════════════════════════╝');
  console.log('');
});
