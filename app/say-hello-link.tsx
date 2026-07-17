"use client";

import { useState } from "react";

export function SayHelloLink() {
  const [bursting, setBursting] = useState(false);

  return (
    <a
      className={bursting ? "say-hello-link is-burst" : "say-hello-link"}
      href="mailto:sivakorn.contact@gmail.com"
      onClick={() => setBursting(true)}
      onAnimationEnd={(event) => {
        if (event.animationName === "pixel-hi-spark") setBursting(false);
      }}
    >
      Say hello ↗
    </a>
  );
}
