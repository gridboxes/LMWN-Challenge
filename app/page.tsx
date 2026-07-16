/* eslint-disable @next/next/no-html-link-for-pages */

import Image from "next/image";
import { FooterPixelScene } from "./pixel-art";

const flowSteps = [
  ["01", "Discover", "Find Pickup Box inside the familiar delivery-instruction flow."],
  ["02", "Choose", "Compare locations by availability, floor, zone, and a real-world photo."],
  ["03", "Confirm", "See the selected box in the order summary before placing the order."],
  ["04", "Retrieve", "Use the QR or 4-digit code, then follow the highlighted compartment."],
  ["05", "Reflect", "Confirm collection and rate the Pickup Box separately from the rider."],
];

const lockerMetrics = [
  ["Adoption", "Locker selection rate", "Do people understand and trust the option?"],
  ["Retrieval", "First-attempt open rate", "Can users unlock without help?"],
  ["Efficiency", "Median time at locker", "Is pickup actually faster?"],
  ["Reliability", "Support contacts / 1k orders", "Where does the journey break?"],
];

const priorityMetrics = [
  ["Choice", "Priority selection lift", "Does the clearer value proposition improve adoption?"],
  ["Appeal", "Perceived feature value", "Does faster delivery plus giving back feel worth the premium?"],
  ["Emotion", "Post-delivery satisfaction", "Does the feature leave users feeling positive about their choice?"],
  ["Clarity", "Contribution comprehension", "Do users understand that up to 50% applies to the Priority fee?"],
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

function ProductScreen({
  src,
  alt,
  label,
  width = 804,
  height = 1748,
  compact = false,
}: {
  src: string;
  alt: string;
  label: string;
  width?: number;
  height?: number;
  compact?: boolean;
}) {
  return (
    <figure className={`product-screen ${compact ? "compact" : ""}`}>
      <figcaption>{label}</figcaption>
      <div className="product-screen-frame">
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 760px) 72vw, 360px" unoptimized />
      </div>
    </figure>
  );
}

export function CaseStudy({ variant }: { variant: "locker" | "priority" }) {
  const isPriority = variant === "priority";
  const metrics = isPriority ? priorityMetrics : lockerMetrics;

  return (
    <main>
      <header className="site-header">
        <div className="wordmark">
          <span className="brand-mark" aria-hidden="true" /> / CASE {isPriority ? "02" : "01"}
        </div>
      </header>

      <nav className="floating-nav" aria-label="Case study navigation">
        <a className="nav-home" href="/"><span>←</span>Home</a>
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
            A Pickup Box experience embedded in the existing delivery flow, helping people choose, track, and collect food with confidence—from checkout to compartment.
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
            <div className="locker-head"><span className="locker-lineman" aria-hidden="true"><i /></span><b>PICK-UP</b></div>
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
          <article><span>DESIGNED</span><b>User experience</b><p>Feature discovery, location selection, order confirmation, handoff tracking, secure retrieval, and Pickup Box feedback.</p></article>
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
            <li><span>01</span><p><b>Availability can change.</b> Show Available, Limited, and Full before the user commits to a Pickup Box location.</p></li>
            <li><span>02</span><p><b>The model is unfamiliar.</b> Introduce the three-step service at the moment a user first considers the delivery instruction.</p></li>
            <li><span>03</span><p><b>QR is not universal.</b> Pair scanning with a visible 4-digit pickup code and clear help guidance.</p></li>
            <li><span>04</span><p><b>Shared spaces are noisy.</b> Repeat the floor, landmark, remaining time, and compartment number exactly when they matter.</p></li>
          </ol>
        </div>
      </section>

      <section className="journey section-pad">
        <div className="section-heading compact">
          <p className="eyebrow">02 · Map the journey</p>
          <h2>One job per moment.</h2>
          <p>The feature stays inside the familiar ordering journey, revealing only the information needed to discover, choose, retrieve, and evaluate the box.</p>
        </div>
        <div className="flow-grid">
          {flowSteps.map(([num, title, body]) => (
            <article className="flow-step" key={num}>
              <span>{num}</span><div className="flow-icon" aria-hidden="true" />
              <h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>

        <div className="real-flow-board" aria-label="End-to-end Pickup Box product flow">
          <div className="board-title"><span>FINAL UI FLOW</span><b>5 decisive moments</b></div>
          <ProductScreen compact label="01 · Discover" src="/case-01/delivery-instruction.png" alt="Pickup Box shown among delivery instruction choices in checkout" />
          <ProductScreen compact label="02 · Choose" src="/case-01/locker-photo-selected.png" alt="Available Pickup Box location selected with a photo and landmark" />
          <ProductScreen compact label="03 · Confirm" src="/case-01/checkout-confirmed.png" alt="Order page confirming Place in a Pickup Box and its location" width={852} height={1934} />
          <ProductScreen compact label="04 · Retrieve" src="/case-01/ready-to-collect.png" alt="Ready-to-collect screen with QR code, pickup code, location, and remaining time" />
          <ProductScreen compact label="05 · Collect" src="/case-01/compartment-07.png" alt="Collection screen highlighting Pickup Box compartment 07" />
        </div>
      </section>

      <section className="solution section-pad" id="solution">
        <div className="section-heading">
          <p className="eyebrow">03 · The locker experience</p>
          <h2>Context first.<br />Code when it counts.</h2>
        </div>

        <div className="phone-stage real-ui-stage stage-green">
          <div className="stage-copy">
            <span className="stage-number">01</span>
            <p className="eyebrow">Introduce without interrupting</p>
            <h3>Pickup Box enters through a familiar delivery choice.</h3>
            <p>The new service lives alongside existing delivery instructions. A lightweight explainer appears at first discovery, then gets out of the way.</p>
            <ul className="check-list"><li>Existing checkout structure stays intact</li><li>Three steps explain the service model</li><li>“New” creates a clear discovery cue</li></ul>
          </div>
          <div className="product-screen-group two-up offset-pair">
            <ProductScreen label="DELIVERY INSTRUCTIONS" src="/case-01/delivery-instruction.png" alt="Pickup Box presented as a new delivery instruction during checkout" />
            <ProductScreen label="FIRST-USE EXPLAINER" src="/case-01/onboarding.png" alt="Bottom sheet explaining how the LINE MAN Pickup Box service works" />
          </div>
        </div>

        <div className="phone-stage real-ui-stage stage-cream reverse">
          <div className="stage-copy">
            <span className="stage-number">02</span>
            <p className="eyebrow">Choose a real place</p>
            <h3>Availability and recognition do different jobs.</h3>
            <p>Status helps users decide whether a location is viable. Floor, landmark, and a real-world image help them recognize it when they arrive.</p>
            <div className="callout"><b>Design decision</b><p>Available, Limited, and Full make operational capacity visible before an order is placed.</p></div>
          </div>
          <div className="product-screen-group two-up">
            <ProductScreen label="CAPACITY AT A GLANCE" src="/case-01/locker-options.png" alt="Pickup Box location list showing Available, Limited, and Full capacity" />
            <ProductScreen label="PHYSICAL RECOGNITION" src="/case-01/locker-photo-selected.png" alt="Selected Pickup Box location with floor, landmark, availability, and a photo" />
          </div>
        </div>

        <div className="phone-stage real-ui-stage stage-black">
          <div className="stage-copy">
            <span className="stage-number">03</span>
            <p className="eyebrow">Track the handoff</p>
            <h3>The destination changes from a person to a box.</h3>
            <p>The tracking experience names the Pickup Box location throughout, then switches from “Heading your way” to “Placing off your food” as the rider completes the physical handoff.</p>
            <ul className="check-list"><li>Locker remains visible as the destination</li><li>Rider arrival has its own state</li><li>Collection starts only after the food is secured</li></ul>
          </div>
          <div className="product-screen-group two-up">
            <ProductScreen label="RIDER EN ROUTE" src="/case-01/rider-en-route.png" alt="Delivery tracking screen showing the rider heading toward the Pickup Box destination" />
            <ProductScreen label="RIDER AT THE BOX" src="/case-01/rider-at-locker.png" alt="Delivery tracking screen showing the rider placing the food in the Pickup Box" />
          </div>
        </div>

        <div className="phone-stage real-ui-stage stage-blue reverse">
          <div className="stage-copy">
            <span className="stage-number">04</span>
            <p className="eyebrow">Retrieve without guessing</p>
            <h3>Code, time, place, then compartment.</h3>
            <p>The ready state puts both access methods together with the exact location and a 30-minute collection window. After access, the interface reduces the task to one unmistakable cue: compartment 07, lit in green.</p>
            <ul className="check-list"><li>QR and 4-digit code share one surface</li><li>Remaining time is explicit</li><li>The compartment map mirrors the hardware</li></ul>
          </div>
          <div className="product-screen-group two-up">
            <ProductScreen label="READY TO COLLECT" src="/case-01/ready-to-collect.png" alt="Ready-to-collect screen with QR code, 4-digit pickup code, location, and 30-minute window" />
            <ProductScreen label="COMPARTMENT 07" src="/case-01/compartment-07.png" alt="Pickup Box map highlighting compartment 07 in green with an Order collected action" />
          </div>
        </div>
      </section>

      </>}

      {isPriority && <>
      <section className="priority-hero section-pad" id="overview">
        <div className="priority-hero-copy">
          <p className="eyebrow">A feature-led persuasion case study</p>
          <h1>Priority with<br /><em>Purpose.</em></h1>
          <p className="hero-intro">A purpose-led Priority feature that makes upgrading feel better: users get their food sooner, and up to 50% of the Priority fee supports charity.</p>
          <div className="hero-meta">
            <span>Role<br /><b>Product designer</b></span>
            <span>Scope<br /><b>UX · Strategy · Persuasion</b></span>
            <span>Format<br /><b>Design exercise</b></span>
          </div>
        </div>
        <div className="priority-hero-art" aria-label="Delivery speed comparison illustration">
          <span className="speed-sticker">FAST<br />FEELS<br />GOOD</span>
          <div className="speed-line speed-line-fast"><b>PRIORITY</b><strong>15–20 min</strong><i /></div>
          <div className="speed-line"><b>NORMAL</b><strong>30–40 min</strong><i /></div>
          <div className="speed-line"><b>LOW-COST</b><strong>45–60 min</strong><i /></div>
        </div>
      </section>

      <section className="priority-problem section-pad" id="approach">
        <div className="section-heading">
          <p className="eyebrow">01 · Frame the tension</p>
          <h2>Give Priority a reason<br />to feel worth it.</h2>
        </div>
        <div className="challenge-grid">
          <article className="challenge-card orange"><span className="card-index">A</span><h3>Beyond speed</h3><p>Priority competes on arrival time alone. The feature needs an additional benefit that makes the premium feel more meaningful.</p><div className="scribble">functional + emotional value</div></article>
          <article className="challenge-card acid"><span className="card-index">B</span><h3>A positive payoff</h3><p>Users receive the fastest delivery and the good feeling that part of their fee supports something beyond the order.</p><div className="scribble">faster → gives back → feels good</div></article>
        </div>
        <div className="north-star"><p>North-star question</p><blockquote>How might we make Priority feel more rewarding—not simply more urgent?</blockquote></div>
      </section>
      </>}

      {isPriority && <>
      <section className="priority section-pad" id="solution">
        <div className="section-heading priority-heading">
          <p className="eyebrow">02 · The proposed model</p>
          <h2>Move faster.<br />Pass good forward.</h2>
          <p>Faster delivery, with up to 50% of the Priority fee supporting charity.</p>
        </div>

        <div className="concept-assumption"><span>FEATURE PROMISE</span><p>One upgrade delivers two benefits: the fastest available arrival and the feeling that part of the fee gives back. The percentage can vary by campaign, up to 50% of the Priority fee.</p></div>

        <div className="price-logic" aria-label="Delivery pricing and donation breakdown">
          <div><span>LOW-COST</span><b>฿20</b><p>Save money<br />Wait longer</p></div>
          <div><span>NORMAL</span><b>฿30</b><p>Standard match<br />Standard time</p></div>
          <div className="logic-priority"><span>PRIORITY + PURPOSE</span><b>฿50</b><p>Fastest delivery<br /><strong>+ charity contribution</strong></p></div>
          <div className="logic-note"><b>UP TO<br />50%</b><p>of the Priority fee supports charity.</p></div>
        </div>

        <div className="priority-layout">
          <Phone label="CHOOSE DELIVERY">
            <div className="app-header"><button aria-label="Back">←</button><b>Choose delivery</b><span /></div>
            <div className="basket-summary"><span>Arrives to</span><b>Central Office</b></div>
            <div className="speed-card recommended">
              <div className="recommended-label">FASTEST · GIVES BACK</div>
              <span className="speed-icon">♥</span><div><b>Priority with Purpose</b><p>Arrives 12:40–12:50</p><small>Next available rider · gives back</small></div><strong>฿50</strong><i>✓</i>
              <div className="donation-breakdown"><span>Fastest Priority delivery <b>Included</b></span><span>Gives back <b>Up to 50% of fee</b></span></div>
            </div>
            <div className="speed-card"><span className="speed-icon">●</span><div><b>Normal</b><p>Arrives 12:55–1:05</p></div><strong>฿30</strong><i /></div>
            <div className="speed-card"><span className="speed-icon">⌁</span><div><b>Low-cost</b><p>Arrives 1:05–1:20</p></div><strong>฿20</strong><i /></div>
            <button className="primary-btn">Continue · ฿50</button>
            <p className="fine-print">Up to 50% of this Priority delivery fee supports a verified charity after delivery. <u>How it works</u></p>
          </Phone>

          <div className="ethics-panel">
            <div className="ethics-title"><span>WHY USERS MAY CHOOSE IT</span><h3>Fast feels good.</h3></div>
            <article><span>01</span><div><h4>Immediate functional value</h4><p>The fastest delivery window gives users a clear, practical reason to upgrade.</p></div></article>
            <article><span>02</span><div><h4>A positive emotional benefit</h4><p>The same choice also lets users feel that part of their fee is doing something good.</p></div></article>
            <article><span>03</span><div><h4>A memorable proposition</h4><p>“Up to 50% of the Priority fee gives back” is simple enough to notice and recall.</p></div></article>
            <article><span>04</span><div><h4>Choice remains intact</h4><p>Normal and Low-cost stay visible as a supporting guardrail, not the main story.</p></div></article>
          </div>
        </div>

        <div className="impact-flow">
          <div className="impact-copy"><p className="eyebrow">The feature experience</p><h3>Choose → receive → feel good</h3><p>The purpose benefit makes the upgrade appealing at selection, then a lightweight confirmation closes the emotional loop after delivery.</p></div>
          <div className="impact-steps">
            <article><span>1</span><div><b>Choose</b><p>See the fastest window and the gives-back benefit as one clear feature.</p></div></article>
            <article><span>2</span><div><b>Receive</b><p>Get the functional payoff first: the food arrives sooner.</p></div></article>
            <article className="impact-receipt"><span>✓</span><div><small>DELIVERY COMPLETE</small><b>You moved good forward</b><p>Your Priority delivery supported a verified charity.</p></div></article>
          </div>
        </div>
      </section>
      </>}

      <section className="evaluation section-pad" id="evaluation">
        <div className="section-heading">
          <p className="eyebrow">{isPriority ? "03" : "04"} · Evaluate in layers</p>
          <h2>{isPriority ? <>The feature works when<br />the upgrade feels worth it.</> : <>Success is a pickup<br />without a second thought.</>}</h2>
        </div>

        {!isPriority && <div className="feedback-evidence">
          <div className="feedback-copy">
            <p className="eyebrow">Close the learning loop</p>
            <h3>Rate the box separately from the rider.</h3>
            <p>Pickup Box feedback sits inside the familiar completed-order experience, but isolates the service signals that matter: convenience, location placement, peace of mind, and ease of pickup.</p>
          </div>
          <div className="product-screen-group two-up">
            <ProductScreen label="SERVICE-SPECIFIC PROMPT" src="/case-01/pickup-feedback.png" alt="Completed-order page asking the user to rate the Pickup Box separately" />
            <ProductScreen label="ACTIONABLE SIGNALS" src="/case-01/pickup-feedback-selected.png" alt="Pickup Box feedback with five stars and service-specific feedback tags" />
          </div>
        </div>}

        <div className="test-plan">
          {isPriority ? <>
            <article><span>BEFORE BUILD</span><h3>Feature appeal test</h3><p>Ask users what makes Priority with Purpose attractive, what they expect to receive, and how the gives-back benefit affects the choice.</p><b>Signal: users recall both benefits</b></article>
            <article><span>PILOT</span><h3>Choice experiment</h3><p>Compare standard Priority with Priority with Purpose while keeping timing, placement, and the other delivery options consistent.</p><b>Signal: meaningful Priority selection lift</b></article>
            <article><span>AFTER DELIVERY</span><h3>Feel-good check</h3><p>Measure whether faster arrival plus the contribution confirmation makes the upgrade feel more worthwhile.</p><b>Signal: higher post-delivery satisfaction</b></article>
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
          <h3>{isPriority ? "Make Priority worth choosing: faster for the user, positive beyond the order." : "Capacity prediction, multi-order pickup, accessibility at the physical locker, and rider-side recovery when no compartment fits."}</h3>
          <a href="#overview">Back to the top ↑</a>
        </div>
      </section>

      <a className="next-case" href={isPriority ? "/work/delivering-certainty" : "/work/priority-with-purpose"}>
        <span>NEXT CASE STUDY</span><b>{isPriority ? "Delivering Certainty" : "Priority with Purpose"} →</b>
      </a>
      <footer><span>{isPriority ? "PRIORITY WITH PURPOSE" : "DELIVERING CERTAINTY"}</span><p>Product design exercise · 2026</p><b>END</b></footer>
    </main>
  );
}

export default function Home() {
  return (
    <main className="simple-home" id="top">
      <header className="simple-header">
        <a className="simple-brand" href="/" aria-label="Delivery Experience home"><span className="brand-mark" aria-hidden="true" /><b>Delivery Experience</b></a>
        <nav aria-label="Case study navigation"><a href="/work/delivering-certainty" aria-label="Case study 1: Delivering Certainty">01</a><a href="/work/priority-with-purpose" aria-label="Case study 2: Priority with Purpose">02</a></nav>
      </header>

      <section className="simple-hero" aria-label="Product design assignment overview">
        <div className="simple-intro">
          <p className="simple-eyebrow">Product design assignment · 2026</p>
          <h1>Better delivery,<br /><em>by design.</em></h1>
          <p className="simple-summary">Two case studies in turning uncertain handoffs and ordinary upgrades into experiences worth choosing.</p>
        </div>

        <div className="response-board" aria-label="Choose an assignment response">
          <div className="response-board-head"><span>Choose a case study</span><b>01—02</b></div>
          <a className="response-tile response-locker" href="/work/delivering-certainty" aria-label="Read Problem 1: Delivering Certainty">
            <span>01</span><div><small>Last-mile experience</small><b>Delivering<br />Certainty</b></div>
            <div className="tile-preview mini-locker" aria-hidden="true">
              <span className="mini-locker-head">M / PICK-UP</span><span /><span /><span className="active" /><span /><span /><span />
            </div><i>→</i>
          </a>
          <a className="response-tile response-priority" href="/work/priority-with-purpose" aria-label="Read Problem 2: Priority with Purpose">
            <span>02</span><div><small>Feature strategy</small><b>Priority with<br />Purpose</b></div>
            <div className="tile-preview mini-priority" aria-hidden="true">
              <span className="mini-speed fast">15–20</span><span className="mini-speed">30–40</span><span className="mini-speed">45–60</span><span className="mini-give">50%</span>
            </div><i>→</i>
          </a>
        </div>
      </section>

      <footer className="simple-footer">
        <div className="footer-note"><small>Made with care</small><b>by Sivakorn S.</b></div>
        <FooterPixelScene />
        <nav aria-label="Footer links">
          <a href="mailto:sivakorn.sam@mtel.co.th">Say hello ↗</a>
          <a href="#top">Back to top ↑</a>
        </nav>
      </footer>
    </main>
  );
}
