const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://parabank.parasoft.com/parabank/index.htm',
    viewportHeight: 550,
    viewportWidth: 660,
    // experimentalStudio: true,
  },
});
