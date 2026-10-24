// GET /api/rules-index: a compact list of every rule for the ⌘K palette (loaded on first open).
import { kd } from "@/lib/kd";
import { isExtraGroup, isExtraRule } from "@/lib/scope";

export function GET() {
  const rules = kd.rules.map((r) => ({
    id: r.id,
    text: r.text.length > 110 ? r.text.slice(0, 107) + "…" : r.text,
    status: r.status,
    ...(isExtraRule(r) && { extra: true }),
  }));
  const groups = kd.groups.map((g) => ({ id: g.id, title: g.title, ...(isExtraGroup(g.id) && { extra: true }) }));
  return Response.json({ rules, groups });
}
