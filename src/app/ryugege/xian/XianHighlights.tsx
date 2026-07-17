import { tripHighlights } from "./highlight-data";
import { XianHighlightExplorer } from "./XianHighlightExplorer";

export function XianHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#211510] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_0%,rgba(177,91,43,0.35),transparent_28%),radial-gradient(circle_at_94%_72%,rgba(239,47,55,0.18),transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="font-heading text-sm font-black text-tour-red">01</span>
            <span className="h-px w-8 bg-gold/60" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold-light">
              Trip Highlights
            </span>
          </div>
          <h2 className="font-heading mt-5 text-3xl font-black leading-[1.08] sm:text-4xl">
            Highlight ทริป Xian
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
            เก้าประสบการณ์ที่คัดสรรมาเพื่อให้การเดินทางครั้งนี้มีทั้งความสบาย
            ความสนุก และเรื่องราวที่น่าจดจำ — แตะการ์ดเพื่ออ่านรายละเอียด
          </p>
        </div>

        <XianHighlightExplorer highlights={tripHighlights} />

        <p className="mt-7 text-center text-xs leading-5 text-white/60">
          ภาพประกอบบางส่วนจาก Wikimedia Commons และภาพสถานที่จริงในโปรแกรมทริป
        </p>
      </div>
    </section>
  );
}
