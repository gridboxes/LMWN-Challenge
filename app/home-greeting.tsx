"use client";

import { useEffect, useState } from "react";

const GREETING_KEY = "delivery-experience-greeted";

export function HomeGreeting() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(GREETING_KEY)) return;
      sessionStorage.setItem(GREETING_KEY, "true");
    } catch {
      // If session storage is unavailable, still allow the greeting.
    }

    setVisible(true);
    const timeout = window.setTimeout(() => setVisible(false), 2300);
    return () => window.clearTimeout(timeout);
  }, []);

  return visible ? <span className="footer-load-wave" aria-hidden="true">👋</span> : null;
}
