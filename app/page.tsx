const flowSteps = [
  ["01", "Choose", "See nearby lockers before placing the order."],
  ["02", "Confirm", "Know the walk, opening hours, and pickup window."],
  ["03", "Track", "Follow one clear timeline from kitchen to locker."],
  ["04", "Unlock", "Scan the locker QR or enter a 6-digit fallback code."],
  ["05", "Collect", "Get a compartment cue and close the loop."],
];

const evaluationMetrics = [
  ["Adoption", "Locker selection rate", "Do people understand and trust the option?"],
  ["Retrieval", "First-attempt open rate", "Can users unlock without help?"],
  ["Efficiency", "Median time at locker", "Is pickup actually faster?"],
  ["Reliability", "Support contacts / 1k orders", "Where does the journey break?"],
  ["Trust", "Priority regret rate", "Did the nudge set a fair expectation?"],
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

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#overview" aria-label="Back to overview">
          <span>LM</span> / CASE 01
        </a>
        <p>Product design · 2026</p>
      </header>

      <nav className="floating-nav" aria-label="Case study sections">
        <a href="#overview"><span>01</span>Overview</a>
        <a href="#approach"><span>02</span>Approach</a>
        <a href="#solution"><span>03</span>Solution</a>
        <a href="#priority"><span>04</span>Priority</a>
        <a href="#evaluation"><span>05</span>Measure</a>
      </nav>

      <section className="hero section-pad" id="overview">
        <div className="hero-copy">
          <p className="eyebrow">A last-mile service case study</p>
          <h1>Delivering<br /><em>certainty.</em></h1>
          <p className="hero-intro">
            A contactless locker experience that helps people choose, track, and collect food with confidence—plus an honest way to make faster delivery more compelling.
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
            <h3>Choice without pressure</h3>
            <p>Priority can be persuasive by making its value concrete—not by hiding alternatives, preselecting a premium, or manufacturing urgency.</p>
            <div className="scribble">value ≠ dark pattern</div>
          </article>
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
          {["Delivery options", "Locker details", "Order tracking", "Ready to collect", "Door opened"].map((title, i) => (
            <div className="wire" key={title}>
              <div className="wire-top" /><div className="wire-map" />
              <div className="wire-line long" /><div className="wire-line" /><div className="wire-line short" />
              <div className="wire-button" /><p>{i + 1}. {title}</p>
            </div>
          ))}
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
          <div className="door-copy"><p className="eyebrow">The physical finale</p><h3>Open compartment <em>08</em></h3><p>A pulsing light and oversized number connect the phone to the right door. The confirmation screen asks one thing: “Did you get your order?”</p></div>
          <div className="big-locker" aria-label="Locker compartment 08 open">
            <div>06</div><div>07</div><div className="open-door"><span>08</span><i>Order<br />inside</i></div><div>09</div><div>10</div><div>11</div>
          </div>
        </div>
      </section>

      <section className="priority section-pad" id="priority">
        <div className="section-heading priority-heading">
          <p className="eyebrow">04 · Ethical persuasion</p>
          <h2>Make the value louder.<br />Keep the choice equal.</h2>
          <p>Priority earns attention through a better value story: a specific time benefit, a transparent fee, and an explanation grounded in the current order.</p>
        </div>

        <div className="priority-layout">
          <Phone label="DELIVERY SPEED">
            <div className="app-header"><button aria-label="Back">←</button><b>Delivery speed</b><span /></div>
            <div className="basket-summary"><span>Arrives to</span><b>Central Office</b></div>
            <div className="speed-card recommended">
              <div className="recommended-label">FASTEST · SAVE 15 MIN</div>
              <span className="speed-icon">⚡</span><div><b>Priority</b><p>Arrives 12:40–12:50</p><small>Matched with the next available rider</small></div><strong>฿15</strong><i>✓</i>
            </div>
            <div className="speed-card"><span className="speed-icon">●</span><div><b>Normal</b><p>Arrives 12:55–1:05</p></div><strong>฿0</strong><i /></div>
            <div className="speed-card"><span className="speed-icon">⌁</span><div><b>Low-cost</b><p>Arrives 1:05–1:20</p></div><strong>–฿8</strong><i /></div>
            <button className="primary-btn">Continue · Priority</button>
            <p className="fine-print">Times are estimates and may change with traffic.</p>
          </Phone>

          <div className="ethics-panel">
            <div className="ethics-title"><span>THE FAIR NUDGE</span><h3>Four guardrails</h3></div>
            <article><span>01</span><div><h4>Explain the benefit</h4><p>“Save 15 min” is more meaningful than a vague “best” badge.</p></div></article>
            <article><span>02</span><div><h4>Show the full price</h4><p>No surprise fee downstream and no crossed-out fictional price.</p></div></article>
            <article><span>03</span><div><h4>Preserve equal access</h4><p>Every option remains visible, readable, and selectable in one tap.</p></div></article>
            <article><span>04</span><div><h4>Remember, don’t assume</h4><p>Respect the user’s last deliberate choice; never silently upgrade it.</p></div></article>
          </div>
        </div>
      </section>

      <section className="evaluation section-pad" id="evaluation">
        <div className="section-heading">
          <p className="eyebrow">05 · Evaluate in layers</p>
          <h2>Success is a pickup<br />without a second thought.</h2>
        </div>

        <div className="test-plan">
          <article><span>BEFORE BUILD</span><h3>Prototype test</h3><p>5–7 participants in a simulated lobby. Test first-click locker choice, QR failure recovery, passcode entry, and compartment identification.</p><b>Signal: ≥ 80% complete unassisted</b></article>
          <article><span>PILOT</span><h3>Shadow launch</h3><p>Instrument a small set of locations. Observe retrieval time, locker errors, and where users open help without changing operational rules.</p><b>Signal: &lt; 90 sec median pickup</b></article>
          <article><span>SCALE</span><h3>Controlled experiment</h3><p>Compare the new flow with the current drop-off experience. For Priority, test value framing—not access friction—against an honest baseline.</p><b>Signal: lift with stable regret</b></article>
        </div>

        <div className="metrics-table">
          <div className="metric-row table-head"><span>Lens</span><span>Metric</span><span>Question answered</span></div>
          {evaluationMetrics.map(([lens, metric, question]) => <div className="metric-row" key={lens}><span>{lens}</span><b>{metric}</b><p>{question}</p></div>)}
        </div>

        <div className="closing-card">
          <p className="eyebrow">What I would explore next</p>
          <h3>Capacity prediction, multi-order pickup, accessibility at the physical locker, and rider-side recovery when no compartment fits.</h3>
          <a href="#overview">Back to the top ↑</a>
        </div>
      </section>

      <footer><span>LOCKER / PRIORITY</span><p>Confidential product design exercise · 2026</p><b>END 05/05</b></footer>
    </main>
  );
}
