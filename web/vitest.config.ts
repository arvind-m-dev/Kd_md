import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // `server-only` throws outside React Server Components; tests run on the server anyway.
      "server-only": fileURLToPath(new URL("./tests/server-only-stub.ts", import.meta.url)),
    },
  },
  // The app's tsconfig keeps JSX for Next; tests render components with React's automatic runtime.
  esbuild: { jsx: "automatic" },
  test: { testTimeout: 60_000, include: ["tests/**/*.test.{ts,tsx}"], environment: "node" },
});
