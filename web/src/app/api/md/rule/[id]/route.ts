// GET /rules/{BR-ID}.md (rewritten here): one rule with its status, issues and source.
import { getRule } from "@/lib/kd";
import { ruleMarkdown } from "@/lib/kd-markdown";

export async function GET(_req: Request, ctx: RouteContext<"/api/md/rule/[id]">) {
  const { id } = await ctx.params;
  const rule = getRule(id);
  if (!rule) return new Response(`No rule "${id}".\n`, { status: 404 });
  return new Response(ruleMarkdown(rule), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
