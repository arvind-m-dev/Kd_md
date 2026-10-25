// Claude through the Anthropic API (the default provider).
import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import type { AiProvider } from "./provider";

export function anthropicProvider(): AiProvider {
  const model = process.env.KD_MODEL || "claude-opus-5-5";
  let client: Anthropic | null = null;
  const getClient = () => (client ??= new Anthropic());

  return {
    id: "anthropic",
    label: "Claude (Anthropic)",
    model,
    // The SDK also reads credentials from `ant auth login`, so a missing variable is not fatal.
    configured: true,
    setupHint: "Set ANTHROPIC_API_KEY on the server.",

    async stream(req, onText) {
      const system: Anthropic.Beta.BetaTextBlockParam[] = [{ type: "text", text: req.system }];
      // Identical on every request, so it is cached.
      if (req.cachedSystem) system.push({ type: "text", text: req.cachedSystem, cache_control: { type: "ephemeral" } });
      const run = getClient().beta.messages.stream(
        {
          model,
          max_tokens: req.maxTokens,
          system,
          messages: req.messages,
          output_config: {
            effort: req.effort ?? "medium",
            ...(req.json ? { format: { type: "json_schema" as const, schema: req.json.schema } } : {}),
          },
          betas: ["server-side-fallback-2026-07-01"],
          fallbacks: "default",
        },
        { signal: req.signal },
      );
      for await (const event of run) {
        if (event.type === "content_block_delta" && event.delta.type === "text_delta") onText(event.delta.text);
      }
      const msg = await run.finalMessage();
      return {
        stop: msg.stop_reason === "refusal" ? "refusal" : msg.stop_reason === "max_tokens" ? "max_tokens" : "end",
        model: msg.model,
        enforcedJson: !!req.json,
      };
    },

    errorMessage(err) {
      if (err instanceof Anthropic.AuthenticationError) return "Claude credentials are missing or invalid. Set ANTHROPIC_API_KEY on the server.";
      if (err instanceof Anthropic.RateLimitError) return "Too many questions right now. Wait a minute and try again.";
      if (err instanceof Anthropic.APIUserAbortError) return "Stopped.";
      if (err instanceof Anthropic.APIError) return `Claude API error (${err.status ?? "network"}): ${err.message}`;
      if (err instanceof Error && /api key|apiKey|authentication|credentials/i.test(err.message)) {
        return "Claude credentials are missing. Set ANTHROPIC_API_KEY on the server.";
      }
      return "Something went wrong while answering. Try again.";
    },
  };
}
