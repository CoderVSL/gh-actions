import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/",
    projectId: "ozsx7a",
    setupNodeEvents(on, config) {
      // implement node event listeners here // added a comment  to the cypress file 
    },
  },
});
