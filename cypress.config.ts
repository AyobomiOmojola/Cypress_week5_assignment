import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    reporter: 'mochawesome',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1440,
  viewportHeight: 1000,
  screenshotOnRunFailure: true
});
