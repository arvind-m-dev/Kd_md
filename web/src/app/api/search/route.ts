// GET /api/search?q=...&k=12: BM25 passages with source details. No AI, no credentials needed.
import type { NextRequest } from "next/server";
import { getRule } from "@/lib/kd";
import { passageView, search } from "@/lib/search";
import { isExtraPassage, showsAll } from "@/lib/scope";

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q") ?? "").trim().slice(0, 500);
  const k = Math.min(Math.max(Number(req.nextUrl.searchParams.get("k")) || 12, 1), 50);
  if (!q) return Response.json({ query: q, results: [], rules: [] });
  // Working notes only when the "Working notes" switch is on (lib/scope.ts).
  const all = showsAll(req.headers.get("cookie"));
  const results = search(q, k, all ? undefined : (p) => !isExtraPassage(p)).map((pid, i) => passageView(pid, `P${i + 1}`));
  // Rules defined in the top passages, for rule cards next to the passages.
  const rules = [...new Set(results.flatMap((p) => p.brIds))]
    .map((id) => getRule(id))
    .filter((r) => r !== undefined)
    .slice(0, 20);
  return Response.json({ query: q, results, rules });
}
