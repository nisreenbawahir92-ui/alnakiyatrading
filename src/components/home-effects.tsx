"use client";

import { useEffect } from "react";

export function HomeEffects() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      ".home-page > section:not(:first-of-type)",
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    sections.forEach((section) => section.classList.add("reveal-pending"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
