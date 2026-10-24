// GET /md/{07|conflicts|sources}.md (rewritten here): one KD chapter as Markdown.
import { groupMarkdown } from "@/lib/kd-markdown";

export async function GET(_req: Request, ctx: RouteContext<"/api/md/group/[name]">) {
  const { name } = await ctx.params;
  const md = groupMarkdown(name);
  if (!md) return new Response(`No group "${name}".\n`, { status: 404 });
  return new Response(md, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
