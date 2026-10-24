"use client";

import { ArrowUp, CircleAlert, Download, Loader2, Plus, Quote, Sparkles, Square, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { CopyButton } from "@/components/kd/copy-button";
import { StatusBadge } from "@/components/kd/status";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnswerMarkdown } from "./answer-markdown";
import { SourcePanel } from "./source-panel";
import type { PassageView, Turn } from "./types";

const STORE = "kd-ask-thread";
const MAX_HISTORY = 6;

const load = (): Turn[] => {
  try {
    const t = JSON.parse(localStorage.getItem(STORE) ?? "[]") as Turn[];
    return t.map((x) => (x.status === "streaming" ? { ...x, status: "error", error: "Interrupted." } : x));
  } catch {
    return [];
  }
};
const save = (turns: Turn[]) => {
  try {
    localStorage.setItem(STORE, JSON.stringify(turns.slice(-20)));
  } catch {
    /* storage full or blocked: the thread just isn't remembered */
  }
};

/** Answer text without the model's leading "STATUS: …" line (also while it is still streaming in). */
const visibleAnswer = (raw: string) => raw.replace(/^\s*STATUS:[^\n]*(\n|$)/, "").replace(/^\s*S(T(A(T(U(S(:[^\n]*)?)?)?)?)?)?$/, "");

function turnMarkdown(t: Turn): string {
  const cited = t.passages.filter((p) => t.cited.includes(p.label));
  return [
    `## ${t.question}`,
    "",
    `Status: ${t.status === "clear" ? "Clear" : `Needs clarity${t.note ? ` — ${t.note}` : ""}`}`,
    "",
    visibleAnswer(t.answer).trim(),
    "",
    "### Sources",
    "",
    ...cited.map((p) => `- [${p.label}] ${p.docTitle || p.groupTitle}${p.path.length ? ` › ${p.path.join(" › ")}` : ""} (kd.md lines ${p.lineStart}–${p.lineEnd})${p.docUrl ? ` ${p.docUrl}` : ""}`),
    "",
  ].join("\n");
}

function download(turns: Turn[]) {
  const md = `# Keydemand rules — questions and answers\n\n${turns.filter((t) => t.status !== "streaming").map(turnMarkdown).join("\n")}`;
  const url = URL.createObjectURL(new Blob([md], { type: "text/markdown" }));
  const a = Object.assign(document.createElement("a"), { href: url, download: "keydemand-answers.md" });
  a.click();
  URL.revokeObjectURL(url);
}

function Sources({ turn, onOpen }: { turn: Turn; onOpen: (p: PassageView) => void }) {
  const cited = turn.passages.filter((p) => turn.cited.includes(p.label));
  if (!cited.length) return null;
  return (
    <div className="mt-4">
      <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">Sources</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {cited.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => onOpen(p)}
            className="flex items-start gap-2.5 rounded-lg border bg-background p-2.5 text-left text-sm transition-colors hover:border-primary/40 hover:bg-accent/40"
          >
            <span className="mt-0.5 shrink-0 rounded bg-primary/12 px-1.5 font-mono text-[11px] font-semibold text-primary">{p.label}</span>
            <span className="min-w-0">
              <span className="line-clamp-1 font-medium">{p.docTitle || p.groupTitle}</span>
              <span className="line-clamp-1 text-xs text-muted-foreground">
                {p.path.length ? p.path.join(" › ") : p.groupTitle} · lines {p.lineStart}–{p.lineEnd}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TurnView({ turn, onOpen }: { turn: Turn; onOpen: (p: PassageView) => void }) {
  const answer = visibleAnswer(turn.answer);
  const byLabel = (label: string) => {
    const p = turn.passages.find((x) => x.label === label);
    if (p) onOpen(p);
  };
  return (
    <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="flex flex-col gap-3">
      {/* The question */}
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-primary-foreground">
        {turn.ruleIds.length > 0 && <p className="mb-1 font-mono text-xs opacity-80">{turn.ruleIds.join(", ")}</p>}
        {turn.selection && (
          <p className="mb-1.5 line-clamp-3 border-l-2 border-primary-foreground/40 pl-2 text-sm italic opacity-85">{turn.selection}</p>
        )}
        <p className="whitespace-pre-wrap">{turn.question}</p>
      </div>
      {/* The answer */}
      <div className="rounded-2xl rounded-bl-md border bg-card p-4 sm:p-5" data-askable>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {turn.status === "streaming" ? (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Loader2 className="size-3.5 animate-spin" />
              {answer ? "Writing the answer…" : `Reading ${turn.passages.length || "the"} passages…`}
            </span>
          ) : turn.status === "error" ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-destructive">
              <CircleAlert className="size-3.5" /> Couldn’t answer
            </span>
          ) : (
            <>
              <StatusBadge status={turn.status} />
              {turn.note && <span className="text-xs text-muted-foreground">{turn.note}</span>}
            </>
          )}
        </div>
        {answer && <AnswerMarkdown text={answer} onCite={byLabel} />}
        {turn.status === "streaming" && !answer && (
          <div className="flex flex-col gap-2" aria-hidden>
            {[90, 75, 82].map((w, i) => (
              <motion.span
                key={i}
                className="h-3 rounded bg-muted"
                style={{ width: `${w}%` }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </div>
        )}
        {turn.error && <p className="text-sm text-destructive">{turn.error}</p>}
        {turn.truncated && <p className="mt-2 text-xs text-muted-foreground">The answer was cut short. Ask a narrower question for the rest.</p>}
        {turn.status !== "streaming" && turn.status !== "error" && (
          <>
            <Sources turn={turn} onOpen={onOpen} />
            <div className="mt-3 flex flex-wrap gap-1 border-t pt-3">
              <CopyButton text={turnMarkdown(turn)} label="Copy answer" variant="ghost" />
            </div>
          </>
        )}
      </div>
    </motion.section>
  );
}

export function AskChat({ suggestions }: { suggestions: string[] }) {
  const sp = useSearchParams();
  const router = useRouter();
  const [turns, setTurns] = useState<Turn[]>([]);
  const [input, setInput] = useState("");
  const [context, setContext] = useState<{ ruleIds: string[]; selection: string }>({ ruleIds: [], selection: "" });
  const [panel, setPanel] = useState<PassageView | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const busy = turns.at(-1)?.status === "streaming";

  const patch = useCallback((id: string, fn: (t: Turn) => Partial<Turn>) => {
    setTurns((all) => all.map((t) => (t.id === id ? { ...t, ...fn(t) } : t)));
  }, []);

  const ask = useCallback(
    async (question: string, ruleIds: string[], selection: string, previous: Turn[]) => {
      const id = crypto.randomUUID();
      const turn: Turn = { id, question, ruleIds, selection, passages: [], answer: "", status: "streaming", note: "", cited: [], error: "", truncated: false };
      setTurns([...previous, turn]);
      setContext({ ruleIds: [], selection: "" });
      const history = previous
        .filter((t) => t.status === "clear" || t.status === "needs-clarity")
        .slice(-MAX_HISTORY)
        .map((t) => ({ question: t.question, answer: visibleAnswer(t.answer) }));
      const ctrl = new AbortController();
      abortRef.current = ctrl;
      try {
        const res = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question, history, ruleIds, selection }),
          signal: ctrl.signal,
        });
        if (!res.ok || !res.body) {
          const msg = await res.json().catch(() => ({}));
          throw new Error(msg.error ?? `The server answered ${res.status}.`);
        }
        const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
        let buf = "";
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          buf += value;
          const lines = buf.split("\n");
          buf = lines.pop() ?? "";
          for (const line of lines.filter(Boolean)) {
            const e = JSON.parse(line);
            if (e.type === "passages") patch(id, () => ({ passages: e.passages }));
            else if (e.type === "text") patch(id, (t) => ({ answer: t.answer + e.text }));
            else if (e.type === "done") patch(id, () => ({ status: e.status, note: e.note, cited: e.cited, truncated: e.truncated }));
            else if (e.type === "error") patch(id, () => ({ status: "error", error: e.message }));
          }
        }
        patch(id, (t) => (t.status === "streaming" ? { status: "error", error: "The answer stopped early. Try again." } : {}));
      } catch (err) {
        const stopped = err instanceof DOMException && err.name === "AbortError";
        patch(id, (t) => ({ status: stopped && t.answer ? "needs-clarity" : "error", error: stopped ? "Stopped." : (err as Error).message, note: stopped ? "Stopped early" : "" }));
      }
    },
    [patch],
  );

  // Restore the thread, then pick up ?q=&rules=&sel= from links like "Ask about this rule".
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const saved = load();
    const q = sp.get("q")?.trim() ?? "";
    const ruleIds = (sp.get("rules") ?? "").split(",").map((s) => s.trim().toUpperCase()).filter(Boolean).slice(0, 10);
    const selection = sp.get("sel")?.trim() ?? "";
    setTurns(saved);
    if (q || ruleIds.length || selection) {
      router.replace("/ask", { scroll: false });
      if (q) void ask(q, ruleIds, selection, saved);
      else setContext({ ruleIds, selection });
    }
  }, [sp, router, ask]);

  useEffect(() => {
    if (!busy) save(turns);
  }, [turns, busy]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [turns.length, busy]);

  const submit = (text = input) => {
    const q = text.trim();
    if (!q || busy) return;
    setInput("");
    void ask(q, context.ruleIds, context.selection, turns);
  };

  const hasContext = context.ruleIds.length > 0 || !!context.selection;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 sm:px-6">
      <div className="flex items-center justify-between gap-2 py-4">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <Sparkles className="size-4 text-primary" /> Ask
        </h1>
        {turns.length > 0 && (
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" onClick={() => download(turns)} disabled={busy}>
              <Download /> <span className="hidden sm:inline">Download .md</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={busy}
              onClick={() => {
                setTurns([]);
                save([]);
              }}
            >
              <Plus /> New chat
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-8 pb-6">
        {turns.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="my-auto py-10 text-center">
            <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-accent text-primary">
              <Sparkles className="size-6" />
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-balance">What would you like to know?</h2>
            <p className="mx-auto mt-2 max-w-md text-pretty text-muted-foreground">
              Answers come only from the Keydemand documents, with a link to each source. If the documents disagree or leave
              something open, the answer says “needs clarity”.
            </p>
            <div className="mx-auto mt-6 grid max-w-xl gap-2 sm:grid-cols-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submit(s)}
                  className="rounded-xl border bg-card p-3 text-left text-sm transition-colors hover:border-primary/40 hover:bg-accent/40"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}
        {turns.map((t) => (
          <TurnView key={t.id} turn={t} onOpen={setPanel} />
        ))}
        <div ref={endRef} />
      </div>

      {/* Composer: sits above the phone tab bar */}
      <div className="sticky bottom-16 z-20 -mx-4 bg-gradient-to-t from-background via-background to-transparent px-4 pt-6 pb-3 sm:-mx-6 sm:px-6 md:bottom-0 md:pb-6">
        <AnimatePresence>
          {hasContext && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="mb-2 flex items-start gap-2 rounded-xl border bg-card p-2.5 text-sm"
            >
              <Quote className="mt-0.5 size-4 shrink-0 text-primary" />
              <div className="min-w-0 flex-1">
                {context.ruleIds.length > 0 && <p className="font-mono text-xs">{context.ruleIds.join(", ")}</p>}
                {context.selection && <p className="line-clamp-2 text-muted-foreground italic">{context.selection}</p>}
              </div>
              <button type="button" aria-label="Remove context" onClick={() => setContext({ ruleIds: [], selection: "" })} className="rounded p-1 hover:bg-accent">
                <X className="size-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="flex items-end gap-2 rounded-2xl border bg-card p-2 pl-4 shadow-lg focus-within:ring-3 focus-within:ring-ring/40"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                e.preventDefault();
                submit();
              }
            }}
            rows={1}
            placeholder={turns.length ? "Ask a follow-up…" : "Ask about any rule, page or limit…"}
            aria-label="Your question"
            className="max-h-40 min-h-10 flex-1 resize-none bg-transparent py-2 text-base outline-none [field-sizing:content] placeholder:text-muted-foreground"
          />
          {busy ? (
            <Button type="button" size="icon" variant="secondary" onClick={() => abortRef.current?.abort()} aria-label="Stop">
              <Square className="fill-current" />
            </Button>
          ) : (
            <Button type="submit" size="icon" disabled={!input.trim()} aria-label="Ask">
              <ArrowUp />
            </Button>
          )}
        </form>
        <p className={cn("mt-2 text-center text-xs text-muted-foreground")}>
          Answers can be wrong. Check the sources. Prefer browsing?{" "}
          <Link href="/rules" className="underline underline-offset-2">
            Search the rules
          </Link>
        </p>
      </div>

      <SourcePanel passage={panel} onClose={() => setPanel(null)} />
    </div>
  );
}
