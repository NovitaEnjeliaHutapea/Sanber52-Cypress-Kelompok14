const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://kasirdemo.belajarqa.com/',
    supportFile: false,
    //viewportWidth: 1800,
    //viewportHeight: 2500,
   
    setupNodeEvents(on, config) {
    },
  },
});
