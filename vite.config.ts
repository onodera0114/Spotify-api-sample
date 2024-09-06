import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig as defineVitestConfig } from "vitest/config";

const vitestConfig = defineVitestConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
});

export default defineConfig({
  plugins: [react()],
  ...vitestConfig,
});
