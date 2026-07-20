import type { Metadata } from "next";
import Image from "next/image";
import { InquiryForm } from "./InquiryForm";
import { HeroCarousel } from "./HeroCarousel";
import { SiteHeader } from "./SiteHeader";
import { PageEffects } from "./PageEffects";
import { Icon } from "./icons";
import { LINE_URL } from "./constants";
import { TikTokClipGallery } from "./TikTokClipGallery";
import { BrandMark } from "./BrandMark";
import { siteMedia } from "./media";
import { CtaLink } from "./CtaLink";
import { SectionLabel } from "./SectionLabel";
import {
  CONTACT_HREF,
  CONTACT_ICON,
  CONTACT_LABEL,
  contactCards,
  credentials,
  faqs,
  featuredTripOrder,
  heroProof,
  heroSlides,
  jsonLd,
  marqueeWords,
  navItems,
  problemCards,
  processSteps,
  reviewClips,
  serviceCards,
  shortcutBenefits,
  socialLinks,
  testimonials,
  tripCards,
  type TripCard,
} from "./home-data";

export const metadata: Metadata = {
  title: "ทริปธุรกิจจีน ดูงานแฟร์ โรงงาน และซัพพลายเออร์",
  description:
    "Ryu Gege Tour บริการออกแบบทริปธุรกิจจีน พาเดินงานแฟร์ ดูโรงงาน พบซัพพลายเออร์ และประสานงานจีน-ไทยสำหรับเจ้าของธุรกิจ SME และทีมจัดซื้อ",
  openGraph: {
    title: "Ryu Gege Tour | ทริปธุรกิจจีน ดูงานแฟร์ โรงงาน และซัพพลายเออร์",
    description:
      "ทริปธุรกิจจีนแบบ founder-led สำหรับเจ้าของธุรกิจที่ต้องการไปจีนอย่างมีแผน มีคนช่วยคุย และมีคนช่วยประสาน",
    type: "website",
  },
};

function SplitHeading({
  index,
  label,
  title,
  copy,
  light = false,
}: {
  index: string;
  label: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
      <div className="max-w-2xl">
        <SectionLabel index={index} label={label} light={light} />
        <h2
          className={`font-heading mt-5 text-3xl font-black leading-[1.08] sm:text-4xl lg:text-[2.75rem] ${
            light ? "text-white" : "text-charcoal"
          }`}
        >
          {title}
        </h2>
      </div>
      {copy ? (
        <p
          className={`text-base leading-7 lg:pb-2 ${
            light ? "text-white/72" : "text-ink"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function CenteredHeading({
  index,
  label,
  title,
  copy,
  light = false,
}: {
  index: string;
  label: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <SectionLabel index={index} label={label} light={light} center />
      <h2
        className={`font-heading mt-5 text-3xl font-black leading-[1.1] sm:text-4xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-4 text-lg leading-8 ${
            light ? "text-white/72" : "text-ink"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul
      className={`space-y-2.5 text-sm leading-6 ${
        light ? "text-white/80" : "text-ink"
      }`}
    >
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span
            className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
              light ? "bg-gold/20 text-gold" : "bg-tour-red/10 text-tour-red"
            }`}
          >
            <Icon name="check" className="size-3.5" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TripCardView({ trip }: { trip: TripCard }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={trip.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_38%,rgba(20,6,7,0.82)_100%)]" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-maroon backdrop-blur">
          {trip.city}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-charcoal/70 px-3 py-1.5 text-xs font-bold text-gold-light backdrop-blur">
          {trip.kind}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-light">
            {trip.subtitle}
          </p>
          <h3 className="font-heading mt-1.5 text-2xl font-bold leading-tight">
            {trip.title}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="leading-7 text-ink">{trip.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {trip.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-cream-deep px-3 py-1.5 text-xs font-bold text-maroon"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <span className="text-sm text-ink">
            {trip.price ? (
              <>
                เริ่มต้น{" "}
                <span className="font-heading text-lg font-black text-charcoal">
                  {trip.price}
                </span>{" "}
                / ท่าน
              </>
            ) : (
              <span className="font-semibold text-charcoal">
                ราคาตามการออกแบบทริป
              </span>
            )}
          </span>
          <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-tour-red">
            {trip.href ? "ดูรายละเอียด" : "สอบถาม"}
            <Icon
              name="arrow-right"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
      <a
        href={trip.href ?? CONTACT_HREF}
        aria-label={trip.title}
        className="absolute inset-0 z-10 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tour-red"
        {...(trip.href ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      />
    </article>
  );
}

/* ------------------------------------------------------------------ page */

export default function RyuGegePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-cream text-charcoal">
        <PageEffects />
        <SiteHeader
          navItems={navItems}
          contactUrl={CONTACT_HREF}
        />

        <main>
          {/* Hero — full-bleed carousel, the first intentional dark moment */}
          <section id="top" className="relative bg-espresso text-white">
            <HeroCarousel slides={heroSlides}>
              <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 pb-28 pt-20 sm:px-6 lg:px-8">
                <div className="max-w-3xl animate-fade-in">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/20 px-4 py-2 text-sm font-bold text-gold-light backdrop-blur">
                    <Icon name="sparkles" className="size-4" />
                    ทริปจีนธุรกิจ + Private Tour โดย Ryu Gege
                  </span>
                  <h1 className="font-heading mt-6 text-4xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                    พาบินไปดูตลาดจีน
                    <span className="text-gradient-gold block">
                      งานแฟร์ · โรงงาน · ซัพพลายเออร์
                    </span>
                    <span className="mt-3 block text-[0.46em] font-bold leading-tight text-white/95 sm:text-[0.42em]">
                      หรือ Private Tour ส่วนตัว — ไม่ต้องเป็นทริปธุรกิจก็ไปได้
                    </span>
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                    บริการทริปธุรกิจจีนและ Private Tour ส่วนตัวโดย ริว (Ryu Gege)
                    วิศวกร ป.โท ผู้มีประสบการณ์ติดต่อประสานงานกับจีนมากกว่า 10 ปี
                    — สำหรับทั้งคนทำธุรกิจและคนที่อยากเที่ยวจีนในแบบของตัวเอง
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <CtaLink
                      href={CONTACT_HREF}
                      variant="line"
                    >
                      <Icon name={CONTACT_ICON} className="size-4" />
                      {CONTACT_LABEL}
                    </CtaLink>
                    <CtaLink href="#trips" variant="ghost">
                      ดูทริปแนะนำ
                      <Icon name="arrow-right" className="size-4" />
                    </CtaLink>
                  </div>
                  <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                    {heroProof.map((item) => (
                      <span
                        key={item}
                        className="flex items-center gap-2 text-sm font-semibold text-white/75"
                      >
                        <Icon name="check" className="size-4 text-gold" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </HeroCarousel>
          </section>

          {/* Floating contact card overlapping the hero */}
          <section className="relative z-20 -mt-16 lg:-mt-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-lift)] ring-1 ring-sand/60 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-sand/50">
                {contactCards.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-start gap-4 p-6 transition hover:bg-cream lg:p-7"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-tour-red/10 text-tour-red transition group-hover:bg-tour-red group-hover:text-white">
                      <Icon name={item.icon} className="size-6" />
                    </span>
                    <span className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
                        {item.title}
                      </p>
                      <h2 className="font-heading mt-1 text-lg font-bold text-charcoal">
                        {item.value}
                      </h2>
                      <p className="mt-1.5 text-sm leading-6 text-ink">
                        {item.copy}
                      </p>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Marquee strip */}
          <section className="pt-14 sm:pt-20">
            <div className="marquee border-y border-sand/60 py-4">
              <div className="marquee__track">
                {[...marqueeWords, ...marqueeWords].map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    aria-hidden={index >= marqueeWords.length}
                    className="flex items-center gap-4 text-lg font-black uppercase tracking-[0.14em] text-ink-soft"
                  >
                    {word}
                    <span className="size-1.5 rounded-full bg-tour-red/50" />
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Problem / agitation */}
          <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SplitHeading
                index="01"
                label="The Problem"
                title="ไปดูโรงงานและงานแฟร์จีนเอง เสี่ยงกว่าที่คิด"
                copy="ปัญหาที่เจ้าของธุรกิจและทีมจัดซื้อเจอบ่อย เมื่อไปจีนโดยไม่มีคนที่เข้าใจทั้งภาษาและธุรกิจไปด้วย"
              />
              <div className="reveal-stagger mt-14 grid gap-6 md:grid-cols-3">
                {problemCards.map((problem) => (
                  <article
                    key={problem.title}
                    className="relative overflow-hidden rounded-3xl border border-tour-red/15 bg-white p-7 shadow-[var(--shadow-soft)]"
                  >
                    <span className="absolute inset-y-0 left-0 w-1 bg-tour-red/70" />
                    <span className="grid size-14 place-items-center rounded-2xl bg-tour-red/10 text-tour-red">
                      <Icon name={problem.icon} className="size-7" />
                    </span>
                    <h3 className="font-heading mt-6 text-xl font-bold leading-snug text-charcoal">
                      {problem.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ink">{problem.copy}</p>
                  </article>
                ))}
              </div>
              <p className="mt-8 text-center text-base font-semibold text-ink">
                นี่คือเหตุผลที่การมี “คนที่เข้าใจทั้งภาษาและธุรกิจ” เดินไปกับคุณ ช่วยลดความเสี่ยงได้จริง
              </p>
            </div>
          </section>

          {/* Value proposition */}
          <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SplitHeading
                index="02"
                label="Why Ryu Gege"
                title="ทำให้ทริปจีนกลายเป็นการเดินทางธุรกิจที่จับต้องได้"
                copy="แนวทางคล้ายการมีทีมพาลงตลาดจริง แต่ปรับให้เหมาะกับแบรนด์เล็ก ทีมจัดซื้อ และเจ้าของธุรกิจที่ต้องการความใกล้ชิดกว่า"
              />
              <div className="reveal-stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {shortcutBenefits.map((benefit) => (
                  <article
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
                  >
                    <span className="pointer-events-none absolute -right-1 -top-4 font-heading text-7xl font-black text-cream-deep">
                      {benefit.label}
                    </span>
                    <span className="relative grid size-14 place-items-center rounded-2xl bg-cream text-tour-red transition group-hover:bg-tour-red group-hover:text-white">
                      <Icon name={benefit.icon} className="size-7" />
                    </span>
                    <h3 className="font-heading relative mt-6 text-xl font-bold leading-snug text-charcoal">
                      {benefit.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-7 text-ink">
                      {benefit.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Trips */}
          <section id="trips" className="scroll-mt-24 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SplitHeading
                index="03"
                label="Recommended Trips"
                title="เส้นทางแนะนำ: ธุรกิจ วัฒนธรรม และไฮบริด"
                copy="โฟกัส 4 เมืองหลักตามเป้าหมายลูกค้า — ซีอาน (วัฒนธรรม / พักผ่อน), แต้จิ๋ว (วัฒนธรรม / อาหาร), กว่างโจว (ธุรกิจ / Canton Fair) และยูนนาน (ผสมธุรกิจ-ท่องเที่ยว) พร้อมทริปส่วนตัวและเส้นทางออกแบบเอง"
              />
              <div className="reveal-stagger mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {[...tripCards]
                  .sort((a, b) => {
                    const aIndex = featuredTripOrder.indexOf(a.city);
                    const bIndex = featuredTripOrder.indexOf(b.city);

                    return (
                      (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex) -
                      (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex)
                    );
                  })
                  .map((trip) => (
                    <TripCardView key={trip.title} trip={trip} />
                  ))}
              </div>
              <p className="mt-8 text-sm leading-6 text-ink-soft">
                * ราคาเริ่มต้นต่อท่าน (กรุ๊ป 4–6 ท่าน) ขึ้นอยู่กับเมือง จำนวนวัน จำนวนผู้เดินทาง
                และช่วงเวลา — สรุปราคาจริงหลังปรึกษาและออกแบบทริปร่วมกัน
              </p>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="scroll-mt-24 bg-cream-deep/50 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SplitHeading
                index="04"
                label="Core Services"
                title="บริการหลักที่ช่วยให้ทริปธุรกิจเดินหน้าเป็นระบบ"
                copy="ตั้งแต่ก่อนบิน ระหว่างเดินทาง จนถึงการติดตามหลังจบทริป"
              />
              <div className="reveal-stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {serviceCards.map((service) => (
                  <article
                    key={service.title}
                    className="group flex flex-col rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-tour-red text-white shadow-[var(--shadow-cta)]">
                      <Icon name={service.icon} className="size-6" />
                    </span>
                    <span className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-tour-red">
                      {service.eyebrow}
                    </span>
                    <h3 className="font-heading mt-1 text-lg font-bold leading-snug text-charcoal">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ink">
                      {service.description}
                    </p>
                    <div className="mt-5 border-t border-sand/60 pt-5">
                      <CheckList items={service.includes} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Review clips */}
          <section id="clips" className="scroll-mt-24 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SplitHeading
                index="05"
                label="Social Proof Clips"
                title="คลิปรีวิวทริปธุรกิจที่พา CEO และเจ้าของแบรนด์ไปจริง"
                copy="คลิปแนวตั้ง 9:16 จาก TikTok — กดปุ่มเล่นเพื่อรับชมได้ทันทีในหน้านี้"
              />
              <TikTokClipGallery clips={reviewClips} />
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.slice(0, 3).map((link) => (
                  <CtaLink key={link.label} href={link.href} variant="outline">
                    <Icon name={link.icon} className="size-4" />
                    {link.label}
                  </CtaLink>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="scroll-mt-24 pb-20 sm:pb-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <CenteredHeading
                index="06"
                label="Testimonials"
                title="เสียงจากลูกค้าที่ไว้วางใจ"
                copy="ประสบการณ์จริงจากลูกค้าที่เดินทางกับ Ryu Gege Tour"
              />
              <div className="reveal-stagger mt-12 grid gap-6 md:grid-cols-3">
                {testimonials.map((item) => (
                  <article
                    key={item.name}
                    className="relative rounded-3xl border border-dashed border-sand bg-white/60 p-7"
                  >
                    <span className="font-heading text-5xl font-black leading-none text-tour-red/25">
                      &ldquo;
                    </span>
                    <p className="-mt-3 leading-7 text-ink">
                      {item.quote ?? item.focus}
                    </p>
                    <div className="mt-6 border-t border-sand/70 pt-4">
                      <h3 className="font-heading text-lg font-bold text-charcoal">
                        {item.name}
                      </h3>
                      <p className="mt-0.5 text-sm font-semibold text-tour-red">
                        {item.role}
                      </p>
                    </div>
                    <span className="absolute right-6 top-6 rounded-full bg-cream-deep px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-ink-soft">
                      Client Review
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Founder — second intentional dark moment */}
          <section id="founder" className="scroll-mt-24 bg-espresso py-20 text-white sm:py-28">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
              <div className="reveal relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#30231f] ring-1 ring-white/15 shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
                <Image
                  src={siteMedia.founder}
                  alt="Ryu Puriwat ในวันสำเร็จการศึกษา"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  placeholder="blur"
                  className="object-cover object-[50%_35%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(20,6,7,0.22)_60%,rgba(20,6,7,0.96)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
                    Founder-led
                  </p>
                  <h3 className="font-heading mt-2 text-3xl font-black">
                    Ryu Puriwat
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/72">
                    วิศวกร ป.โท · มีประสบการณ์ติดต่อประสานงานกับจีนมากกว่า 10 ปี
                    ผู้ประสานงานจีน-ไทยที่ผสานพื้นฐานวิศวกรรม ภาษา วัฒนธรรมจีน
                    และการเจรจาธุรกิจ
                  </p>
                </div>
              </div>
              <div className="reveal">
                <SectionLabel index="07" label="Why Ryu Gege Tour" light />
                <h2 className="font-heading mt-5 text-3xl font-black leading-[1.1] sm:text-4xl lg:text-[2.6rem]">
                  ไปจีนกับคนที่ช่วยแปลความหมายทางธุรกิจ ไม่ใช่แค่พาเดินทาง
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/75">
                  ริวช่วยเชื่อมระหว่างเจ้าของธุรกิจไทยกับบริบทจริงในจีน ตั้งแต่การเตรียมคำถาม
                  การสื่อสารหน้างาน ไปจนถึงการสรุปประเด็นที่ต้องนำกลับมาตัดสินใจ
                </p>
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <CheckList items={credentials} light />
                </div>
              </div>
            </div>
          </section>

          {/* Process — timeline */}
          <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <CenteredHeading
                index="08"
                label="Working Process"
                title="เริ่มต้นง่าย แต่ทำงานเป็นระบบ"
              />
              <div className="relative mt-16">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-sand md:left-0 md:right-0 md:top-6 md:bottom-auto md:h-px md:w-full" />
                <div className="reveal-stagger grid gap-10 md:grid-cols-5 md:gap-6">
                  {processSteps.map(([title, copy], index) => (
                    <div key={title} className="relative pl-16 md:pl-0">
                      <span className="absolute left-0 top-0 grid size-12 place-items-center rounded-full bg-tour-red font-heading text-lg font-black text-white shadow-[var(--shadow-cta)] md:relative">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-charcoal md:mt-5">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-ink">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Inquiry */}
          <section id="inquiry" className="scroll-mt-24 bg-cream-deep/50 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <CenteredHeading
                index="09"
                label="Start Your Trip"
                title="เล่าเป้าหมายทริป แล้วให้ริวช่วยประเมินเส้นทางที่เหมาะ"
                copy="ฟอร์มจะช่วยจัดข้อมูลเบื้องต้นก่อนคุยจริง เพื่อให้คำแนะนำเรื่องเมือง จำนวนวัน และรูปแบบบริการแม่นขึ้น"
              />
              <div className="reveal mt-12 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
                <InquiryForm />
                <aside className="flex flex-col rounded-3xl bg-espresso p-7 text-white shadow-[var(--shadow-lift)]">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
                    Faster reply
                  </p>
                  <h3 className="font-heading mt-4 text-2xl font-black leading-tight sm:text-3xl">
                    อยากคุยเร็วกว่า? แอด LINE Official เพื่อปรึกษาเบื้องต้นฟรี
                  </h3>
                  <p className="mt-4 leading-8 text-white/74">
                    ส่งสินค้าเป้าหมาย เมืองที่สนใจ ช่วงเวลาเดินทาง จำนวนคน
                    และงบประมาณคร่าว ๆ เพื่อให้ริวช่วยประเมินทริป
                  </p>
                  <CtaLink
                    href={CONTACT_HREF}
                    variant="line"
                    className="mt-7 w-full"
                  >
                    <Icon name={CONTACT_ICON} className="size-4" />
                    {CONTACT_LABEL}
                  </CtaLink>
                  <div className="mt-auto pt-8">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-white/74">
                      เหมาะสำหรับ: เจ้าของธุรกิจ SME, ผู้นำเข้า, เจ้าของแบรนด์,
                      ทีมจัดซื้อ, ผู้บริหารที่ต้องการทริปส่วนตัว
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* FAQ — on cream, off the old red band */}
          <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <CenteredHeading index="10" label="FAQ" title="คำถามที่พบบ่อย" />
              <div className="reveal-stagger mt-12 space-y-3">
                {faqs.map(([question, answer]) => (
                  <details
                    key={question}
                    className="group rounded-2xl border border-sand/70 bg-white p-5 shadow-[var(--shadow-soft)] transition open:border-tour-red/30"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4">
                      <span className="font-heading text-lg font-bold text-charcoal">
                        {question}
                      </span>
                      <span className="faq-marker mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-tour-red/10 text-lg text-tour-red transition">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 leading-8 text-ink">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA — contained dark card, third intentional dark moment */}
          <section className="px-4 pb-24 sm:px-6 lg:px-8">
            <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-espresso px-6 py-16 text-center text-white shadow-[var(--shadow-lift)] sm:px-12 sm:py-20">
              <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,195,95,0.18),transparent_55%),radial-gradient(circle_at_85%_90%,rgba(239,47,55,0.22),transparent_45%)]" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-light">
                  Ryu Gege Tour
                </p>
                <h2 className="font-heading mx-auto mt-5 max-w-3xl text-3xl font-black leading-[1.12] sm:text-[2.75rem]">
                  พร้อมวางแผนทริปธุรกิจจีนให้คุ้มค่ากว่าการไปลองผิดลองถูกหรือยัง?
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/74">
                  เริ่มจากคุยเป้าหมายก่อน ริวจะช่วยประเมินว่าเมือง เส้นทาง จำนวนวัน
                  และรูปแบบบริการไหนเหมาะที่สุด
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <CtaLink
                    href={CONTACT_HREF}
                    variant="line"
                  >
                    <Icon name={CONTACT_ICON} className="size-4" />
                    {CONTACT_LABEL}
                  </CtaLink>
                  <CtaLink href="#inquiry" variant="ghost">
                    กรอกข้อมูลทริป
                  </CtaLink>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-espresso pb-24 pt-16 text-white sm:pb-14">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3">
                <BrandMark />
                <p className="font-heading text-xl font-black text-white">
                  Ryu Gege Tour
                </p>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
                ทริปธุรกิจจีน ดูงานแฟร์ โรงงาน และประสานงานจีน-ไทย โดยทีม founder-led
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="grid size-9 place-items-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-gold hover:text-gold"
                  >
                    <Icon name={link.icon} className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-white/50">
                Links
              </p>
              <div className="mt-4 space-y-2.5 text-sm text-white/70">
                {navItems
                  .filter((item) => item.href)
                  .slice(0, 5)
                  .map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block transition hover:text-gold"
                    >
                      {item.label}
                    </a>
                  ))}
              </div>
            </div>
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-white/50">
                Service Areas
              </p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Guangzhou / Canton Fair
                <br />
                Xi&apos;an (Culture)
                <br />
                Yunnan (Hybrid)
                <br />
                Chaozhou (Teochew)
                <br />
                Private / Custom Route
              </p>
            </div>
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-white/50">
                Contact
              </p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Facebook: Ryu Gege
                <br />
                โทร: <a href="tel:0928422121">092 842 2121</a>
                <br />
                สอบถามและจองทริปผ่าน LINE Official
                <br />
                <a
                  href={LINE_URL}
                  className="font-bold text-gold transition hover:text-gold-light"
                >
                  เพิ่มเพื่อนเพื่อปรึกษาทริป
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* Mobile sticky CTA bar */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sand/70 bg-cream/95 p-3 backdrop-blur sm:hidden">
          <div className="mx-auto flex max-w-md gap-2">
            <CtaLink
              href={CONTACT_HREF}
              variant="line"
              className="flex-1"
            >
              <Icon name={CONTACT_ICON} className="size-4" />
              LINE Official
            </CtaLink>
            <CtaLink href="#trips" variant="outline" className="flex-1">
              ดูทริป
            </CtaLink>
          </div>
        </div>

        {/* Desktop floating LINE button */}
        <a
          href={CONTACT_HREF}
          aria-label="ปรึกษาทาง LINE Official"
          className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-line-green px-5 py-4 text-sm font-bold text-white shadow-[var(--shadow-line)] transition hover:bg-line-green-dark lg:inline-flex"
        >
          <Icon name={CONTACT_ICON} className="size-5" />
          LINE Official
        </a>
      </div>
    </>
  );
}
