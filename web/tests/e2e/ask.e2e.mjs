// End-to-end test of Ask in a real browser: the production build, the real /api/ask pipeline and corpus,
// with the language model replaced by tests/e2e/mock-model.mjs (answers built only from retrieved passages).
//
//   npm run build && npm run test:e2e        (needs Playwright with Chromium)
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const APP = 3012;
const MOCK = 4100;
const base = `http://localhost:${APP}`;
const shots = process.env.E2E_SHOTS ?? "tests/e2e/screenshots";
mkdirSync(shots, { recursive: true });

const procs = [];
const start = (cmd, args, env = {}) => {
  // Own process group, so stopping it also stops the server npx starts.
  const p = spawn(cmd, args, { env: { ...process.env, ...env }, stdio: ["ignore", "pipe", "pipe"], detached: true });
  procs.push(p);
  return p;
};
const waitFor = async (url, tries = 60) => {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url);
      if (r.status < 500) return;
    } catch {}
    await new Promise((ok) => setTimeout(ok, 500));
  }
  throw new Error(`timed out waiting for ${url}`);
};

let failures = 0;
const check = (ok, what) => {
  console.log(`${ok ? "✓" : "✗"} ${what}`);
  if (!ok) failures++;
};

start("node", ["tests/e2e/mock-model.mjs", String(MOCK)]);
start("npx", ["next", "start", "-p", String(APP)], { KD_AI_PROVIDER: "custom", KD_AI_BASE_URL: `http://127.0.0.1:${MOCK}/v1`, KD_MODEL: "mock-grounded" });

// A server left on the port from an earlier run would serve a stale build.
const busy = await fetch(`${base}/api/ai`).then(() => true, () => false);
if (busy) {
  console.error(`Port ${APP} is already in use; stop that server first.`);
  process.exit(1);
}

try {
  await waitFor(`http://127.0.0.1:${MOCK}/last`);
  await waitFor(`${base}/api/ai`);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1360, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  // 1. Requirements question: every row of the retrieved form, grouped, with filters.
  await page.goto(`${base}/ask?q=${encodeURIComponent("What are all the product requirements for Office property lease?")}`);
  await page.getByText("Explore further").waitFor({ timeout: 60_000 });
  const expected = (await (await fetch(`http://127.0.0.1:${MOCK}/last`)).json())._rows;
  const rows = page.locator("table tbody tr");
  check((await rows.count()) === expected && expected > 20, `requirements table shows all ${expected} rows (got ${await rows.count()})`);
  check(await page.getByText(/Scope/).first().isVisible(), "scope bar is shown");
  check((await page.locator("text=Asset class:").count()) > 0, "scope chips show the asset class");
  await page.screenshot({ path: `${shots}/requirements-desktop.png`, fullPage: false });
  await page.evaluate(() => {
    const el = [...document.querySelectorAll("span")].find((e) => e.textContent === "Requirements");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80 });
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${shots}/requirements-top.png` });
  await page.evaluate(() => {
    const el = document.querySelector("table");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 220 });
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${shots}/requirements-table.png` });

  const required = page.getByRole("button", { name: /^Required \d+$/ });
  const nRequired = Number((await required.textContent()).match(/\d+/)[0]);
  await required.click();
  check((await rows.count()) === nRequired, `"Required" filter shows ${nRequired} rows`);
  check(await page.getByText(new RegExp(`Showing ${nRequired} of ${expected} requirements`)).isVisible(), "filtered count is announced");
  await page.getByRole("button", { name: "Show all" }).click();
  check((await rows.count()) === expected, "Show all restores every row (filters never drop data)");
  await page.getByPlaceholder(/Search \d+ requirements/).fill("carpet");
  check((await rows.count()) >= 1 && (await rows.count()) < expected, "search within the answer narrows rows");
  await page.getByPlaceholder(/Search \d+ requirements/).fill("");
  await page.getByRole("button", { name: "Collapse all" }).click();
  check((await rows.count()) === 0, "Collapse all closes every group");
  await page.getByRole("button", { name: "Expand all" }).click();
  check((await rows.count()) === expected, "Expand all opens them again");
  check(await page.getByText("Sources disagree").isVisible(), "conflicting versions are surfaced");

  // 2. A row's citation opens the evidence drawer, then the real place in the document.
  await rows.first().locator("td").last().getByRole("button").first().click();
  const drawer = page.getByRole("dialog");
  await drawer.waitFor();
  check(await drawer.getByText(/Lines [\d,]+–[\d,]+ of kd\.md/).isVisible(), "evidence drawer shows the source location");
  await page.screenshot({ path: `${shots}/evidence-drawer.png` });
  const href = await drawer.getByRole("link", { name: "Show in document" }).getAttribute("href");
  await drawer.getByRole("link", { name: "Show in document" }).click();
  await page.waitForURL(/\/read\/\d{2}\/[\w-]+/);
  const hash = decodeURIComponent(new URL(href, base).hash.slice(1));
  check(!!hash && (await page.locator(`[id="${hash}"]`).count()) === 1, `link lands on a real heading (#${hash})`);
  await page.locator("mark.kd-flash").first().waitFor({ timeout: 5000 }).then(
    () => check(true, "the cited passage is flashed on the page"),
    () => check(false, "the cited passage is flashed on the page"),
  );
  await page.screenshot({ path: `${shots}/source-in-document.png` });

  // 3. Follow-ups keep the topic: a suggested question, then one that names no scope at all.
  await page.goto(`${base}/ask`);
  await page.getByRole("button", { name: "Which fields are mandatory for Office property lease?" }).first().click();
  await page.getByText("Explore further").nth(1).waitFor({ timeout: 60_000 });
  check((await page.getByRole("button", { name: /^Required \d+$/ }).count()) === 2, "suggested follow-up answers with the Office · Lease form again");
  await page.getByLabel("Your question").fill("Which of these can be edited later?");
  await page.keyboard.press("Enter");
  await page.getByText("Explore further").nth(2).waitFor({ timeout: 60_000 });
  check((await page.getByText("(from previous question)").count()) >= 2, "a scope-less follow-up inherits Office · Lease from the previous question");

  // 4. Phones: requirement cards instead of the table.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.getByText("Explore further").first().waitFor();
  check(!(await page.locator("table").first().isVisible()), "phone: table is hidden");
  check((await page.locator("ul.md\\:hidden li").first().isVisible()), "phone: requirements are shown as cards");
  await page.locator("ul.md\\:hidden li").first().scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${shots}/requirements-phone.png` });
  await page.setViewportSize({ width: 1360, height: 900 });

  // 5. Role question: explanation + suggested questions; workflow question: a timeline.
  await page.getByRole("button", { name: "New chat" }).click();
  await page.getByLabel("Your question").fill("What's the role of an agent?");
  await page.keyboard.press("Enter");
  await page.getByText("Explore further").waitFor({ timeout: 60_000 });
  check(await page.getByText("Explanation").first().isVisible(), "role question renders as an explanation");
  check((await page.getByRole("navigation", { name: "Suggested questions" }).getByRole("button").count()) >= 3, "3+ suggested questions");
  await page.screenshot({ path: `${shots}/explain.png` });
  await page.getByLabel("Your question").fill("How does an agent submit a property?");
  await page.keyboard.press("Enter");
  await page.getByText("Workflow").last().waitFor({ timeout: 60_000 });
  check((await page.locator("ol li").count()) >= 2, "workflow question renders numbered steps");
  await page.screenshot({ path: `${shots}/workflow.png` });

  // 6. A model that ignores the format still gets a readable, labelled answer.
  await page.getByLabel("Your question").fill("Agent role, plain text please");
  await page.keyboard.press("Enter");
  await page.getByText(/didn’t return the answer format/).waitFor({ timeout: 60_000 });
  check(true, "unstructured output falls back to readable text with a note");

  check(errors.length === 0, `no page errors${errors.length ? `: ${errors.join(" | ")}` : ""}`);
  await browser.close();
} catch (err) {
  console.error(err);
  failures++;
} finally {
  for (const p of procs) {
    try {
      process.kill(-p.pid, "SIGTERM");
    } catch {}
  }
}
console.log(failures ? `\n${failures} check(s) failed` : "\nall checks passed");
process.exit(failures ? 1 : 0);
