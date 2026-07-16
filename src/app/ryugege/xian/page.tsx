import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Icon, type IconName } from "../icons";
import { LINE_URL } from "../constants";

const PHONE = "092 842 2121";

export const metadata: Metadata = {
  title: "ทริปซีอานส่วนตัว 5 วัน 4 คืน — วัฒนธรรมและประวัติศาสตร์",
  description:
    "ทริปซีอานส่วนตัวโดยรถยนต์ส่วนตัว เฉพาะครอบครัวหรือกลุ่มเพื่อน 4–9 ท่าน เที่ยวกองทัพทหารดินเผา กำแพงเมืองโบราณ เขาหัวซาน โดย ริว (RyuGeGe) ล่ามไทย-จีน",
};

type Highlight = { icon: IconName; title: string; copy: string };
type Vehicle = { name: string; seats: string; icon: IconName };
type Day = { day: string; title: string; places: string[]; stay: string; image: string };

const heroMeta = [
  { icon: "clock" as IconName, label: "5 วัน 4 คืน" },
  { icon: "car" as IconName, label: "รถยนต์ส่วนตัว" },
  { icon: "chat" as IconName, label: "ล่ามไทย-จีน ดูแลเอง" },
  { icon: "map-pin" as IconName, label: "4–9 ท่าน / กลุ่มส่วนตัว" },
];

const highlights: Highlight[] = [
  {
    icon: "sparkles",
    title: "กองทัพทหารดินเผา",
    copy: "มรดกโลกและสุสานจิ๋นซีฮ่องเต้ หนึ่งในการค้นพบทางโบราณคดีที่ยิ่งใหญ่ที่สุดของโลก",
  },
  {
    icon: "shield",
    title: "กำแพงเมืองโบราณซีอาน",
    copy: "กำแพงเมืองที่สมบูรณ์ที่สุดในจีน ปั่นจักรยานหรือเดินชมวิวเมืองเก่าจากบนกำแพง",
  },
  {
    icon: "store",
    title: "ต้าถัง ปู้เย่เฉิง ยามค่ำ",
    copy: "ย่านราชวงศ์ถังจำลอง ไฟประดับตระการตา บรรยากาศจีนโบราณกลางเมืองยามค่ำ",
  },
  {
    icon: "route",
    title: "เขาหัวซาน (Mount Hua)",
    copy: "หนึ่งใน 5 ภูเขาศักดิ์สิทธิ์ของจีน ขึ้นกระเช้าชมวิวหน้าผาและเส้นทางในตำนาน",
  },
  {
    icon: "languages",
    title: "ย่านมุสลิมและถนนอาหาร",
    copy: "หอระฆัง-หอกลอง ย่านตลาดเก่า และสตรีทฟู้ดขึ้นชื่อของซีอาน",
  },
  {
    icon: "check",
    title: "ส่วนตัวจริง ไม่รวมกรุ๊ป",
    copy: "เดินทางเฉพาะกลุ่มของคุณ ปรับแผนได้ตามใจ มีริวดูแลภาษาและจังหวะเดินทางเอง",
  },
];

const vehicles: Vehicle[] = [
  { name: "รถเก๋ง / Sedan", seats: "2–3 ท่าน", icon: "car" },
  { name: "SUV", seats: "3–4 ท่าน", icon: "car" },
  { name: "รถตู้ VIP / Van", seats: "5–7 ท่าน", icon: "car" },
  { name: "มินิบัส", seats: "8–9 ท่าน", icon: "car" },
];

const days: Day[] = [
  {
    day: "Day 1",
    title: "ถึงซีอาน · เมืองเก่า",
    places: [
      "รับที่สนามบินซีอานด้วยรถส่วนตัว",
      "กำแพงเมืองโบราณซีอาน",
      "ย่านมุสลิม · หอระฆัง · หอกลอง",
    ],
    stay: "ซีอาน",
    image:
      "https://images.unsplash.com/photo-1547253807-593ee708edab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    day: "Day 2",
    title: "ทหารดินเผา · หัวชิง",
    places: [
      "กองทัพทหารดินเผา (มรดกโลก)",
      "พระราชวังหัวชิงและบ่อน้ำพุร้อน",
      "เย็น: ต้าถัง ปู้เย่เฉิง ยามค่ำ",
    ],
    stay: "ซีอาน",
    image:
      "https://images.unsplash.com/photo-1569685794205-a8fc87049f5d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    day: "Day 3",
    title: "เขาหัวซาน",
    places: [
      "เดินทางสู่เขาหัวซานด้วยรถส่วนตัว",
      "ขึ้นกระเช้าชมวิวหน้าผาและยอดเขา",
      "อิสระเก็บภาพเส้นทางในตำนาน",
    ],
    stay: "ซีอาน",
    image:
      "https://images.unsplash.com/photo-1760419855307-3d43fd202b42?auto=format&fit=crop&w=1000&q=80",
  },
  {
    day: "Day 4",
    title: "เจดีย์ห่านป่า · พิพิธภัณฑ์",
    places: [
      "เจดีย์ห่านป่าใหญ่ (ต้าเยี่ยนถ่า)",
      "พิพิธภัณฑ์ประวัติศาสตร์ส่านซี",
      "ย่านอาหาร Yongxingfang",
    ],
    stay: "ซีอาน",
    image:
      "https://images.unsplash.com/photo-1758543647734-c0a302acb3f6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    day: "Day 5",
    title: "อิสระ · เดินทางกลับ",
    places: [
      "อิสระช้อปปิ้งของฝากตามอัธยาศัย",
      "ส่งที่สนามบินซีอานด้วยรถส่วนตัว",
    ],
    stay: "-",
    image:
      "https://images.unsplash.com/photo-1547253807-593ee708edab?auto=format&fit=crop&w=1000&q=80",
  },
];

type PriceTier = {
  group: string;
  vehicle: string;
  rows: { label: string; price: string }[];
};

const priceTiers: PriceTier[] = [
  {
    group: "4–5 ท่าน",
    vehicle: "รถ 7 ที่นั่ง",
    rows: [
      { label: "ผู้ใหญ่ (พักห้องละ 2 ท่าน)", price: "20,900" },
      { label: "เด็ก 2–12 ปี (มีเตียง / ไม่มีเตียง)", price: "20,900" },
      { label: "พักเดี่ยว จ่ายเพิ่ม", price: "5,000" },
    ],
  },
  {
    group: "6–7 ท่าน",
    vehicle: "รถ 9–14 ที่นั่ง",
    rows: [
      { label: "ผู้ใหญ่ (พักห้องละ 2 ท่าน)", price: "17,900" },
      { label: "เด็ก 2–12 ปี (มีเตียง / ไม่มีเตียง)", price: "17,900" },
      { label: "พักเดี่ยว จ่ายเพิ่ม", price: "5,000" },
    ],
  },
  {
    group: "8–10 ท่าน",
    vehicle: "รถ 14–18 ที่นั่ง",
    rows: [
      { label: "ผู้ใหญ่ (พักห้องละ 2 ท่าน)", price: "16,900" },
      { label: "เด็ก 2–12 ปี (มีเตียง / ไม่มีเตียง)", price: "16,900" },
      { label: "พักเดี่ยว จ่ายเพิ่ม", price: "5,000" },
    ],
  },
];

const included = [
  "รถยนต์ส่วนตัวพร้อมคนขับตลอดทริป",
  "ริว (RyuGeGe) ดูแลภาษาและประสานงานตลอดการเดินทาง",
  "ที่พัก 4 คืน (ตามระดับที่ตกลง)",
  "ค่าเข้าชมสถานที่ตามโปรแกรม",
  "วางแผนเส้นทางและจัดคิวเข้าชม",
];

const excluded = [
  "ตั๋วเครื่องบินไป-กลับ",
  "วีซ่าจีน (หากมี)",
  "ค่าใช้จ่ายส่วนตัวและช้อปปิ้ง",
  "อาหารบางมื้อนอกโปรแกรม",
  "ประกันการเดินทางและทิป",
];

function CtaLink({
  href,
  children,
  variant = "line",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "line" | "outline" | "ghost";
  className?: string;
}) {
  const styles = {
    line: "bg-line-green text-white shadow-[var(--shadow-line)] hover:bg-line-green-dark",
    outline:
      "border border-tour-red/40 bg-white text-tour-red hover:border-tour-red hover:bg-tour-red/5",
    ghost:
      "border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15",
  };
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-bold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-heading text-sm font-black text-tour-red">{index}</span>
      <span className="h-px w-8 bg-tour-red/40" />
      <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink-soft">
        {label}
      </span>
    </div>
  );
}

export default function XianPage() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-sand/70 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="../" className="flex min-w-0 items-center gap-3" aria-label="RyuGeGe Tour">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(140deg,#ef2f37,#8b1118)] text-center text-[10px] font-black uppercase leading-tight text-gold-light">
              Ryu
              <br />
              Tour
            </span>
            <span className="font-heading text-lg font-black leading-tight text-charcoal">
              RyuGeGe Tour
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="../#trips"
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-charcoal/80 transition hover:text-tour-red sm:inline-flex"
            >
              ← ทริปทั้งหมด
            </a>
            <CtaLink href={LINE_URL} variant="line" className="!min-h-11 !px-5 !py-2.5">
              <Icon name="chat" className="size-4" />
              ปรึกษาทาง LINE
            </CtaLink>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-espresso text-white">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1547253807-593ee708edab?auto=format&fit=crop&w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(20,6,7,0.94),rgba(27,17,14,0.82)_45%,rgba(27,17,14,0.5))]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(244,195,95,0.22),transparent_42%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/20 px-4 py-2 text-sm font-bold text-gold-light backdrop-blur">
              <Icon name="map-pin" className="size-4" />
              ซีอาน · Premium Leisure
            </span>
            <h1 className="font-heading mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              ทริปซีอานส่วนตัว
              <span className="text-gradient-gold block">วัฒนธรรมและประวัติศาสตร์จีนแท้</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              เที่ยวซีอานแบบไม่เร่งรีบด้วยรถยนต์ส่วนตัว เฉพาะครอบครัวหรือกลุ่มเพื่อน
              4–9 ท่าน มีริวดูแลภาษา เส้นทาง และจังหวะเดินทางตลอดทริป
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {heroMeta.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
                >
                  <Icon name={m.icon} className="size-4 text-gold" />
                  {m.label}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={LINE_URL} variant="line">
                <Icon name="chat" className="size-4" />
                จองหรือสอบถามทริปซีอาน
              </CtaLink>
              <CtaLink href="#price" variant="ghost">
                ดูอัตราค่าบริการ
                <Icon name="arrow-right" className="size-4" />
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Highlights */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionLabel index="01" label="Trip Highlights" />
            <h2 className="font-heading mt-5 max-w-2xl text-3xl font-black leading-[1.1] sm:text-4xl">
              ไฮไลต์ที่ไม่ควรพลาดในซีอาน
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((h) => (
                <article
                  key={h.title}
                  className="rounded-3xl bg-white p-7 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="grid size-14 place-items-center rounded-2xl bg-cream text-tour-red">
                    <Icon name={h.icon} className="size-7" />
                  </span>
                  <h3 className="font-heading mt-6 text-xl font-bold leading-snug text-charcoal">
                    {h.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink">{h.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Private car */}
        <section className="bg-cream-deep/50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionLabel index="02" label="Private Car" />
            <h2 className="font-heading mt-5 max-w-2xl text-3xl font-black leading-[1.1] sm:text-4xl">
              เดินทางด้วยรถยนต์ส่วนตัว เฉพาะกลุ่มของคุณ
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink">
              จัดรถให้เหมาะกับจำนวนผู้เดินทาง เดินทางเฉพาะครอบครัวหรือแก๊งเพื่อน
              ไม่รวมกับคนแปลกหน้า ปรับจุดแวะและจังหวะพักได้ตามใจ
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {vehicles.map((v) => (
                <article
                  key={v.name}
                  className="group overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-soft)]"
                >
                  <div className="relative flex h-40 items-center justify-center bg-[linear-gradient(140deg,#201a17,#8b1118)]">
                    <Icon
                      name={v.icon}
                      className="size-20 text-gold-light/90 transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-black/30 px-3 py-1 text-xs font-bold text-gold-light backdrop-blur">
                      {v.seats}
                    </span>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-heading text-lg font-bold text-charcoal">{v.name}</h3>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              * ประเภทรถเป็นตัวอย่าง จัดจริงตามจำนวนผู้เดินทางและสัมภาระ — รูปรถจริงเพิ่มภายหลัง
            </p>
          </div>
        </section>

        {/* Itinerary */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionLabel index="03" label="Itinerary" />
            <h2 className="font-heading mt-5 max-w-2xl text-3xl font-black leading-[1.1] sm:text-4xl">
              แผนการเดินทาง 5 วัน 4 คืน
            </h2>
            <div className="mt-12 space-y-6">
              {days.map((d) => (
                <article
                  key={d.day}
                  className="grid gap-5 overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-soft)] md:grid-cols-[280px_1fr]"
                >
                  <div
                    className="relative min-h-[180px] bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.05),rgba(20,6,7,0.6)), url(${d.image})`,
                    }}
                  >
                    <span className="absolute left-4 top-4 rounded-full bg-tour-red px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-white">
                      {d.day}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-charcoal">{d.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {d.places.map((p) => (
                        <li key={p} className="flex gap-2.5 text-sm leading-6 text-ink">
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-tour-red/10 text-tour-red">
                            <Icon name="check" className="size-3.5" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
                      ที่พัก: {d.stay}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Summary table */}
        <section className="bg-cream-deep/50 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionLabel index="04" label="Summary" />
            <h2 className="font-heading mt-5 text-3xl font-black leading-[1.1] sm:text-4xl">
              สรุปการเดินทาง
            </h2>
            <div className="mt-10 overflow-x-auto rounded-3xl bg-white shadow-[var(--shadow-soft)]">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-sand/70 text-xs font-black uppercase tracking-[0.1em] text-ink-soft">
                    <th className="px-6 py-4">วัน</th>
                    <th className="px-6 py-4">เส้นทางหลัก</th>
                    <th className="px-6 py-4">ที่พัก</th>
                  </tr>
                </thead>
                <tbody>
                  {days.map((d) => (
                    <tr key={d.day} className="border-b border-sand/40 last:border-0">
                      <td className="px-6 py-4 font-heading font-bold text-tour-red">{d.day}</td>
                      <td className="px-6 py-4 text-charcoal">{d.title}</td>
                      <td className="px-6 py-4 text-ink">{d.stay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="price" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionLabel index="05" label="Rate" />
            <h2 className="font-heading mt-5 text-3xl font-black leading-[1.1] sm:text-4xl">
              อัตราค่าบริการ
            </h2>
            <p className="mt-4 text-base leading-7 text-ink">
              ช่วงเวลาเดินทาง: <span className="font-bold text-charcoal">วันนี้ – กันยายน 2569</span>{" "}
              · สำหรับกลุ่มส่วนตัว 4–10 ท่าน ·{" "}
              <span className="font-bold text-charcoal">ราคาไม่รวมตั๋วเครื่องบิน</span>
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {priceTiers.map((tier) => (
                <div
                  key={tier.group}
                  className="overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-soft)]"
                >
                  <div className="bg-espresso px-5 py-4 text-center text-white">
                    <p className="font-heading text-lg font-black">{tier.group}</p>
                    <p className="mt-0.5 text-xs font-semibold text-gold-light">
                      {tier.vehicle}
                    </p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] gap-3 bg-cream-deep/60 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.06em] text-ink-soft">
                    <span>จำนวนผู้เดินทาง</span>
                    <span>ราคา / ท่าน</span>
                  </div>
                  <div>
                    {tier.rows.map((row, i) => (
                      <div
                        key={row.label}
                        className={`grid grid-cols-[1fr_auto] items-center gap-3 px-5 py-4 ${
                          i > 0 ? "border-t border-sand/40" : ""
                        }`}
                      >
                        <span className="text-sm leading-5 text-charcoal">{row.label}</span>
                        <span className="font-heading text-lg font-black text-tour-red">
                          ฿{row.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-ink-soft">
              * ราคาต่อท่าน <span className="font-bold text-charcoal">ไม่รวมตั๋วเครื่องบิน</span> ·
              เด็กอายุต่ำกว่า 2 ปี สอบถามเพิ่มเติม · รายละเอียดที่พักและโปรแกรมปรับร่วมกันได้ —
              สรุปราคาจริงหลังปรึกษา
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-tour-red/15 bg-white p-7 shadow-[var(--shadow-soft)]">
                <h3 className="font-heading text-lg font-bold text-charcoal">ราคานี้รวม</h3>
                <ul className="mt-4 space-y-2.5">
                  {included.map((i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-6 text-ink">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-tour-red/10 text-tour-red">
                        <Icon name="check" className="size-3.5" />
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-sand bg-cream/40 p-7">
                <h3 className="font-heading text-lg font-bold text-charcoal">ราคานี้ไม่รวม</h3>
                <ul className="mt-4 space-y-2.5">
                  {excluded.map((i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-6 text-ink">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-ink-soft" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-espresso px-6 py-16 text-center text-white shadow-[var(--shadow-lift)] sm:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,195,95,0.18),transparent_55%),radial-gradient(circle_at_85%_90%,rgba(239,47,55,0.22),transparent_45%)]" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-light">
                ทริปซีอานส่วนตัว
              </p>
              <h2 className="font-heading mx-auto mt-5 max-w-2xl text-3xl font-black leading-[1.12] sm:text-4xl">
                อยากได้แผนซีอานที่ปรับตามกลุ่มของคุณ?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/74">
                ทักมาบอกจำนวนคน ช่วงเวลา และสไตล์ที่ชอบ ริวจะช่วยจัดเส้นทางและประเมินราคาให้
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <CtaLink href={LINE_URL} variant="line">
                  <Icon name="chat" className="size-4" />
                  ปรึกษาฟรีทาง LINE
                </CtaLink>
                <CtaLink href={`tel:${PHONE.replace(/\s+/g, "")}`} variant="ghost">
                  <Icon name="phone" className="size-4" />
                  {PHONE}
                </CtaLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-espresso py-12 text-center text-white">
        <p className="font-heading text-lg font-black">RyuGeGe Tour</p>
        <a href="../" className="mt-3 inline-block text-sm text-white/70 transition hover:text-gold">
          ← กลับหน้าหลัก
        </a>
      </footer>
    </div>
  );
}
