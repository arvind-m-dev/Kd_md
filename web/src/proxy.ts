// Unknown rule, topic and document URLs get a real 404. Those pages stream (Suspense), so a notFound()
// inside them would arrive after a 200 status; checking here, before rendering, sets the status right.
import { NextResponse, type NextRequest } from "next/server";
import ids from "@/generated/route-ids.json";

const rules = new Set(ids.rules);
const groups = new Set(ids.groups);
const docs = new Set(ids.docs);

export function proxy(req: NextRequest) {
  const parts = req.nextUrl.pathname.split("/").filter(Boolean).map(decodeURIComponent);
  let known = true;
  if (parts[0] === "rules" && parts.length === 2) {
    // /rules/BR-REL-001.md is a Markdown view (next.config rewrite); its handler answers 404 itself.
    known = parts[1].endsWith(".md") || rules.has(parts[1].toUpperCase());
  } else if (parts[0] === "read" && parts.length === 2) {
    known = groups.has(parts[1]);
  } else if (parts[0] === "read" && parts.length === 3) {
    known = docs.has(`${parts[1]}/${parts[2]}`);
  }
  // Any path no route matches renders the app's not-found page with status 404.
  return known ? NextResponse.next() : NextResponse.rewrite(new URL("/_not-found-kd", req.url));
}

export const config = { matcher: ["/rules/:id", "/read/:group", "/read/:group/:doc"] };
