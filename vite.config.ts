import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig as defineVitestConfig } from "vitest/config";
import dotenv from "dotenv";


const vitestConfig = defineVitestConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    env: dotenv.config({ path: ".env.test.local" }).parsed,
  },
});

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  ...vitestConfig,
});
