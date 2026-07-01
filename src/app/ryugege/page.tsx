import type { Metadata } from "next";
import { InquiryForm } from "./InquiryForm";
import { LINE_URL } from "./constants";

export const metadata: Metadata = {
  title: "ทัวร์ธุรกิจจีน พาดูโรงงาน Canton Fair ไกด์จีนไทยส่วนตัว | RyuGeGe",
  description:
    "บริการทัวร์ธุรกิจจีน พาเดินงานแฟร์ ดูโรงงาน พบซัพพลายเออร์ และประสานงานจีน-ไทยโดย RyuGeGe เหมาะสำหรับ SME เจ้าของธุรกิจ และฝ่ายจัดซื้อที่ต้องการไปจีนอย่างมั่นใจ",
  openGraph: {
    title:
      "ทัวร์ธุรกิจจีน พาดูโรงงาน Canton Fair ไกด์จีนไทยส่วนตัว | RyuGeGe",
    description:
      "บริการทัวร์ธุรกิจจีน พาเดินงานแฟร์ ดูโรงงาน พบซัพพลายเออร์ และประสานงานจีน-ไทยโดย RyuGeGe",
    type: "website",
  },
};

const navItems = [
  ["ปัญหาที่ช่วยแก้", "#problems"],
  ["บริการ", "#services"],
  ["เส้นทาง", "#destinations"],
  ["ทำไมต้องริว", "#founder"],
  ["FAQ", "#faq"],
] as const;

const trustChips = [
  "Canton Fair & Factory Visit",
  "จีน–ไทย–อังกฤษ",
  "Business Facilitation",
  "Private Trip",
  "Guangzhou / Xi’an / Yunnan",
];

const quickProof = [
  "เรียนและใช้ชีวิตในจีน",
  "พื้นฐานวิศวกรรมการบิน",
  "ล่ามจีน–ไทย–อังกฤษในบริบทธุรกิจ",
  "ดูแลแบบ Private และเป็นระบบ",
];

const creatorProof = [
  "Ryu Gege Chinese Learning Creator",
  "เพจสอนภาษาจีนและศัพท์ชีวิตประจำวัน",
  "Local service · Bangkok",
  "Chinese culture content",
];

const socialLinks = [
  {
    label: "Facebook",
    value: "Ryu Gege",
    href: "https://www.facebook.com/ryupuriwat/",
  },
  {
    label: "Instagram",
    value: "ryugegechannel",
    href: "https://www.instagram.com/ryugegechannel",
  },
  {
    label: "Website",
    value: "ryu-gege.com",
    href: "https://www.ryu-gege.com/",
  },
  {
    label: "Email",
    value: "ryupuriwat2000@gmail.com",
    href: "mailto:ryupuriwat2000@gmail.com",
  },
  {
    label: "Phone",
    value: "092 842 2121",
    href: "tel:0928422121",
  },
];

const painPoints = [
  {
    title: "กำแพงภาษา",
    copy: "ล่ามทั่วไปอาจแปลภาษาได้ แต่ไม่เข้าใจเป้าหมายธุรกิจ การต่อรอง หรือคำถามที่ควรถามโรงงาน",
  },
  {
    title: "โรงงานจริงหรือแค่หน้าร้าน?",
    copy: "ข้อมูลในเว็บอาจดูน่าเชื่อถือ แต่เมื่อไปถึงจริงอาจไม่ตรงกับภาพที่เห็น ต้องมีคนช่วยสังเกตและถามให้ถูกจุด",
  },
  {
    title: "เสียเวลาเพราะแผนไม่ชัด",
    copy: "การนัดหมาย เดินทาง รถ ที่พัก เส้นทาง งานแฟร์ และโรงงาน ถ้าไม่วางระบบก่อน อาจเสียเวลาโดยไม่จำเป็น",
  },
  {
    title: "คุยจบแล้วไม่มีคนตามต่อ",
    copy: "หลังกลับไทย หลายดีลสะดุดเพราะการสื่อสาร เอกสาร หรือการติดตามรายละเอียดกับซัพพลายเออร์",
  },
];

const pillars = [
  {
    title: "Business Context Translation",
    copy: "ช่วยแปลและสื่อสารโดยคำนึงถึงเป้าหมายธุรกิจ ไม่ใช่แปลแบบคำต่อคำ",
  },
  {
    title: "Factory & Fair Navigation",
    copy: "ช่วยวางแผนการเดินงานแฟร์ นัดหมายโรงงาน และจัดลำดับความสำคัญของสิ่งที่ควรดู",
  },
  {
    title: "Safe Facilitation",
    copy: "ช่วยประสาน ติดต่อ และติดตามงานในขอบเขตที่ตกลงกัน โดยไม่รับความเสี่ยงแทนการตัดสินใจจัดซื้อของลูกค้า",
  },
];

const comparisonRows = [
  ["วางแผนเส้นทาง", "ต้องจัดเอง", "ช่วยเฉพาะบางส่วน", "วางแผนตามเป้าหมายทริป"],
  ["เข้าใจบริบทธุรกิจ", "ขึ้นอยู่กับประสบการณ์", "อาจไม่ครอบคลุม", "โฟกัสการคุยธุรกิจจีน-ไทย"],
  ["การคุยกับโรงงาน", "เสี่ยงถามไม่ครบ", "ช่วยแปลภาษา", "ช่วยเตรียมคำถามและสรุปประเด็น"],
  ["การดูแลการเดินทาง", "จัดการเองทั้งหมด", "มักไม่ใช่ขอบเขตหลัก", "ช่วยประสานรถ ที่พัก และนัดหมาย"],
  ["การประสานงานหลังจบทริป", "ต้องตามเอง", "แล้วแต่ตกลง", "มีบริการเสริมตาม Scope"],
  ["ความสบายใจ", "ขึ้นอยู่กับการเตรียมตัว", "ดีขึ้นด้านภาษา", "มีคนช่วยคิดและดูหน้างาน"],
];

const services = [
  {
    title: "Business Trip: Canton Fair / Factory Tour",
    badge: "แนะนำสำหรับ SME และฝ่ายจัดซื้อ",
    price: "เริ่มต้น ฿28,900 / ท่าน",
    note: "สำหรับกรุ๊ป 4–6 คน หรือตามเงื่อนไขทริป",
    bestFor: [
      "เจ้าของธุรกิจ SME",
      "ผู้นำเข้าสินค้า",
      "ฝ่ายจัดซื้อ",
      "คนที่ต้องการดูโรงงานหรือเดินงานแฟร์",
    ],
    includes: [
      "ช่วยวางแผนเมืองและเส้นทาง",
      "ช่วยเตรียมคำถามก่อนพบซัพพลายเออร์",
      "ล่ามจีน–ไทยในบริบทธุรกิจ",
      "ช่วยประสานงานการเดินทาง รถ ที่พัก และนัดหมาย",
      "แนะนำแนวทางคุยเรื่องสินค้า ราคา MOQ และการสื่อสารต่อ",
    ],
    cta: "ปรึกษาทริปธุรกิจ",
    featured: true,
  },
  {
    title: "Premium Private Leisure",
    badge: "สำหรับครอบครัวและผู้บริหาร",
    price: "เริ่มต้น ฿18,900 / ท่าน",
    bestFor: [
      "ครอบครัว",
      "กลุ่มเพื่อน",
      "ผู้บริหารที่อยากเที่ยวจีนแบบส่วนตัว",
    ],
    includes: [
      "ทริปส่วนตัว ไม่เร่งรีบ",
      "รถและแผนเดินทางตามความเหมาะสม",
      "ร้านอาหารและสถานที่ที่คัดให้",
      "ดูแลภาษาและการสื่อสารตลอดทริป",
    ],
    cta: "คุยแผนทริปส่วนตัว",
  },
  {
    title: "Post-Trip Safe Facilitation",
    badge: "บริการเสริมหลังจบทริป",
    price: "คิดตามโปรเจกต์ / รายเดือน",
    bestFor: [
      "ลูกค้าที่ต้องติดตามซัพพลายเออร์",
      "ลูกค้าที่ต้องการคนช่วยสื่อสารหลังกลับไทย",
    ],
    includes: [
      "ช่วยประสานข้อความและเอกสาร",
      "ช่วยติดตามประเด็นที่คุยไว้",
      "ช่วยแปลหรือสรุปการสื่อสาร",
      "จำกัดขอบเขตตาม Scope of Work",
    ],
    cta: "สอบถามบริการประสานงาน",
  },
];

const destinations = [
  {
    title: "Guangzhou: Canton Fair & Business Sourcing",
    description:
      "เหมาะสำหรับเจ้าของธุรกิจที่ต้องการเดินงานแฟร์ ดูโรงงาน พบซัพพลายเออร์ และสำรวจโอกาสนำเข้าสินค้า",
    tags: ["Canton Fair", "Factory Tour", "Supplier Meeting", "Business Sourcing"],
    visual: "Guangzhou",
  },
  {
    title: "Xi’an: Premium Leisure & Cultural Insight",
    description:
      "เหมาะสำหรับครอบครัว ผู้บริหาร หรือกลุ่มที่อยากสัมผัสจีนเชิงวัฒนธรรมแบบส่วนตัว พร้อมคนดูแลที่เข้าใจจีนจริง",
    tags: ["Private Leisure", "Culture", "Premium Travel", "Local Experience"],
    visual: "Xi’an",
  },
  {
    title: "Yunnan: Hybrid Business + Leisure",
    description:
      "เหมาะสำหรับทริปที่ต้องการผสมระหว่างงาน ธุรกิจ สินค้าเกษตร วัฒนธรรม และการพักผ่อนในบรรยากาศจีนตะวันตกเฉียงใต้",
    tags: ["Hybrid Trip", "Business + Leisure", "Local Market", "Custom Route"],
    visual: "Yunnan",
  },
];

const processSteps = [
  ["คุยเป้าหมาย", "คุณบอกเมือง สินค้า โรงงาน งานแฟร์ งบประมาณ และช่วงเวลาที่ต้องการ"],
  ["ประเมินความเหมาะสม", "ริวช่วยดูว่าเส้นทาง แผน และจำนวนวันควรวางอย่างไร"],
  ["ออกแบบแผนเดินทาง", "วางแผนรถ ที่พัก เส้นทาง นัดหมาย และสิ่งที่ต้องเตรียมก่อนเดินทาง"],
  ["ดูแลหน้างาน", "ช่วยสื่อสาร แปล ประสาน และดูแลการเดินทางระหว่างทริป"],
  ["สรุปและติดตามต่อ", "หลังจบทริปสามารถต่อยอดเป็นบริการประสานงานตาม Scope ที่ตกลงกัน"],
];

const credentials = [
  "ปริญญาตรีและโทด้าน Aeronautical Engineering จาก Northwestern Polytechnical University ประเทศจีน",
  "เคยได้รับทุนการศึกษาเต็มจำนวนในจีน",
  "เคยเป็นนักเรียนแลกเปลี่ยน AFS ประเทศจีน",
  "กำลังศึกษาปริญญาโทด้าน Social Media Technology",
  "มีประสบการณ์ล่ามจีน–ไทย–อังกฤษในบริบทธุรกิจ อุตสาหกรรม และวิศวกรรม",
  "เข้าใจทั้งภาษา วัฒนธรรม และวิธีสื่อสารกับคนจีนในสถานการณ์จริง",
  "Founder-led service: ปีแรกดูแลคุณภาพด้วยตัวริวเองเป็นหลัก",
];

const faqs = [
  [
    "บริการนี้ต่างจากล่ามทั่วไปอย่างไร?",
    "ล่ามทั่วไปอาจเน้นแปลภาษา แต่บริการของ RyuGeGe เน้นการประสานงานและการสื่อสารในบริบทธุรกิจ เช่น การเตรียมคำถามก่อนเข้าโรงงาน การช่วยสรุปประเด็น และการช่วยให้คุณเข้าใจสถานการณ์หน้างานมากขึ้น",
  ],
  [
    "รับประกันว่าจะได้ซัพพลายเออร์ดีหรือได้กำไรไหม?",
    "ไม่รับประกันผลกำไรหรือคุณภาพซัพพลายเออร์แทนการตัดสินใจของลูกค้า บริการนี้ช่วยลดความเสี่ยงด้านภาษา การเดินทาง และการสื่อสาร แต่การตัดสินใจทางธุรกิจยังเป็นของลูกค้า",
  ],
  [
    "ไป Canton Fair อย่างเดียวได้ไหม?",
    "ได้ สามารถออกแบบทริปเฉพาะ Canton Fair หรือผสมกับการดูโรงงาน พบซัพพลายเออร์ และสำรวจตลาดเพิ่มเติมได้",
  ],
  [
    "ถ้ายังไม่รู้ว่าจะไปเมืองไหนดี เริ่มอย่างไร?",
    "เริ่มจากคุยเป้าหมายสินค้า งบประมาณ และช่วงเวลาเดินทาง ริวจะช่วยประเมินเบื้องต้นว่า Guangzhou, Xi’an หรือ Yunnan เหมาะกับเป้าหมายของคุณมากที่สุด",
  ],
  [
    "บริการรวมตั๋วเครื่องบินหรือไม่?",
    "รายละเอียดขึ้นอยู่กับแพ็กเกจและขอบเขตงาน สามารถออกแบบเป็นทริปที่ช่วยดูแลตั้งแต่สนามบิน รถ ที่พัก และแผนเดินทาง หรือเฉพาะบางส่วนตามที่ตกลงกัน",
  ],
  [
    "หลังจบทริปมีคนช่วยติดตามซัพพลายเออร์ต่อไหม?",
    "มีบริการ Safe Facilitation แบบเสริม สำหรับการประสานงานหรือติดตามข้อความ/เอกสารในขอบเขตที่ตกลงกัน โดยไม่ใช่บริการรับผิดชอบการจัดซื้อเต็มรูปแบบ",
  ],
  [
    "เหมาะกับใครมากที่สุด?",
    "เหมาะกับเจ้าของธุรกิจ SME, ผู้นำเข้าสินค้า, ผู้บริหารฝ่ายจัดซื้อ, ครอบครัวหรือผู้บริหารที่ต้องการทริปจีนแบบ Private และคนที่ต้องการผู้ช่วยสื่อสารจีน-ไทยที่เข้าใจบริบทจริง",
  ],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "RyuGeGe China Tour",
  sameAs: [
    "https://www.facebook.com/ryupuriwat/",
    "https://www.instagram.com/ryugegechannel",
    "https://www.ryu-gege.com/",
  ],
  description:
    "Private China business tour and safe facilitation for Thai SME owners, importers, and purchasing executives.",
  areaServed: ["Guangzhou", "Xi’an", "Yunnan", "China", "Thailand"],
  serviceType: [
    "China private business tour",
    "Factory visit facilitation",
    "Canton Fair business trip",
    "Chinese Thai interpretation support",
  ],
  founder: {
    "@type": "Person",
    name: "Ryu Puriwat Supapitakpong",
    alternateName: "ภูริวัจน์ ศุภพิทักษ์พงษ์",
    url: "https://www.supapitakpong.com/members/ryu-puriwat-supapitakpong",
  },
};

function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "nav";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-[#D8242F] text-white shadow-[0_14px_30px_rgba(216,36,47,0.28)] hover:bg-[#B91E28]",
    secondary:
      "border border-[#B88A44] bg-white text-[#0B1F3A] hover:bg-[#FFF4C8]",
    nav: "bg-[#0B1F3A] text-white hover:bg-[#16365F] hover:shadow-[0_10px_24px_rgba(216,36,47,0.18)]",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-center text-sm font-bold transition focus:outline-none focus:ring-[3px] focus:ring-[#B88A44]/30 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${
            light ? "text-[#DDBB81]" : "text-[#B88A44]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-[#0B1F3A]"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-4 text-lg leading-8 ${
            light ? "text-white/78" : "text-[#52616B]"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function LineIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-md border border-[#D9E2EC] bg-white"
    >
      <span className="block size-4 border-l-2 border-t-2 border-[#B88A44]" />
    </span>
  );
}

function HeroVisual() {
  return (
    <figure
      className="relative rounded-lg border border-white/20 bg-[#0B1F3A] p-4 shadow-[0_28px_80px_rgba(11,31,58,0.24)]"
      aria-label="ริว ผู้ประสานงานทัวร์ธุรกิจจีนสำหรับเจ้าของธุรกิจไทย"
    >
      <div
        role="img"
        aria-label="ริว ผู้ประสานงานทัวร์ธุรกิจจีนสำหรับเจ้าของธุรกิจไทย"
        className="relative min-h-[460px] overflow-hidden rounded-md bg-[#F7F8FA]"
      >
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,#FFE985_0%,#F8B8C7_48%,#D8242F_100%)]" />
        <div className="absolute left-8 right-8 top-16 grid grid-cols-4 gap-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="h-12 rounded-sm border border-[#CBD5E1] bg-white/90"
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#D8E1EC]" />
        <div className="absolute bottom-24 left-7 right-7 h-16 rounded-md border border-[#B88A44]/40 bg-white/90 p-3">
          <div className="h-2 w-24 bg-[#B88A44]" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <span className="h-2 bg-[#D9E2EC]" />
            <span className="h-2 bg-[#D9E2EC]" />
            <span className="h-2 bg-[#D9E2EC]" />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 h-56 w-36 -translate-x-1/2 rounded-t-[80px] bg-[#0B1F3A] shadow-[0_20px_45px_rgba(11,31,58,0.22)]" />
        <div className="absolute bottom-52 left-1/2 size-24 -translate-x-1/2 rounded-full bg-[#E9B98D]" />
        <div className="absolute bottom-[9.75rem] left-[calc(50%-96px)] h-24 w-24 rotate-[-8deg] rounded-md bg-[#16365F]" />
        <div className="absolute bottom-[9.5rem] right-[calc(50%-104px)] h-24 w-24 rotate-[8deg] rounded-md bg-[#16365F]" />
        <div className="absolute left-5 top-5 rounded-md bg-white/94 px-4 py-3 text-sm font-bold text-[#0B1F3A] shadow-sm">
          Guangzhou
          <span className="mt-1 block text-xs font-semibold text-[#B88A44]">
            Canton Fair + Factory
          </span>
        </div>
        <div className="absolute right-5 top-5 flex items-center gap-3 rounded-md bg-[#0B1F3A] px-4 py-3 text-white shadow-sm">
          <div className="grid size-12 place-items-center rounded-full bg-[#FFD24A] text-sm font-black text-[#D8242F] ring-4 ring-white/30">
            RYU
          </div>
          <div>
            <span className="block text-sm font-bold">Ryu Gege</span>
            <span className="block text-xs font-semibold text-[#FFD24A]">
              中文 · ธุรกิจ
            </span>
          </div>
        </div>
        <div className="absolute left-6 top-32 rounded-md border border-[#F7B4C6]/70 bg-white/92 px-4 py-3 text-sm font-bold text-[#0B1F3A] shadow-sm">
          ศัพท์จีนหน้างาน
          <span className="mt-1 block text-xs font-semibold text-[#D8242F]">
            MOQ · 报价 · 工厂
          </span>
        </div>
        <div className="absolute bottom-5 right-5 rounded-md bg-[#0B1F3A] px-4 py-3 text-sm font-bold text-white shadow-sm">
          Thai–Chinese
          <span className="mt-1 block text-xs font-semibold text-[#DDBB81]">
            Interpretation
          </span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold text-white sm:grid-cols-4">
        {["Factory Visit", "Supplier Meeting", "Thai–Chinese Interpretation", "Safe Facilitation"].map(
          (item) => (
            <span
              key={item}
              className="rounded-md border border-white/15 bg-white/8 px-3 py-2 text-center"
            >
              {item}
            </span>
          ),
        )}
      </div>
    </figure>
  );
}

function ConceptVisual({
  title,
  alt,
  mode = "problem",
}: {
  title: string;
  alt: string;
  mode?: "problem" | "solution" | "founder";
}) {
  const isSolution = mode === "solution";
  const isFounder = mode === "founder";

  return (
    <figure
      className="rounded-lg border border-[#D9E2EC] bg-white p-4 shadow-[0_16px_52px_rgba(11,31,58,0.08)]"
      aria-label={alt}
    >
      <div
        role="img"
        aria-label={alt}
        className="relative min-h-[300px] overflow-hidden rounded-md bg-[#F7F8FA]"
      >
        <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(90deg,#FFF1A6_0%,#F7B4C6_55%,#FCE7EC_100%)]" />
        <div className="absolute left-6 top-7 rounded-md border border-[#D9E2EC] bg-white p-4 shadow-sm">
          <div className="h-2 w-28 bg-[#B88A44]" />
          <div className="mt-3 space-y-2">
            <span className="block h-2 w-36 bg-[#D9E2EC]" />
            <span className="block h-2 w-28 bg-[#D9E2EC]" />
            <span className="block h-2 w-32 bg-[#D9E2EC]" />
          </div>
        </div>
        <div className="absolute right-6 top-8 rounded-md border border-[#F7B4C6]/70 bg-white/92 px-4 py-3 text-sm font-bold text-[#0B1F3A] shadow-sm">
          คำถามโรงงาน
          <span className="mt-1 block text-xs font-semibold text-[#D8242F]">
            工厂 · 价格 · 交期
          </span>
        </div>
        <div className="absolute bottom-8 left-7 h-32 w-28 rounded-t-[54px] bg-[#0B1F3A]" />
        <div className="absolute bottom-[8.75rem] left-14 size-16 rounded-full bg-[#E9B98D]" />
        <div className="absolute bottom-10 right-8 h-28 w-24 rounded-t-[48px] bg-[#16365F]" />
        <div className="absolute bottom-[8.5rem] right-12 size-14 rounded-full bg-[#DFA675]" />
        {isSolution || isFounder ? (
          <div className="absolute left-1/2 top-28 -translate-x-1/2 rounded-md border border-[#B88A44]/40 bg-white px-4 py-3 text-sm font-bold text-[#0B1F3A] shadow-sm">
            แปลและสรุปประเด็น
          </div>
        ) : (
          <div className="absolute right-7 top-24 rounded-md border border-[#E4572E]/30 bg-white px-4 py-3 text-sm font-bold text-[#0B1F3A] shadow-sm">
            เอกสารจีน?
          </div>
        )}
        {isFounder ? (
          <div className="absolute bottom-5 left-5 right-5 rounded-md bg-[#0B1F3A] px-4 py-3 text-white">
            <p className="font-heading text-lg font-bold">Ryu Puriwat</p>
            <p className="text-sm text-white/72">
              Aeronautical Engineering + Chinese Business Context
            </p>
          </div>
        ) : null}
      </div>
      <figcaption className="mt-3 text-sm font-semibold text-[#52616B]">
        {title}
      </figcaption>
    </figure>
  );
}

function DestinationVisual({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} private China tour placeholder visual`}
      className="relative h-48 overflow-hidden rounded-md bg-[#F7F8FA]"
    >
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[#D8E1EC]" />
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,#FFFFFF_0%,#FFF3B0_34%,#F7B4C6_65%,#EEF3F8_100%)]" />
      <div className="absolute bottom-10 left-7 h-24 w-20 rounded-t-md border border-[#B88A44]/30 bg-white/80" />
      <div className="absolute bottom-10 left-[7.5rem] h-32 w-24 rounded-t-md border border-[#D9E2EC] bg-white/70" />
      <div className="absolute bottom-10 right-9 h-20 w-28 rounded-t-md border border-[#D9E2EC] bg-white/75" />
      <div className="absolute left-5 top-5 rounded-md bg-[#0B1F3A] px-3 py-2 text-sm font-bold text-white">
        {label}
      </div>
      <div className="absolute right-5 top-5 rounded-full bg-[#D8242F] px-3 py-1.5 text-xs font-black text-white">
        中国
      </div>
      <div className="absolute bottom-6 right-6 h-2 w-28 bg-[#B88A44]" />
      <div className="absolute bottom-12 left-5 rounded-md bg-white/90 px-3 py-2 text-xs font-bold text-[#0B1F3A] shadow-sm">
        Thai briefing + China route
      </div>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-6 text-[#52616B]">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-sm bg-[#B88A44]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function RyuGeGePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white text-[#1F2933]">
        <header className="sticky top-0 z-50 border-b border-[#D9E2EC] bg-white/94 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <a href="#top" className="min-w-0" aria-label="RyuGeGe China Tour">
              <span className="font-heading block text-lg font-bold leading-tight text-[#0B1F3A]">
                RyuGeGe China Tour
              </span>
              <span className="hidden text-xs font-semibold text-[#B88A44] sm:block">
                Ryu Gege · Private Business Tour & Safe Facilitation
              </span>
            </a>
            <nav className="hidden items-center gap-6 text-sm font-semibold text-[#52616B] lg:flex">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} className="transition hover:text-[#0B1F3A]">
                  {label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:block">
              <CtaLink href={LINE_URL} variant="nav">
                ปรึกษาฟรีทาง LINE
              </CtaLink>
            </div>
            <details className="group relative lg:hidden">
              <summary className="flex size-11 cursor-pointer items-center justify-center rounded-md border border-[#D9E2EC] bg-white text-[#0B1F3A]">
                <span className="sr-only">เปิดเมนู</span>
                <span className="flex flex-col gap-1.5">
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                </span>
              </summary>
              <div className="absolute right-0 top-[3.25rem] w-72 rounded-lg border border-[#D9E2EC] bg-white p-3 shadow-[0_18px_50px_rgba(11,31,58,0.14)]">
                {navItems.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="block rounded-md px-3 py-3 text-sm font-semibold text-[#0B1F3A] hover:bg-[#F7F8FA]"
                  >
                    {label}
                  </a>
                ))}
                <CtaLink href={LINE_URL} variant="primary" className="mt-3 w-full">
                  ปรึกษาฟรีทาง LINE
                </CtaLink>
              </div>
            </details>
          </div>
        </header>

        <main id="top">
          <section className="relative overflow-hidden bg-[#0B1F3A]">
            <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
              <div className="self-center">
                <p className="mb-4 inline-flex rounded-md border border-[#DDBB81]/40 bg-white/10 px-3 py-2 text-sm font-bold text-[#F7D8A6]">
                  China Private Business Tour สำหรับเจ้าของธุรกิจไทย
                </p>
                <h1 className="font-heading max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  พาธุรกิจคุณบุกจีนอย่างมั่นใจ ไม่ต้องกลัวคุยไม่รู้เรื่อง เสียเวลา หรือเลือกโรงงานผิด
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
                  บริการทัวร์ธุรกิจจีนและการประสานงานแบบ Private โดย ริว
                  (RyuGeGe) ผู้มีพื้นฐานวิศวกรรม เรียนและใช้ชีวิตในจีน
                  เข้าใจภาษา วัฒนธรรม และบริบทการคุยธุรกิจจีน-ไทย
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <CtaLink href={LINE_URL}>ปรึกษาแผนเดินทางฟรี</CtaLink>
                  <CtaLink href="#services" variant="secondary">
                    ดูแพ็กเกจทัวร์ธุรกิจ
                  </CtaLink>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/68">
                  คุยเบื้องต้นฟรี เพื่อประเมินเมือง เป้าหมาย งบประมาณ
                  และความเหมาะสมของทริป
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {trustChips.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/16 bg-white/8 px-3 py-2 text-sm font-semibold text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-7 max-w-2xl rounded-lg border border-white/14 bg-white/8 p-4 backdrop-blur">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="grid size-16 shrink-0 place-items-center rounded-full bg-[#FFD24A] text-lg font-black text-[#D8242F] ring-4 ring-white/14">
                      RYU
                    </div>
                    <div>
                      <p className="font-heading text-lg font-bold text-white">
                        จาก Ryu Gege เพจสอนภาษาจีน สู่ผู้ช่วยพาคุยธุรกิจจีนให้เข้าใจง่ายขึ้น
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        บุคลิกครูจีนที่อธิบายเป็นระบบ ช่วยให้การเตรียมคำถาม
                        การแปล และการสรุปหน้างานไม่แข็งหรือไกลตัวจนเกินไป
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <HeroVisual />
            </div>
          </section>

          <section className="border-y border-[#D9E2EC] bg-white">
            <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
              {quickProof.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-[#D9E2EC] bg-[#F7F8FA] px-4 py-3"
                >
                  <span className="font-heading text-sm font-bold text-[#B88A44]">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-semibold text-[#0B1F3A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#FFF8D8] py-14 sm:py-16">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div className="rounded-lg border border-[#F7B4C6]/60 bg-white p-5 shadow-[0_16px_50px_rgba(216,36,47,0.08)]">
                <div className="flex items-center gap-4">
                  <div className="grid size-20 shrink-0 place-items-center rounded-full bg-[#FFD24A] text-xl font-black text-[#D8242F] ring-8 ring-[#F7B4C6]/24">
                    RYU
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D8242F]">
                      Ryu Gege public profile
                    </p>
                    <h2 className="font-heading mt-2 text-2xl font-bold text-[#0B1F3A]">
                      เพจภาษาจีนที่ทำให้เรื่องจีนเข้าใจง่ายขึ้น
                    </h2>
                  </div>
                </div>
                <p className="mt-5 leading-8 text-[#52616B]">
                  บน Facebook, Ryu Gege วางตัวเป็นเพจสอนภาษาจีนและศัพท์ในชีวิตประจำวัน
                  จุดนี้ช่วยเติมความเป็นมนุษย์ให้บริการทัวร์ธุรกิจ:
                  ไม่ใช่แค่พาเดินทาง แต่ช่วยอธิบายภาษา วัฒนธรรม และจังหวะการสื่อสารให้ทีมไทยเข้าใจร่วมกัน
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {creatorProof.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white bg-white/86 p-5 shadow-sm"
                  >
                    <span className="mb-4 block h-1.5 w-14 rounded-full bg-[#D8242F]" />
                    <p className="font-heading text-lg font-bold leading-7 text-[#0B1F3A]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="problems" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                title="ไปจีนเองอาจดูง่าย แต่สำหรับเรื่องธุรกิจ ความผิดพลาดเล็ก ๆ อาจทำให้เสียทั้งเวลาและต้นทุน"
                copy="โดยเฉพาะเมื่อคุณต้องไปดูโรงงาน เดินงานแฟร์ เจรจาราคา หรือประเมินซัพพลายเออร์ที่ไม่เคยรู้จักมาก่อน"
              />
              <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <ConceptVisual
                  title="ภาพจำลอง: เจ้าของธุรกิจไทยกำลังเจอข้อมูลจีนหลายแหล่งก่อนนัดโรงงาน"
                  alt="เจ้าของธุรกิจไทยสับสนกับเอกสารจีน แผนที่ ที่อยู่โรงงาน และข้อความจากซัพพลายเออร์"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {painPoints.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-lg border border-[#D9E2EC] bg-[#F7F8FA] p-5"
                    >
                      <LineIcon />
                      <h3 className="font-heading mt-4 text-xl font-bold text-[#0B1F3A]">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[#52616B]">{item.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#F7F8FA] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Safe Facilitation"
                title="RyuGeGe ช่วยเปลี่ยนทริปจีนของคุณให้เป็นการเดินทางธุรกิจที่มีแผน มีคนช่วยคิด และมีคนช่วยประสาน"
                copy="เราไม่ได้ขายแค่ทัวร์ แต่ช่วยให้คุณเข้าใจสถานการณ์หน้างาน คุยธุรกิจได้ชัดขึ้น และลดความเสี่ยงจากการเดินทางที่ไม่พร้อม"
              />
              <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="grid gap-4">
                  {pillars.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-sm"
                    >
                      <h3 className="font-heading text-xl font-bold text-[#0B1F3A]">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[#52616B]">{item.copy}</p>
                    </article>
                  ))}
                  <div className="rounded-lg border border-[#E8D3B0] bg-[#FFF8EC] p-5 text-sm leading-7 text-[#6B4A1E]">
                    หมายเหตุ: บริการนี้เป็นการประสานงาน แปลภาษา วางแผน
                    และช่วยสื่อสาร ไม่ใช่บริการรับประกันผลกำไรหรือรับผิดชอบการจัดซื้อทั้งหมดแทนลูกค้า
                  </div>
                </div>
                <ConceptVisual
                  mode="solution"
                  title="ภาพจำลอง: ริวช่วยสื่อสารระหว่างเจ้าของธุรกิจไทยและซัพพลายเออร์จีน"
                  alt="ริวกำลังช่วยแปลและประสานงานระหว่างเจ้าของธุรกิจไทยกับซัพพลายเออร์จีนในห้องประชุมหรือโรงงาน"
                />
              </div>
            </div>
          </section>

          <section className="bg-[#0B1F3A] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                light
                eyebrow="Compare"
                title="เปรียบเทียบรูปแบบการไปจีนเพื่อธุรกิจ"
                copy="วางภาพรวมอย่างตรงไปตรงมา เพื่อช่วยเลือกวิธีที่เหมาะกับเป้าหมายและความพร้อมของทีม"
              />
              <div className="mt-10 overflow-hidden rounded-lg border border-white/14 bg-white">
                <div className="grid grid-cols-4 bg-[#F7F8FA] text-sm font-bold text-[#0B1F3A]">
                  <div className="p-4">หัวข้อ</div>
                  <div className="p-4">ไปเอง</div>
                  <div className="p-4">จ้างล่ามทั่วไป</div>
                  <div className="p-4">ไปกับ RyuGeGe</div>
                </div>
                {comparisonRows.map((row) => (
                  <div
                    key={row[0]}
                    className="grid grid-cols-1 border-t border-[#D9E2EC] text-sm leading-6 text-[#52616B] sm:grid-cols-4"
                  >
                    {row.map((cell, index) => (
                      <div
                        key={`${row[0]}-${cell}`}
                        className={`p-4 ${
                          index === 0
                            ? "font-bold text-[#0B1F3A]"
                            : index === 3
                              ? "bg-[#FFF8EC] font-semibold text-[#0B1F3A]"
                              : ""
                        }`}
                      >
                        {cell}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading title="เลือกบริการที่เหมาะกับเป้าหมายของคุณ" />
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {services.map((service) => (
                  <article
                    key={service.title}
                    className={`rounded-lg border p-6 shadow-sm ${
                      service.featured
                        ? "border-[#B88A44] bg-[#FFF8EC]"
                        : "border-[#D9E2EC] bg-white"
                    }`}
                  >
                    <span className="rounded-md bg-[#0B1F3A] px-3 py-2 text-xs font-bold text-white">
                      {service.badge}
                    </span>
                    <h3 className="font-heading mt-5 text-2xl font-bold leading-tight text-[#0B1F3A]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-2xl font-bold text-[#E4572E]">
                      {service.price}
                    </p>
                    {"note" in service ? (
                      <p className="mt-2 text-sm text-[#52616B]">{service.note}</p>
                    ) : null}
                    <div className="mt-6">
                      <p className="mb-3 text-sm font-bold text-[#0B1F3A]">
                        Best for
                      </p>
                      <CheckList items={service.bestFor} />
                    </div>
                    <div className="mt-6">
                      <p className="mb-3 text-sm font-bold text-[#0B1F3A]">
                        Includes
                      </p>
                      <CheckList items={service.includes} />
                    </div>
                    <CtaLink href={LINE_URL} className="mt-7 w-full">
                      {service.cta}
                    </CtaLink>
                  </article>
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-[#52616B]">
                ราคาขึ้นอยู่กับเมือง จำนวนวัน จำนวนคน ระดับที่พัก รถ
                และขอบเขตการประสานงาน
              </p>
            </div>
          </section>

          <section id="destinations" className="bg-[#F7F8FA] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading title="3 เส้นทางหลักสำหรับธุรกิจและทริปจีนแบบ Private" />
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {destinations.map((destination) => (
                  <article
                    key={destination.title}
                    className="rounded-lg border border-[#D9E2EC] bg-white p-4 shadow-sm"
                  >
                    <DestinationVisual label={destination.visual} />
                    <div className="p-2 pt-5">
                      <h3 className="font-heading text-xl font-bold text-[#0B1F3A]">
                        {destination.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[#52616B]">
                        {destination.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {destination.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[#D9E2EC] px-3 py-1.5 text-xs font-bold text-[#0B1F3A]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading title="เริ่มต้นง่าย แต่ทำงานเป็นระบบ" />
              <div className="mt-10 grid gap-4 md:grid-cols-5">
                {processSteps.map(([title, copy], index) => (
                  <article
                    key={title}
                    className="rounded-lg border border-[#D9E2EC] bg-[#F7F8FA] p-5"
                  >
                    <span className="font-heading text-3xl font-bold text-[#B88A44]">
                      {index + 1}
                    </span>
                    <h3 className="font-heading mt-4 text-lg font-bold text-[#0B1F3A]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#52616B]">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="founder" className="bg-[#F7F8FA] py-16 sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <ConceptVisual
                mode="founder"
                title="Founder profile visual placeholder, replace with a real Ryu photo when available"
                alt="ริว ภูริวัจน์ ศุภพิทักษ์พงษ์ ผู้ประสานงานจีนไทยสำหรับทัวร์ธุรกิจ"
              />
              <div className="self-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#B88A44]">
                  Founder-led
                </p>
                <h2 className="font-heading text-3xl font-bold leading-tight text-[#0B1F3A] sm:text-4xl">
                  ทำไมต้องไปจีนกับ ริว (RyuGeGe)
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#52616B]">
                  ริว — ภูริวัจน์ ศุภพิทักษ์พงษ์
                  คือผู้ประสานงานจีน–ไทยที่มีพื้นฐานทั้งด้านวิศวกรรม ภาษา
                  วัฒนธรรมจีน และการสื่อสารเชิงธุรกิจ ผ่านประสบการณ์เรียนและใช้ชีวิตในประเทศจีน
                  รวมถึงบทบาทล่ามจีน–ไทย–อังกฤษในบริบทอุตสาหกรรม วิศวกรรม
                  และธุรกิจ
                </p>
                <div className="mt-6 rounded-lg border border-[#D9E2EC] bg-white p-5">
                  <CheckList items={credentials} />
                </div>
                <div className="mt-5 rounded-lg border border-[#F7B4C6]/70 bg-white p-5">
                  <p className="font-heading text-lg font-bold text-[#0B1F3A]">
                    ติดตามตัวตน Ryu Gege
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#52616B]">
                    ช่องทางด้านล่างอ้างอิงจาก public profile และควรยืนยันอีกครั้งก่อนเผยแพร่ production
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="rounded-md border border-[#D9E2EC] bg-[#FFF8D8] px-4 py-3 transition hover:border-[#D8242F] hover:bg-white"
                      >
                        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#D8242F]">
                          {link.label}
                        </span>
                        <span className="mt-1 block text-sm font-bold text-[#0B1F3A]">
                          {link.value}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="inquiry" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                title="เล่าเป้าหมายทริปของคุณ แล้วให้ริวช่วยประเมินเบื้องต้น"
                copy="กรอกข้อมูลสั้น ๆ เพื่อให้เราช่วยแนะนำเส้นทาง จำนวนวัน และรูปแบบบริการที่เหมาะกับคุณ"
              />
              <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <InquiryForm />
                <aside className="rounded-lg border border-[#D9E2EC] bg-[#0B1F3A] p-6 text-white shadow-[0_18px_60px_rgba(11,31,58,0.16)]">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#DDBB81]">
                    Faster reply
                  </p>
                  <h3 className="font-heading mt-4 text-3xl font-bold leading-tight">
                    อยากคุยเร็วกว่า? แอด LINE เพื่อปรึกษาเบื้องต้นฟรี
                  </h3>
                  <p className="mt-4 leading-8 text-white/76">
                    ส่งเป้าหมาย เมืองที่สนใจ ช่วงเวลาเดินทาง และจำนวนคน
                    ริวจะช่วยประเมินเบื้องต้นว่าทริปควรวางอย่างไร
                  </p>
                  <CtaLink href={LINE_URL} className="mt-7 w-full">
                    ปรึกษาฟรีทาง LINE
                  </CtaLink>
                  <div className="mt-8 rounded-lg border border-white/14 bg-white/8 p-4 text-sm leading-6 text-white/76">
                    ข้อมูลที่ควรเตรียม: เมืองหรือสินค้าเป้าหมาย ช่วงเวลาเดินทาง
                    จำนวนผู้เดินทาง งบประมาณคร่าว ๆ และสิ่งที่อยากได้หลังจบทริป
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="bg-[#F7F8FA] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                title="เสียงจากลูกค้าที่ไว้วางใจ"
                copy="พื้นที่สำหรับรีวิวจากลูกค้าธุรกิจและลูกค้าทริปส่วนตัวในอนาคต ระหว่างนี้สามารถติดตามตัวตนและคอนเทนต์ของ Ryu Gege ได้จากช่องทางสาธารณะ"
              />
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {["Business Trip Client", "Private Leisure Client"].map((item) => (
                  <article
                    key={item}
                    className="rounded-lg border border-dashed border-[#B8C5D3] bg-white p-6 text-center"
                  >
                    <p className="font-heading text-lg font-bold text-[#0B1F3A]">
                      {item}
                    </p>
                    <div className="mx-auto mt-5 h-2 w-24 bg-[#D9E2EC]" />
                    <div className="mx-auto mt-3 h-2 w-32 bg-[#E8EEF4]" />
                    <div className="mx-auto mt-3 h-2 w-20 bg-[#E8EEF4]" />
                  </article>
                ))}
                <article className="rounded-lg border border-[#F7B4C6]/70 bg-[#FFF8D8] p-6">
                  <p className="font-heading text-lg font-bold text-[#0B1F3A]">
                    Follow Ryu Gege
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#52616B]">
                    ดูคอนเทนต์ภาษาจีน วัฒนธรรมจีน และตัวตนของริวก่อนเริ่มคุยทริปธุรกิจ
                  </p>
                  <div className="mt-5 space-y-2">
                    {socialLinks.slice(0, 3).map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="flex items-center justify-between rounded-md bg-white px-4 py-3 text-sm font-bold text-[#0B1F3A] transition hover:text-[#D8242F]"
                      >
                        <span>{link.label}</span>
                        <span className="text-[#D8242F]">{link.value}</span>
                      </a>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="faq" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <SectionHeading title="คำถามที่พบบ่อย" />
              <div className="mt-10 space-y-3">
                {faqs.map(([question, answer]) => (
                  <details
                    key={question}
                    className="group rounded-lg border border-[#D9E2EC] bg-white p-5 shadow-sm"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4">
                      <span className="font-heading text-lg font-bold text-[#0B1F3A]">
                        {question}
                      </span>
                      <span className="faq-marker mt-1 grid size-6 shrink-0 place-items-center rounded-md border border-[#D9E2EC] text-[#B88A44] transition">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 leading-8 text-[#52616B]">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#0B1F3A] py-16 text-white sm:py-20">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
                พร้อมวางแผนทริปจีนให้คุ้มค่ากว่าการไปลองผิดลองถูกหรือยัง?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/76">
                เริ่มจากคุยเป้าหมายของคุณก่อน ริวจะช่วยประเมินว่าเส้นทาง เมือง
                จำนวนวัน และรูปแบบบริการแบบไหนเหมาะที่สุด
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <CtaLink href={LINE_URL}>ปรึกษาฟรีทาง LINE</CtaLink>
                <CtaLink href="#inquiry" variant="secondary">
                  กรอกข้อมูลทริป
                </CtaLink>
              </div>
              <p className="mt-5 text-sm text-white/62">
                ไม่มีการบังคับซื้อแพ็กเกจในการปรึกษาเบื้องต้น
              </p>
            </div>
          </section>
        </main>

        <footer className="bg-white pb-24 pt-10 sm:pb-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
            <div>
              <p className="font-heading text-xl font-bold text-[#0B1F3A]">
                RyuGeGe China Tour
              </p>
              <p className="mt-2 text-sm font-semibold text-[#B88A44]">
                Private Business Tour & Safe Facilitation
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0B1F3A]">Links</p>
              <div className="mt-3 space-y-2 text-sm text-[#52616B]">
                <a href="#" className="block hover:text-[#0B1F3A]">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-[#0B1F3A]">
                  Terms of Service
                </a>
                <a href="#inquiry" className="block hover:text-[#0B1F3A]">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <p className="font-bold text-[#0B1F3A]">Service Areas</p>
              <p className="mt-3 text-sm leading-7 text-[#52616B]">
                Guangzhou
                <br />
                Xi’an
                <br />
                Yunnan
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0B1F3A]">Contact</p>
              <p className="mt-3 text-sm leading-7 text-[#52616B]">
                LINE: @RyuGeGe or placeholder
                <br />
                Facebook: Ryu Gege
                <br />
                IG: ryugegechannel
                <br />
                Email: ryupuriwat2000@gmail.com
                <br />
                Phone: 092 842 2121
                <br />
                เลขที่ใบอนุญาตมัคคุเทศก์/ธุรกิจนำเที่ยว: เติมเมื่อได้รับ
              </p>
            </div>
          </div>
        </footer>

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#D9E2EC] bg-white p-3 shadow-[0_-12px_28px_rgba(11,31,58,0.12)] sm:hidden">
          <div className="mx-auto flex max-w-md gap-2">
            <CtaLink href={LINE_URL} className="flex-1">
              ปรึกษาฟรีทาง LINE
            </CtaLink>
            <CtaLink href="#services" variant="secondary" className="flex-1">
              ดูแพ็กเกจ
            </CtaLink>
          </div>
        </div>

        <a
          href={LINE_URL}
          className="fixed bottom-6 right-6 z-40 hidden rounded-md bg-[#06C755] px-5 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(6,199,85,0.28)] transition hover:bg-[#05A948] lg:inline-flex"
        >
          LINE
        </a>
      </div>
    </>
  );
}
