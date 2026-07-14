import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function expectPage(pathname, patterns) {
  const response = await render(pathname);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  for (const pattern of patterns) assert.match(html, pattern);
  return html;
}

test("renders the assignment homepage with two distinct responses", async () => {
  const html = await expectPage("/", [
    /A clear handoff/,
    /A fair choice/,
    /without hiding cheaper options/,
    /Product design assignment/,
    /Delivering<br\/>Certainty/,
    /Priority with<br\/>Purpose/,
    /Delivering Certainty/,
    /Priority with Purpose/,
    /href="\/work\/delivering-certainty"/,
    /href="\/work\/priority-honestly"/,
  ]);
  assert.match(html, /class="response-tile response-locker"/);
  assert.match(html, /class="response-tile response-priority"/);
  assert.match(html, /class="brand-mark"/);
  assert.doesNotMatch(html, /assignment-thesis|case-chapters|assignment-ending/);
  assert.doesNotMatch(html, /Question 2/);
  assert.doesNotMatch(html, /Open to 2026 roles|More brewing|The exhibition/);
});

test("renders Delivering Certainty as a focused locker case study", async () => {
  const html = await expectPage("/work/delivering-certainty", [
    /Delivering Certainty — Sivakorn/,
    /The locker is only useful/,
    /Operational uncertainty/,
    /1\. Choose a locker/,
    /compartment 07/,
    /Context first/,
    /Success is a pickup/,
  ]);
  assert.match(html, /class="brand-mark"/);
  assert.doesNotMatch(html, /Value with purpose/);
  assert.doesNotMatch(html, /Move faster/);
});

test("renders Priority with Purpose as a focused feature case study", async () => {
  const html = await expectPage("/work/priority-honestly", [
    /Priority with Purpose — Sivakorn/,
    /Priority with<br\/><em>Purpose\.<\/em>/,
    /Give Priority a reason/,
    /Move faster/,
    /Pass good forward/,
    /up to 50%/i,
    /Fast feels good/,
    /the upgrade feels worth it/,
  ]);
  assert.doesNotMatch(html, /฿10/);
  assert.doesNotMatch(html, /An ethical persuasion case study/);
  assert.doesNotMatch(html, /The locker is only useful/);
});
