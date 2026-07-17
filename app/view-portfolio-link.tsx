"use client";

import { useState } from "react";

export function ViewPortfolioLink() {
  const [winking, setWinking] = useState(false);

  return (
    <a
      className={winking ? "view-portfolio-link is-winking" : "view-portfolio-link"}
      href="https://gridboxes-portfolio-n.vercel.app/"
      target="_blank"
      rel="noreferrer"
      onClick={() => setWinking(true)}
      onAnimationEnd={(event) => {
        if (event.animationName === "pixel-eye-click-spark") setWinking(false);
      }}
    >
      View portfolio ↗
    </a>
  );
}
