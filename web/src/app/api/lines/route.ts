// GET /api/lines?start=100&end=120&pad=15: raw kd.md lines around a range.
import type { NextRequest } from "next/server";
import { kdLines } from "@/lib/kd-md";

export async function GET(req: NextRequest) {
  const p = req.nextUrl.searchParams;
  const start = Number(p.get("start"));
  const end = Number(p.get("end")) || start;
  const pad = Math.min(Number(p.get("pad") ?? 15) || 0, 200);
  if (!start || end < start) return Response.json({ error: "start and end are required" }, { status: 400 });
  const s = Math.max(1, start - pad);
  const e = Math.min(kdLines.length, end + pad, s + 2000);
  return Response.json({ start: s, end: e, hlStart: start, hlEnd: end, lines: kdLines.slice(s - 1, e) });
}
