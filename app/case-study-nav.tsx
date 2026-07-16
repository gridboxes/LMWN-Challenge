"use client";

/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";

const links = [
  ["01", "Overview", "#overview"],
  ["02", "Approach", "#approach"],
  ["03", "Solution", "#solution"],
  ["04", "Measure", "#evaluation"],
];

export function CaseStudyNav() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setIsCompact(window.scrollY > 24);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      className={`floating-nav${isCompact ? " is-compact" : ""}`}
      aria-label="Case study navigation"
    >
      <a className="nav-home" href="/"><span>←</span>Home</a>
      {links.map(([number, label, href]) => (
        <a href={href} key={href}><span>{number}</span>{label}</a>
      ))}
    </nav>
  );
}
