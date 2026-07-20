import type { StaticImageData } from "next/image";
import type { IconName } from "../icons";
import { siteMedia } from "../media";
import privateTour from "../../../assets/xian/highlights/private-tour-2-16.webp";
import changanTwelveHours from "../../../assets/xian/highlights/changan-12-hours.webp";
import wingChunClass from "../../../assets/xian/highlights/wing-chun-class.webp";
import changanDaPaiDang from "../../../assets/xian/highlights/changan-da-pai-dang.webp";
import qingshuiwanSpa from "../../../assets/xian/highlights/qingshuiwan-spa.webp";

export type TripHighlight = {
  number: string;
  englishTitle: string;
  thaiTitle: string;
  description: string;
  icon: IconName;
  image: StaticImageData;
  imagePosition?: string;
};

export const tripHighlights: TripHighlight[] = [
  {
    number: "01",
    englishTitle: "The Royal Entourage",
    thaiTitle: "เอกสิทธิ์แห่งการเดินทางดั่งราชวงศ์",
    description:
      "สัมผัสอิสระแห่งการเดินทางเหนือระดับแบบไพรเวทกรุ๊ป ออกแบบมาเพื่อ 2–16 ท่าน ให้คุณพักผ่อนอย่างเต็มอิ่ม ไม่ต้องตื่นเช้าตรู่ ไม่ต้องรีบเร่งเดินตามธงทัวร์ พร้อมรถปรับอากาศส่วนตัวและไกด์ท้องถิ่นที่คอยดูแลกรุ๊ปของคุณโดยเฉพาะ ประดุจบุคคลสำคัญแห่งราชสำนัก",
    icon: "car",
    image: privateTour,
    imagePosition: "object-[38%_50%]",
  },
  {
    number: "02",
    englishTitle: "The Emperor's Legacy",
    thaiTitle: "มรดกแห่งองค์จักรพรรดิ",
    description:
      "ย้อนรอยความยิ่งใหญ่ของจักรพรรดิองค์แรกแห่งแผ่นดินจีน เจาะลึกสุสานทหารดินเผาจิ๋นซีฮ่องเต้ มรดกโลกอันทรงคุณค่า พร้อมดื่มด่ำตำนานรักอมตะของหยางกุ้ยเฟยที่สระน้ำพุร้อนหัวชิงฉือ สถานที่พักผ่อนส่วนพระองค์ที่เปี่ยมด้วยมนต์ขลังและร่องรอยประวัติศาสตร์",
    icon: "shield",
    image: siteMedia.xian.days.two,
  },
  {
    number: "03",
    englishTitle: "Reign of the Tang Dynasty",
    thaiTitle: "ทะลุมิติสู่มหานครฉางอัน",
    description:
      "ทะลุมิติเวลาสู่ยุครุ่งเรืองที่สุดของราชวงศ์ถังที่ธีมพาร์คฉางอัน 12 ชั่วยาม (Chang'an 12 Hours) พร้อมโอกาสสวมบทบาทเป็นชนชั้นสูงชาวฉางอันในชุดฮั่นฝูเต็มยศ และเก็บภาพพอร์ทเทรตที่งดงามสง่าราวกับกษัตริย์หรือราชินีจากซีรีส์ฟอร์มยักษ์",
    icon: "sparkles",
    image: changanTwelveHours,
    imagePosition: "object-center",
  },
  {
    number: "04",
    englishTitle: "The Martial Arts Master",
    thaiTitle: "วิถีแห่งจอมยุทธ์",
    description:
      "เปิดประสบการณ์สุดยูนีคที่นำพาคุณก้าวเข้าสู่โลกแห่งยุทธภพที่หาไม่ได้จากทัวร์ทั่วไป สัมผัสวิถีจอมยุทธ์ด้วยคลาสเรียนศิลปะการต่อสู้มวยหย่งชุน (Wing Chun) ขนานแท้ถึงถิ่น ซึมซับทั้งปรัชญาและศาสตร์แห่งกำลังภายในของจีนอย่างลึกซึ้ง ภายใต้การดูแลของอาจารย์จางกั๋วเวย (张国威) ผู้สืบทอดวิชาสายตรงจากอาจารย์ยิปมัน",
    icon: "route",
    image: wingChunClass,
    imagePosition: "object-center",
  },
  {
    number: "05",
    englishTitle: "The Imperial Winter",
    thaiTitle: "เหมันต์ฤดูในนครหลวง",
    description:
      "ฉีกกฎการท่องเที่ยวเมืองประวัติศาสตร์ ด้วยการพุ่งทะยานสู่โลกใบใหม่ที่ Xi'an Hot Snow Miracle ลานสกีหิมะในร่มระดับเวิลด์คลาส ให้คุณสนุกกับกิจกรรมฤดูหนาวได้ตลอดทั้งปี ประดุจการเสด็จประพาสลานน้ำแข็งส่วนพระองค์",
    icon: "sparkles",
    image: siteMedia.xian.days.four,
  },
  {
    number: "06",
    englishTitle: "The Golden Era",
    thaiTitle: "ราตรีสว่างไสวแห่งราชธานี",
    description:
      "ดื่มด่ำแสงสียามค่ำคืนของมหานครที่ไม่เคยหลับใหล เช็กอินแลนด์มาร์กสำคัญที่สะกดทุกสายตา ทั้งหอระฆัง หอกลอง เจดีย์ห่านป่าใหญ่ และเดินทอดน่องชมสถาปัตยกรรมสุดอลังการที่ถนนคนเดินต้าถัง (Grand Tang Mall) ราวกับกำลังเดินท่ามกลางงานเฉลิมฉลองอันยิ่งใหญ่ของราชสำนัก",
    icon: "clock",
    image: siteMedia.trips.xian,
  },
  {
    number: "07",
    englishTitle: "The Royal Banquet",
    thaiTitle: "เครื่องคาวหวานแห่งฉางอัน",
    description:
      "อิสระเต็มที่กับมื้ออาหารดั่งงานเลี้ยงเฉลิมฉลอง ลืมภาพอาหารโต๊ะจีนแบบเดิม ๆ แล้วเลือกลิ้มลองรสชาติพื้นเมืองแท้ด้วยตัวเอง ทั้งร้านปิ้งย่างสูตรเด็ด สัมผัสสีสันและรสชาติระดับตำนานของอาหารสไตล์ฉางอันขนานแท้ที่ Chang'an Da Pai Dang และเพลิดเพลินกับสตรีทฟู้ดละลานตาบนถนนคนเดินมุสลิม (Muslim Quarter)",
    icon: "store",
    image: changanDaPaiDang,
    imagePosition: "object-[52%_50%]",
  },
  {
    number: "08",
    englishTitle: "The Emperor's Retreat",
    thaiTitle: "การพักผ่อนขั้นสุดดั่งจักรพรรดิ",
    description:
      "ปิดท้ายทริปอย่างสมบูรณ์แบบดั่งจักรพรรดิ ทิ้งความเมื่อยล้าทั้งหมดไว้ที่ Qingshuiwan Spa ปรนนิบัติตัวเองและผ่อนคลายกับการแช่ออนเซ็นพร้อมทำสปาระดับพรีเมียม เพื่อฟื้นฟูพลังกายและจิตใจก่อนเดินทางกลับด้วยความสดชื่นอย่างขีดสุด",
    icon: "sparkles",
    image: qingshuiwanSpa,
    imagePosition: "object-center",
  },
  {
    number: "09",
    englishTitle: "Uncompromised Prestige",
    thaiTitle: "ประสบการณ์ล้ำค่า ไร้ข้อผูกมัด",
    description:
      "เที่ยวเต็มอิ่ม ดื่มด่ำกับประสบการณ์และวัฒนธรรมอย่างแท้จริงในแบบฉบับนักเดินทางระดับวีไอพี ไม่มีการบังคับเข้าร้านค้ารัฐบาล หรือร้านขายของที่เสียเวลา เพราะเวลาทุกวินาทีของคุณมีค่าและถูกออกแบบมาเพื่อการพักผ่อนเหนือระดับอย่างแท้จริง",
    icon: "check",
    image: siteMedia.xian.days.one,
  },
];
