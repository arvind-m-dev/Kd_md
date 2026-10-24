// GET /api/ai: which AI answers Ask, and whether it is set up (never the key).
import { connection } from "next/server";
import { providerInfo } from "@/lib/ai/provider";

export async function GET() {
  // Read the environment per request, not once at build time.
  await connection();
  return Response.json(providerInfo(), { headers: { "Cache-Control": "no-store" } });
}
