import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { InquiryForm } from "./InquiryForm";
import { HeroCarousel, type HeroSlide } from "./HeroCarousel";
import { SiteHeader, type NavItem } from "./SiteHeader";
import { PageEffects } from "./PageEffects";
import { Icon, type IconName } from "./icons";
import { LINE_URL } from "./constants";
import { TikTokClipGallery } from "./TikTokClipGallery";
import { BrandMark } from "./BrandMark";
import { siteMedia } from "./media";

const CONTACT_HREF = LINE_URL;
const CONTACT_LABEL = "ปรึกษาฟรีทาง LINE Official";
const CONTACT_ICON: IconName = "chat";
const siteBasePath =
  process.env.GITHUB_PAGES === "true" ? "/ryugege_text" : "";
const routeHref = (route: string) => `${siteBasePath}/ryugege/${route}/`;

type SocialLink = {
  label: string;
  value: string;
  href: string;
  icon: IconName;
};

type TripCard = {
  city: string;
  kind: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  price: string | null;
  href?: string;
};

type ServiceCard = {
  title: string;
  eyebrow: string;
  description: string;
  includes: string[];
  icon: IconName;
};

type ReviewClip = {
  title: string;
  platform: string;
  href: string;
  embedUrl?: string;
  thumbnail: StaticImageData;
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
    "Ryu Gege Tour บริการออกแบบทริปธุรกิจจีน พาเดินงานแฟร์ ดูโรงงาน พบซัพพลายเออร์ และประสานงานจีน-ไทยสำหรับเจ้าของธุรกิจ SME และทีมจัดซื้อ",
  openGraph: {
    title: "Ryu Gege Tour | ทริปธุรกิจจีน ดูงานแฟร์ โรงงาน และซัพพลายเออร์",
    description:
      "ทริปธุรกิจจีนแบบ founder-led สำหรับเจ้าของธุรกิจที่ต้องการไปจีนอย่างมีแผน มีคนช่วยคุย และมีคนช่วยประสาน",
    type: "website",
  },
};

const navItems: NavItem[] = [
  { label: "หน้าแรก", href: "#top" },
  {
    label: "ทริปแนะนำ",
    children: [
      { label: "ซีอาน / วัฒนธรรม (Leisure)", href: routeHref("xian") },
      { label: "แต้จิ๋ว / Chaozhou", href: routeHref("chaozhou") },
      { label: "กวางโจว / Canton Fair + โรงงาน", href: routeHref("guangzhou") },
      { label: "ยูนนาน / Business + Leisure", href: routeHref("yunnan") },
      { label: "ทริปส่วนตัวผู้บริหาร", href: "#trips" },
      { label: "Custom Business Trip", href: "#trips" },
    ],
  },
  {
    label: "บริการ",
    children: [
      { label: "ออกแบบทริปตามเป้าหมาย", href: "#services" },
      { label: "พาเดินงานแฟร์ / ดูโรงงาน", href: "#services" },
      { label: "ล่ามธุรกิจจีน-ไทย-อังกฤษ", href: "#services" },
      { label: "ประสานรถ ที่พัก เดินทาง", href: "#services" },
      { label: "ติดตามซัพพลายเออร์หลังทริป", href: "#services" },
    ],
  },
  { label: "คลิปรีวิว", href: "#clips" },
  { label: "เสียงลูกค้า", href: "#testimonials" },
  { label: "ทำไมต้องริว", href: "#founder" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    value: "Ryu Gege",
    href: "https://www.facebook.com/ryupuriwat/",
    icon: "facebook",
  },
  {
    label: "โทรศัพท์",
    value: "092 842 2121",
    href: "tel:0928422121",
    icon: "phone",
  },
  {
    label: "Website",
    value: "ryu-gege.com",
    href: "https://www.ryu-gege.com/",
    icon: "globe",
  },
];

const heroProof = [
  "Canton Fair / Factory Visit",
  "ล่ามจีน-ไทย-อังกฤษ",
  "Private Tour / Leisure",
  "Founder-led Service",
];

const marqueeWords = [
  "Guangzhou",
  "Canton Fair",
  "Xi'an",
  "Yunnan",
  "Chaozhou",
  "Factory Visit",
  "Supplier Meeting",
  "Business Sourcing",
  "Interpreter",
  "Private Trip",
];

const problemCards: { icon: IconName; title: string; copy: string }[] = [
  {
    icon: "languages",
    title: "กำแพงภาษาที่มากกว่าการแปล",
    copy: "ล่ามทั่วไปแปลได้ แต่ช่วย “ต่อรองธุรกิจ” ไม่เป็น ทำให้พลาดเงื่อนไข ราคา และโอกาสสำคัญตรงหน้างาน",
  },
  {
    icon: "shield",
    title: "ความเสี่ยงเรื่องความน่าเชื่อถือ",
    copy: "ในเว็บดูดี แต่ไปถึงจริงอาจเป็นเพียงคนกลางหรือห้องแถว ไม่รู้จะประเมินโรงงานและซัพพลายเออร์อย่างไรให้มั่นใจ",
  },
  {
    icon: "clock",
    title: "เสียเวลาและต้นทุนโดยเปล่า",
    copy: "จัดการเดินทาง เส้นทาง และนัดหมายเองยุ่งยาก ไม่รู้จะเริ่มตรงไหนให้คุ้มค่าที่สุดในเวลาที่มีจำกัด",
  },
];

const heroSlides: HeroSlide[] = [
  {
    image: siteMedia.hero.fair,
    kicker: "Canton Fair / Factory",
    title: "พาเดินงานแฟร์และดูโรงงานจีน",
    caption:
      "เตรียมคำถาม สรุปดีลหน้างาน และช่วยคุยกับซัพพลายเออร์ให้ทีมไทยเข้าใจตรงกัน",
  },
  {
    image: siteMedia.hero.market,
    kicker: "Sourcing Market",
    title: "ลงตลาดค้าส่งของจริง",
    caption:
      "เห็นสินค้าหลากหลายหมวดในพื้นที่เดียว เหมาะกับผู้เริ่มนำเข้าและร้านค้าออนไลน์",
  },
  {
    image: siteMedia.hero.interpreter,
    kicker: "Interpretation",
    title: "มีล่ามธุรกิจเดินไปกับคุณ",
    caption: "แปลโดยดูบริบทธุรกิจและการต่อรอง ไม่ใช่แค่แปลคำต่อคำ",
  },
  {
    image: siteMedia.hero.privateTour,
    kicker: "Private Tour / Leisure",
    title: "ทริปส่วนตัวในแบบที่คุณเลือก",
    caption: "เที่ยวจีนแบบไม่ต้องมีเป้าหมายธุรกิจ พร้อมดูแลภาษา เส้นทาง และจังหวะการเดินทาง",
  },
];

const contactCards = [
  {
    title: "ติดต่อสอบถามทันที",
    value: "LINE Official",
    copy: "ส่งเป้าหมาย เมือง สินค้า และช่วงเวลาเดินทางเพื่อให้ทีมงานประเมินเบื้องต้น",
    href: CONTACT_HREF,
    icon: CONTACT_ICON,
  },
  {
    title: "เวลาให้คำปรึกษา",
    value: "ทุกวันตามนัดหมาย",
    copy: "เหมาะกับเจ้าของธุรกิจที่ต้องวางแผนนอกเวลาทำงานปกติ",
    href: CONTACT_HREF,
    icon: "clock" as IconName,
  },
  {
    title: "เริ่มปรึกษาทริป",
    value: "แจ้งเป้าหมายของคุณ",
    copy: "ส่งเป้าหมายและช่วงเวลาเดินทาง แล้วรับคำแนะนำเบื้องต้นผ่าน LINE",
    href: CONTACT_HREF,
    icon: "chat" as IconName,
  },
];

const shortcutBenefits: {
  label: string;
  title: string;
  copy: string;
  icon: IconName;
}[] = [
  {
    label: "01",
    icon: "coins",
    title: "ประหยัดเวลาและต้นทุน",
    copy: "ช่วยวางเส้นทาง เมือง โรงงาน งานแฟร์ และการเดินทางให้สอดคล้องกับเป้าหมาย ไม่เสียวันไปกับจุดที่ไม่จำเป็น",
  },
  {
    label: "02",
    icon: "eye",
    title: "เห็นของจริงก่อนตัดสินใจ",
    copy: "พาไปดูตลาด งานแฟร์ หรือโรงงานจริง พร้อมช่วยตั้งคำถามเรื่องสินค้า ราคา MOQ ระยะผลิต และเงื่อนไขที่ควรรู้",
  },
  {
    label: "03",
    icon: "chat",
    title: "มีคนช่วยคุยหน้างาน",
    copy: "แปลและสรุปโดยดูบริบททางธุรกิจ ไม่ใช่แค่แปลคำต่อคำ ช่วยให้ทีมไทยเข้าใจสถานการณ์ร่วมกัน",
  },
  {
    label: "04",
    icon: "car",
    title: "ประสานการเดินทางให้ครบ",
    copy: "ดูแลรถ ที่พัก และจังหวะเดินทาง เพื่อให้ทีมโฟกัสกับการดูสินค้าและการคุยธุรกิจแทนการแก้ปัญหาเฉพาะหน้า",
  },
  {
    label: "05",
    icon: "route",
    title: "ต่อยอดตลาดในอนาคต",
    copy: "โครงสร้างบริการออกแบบให้ขยายได้ ไม่ล็อกไว้เฉพาะจีน เมื่อมีตลาดอื่นที่เหมาะกับลูกค้าสามารถเพิ่มเส้นทางได้",
  },
  {
    label: "06",
    icon: "shield",
    title: "ขอบเขตชัด ไม่มีคำสัญญาเกินจริง",
    copy: "ช่วยลดความเสี่ยงด้านภาษาและการประสานงาน แต่ไม่รับประกันผลกำไรหรือการตัดสินใจจัดซื้อแทนลูกค้า",
  },
];

const tripCards: TripCard[] = [
  {
    city: "Guangzhou",
    kind: "Business",
    title: "กวางโจว / Canton Fair + โรงงาน",
    subtitle: "งานแฟร์ ดูโรงงาน และพบซัพพลายเออร์",
    description:
      "เหมาะกับเจ้าของแบรนด์ ผู้นำเข้า และทีมจัดซื้อ เดินงานแฟร์แบบมีเป้าหมาย พร้อมเจาะลึกโรงงานและคุยซัพพลายเออร์โดยตรง ช่วยเตรียมคำถามและสรุปดีลหน้างาน",
    tags: ["Canton Fair", "Factory Visit", "Supplier Meeting"],
    image: siteMedia.trips.guangzhou,
    price: null,
    href: routeHref("guangzhou"),
  },
  {
    city: "Xi'an",
    kind: "Premium Leisure",
    title: "ซีอาน / วัฒนธรรมและประวัติศาสตร์",
    subtitle: "เมืองหลวงเก่า กองทัพทหารดินเผา และจีนแท้",
    description:
      "ทริปส่วนตัวแบบพรีเมียมสำหรับครอบครัวหรือกลุ่มเพื่อน สัมผัสจีนแท้ ๆ แบบไม่เร่งรีบ พร้อมคนดูแลภาษา เส้นทาง และจังหวะเดินทาง",
    tags: ["Culture", "Family", "Private"],
    image: siteMedia.trips.xian,
    price: "฿20,900",
    href: routeHref("xian"),
  },
  {
    city: "Yunnan",
    kind: "Hybrid",
    title: "ยูนนาน / Business + Leisure",
    subtitle: "ผสมงานธุรกิจกับการพักผ่อนในทริปเดียว",
    description:
      "เหมาะกับผู้ที่อยากดูโอกาสธุรกิจใหม่ ๆ พร้อมสัมผัสธรรมชาติและวัฒนธรรมของจีนตอนใต้ ปรับสัดส่วนธุรกิจ-ท่องเที่ยวได้ตามเป้าหมาย",
    tags: ["Hybrid", "Nature", "Opportunity"],
    image: siteMedia.trips.yunnan,
    price: null,
    href: routeHref("yunnan"),
  },
  {
    city: "Chaozhou",
    kind: "Culture",
    title: "แต้จิ๋ว / Chaozhou",
    subtitle: "ถิ่นบรรพบุรุษ วัฒนธรรม และอาหารแต้จิ๋ว",
    description:
      "ทริปส่วนตัวเยือนเมืองแต้จิ๋ว บ้านเกิดชาวไทยเชื้อสายจีนแต้จิ๋ว ชมเมืองเก่า สะพานโบราณเซียงจื่อ วัดไคหยวน และลิ้มรสอาหารแต้จิ๋วต้นตำรับ",
    tags: ["Teochew", "Heritage", "Food"],
    image: siteMedia.trips.chaozhou,
    price: null,
    href: routeHref("chaozhou"),
  },
  {
    city: "Private Tour",
    kind: "Leisure",
    title: "ออกแบบทัวร์ท่องเที่ยวส่วนตัว",
    subtitle: "เที่ยวตามจังหวะของคุณในแบบที่ชอบ",
    description:
      "ออกแบบทริปเฉพาะสำหรับครอบครัวหรือกลุ่มเพื่อน เลือกเมือง ที่พัก ร้านอาหาร และจังหวะการเดินทางให้ตรงกับสไตล์ของคุณ",
    tags: ["Family & Friends", "Private", "Flexible"],
    image: siteMedia.trips.privateTour,
    price: null,
  },
  {
    city: "Business Tour",
    kind: "Business",
    title: "ออกแบบทัวร์ธุรกิจ",
    subtitle: "วางแผนตามเป้าหมายการเดินทางของธุรกิจ",
    description:
      "ออกแบบเส้นทางตามสินค้า ตลาด งานแฟร์ โรงงาน หรือคู่ค้าที่ต้องการพบ พร้อมวางจำนวนวันและลำดับการเดินทางให้คุ้มค่า",
    tags: ["Market Visit", "Factory Visit", "Custom Route"],
    image: siteMedia.trips.businessTour,
    price: null,
  },
];

const featuredTripOrder = ["Xi'an", "Chaozhou", "Guangzhou", "Yunnan"];

const serviceCards: ServiceCard[] = [
  {
    eyebrow: "Plan",
    icon: "clipboard",
    title: "ออกแบบทริปตามเป้าหมายธุรกิจ",
    description:
      "เริ่มจากสินค้า เมือง งบประมาณ จำนวนคน และผลลัพธ์ที่อยากได้ แล้ววางเส้นทางให้เหมาะกับเวลาจริง",
    includes: ["คัดเมืองและเส้นทาง", "ประเมินจำนวนวัน", "เตรียมคำถามก่อนเดินทาง"],
  },
  {
    eyebrow: "Go",
    icon: "store",
    title: "พาเดินงานแฟร์ ดูโรงงาน และพบคู่ค้า",
    description:
      "ช่วยอ่านสถานการณ์หน้างาน สื่อสารกับซัพพลายเออร์ และจับประเด็นที่เจ้าของธุรกิจควรถามต่อ",
    includes: ["Canton Fair / Expo", "Factory Visit", "Supplier Meeting"],
  },
  {
    eyebrow: "Talk",
    icon: "languages",
    title: "ล่ามธุรกิจจีน-ไทย-อังกฤษ",
    description:
      "ช่วยแปลโดยคำนึงถึงเป้าหมายทางธุรกิจ การต่อรอง และความหมายแฝงของการสื่อสารในบริบทจีน",
    includes: ["แปลหน้างาน", "สรุปประเด็น", "ช่วยเตรียมคำศัพท์ธุรกิจ"],
  },
  {
    eyebrow: "Move",
    icon: "car",
    title: "ประสานรถ ที่พัก และจังหวะเดินทาง",
    description:
      "ลดภาระเรื่องโลจิสติกส์ เพื่อให้ทีมโฟกัสกับการดูสินค้าและการคุยธุรกิจแทนการแก้ปัญหาเฉพาะหน้า",
    includes: ["รถรับส่ง", "แผนรายวัน", "ร้านอาหารและจุดพัก"],
  },
  {
    eyebrow: "Follow",
    icon: "refresh",
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
    title: "ล่ามธุรกิจ ช่วยเจรจาและคุมต้นทุนนำเข้า",
    platform: "TikTok",
    href: "https://www.tiktok.com/@ryuchinesegege/video/7660610235119291655",
    thumbnail: siteMedia.clips.businessInterpreter,
  },
  {
    title: "นำเข้าเสื้อผ้ากว่างโจว: ราคา ขนส่ง และสร้างแบรนด์",
    platform: "TikTok",
    href: "https://www.tiktok.com/@ryuchinesegege/video/7660609775029292295",
    thumbnail: siteMedia.clips.guangzhouClothing,
  },
  {
    title: "พบซัพพลายเออร์ตัวจริง อุ่นใจก่อนตัดสินใจ",
    platform: "TikTok",
    href: "https://www.tiktok.com/@ryuchinesegege/video/7660611888828484872",
    thumbnail: siteMedia.clips.supplierVisit,
  },
  {
    title: "พาดูงาน Kunming South Asia Expo เพื่อหาซัพพลายเออร์",
    platform: "TikTok",
    href: "https://www.tiktok.com/@ryuchinesegege/video/7660611267031321864",
    thumbnail: siteMedia.clips.kunmingExpo,
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Weerayuth Mitsaman (คุณลิฟต์)",
    role: "Kunming South Asia Expo 2026",
    focus: "การดูแลตลอดทริปและมุมมองด้านธุรกิจ",
    quote:
      "ทีมผู้จัดดูแลได้ดี อาหารการกินอิ่มทุกมื้อ เกินความคาดหวังไว้มาก ถ้าใครอยากมาทัวร์ แนะนำ Ryu Gege เลยครับ ทั้งพาเที่ยว พากิน ดูมุมธุรกิจต่าง ๆ",
  },
  {
    name: "Watcharakorn Srikerdkruen (คุณกร)",
    role: "Kunming South Asia Expo 2026",
    focus: "การดูแลและล่ามตลอดงาน",
    quote:
      "ทีมงานดูแลดีมาก มีล่ามตามแปลติดตัวตลอดเวลา คุณ Ryu Gege ให้ความช่วยเหลือตลอดทั้งงานเลย",
  },
  {
    name: "Minchisa Yingcharoenchanarat (คุณนิ)",
    role: "ตลาดเสื้อผ้ากว่างโจว",
    focus: "การดูแลและสนับสนุนระหว่างทริป",
    quote: "ขอบคุณน้องริวมากนะคะ สำหรับการดูแลซัปพอร์ตอย่างดี ประทับใจมากค่ะ 🫶🏻🤍",
  },
];

const credentials = [
  "ปริญญาโท 2 ใบ — วิศวกรรมการบิน (Northwestern Polytechnical University, ซีอาน) และเทคโนโลยีสื่อสังคม (ม.รังสิต) เข้าใจทั้งกระบวนการผลิตและการตลาด",
  "ใช้ชีวิตและเรียนในประเทศจีนกว่า 5 ปี พร้อมประสบการณ์ติดต่อประสานงานกับจีนมากกว่า 10 ปี เคยได้ทุนการศึกษาเต็มจำนวน และเคยเป็นนักเรียนแลกเปลี่ยน AFS",
  "สื่อสารจีนระดับเจ้าของภาษา และเข้าใจการเจรจาธุรกิจในบริบทจีน (Guanxi)",
  "มีประสบการณ์ล่ามจีน-ไทย-อังกฤษในบริบทธุรกิจ อุตสาหกรรม และวิศวกรรม",
  "Founder-led service: ปีแรกดูแลคุณภาพด้วยตัวริวเองเป็นหลัก",
];

const faqs = [
  [
    "Ryu Gege Tour ต่างจากทัวร์จีนทั่วไปอย่างไร?",
    "เราออกแบบทริปจีนให้มีเป้าหมายชัดเจน ไม่ว่าจะเป็นการไปงานแฟร์ เยี่ยมโรงงาน คุยซัพพลายเออร์ หรือเที่ยวพักผ่อนแบบส่วนตัว คุณจึงไม่ได้แค่ “ไปจีน” แต่ได้เส้นทางที่เหมาะกับสิ่งที่คุณต้องการทำจริง",
  ],
  [
    "อยากหาสินค้าหรือซัพพลายเออร์จีน แต่ยังไม่รู้จะเริ่มจากเมืองไหน ทำอย่างไร?",
    "เพียงบอกประเภทสินค้า งบประมาณ และเป้าหมายธุรกิจของคุณ เราช่วยแนะนำเมือง งานแฟร์ และแนวทางการวางเส้นทางที่เหมาะสม ก่อนออกเดินทาง เพื่อให้ทุกวันของทริปมีเป้าหมาย",
  ],
  [
    "Business Tour พาไปทำอะไรได้บ้าง?",
    "สามารถออกแบบให้ครอบคลุมการไปงานแฟร์ เยี่ยมโรงงาน พบซัพพลายเออร์ สำรวจตลาดค้าส่ง และช่วยสื่อสารระหว่างการนัดหมายตามขอบเขตที่ตกลงกัน",
  ],
  [
    "ไป Canton Fair หรือเยี่ยมโรงงานโดยไม่มีประสบการณ์ได้ไหม?",
    "ได้ เราช่วยเตรียมความพร้อมเรื่องเส้นทาง การเดินทาง การนัดหมาย และสิ่งที่ควรถาม เพื่อให้คุณเข้าพบคู่ค้าอย่างมั่นใจและใช้เวลาในจีนได้คุ้มค่า",
  ],
  [
    "Ryu Gege Tour รับประกันว่าจะได้ซัพพลายเออร์หรือปิดออร์เดอร์ไหม?",
    "เราไม่รับประกันผลการเจรจาหรือคุณภาพสินค้าจากผู้ขาย เพราะเป็นการตัดสินใจทางธุรกิจของคุณ แต่เราช่วยให้คุณเข้าถึงแหล่งข้อมูลและคู่ค้าที่ตรงเป้าหมายขึ้น เพื่อประกอบการตัดสินใจอย่างรอบคอบ",
  ],
  [
    "หลังจบทริป ยังช่วยประสานงานกับซัพพลายเออร์ต่อได้ไหม?",
    "สามารถสอบถามบริการช่วยติดตามหรือสื่อสารต่อหลังทริปได้ โดยประเมินตามลักษณะงานและขอบเขตที่ต้องการ",
  ],
  [
    "ถ้าไม่ได้ไปทำธุรกิจ แต่อยากเที่ยวจีนแบบส่วนตัว ใช้บริการได้ไหม?",
    "ได้ Private Tour ของเราออกแบบตามสไตล์ของคุณ เลือกเมือง โรงแรม ร้านอาหาร และกิจกรรมได้ เหมาะกับคู่รัก ครอบครัว หรือกลุ่มเพื่อนที่อยากเที่ยวจีนอย่างสบายใจ",
  ],
  [
    "Private Tour มีจำนวนผู้เดินทางขั้นต่ำหรือไม่?",
    "แจ้งจำนวนผู้เดินทางและช่วงเวลาที่สะดวกมาได้เลย เราจะออกแบบเส้นทางและเสนอราคาให้เหมาะกับกลุ่มของคุณ",
  ],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Ryu Gege Tour",
  sameAs: [
    "https://www.facebook.com/ryupuriwat/",
    "https://www.ryu-gege.com/",
  ],
  description:
    "Founder-led China business trip facilitation for Thai SME owners, importers, executives, and purchasing teams.",
  areaServed: ["China", "Thailand", "Guangzhou", "Xi'an", "Yunnan", "Chaozhou"],
  serviceType: [
    "Private business trip planning",
    "China factory visit facilitation",
    "Canton Fair business trip",
    "Premium private leisure tour",
    "Thai Chinese interpretation and safe facilitation",
  ],
  founder: {
    "@type": "Person",
    name: "Ryu Puriwat Supapitakpong",
    alternateName: "ภูริวัจน์ ศุภพิทักษ์พงษ์",
    url: "https://www.supapitakpong.com/members/ryu-puriwat-supapitakpong",
  },
};

/* ------------------------------------------------------------------ atoms */

function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline" | "line";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-tour-red text-white shadow-[var(--shadow-cta)] hover:bg-tour-red-dark",
    outline:
      "border border-tour-red/40 bg-white text-tour-red hover:border-tour-red hover:bg-tour-red/5",
    ghost:
      "border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15",
    line: "bg-line-green text-white shadow-[var(--shadow-line)] hover:bg-line-green-dark",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-bold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 focus:ring-offset-transparent ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({
  index,
  label,
  light = false,
  center = false,
}: {
  index: string;
  label: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="font-heading text-sm font-black text-tour-red">
        {index}
      </span>
      <span className="h-px w-8 bg-tour-red/40" />
      <span
        className={`text-xs font-bold uppercase tracking-[0.22em] ${
          light ? "text-gold" : "text-ink-soft"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

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
