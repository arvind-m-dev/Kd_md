// GET /api/rules-index: a compact list of every rule for the ⌘K palette (loaded on first open).
import { kd } from "@/lib/kd";

export function GET() {
  const rules = kd.rules.map((r) => ({
    id: r.id,
    text: r.text.length > 110 ? r.text.slice(0, 107) + "…" : r.text,
    status: r.status,
  }));
  const groups = kd.groups.map((g) => ({ id: g.id, title: g.title }));
  return Response.json({ rules, groups });
}
