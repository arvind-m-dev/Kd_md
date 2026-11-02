import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // content/kd.md is read with fs at runtime; make sure Vercel bundles it with every function.
  outputFileTracingIncludes: { "/**": ["./content/kd.md"] },
  // Markdown views for AI tools: /md/07.md (one group; also conflicts, sources) and /rules/BR-REL-001.md (one rule).
  async rewrites() {
    return [
      { source: "/md/:name(\\d{2}|conflicts|sources)\\.md", destination: "/api/md/group/:name" },
      { source: "/rules/:id(BR-[A-Za-z0-9]+-\\d+)\\.md", destination: "/api/md/rule/:id" },
      // MCP server for AI tools (app/api/mcp).
      { source: "/mcp", destination: "/api/mcp" },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    // The app lives in web/; pin the root so a package-lock.json higher up (the repo root has one) isn't picked instead.
    root: dirname(fileURLToPath(import.meta.url)),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
