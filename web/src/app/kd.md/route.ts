// GET /kd.md: the full Keydemand business-rules knowledge base as Markdown, for AI tools.
import { kdMd } from "@/lib/kd-md";

export function GET() {
  return new Response(kdMd, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'inline; filename="kd.md"',
    },
  });
}
