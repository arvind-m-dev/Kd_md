// One interface over the AI that answers Ask questions. Pick it with environment variables:
//
//   KD_AI_PROVIDER   anthropic (default) | openai | openrouter | groq | ollama | custom
//   KD_MODEL         model ID (each provider has a default)
//   KD_AI_BASE_URL   base URL of an OpenAI-compatible API (custom, or to override a preset)
//   KD_AI_API_KEY    API key for an OpenAI-compatible provider (or its own variable, e.g. OPENAI_API_KEY)
//   ANTHROPIC_API_KEY  for the anthropic provider
//
// Every provider streams plain text through `onText` and reports how the answer ended.
import "server-only";
import { anthropicProvider } from "./anthropic";
import { openAiCompatibleProvider, OPENAI_PRESETS } from "./openai-compatible";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface StreamRequest {
  /** Instructions that change per request (kept small). */
  system: string;
  /** A large system block that is identical on every request; providers that support it cache it. */
  cachedSystem?: string;
  messages: ChatMessage[];
  maxTokens: number;
  signal?: AbortSignal;
}

export interface StreamResult {
  stop: "end" | "max_tokens" | "refusal";
  model: string;
}

export interface AiProvider {
  /** Short ID, e.g. "anthropic" or "openrouter". */
  id: string;
  /** Name for people, e.g. "Claude (Anthropic)". */
  label: string;
  model: string;
  /** False when the credentials it needs are not set; Ask then explains how to set them. */
  configured: boolean;
  /** What to set when not configured. */
  setupHint: string;
  stream(req: StreamRequest, onText: (text: string) => void): Promise<StreamResult>;
  /** A plain-language message for an error thrown by `stream`. */
  errorMessage(err: unknown): string;
}

export const PROVIDER_IDS = ["anthropic", ...Object.keys(OPENAI_PRESETS)] as const;

let cached: AiProvider | null = null;

export function getProvider(): AiProvider {
  if (cached) return cached;
  const id = (process.env.KD_AI_PROVIDER || "anthropic").trim().toLowerCase();
  cached = id === "anthropic" ? anthropicProvider() : openAiCompatibleProvider(id);
  return cached;
}

/** What the UI may show about the AI: never the key. */
export function providerInfo() {
  const p = getProvider();
  return { id: p.id, label: p.label, model: p.model, configured: p.configured, setupHint: p.configured ? "" : p.setupHint };
}
