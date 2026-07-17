/* eslint-disable @next/next/no-html-link-for-pages */

import Image from "next/image";
import { FooterPixelScene } from "./pixel-art";
import { CaseStudyNav } from "./case-study-nav";
import { HomeGreeting } from "./home-greeting";
import { SayHelloLink } from "./say-hello-link";

const flowSteps = [
  ["01", "Choose", "Compare Pickup Box locations by availability, floor, and landmark."],
  ["02", "Confirm", "Review the selected Pickup Box inside Delivery Info before ordering."],
  ["03", "Track", "Follow the familiar map, ETA, and rider handoff to the box."],
  ["04", "Unlock", "Use QR access or enter the 4-digit fallback code at the locker."],
  ["05", "Collect", "Find the highlighted compartment and confirm collection."],
];

const lockerMetrics = [
  ["Adoption", "Locker selection rate", "Do people understand and trust the option?"],
  ["Access", "First-attempt access rate", "Can users unlock without help?"],
  ["Efficiency", "Median scan-to-door-open time", "Is the physical handoff quick?"],
  ["Reliability", "Fallback and help rate by cause", "Where does access break?"],
  ["Safety", "Uncollected or expired orders", "Does the holding policy protect food quality?"],
  ["Operations", "Rider dwell and no-fit rate", "Does the service work for riders and hardware?"],
  ["Accessibility", "Unassisted access by accommodation need", "Can people with mobility, vision, or dexterity constraints collect successfully?"],
];

const priorityMetrics = [
  ["Choice", "Priority selection lift", "Does the clearer value proposition improve adoption?"],
  ["Appeal", "Perceived feature value", "Does faster delivery plus giving back feel worth the premium?"],
  ["Emotion", "Post-delivery satisfaction", "Does the feature leave users feeling positive about their choice?"],
  ["Clarity", "Price-and-impact comprehension", "Do users understand the higher Priority price and that up to 50% of the added premium supports charity?"],
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
            A Pickup Box experience that helps people choose, track, and collect food with confidence—from checkout to compartment.
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

        <div className="decision-map">
          <div className="decision-map-heading">
            <p className="eyebrow">Uncertainty in · decision out</p>
            <h3>Turn real-world friction into an explicit response.</h3>
            <p>Prototype choices—not facts from the brief. Each response still needs validation with users, operations, and installed hardware.</p>
          </div>

          <div className="decision-paths">
            <article className="decision-path path-availability">
              <div className="path-trigger"><span>IF · 01</span><h4>Availability changes.</h4><p>Live capacity can shift after checkout.</p></div>
              <i aria-hidden="true">→</i>
              <div className="path-response"><span>DESIGN RESPONSE</span><b>Reserve after acceptance.</b></div>
              <div className="path-proof"><span>PROVE</span><b>No-fit rate</b></div>
            </article>

            <article className="decision-path path-access">
              <div className="path-trigger"><span>IF · 02</span><h4>QR access fails.</h4><p>The exact scanning direction depends on the installed hardware.</p></div>
              <i aria-hidden="true">→</i>
              <div className="path-response"><span>DESIGN RESPONSE</span><b>Keep the 4-digit code visible.</b></div>
              <div className="path-proof"><span>PROVE</span><b>Access completion</b></div>
            </article>

            <article className="decision-path path-time">
              <div className="path-trigger"><span>IF · 03</span><h4>Food has a clock.</h4><p>Collection timing matters without needing to feel alarming.</p></div>
              <i aria-hidden="true">→</i>
              <div className="path-response"><span>DESIGN RESPONSE</span><b>Show the window. Keep collection explicit.</b></div>
              <div className="path-proof"><span>PROVE</span><b>Expired + false-complete rate</b></div>
            </article>

            <article className="decision-path path-place">
              <div className="path-trigger"><span>IF · 04</span><h4>Shared spaces are noisy.</h4><p>People can lose the place between checkout and collection.</p></div>
              <i aria-hidden="true">→</i>
              <div className="path-response"><span>DESIGN RESPONSE</span><b>Repeat floor, landmark, and compartment.</b></div>
              <div className="path-proof"><span>PROVE</span><b>First-attempt identification</b></div>
            </article>
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
          <div className="wire wire-choose">
            <div className="wire-appbar"><i>×</i><b>Edit delivery instructions</b></div>
            <div className="wire-address"><span>Address:</span><b>Hospital Bangna</b></div>
            <h4>Delivery instructions</h4>
            <div className="wire-instruction-row"><b className="selected"><i>▦</i><small>Pickup Box</small></b><b><i>⌖</i><small>Given spot</small></b><b><i>⌄</i><small>Hand to me</small></b></div>
            <p className="wire-caption">Rider will place your order in a secure Pickup Box.</p>
            <h4>Pickup Box location</h4>
            <div className="wire-location-list"><b>Hospital Bangna, Floor 1<small>Near entrance 2</small><em>Available</em></b><b>Hospital Bangna, Floor 1<small>Information zone</small><em>Limited</em></b><b className="disabled">Hospital Bangna, Floor 2<small>Information zone</small><em>Full</em></b></div>
            <div className="wire-button">Confirm</div><p className="wire-step-label">1. Choose a Pickup Box</p>
          </div>
          <div className="wire wire-confirm">
            <div className="wire-appbar"><i>←</i><b>Tropical Summer Bowl</b></div>
            <div className="wire-order-tabs"><b>Delivery</b><span>Pickup</span></div>
            <h4>Delivery Info</h4>
            <div className="wire-info-row"><i>⌖</i><b>Dcondo Ladkrabang</b></div>
            <div className="wire-info-row"><i>▦</i><b>Place in a Pickup Box<small>Hospital Bangna, Floor 1 · Near entrance 2</small></b></div>
            <h4>Delivery options</h4>
            <div className="wire-speed-list"><span>Priority · &lt; 48 min <b>฿125</b></span><span className="selected">Normal · 65 min <b>฿109</b></span><span>Low-cost · &gt; 74 min <b>฿107</b></span></div>
            <div className="wire-button">Order now · ฿160</div><p className="wire-step-label">2. Confirm before ordering</p>
          </div>
          <div className="wire wire-track">
            <div className="wire-track-map"><span>DESTINATION<br /><b>Hospital Bangna</b></span><i className="wire-route" /><i className="wire-rider-dot" /></div>
            <div className="wire-track-card"><small>Low-cost delivery</small><b>Heading your way</b><p>Arrives around <strong>5 min</strong></p><div className="wire-progress"><i className="done" /><i className="done" /><i className="active" /><i /></div></div>
            <div className="wire-track-details"><b>Rider + contact</b><span>Tropical Summer Bowl</span><span>Hospital Bangna · LINE MAN Pickup Box<small>Floor 1 · Near entrance 2</small></span></div>
            <p className="wire-step-label">3. Track the handoff</p>
          </div>
          <div className="wire wire-ready">
            <h4 className="wire-state-title">Your food has arrived</h4><b className="wire-state-subtitle">Pick it up from the pickup box</b>
            <div className="wire-progress state-progress"><i className="done" /><i /><i /></div>
            <div className="wire-ready-panel"><b>Scan QR or enter code</b><div className="wire-code-cells"><i>7</i><i>2</i><i>4</i><i>8</i></div><div className="wire-qr">▦</div><small>How to use a pickup box</small><p><b>Pickup Box Location</b>Hospital Bangna, Floor 1 · Near entrance 2</p><p><b>Remaining Time</b>Please collect within 30 minutes</p></div>
            <p className="wire-step-label">4. Unlock with QR or code</p>
          </div>
          <div className="wire wire-open">
            <h4 className="wire-state-title">Look for the box lit in green.</h4><b className="wire-state-subtitle">Open it and collect your food</b>
            <div className="wire-progress state-progress"><i className="done" /><i className="active" /><i /></div>
            <div className="wire-compartment-panel"><b>Compartment Unit <strong>07</strong></b><div className="wire-compartment-grid"><i>01</i><i>05</i><i>02</i><i>06</i><i>03</i><i className="active">07</i><i>04</i><i>08</i><i className="empty" /><i>09</i></div><small>How to use a pickup box</small></div>
            <div className="wire-button">Order collected</div><p className="wire-step-label">5. Collect + confirm</p>
          </div>
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
            <h3>Introduce the box where delivery choices already live.</h3>
            <p>A first-use explainer appears only while the service is new, then gets out of the way.</p>
            <ul className="check-list"><li>Checkout structure stays familiar</li><li>Three steps explain the service</li><li>“New” signals discovery</li></ul>
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
            <h3>A locker is presented like a place—not a shipping setting.</h3>
            <p>Availability answers “Can I use it?” A photo, floor, and landmark answer “Will I find it?”</p>
            <div className="callout"><b>Design decision</b><p>Show status before ordering. Reserve suitable capacity after the restaurant accepts.</p></div>
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

        <div className="confirmation-evidence">
          <div>
            <p className="eyebrow">Commitment check</p>
            <h3>The selected Pickup Box stays visible before the order is placed.</h3>
            <p>Delivery Info repeats the exact location, so users can verify the handoff before paying.</p>
          </div>
          <ProductScreen compact label="CHECKOUT CONFIRMATION" src="/case-01/checkout-confirmed.png" alt="LINE MAN checkout showing the selected Hospital Bangna Pickup Box inside Delivery Info before the order is placed" width={852} height={1934} />
        </div>

        <div className="phone-stage real-ui-stage stage-black">
          <div className="stage-copy">
            <span className="stage-number">03</span>
            <p className="eyebrow">Track the handoff</p>
            <h3>The timeline changes language when the rider reaches the locker.</h3>
            <p>The familiar map and rider card stay intact. Only the language changes to name the box handoff and the moment collection can begin.</p>
            <ul className="check-list"><li>Pickup Box stays visible as the destination</li><li>Rider arrival gets its own state</li><li>The ready alert has one action</li></ul>
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
            <h3>Two access methods. One obvious fallback.</h3>
            <p>The QR is primary, the 4-digit code is always visible, and the next screen points to one compartment.</p>
            <ul className="check-list"><li>Time and place stay visible</li><li>Compartment 07 is lit in green</li><li>Manual confirmation has a three-minute safety net</li></ul>
            <small className="stage-footnote">Prototype shown: compartments 01–09. Production must mirror the installed locker configuration.</small>
          </div>
          <div className="product-screen-group two-up">
            <ProductScreen label="READY TO COLLECT" src="/case-01/ready-to-collect.png" alt="LINE MAN ready-to-collect screen with QR code, pickup code, location, and remaining time" />
            <ProductScreen label="COMPARTMENT 07" src="/case-01/compartment-07.png" alt="Prototype LINE MAN collection map showing compartments 01–09 with Pickup Box compartment 07 highlighted" correction="compartment" />
          </div>
        </div>

        <div className="recovery-section">
          <div className="section-heading compact">
            <p className="eyebrow">Recovery is part of the core flow</p>
            <h2>When the happy path breaks, keep the order safe.</h2>
            <p>Explain what happened, preserve the order, and recommend one next step.</p>
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
            <span>Scope<br /><b>Priority selection</b></span>
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
          <article className="challenge-card orange"><span className="card-index">A</span><h3>Beyond speed</h3><p>Priority competes on arrival time alone. Raising its price needs an additional benefit that makes the higher premium feel worthwhile.</p><div className="scribble">functional + emotional value</div></article>
          <article className="challenge-card acid"><span className="card-index">B</span><h3>A positive payoff</h3><p>Users knowingly pay more for the fastest delivery, while part of that added premium supports something beyond the order.</p><div className="scribble">pay more → move faster → give back</div></article>
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

        <aside className="price-increase-story" aria-labelledby="price-increase-title">
          <p className="eyebrow">The business move</p>
          <div>
            <h3 id="price-increase-title">A new benefit requires<br />a higher Priority price.</h3>
            <p>Priority with Purpose would cost more than Priority today. The uplift is shown clearly before selection, and up to 50% of that added amount supports charity.</p>
          </div>
          <div className="price-increase-formula" aria-label="Current Priority price plus purpose uplift equals the new Priority with Purpose price">
            <span><small>01</small>Priority today</span><i>+</i><span><small>02</small>Purpose uplift</span><i>=</i><strong>Priority<br />with Purpose</strong>
          </div>
        </aside>

        <div className="priority-layout">
          <div className="priority-product-screen">
            <ProductScreen label="REAL UI · PRIORITY SELECTION" src="/case-02/priority-order.png" alt="Food delivery checkout showing Priority gives back, the faster delivery window, up to 50% charity contribution, selected causes, and visible Normal and Low-cost alternatives" width={1206} height={2622} />
          </div>

          <div className="ethics-panel">
            <div className="ethics-title"><span>WHY USERS MAY CHOOSE IT</span><h3>Fast feels good.</h3></div>
            <article><span>01</span><div><h4>Immediate functional value</h4><p>The fastest delivery window gives users a clear, practical reason to upgrade.</p></div></article>
            <article><span>02</span><div><h4>A positive emotional benefit</h4><p>The added purpose gives users another reason to feel good about paying the higher Priority price.</p></div></article>
            <article><span>03</span><div><h4>A reason for the increase</h4><p>“Up to 50% of the extra you pay goes to charity” connects the price uplift directly to a memorable benefit.</p></div></article>
            <article><span>04</span><div><h4>The trade-off stays visible</h4><p>The higher price, contribution, Normal, and Low-cost options remain clear before the user confirms.</p></div></article>
          </div>
        </div>

        <div className="impact-flow">
          <div className="impact-copy"><p className="eyebrow">The feature experience</p><h3>Choose. Receive.<br />Feel good.</h3><p>Choose Priority for faster delivery. After the order arrives, a simple impact receipt shows what the upgrade helped support.</p></div>
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

        {isPriority ? <>
        <div className="test-plan">
          <>
            <article><span>BEFORE BUILD</span><h3>Price-value test</h3><p>Ask whether the added purpose makes a higher Priority price feel worthwhile and whether users understand what the increase funds.</p><b>Signal: users recall the price and both benefits</b></article>
            <article><span>PILOT</span><h3>Choice experiment</h3><p>Compare today&apos;s Priority price with the higher Priority with Purpose price while keeping timing, placement, and the other delivery options consistent.</p><b>Signal: willingness to pay survives the uplift</b></article>
            <article><span>AFTER DELIVERY</span><h3>Feel-good check</h3><p>Measure whether faster arrival plus contribution confirmation justifies the higher price after the experience is complete.</p><b>Signal: stronger perceived value after delivery</b></article>
          </>
        </div>
        <div className="metrics-table">
          <div className="metric-row table-head"><span>Lens</span><span>Metric</span><span>Question answered</span></div>
          {metrics.map(([lens, metric, question]) => <div className="metric-row" key={lens}><span>{lens}</span><b>{metric}</b><p>{question}</p></div>)}
        </div>
        </> : <>
        <div className="evidence-rule">
          <span>Confidence grows through evidence</span>
          <p>Test comprehension first, prove service reliability next, then monitor where performance drifts.</p>
        </div>

        <div className="validation-roadmap" aria-label="Pickup Box validation from prototype to scale">
          <article className="roadmap-prototype">
            <span className="roadmap-index">01</span>
            <div className="roadmap-copy">
              <div className="roadmap-kicker"><small>PROTOTYPE</small><em>Find it</em></div>
              <h3>Can people complete the handoff?</h3>
              <p>Test the complete lobby journey—selection, wayfinding, QR failure, code fallback, and compartment identification. Add focused sessions for mobility, vision, and dexterity constraints.</p>
              <b>Gate · zero unresolved critical failures</b>
            </div>
            <div className="roadmap-stat"><strong>6–8</strong><span>PARTICIPANTS</span></div>
          </article>

          <article className="roadmap-pilot">
            <span className="roadmap-index">02</span>
            <div className="roadmap-copy">
              <div className="roadmap-kicker"><small>CONTROLLED PILOT</small><em>Open it</em></div>
              <h3>Does the service hold up?</h3>
              <p>Track first-attempt access, scan-to-open time, expired pickups, code fallback, support use, and rider no-fit events.</p>
              <b>Output · baseline first, then an operations-agreed launch threshold</b>
            </div>
            <div className="roadmap-stat"><strong>2–3</strong><span>LOCATIONS</span></div>
          </article>

          <article className="roadmap-scale">
            <span className="roadmap-index">03</span>
            <div className="roadmap-copy">
              <div className="roadmap-kicker"><small>AT SCALE</small><em>Recover</em></div>
              <h3>Where does performance drift?</h3>
              <p>Compare locker models and buildings while watching food quality, support contacts, fallback, accessibility, and rider dwell.</p>
              <b>Gate · no guardrail regression</b>
            </div>
            <div className="roadmap-stat"><strong>EVERY</strong><span>LOCATION</span></div>
          </article>
        </div>

        <details className="measurement-details">
          <summary><span>Full measurement framework</span><b>7 metrics · 8 service events</b><i>Open detail +</i></summary>
          <div className="metrics-table">
            <div className="metric-row table-head"><span>Lens</span><span>Metric</span><span>Question answered</span></div>
            {metrics.map(([lens, metric, question]) => <div className="metric-row" key={lens}><span>{lens}</span><b>{metric}</b><p>{question}</p></div>)}
          </div>

          <div className="instrumentation-map">
          <div><p className="eyebrow">Measurement contract</p><h3>Measure the handoff, not just the rating.</h3></div>
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
          </div>
        </details>
        </>}

        {!isPriority && <div className="feedback-evidence">
          <div className="feedback-copy">
            <p className="eyebrow">Ongoing signal</p>
            <h3>Rate the box separately from the rider.</h3>
            <p>A separate prompt turns broad satisfaction into signals about convenience, placement, peace of mind, and ease of pickup.</p>
          </div>
          <div className="product-screen-group two-up">
            <ProductScreen label="SERVICE-SPECIFIC PROMPT" src="/case-01/pickup-feedback.png" alt="LINE MAN completed-order page asking users to rate the Pickup Box separately" correction="feedback" />
            <ProductScreen label="ACTIONABLE SIGNALS" src="/case-01/pickup-feedback-selected.png" alt="LINE MAN Pickup Box feedback screen with five stars and service-specific tags" correction="feedback" />
          </div>
        </div>}

        <div className="closing-card">
          <p className="eyebrow">{isPriority ? "The principle I would protect" : "What I would explore next"}</p>
          <h3>{isPriority ? "Make Priority worth choosing: faster for the user, positive beyond the order." : "Validate the reservation window, accessibility at the physical locker, multi-order pickup, and rider recovery when no compartment fits."}</h3>
          <a href="#overview">Back to the top ↑</a>
        </div>
      </section>

      <a className="next-case" href={isPriority ? "/work/delivering-certainty" : "/work/priority-with-purpose"}>
          <span>{isPriority ? "THE OTHER RESPONSE" : "NEXT CASE STUDY"}</span><b>{isPriority ? "Delivering Certainty" : "Priority with Purpose"} →</b>
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
        <HomeGreeting />
        <div className="footer-note"><small>Made with care</small><b>by Sivakorn S.</b></div>
        <FooterPixelScene />
        <nav aria-label="Footer links">
          <SayHelloLink />
          <a href="#top">Back to top ↑</a>
        </nav>
      </footer>
    </main>
  );
}
