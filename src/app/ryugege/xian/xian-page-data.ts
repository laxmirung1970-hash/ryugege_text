import type { StaticImageData } from "next/image";
import type { IconName } from "../icons";
import { siteMedia } from "../media";

export type Vehicle = {
  name: string;
  seats: string;
  image: StaticImageData;
};

export type Day = {
  day: string;
  title: string;
  places: string[];
  stay: string;
  image: StaticImageData;
};

export type PriceTier = {
  group: string;
  vehicle: string;
  rows: { label: string; price: string }[];
};

export const heroMeta = [
  { icon: "clock" as IconName, label: "5 วัน 4 คืน" },
  { icon: "car" as IconName, label: "รถยนต์ส่วนตัว" },
  { icon: "chat" as IconName, label: "ล่ามไทย-จีน ดูแลเอง" },
  { icon: "map-pin" as IconName, label: "2 ท่านขึ้นไป / กลุ่มส่วนตัว" },
];

export const vehicles: Vehicle[] = [
  {
    name: "รถ 5 ที่นั่ง",
    seats: "ลูกค้า 2 ท่าน",
    image: siteMedia.xian.vehicles.sedan,
  },
  {
    name: "รถ 9 ที่นั่ง",
    seats: "ลูกค้า 4 ท่าน",
    image: siteMedia.xian.vehicles.van,
  },
  {
    name: "รถ 14 ที่นั่ง",
    seats: "ลูกค้า 6 ท่าน",
    image: siteMedia.xian.vehicles.minibus,
  },
  {
    name: "รถ 19 ที่นั่ง",
    seats: "ลูกค้า 8–10 ท่าน",
    image: siteMedia.xian.vehicles.coach,
  },
];

export const days: Day[] = [
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

export const itinerarySummary = [
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

export const priceTiers: PriceTier[] = [
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

export const included = [
  "รถยนต์ส่วนตัวพร้อมคนขับตลอดทริป",
  "ริว (Ryu Gege) ดูแลภาษาและประสานงานตลอดการเดินทาง",
  "ที่พัก 4 คืน ในโรงแรม 5 ดาว Xi'an Datang West Market Hotel",
  "ค่าเข้าชมสถานที่ตามโปรแกรม",
  "วางแผนเส้นทางและจัดคิวเข้าชม",
];

export const excluded = [
  "ตั๋วเครื่องบินไป-กลับ",
  "วีซ่าจีน (หากมี)",
  "ค่าใช้จ่ายส่วนตัวและช้อปปิ้ง",
  "กิจกรรมทางเลือก (เช่น สปา, สกี, เช่าชุดฮั่นฝู และช่างภาพส่วนตัว)",
  "อาหารบางมื้อนอกโปรแกรม",
];
