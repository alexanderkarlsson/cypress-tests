const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jirwbr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
