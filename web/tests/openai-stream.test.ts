// The OpenAI-compatible provider against canned server-sent event streams (no network).
import { afterEach, expect, test, vi } from "vitest";
import { openAiCompatibleProvider } from "@/lib/ai/openai-compatible";

const sse = (body: string) => new Response(new ReadableStream({ start: (c) => (c.enqueue(new TextEncoder().encode(body)), c.close()) }), { status: 200 });
const chunk = (o: object) => `data: ${JSON.stringify(o)}\n\n`;

afterEach(() => vi.unstubAllGlobals());

const run = async (body: string) => {
  vi.stubEnv("KD_AI_BASE_URL", "http://x/v1");
  vi.stubEnv("KD_MODEL", "m");
  vi.stubGlobal("fetch", vi.fn(async () => sse(body)));
  const p = openAiCompatibleProvider("custom");
  let text = "";
  let thought = 0;
  const result = await p.stream({ system: "", messages: [], maxTokens: 10 }, (t) => (text += t), () => thought++);
  return { text, thought, result };
};

test("streams content and the finish reason", async () => {
  const { text, result } = await run(chunk({ choices: [{ delta: { content: "ab" } }] }) + chunk({ choices: [{ delta: {}, finish_reason: "length" }] }) + "data: [DONE]\n\n");
  expect(text).toBe("ab");
  expect(result.stop).toBe("max_tokens");
});

test("a last line without a newline is not lost", async () => {
  const { text } = await run(chunk({ choices: [{ delta: { content: "a" } }] }) + `data: ${JSON.stringify({ choices: [{ delta: { content: "bc" } }] })}`);
  expect(text).toBe("abc");
});

test("an error chunk mid-stream fails instead of passing as a finished answer", async () => {
  await expect(run(chunk({ choices: [{ delta: { content: '{"summary":"half' } }] }) + chunk({ error: { code: 429, message: "rate limited" }, choices: [{ delta: {}, finish_reason: "error" }] }))).rejects.toThrow(/rate limited/);
});

test("reasoning chunks signal thinking", async () => {
  const { thought, text } = await run(chunk({ choices: [{ delta: { reasoning: "hmm" } }] }) + chunk({ choices: [{ delta: { content: "x" } }] }));
  expect(thought).toBe(1);
  expect(text).toBe("x");
});

test("stops reading when the consumer goes away", async () => {
  vi.stubEnv("KD_AI_BASE_URL", "http://x/v1");
  vi.stubEnv("KD_MODEL", "m");
  vi.stubGlobal("fetch", vi.fn(async () => sse(chunk({ choices: [{ delta: { content: "a" } }] }).repeat(50))));
  let calls = 0;
  const p = openAiCompatibleProvider("custom");
  await expect(
    p.stream({ system: "", messages: [], maxTokens: 10 }, () => {
      calls++;
      throw new Error("reader gone");
    }),
  ).rejects.toThrow(/reader gone/);
  expect(calls).toBe(1);
});
