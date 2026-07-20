"use client";

import { useEffect, useRef } from "react";

/**
 * Page-level micro-interactions, mounted once:
 *  - a thin scroll-progress bar pinned to the very top of the viewport
 *  - scroll-reveal: adds `js-ready` to <html> (enabling the reveal CSS) and
 *    reveals `.reveal` / `.reveal-stagger` elements as they scroll into view.
 *
 * Everything is progressive enhancement — if JS never runs, `js-ready` is
 * absent and all content stays fully visible.
 */
export function PageEffects() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const progressBar = progressBarRef.current;

    // Scroll progress
    let frame = 0;
    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const scrollable = root.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        const clampedProgress = Math.max(0, Math.min(1, progress));
        progressBar?.style.setProperty(
          "transform",
          `scaleX(${clampedProgress})`,
        );
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Scroll reveal
    root.classList.add("js-ready");
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger"),
    );

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
      );
      targets.forEach((el) => observer!.observe(el));
    } else {
      targets.forEach((el) => el.classList.add("is-visible"));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-transparent"
    >
      <div
        ref={progressBarRef}
        className="h-full origin-left bg-[linear-gradient(90deg,#ef2f37,#f4c35f)] transition-transform duration-150 ease-out motion-reduce:transition-none"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
