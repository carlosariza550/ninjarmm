const { defineConfig } = require('cypress');

module.exports = {
  e2e: {
    baseUrl: 'https://app.ninjarmm.com/auth/#/login',
    specPattern: 'cypress/e2e/**/*.spec.js',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    video: false,
    screenshotsFolder: 'cypress/screenshots',
    downloadsFolder: 'cypress/downloads',
  },
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'results/test-results.xml',
    toConsole: true,
  },
};