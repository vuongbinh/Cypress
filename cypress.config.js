const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'do9rqb',
  e2e: {
    specPattern: "./cypress/tests/*/*",
    baseUrl: "https://demoblaze.com/"
  },
  defaultCommandTimeout: 10000
});
