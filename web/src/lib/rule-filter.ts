// Rule filtering for the Rules explorer (server side, from URL search params).
import "server-only";
import { getDoc, kd, type Rule } from "@/lib/kd";

export interface RuleFilter {
  q: string;
  group: string;
  status: "" | "clear" | "needs-clarity";
  doc: string;
}

export function readFilter(sp: Record<string, string | string[] | undefined>): RuleFilter {
  const one = (k: string) => (Array.isArray(sp[k]) ? sp[k][0] : sp[k]) ?? "";
  const status = one("status");
  return {
    q: one("q").trim().slice(0, 200),
    group: /^\d{2}$/.test(one("group")) ? one("group") : "",
    status: status === "clear" || status === "needs-clarity" ? status : "",
    doc: one("doc"),
  };
}

/** Every word must appear in the rule's ID, text, type or document title. Exact ID matches first. */
export function filterRules(f: RuleFilter): Rule[] {
  const words = f.q.toLowerCase().split(/\s+/).filter(Boolean);
  const hits = kd.rules.filter((r) => {
    if (f.group && r.group !== f.group) return false;
    if (f.status && r.status !== f.status) return false;
    if (f.doc && r.doc !== f.doc) return false;
    if (!words.length) return true;
    const hay = `${r.id} ${r.tag} ${r.text} ${r.doc ? getDoc(r.doc)?.title : ""}`.toLowerCase();
    return words.every((w) => hay.includes(w));
  });
  const exact = f.q.toUpperCase();
  return hits.sort((a, b) => Number(b.id === exact) - Number(a.id === exact));
}
