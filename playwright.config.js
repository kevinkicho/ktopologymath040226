// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 15000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  workers: 8,
  reporter: [['list'], ['json', { outputFile: 'test-results/results.json' }]],
  use: {
    baseURL: 'http://localhost:4271',
    browserName: 'chromium',
    headless: true,
    channel: undefined,
    launchOptions: {
      executablePath: undefined,
      chromiumSandbox: false,
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-extensions',
        '--disable-background-networking',
        '--disable-sync',
        '--metrics-recording-only',
        '--disable-default-apps',
        '--mute-audio',
        '--no-first-run',
        '--disable-translate',
      ],
    },
  },
});
