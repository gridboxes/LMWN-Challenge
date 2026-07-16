/* eslint-disable @next/next/no-html-link-for-pages */

import Image from "next/image";
import { FooterPixelScene } from "./pixel-art";
import { CaseStudyNav } from "./case-study-nav";

const flowSteps = [
  ["01", "Choose", "See nearby lockers before placing the order."],
  ["02", "Confirm", "Know the walk, opening hours, and pickup window."],
  ["03", "Track", "Follow one clear timeline from kitchen to locker."],
  ["04", "Unlock", "Present the QR to the locker scanner or enter a 4-digit fallback code."],
  ["05", "Collect", "Get a compartment cue and close the loop."],
];

const lockerMetrics = [
  ["Adoption", "Locker selection rate", "Do people understand and trust the option?"],
  ["Access", "First-attempt access rate", "Can users unlock without help?"],
  ["Efficiency", "Median scan-to-door-open time", "Is the physical handoff quick?"],
  ["Reliability", "Fallback and help rate by cause", "Where does access break?"],
  ["Safety", "Uncollected or expired orders", "Does the holding policy protect food quality?"],
  ["Operations", "Rider dwell and no-fit rate", "Does the service work for riders and hardware?"],
];

const priorityMetrics = [
  ["Choice", "Priority selection lift", "Does the clearer value proposition improve adoption?"],
  ["Appeal", "Perceived feature value", "Does faster delivery plus giving back feel worth the premium?"],
  ["Emotion", "Post-delivery satisfaction", "Does the feature leave users feeling positive about their choice?"],
  ["Clarity", "Contribution comprehension", "Do users understand that up to 50% applies to the Priority fee?"],
];

function ProductScreen({
  src,
  alt,
  label,
  width = 804,
  height = 1748,
  compact = false,
  correction,
}: {
  src: string;
  alt: string;
  label: string;
  width?: number;
  height?: number;
  compact?: boolean;
  correction?: "handoff" | "compartment" | "feedback";
}) {
  return (
    <figure className={`product-screen ${compact ? "compact" : ""}`}>
      <figcaption>{label}</figcaption>
      <div className="product-screen-frame">
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 760px) 72vw, 360px" unoptimized />
        {correction === "handoff" && <span className="screen-copy-fix fix-handoff">Securing your order</span>}
        {correction === "compartment" && <span className="screen-copy-fix fix-compartment">Compartment 07</span>}
        {correction === "feedback" && <span className="screen-copy-fix fix-feedback">How was your Pickup Box experience?</span>}
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
          <a className="header-home" href="/" aria-label="Home">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.5 10.5 12 3l8.5 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-4.5v-6h-5v6H5a1.5 1.5 0 0 1-1.5-1.5Z" />
            </svg>
          </a>
          <span className="wordmark-label">/ CASE {isPriority ? "02" : "01"}</span>
        </div>
      </header>

      <CaseStudyNav />

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

        <div className="decision-record">
          <div className="decision-record-heading">
            <p className="eyebrow">Decision record</p>
            <h3>Turn assumptions into testable service rules.</h3>
            <p>These are product decisions for the prototype—not facts from the brief. Each one needs validation with operations, hardware, and users.</p>
          </div>
          <div className="decision-record-list">
            <article><span>ACCESS</span><b>The locker scans the QR displayed in the app.</b><p>The same ready screen exposes a 4-digit code that can be entered on the locker when scanning is unavailable.</p><small>Validate: scan reliability and passcode comprehension</small></article>
            <article><span>CAPACITY</span><b>Reserve capacity after the restaurant accepts.</b><p>The exact compartment is still assigned when the rider arrives, based on order size and live hardware status.</p><small>Validate: reservation window and no-fit rate</small></article>
            <article><span>WAYFINDING</span><b>Repeat recognition cues at collection.</b><p>The locker photo anchors selection; floor and landmark are repeated when the order becomes ready.</p><small>Validate: first-attempt locker identification</small></article>
            <article><span>COMPLETION</span><b>Give users a clear confirmation moment.</b><p>Users can mark the order collected after closing the door; the order auto-completes after three minutes as a safety net.</p><small>Validate: confirmation comprehension and false-complete rate</small></article>
          </div>
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

        <div className="wireframe-board" aria-label="End-to-end Pickup Box wireframes with recovery paths">
          <div className="board-title"><span>EARLY WIREFRAMES</span><b>5 states / 2 recovery paths</b></div>
          <div className="wire wire-choose"><div className="wire-appbar"><i>←</i><b>Delivery method</b></div><div className="wire-tabs"><span>Door</span><b>Pick up</b></div><div className="wire-map"><i /><i /><i /></div><div className="wire-card"><b>Central Office · Lobby</b><span>3 min walk · Open until 10 PM</span></div><div className="wire-card muted"><b>Metro Tower · B1</b><span>6 min walk · Open 24 hours</span></div><div className="wire-button">View locker</div><p>1. Choose a locker</p></div>
          <div className="wire wire-confirm"><div className="wire-appbar"><i>←</i><b>Locker details</b></div><div className="wire-map detail"><i /></div><div className="wire-detail-title"><b>Central Office · Lobby</b><span>Near the south entrance</span></div><div className="wire-facts"><span>3 min walk</span><span>Open until 10 PM</span><span>Available now</span></div><div className="wire-note">Capacity is reserved after the restaurant accepts.</div><div className="wire-button">Use this locker</div><p>2. Confirm the place</p></div>
          <div className="wire wire-track"><div className="wire-appbar"><i>←</i><b>Order #A38</b></div><div className="wire-status"><span>12–18 min</span><b>Heading to your locker</b></div><div className="wire-timeline"><i className="done" /><b>Restaurant confirmed</b><i className="done" /><b>Picked up by rider</b><i className="current" /><b>On the way to locker</b><i /><b>Ready to collect</b></div><div className="wire-button light">Locker directions</div><p>3. Track the handoff</p></div>
          <div className="wire wire-ready"><div className="wire-appbar"><i>←</i><b>Pick up order</b></div><div className="wire-ready-label">READY</div><div className="wire-qr">▦</div><b className="wire-location">Central Office · Lobby</b><small>Pick up by 2:10 PM</small><div className="wire-code">7 2 4 8</div><div className="wire-help">QR fails? Enter the 4-digit code.</div><p>4. Unlock with fallback</p></div>
          <div className="wire wire-open"><div className="wire-appbar"><i>←</i><b>Compartment opened</b></div><div className="wire-door-number"><small>OPEN</small><b>07</b><span>Green light is pulsing</span></div><div className="wire-collect-check">✓ Did you get your order?</div><div className="wire-button">Yes, I have it</div><p>5. Collect + confirm</p></div>
          <div className="wire-arrow arrow-1">→</div><div className="wire-arrow arrow-2">→</div>
          <div className="wire-arrow arrow-3">→</div><div className="wire-arrow arrow-4">→</div>
          <div className="wire-recovery-rail" aria-label="Two recovery paths">
            <article><span>RECOVERY 01 · QR FAILURE</span><b>Use the visible 4-digit code</b><p>The order stays active while the user switches access method.</p></article>
            <article><span>RECOVERY 02 · DOOR ERROR</span><b>Retry once, then get help</b><p>Locker and order details travel with the support request.</p></article>
          </div>
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
          <div className="product-screen-group two-up">
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
            <div className="callout"><b>Design decision</b><p>Available, Limited, and Full support comparison. Capacity is reserved only after the restaurant accepts the order.</p></div>
          </div>
          <div className="product-screen-group two-up">
            <ProductScreen label="PHOTO + AVAILABILITY" src="/case-01/locker-photo-selected.png" alt="Selected Pickup Box location with floor, landmark, availability, and a photo" />
            <ProductScreen label="CAPACITY AT A GLANCE" src="/case-01/locker-options.png" alt="Pickup Box location list showing Available, Limited, and Full capacity" />
          </div>
        </div>

        <div className="capacity-contract" aria-label="Pickup Box capacity contract">
          <div><span>01 · CHECKOUT</span><b>Show live capacity</b><p>Availability helps users compare viable locations without promising a specific door.</p></div>
          <div><span>02 · ACCEPTED</span><b>Reserve suitable space</b><p>Hold capacity for the order size once the restaurant confirms the order.</p></div>
          <div><span>03 · RIDER ARRIVAL</span><b>Assign the compartment</b><p>The locker chooses an available fitting door and releases the hold after drop-off.</p></div>
          <div className="capacity-fallback"><span>IF THE HOLD FAILS</span><b>Keep the user informed</b><p>Offer a nearby box or a clearly named handoff fallback before the rider leaves.</p></div>
        </div>

        <div className="phone-stage real-ui-stage stage-black">
          <div className="stage-copy">
            <span className="stage-number">03</span>
            <p className="eyebrow">Track the handoff</p>
            <h3>The destination changes from a person to a box.</h3>
            <p>The tracking experience keeps the Pickup Box visible as the destination and preserves the familiar LINE MAN map, rider card, and delivery timeline. The ready notification opens directly into the collection screen.</p>
            <ul className="check-list"><li>Original LINE MAN tracking pattern stays intact</li><li>Rider arrival has its own handoff state</li><li>Notification has one clear next action</li></ul>
          </div>
          <div className="product-screen-group two-up">
            <ProductScreen label="EN ROUTE CONTEXT" src="/case-01/rider-en-route.png" alt="LINE MAN tracking screen showing the rider heading to the Hospital Bangna Pickup Box" />
            <ProductScreen label="RIDER AT THE BOX" src="/case-01/rider-at-locker.png" alt="LINE MAN tracking screen showing the rider placing the order in the Pickup Box" correction="handoff" />
          </div>
          <div className="handoff-notification" aria-label="Pickup Box ready notification">
            <span className="push-mark">M</span><div><small>LINE MAN · NOW</small><b>Your order is ready to collect</b><p>Hospital Bangna, Floor 1 · Near entrance 2</p></div><strong>Open →</strong>
          </div>
        </div>

        <div className="phone-stage real-ui-stage stage-blue reverse">
          <div className="stage-copy">
            <span className="stage-number">04</span>
            <p className="eyebrow">Retrieve without guessing</p>
            <h3>Code, time, place, then compartment.</h3>
            <p>The ready state follows the supplied design: users present the QR to the locker scanner or enter the 4-digit code. The next state highlights the assigned compartment, with a manual confirmation and three-minute auto-complete safety net.</p>
            <ul className="check-list"><li>QR and passcode share one familiar surface</li><li>Location and 30-minute window stay visible</li><li>The compartment map reflects the selected locker configuration</li></ul>
          </div>
          <div className="product-screen-group two-up">
            <ProductScreen label="READY TO COLLECT" src="/case-01/ready-to-collect.png" alt="LINE MAN ready-to-collect screen with QR code, pickup code, location, and remaining time" />
            <ProductScreen label="COMPARTMENT 07" src="/case-01/compartment-07.png" alt="LINE MAN collection screen highlighting Pickup Box compartment 07" correction="compartment" />
          </div>
        </div>

        <div className="recovery-section">
          <div className="section-heading compact">
            <p className="eyebrow">Recovery is part of the core flow</p>
            <h2>Keep the order safe when the happy path breaks.</h2>
            <p>Each recovery state preserves the order, explains what happened, and gives one recommended next step before exposing support.</p>
          </div>
          <div className="recovery-grid">
            <article><span>CAPACITY CHANGED</span><i>!</i><h3>This Pickup Box is full</h3><p>Your order is still with the rider. Choose the nearby Floor 1 box or switch to an attended handoff.</p><b>Recommended: nearby box · 2 min walk</b><button type="button">Choose fallback</button></article>
            <article><span>SCAN FAILED</span><i>⌁</i><h3>QR not recognised</h3><p>Increase screen brightness, hold the QR under the locker scanner, or enter the code shown in the app.</p><b>Fallback code · 7 2 4 8</b><button type="button">Show access options</button></article>
            <article><span>DOOR ERROR</span><i>×</i><h3>Compartment did not open</h3><p>The order stays active. Retry once, then connect to Pickup Box support with the locker and order details attached.</p><b>Order remains protected</b><button type="button">Get help</button></article>
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
          <div className="priority-product-screen">
            <ProductScreen label="REAL UI · PRIORITY SELECTION" src="/case-02/priority-order.png" alt="Food delivery checkout showing Priority gives back, the faster delivery window, up to 50% charity contribution, selected causes, and visible Normal and Low-cost alternatives" width={1206} height={2622} />
          </div>

          <div className="ethics-panel">
            <div className="ethics-title"><span>WHY USERS MAY CHOOSE IT</span><h3>Fast feels good.</h3></div>
            <article><span>01</span><div><h4>Immediate functional value</h4><p>The fastest delivery window gives users a clear, practical reason to upgrade.</p></div></article>
            <article><span>02</span><div><h4>A positive emotional benefit</h4><p>The same choice also lets users feel that part of their fee is doing something good.</p></div></article>
            <article><span>03</span><div><h4>A memorable proposition</h4><p>“Up to 50% of the Priority fee gives back” is simple enough to notice and recall.</p></div></article>
            <article><span>04</span><div><h4>Choice remains intact</h4><p>Normal and Low-cost stay visible as a supporting guardrail, not the main story.</p></div></article>
          </div>
        </div>

        <div className="impact-flow">
          <div className="impact-copy"><p className="eyebrow">The feature experience</p><h3>Choose → receive → feel good</h3><p>The selection screen makes the faster arrival and gives-back benefit concrete. After delivery, the impact screen closes the loop with time saved, lives impacted, and the causes supported.</p></div>
          <div className="priority-impact-screen">
            <ProductScreen label="REAL UI · POST-DELIVERY IMPACT" src="/case-02/priority-impact.png" alt="Priority gives back thank-you screen showing total time saved, lives impacted, supported charities, and a share-my-impact action" width={1206} height={2622} />
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
            <p>Pickup Box feedback sits inside the familiar completed-order experience, but isolates the supplied service signals: convenience, location placement, peace of mind, and ease of pickup.</p>
          </div>
          <div className="product-screen-group two-up">
            <ProductScreen label="SERVICE-SPECIFIC PROMPT" src="/case-01/pickup-feedback.png" alt="LINE MAN completed-order page asking users to rate the Pickup Box separately" correction="feedback" />
            <ProductScreen label="ACTIONABLE SIGNALS" src="/case-01/pickup-feedback-selected.png" alt="LINE MAN Pickup Box feedback screen with five stars and service-specific tags" correction="feedback" />
          </div>
        </div>}

        <div className="test-plan">
          {isPriority ? <>
            <article><span>BEFORE BUILD</span><h3>Feature appeal test</h3><p>Ask users what makes Priority with Purpose attractive, what they expect to receive, and how the gives-back benefit affects the choice.</p><b>Signal: users recall both benefits</b></article>
            <article><span>PILOT</span><h3>Choice experiment</h3><p>Compare standard Priority with Priority with Purpose while keeping timing, placement, and the other delivery options consistent.</p><b>Signal: meaningful Priority selection lift</b></article>
            <article><span>AFTER DELIVERY</span><h3>Feel-good check</h3><p>Measure whether faster arrival plus the contribution confirmation makes the upgrade feel more worthwhile.</p><b>Signal: higher post-delivery satisfaction</b></article>
          </> : <>
            <article><span>BEFORE BUILD</span><h3>Formative prototype test</h3><p>Test 6–8 participants in a simulated lobby across selection, wayfinding, QR failure, passcode fallback, and compartment identification. Record assistance and error severity—not a fragile percentage.</p><b>Gate: zero unresolved critical failures</b></article>
            <article><span>CONTROLLED PILOT</span><h3>Validate the service</h3><p>Launch at 2–3 locations with instrumented hardware. Compare first-attempt access, scan-to-door-open time, expired pickups, and rider no-fit events against agreed baselines.</p><b>Initial target: ≥95% first-attempt access</b></article>
            <article><span>SCALE</span><h3>Monitor by location</h3><p>Compare locker models and buildings while protecting guardrails: food quality, support contacts, fallback rate, accessibility issues, and rider dwell.</p><b>Gate: no guardrail regression</b></article>
          </>}
        </div>

        {!isPriority && <div className="instrumentation-map">
          <div><p className="eyebrow">Measurement contract</p><h3>Instrument the handoff, not only the final rating.</h3></div>
          <ol>
            <li><span>01</span><b>locker_selected</b></li>
            <li><span>02</span><b>capacity_reserved</b></li>
            <li><span>03</span><b>ready_notified</b></li>
            <li><span>04</span><b>scan_started</b></li>
            <li><span>05</span><b>access_granted</b></li>
            <li><span>06</span><b>door_opened</b></li>
            <li><span>07</span><b>order_collected</b></li>
            <li><span>08</span><b>fallback_or_help</b></li>
          </ol>
        </div>}

        <div className="metrics-table">
          <div className="metric-row table-head"><span>Lens</span><span>Metric</span><span>Question answered</span></div>
          {metrics.map(([lens, metric, question]) => <div className="metric-row" key={lens}><span>{lens}</span><b>{metric}</b><p>{question}</p></div>)}
        </div>

        <div className="closing-card">
          <p className="eyebrow">{isPriority ? "The principle I would protect" : "What I would explore next"}</p>
          <h3>{isPriority ? "Make Priority worth choosing: faster for the user, positive beyond the order." : "Validate the reservation window, accessibility at the physical locker, multi-order pickup, and rider recovery when no compartment fits."}</h3>
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
