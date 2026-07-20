import type { StaticImageData } from "next/image";
import type { HeroSlide } from "./HeroCarousel";
import type { NavItem } from "./SiteHeader";
import type { IconName } from "./icons";
import { LINE_URL } from "./constants";
import { siteMedia } from "./media";
import { tripRouteHref } from "./site-paths";

export const CONTACT_HREF = LINE_URL;
export const CONTACT_LABEL = "ปรึกษาฟรีทาง LINE Official";
export const CONTACT_ICON: IconName = "chat";

type SocialLink = {
  label: string;
  value: string;
  href: string;
  icon: IconName;
};

export type TripCard = {
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

export const navItems: NavItem[] = [
  { label: "หน้าแรก", href: "#top" },
  {
    label: "ทริปแนะนำ",
    children: [
      { label: "ซีอาน / วัฒนธรรม (Leisure)", href: tripRouteHref("xian") },
      { label: "แต้จิ๋ว / Chaozhou", href: tripRouteHref("chaozhou") },
      {
        label: "กวางโจว / Canton Fair + โรงงาน",
        href: tripRouteHref("guangzhou"),
      },
      { label: "ยูนนาน / Business + Leisure", href: tripRouteHref("yunnan") },
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

export const socialLinks: SocialLink[] = [
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

export const heroProof = [
  "Canton Fair / Factory Visit",
  "ล่ามจีน-ไทย-อังกฤษ",
  "Private Tour / Leisure",
  "Founder-led Service",
];

export const marqueeWords = [
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

export const problemCards: { icon: IconName; title: string; copy: string }[] = [
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

export const heroSlides: HeroSlide[] = [
  {
    desktopImage: siteMedia.hero.fair.desktop,
    tabletImage: siteMedia.hero.fair.tablet,
    mobileImage: siteMedia.hero.fair.mobile,
    kicker: "Canton Fair / Factory",
    title: "พาเดินงานแฟร์และดูโรงงานจีน",
    caption:
      "เตรียมคำถาม สรุปดีลหน้างาน และช่วยคุยกับซัพพลายเออร์ให้ทีมไทยเข้าใจตรงกัน",
  },
  {
    desktopImage: siteMedia.hero.market.desktop,
    tabletImage: siteMedia.hero.market.tablet,
    mobileImage: siteMedia.hero.market.mobile,
    kicker: "Sourcing Market",
    title: "ลงตลาดค้าส่งของจริง",
    caption:
      "เห็นสินค้าหลากหลายหมวดในพื้นที่เดียว เหมาะกับผู้เริ่มนำเข้าและร้านค้าออนไลน์",
  },
  {
    desktopImage: siteMedia.hero.interpreter.desktop,
    tabletImage: siteMedia.hero.interpreter.tablet,
    mobileImage: siteMedia.hero.interpreter.mobile,
    kicker: "Interpretation",
    title: "มีล่ามธุรกิจเดินไปกับคุณ",
    caption: "แปลโดยดูบริบทธุรกิจและการต่อรอง ไม่ใช่แค่แปลคำต่อคำ",
  },
  {
    desktopImage: siteMedia.hero.privateTour.desktop,
    tabletImage: siteMedia.hero.privateTour.tablet,
    mobileImage: siteMedia.hero.privateTour.mobile,
    kicker: "Private Tour / Leisure",
    title: "ทริปส่วนตัวในแบบที่คุณเลือก",
    caption: "เที่ยวจีนแบบไม่ต้องมีเป้าหมายธุรกิจ พร้อมดูแลภาษา เส้นทาง และจังหวะการเดินทาง",
  },
];

export const contactCards = [
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

export const shortcutBenefits: {
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

export const tripCards: TripCard[] = [
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
    href: tripRouteHref("guangzhou"),
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
    href: tripRouteHref("xian"),
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
    href: tripRouteHref("yunnan"),
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
    href: tripRouteHref("chaozhou"),
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

export const featuredTripOrder = ["Xi'an", "Chaozhou", "Guangzhou", "Yunnan"];

export const serviceCards: ServiceCard[] = [
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

export const processSteps = [
  ["Brief", "คุยเป้าหมายสินค้า เมือง ช่วงเวลา งบประมาณ และความคาดหวังหลังจบทริป"],
  ["Match", "เลือกเมือง งานแฟร์ ตลาด หรือโรงงานที่เหมาะกับเป้าหมายและจำนวนวัน"],
  ["Prepare", "เตรียมคำถาม เอกสาร เส้นทาง รถ ที่พัก และเรื่องที่ควรรู้ก่อนเดินทาง"],
  ["Facilitate", "ดูแลหน้างาน แปล ประสาน และช่วยสรุปประเด็นที่ต้องตัดสินใจ"],
  ["Follow up", "ต่อยอดการสื่อสารหลังทริปตามขอบเขตที่ตกลงกัน"],
];

export const reviewClips: ReviewClip[] = [
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

export const testimonials: Testimonial[] = [
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

export const credentials = [
  "ปริญญาโท 2 ใบ — วิศวกรรมการบิน (Northwestern Polytechnical University, ซีอาน) และเทคโนโลยีสื่อสังคม (ม.รังสิต) เข้าใจทั้งกระบวนการผลิตและการตลาด",
  "ใช้ชีวิตและเรียนในประเทศจีนกว่า 5 ปี พร้อมประสบการณ์ติดต่อประสานงานกับจีนมากกว่า 10 ปี เคยได้ทุนการศึกษาเต็มจำนวน และเคยเป็นนักเรียนแลกเปลี่ยน AFS",
  "สื่อสารจีนระดับเจ้าของภาษา และเข้าใจการเจรจาธุรกิจในบริบทจีน (Guanxi)",
  "มีประสบการณ์ล่ามจีน-ไทย-อังกฤษในบริบทธุรกิจ อุตสาหกรรม และวิศวกรรม",
  "Founder-led service: ปีแรกดูแลคุณภาพด้วยตัวริวเองเป็นหลัก",
];

export const faqs = [
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

export const jsonLd = {
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
