// "Working notes": discussions, meeting notes, backlog and Phase 2, and the open-questions / meta material.
// Hidden by default so the app shows the main business rules, logic and requirements; the
// "Show working notes" switch (components/shell/scope-toggle.tsx) brings them back. Used on server and client.

/** Topic groups that are working notes as a whole: 03 Clarifications, Doubts & Client Discussions. */
export const EXTRA_GROUPS = new Set(["03"]);

/** Single documents that are working notes. */
export const EXTRA_DOCS = new Set([
  "02-3", // July 29th - Business rules and Action items (meeting notes)
  "02-4", // Changes told in this week meeting (meeting notes)
  "07-27", // Images for Demand - Relevancy … as discussed in Client call
  "04-15", // STORIES (backlog, overridden by the PRD)
  "04-16", // Epics (backlog index)
  "05-18", // Master Sheet Fields - Phase 2 (not Phase 1 scope)
]);

/** Pages that are working notes: open questions, the source register and the AI connector. */
export const EXTRA_PAGES = new Set(["/conflicts", "/sources", "/connect"]);

/** Cookie the switch sets; "all" shows working notes. Read by server routes (Rules, Search, Ask). */
export const SCOPE_COOKIE = "kd-scope";

export const isExtraGroup = (group: string | null | undefined) => !!group && EXTRA_GROUPS.has(group);

export const isExtraDoc = (doc: string | null | undefined, group?: string | null) =>
  isExtraGroup(group) || (!!doc && EXTRA_DOCS.has(doc));

export const isExtraRule = (r: { group: string; doc: string | null }) => isExtraDoc(r.doc, r.group);

/** Passages outside any document (group notes, the conflicts chapter, the source register) are meta, so extra too. */
export const isExtraPassage = (p: { group: string | null; doc: string | null }) => !p.group || !p.doc || isExtraDoc(p.doc, p.group);

/** Sets <html data-scope> from the cookie before first paint, so pages don't flash hidden parts. Inlined in <head>. */
export const SCOPE_SCRIPT = `try{if(document.cookie.split(/;\\s*/).includes("${SCOPE_COOKIE}=all"))document.documentElement.dataset.scope="all"}catch(e){}`;

/** True when a Cookie header asks for working notes. */
export const showsAll = (cookieHeader: string | null | undefined) =>
  !!cookieHeader && cookieHeader.split(/;\s*/).includes(`${SCOPE_COOKIE}=all`);
