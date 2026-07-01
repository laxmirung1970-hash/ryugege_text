import type { Metadata } from "next";
import type { ReactNode } from "react";
import { InquiryForm } from "./InquiryForm";
import { LINE_URL } from "./constants";

type SocialLink = {
  label: string;
  value: string;
  href: string;
};

type TripCard = {
  city: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  accent: string;
};

type ServiceCard = {
  title: string;
  eyebrow: string;
  description: string;
  includes: string[];
};

type ReviewClip = {
  title: string;
  platform: string;
  href: string;
  embedUrl?: string;
  thumbnail?: string;
};

type Testimonial = {
  name: string;
  role: string;
  focus: string;
  quote?: string;
};

export const metadata: Metadata = {
  title: "ทริปธุรกิจจีน ดูงานแฟร์ โรงงาน และซัพพลายเออร์",
  description:
    "RyuGeGe Tour บริการออกแบบทริปธุรกิจจีน พาเดินงานแฟร์ ดูโรงงาน พบซัพพลายเออร์ และประสานงานจีน-ไทยสำหรับเจ้าของธุรกิจ SME และทีมจัดซื้อ",
  openGraph: {
    title: "RyuGeGe Tour | ทริปธุรกิจจีน ดูงานแฟร์ โรงงาน และซัพพลายเออร์",
    description:
      "ทริปธุรกิจจีนแบบ founder-led สำหรับเจ้าของธุรกิจที่ต้องการไปจีนอย่างมีแผน มีคนช่วยคุย และมีคนช่วยประสาน",
    type: "website",
  },
};

const navItems = [
  ["ทริปแนะนำ", "#trips"],
  ["บริการ", "#services"],
  ["คลิปรีวิว", "#clips"],
  ["เสียงลูกค้า", "#testimonials"],
  ["ทำไมต้องริว", "#founder"],
  ["FAQ", "#faq"],
] as const;

const socialLinks: SocialLink[] = [
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

const heroProof = [
  "Canton Fair / Factory Visit",
  "ล่ามจีน-ไทย-อังกฤษ",
  "Private Business Trip",
  "Founder-led Service",
  "ต่อยอดตลาดอื่นในอนาคต",
];

const contactCards = [
  {
    title: "ติดต่อสอบถามทันที",
    value: "LINE RyuGeGe",
    copy: "ส่งเป้าหมาย เมือง สินค้า และช่วงเวลาเดินทางเพื่อให้ริวประเมินเบื้องต้น",
    href: LINE_URL,
  },
  {
    title: "เวลาให้คำปรึกษา",
    value: "ทุกวันตามนัดหมาย",
    copy: "เหมาะกับเจ้าของธุรกิจที่ต้องวางแผนนอกเวลาทำงานปกติ",
    href: "#inquiry",
  },
  {
    title: "ช่องทางตรง",
    value: "092 842 2121",
    copy: "โทรหรือฝากข้อมูลไว้ แล้วเลือกช่องทางที่สะดวกสำหรับการคุยรายละเอียด",
    href: "tel:0928422121",
  },
];

const shortcutBenefits = [
  {
    label: "01",
    title: "ประหยัดเวลาและต้นทุน",
    copy: "ช่วยวางเส้นทาง เมือง โรงงาน งานแฟร์ และการเดินทางให้สอดคล้องกับเป้าหมาย ไม่เสียวันไปกับจุดที่ไม่จำเป็น",
  },
  {
    label: "02",
    title: "เห็นของจริงก่อนตัดสินใจ",
    copy: "พาไปดูตลาด งานแฟร์ หรือโรงงานจริง พร้อมช่วยตั้งคำถามเรื่องสินค้า ราคา MOQ ระยะผลิต และเงื่อนไขที่ควรรู้",
  },
  {
    label: "03",
    title: "มีคนช่วยคุยหน้างาน",
    copy: "แปลและสรุปโดยดูบริบททางธุรกิจ ไม่ใช่แค่แปลคำต่อคำ ช่วยให้ทีมไทยเข้าใจสถานการณ์ร่วมกัน",
  },
  {
    label: "04",
    title: "ขอบเขตชัด ไม่มีคำสัญญาเกินจริง",
    copy: "ช่วยลดความเสี่ยงด้านภาษาและการประสานงาน แต่ไม่รับประกันผลกำไรหรือการตัดสินใจจัดซื้อแทนลูกค้า",
  },
];

const tripCards: TripCard[] = [
  {
    city: "Guangzhou",
    title: "กวางโจว / Canton Fair",
    subtitle: "งานแฟร์ สินค้าโรงงาน และซัพพลายเออร์",
    description:
      "เหมาะกับเจ้าของแบรนด์ ผู้นำเข้า และทีมจัดซื้อที่ต้องการเดินงานแฟร์แบบมีเป้าหมาย ช่วยเตรียมคำถามและสรุปดีลหน้างาน",
    tags: ["Canton Fair", "Factory", "Supplier Meeting"],
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    accent: "bg-[#f12d35]",
  },
  {
    city: "Yiwu",
    title: "อี้อู / Wholesale Market",
    subtitle: "เมืองค้าส่ง สินค้าไลฟ์สไตล์ และสินค้าทุนเริ่มต้น",
    description:
      "เหมาะกับผู้เริ่มนำเข้าสินค้า ร้านค้าออนไลน์ และทีมที่ต้องการเห็นสินค้าหลากหลายหมวดในพื้นที่เดียว",
    tags: ["Wholesale", "Retail Ideas", "SME"],
    image:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80",
    accent: "bg-[#d8a536]",
  },
  {
    city: "Foshan / Zhongshan",
    title: "ฝอซาน + จงซาน",
    subtitle: "เฟอร์นิเจอร์ วัสดุก่อสร้าง ไฟ และงานแต่งบ้าน",
    description:
      "เหมาะกับเจ้าของโครงการ อินทีเรียร์ ร้านวัสดุ และแบรนด์ที่ต้องการดูสินค้าขนาดใหญ่หรือคุยโรงงานเฉพาะทาง",
    tags: ["Furniture", "Lighting", "Interior"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    accent: "bg-[#c51f27]",
  },
  {
    city: "Shenzhen",
    title: "เซินเจิ้น / Electronics",
    subtitle: "สินค้าเทคโนโลยี อุปกรณ์ และตลาดนวัตกรรม",
    description:
      "เหมาะกับทีมที่สนใจอุปกรณ์อิเล็กทรอนิกส์ แก็ดเจ็ต และสินค้าที่ต้องดูสเปก ตัวอย่าง และความน่าเชื่อถือของคู่ค้า",
    tags: ["Electronics", "Gadget", "Innovation"],
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    accent: "bg-[#202a37]",
  },
  {
    city: "Premium Private",
    title: "ทริปจีนส่วนตัวสำหรับผู้บริหาร",
    subtitle: "ธุรกิจ ผ่อนคลาย และวัฒนธรรมในทริปเดียว",
    description:
      "เหมาะกับผู้บริหาร ครอบครัว หรือทีมเล็กที่ต้องการทริปส่วนตัว มีคนดูแลภาษา เส้นทาง ร้านอาหาร และจังหวะการเดินทาง",
    tags: ["Private", "Executive", "Culture"],
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    accent: "bg-[#b88632]",
  },
  {
    city: "Future Market",
    title: "Custom Business Trip",
    subtitle: "เปิดโอกาสต่อยอดตลาดใหม่ในอนาคต",
    description:
      "โครงสร้างบริการออกแบบให้ขยายได้ ไม่จำกัดแบรนด์ไว้เฉพาะจีน เมื่อมีตลาดอื่นที่เหมาะกับลูกค้า สามารถเพิ่มเส้นทางได้ทันที",
    tags: ["Custom Route", "Expansion", "Strategy"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    accent: "bg-[#0f1f2e]",
  },
];

const serviceCards: ServiceCard[] = [
  {
    eyebrow: "Plan",
    title: "ออกแบบทริปตามเป้าหมายธุรกิจ",
    description:
      "เริ่มจากสินค้า เมือง งบประมาณ จำนวนคน และผลลัพธ์ที่อยากได้ แล้ววางเส้นทางให้เหมาะกับเวลาจริง",
    includes: ["คัดเมืองและเส้นทาง", "ประเมินจำนวนวัน", "เตรียมคำถามก่อนเดินทาง"],
  },
  {
    eyebrow: "Go",
    title: "พาเดินงานแฟร์ ดูโรงงาน และพบคู่ค้า",
    description:
      "ช่วยอ่านสถานการณ์หน้างาน สื่อสารกับซัพพลายเออร์ และจับประเด็นที่เจ้าของธุรกิจควรถามต่อ",
    includes: ["Canton Fair / Expo", "Factory Visit", "Supplier Meeting"],
  },
  {
    eyebrow: "Talk",
    title: "ล่ามธุรกิจจีน-ไทย-อังกฤษ",
    description:
      "ช่วยแปลโดยคำนึงถึงเป้าหมายทางธุรกิจ การต่อรอง และความหมายแฝงของการสื่อสารในบริบทจีน",
    includes: ["แปลหน้างาน", "สรุปประเด็น", "ช่วยเตรียมคำศัพท์ธุรกิจ"],
  },
  {
    eyebrow: "Move",
    title: "ประสานรถ ที่พัก และจังหวะเดินทาง",
    description:
      "ลดภาระเรื่องโลจิสติกส์ เพื่อให้ทีมโฟกัสกับการดูสินค้าและการคุยธุรกิจแทนการแก้ปัญหาเฉพาะหน้า",
    includes: ["รถรับส่ง", "แผนรายวัน", "ร้านอาหารและจุดพัก"],
  },
  {
    eyebrow: "Follow",
    title: "ติดตามซัพพลายเออร์หลังจบทริป",
    description:
      "บริการเสริมสำหรับช่วยสื่อสาร เอกสาร หรือสรุปข้อความกับคู่ค้าตามขอบเขตงานที่ตกลงกันไว้",
    includes: ["แปลข้อความ", "ประสานเอกสาร", "ติดตามประเด็นสำคัญ"],
  },
];

const processSteps = [
  ["Brief", "คุยเป้าหมายสินค้า เมือง ช่วงเวลา งบประมาณ และความคาดหวังหลังจบทริป"],
  ["Match", "เลือกเมือง งานแฟร์ ตลาด หรือโรงงานที่เหมาะกับเป้าหมายและจำนวนวัน"],
  ["Prepare", "เตรียมคำถาม เอกสาร เส้นทาง รถ ที่พัก และเรื่องที่ควรรู้ก่อนเดินทาง"],
  ["Facilitate", "ดูแลหน้างาน แปล ประสาน และช่วยสรุปประเด็นที่ต้องตัดสินใจ"],
  ["Follow up", "ต่อยอดการสื่อสารหลังทริปตามขอบเขตที่ตกลงกัน"],
];

const reviewClips: ReviewClip[] = [
  {
    title: "เจ้าของธุรกิจเดินงานแฟร์พร้อมทีม",
    platform: "Facebook / Reels",
    href: "https://www.facebook.com/ryupuriwat/",
  },
  {
    title: "รีวิวบรรยากาศดูโรงงานและคุยซัพพลายเออร์",
    platform: "Instagram / Short video",
    href: "https://www.instagram.com/ryugegechannel",
  },
  {
    title: "สรุปคำถามที่ CEO ควรถามก่อนปิดดีล",
    platform: "Facebook / Reels",
    href: "https://www.facebook.com/ryupuriwat/",
  },
  {
    title: "เบื้องหลังทริปส่วนตัวสำหรับเจ้าของแบรนด์",
    platform: "Instagram / Story",
    href: "https://www.instagram.com/ryugegechannel",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Business Trip Client",
    role: "เจ้าของธุรกิจ / ทีมจัดซื้อ",
    focus: "พื้นที่สำหรับใส่รีวิวจริงหลังลูกค้าอนุมัติข้อความ",
  },
  {
    name: "Factory Visit Client",
    role: "ผู้ประกอบการที่ต้องการดูโรงงาน",
    focus: "พื้นที่สำหรับรีวิวผลลัพธ์ เช่น ความชัดเจนของการสื่อสารและแผนเดินทาง",
  },
  {
    name: "Private Trip Client",
    role: "ผู้บริหาร / ครอบครัว",
    focus: "พื้นที่สำหรับเสียงลูกค้าทริปส่วนตัวและประสบการณ์การดูแลระหว่างเดินทาง",
  },
];

const credentials = [
  "ปริญญาตรีและโทด้าน Aeronautical Engineering จาก Northwestern Polytechnical University ประเทศจีน",
  "เคยได้รับทุนการศึกษาเต็มจำนวนในจีน และเคยเป็นนักเรียนแลกเปลี่ยน AFS ประเทศจีน",
  "มีประสบการณ์ล่ามจีน-ไทย-อังกฤษในบริบทธุรกิจ อุตสาหกรรม และวิศวกรรม",
  "เข้าใจทั้งภาษา วัฒนธรรมจีน การเดินทาง และการสื่อสารเชิงธุรกิจ",
  "Founder-led service: ปีแรกดูแลคุณภาพด้วยตัวริวเองเป็นหลัก",
];

const faqs = [
  [
    "RyuGeGe Tour ต่างจากทัวร์ทั่วไปอย่างไร?",
    "จุดยืนหลักคือทริปธุรกิจแบบมีคนช่วยคิด ช่วยแปล และช่วยประสาน ไม่ใช่ทริปท่องเที่ยวทั่วไป ลูกค้าจะได้คุยเป้าหมายก่อนเดินทางและวางแผนตามสินค้า เมือง และคู่ค้าที่ต้องการพบ",
  ],
  [
    "ยังเน้นทริปจีนอยู่ไหม ถ้าเปลี่ยนชื่อเป็น RyuGeGe Tour?",
    "ยังเน้นจีนเป็นตลาดหลักในตอนนี้ แต่ใช้ชื่อ RyuGeGe Tour เพื่อไม่ล็อกแบรนด์กับประเทศเดียว หากอนาคตมีตลาดอื่นที่เหมาะกับลูกค้า จะเพิ่มบริการได้ง่ายขึ้น",
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
    "เริ่มจากคุยเป้าหมายสินค้า งบประมาณ และช่วงเวลาเดินทาง ริวจะช่วยประเมินเบื้องต้นว่าเมืองใดเหมาะกับโจทย์ของคุณมากที่สุด",
  ],
  [
    "หลังจบทริปมีคนช่วยติดตามซัพพลายเออร์ต่อไหม?",
    "มีบริการเสริมสำหรับการประสานงานหลังทริป เช่น ช่วยแปลข้อความ ช่วยสรุปประเด็น หรือช่วยติดตามเอกสารตามขอบเขตที่ตกลงกัน",
  ],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "RyuGeGe Tour",
  sameAs: [
    "https://www.facebook.com/ryupuriwat/",
    "https://www.instagram.com/ryugegechannel",
    "https://www.ryu-gege.com/",
  ],
  description:
    "Founder-led China business trip facilitation for Thai SME owners, importers, executives, and purchasing teams.",
  areaServed: ["China", "Thailand", "Guangzhou", "Yiwu", "Foshan", "Zhongshan", "Shenzhen"],
  serviceType: [
    "Business trip planning",
    "China factory visit facilitation",
    "Canton Fair business trip",
    "Thai Chinese interpretation support",
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
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "line";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-[#ef2f37] text-white shadow-[0_14px_30px_rgba(239,47,55,0.28)] hover:bg-[#c91f27]",
    secondary:
      "border border-[#ef2f37] bg-white text-[#ef2f37] hover:bg-[#fff1f1]",
    dark: "bg-[#111827] text-white hover:bg-[#263241]",
    line: "bg-[#06c755] text-white shadow-[0_14px_30px_rgba(6,199,85,0.25)] hover:bg-[#05a948]",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-center text-sm font-bold transition focus:outline-none focus:ring-[3px] focus:ring-[#f4c35f]/45 ${styles[variant]} ${className}`}
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
    <div className="mx-auto max-w-4xl text-center">
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${
            light ? "text-[#f4c35f]" : "text-[#ef2f37]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-[#171717]"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-4 text-lg leading-8 ${
            light ? "text-white/78" : "text-[#5f6673]"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function BrandMark() {
  return (
    <span className="grid size-14 shrink-0 place-items-center rounded-md bg-[linear-gradient(135deg,#ef2f37,#9d1118)] text-center text-[11px] font-black uppercase leading-tight text-[#ffe09a] shadow-[0_10px_24px_rgba(157,17,24,0.24)]">
      Ryu
      <br />
      Tour
    </span>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-white/15 bg-[#1a0909] shadow-[0_30px_90px_rgba(54,0,4,0.34)]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1400&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,0,3,0.92),rgba(176,22,29,0.68),rgba(8,11,18,0.72))]" />
      <div className="relative flex min-h-[460px] flex-col justify-between p-6 text-white sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4c35f]">
              Business Trip Command Center
            </p>
            <h2 className="font-heading mt-3 max-w-lg text-4xl font-black leading-none text-[#ffe09a] sm:text-5xl">
              CHINA
              <span className="block text-white">WITH RYU</span>
            </h2>
          </div>
          <div className="rounded-md border border-[#f4c35f]/40 bg-black/28 px-4 py-3 text-right backdrop-blur">
            <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#f4c35f]">
              Founder-led
            </span>
            <span className="mt-1 block text-lg font-black">RyuGeGe Tour</span>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["IMPORT", "FACTORY", "FAIR", "TRANSLATE", "ROUTE", "FOLLOW UP"].map(
            (item) => (
              <span
                key={item}
                className="rounded-md border border-white/18 bg-white/10 px-3 py-3 text-center text-xs font-black tracking-[0.12em] backdrop-blur"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function TripCardView({ trip }: { trip: TripCard }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-[0_18px_50px_rgba(17,24,39,0.18)]">
      <div
        className="relative min-h-[280px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.72)), url(${trip.image})`,
        }}
      >
        <span
          className={`absolute left-5 top-5 rounded-md px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white ${trip.accent}`}
        >
          {trip.city}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-sm font-bold text-[#ffe09a]">{trip.subtitle}</p>
          <h3 className="font-heading mt-2 text-2xl font-bold leading-tight">
            {trip.title}
          </h3>
        </div>
      </div>
      <div className="p-5">
        <p className="leading-7 text-[#5f6673]">{trip.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {trip.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[#ead6a3] bg-[#fff8e7] px-3 py-1.5 text-xs font-bold text-[#8b141a]"
            >
              {tag}
            </span>
          ))}
        </div>
        <CtaLink href={LINE_URL} variant="secondary" className="mt-6 w-full">
          ถามเส้นทางนี้
        </CtaLink>
      </div>
    </article>
  );
}

function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul
      className={`space-y-2 text-sm leading-6 ${
        light ? "text-white/76" : "text-[#5f6673]"
      }`}
    >
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-sm bg-[#ef2f37]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ReviewClipCard({ clip, index }: { clip: ReviewClip; index: number }) {
  return (
    <article className="min-w-[250px] max-w-[280px] flex-1">
      <a href={clip.href} className="group block" aria-label={clip.title}>
        <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-[#ead6a3] bg-[#151515] shadow-[0_18px_42px_rgba(0,0,0,0.18)]">
          {clip.embedUrl ? (
            <iframe
              src={clip.embedUrl}
              title={clip.title}
              className="absolute inset-0 size-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{
                  backgroundImage: `url(${
                    clip.thumbnail ?? tripCards[index % tripCards.length].image
                  })`,
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08),rgba(157,17,24,0.74),rgba(0,0,0,0.92))]" />
              <div className="absolute left-4 top-4 rounded-md bg-[#ef2f37] px-3 py-1.5 text-xs font-black text-white">
                9:16
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid size-16 place-items-center rounded-full border-2 border-white bg-white/18 text-2xl font-black text-white backdrop-blur transition group-hover:scale-105">
                  ▶
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ffe09a]">
                  {clip.platform}
                </p>
                <h3 className="font-heading mt-2 text-xl font-bold leading-tight">
                  {clip.title}
                </h3>
                <p className="mt-3 text-xs font-semibold text-white/72">
                  รอใส่ลิงก์หรือ embed คลิปจริง
                </p>
              </div>
            </>
          )}
        </div>
      </a>
    </article>
  );
}

export default function RyuGeGePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white text-[#171717]">
        <div className="bg-[#ef2f37] text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs font-bold sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {socialLinks.slice(0, 3).map((link) => (
                <a key={link.label} href={link.href} className="hover:text-[#ffe09a]">
                  {link.label}
                </a>
              ))}
            </div>
            <p>ทีมทริปธุรกิจจีน | TEL 092 842 2121 | LINE สำหรับปรึกษาทริป</p>
          </div>
        </div>

        <header className="sticky top-0 z-50 border-b border-[#f1e2c0] bg-white/96 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="RyuGeGe Tour">
              <BrandMark />
              <span>
                <span className="font-heading block text-xl font-black leading-tight text-[#171717]">
                  RyuGeGe Tour
                </span>
                <span className="hidden text-xs font-bold text-[#ef2f37] sm:block">
                  Business Trip · Factory Visit · Thai-Chinese Facilitation
                </span>
              </span>
            </a>
            <nav className="hidden items-center gap-5 text-sm font-bold text-[#555] lg:flex">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} className="transition hover:text-[#ef2f37]">
                  {label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:block">
              <CtaLink href={LINE_URL} variant="line">
                ปรึกษาทาง LINE
              </CtaLink>
            </div>
            <details className="group relative lg:hidden">
              <summary className="flex size-11 cursor-pointer items-center justify-center rounded-md border border-[#ead6a3] bg-white text-[#171717]">
                <span className="sr-only">เปิดเมนู</span>
                <span className="flex flex-col gap-1.5">
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                </span>
              </summary>
              <div className="absolute right-0 top-[3.25rem] w-72 rounded-lg border border-[#ead6a3] bg-white p-3 shadow-[0_18px_50px_rgba(17,24,39,0.14)]">
                {navItems.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="block rounded-md px-3 py-3 text-sm font-bold text-[#171717] hover:bg-[#fff4f4]"
                  >
                    {label}
                  </a>
                ))}
                <CtaLink href={LINE_URL} variant="line" className="mt-3 w-full">
                  ปรึกษาทาง LINE
                </CtaLink>
              </div>
            </details>
          </div>
        </header>

        <main id="top">
          <section className="relative overflow-hidden bg-[#7e0d13]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,214,112,0.24),transparent_30%),linear-gradient(135deg,#220000_0%,#b51620_48%,#111827_100%)]" />
            <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
              <div className="self-center text-white">
                <p className="mb-4 inline-flex rounded-md border border-[#f4c35f]/48 bg-black/22 px-3 py-2 text-sm font-black text-[#ffe09a]">
                  RyuGeGe Tour สำหรับเจ้าของธุรกิจที่อยากไปจีนอย่างมีแผน
                </p>
                <h1 className="font-heading max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  พาบินไปดูตลาดจีน งานแฟร์ โรงงาน และซัพพลายเออร์ แบบมีคนช่วยคิดทุกจุดสำคัญ
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
                  บริการทริปธุรกิจจีนและการประสานงานแบบ Private โดย ริว
                  (RyuGeGe) สำหรับ SME เจ้าของแบรนด์ ผู้นำเข้า และทีมจัดซื้อที่อยากไปจีนแบบมั่นใจขึ้น
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <CtaLink href={LINE_URL} variant="line">
                    ปรึกษาแผนทริปฟรี
                  </CtaLink>
                  <CtaLink href="#trips" variant="secondary">
                    ดูทริปแนะนำ
                  </CtaLink>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {heroProof.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/18 bg-white/10 px-3 py-2 text-sm font-bold text-white backdrop-blur"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <HeroVisual />
            </div>
          </section>

          <section className="border-y border-[#f1e2c0] bg-white py-8">
            <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
              {contactCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-lg border border-[#ead6a3] bg-white p-5 shadow-[0_12px_28px_rgba(17,24,39,0.08)] transition hover:-translate-y-0.5 hover:border-[#ef2f37]"
                >
                  <p className="text-sm font-black text-[#ef2f37]">{item.title}</p>
                  <h2 className="font-heading mt-2 text-2xl font-bold text-[#171717]">
                    {item.value}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#5f6673]">{item.copy}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="bg-[#fbfbfb] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Shortcut to China Market"
                title="RyuGeGe Tour ช่วยทำให้ทริปจีนกลายเป็นการเดินทางธุรกิจที่จับต้องได้"
                copy="แนวทางคล้ายการมีทีมพาลงตลาดจริง แต่ปรับให้เหมาะกับแบรนด์เล็ก ทีมจัดซื้อ และเจ้าของธุรกิจที่ต้องการความใกล้ชิดกว่า"
              />
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {shortcutBenefits.map((benefit) => (
                  <article
                    key={benefit.title}
                    className="rounded-lg border border-[#ead6a3] bg-white p-6 shadow-sm"
                  >
                    <span className="font-heading text-4xl font-black text-[#ef2f37]">
                      {benefit.label}
                    </span>
                    <h3 className="font-heading mt-5 text-xl font-bold leading-tight text-[#171717]">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f6673]">
                      {benefit.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="trips" className="bg-[#171717] py-16 text-white sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                light
                eyebrow="Recommended Trips"
                title="ทริปทัวร์ซื้อสินค้าและดูงานจีนแนะนำ"
                copy="จัดกลุ่มเส้นทางแบบ China4Trip แต่เล่าใหม่ในสไตล์ RyuGeGe Tour: founder-led, private, และยืดหยุ่นกับเป้าหมายธุรกิจ"
              />
              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {tripCards.map((trip) => (
                  <TripCardView key={trip.title} trip={trip} />
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Core Services"
                title="บริการหลักที่ช่วยให้ทริปธุรกิจเดินหน้าได้เป็นระบบ"
                copy="ตั้งแต่ก่อนบิน ระหว่างเดินทาง จนถึงการติดตามหลังจบทริป"
              />
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                {serviceCards.map((service) => (
                  <article
                    key={service.title}
                    className="rounded-lg border border-[#e8e8e8] bg-[#fbfbfb] p-5"
                  >
                    <span className="rounded-md bg-[#ef2f37] px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white">
                      {service.eyebrow}
                    </span>
                    <h3 className="font-heading mt-5 text-xl font-bold leading-tight text-[#171717]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f6673]">
                      {service.description}
                    </p>
                    <div className="mt-5">
                      <CheckList items={service.includes} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="clips" className="bg-[#f5f5f5] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ef2f37]">
                    Social Proof Clips
                  </p>
                  <h2 className="font-heading mt-3 text-3xl font-black leading-tight text-[#ef2f37] sm:text-4xl">
                    คลิปรีวิวทริปธุรกิจที่รวม CEO เจ้าของแบรนด์ไปกับเรามากที่สุด!!
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[#5f6673]">
                    ออกแบบพื้นที่สำหรับคลิปแนวตั้ง 9:16 จาก Facebook Reels,
                    Instagram, TikTok หรือ YouTube Shorts เมื่อมีลิงก์จริงสามารถใส่ในข้อมูลชุดเดียวได้ทันที
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {socialLinks.slice(0, 3).map((link) => (
                      <CtaLink key={link.label} href={link.href} variant="secondary">
                        {link.label}
                      </CtaLink>
                    ))}
                  </div>
                </div>
                <div className="flex gap-5 overflow-x-auto pb-3">
                  {reviewClips.map((clip, index) => (
                    <ReviewClipCard key={clip.title} clip={clip} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="testimonials" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Testimonials"
                title="เสียงจากลูกค้าที่ไว้วางใจ"
                copy="ยังไม่ใส่คำรีวิวปลอม พื้นที่นี้เตรียมไว้สำหรับรีวิวจริงที่ลูกค้าอนุมัติให้เผยแพร่แล้ว"
              />
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {testimonials.map((item) => (
                  <article
                    key={item.name}
                    className="rounded-lg border border-dashed border-[#d7c08a] bg-[#fffaf0] p-6"
                  >
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ef2f37]">
                      Review slot
                    </p>
                    <h3 className="font-heading mt-4 text-xl font-bold text-[#171717]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-[#8b141a]">{item.role}</p>
                    <p className="mt-5 leading-7 text-[#5f6673]">
                      {item.quote ?? item.focus}
                    </p>
                    <div className="mt-6 h-2 w-24 rounded-full bg-[#ef2f37]/30" />
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="founder" className="bg-[#171717] py-16 text-white sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/12 bg-[#2b0508]">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80)",
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.88))]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffe09a]">
                    Founder-led
                  </p>
                  <h2 className="font-heading mt-3 text-4xl font-black">
                    Ryu Puriwat
                  </h2>
                  <p className="mt-3 max-w-lg leading-7 text-white/78">
                    ผู้ประสานงานจีน-ไทยที่ผสมพื้นฐานวิศวกรรม ภาษา วัฒนธรรมจีน
                    และการสื่อสารเชิงธุรกิจ
                  </p>
                </div>
              </div>
              <div className="self-center">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4c35f]">
                  Why RyuGeGe Tour
                </p>
                <h2 className="font-heading mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  ไปจีนกับคนที่ช่วยแปลความหมายทางธุรกิจ ไม่ใช่แค่พาเดินทาง
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/78">
                  ริวช่วยเชื่อมระหว่างเจ้าของธุรกิจไทยกับบริบทจริงในจีน ตั้งแต่การเตรียมคำถาม
                  การสื่อสารหน้างาน ไปจนถึงการสรุปประเด็นที่ต้องนำกลับมาตัดสินใจ
                </p>
                <div className="mt-7 rounded-lg border border-white/12 bg-white/7 p-5">
                  <CheckList items={credentials} light />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Working Process"
                title="เริ่มต้นง่าย แต่ทำงานเป็นระบบ"
              />
              <div className="mt-10 grid gap-4 md:grid-cols-5">
                {processSteps.map(([title, copy], index) => (
                  <article
                    key={title}
                    className="rounded-lg border border-[#ead6a3] bg-[#fbfbfb] p-5"
                  >
                    <span className="font-heading text-3xl font-black text-[#ef2f37]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading mt-4 text-lg font-bold text-[#171717]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5f6673]">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="inquiry" className="bg-[#fff4f4] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Start Your Trip"
                title="เล่าเป้าหมายทริป แล้วให้ริวช่วยประเมินเส้นทางที่เหมาะ"
                copy="ฟอร์มจะช่วยจัดข้อมูลเบื้องต้นก่อนคุยจริง เพื่อให้คำแนะนำเรื่องเมือง จำนวนวัน และรูปแบบบริการแม่นขึ้น"
              />
              <div className="mt-10 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
                <InquiryForm />
                <aside className="rounded-lg bg-[#171717] p-6 text-white shadow-[0_18px_60px_rgba(17,24,39,0.16)]">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffe09a]">
                    Faster reply
                  </p>
                  <h3 className="font-heading mt-4 text-3xl font-black leading-tight">
                    อยากคุยเร็วกว่า? แอด LINE เพื่อปรึกษาเบื้องต้นฟรี
                  </h3>
                  <p className="mt-4 leading-8 text-white/76">
                    ส่งสินค้าเป้าหมาย เมืองที่สนใจ ช่วงเวลาเดินทาง จำนวนคน
                    และงบประมาณคร่าว ๆ เพื่อให้ริวช่วยประเมินทริป
                  </p>
                  <CtaLink href={LINE_URL} variant="line" className="mt-7 w-full">
                    ปรึกษาฟรีทาง LINE
                  </CtaLink>
                  <div className="mt-8 rounded-lg border border-white/14 bg-white/8 p-4 text-sm leading-6 text-white/76">
                    เหมาะสำหรับ: เจ้าของธุรกิจ SME, ผู้นำเข้า, เจ้าของแบรนด์,
                    ทีมจัดซื้อ, ผู้บริหารที่ต้องการทริปส่วนตัว
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section id="faq" className="bg-[#ef2f37] py-16 text-white sm:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <SectionHeading light title="FAQ คำถามที่พบบ่อย" />
              <div className="mt-10 space-y-3">
                {faqs.map(([question, answer]) => (
                  <details
                    key={question}
                    className="group rounded-lg border border-white/20 bg-white/10 p-5 shadow-sm"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4">
                      <span className="font-heading text-lg font-bold text-white">
                        {question}
                      </span>
                      <span className="faq-marker mt-1 grid size-7 shrink-0 place-items-center rounded-md border border-white/32 text-[#ffe09a] transition">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 leading-8 text-white/82">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#171717] py-16 text-white sm:py-20">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffe09a]">
                RyuGeGe Tour
              </p>
              <h2 className="font-heading mt-4 text-3xl font-black leading-tight sm:text-4xl">
                พร้อมวางแผนทริปธุรกิจจีนให้คุ้มค่ากว่าการไปลองผิดลองถูกหรือยัง?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/76">
                เริ่มจากคุยเป้าหมายก่อน ริวจะช่วยประเมินว่าเมือง เส้นทาง จำนวนวัน
                และรูปแบบบริการไหนเหมาะที่สุด
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <CtaLink href={LINE_URL} variant="line">
                  ปรึกษาฟรีทาง LINE
                </CtaLink>
                <CtaLink href="#inquiry" variant="secondary">
                  กรอกข้อมูลทริป
                </CtaLink>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-white pb-24 pt-10 sm:pb-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
            <div>
              <div className="flex items-center gap-3">
                <BrandMark />
                <p className="font-heading text-xl font-black text-[#171717]">
                  RyuGeGe Tour
                </p>
              </div>
              <p className="mt-3 text-sm font-bold text-[#ef2f37]">
                Business Trip & Safe Facilitation
              </p>
            </div>
            <div>
              <p className="font-bold text-[#171717]">Links</p>
              <div className="mt-3 space-y-2 text-sm text-[#5f6673]">
                {navItems.slice(0, 4).map(([label, href]) => (
                  <a key={href} href={href} className="block hover:text-[#ef2f37]">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-[#171717]">Service Areas</p>
              <p className="mt-3 text-sm leading-7 text-[#5f6673]">
                Guangzhou / Canton Fair
                <br />
                Yiwu
                <br />
                Foshan / Zhongshan
                <br />
                Shenzhen
              </p>
            </div>
            <div>
              <p className="font-bold text-[#171717]">Contact</p>
              <p className="mt-3 text-sm leading-7 text-[#5f6673]">
                Facebook: Ryu Gege
                <br />
                IG: ryugegechannel
                <br />
                Email: ryupuriwat2000@gmail.com
                <br />
                Phone: 092 842 2121
                <br />
                LINE: เติมลิงก์จริงใน constants.ts
              </p>
            </div>
          </div>
        </footer>

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#ead6a3] bg-white p-3 shadow-[0_-12px_28px_rgba(17,24,39,0.12)] sm:hidden">
          <div className="mx-auto flex max-w-md gap-2">
            <CtaLink href={LINE_URL} variant="line" className="flex-1">
              LINE
            </CtaLink>
            <CtaLink href="#trips" variant="secondary" className="flex-1">
              ดูทริป
            </CtaLink>
          </div>
        </div>

        <a
          href={LINE_URL}
          className="fixed bottom-6 right-6 z-40 hidden rounded-md bg-[#06c755] px-5 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(6,199,85,0.28)] transition hover:bg-[#05a948] lg:inline-flex"
        >
          LINE
        </a>
      </div>
    </>
  );
}
