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

test("renders the portfolio homepage with two distinct projects", async () => {
  const html = await expectPage("/", [
    /Design that gets/,
    /Delivering Certainty/,
    /Priority, Honestly/,
    /href="\/work\/delivering-certainty"/,
    /href="\/work\/priority-honestly"/,
  ]);
  assert.doesNotMatch(html, /Question 2/);
});

test("renders Delivering Certainty as a focused locker case study", async () => {
  const html = await expectPage("/work/delivering-certainty", [
    /Delivering Certainty — Sivakorn/,
    /The locker is only useful/,
    /Context first/,
    /Success is a pickup/,
  ]);
  assert.doesNotMatch(html, /Move faster/);
});

test("renders Priority, Honestly as a focused persuasion case study", async () => {
  const html = await expectPage("/work/priority-honestly", [
    /Priority, Honestly — Sivakorn/,
    /Make speed desirable/,
    /Move faster/,
    /Conversion means little/,
  ]);
  assert.doesNotMatch(html, /The locker is only useful/);
});
