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
    /Better delivery/,
    /by design/,
    /turning uncertain handoffs/,
    /Product design assignment/,
    /Delivering<br\/>Certainty/,
    /Priority with<br\/>Purpose/,
    /Delivering Certainty/,
    /Priority with Purpose/,
    /Made with care/,
    /by Sivakorn S\./,
    /href="\/work\/delivering-certainty"/,
    /href="\/work\/priority-with-purpose"/,
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
    /Delivering Certainty — Product Design Case Study/,
    /The locker is only useful/,
    /Operational uncertainty/,
    /EARLY WIREFRAMES/,
    /5 states \/ 2 recovery paths/,
    /TWO WAYS IN/,
    /Delivery setup/,
    /keep fallback visible/,
    /FIND THE LIT DOOR/,
    /Uncertainty in · decision out/,
    /Turn real-world friction into an explicit response/,
    /Availability changes/,
    /Keep the 4-digit code visible/,
    /Food has a clock/,
    /Shared spaces are noisy/,
    /Introduce the box where delivery choices already live/,
    /A locker is presented like a place—not a shipping setting/,
    /The timeline changes language when the rider reaches the locker/,
    /Two access methods. One obvious fallback/,
    /Camera issues, damaged screens, or unfamiliar hardware can interrupt access/,
    /The selected Pickup Box stays visible before the order is placed/,
    /Prototype shown: compartments 01–09/,
    /mobility, vision, and dexterity constraints/,
    /baseline first, then an operations-agreed launch threshold/,
    /Unassisted access by accommodation need/,
    /READY TO COLLECT/,
    /COMPARTMENT 07/,
    /This Pickup Box is full/,
    /Measure the handoff, not just the delivery/,
    /Find it/,
    /Open it/,
    /Recover/,
    /Can people complete the handoff/,
    /Does the service hold up/,
    /Where does performance drift/,
    /6–8/,
    /2–3/,
    /EVERY/,
    /Full measurement framework/,
    /Success is a pickup/,
    /Ready at your Pickup Box/,
    /src="\/l-mark\.svg"/,
    /View Figma/,
    /https:\/\/www\.figma\.com\/design\/x6grHX2f2jISu0jkVTNbZc\/lmwn/,
  ]);
  assert.match(html, /class="header-home"[^>]*aria-label="Home"/);
  assert.doesNotMatch(html, /The locker scans the QR/);
  assert.doesNotMatch(html, /Working assumptions|Decision record/);
  assert.doesNotMatch(html, /≥95% first-attempt access/);
  assert.doesNotMatch(html, /Value with purpose/);
  assert.doesNotMatch(html, /Move faster/);
});

test("renders Priority with Purpose as a focused feature case study", async () => {
  const html = await expectPage("/work/priority-with-purpose", [
    /Priority with Purpose — Product Design Case Study/,
    /Priority with<br\/><em>Purpose\.<\/em>/,
    /Give Priority a reason/,
    /Move faster/,
    /Pass good forward/,
    /up to 50%/i,
    /Fast feels good/,
    /the upgrade feels worth it/,
    /View Figma/,
    /https:\/\/www\.figma\.com\/design\/x6grHX2f2jISu0jkVTNbZc\/lmwn/,
  ]);
  assert.doesNotMatch(html, /฿10/);
  assert.doesNotMatch(html, /An ethical persuasion case study/);
  assert.doesNotMatch(html, /The locker is only useful/);
});
