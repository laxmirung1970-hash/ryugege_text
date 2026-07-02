"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type HeroSlide = {
  image: string;
  kicker: string;
  title: string;
  caption: string;
};

/**
 * Auto-rotating hero carousel (borrowed structure from china4trip's hero).
 * Pure client-side so it works with `output: "export"`. Pauses on hover/focus
 * and respects prefers-reduced-motion by not auto-advancing.
 */
export function HeroCarousel({
  slides,
  intervalMs = 5000,
}: {
  slides: HeroSlide[];
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (next: number) => setActive((next + count) % count),
    [count],
  );

  const reducedMotion = useRef(false);
  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (paused || count <= 1 || reducedMotion.current) return;
    const id = window.setInterval(
      () => setActive((current) => (current + 1) % count),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [paused, count, intervalMs]);

  return (
    <div
      className="relative min-h-[460px] overflow-hidden rounded-lg border border-white/15 bg-[#1a0909] shadow-[0_30px_90px_rgba(54,0,4,0.34)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== active}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,0,3,0.92),rgba(176,22,29,0.62),rgba(8,11,18,0.7))]" />
          <div className="relative flex min-h-[460px] flex-col justify-between p-6 text-white sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-md">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                  {slide.kicker}
                </p>
                <h2 className="font-heading mt-3 text-3xl font-black leading-tight text-gold-light sm:text-4xl">
                  {slide.title}
                </h2>
              </div>
              <div className="hidden rounded-md border border-gold/40 bg-black/28 px-4 py-3 text-right backdrop-blur sm:block">
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  Founder-led
                </span>
                <span className="mt-1 block text-lg font-black">
                  RyuGeGe Tour
                </span>
              </div>
            </div>
            <p className="max-w-lg text-sm font-semibold leading-6 text-white/85">
              {slide.caption}
            </p>
          </div>
        </div>
      ))}

      {/* Prev / next */}
      {count > 1 ? (
        <>
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="สไลด์ก่อนหน้า"
            className="absolute left-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-black/50"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="สไลด์ถัดไป"
            className="absolute right-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition hover:bg-black/50"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`ไปสไลด์ที่ ${index + 1}`}
                aria-current={index === active}
                className={`h-2 rounded-full transition-all ${
                  index === active
                    ? "w-6 bg-gold"
                    : "w-2 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
