// Reading model output as JSON, tolerantly: while it is still streaming (close what is open), and from
// models that wrap JSON in ```json fences, add <think>…</think> reasoning, or write a sentence first.

/** The JSON part of a model's text: drops reasoning tags, code fences and any text before the first "{". */
export function jsonPart(text: string): string {
  let t = text.replace(/<think>[\s\S]*?(<\/think>|$)/gi, "");
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)(```|$)/i);
  if (fence && fence[1].includes("{")) t = fence[1];
  const start = t.indexOf("{");
  return start < 0 ? "" : t.slice(start);
}

/**
 * Parses JSON that may be cut off mid-way: closes an open string, drops a dangling key or comma, and
 * closes open arrays and objects. Returns null when nothing usable can be recovered.
 */
export function parsePartialJson(input: string): unknown {
  const text = jsonPart(input);
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    /* repair below */
  }
  const stack: string[] = [];
  let inString = false;
  let escaped = false;
  let out = "";
  for (const ch of text) {
    out += ch;
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') inString = true;
    else if (ch === "{") stack.push("}");
    else if (ch === "[") stack.push("]");
    else if (ch === "}" || ch === "]") {
      stack.pop();
      if (!stack.length) break; // the first complete top-level value; ignore trailing text
    }
  }
  // Close an open string (dropping a dangling escape backslash).
  if (inString) out = (escaped ? out.slice(0, -1) : out) + '"';
  // Trim a trailing partial token: `,` / `"key":` / `"key"` (a key with no value yet).
  for (let i = 0; i < 3; i++) {
    out = out.replace(/,\s*$/, "").replace(/(?:,|\{)\s*"[^"]*"\s*:?\s*$/, (m) => (m.trimStart().startsWith("{") ? "{" : "")).replace(/:\s*$/, ": null");
  }
  const closed = out + [...stack].reverse().join("");
  try {
    return JSON.parse(closed);
  } catch {
    // Last resort: cut back to the last complete value and close again.
    for (let cut = out.length - 1; cut > 0; cut--) {
      const c = out[cut];
      if (c !== "," && c !== "}" && c !== "]") continue;
      const head = c === "," ? out.slice(0, cut) : out.slice(0, cut + 1);
      const st: string[] = [];
      let str = false;
      let esc = false;
      for (const ch of head) {
        if (str) {
          if (esc) esc = false;
          else if (ch === "\\") esc = true;
          else if (ch === '"') str = false;
        } else if (ch === '"') str = true;
        else if (ch === "{") st.push("}");
        else if (ch === "[") st.push("]");
        else if (ch === "}" || ch === "]") st.pop();
      }
      if (str) continue;
      try {
        return JSON.parse(head + st.reverse().join(""));
      } catch {
        /* keep cutting */
      }
    }
    return null;
  }
}
