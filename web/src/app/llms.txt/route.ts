// GET /llms.txt: entry point for AI tools (https://llmstxt.org), linking the Markdown views.
import { llmsTxt } from "@/lib/kd-markdown";

export function GET(req: Request) {
  return new Response(llmsTxt(new URL(req.url).origin), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
