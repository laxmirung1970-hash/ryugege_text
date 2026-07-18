import Image from "next/image";
import { Icon } from "../icons";
import type { TripHighlight } from "./highlight-data";

type XianHighlightExplorerProps = {
  highlights: TripHighlight[];
};

export function XianHighlightExplorer({ highlights }: XianHighlightExplorerProps) {
  return (
    <>
      <style>{`
        .xian-highlight-detail { display: none !important; }
        .xian-highlight-detail:target { display: flex !important; }
      `}</style>
      <div id="xian-highlight-grid" className="mt-11 grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
        {highlights.map((highlight) => {
          const detailId = `xian-highlight-${highlight.number}`;

          return (
            <a
              key={highlight.number}
              href={`#${detailId}`}
              aria-label={`อ่านรายละเอียด: ${highlight.thaiTitle}`}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#2a1c17] text-left shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:border-gold/45 hover:shadow-[0_28px_60px_rgba(0,0,0,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <Image
                src={highlight.image}
                alt={highlight.thaiTitle}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1535px) 50vw, 33vw"
                placeholder="blur"
                className={`object-cover transition duration-700 group-hover:scale-105 ${highlight.imagePosition ?? ""}`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,7,5,0.08)_20%,rgba(12,7,5,0.48)_52%,rgba(12,7,5,0.96)_100%)]" />

              <div className="absolute left-5 top-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border border-gold/45 bg-espresso/75 text-gold-light backdrop-blur">
                  <Icon name={highlight.icon} className="size-5" />
                </span>
                <span className="font-heading text-4xl font-black tracking-tight text-white/35">
                  {highlight.number}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-gold-light">
                  {highlight.englishTitle}
                </p>
                <h3 className="font-heading mt-2 text-xl font-black leading-snug text-white">
                  {highlight.thaiTitle}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur transition group-hover:border-gold group-hover:bg-gold group-hover:text-espresso">
                  กดอ่านเพิ่มเติม
                  <span className="text-white/55 group-hover:text-espresso/70">/ Read More</span>
                  <Icon name="arrow-right" className="size-4" />
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {highlights.map((highlight) => (
        <article
          key={highlight.number}
          id={`xian-highlight-${highlight.number}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`xian-highlight-title-${highlight.number}`}
          className="xian-highlight-detail fixed inset-0 z-[100] items-end bg-espresso/80 p-0 text-charcoal backdrop-blur-sm sm:items-center sm:justify-center sm:p-6"
        >
          <a
            href="#xian-highlight-grid"
            className="absolute inset-0 cursor-default"
            aria-label="ปิดรายละเอียดเมื่อคลิกพื้นหลัง"
          />
          <div className="relative grid max-h-[90dvh] w-full max-w-5xl overflow-y-auto rounded-t-[2rem] border border-gold/20 bg-[#fffaf2] shadow-[0_-24px_80px_rgba(0,0,0,0.38)] sm:grid-cols-[0.9fr_1.1fr] sm:overflow-hidden sm:rounded-[2rem]">
            <div className="relative min-h-64 sm:min-h-[34rem]">
              <Image
                src={highlight.image}
                alt=""
                fill
                sizes="(max-width: 639px) 100vw, 45vw"
                placeholder="blur"
                className={`object-cover ${highlight.imagePosition ?? ""}`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,7,5,0.08),rgba(12,7,5,0.68))]" />
              <span className="font-heading absolute bottom-6 left-6 text-6xl font-black tracking-tight text-white/65">
                {highlight.number}
              </span>
            </div>

            <div className="relative p-7 sm:p-9">
              <a
                href="#xian-highlight-grid"
                className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-sand bg-white text-ink transition hover:border-tour-red hover:text-tour-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tour-red"
                aria-label="ปิดรายละเอียด"
              >
                <span aria-hidden="true" className="text-xl leading-none">×</span>
              </a>

              <div className="pr-12">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-tour-red">
                  {highlight.englishTitle}
                </p>
                <h3
                  id={`xian-highlight-title-${highlight.number}`}
                  className="font-heading mt-3 text-2xl font-black leading-tight text-charcoal"
                >
                  {highlight.thaiTitle}
                </h3>
              </div>

              <p className="mt-6 text-base leading-8 text-ink">{highlight.description}</p>
              <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-tour-red">
                <span className="size-1.5 rounded-full bg-tour-red" />
                ออกแบบเพื่อกลุ่มส่วนตัวของคุณ
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
