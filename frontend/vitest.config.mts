import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
// Failed to load url resolved bug #3042: https://github.com/vitest-dev/vitest/discussions/3042
import tsconfigPaths from 'vite-tsconfig-paths';

// "foo" resolved to an ESM file. ESM file cannot be loaded by require. https://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
  },
});