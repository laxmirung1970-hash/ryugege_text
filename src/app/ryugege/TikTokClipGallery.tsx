"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

export type TikTokClip = {
  title: string;
  platform: string;
  href: string;
  thumbnail: StaticImageData;
  embedUrl?: string;
};

function getPlayerUrl(clip: TikTokClip) {
  if (clip.embedUrl) return clip.embedUrl;

  const videoId = clip.href.match(/\/video\/(\d+)/)?.[1];
  return videoId
    ? `https://www.tiktok.com/player/v1/${videoId}?controls=1&description=0&music_info=0`
    : clip.href;
}

export function TikTokClipGallery({ clips }: { clips: TikTokClip[] }) {
  const [activeClip, setActiveClip] = useState<string | null>(null);

  return (
    <div className="reveal-stagger no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0">
      {clips.map((clip) => {
        const isPlaying = activeClip === clip.href;

        return (
          <article
            key={clip.href}
            className="w-[78vw] max-w-[300px] shrink-0 snap-start sm:w-[280px] lg:w-auto lg:max-w-none"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-[#151515] shadow-[var(--shadow-soft)]">
              {isPlaying ? (
                <>
                  <iframe
                    src={getPlayerUrl(clip)}
                    title={clip.title}
                    className="absolute inset-0 size-full"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <a
                    href={clip.href}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute right-3 top-3 z-10 rounded-full bg-black/65 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur transition hover:bg-black/85"
                  >
                    เปิดใน TikTok ↗
                  </a>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveClip(clip.href)}
                  aria-label={`เล่นคลิป: ${clip.title}`}
                  className="group relative size-full text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-tour-red/60"
                >
                  <Image
                    src={clip.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 280px, 260px"
                    placeholder="blur"
                    className="object-cover opacity-85 transition duration-700 group-hover:scale-105 group-focus-visible:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.02)_0%,rgba(20,6,7,0.08)_44%,rgba(20,6,7,0.94)_100%)]" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/92 px-2.5 py-1 text-xs font-black text-maroon">
                    9:16
                  </span>
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid size-16 place-items-center rounded-full border border-white/80 bg-white/20 text-xl text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur transition duration-300 group-hover:scale-110 group-focus-visible:scale-110">
                      ▶
                    </span>
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="block text-xs font-bold uppercase tracking-[0.16em] text-gold-light">
                      {clip.platform}
                    </span>
                    <span className="font-heading mt-1.5 block text-lg font-bold leading-tight">
                      {clip.title}
                    </span>
                    <span className="mt-2 block text-xs font-semibold text-white/78">
                      กดเพื่อเล่นในหน้านี้
                    </span>
                  </span>
                </button>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
