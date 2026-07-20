/* eslint-disable @next/next/no-html-link-for-pages */

import Image from "next/image";
import { FooterPixelScene } from "./pixel-art";
import { CaseStudyNav } from "./case-study-nav";
import { HomeGreeting } from "./home-greeting";
import { SayHelloLink } from "./say-hello-link";
import { ViewPortfolioLink } from "./view-portfolio-link";

const flowSteps = [
  ["01", "Choose", "Compare Pickup Box locations by availability, floor, and landmark."],
  ["02", "Confirm", "Review the selected Pickup Box inside Delivery Info before ordering."],
  ["03", "Track", "Follow the familiar map, ETA, and rider handoff to the box."],
  ["04", "Unlock", "Use QR access or enter the 4-digit fallback code at the locker."],
  ["05", "Collect", "Find the highlighted compartment and confirm collection."],
];

const lockerMetrics = [
  ["Adoption", "Locker selection rate", "Do people choose the option?"],
  ["Clarity", "First-use flow comprehension rate", "Can people explain how selection, tracking, and collection work before ordering?"],
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

function JourneyStateIcon({ step }: { step: string }) {
  if (step === "01") {
    return <svg viewBox="0 0 24 24"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>;
  }

  if (step === "02") {
    return <svg viewBox="0 0 24 24"><path d="m6 12 4 4 8-9" /></svg>;
  }

  if (step === "03") {
    return <svg viewBox="0 0 24 24"><circle cx="5" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 6h5a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-1a3 3 0 0 0-3 3 3 3 0 0 0 3 3h6" /></svg>;
  }

  if (step === "04") {
    return <svg className="flow-qr" viewBox="0 0 24 24"><path fillRule="evenodd" d="M3 3h8v8H3V3Zm2 2v4h4V5H5Zm8-2h8v8h-8V3Zm2 2v4h4V5h-4ZM3 13h8v8H3v-8Zm2 2v4h4v-4H5Z" clipRule="evenodd" /><path d="M14 14h3v3h-3v-3Zm4 0h3v7h-3v-2h-3v2h-2v-3h5v-4Z" /></svg>;
  }

  return <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="1" /><path d="m8 12 3 3 5-6" /></svg>;
}

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
  correction?: "compartment";
}) {
  return (
    <figure className={`product-screen ${compact ? "compact" : ""}`}>
      <figcaption>{label}</figcaption>
      <div className="product-screen-frame">
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 760px) 72vw, 360px" unoptimized />
        {correction === "compartment" && <span className="screen-copy-fix fix-compartment">Compartment 07</span>}
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
            <span>Scope<br /><b>Checkout → collection</b></span>
            <span>Context<br /><b>Design challenge</b></span>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract delivery locker illustration">
          <div className="route route-a" />
          <div className="route route-b" />
          <div className="route-dot dot-a" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>
          </div>
          <div className="route-dot dot-b" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
              <path d="M6 6h1v1H6zM17 6h1v1h-1zM6 17h1v1H6zM14 14h3v3h-3zM19 14h2v2M18 19h3v2M14 20h1" />
            </svg>
          </div>
          <div className="route-dot dot-c" aria-hidden="true">
            <svg viewBox="0 0 24 24"><circle cx="5" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 6h5a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-1a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h6" /></svg>
          </div>
          <div className="locker">
            <div className="locker-head"><span className="locker-lineman" aria-hidden="true"><i /></span><b>PICK-UP</b></div>
            {Array.from({ length: 8 }, (_, i) => <div className="locker-cell" key={i}><span>{i + 1}</span></div>)}
            <div className="locker-console"><span>SCAN</span><i /></div>
          </div>
          <p className="art-note">
            <span>Good delivery ends<br />with a clear handoff</span>
            <svg className="art-note-arrow" viewBox="0 0 72 58" aria-hidden="true">
              <path d="M4 11C18 0 38 2 38 15c0 12-17 16-21 7-3-7 8-13 18-8 12 6 17 21 17 36" />
              <path d="m44 43 8 9 8-9" />
            </svg>
          </p>
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
              <div className="path-proof"><span>MEASURE</span><b>Suitable compartment assigned</b></div>
            </article>

            <article className="decision-path path-access">
              <div className="path-trigger"><span>IF · 02</span><h4>QR needs a fallback.</h4><p>Camera issues, damaged screens, or unfamiliar hardware can interrupt access.</p></div>
              <i aria-hidden="true">→</i>
              <div className="path-response"><span>DESIGN RESPONSE</span><b>Keep the 4-digit code visible.</b></div>
              <div className="path-proof"><span>MEASURE</span><b>Successful locker access</b></div>
            </article>

            <article className="decision-path path-time">
              <div className="path-trigger"><span>IF · 03</span><h4>Food has a clock.</h4><p>Collection timing matters without needing to feel alarming.</p></div>
              <i aria-hidden="true">→</i>
              <div className="path-response"><span>DESIGN RESPONSE</span><b>Show the window. Keep collection explicit.</b></div>
              <div className="path-proof"><span>MEASURE</span><b>Collected within the pickup window</b></div>
            </article>

            <article className="decision-path path-place">
              <div className="path-trigger"><span>IF · 04</span><h4>Shared spaces are noisy.</h4><p>People can lose the place between checkout and collection.</p></div>
              <i aria-hidden="true">→</i>
              <div className="path-response"><span>DESIGN RESPONSE</span><b>Repeat floor, landmark, and compartment.</b></div>
              <div className="path-proof"><span>MEASURE</span><b>Correct locker found on the first try</b></div>
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
              <span>{num}</span><div className="flow-icon" aria-hidden="true"><JourneyStateIcon step={num} /></div>
              <h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>

        <div className="wireframe-board" aria-label="End-to-end Pickup Box wireframes">
          <div className="board-title"><span>EARLY WIREFRAMES</span><b>5 core states</b></div>
          <div className="wire wire-lofi wire-choose">
            <div className="lofi-screen-head"><span>←</span><b>Delivery setup</b></div>
            <p className="lofi-kicker">DELIVERY METHOD</p>
            <div className="lofi-choice-row"><span>Door</span><span className="active">Pickup Box</span></div>
            <p className="lofi-kicker">CHOOSE A LOCATION</p>
            <div className="lofi-option-list"><span><i />Locker option</span><span className="active"><i />Locker option</span><span><i />Locker option</span></div>
            <p className="lofi-note">availability + landmark</p>
            <div className="wire-button">Confirm choice</div>
          </div>
          <div className="wire wire-lofi wire-confirm">
            <div className="lofi-screen-head"><span>←</span><b>Review order</b></div>
            <p className="lofi-kicker">DELIVERY SUMMARY</p>
            <div className="lofi-summary"><span><b>Order</b><i /></span><span><b>Delivery</b><i /></span><span className="active"><b>Pickup Box</b><i /></span></div>
            <div className="lofi-placeholder"><i /><i /><i className="short" /></div>
            <p className="lofi-note">review before commit</p>
            <div className="wire-button">Place order</div>
          </div>
          <div className="wire wire-lofi wire-track">
            <div className="lofi-screen-head"><span>←</span><b>Track delivery</b></div>
            <div className="lofi-map"><span>RIDER</span><i /><b>BOX</b></div>
            <div className="lofi-status-card"><span>ON THE WAY</span><b>Rider → Pickup Box</b><div className="lofi-progress"><i className="done" /><i className="done" /><i className="active" /><i /></div></div>
            <p className="lofi-note">reuse familiar tracking</p>
          </div>
          <div className="wire wire-lofi wire-ready">
            <div className="lofi-screen-head"><span>←</span><b>Ready for pickup</b></div>
            <p className="lofi-kicker">TWO WAYS IN</p>
            <div className="lofi-access"><div><span className="lofi-qr-mark">QR</span><b>Scan</b></div><div><span className="lofi-code-mark">••••</span><b>Enter code</b></div></div>
            <div className="lofi-placeholder"><i /><i className="short" /></div>
            <p className="lofi-note">keep fallback visible</p>
            <div className="wire-button">Open compartment</div>
          </div>
          <div className="wire wire-lofi wire-open">
            <div className="lofi-screen-head"><span>←</span><b>Collect order</b></div>
            <p className="lofi-kicker">FIND THE LIT DOOR</p>
            <div className="lofi-locker-grid"><i /><i /><i /><i className="active">07</i><i /><i /><i /><i /></div>
            <div className="lofi-placeholder"><i /><i className="short" /></div>
            <p className="lofi-note">close the loop</p>
            <div className="wire-button">Order collected</div>
          </div>
          <div className="wire-stage-row" aria-label="Wireframe stages">
            <p><b>01</b><span>Choose</span></p>
            <p><b>02</b><span>Confirm</span></p>
            <p><b>03</b><span>Track</span></p>
            <p><b>04</b><span>Unlock</span></p>
            <p><b>05</b><span>Collect</span></p>
          </div>
          <div className="wire-arrow arrow-1">→</div><div className="wire-arrow arrow-2">→</div>
          <div className="wire-arrow arrow-3">→</div><div className="wire-arrow arrow-4">→</div>
        </div>
      </section>

      <section className="solution section-pad" id="solution">
        <div className="section-heading">
          <p className="eyebrow">03 · The locker experience</p>
          <h2>One clear next step.<br />At every handoff.</h2>
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
            <h3>A locker is presented like a place — not a shipping setting.</h3>
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
          <ProductScreen compact label="CHECKOUT CONFIRMATION" src="/case-01/checkout-confirmed-clean.png" alt="LINE MAN checkout showing the selected Hospital Bangna Pickup Box inside Delivery Info before the order is placed" width={804} height={1750} />
        </div>

        <div className="phone-stage real-ui-stage stage-black">
          <div className="stage-copy">
            <span className="stage-number">03</span>
            <p className="eyebrow">Track the handoff</p>
            <h3>The timeline changes language when the rider reaches the locker.</h3>
            <p>The familiar map and rider card stay intact. Only the language changes to name the box handoff and the moment collection can begin.</p>
            <ul className="check-list"><li>Pickup Box stays visible as the destination</li><li>Rider arrival gets its own state</li><li>The ready alert has one action</li></ul>
          </div>
          <div className="handoff-visual">
            <div className="handoff-notification" aria-label="Pickup Box ready notification">
              <span className="push-mark" aria-hidden="true"><Image src="/l-mark.svg" alt="" width={36} height={36} /></span><div><small><span>LINE MAN</span><time>now</time></small><b>Ready at your Pickup Box</b><p>Hospital Bangna · Floor 1</p></div>
            </div>
            <div className="product-screen-group two-up">
              <ProductScreen label="EN ROUTE CONTEXT" src="/case-01/rider-en-route.png" alt="LINE MAN tracking screen showing the rider heading to the Hospital Bangna Pickup Box" />
              <ProductScreen label="RIDER AT THE BOX" src="/case-01/rider-at-locker.png" alt="LINE MAN tracking screen showing the rider placing the order in the Pickup Box" />
            </div>
          </div>
        </div>

        <div className="phone-stage real-ui-stage stage-blue reverse">
          <div className="stage-copy">
            <span className="stage-number">04</span>
            <p className="eyebrow">Retrieve without guessing</p>
            <h3>Two access methods. One obvious fallback.</h3>
            <p>The QR is primary, the 4-digit code is always visible, and the next screen points to one compartment.</p>
            <ul className="check-list"><li>Time and place stay visible</li><li>Compartment 07 is lit in green</li><li>Collection auto-confirms after three minutes</li></ul>
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
            <article><span>CAPACITY CHANGED</span><i>!</i><h3>This Pickup Box is full</h3><p>Your order is still with the rider. Choose the nearby Floor 1 box or switch to an attended handoff.</p><b>Recommended: nearby box · 2 min walk</b><div className="recovery-action">Choose fallback</div></article>
            <article><span>SCAN FAILED</span><i className="recovery-qr-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path fillRule="evenodd" d="M3 3h8v8H3V3Zm2 2v4h4V5H5Zm8-2h8v8h-8V3Zm2 2v4h4V5h-4ZM3 13h8v8H3v-8Zm2 2v4h4v-4H5Z" clipRule="evenodd" /><path d="M14 14h3v3h-3v-3Zm4 0h3v7h-3v-2h-3v2h-2v-3h5v-4Z" /></svg></i><h3>QR not recognised</h3><p>Increase screen brightness, hold the QR under the locker scanner, or enter the code shown in the app.</p><b>Fallback code · 7 2 4 8</b><div className="recovery-action">Show access options</div></article>
            <article><span>DOOR ERROR</span><i>×</i><h3>Compartment did not open</h3><p>The order stays active. Retry once, then connect to Pickup Box support with the locker and order details attached.</p><b>Order remains protected</b><div className="recovery-action">Get help</div></article>
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
            <span>Context<br /><b>Design challenge</b></span>
          </div>
        </div>
        <div className="priority-hero-art" aria-label="Delivery speed comparison illustration">
          <span className="speed-sticker">FAST<br />FEELS<br />GOOD</span>
          <div className="speed-line speed-line-fast"><b>PRIORITY GIVES BACK</b><strong>15–20 min</strong><i /></div>
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
            <ProductScreen label="PRIORITY SELECTION" src="/case-02/priority-order.png" alt="Food delivery checkout showing Priority gives back, the faster delivery window, up to 50% charity contribution, selected causes, and visible Normal and Low-cost alternatives" width={1206} height={2622} />
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
          <div className="impact-copy"><p className="eyebrow">The feature experience</p><h3>Choose.<br />Receive.<br />Feel good.</h3><p>Choose Priority for faster delivery. From time to time, a simple impact receipt shows what your upgrades have helped support.</p></div>
          <div className="priority-impact-screen">
            <ProductScreen label="POST-DELIVERY IMPACT" src="/case-02/priority-impact.png" alt="Priority gives back thank-you screen showing total time saved, lives impacted, supported charities, and a share-my-impact action" width={1206} height={2622} />
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
          <summary><span>Full measurement framework</span><b>{metrics.length} service metrics</b><i>Open detail +</i></summary>
          <div className="metrics-table">
            <div className="metric-row table-head"><span>Lens</span><span>Metric</span><span>Question answered</span></div>
            {metrics.map(([lens, metric, question]) => <div className="metric-row" key={lens}><span>{lens}</span><b>{metric}</b><p>{question}</p></div>)}
          </div>

        </details>
        </>}

        {!isPriority && <div className="feedback-evidence">
          <div className="feedback-copy">
            <p className="eyebrow">Ongoing signal</p>
            <h3>Measure the handoff, not just the delivery.</h3>
            <p>A separate prompt turns broad satisfaction into signals about convenience, placement, peace of mind, and ease of pickup.</p>
          </div>
          <div className="product-screen-group two-up">
            <ProductScreen label="SERVICE-SPECIFIC PROMPT" src="/case-01/pickup-feedback.png" alt="LINE MAN completed-order page with a five-star Pickup Box rating and service-specific feedback tags" />
            <ProductScreen label="FEEDBACK CONFIRMATION" src="/case-01/pickup-feedback-selected.png" alt="LINE MAN confirmation thanking the user for their Pickup Box feedback" />
          </div>
        </div>}

        <div className="closing-card">
          <p className="eyebrow">{isPriority ? "The principle I would protect" : "What I would explore next"}</p>
          <h3>{isPriority ? "Make Priority worth choosing: faster for the user, positive beyond the order." : "Capacity prediction, multi-order pickup, physical-locker accessibility, and rider recovery when no compartment fits."}</h3>
          <a href="#overview">Back to the top ↑</a>
        </div>
      </section>

      <div className="case-exits has-figma">
        <a className="next-case" href={isPriority ? "/work/delivering-certainty" : "/work/priority-with-purpose"}>
          <span>{isPriority ? "THE OTHER RESPONSE" : "NEXT CASE STUDY"}</span><b>{isPriority ? "Delivering Certainty" : "Priority with Purpose"} →</b>
        </a>
        <a
          className="figma-case"
          href="https://www.figma.com/design/x6grHX2f2jISu0jkVTNbZc/lmwn?node-id=0-1&t=JRxmNgwj6fcl1TcI-1"
          target="_blank"
          rel="noreferrer"
          aria-label={`View the ${isPriority ? "Priority with Purpose" : "Delivering Certainty"} project in Figma (opens in a new tab)`}
        >
          <span className="figma-eyebrow">
            <span>DESIGN SOURCE</span>
            <svg className="figma-pixel-icon" aria-hidden="true" focusable="false" viewBox="0 0 14 20">
              <rect className="figma-pixel-red" x="1" y="1" width="6" height="6" />
              <rect className="figma-pixel-orange" x="7" y="1" width="6" height="6" />
              <rect className="figma-pixel-purple" x="1" y="7" width="6" height="6" />
              <rect className="figma-pixel-blue" x="7" y="7" width="6" height="6" />
              <rect className="figma-pixel-green" x="1" y="13" width="6" height="6" />
            </svg>
          </span>
          <b>
            <span className="figma-link-copy">View Figma</span>
            <svg className="external-link-icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16">
              <path d="M6 3h7v7h-2V6.4l-7.3 7.3-1.4-1.4L9.6 5H6V3Z" />
            </svg>
          </b>
        </a>
      </div>
      <footer>
        <span>{isPriority ? "PRIORITY WITH PURPOSE" : "DELIVERING CERTAINTY"}</span>
        <p>Product design challenge · 2026</p>
        <b>{isPriority ? "CASE 02" : "CASE 01"}</b>
      </footer>
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
              <span className="mini-locker-head">LM / PICK-UP</span><span /><span /><span className="active" /><span /><span /><span />
            </div><i>→</i>
          </a>
          <a className="response-tile response-priority" href="/work/priority-with-purpose" aria-label="Read Problem 2: Priority with Purpose">
            <span>02</span><div><small>Feature strategy</small><b>Priority with<br />Purpose</b></div>
            <div className="tile-preview mini-priority" aria-hidden="true">
              <span className="mini-speed fast">15–20</span><span className="mini-speed">30–40</span><span className="mini-speed">45–60</span>
              <span className="mini-give">
                <span className="mini-cause mini-cause-baby">
                  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.625 13.125C8.4025 13.125 8.18499 13.059 7.99999 12.9354C7.81498 12.8118 7.67079 12.6361 7.58564 12.4305C7.50049 12.225 7.47821 11.9988 7.52162 11.7805C7.56503 11.5623 7.67217 11.3618 7.82951 11.2045C7.98684 11.0472 8.1873 10.94 8.40553 10.8966C8.62376 10.8532 8.84996 10.8755 9.05552 10.9606C9.26109 11.0458 9.43679 11.19 9.56041 11.375C9.68402 11.56 9.75 11.7775 9.75 12C9.75 12.2984 9.63148 12.5845 9.4205 12.7955C9.20952 13.0065 8.92337 13.125 8.625 13.125ZM15.375 10.875C15.1525 10.875 14.935 10.941 14.75 11.0646C14.565 11.1882 14.4208 11.3639 14.3356 11.5695C14.2505 11.775 14.2282 12.0012 14.2716 12.2195C14.315 12.4377 14.4222 12.6382 14.5795 12.7955C14.7368 12.9528 14.9373 13.06 15.1555 13.1034C15.3738 13.1468 15.6 13.1245 15.8055 13.0394C16.0111 12.9542 16.1868 12.81 16.3104 12.625C16.434 12.44 16.5 12.2225 16.5 12C16.5 11.7016 16.3815 11.4155 16.1705 11.2045C15.9595 10.9935 15.6734 10.875 15.375 10.875ZM14.2247 15.1153C13.5567 15.5299 12.7862 15.7496 12 15.7496C11.2138 15.7496 10.4433 15.5299 9.77532 15.1153C9.60699 15.0091 9.40338 14.9742 9.20928 15.0181C9.01518 15.0621 8.84649 15.1814 8.74032 15.3497C8.63415 15.518 8.5992 15.7216 8.64315 15.9157C8.6871 16.1098 8.80636 16.2785 8.97469 16.3847C9.88233 16.9505 10.9304 17.2504 12 17.2504C13.0696 17.2504 14.1177 16.9505 15.0253 16.3847C15.1936 16.2785 15.3129 16.1098 15.3569 15.9157C15.4008 15.7216 15.3659 15.518 15.2597 15.3497C15.1535 15.1814 14.9848 15.0621 14.7907 15.0181C14.5966 14.9742 14.393 15.0091 14.2247 15.1153ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96452 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.2474 9.87623 19.4269 7.83506 17.9589 6.30036C16.4909 4.76565 14.4881 3.85533 12.3666 3.75844C11.28 5.28563 11.25 6.73875 11.25 6.75C11.25 6.94891 11.329 7.13968 11.4697 7.28033C11.6103 7.42098 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.42098 12.5303 7.28033C12.671 7.13968 12.75 6.94891 12.75 6.75C12.75 6.55109 12.829 6.36032 12.9697 6.21967C13.1103 6.07902 13.3011 6 13.5 6C13.6989 6 13.8897 6.07902 14.0303 6.21967C14.171 6.36032 14.25 6.55109 14.25 6.75C14.25 7.34674 14.013 7.91903 13.591 8.34099C13.169 8.76295 12.5967 9 12 9C11.4033 9 10.831 8.76295 10.409 8.34099C9.98706 7.91903 9.75 7.34674 9.75 6.75C9.75 6.68156 9.76219 5.40937 10.5431 3.87844C8.99846 4.15557 7.56488 4.86752 6.41061 5.93074C5.25633 6.99396 4.42926 8.36435 4.02643 9.8811C3.6236 11.3978 3.66173 12.998 4.13635 14.4939C4.61097 15.9897 5.50238 17.3191 6.70599 18.3262C7.9096 19.3332 9.37546 19.9761 10.9316 20.1793C12.4877 20.3825 14.0695 20.1377 15.4914 19.4736C16.9132 18.8095 18.1162 17.7536 18.9591 16.4298C19.8019 15.106 20.2498 13.5693 20.25 12Z" /></svg>
                </span>
                <span className="mini-cause mini-cause-paw">
                  <svg viewBox="0 0 32 32"><circle cx="26.5" cy="13.5" r="2.5" /><circle cx="5.5" cy="13.5" r="2.5" /><circle cx="11.5" cy="7.5" r="2.5" /><circle cx="20.5" cy="7.5" r="2.5" /><path d="M16 13a4.5 4.5 0 0 0-4.32 3.25 5.2 5.2 0 0 1-2.59 3.24 4 4 0 0 0 3.47 7.2 9.17 9.17 0 0 1 6.88 0 4 4 0 0 0 3.46-7.2 5.2 5.2 0 0 1-2.58-3.24A4.5 4.5 0 0 0 16 13Z" /></svg>
                </span>
                <span className="mini-cause mini-cause-aid">
                  <svg viewBox="0 0 32 32"><path d="M12 20H5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7v7a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-7Z" /></svg>
                </span>
              </span>
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
          <ViewPortfolioLink />
        </nav>
      </footer>
    </main>
  );
}
