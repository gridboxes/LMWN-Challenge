/* eslint-disable @next/next/no-html-link-for-pages */

const flowSteps = [
  ["01", "Choose", "See nearby lockers before placing the order."],
  ["02", "Confirm", "Know the walk, opening hours, and pickup window."],
  ["03", "Track", "Follow one clear timeline from kitchen to locker."],
  ["04", "Unlock", "Scan the locker QR or enter a 6-digit fallback code."],
  ["05", "Collect", "Get a compartment cue and close the loop."],
];

const lockerMetrics = [
  ["Adoption", "Locker selection rate", "Do people understand and trust the option?"],
  ["Retrieval", "First-attempt open rate", "Can users unlock without help?"],
  ["Efficiency", "Median time at locker", "Is pickup actually faster?"],
  ["Reliability", "Support contacts / 1k orders", "Where does the journey break?"],
];

const priorityMetrics = [
  ["Choice", "Priority selection lift", "Does the clearer value proposition improve adoption?"],
  ["Purpose", "Donation comprehension", "Do users understand how much is donated, when, and why?"],
  ["Trust", "Priority regret rate", "Did the purpose-led nudge set a fair expectation?"],
  ["Equity", "Alternative visibility", "Can people still find and choose the cheaper options easily?"],
];

function StatusBar() {
  return (
    <div className="status-bar" aria-hidden="true">
      <span>9:41</span><span>● ● ▰</span>
    </div>
  );
}

function Phone({ label, children, dark = false }: { label: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <article className="phone-wrap">
      <p className="phone-label">{label}</p>
      <div className={`phone ${dark ? "phone-dark" : ""}`}>
        <StatusBar />
        <div className="phone-screen">{children}</div>
      </div>
    </article>
  );
}

function Pin({ active = false }: { active?: boolean }) {
  return <span className={`map-pin ${active ? "active" : ""}`}>M</span>;
}

export function CaseStudy({ variant }: { variant: "locker" | "priority" }) {
  const isPriority = variant === "priority";
  const metrics = isPriority ? priorityMetrics : lockerMetrics;

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Back to portfolio">
          <span>S</span> / CASE {isPriority ? "02" : "01"}
        </a>
        <a className="header-home" href="/">All work ↗</a>
      </header>

      <nav className="floating-nav" aria-label="Case study sections">
        <a href="#overview"><span>01</span>Overview</a>
        <a href="#approach"><span>02</span>Approach</a>
        <a href="#solution"><span>03</span>Solution</a>
        <a href="#evaluation"><span>04</span>Measure</a>
      </nav>

      {!isPriority && <>
      <section className="hero section-pad" id="overview">
        <div className="hero-copy">
          <p className="eyebrow">A last-mile service case study</p>
          <h1>Delivering<br /><em>certainty.</em></h1>
          <p className="hero-intro">
            A contactless locker experience that helps people choose, track, and collect food with confidence—from checkout to compartment.
          </p>
          <div className="hero-meta">
            <span>Role<br /><b>Product designer</b></span>
            <span>Scope<br /><b>UX · UI · Strategy</b></span>
            <span>Format<br /><b>Design exercise</b></span>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract delivery locker illustration">
          <div className="route route-a" />
          <div className="route route-b" />
          <div className="route-dot dot-a">1</div>
          <div className="route-dot dot-b">2</div>
          <div className="route-dot dot-c">3</div>
          <div className="locker">
            <div className="locker-head"><span>M</span><b>PICK-UP</b></div>
            {Array.from({ length: 8 }, (_, i) => <div className="locker-cell" key={i}><span>{i + 1}</span></div>)}
            <div className="locker-console"><span>SCAN</span><i /></div>
          </div>
          <p className="art-note">Good delivery ends<br />with a clear handoff ↘</p>
        </div>
      </section>

      <section className="problem section-pad" id="approach">
        <div className="section-heading">
          <p className="eyebrow">01 · Frame the right problem</p>
          <h2>The locker is only useful<br />if the handoff feels obvious.</h2>
        </div>

        <div className="challenge-grid">
          <article className="challenge-card acid">
            <span className="card-index">A</span>
            <h3>Physical uncertainty</h3>
            <p>People need to know which locker to choose, when food arrives, and exactly how to open the right door in a busy shared space.</p>
            <div className="scribble">location → status → access</div>
          </article>
          <article className="challenge-card blue">
            <span className="card-index">B</span>
            <h3>Operational uncertainty</h3>
            <p>Capacity, opening hours, food safety, and compartment fit can change. The interface must set expectations without pretending the hardware is always available.</p>
            <div className="scribble">capacity → fallback → recovery</div>
          </article>
        </div>

        <div className="scope-strip" aria-label="Assignment scope">
          <article><span>GIVEN</span><b>Locker mechanics</b><p>Riders scan the locker; the system assigns a compartment; users retrieve by QR or passcode.</p></article>
          <article><span>DESIGNED</span><b>User experience</b><p>Locker selection, order tracking, ready-to-collect guidance, access recovery, and compartment identification.</p></article>
          <article><span>DEPENDENCIES</span><b>Operations + hardware</b><p>Capacity rules, food holding time, rider recovery, compartment fit, and physical accessibility need validation.</p></article>
        </div>

        <div className="north-star">
          <p>North-star question</p>
          <blockquote>How might we make the user feel in control at every handoff—from checkout to compartment?</blockquote>
        </div>

        <div className="approach-grid">
          <div>
            <p className="eyebrow">Working assumptions</p>
            <h3>Design for the edge cases first.</h3>
          </div>
          <ol className="assumption-list">
            <li><span>01</span><p><b>Availability can change.</b> Confirm the locker only when the order is placed; offer a graceful fallback if capacity disappears.</p></li>
            <li><span>02</span><p><b>QR is not universal.</b> Pair scanning with a visible, copyable passcode and clear error recovery.</p></li>
            <li><span>03</span><p><b>Food has a clock.</b> Surface pickup-by time, opening hours, and reminders without creating anxiety.</p></li>
            <li><span>04</span><p><b>Shared spaces are noisy.</b> Repeat the locker name, floor, landmark, and compartment number at the moment they matter.</p></li>
          </ol>
        </div>
      </section>

      <section className="journey section-pad">
        <div className="section-heading compact">
          <p className="eyebrow">02 · Map the journey</p>
          <h2>One job per moment.</h2>
          <p>Progressive disclosure keeps the experience calm: make the next action unmistakable, then reveal the next layer of detail.</p>
        </div>
        <div className="flow-grid">
          {flowSteps.map(([num, title, body]) => (
            <article className="flow-step" key={num}>
              <span>{num}</span><div className="flow-icon" aria-hidden="true" />
              <h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>

        <div className="wireframe-board" aria-label="End-to-end locker flow wireframes">
          <div className="board-title"><span>EARLY WIREFRAMES</span><b>5 states / 2 recovery paths</b></div>
          <div className="wire wire-choose"><div className="wire-appbar"><i>←</i><b>Delivery method</b></div><div className="wire-tabs"><span>Door</span><b>Pick up</b></div><div className="wire-map"><i /><i /><i /></div><div className="wire-card"><b>Central Office · Lobby</b><span>3 min walk · Open until 10 PM</span></div><div className="wire-card muted"><b>Metro Tower · B1</b><span>6 min walk · Open 24 hours</span></div><div className="wire-button">View locker</div><p>1. Choose a locker</p></div>
          <div className="wire wire-confirm"><div className="wire-appbar"><i>←</i><b>Locker details</b></div><div className="wire-map detail"><i /></div><div className="wire-detail-title"><b>Central Office · Lobby</b><span>Near the south entrance</span></div><div className="wire-facts"><span>3 min walk</span><span>Open until 10 PM</span><span>Available now</span></div><div className="wire-note">Capacity is confirmed with your order.</div><div className="wire-button">Use this locker</div><p>2. Confirm the place</p></div>
          <div className="wire wire-track"><div className="wire-appbar"><i>←</i><b>Order #A38</b></div><div className="wire-status"><span>12–18 min</span><b>Heading to your locker</b></div><div className="wire-timeline"><i className="done" /><b>Restaurant confirmed</b><i className="done" /><b>Picked up by rider</b><i className="current" /><b>On the way to locker</b><i /><b>Ready to collect</b></div><div className="wire-button light">Locker directions</div><p>3. Track the handoff</p></div>
          <div className="wire wire-ready"><div className="wire-appbar"><i>←</i><b>Pick up order</b></div><div className="wire-ready-label">READY</div><div className="wire-qr">▦</div><b className="wire-location">Central Office · Lobby</b><small>Pick up by 2:10 PM</small><div className="wire-code">7 3 8 1 4 2</div><div className="wire-help">QR fails? Enter the passcode.</div><p>4. Unlock with fallback</p></div>
          <div className="wire wire-open"><div className="wire-appbar"><i>←</i><b>Compartment opened</b></div><div className="wire-door-number"><small>OPEN</small><b>07</b><span>Green light is pulsing</span></div><div className="wire-collect-check">✓ Did you get your order?</div><div className="wire-button">Yes, I have it</div><p>5. Collect + confirm</p></div>
          <div className="wire-arrow arrow-1">→</div><div className="wire-arrow arrow-2">→</div>
          <div className="wire-arrow arrow-3">→</div><div className="wire-arrow arrow-4">→</div>
        </div>
      </section>

      <section className="solution section-pad" id="solution">
        <div className="section-heading">
          <p className="eyebrow">03 · The locker experience</p>
          <h2>Context first.<br />Code when it counts.</h2>
        </div>

        <div className="phone-stage stage-green">
          <div className="stage-copy">
            <span className="stage-number">01</span>
            <p className="eyebrow">Choose with confidence</p>
            <h3>A locker is presented like a place—not a shipping setting.</h3>
            <p>Distance, walk time, opening hours, and a clear landmark answer the questions people have before they commit.</p>
            <ul className="check-list"><li>Map and list stay in sync</li><li>Availability is visible</li><li>Home delivery remains one tap away</li></ul>
          </div>
          <Phone label="SELECT A LOCKER">
            <div className="app-header"><button aria-label="Back">←</button><b>Delivery method</b><span /></div>
            <div className="segmented"><span>To your door</span><b>Pick up</b></div>
            <div className="mini-map">
              <div className="street s1" /><div className="street s2" /><div className="street s3" />
              <Pin /><Pin active /><Pin /><div className="you-dot" />
            </div>
            <div className="sheet">
              <div className="sheet-handle" /><p className="sheet-title">Nearby lockers <small>3 available</small></p>
              <div className="place-card selected"><span className="place-icon">M</span><div><b>Central Office · Lobby</b><p>3 min walk · Open until 10 PM</p><small>Near the south entrance</small></div><i>✓</i></div>
              <div className="place-card"><span className="place-icon">M</span><div><b>Metro Tower · B1</b><p>6 min walk · Open 24 hours</p></div></div>
              <button className="primary-btn">Use this locker</button>
            </div>
          </Phone>
        </div>

        <div className="phone-stage stage-cream reverse">
          <div className="stage-copy">
            <span className="stage-number">02</span>
            <p className="eyebrow">Track the handoff</p>
            <h3>The timeline changes language when the rider reaches the locker.</h3>
            <p>Instead of generic “delivered” copy, the state names the physical handoff and sets a clear expectation for pickup.</p>
            <div className="callout"><b>Design decision</b><p>“In locker” is more specific—and more reassuring—than “Delivered.”</p></div>
          </div>
          <Phone label="TRACK YOUR ORDER">
            <div className="app-header"><button aria-label="Back">←</button><b>Order #A38</b><button aria-label="Help">?</button></div>
            <div className="tracking-map"><div className="route-line" /><span className="rider">●</span><span className="locker-pin">M</span></div>
            <div className="tracking-panel">
              <span className="eta-chip">12–18 min</span><h4>Heading to your locker</h4>
              <p>Your food stays with the rider until it is secured.</p>
              <div className="timeline">
                <div className="done"><i>✓</i><p><b>Restaurant confirmed</b><small>12:04 PM</small></p></div>
                <div className="done"><i>✓</i><p><b>Picked up by rider</b><small>12:19 PM</small></p></div>
                <div className="current"><i /><p><b>On the way to locker</b><small>We’ll alert you when it’s ready</small></p></div>
                <div><i /><p><b>Ready to collect</b></p></div>
              </div>
              <button className="ghost-btn">View locker directions</button>
            </div>
          </Phone>
        </div>

        <div className="phone-stage stage-black">
          <div className="stage-copy">
            <span className="stage-number">03</span>
            <p className="eyebrow">Unlock without guessing</p>
            <h3>Two access methods. One obvious fallback.</h3>
            <p>The primary QR action is paired with a large passcode that remains useful in low signal, low light, or camera-permission failure.</p>
            <ul className="check-list"><li>Pickup-by time is visible</li><li>Code can be copied</li><li>Compartment appears only after unlock</li></ul>
          </div>
          <Phone label="READY TO COLLECT" dark>
            <div className="app-header"><button aria-label="Back">←</button><b>Pick up order</b><button aria-label="Help">?</button></div>
            <div className="ready-badge">READY</div>
            <h4 className="ready-title">Your food is<br />in the locker.</h4>
            <p className="pickup-location">Central Office · Lobby<br /><small>Pick up by 2:10 PM</small></p>
            <div className="qr-box"><div className="qr-pattern">▦</div><p>Scan at locker</p></div>
            <div className="or"><span />or enter passcode<span /></div>
            <button className="code-btn"><b>7 3 8 1 4 2</b><span>Copy</span></button>
            <p className="helper-link">Can’t open the locker? <u>Get help</u></p>
          </Phone>
        </div>

        <div className="door-state">
          <div className="door-copy"><p className="eyebrow">The physical finale</p><h3>Open compartment <em>07</em></h3><p>The layout reflects the reference hardware: mixed compartment sizes, thirteen numbered doors, a kiosk, and indicator lights. The phone repeats the exact door and asks one thing: “Did you get your order?”</p></div>
          <div className="big-locker" aria-label="Thirteen-compartment locker with compartment 07 open">
            <div className="locker-kiosk"><b>SCAN</b><span>QR / CODE</span><i /></div>
            {Array.from({ length: 13 }, (_, i) => {
              const number = i + 1;
              return number === 7 ? <div className="open-door" key={number}><span>07</span><i>Order<br />inside</i></div> : <div className={number <= 2 ? "tall-door" : ""} key={number}>{String(number).padStart(2, "0")}<i className="door-light" /></div>;
            })}
          </div>
        </div>
      </section>

      </>}

      {isPriority && <>
      <section className="priority-hero section-pad" id="overview">
        <div className="priority-hero-copy">
          <p className="eyebrow">An ethical persuasion case study</p>
          <h1>Priority,<br /><em>honestly.</em></h1>
          <p className="hero-intro">A clearer way to make faster delivery compelling—without hiding cheaper options, manufacturing urgency, or asking people to trade trust for speed.</p>
          <div className="hero-meta">
            <span>Role<br /><b>Product designer</b></span>
            <span>Scope<br /><b>UX · Strategy · Persuasion</b></span>
            <span>Format<br /><b>Design exercise</b></span>
          </div>
        </div>
        <div className="priority-hero-art" aria-label="Delivery speed comparison illustration">
          <span className="speed-sticker">FAST, FAIR,<br />EXPLAINED.</span>
          <div className="speed-line speed-line-fast"><b>PRIORITY</b><strong>15–20 min</strong><i /></div>
          <div className="speed-line"><b>NORMAL</b><strong>30–40 min</strong><i /></div>
          <div className="speed-line"><b>LOW-COST</b><strong>45–60 min</strong><i /></div>
        </div>
      </section>

      <section className="priority-problem section-pad" id="approach">
        <div className="section-heading">
          <p className="eyebrow">01 · Frame the tension</p>
          <h2>Make speed desirable.<br />Keep the choice fair.</h2>
        </div>
        <div className="challenge-grid">
          <article className="challenge-card orange"><span className="card-index">A</span><h3>Business pressure</h3><p>Priority needs a compelling reason to command a premium beyond simply placing the fastest option first.</p><div className="scribble">value, not pressure</div></article>
          <article className="challenge-card acid"><span className="card-index">B</span><h3>User trust</h3><p>Normal and Low-cost must remain easy to compare and select, with no countdowns, guilt, or disguised defaults.</p><div className="scribble">clarity → agency → trust</div></article>
        </div>
        <div className="north-star"><p>North-star question</p><blockquote>How might we increase the appeal of Priority without reducing the user’s ability to choose freely?</blockquote></div>
      </section>
      </>}

      {isPriority && <>
      <section className="priority section-pad" id="solution">
        <div className="section-heading priority-heading">
          <p className="eyebrow">02 · The proposed model</p>
          <h2>Move faster.<br />Pass good forward.</h2>
          <p><b>Priority with Purpose</b> combines the fastest delivery window with a transparent charitable contribution. In this concept, the ฿20 premium over Normal includes an exact ฿10 donation.</p>
        </div>

        <div className="concept-assumption"><span>CONCEPT ASSUMPTION</span><p>A verified charity partnership and fixed ฿10 per-order allocation must be operationally and legally feasible. If the exact amount cannot be guaranteed, the donation claim should not ship.</p></div>

        <div className="price-logic" aria-label="Delivery pricing and donation breakdown">
          <div><span>LOW-COST</span><b>฿20</b><p>Save money<br />Wait longer</p></div>
          <div><span>NORMAL</span><b>฿30</b><p>Standard match<br />Standard time</p></div>
          <div className="logic-priority"><span>PRIORITY + PURPOSE</span><b>฿50</b><p>Fastest delivery<br /><strong>+ charity contribution</strong></p></div>
          <div className="logic-note"><b>฿10</b><p>of the ฿20 Priority premium goes to charity.</p></div>
        </div>

        <div className="priority-layout">
          <Phone label="CHOOSE DELIVERY">
            <div className="app-header"><button aria-label="Back">←</button><b>Choose delivery</b><span /></div>
            <div className="basket-summary"><span>Arrives to</span><b>Central Office</b></div>
            <div className="speed-card recommended">
              <div className="recommended-label">FASTEST · GIVES BACK</div>
              <span className="speed-icon">♥</span><div><b>Priority with Purpose</b><p>Arrives 12:40–12:50</p><small>Next available rider · gives back</small></div><strong>฿50</strong><i>✓</i>
              <div className="donation-breakdown"><span>Fastest Priority delivery <b>Included</b></span><span>Charity contribution <b>฿10</b></span></div>
            </div>
            <div className="speed-card"><span className="speed-icon">●</span><div><b>Normal</b><p>Arrives 12:55–1:05</p></div><strong>฿30</strong><i /></div>
            <div className="speed-card"><span className="speed-icon">⌁</span><div><b>Low-cost</b><p>Arrives 1:05–1:20</p></div><strong>฿20</strong><i /></div>
            <button className="primary-btn">Continue · ฿50</button>
            <p className="fine-print">฿10 from this Priority fee is donated to a verified charity after delivery. <u>How it works</u></p>
          </Phone>

          <div className="ethics-panel">
            <div className="ethics-title"><span>WHY IT CAN WORK</span><h3>Fast feels good.</h3></div>
            <article><span>01</span><div><h4>Two benefits, one choice</h4><p>The user gets the fastest delivery window and the feeling of giving back.</p></div></article>
            <article><span>02</span><div><h4>Make the contribution exact</h4><p>The interface states ฿10 before payment so people know precisely what the purpose-led claim means.</p></div></article>
            <article><span>03</span><div><h4>Keep alternatives equal</h4><p>Normal and Low-cost stay visible and selectable in one tap—no guilt copy.</p></div></article>
            <article><span>04</span><div><h4>Close the impact loop</h4><p>The receipt confirms that a contribution was made after the delivery succeeds.</p></div></article>
          </div>
        </div>

        <div className="impact-flow">
          <div className="impact-copy"><p className="eyebrow">The complete persuasion loop</p><h3>Promise → proof → good feeling</h3><p>The donation is not just a badge at selection. It is explained before payment and confirmed after the service succeeds.</p></div>
          <div className="impact-steps">
            <article><span>1</span><div><b>Choose</b><p>See the fastest window, total price, and charity promise together.</p></div></article>
            <article><span>2</span><div><b>Understand</b><p>See that ฿10 of the ฿20 premium goes to a verified charity.</p></div></article>
            <article className="impact-receipt"><span>✓</span><div><small>DELIVERY COMPLETE</small><b>฿10 donation confirmed</b><p>Your Priority delivery supported a verified charity.</p></div></article>
          </div>
        </div>
      </section>
      </>}

      <section className="evaluation section-pad" id="evaluation">
        <div className="section-heading">
          <p className="eyebrow">{isPriority ? "03" : "04"} · Evaluate in layers</p>
          <h2>{isPriority ? <>Conversion means little<br />without comprehension.</> : <>Success is a pickup<br />without a second thought.</>}</h2>
        </div>

        <div className="test-plan">
          {isPriority ? <>
            <article><span>BEFORE BUILD</span><h3>Comprehension test</h3><p>Ask people to compare all three options, explain the premium, and describe the donation promise in their own words.</p><b>Signal: ≥ 80% explain it accurately</b></article>
            <article><span>PILOT</span><h3>Choice experiment</h3><p>Compare standard Priority with Priority + Purpose while keeping timing, placement, and all alternatives consistent.</p><b>Signal: choice lift with stable trust</b></article>
            <article><span>AFTER DELIVERY</span><h3>Regret check</h3><p>Measure whether the faster arrival and contribution confirmation match what people believed they purchased.</p><b>Signal: no increase in regret</b></article>
          </> : <>
            <article><span>BEFORE BUILD</span><h3>Prototype test</h3><p>5–7 participants in a simulated lobby. Test first-click locker choice, QR failure recovery, passcode entry, and compartment identification.</p><b>Signal: ≥ 80% complete unassisted</b></article>
            <article><span>PILOT</span><h3>Shadow launch</h3><p>Instrument a small set of locations. Observe retrieval time, locker errors, and where users open help without changing operational rules.</p><b>Signal: &lt; 90 sec median pickup</b></article>
            <article><span>SCALE</span><h3>Operational rollout</h3><p>Compare locations and locker types to find where wayfinding, compartment fit, or access recovery still breaks.</p><b>Signal: fewer support contacts</b></article>
          </>}
        </div>

        <div className="metrics-table">
          <div className="metric-row table-head"><span>Lens</span><span>Metric</span><span>Question answered</span></div>
          {metrics.map(([lens, metric, question]) => <div className="metric-row" key={lens}><span>{lens}</span><b>{metric}</b><p>{question}</p></div>)}
        </div>

        <div className="closing-card">
          <p className="eyebrow">{isPriority ? "The principle I would protect" : "What I would explore next"}</p>
          <h3>{isPriority ? "Grow the value of the premium—not the pressure around the choice." : "Capacity prediction, multi-order pickup, accessibility at the physical locker, and rider-side recovery when no compartment fits."}</h3>
          <a href="#overview">Back to the top ↑</a>
        </div>
      </section>

      <a className="next-case" href={isPriority ? "/work/delivering-certainty" : "/work/priority-honestly"}>
        <span>NEXT CASE STUDY</span><b>{isPriority ? "Delivering Certainty" : "Priority, Honestly"} →</b>
      </a>
      <footer><span>{isPriority ? "PRIORITY, HONESTLY" : "DELIVERING CERTAINTY"}</span><p>Product design exercise · 2026</p><b>END</b></footer>
    </main>
  );
}

export default function Home() {
  return (
    <main className="simple-home">
      <header className="simple-header">
        <a className="simple-brand" href="/" aria-label="Assignment overview"><span>S</span><b>Sivakorn.</b><i /></a>
        <nav aria-label="Assignment navigation"><span>Product design assignment</span><a href="/work/delivering-certainty">01</a><a href="/work/priority-honestly">02</a></nav>
      </header>

      <section className="simple-hero" aria-label="Product design assignment overview">
        <div className="simple-intro">
          <div className="simple-kicker"><span>Product / UX·UI designer</span><p><i />Candidate response · 2026</p></div>
          <h1>A clear handoff.<br /><em>A fair choice.</em></h1>
          <p>Two product design responses for a food-delivery assignment: a contactless locker experience that reduces uncertainty, and a Priority model that persuades without hiding cheaper options.</p>
        </div>

        <div className="response-board" aria-label="Choose an assignment response">
          <div className="response-board-head"><span>Selected responses</span><b>01—02</b></div>
          <a className="response-tile response-locker" href="/work/delivering-certainty" aria-label="Read Problem 1: Delivering Certainty">
            <span>01</span><div><small>Service design</small><b>Certainty<br />at handoff.</b></div><i>↘</i>
          </a>
          <a className="response-tile response-priority" href="/work/priority-honestly" aria-label="Read Problem 2: Priority, Honestly">
            <span>02</span><div><small>Ethical persuasion</small><b>Speed<br />without pressure.</b></div><i>→</i>
          </a>
          <p>Two messy delivery moments.<br />Two calmer ways through.</p>
        </div>
      </section>

      <footer className="simple-footer"><span>Confidential candidate submission</span><b>Sivakorn S. · Product designer</b><span>Bangkok · 2026</span></footer>
    </main>
  );
}
