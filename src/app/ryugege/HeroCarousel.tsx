"use client";

import Image, { type StaticImageData } from "next/image";
import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";

export type HeroSlide = {
  desktopImage: StaticImageData;
  tabletImage: StaticImageData;
  mobileImage: StaticImageData;
  kicker: string;
  title: string;
  caption: string;
};

/**
 * Full-bleed hero background carousel. Renders crossfading images behind
 * `children` (the hero copy, server-rendered) plus a subtle scrim, a rotating
 * slide label, and dot controls. Pure client-side so it works with
 * `output: "export"`. Auto-advance pauses on hover/focus and is disabled under
 * prefers-reduced-motion.
 */
export function HeroCarousel({
  slides,
  children,
  intervalMs = 5500,
}: {
  slides: HeroSlide[];
  children: ReactNode;
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [primaryLoaded, setPrimaryLoaded] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(
    () => new Set([0]),
  );
  const count = slides.length;

  const ensureLoaded = useCallback((index: number) => {
    setLoadedSlides((current) => {
      if (current.has(index)) return current;
      const next = new Set(current);
      next.add(index);
      return next;
    });
  }, []);

  const go = useCallback(
    (next: number) => {
      const normalized = (next + count) % count;
      ensureLoaded(normalized);
      setActive(normalized);
    },
    [count, ensureLoaded],
  );

  const reducedMotion = useRef(false);
  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  // Load the remaining backgrounds only after the LCP image is ready. A
  // fallback handles browsers that finish the cached image before hydration.
  useEffect(() => {
    const fallback = window.setTimeout(() => setPrimaryLoaded(true), 5000);
    return () => window.clearTimeout(fallback);
  }, []);

  useEffect(() => {
    if (!primaryLoaded || count <= 1) return;

    const timers = Array.from({ length: count - 1 }, (_, offset) =>
      window.setTimeout(
        () => ensureLoaded(offset + 1),
        600 + offset * 900,
      ),
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [count, ensureLoaded, primaryLoaded]);

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
      className="relative isolate overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Backgrounds */}
      {slides.map((slide, index) => {
        if (!loadedSlides.has(index)) return null;

        return (
          <div
            key={slide.title}
            aria-hidden
            className={`absolute inset-0 -z-10 transition-opacity duration-1000 ease-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={slide.mobileImage.src}
                type="image/webp"
              />
              <source
                media="(max-width: 1535px)"
                srcSet={slide.tabletImage.src}
                type="image/webp"
              />
              <Image
                src={slide.desktopImage}
                alt=""
                fill
                sizes="100vw"
                {...(index === 0
                  ? {
                      loading: "eager" as const,
                      fetchPriority: "high" as const,
                    }
                  : { loading: "lazy" as const })}
                placeholder="blur"
                onLoad={index === 0 ? () => setPrimaryLoaded(true) : undefined}
                className={`object-cover object-center ${
                  index === active ? "animate-kenburns" : ""
                }`}
              />
            </picture>
          </div>
        );
      })}

      {/* Scrim: dark on the left for text legibility + warm glow top-right */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(20,6,7,0.94)_0%,rgba(27,17,14,0.82)_40%,rgba(27,17,14,0.45)_72%,rgba(27,17,14,0.35)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(244,195,95,0.22),transparent_42%)]" />

      {/* Overlay content */}
      {children}

      {/* Rotating slide label + dots */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-4 px-4 pb-6 sm:px-6 lg:px-8 lg:pb-8">
          <div key={active} className="animate-fade-in hidden sm:block">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              {slides[active].kicker}
            </p>
            <p className="mt-1 font-heading text-lg font-bold text-white/90">
              {slides[active].title}
            </p>
          </div>
          {count > 1 ? (
            <div className="pointer-events-auto flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => go(index)}
                  aria-label={`ไปสไลด์ที่ ${index + 1}`}
                  aria-current={index === active}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === active
                      ? "w-8 bg-gold"
                      : "w-3 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
