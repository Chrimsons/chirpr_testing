const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {

  // Required for JSON reports & proper Gherkin step mapping
  await addCucumberPreprocessorPlugin(on, config);

  on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin(config)],
      })
  );

  // return modified config
  return config;
}

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://www.chirpr.au/login',
viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    // chromeWebSecurity: false,
    video: true,
    specPattern: "**/*.feature",
    setupNodeEvents,
},

});