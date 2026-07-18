import Image, { type StaticImageData } from "next/image";

type UnderConstructionPageProps = {
  cityEnglish: string;
  cityThai: string;
  background: StaticImageData;
};

const githubPagesBasePath =
  process.env.GITHUB_PAGES === "true" ? "/ryugege_text" : "";

export function UnderConstructionPage({
  cityEnglish,
  cityThai,
  background,
}: UnderConstructionPageProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0b0908] text-white">
      <Image
        src={background}
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-30 object-cover object-center opacity-60"
      />
      <video
        className="absolute inset-0 -z-20 size-full scale-[1.04] object-cover opacity-55 blur-[3px]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src={`${githubPagesBasePath}/videos/under-construction.mp4`}
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(8,6,5,0.94)_0%,rgba(12,10,9,0.82)_52%,rgba(12,10,9,0.58)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(244,195,95,0.14),transparent_38%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
        <header className="flex items-center justify-between">
          <a
            href={`${githubPagesBasePath}/ryugege/`}
            className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.16em] text-white/80 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <span className="grid size-10 place-items-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm transition group-hover:border-gold/60 group-hover:text-gold">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </span>
            <span className="hidden uppercase sm:inline">Back to Ryu Gege Tour</span>
            <span className="sm:hidden">กลับ</span>
          </a>

          <p className="hidden text-right text-xs font-black uppercase tracking-[0.28em] text-gold sm:block">
            {cityEnglish} Route
          </p>
        </header>

        <section className="flex min-w-0 flex-1 items-center py-16 sm:py-20">
          <div className="w-full min-w-0 max-w-[calc(100vw-2.5rem)] sm:max-w-5xl">
            <div className="mb-7 flex items-center gap-4 sm:mb-9">
              <span className="h-px w-14 bg-tour-red sm:w-20" />
              <p className="text-xs font-black uppercase tracking-[0.32em] text-gold sm:text-sm">
                New journey in progress
              </p>
            </div>

            <h1 className="font-heading max-w-full text-[2rem] font-black uppercase leading-[0.84] tracking-[-0.055em] text-white [text-wrap:balance] sm:max-w-5xl sm:text-[clamp(4rem,8.6vw,8.8rem)]">
              Under
              <br />
              Construction
            </h1>

            <div className="mt-9 w-full min-w-0 border-l-2 border-tour-red pl-5 sm:mt-12 sm:pl-7">
              <p className="font-heading break-words text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                <span className="block sm:inline">เส้นทาง{cityThai}</span>{" "}
                <span className="block sm:inline">กำลังอยู่ระหว่างจัดทำ</span>
              </p>
              <p className="mt-3 max-w-[19rem] text-base leading-7 text-white/65 [overflow-wrap:anywhere] sm:max-w-2xl sm:text-lg sm:leading-8">
                เรากำลังออกแบบรายละเอียดการเดินทางให้ครบถ้วนและน่าเดินทางที่สุด
                กรุณากลับมาติดตามเส้นทางใหม่นี้อีกครั้งเร็ว ๆ นี้
              </p>
            </div>
          </div>
        </section>

        <footer className="flex items-end justify-between gap-6 border-t border-white/12 pt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-xs">
          <span>Ryu Gege Tour</span>
          <span className="hidden text-right sm:inline">{cityEnglish} · China</span>
        </footer>
      </div>
    </main>
  );
}
