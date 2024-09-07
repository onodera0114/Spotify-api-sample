import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig as defineVitestConfig } from "vitest/config";

const vitestConfig = defineVitestConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "/src/test/vitest.setup.ts",
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
