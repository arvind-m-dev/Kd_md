// Any OpenAI-compatible chat API: OpenAI, OpenRouter, Groq, Ollama, LM Studio, vLLM, Azure-style gateways…
// Streams /chat/completions with plain fetch, so no extra SDK is needed.
import "server-only";
import type { AiProvider } from "./provider";

interface Preset {
  label: string;
  baseUrl: string;
  /** Environment variable that holds its key, besides KD_AI_API_KEY. Empty: no key needed. */
  keyEnv: string;
  model: string;
}

export const OPENAI_PRESETS: Record<string, Preset> = {
  openai: { label: "OpenAI", baseUrl: "https://api.openai.com/v1", keyEnv: "OPENAI_API_KEY", model: "gpt-5" },
  openrouter: { label: "OpenRouter", baseUrl: "https://openrouter.ai/api/v1", keyEnv: "OPENROUTER_API_KEY", model: "anthropic/claude-opus-5.5" },
  groq: { label: "Groq", baseUrl: "https://api.groq.com/openai/v1", keyEnv: "GROQ_API_KEY", model: "llama-3.3-70b-versatile" },
  ollama: { label: "Ollama (local)", baseUrl: "http://127.0.0.1:11434/v1", keyEnv: "", model: "llama3.1" },
  custom: { label: "OpenAI-compatible API", baseUrl: "", keyEnv: "", model: "" },
};

class HttpError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

export function openAiCompatibleProvider(id: string): AiProvider {
  const preset = OPENAI_PRESETS[id] ?? OPENAI_PRESETS.custom;
  const baseUrl = (process.env.KD_AI_BASE_URL || preset.baseUrl).replace(/\/+$/, "");
  const apiKey = process.env.KD_AI_API_KEY || (preset.keyEnv ? process.env[preset.keyEnv] : "") || "";
  const model = process.env.KD_MODEL || preset.model;
  const needsKey = !!preset.keyEnv;
  const keyName = preset.keyEnv ? `KD_AI_API_KEY (or ${preset.keyEnv})` : "KD_AI_API_KEY";

  return {
    id: OPENAI_PRESETS[id] ? id : "custom",
    label: preset.label,
    model,
    configured: !!baseUrl && !!model && (!needsKey || !!apiKey),
    setupHint: !baseUrl
      ? "Set KD_AI_BASE_URL to the API's base URL (ending in /v1) and KD_MODEL."
      : !model
        ? "Set KD_MODEL to the model to use."
        : `Set ${keyName} on the server.`,

    async stream(req, onText) {
      const res = await fetch(`${baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
        },
        body: JSON.stringify({
          model,
          stream: true,
          max_tokens: req.maxTokens,
          messages: [
            { role: "system", content: [req.system, req.cachedSystem].filter(Boolean).join("\n\n") },
            ...req.messages,
          ],
        }),
        signal: req.signal,
      });
      if (!res.ok || !res.body) {
        const detail = await res.text().catch(() => "");
        throw new HttpError(res.status, detail.slice(0, 300));
      }

      // Server-sent events: "data: {json}" lines, ending with "data: [DONE]".
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      let buf = "";
      let finish = "";
      let served = model;
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += value;
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";
        for (const line of lines) {
          const data = line.startsWith("data:") ? line.slice(5).trim() : "";
          if (!data || data === "[DONE]") continue;
          try {
            const chunk = JSON.parse(data);
            if (chunk.model) served = chunk.model;
            const choice = chunk.choices?.[0];
            if (choice?.delta?.content) onText(choice.delta.content);
            if (choice?.finish_reason) finish = choice.finish_reason;
          } catch {
            /* a keep-alive or partial line: skip it */
          }
        }
      }
      return { stop: finish === "length" ? "max_tokens" : finish === "content_filter" ? "refusal" : "end", model: served };
    },

    errorMessage(err) {
      if (err instanceof DOMException && err.name === "AbortError") return "Stopped.";
      if (err instanceof HttpError) {
        if (err.status === 401 || err.status === 403) return `${preset.label} credentials are missing or invalid. Set ${keyName} on the server.`;
        if (err.status === 404) return `${preset.label} doesn't know the model “${model}” or the URL ${baseUrl}. Check KD_MODEL and KD_AI_BASE_URL.`;
        if (err.status === 429) return "Too many questions right now. Wait a minute and try again.";
        return `${preset.label} error (${err.status}): ${err.message || "no details"}`;
      }
      if (err instanceof TypeError) return `Couldn't reach ${preset.label} at ${baseUrl}. Is it running, and is KD_AI_BASE_URL right?`;
      return "Something went wrong while answering. Try again.";
    },
  };
}
