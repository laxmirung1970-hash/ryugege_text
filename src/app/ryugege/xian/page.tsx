import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Icon, type IconName } from "../icons";
import { LINE_URL } from "../constants";
import { siteMedia } from "../media";
import { BrandMark } from "../BrandMark";

const CONTACT_HREF = LINE_URL;
const CONTACT_LABEL = "ปรึกษาทาง LINE Official";
const CONTACT_ICON: IconName = "chat";

export const metadata: Metadata = {
  title: "ทริปซีอานส่วนตัว 5 วัน 4 คืน — วัฒนธรรมและประวัติศาสตร์",
  description:
    "ทริปซีอานส่วนตัวโดยรถยนต์ส่วนตัว สำหรับครอบครัวหรือกลุ่มเพื่อน 2 ท่านขึ้นไป เที่ยวกองทัพทหารดินเผา พระราชวังหัวชิง ฉางอันสิบสองชั่วยาม และลานสกีซีอาน โดย ริว (Ryu Gege) ล่ามไทย-จีน",
};

type Highlight = {
  icon: IconName;
  title: string;
  copy: string;
  eyebrow: string;
  tone: string;
};
type Vehicle = { name: string; seats: string; image: StaticImageData };
type Day = {
  day: string;
  title: string;
  places: string[];
  stay: string;
  image: StaticImageData;
};

const heroMeta = [
  { icon: "clock" as IconName, label: "5 วัน 4 คืน" },
  { icon: "car" as IconName, label: "รถยนต์ส่วนตัว" },
  { icon: "chat" as IconName, label: "ล่ามไทย-จีน ดูแลเอง" },
  { icon: "map-pin" as IconName, label: "2 ท่านขึ้นไป / กลุ่มส่วนตัว" },
];

const highlights: Highlight[] = [
  {
    icon: "sparkles",
    title: "กองทัพทหารดินเผา",
    eyebrow: "มรดกโลก",
    tone: "from-[#40171a] via-[#7f2720] to-[#b45831]",
    copy: "มรดกโลกและสุสานจิ๋นซีฮ่องเต้ หนึ่งในการค้นพบทางโบราณคดีที่ยิ่งใหญ่ที่สุดของโลก",
  },
  {
    icon: "store",
    title: "ฉางอันสิบสองชั่วยาม",
    eyebrow: "ย้อนยุคราชวงศ์ถัง",
    tone: "from-[#5b2518] via-[#a75128] to-[#d28b45]",
    copy:
      "ย่านจำลองเมืองฉางอันสุดอลังการ สวมชุดฮั่นฝูเดินถ่ายรูป สัมผัสวิถีชีวิต วัฒนธรรม และการแสดงยุคราชวงศ์ถังแบบสมจริง",
  },
  {
    icon: "shield",
    title: "ลานสกีซีอาน (Xi'an Ski)",
    eyebrow: "กิจกรรมหิมะ",
    tone: "from-[#12364c] via-[#246782] to-[#65a6bc]",
    copy:
      "สนุกกับกิจกรรมหิมะได้ตลอดทั้งปี ท้าทายความเร็วบนลานสกีขนาดใหญ่ มีบริการทั้งแบบในร่มและกลางแจ้งตามสภาพอากาศ พร้อมอุปกรณ์ครบครัน",
  },
  {
    icon: "route",
    title: "ต้าถังซีซื่อ ยามค่ำ",
    eyebrow: "ค่ำคืนในเมืองถัง",
    tone: "from-[#2c1832] via-[#713040] to-[#ad5849]",
    copy: "เดินเล่นตลาดยามค่ำคืน สัมผัสบรรยากาศเมืองถังและร้านค้าท้องถิ่นในย่านต้าถังซีซื่อ",
  },
  {
    icon: "languages",
    title: "ย่านมุสลิมและถนนอาหาร",
    eyebrow: "รสชาติท้องถิ่น",
    tone: "from-[#3a2a15] via-[#806126] to-[#bd9641]",
    copy: "หอระฆัง-หอกลอง ย่านตลาดเก่า และสตรีทฟู้ดขึ้นชื่อของซีอาน",
  },
  {
    icon: "check",
    title: "ส่วนตัวจริง ไม่รวมกรุ๊ป",
    eyebrow: "เดินทางในแบบคุณ",
    tone: "from-[#492018] via-[#8d3926] to-[#c46d37]",
    copy: "เดินทางเฉพาะกลุ่มของคุณ ปรับแผนได้ตามใจ มีริวดูแลภาษาและจังหวะเดินทางเอง",
  },
];

const vehicles: Vehicle[] = [
  { name: "รถ 5 ที่นั่ง", seats: "2 ท่าน", image: siteMedia.xian.vehicles.sedan },
  { name: "รถ 9 ที่นั่ง", seats: "4 ท่าน", image: siteMedia.xian.vehicles.van },
  { name: "รถ 14 ที่นั่ง", seats: "6 ท่าน", image: siteMedia.xian.vehicles.minibus },
  { name: "รถ 19 ที่นั่ง", seats: "8–10 ท่าน", image: siteMedia.xian.vehicles.coach },
];

const days: Day[] = [
  {
    day: "Day 1",
    title: "The Imperial Arrival · เดินทางถึงซีอาน",
    places: [
      "เดินทางถึงสนามบินซีอาน (XIY) และรับสัมภาระ",
      "เดินทางเข้าสู่ที่พักและพักผ่อนตามอัธยาศัย",
    ],
    stay: "Tang West Market Hotel",
    image: siteMedia.xian.days.one,
  },
  {
    day: "Day 2",
    title: "The Eighth Wonder · ทหารดินเผาและพระราชวังหัวชิง",
    places: [
      "กองทัพทหารดินเผา (มรดกโลก)",
      "เที่ยวชมพระราชวังหัวชิง",
      "เดินเล่นตลาดยามค่ำคืนต้าถังซีซื่อ",
    ],
    stay: "Tang West Market Hotel",
    image: siteMedia.xian.days.two,
  },
  {
    day: "Day 3",
    title: "Time Traveler · ย้อนเวลาสู่ฉางอัน",
    places: [
      "เรียนรู้ศิลปะการต่อสู้หย่งชุน",
      "เที่ยวชมย่านฉางอันสิบสองชั่วยาม",
      "ถ่ายรูปเช็กอินที่หอระฆังและหอกลอง",
    ],
    stay: "Tang West Market Hotel",
    image: siteMedia.xian.days.three,
  },
  {
    day: "Day 4",
    title: "Winter Illusion · ลานสกีและถนนคนเดินต้าถัง",
    places: [
      "สนุกกับกิจกรรมที่ลานสกีซีอาน",
      "สักการะวัดต้าฉือเอิน และเดินเล่น Joy City",
      "ชมแสงสียามค่ำคืนที่ถนนคนเดินต้าถังและบริเวณเจดีย์ห่านป่าใหญ่",
    ],
    stay: "Tang West Market Hotel",
    image: siteMedia.xian.days.four,
  },
  {
    day: "Day 5",
    title: "The Grand Departure · ช้อปปิ้งและสปา",
    places: [
      "เที่ยวชมศาลเจ้าพ่อหลักเมืองซีอาน",
      "เดินเล่นและหาอาหารอร่อยที่ย่านถนนคนเดินมุสลิม",
      "ผ่อนคลายด้วยการแช่ออนเซ็นและสปา",
      "เดินทางสู่สนามบินซีอาน (XIY)",
    ],
    stay: "-",
    image: siteMedia.xian.days.five,
  },
];

const itinerarySummary = [
  {
    day: "Day 1",
    route: "เดินทางถึงซีอาน · เข้าที่พักพักผ่อนตามอัธยาศัย",
    stay: "โรงแรม Tang West Market",
    meals: { breakfast: false, lunch: false, dinner: false },
  },
  {
    day: "Day 2",
    route: "ทหารดินเผา · พระราชวังหัวชิง · ตลาดยามค่ำคืนต้าถังซีซื่อ",
    stay: "โรงแรม Tang West Market",
    meals: { breakfast: true, lunch: true, dinner: true },
  },
  {
    day: "Day 3",
    route: "มวยหย่งชุน · ฉางอันสิบสองชั่วยาม · หอระฆังและหอกลอง",
    stay: "โรงแรม Tang West Market",
    meals: { breakfast: true, lunch: true, dinner: true },
  },
  {
    day: "Day 4",
    route: "ลานสกีซีอาน · วัดต้าฉือเอินและ Joy City · ถนนคนเดินต้าถัง",
    stay: "โรงแรม Tang West Market",
    meals: { breakfast: true, lunch: true, dinner: true },
  },
  {
    day: "Day 5",
    route: "ศาลเจ้าพ่อหลักเมือง · ถนนคนเดินมุสลิม · ออนเซ็นสปา · เดินทางกลับ",
    stay: "-",
    meals: { breakfast: true, lunch: true, dinner: false },
  },
];

type PriceTier = {
  group: string;
  vehicle: string;
  rows: { label: string; price: string }[];
};

const priceTiers: PriceTier[] = [
  {
    group: "3–4 ท่าน",
    vehicle: "รถ 7 ที่นั่ง",
    rows: [
      { label: "ผู้ใหญ่ (พักห้องละ 2 ท่าน)", price: "28,900" },
      { label: "เด็ก 2–12 ปี (มีเตียง / ไม่มีเตียง)", price: "28,900" },
      { label: "พักเดี่ยว จ่ายเพิ่ม", price: "5,000" },
    ],
  },
  {
    group: "5–7 ท่าน",
    vehicle: "รถ 14 ที่นั่ง",
    rows: [
      { label: "ผู้ใหญ่ (พักห้องละ 2 ท่าน)", price: "25,900" },
      { label: "เด็ก 2–12 ปี (มีเตียง / ไม่มีเตียง)", price: "25,900" },
      { label: "พักเดี่ยว จ่ายเพิ่ม", price: "5,000" },
    ],
  },
  {
    group: "8–10 ท่าน",
    vehicle: "รถ 19 ที่นั่ง",
    rows: [
      { label: "ผู้ใหญ่ (พักห้องละ 2 ท่าน)", price: "22,900" },
      { label: "เด็ก 2–12 ปี (มีเตียง / ไม่มีเตียง)", price: "22,900" },
      { label: "พักเดี่ยว จ่ายเพิ่ม", price: "5,000" },
    ],
  },
  {
    group: "10 ท่านขึ้นไป",
    vehicle: "รถ 19 ที่นั่งขึ้นไป",
    rows: [
      { label: "ผู้ใหญ่ (พักห้องละ 2 ท่าน)", price: "20,900" },
      { label: "เด็ก 2–12 ปี (มีเตียง / ไม่มีเตียง)", price: "20,900" },
      { label: "พักเดี่ยว จ่ายเพิ่ม", price: "5,000" },
    ],
  },
];

const included = [
  "รถยนต์ส่วนตัวพร้อมคนขับตลอดทริป",
  "ริว (Ryu Gege) ดูแลภาษาและประสานงานตลอดการเดินทาง",
  "ที่พัก 4 คืน ในโรงแรม 5 ดาว Xi'an Datang West Market Hotel",
  "ค่าเข้าชมสถานที่ตามโปรแกรม",
  "วางแผนเส้นทางและจัดคิวเข้าชม",
];

const excluded = [
  "ตั๋วเครื่องบินไป-กลับ",
  "วีซ่าจีน (หากมี)",
  "ค่าใช้จ่ายส่วนตัวและช้อปปิ้ง",
  "อาหารบางมื้อนอกโปรแกรม",
];

function CtaLink({
  href,
  children,
  variant = "line",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "line" | "outline" | "ghost";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-tour-red text-white shadow-[var(--shadow-cta)] hover:bg-tour-red-dark",
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
          <a href="../" className="flex min-w-0 items-center gap-3" aria-label="Ryu Gege Tour">
            <BrandMark />
            <span className="font-heading text-lg font-black leading-tight text-charcoal">
              Ryu Gege Tour
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="../#trips"
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-charcoal/80 transition hover:text-tour-red sm:inline-flex"
            >
              ← ทริปทั้งหมด
            </a>
            <CtaLink
              href={CONTACT_HREF}
              variant="line"
              className="!min-h-11 !px-5 !py-2.5"
            >
              <Icon name={CONTACT_ICON} className="size-4" />
              {CONTACT_LABEL}
            </CtaLink>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-espresso text-white">
        <Image
          src={siteMedia.trips.xian}
          alt="ทิวทัศน์เมืองซีอาน"
          fill
          sizes="100vw"
          fetchPriority="high"
          placeholder="blur"
          className="-z-10 object-cover object-center"
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
              เที่ยวซีอานแบบไม่เร่งรีบด้วยรถยนต์ส่วนตัว สำหรับครอบครัวหรือกลุ่มเพื่อน
              ตั้งแต่ 2 ท่านขึ้นไป มีทีมดูแลภาษา เส้นทาง และจังหวะเดินทางตลอดทริป
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
              <CtaLink
                href={CONTACT_HREF}
                variant="line"
              >
                <Icon name={CONTACT_ICON} className="size-4" />
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
              {highlights.map((h, index) => (
                <article
                  key={h.title}
                  className="group overflow-hidden rounded-[2rem] border border-sand/60 bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className={`relative h-24 overflow-hidden bg-gradient-to-br ${h.tone} px-7 py-5`}>
                    <p className="font-heading text-[11px] font-black uppercase tracking-[0.16em] text-white/75">
                      {h.eyebrow}
                    </p>
                    <span className="font-heading absolute -bottom-7 right-5 text-8xl font-black leading-none text-white/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative px-7 pb-7">
                    <span className="-mt-7 grid size-14 place-items-center rounded-2xl border-4 border-white bg-cream text-tour-red shadow-md shadow-espresso/10 transition duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon name={h.icon} className="size-7" />
                    </span>
                    <h3 className="font-heading mt-5 text-xl font-bold leading-snug text-charcoal">
                      {h.title}
                    </h3>
                    <p className="mt-3 border-l-2 border-gold/70 pl-3 text-sm leading-7 text-ink">
                      {h.copy}
                    </p>
                  </div>
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
              รับตั้งแต่ 2 ท่านขึ้นไป จัดรถให้เหมาะกับจำนวนผู้เดินทาง เดินทางเฉพาะครอบครัวหรือแก๊งเพื่อน
              ไม่รวมกับคนแปลกหน้า ปรับจุดแวะและจังหวะพักได้ตามใจ
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {vehicles.map((v) => (
                <article
                  key={v.name}
                  className="group overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-soft)]"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      placeholder="blur"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,6,8,0.04),rgba(30,6,8,0.58))]" />
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
              * จัดรถให้เหมาะกับจำนวนผู้เดินทางและสัมภาระ รูปแบบรถจริงอาจต่างกันตามรอบให้บริการ
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
                  <div className="relative min-h-[180px] overflow-hidden">
                    <Image
                      src={d.image}
                      alt={d.title}
                      fill
                      sizes="(min-width: 768px) 280px, 100vw"
                      placeholder="blur"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(20,6,7,0.58))]" />
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
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead>
                  <tr className="border-b border-sand/70 text-xs font-black uppercase tracking-[0.1em] text-ink-soft">
                    <th className="px-6 py-4 text-center">วัน</th>
                    <th className="px-6 py-4 text-center">เส้นทางหลัก</th>
                    <th className="w-[168px] px-6 py-4">
                      <span className="grid w-[120px] grid-cols-3 text-center">
                        <span className="col-start-2 justify-self-center text-xs tracking-normal">อาหาร</span>
                        <span className="col-span-3 row-start-2 mt-2 grid grid-cols-3 gap-1.5 text-[10px] tracking-normal text-ink-soft/80">
                          {['B', 'L', 'D'].map((label) => (
                            <span
                              key={label}
                              className="grid size-8 justify-self-center place-items-center rounded-lg bg-cream-deep font-black"
                            >
                              {label}
                            </span>
                          ))}
                        </span>
                      </span>
                    </th>
                    <th className="px-6 py-4 text-center">ที่พัก</th>
                  </tr>
                </thead>
                <tbody>
                  {itinerarySummary.map((row) => (
                    <tr key={row.day} className="border-b border-sand/40 last:border-0">
                      <td className="px-6 py-4 font-heading font-bold text-tour-red">{row.day}</td>
                      <td className="px-6 py-4 text-charcoal">{row.route}</td>
                      <td className="w-[168px] px-6 py-4">
                        <div className="grid w-[120px] grid-cols-3 gap-1.5" aria-label="อาหารที่รวมในวันนั้น">
                          {[
                            { label: "B", name: "อาหารเช้า", included: row.meals.breakfast },
                            { label: "L", name: "อาหารกลางวัน", included: row.meals.lunch },
                            { label: "D", name: "อาหารเย็น", included: row.meals.dinner },
                          ].map((meal) => (
                            <span
                              key={meal.label}
                              title={`${meal.name}${meal.included ? " รวมในแพ็กเกจ" : " ไม่รวม"}`}
                              className={`grid size-8 justify-self-center place-items-center rounded-full text-sm font-black ${
                                meal.included
                                  ? "bg-emerald-600 text-white shadow-sm shadow-emerald-700/20"
                                  : "border border-sand/50 bg-cream text-ink-soft/55"
                              }`}
                            >
                              {meal.included ? "✓" : "–"}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-ink">
                        {row.stay === "-" ? (
                          "-"
                        ) : (
                          <div className="flex flex-col items-center gap-1 text-center">
                            <span
                              className="bg-gradient-to-b from-[#fff4bd] via-[#f7cc61] to-[#b97916] bg-clip-text text-[13px] font-black leading-none tracking-[0.18em] text-transparent drop-shadow-[0_2px_4px_rgba(175,107,13,0.55)]"
                              aria-label="โรงแรมระดับ 5 ดาว"
                            >
                              ★★★★★
                            </span>
                            <span>{row.stay}</span>
                          </div>
                        )}
                      </td>
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
              รับตั้งแต่ <span className="font-bold text-charcoal">2 ท่านขึ้นไป</span> ·
              ราคาในตารางสำหรับกลุ่ม 3 ท่านขึ้นไป ·{" "}
              <span className="font-bold text-charcoal">ราคาไม่รวมตั๋วเครื่องบิน</span>
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
              รายละเอียดที่พักและโปรแกรมปรับร่วมกันได้ — สรุปราคาจริงหลังปรึกษา
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
                <CtaLink
                  href={CONTACT_HREF}
                  variant="line"
                >
                  <Icon name={CONTACT_ICON} className="size-4" />
                  {CONTACT_LABEL}
                </CtaLink>
                <CtaLink href={LINE_URL} variant="ghost">
                  <Icon name="chat" className="size-4" />
                  สอบถามผ่าน LINE Official
                </CtaLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-espresso py-12 text-center text-white">
        <p className="font-heading text-lg font-black">Ryu Gege Tour</p>
        <a href="../" className="mt-3 inline-block text-sm text-white/70 transition hover:text-gold">
          ← กลับหน้าหลัก
        </a>
      </footer>
    </div>
  );
}
