import type { Metadata } from "next";
import { siteMedia } from "../media";
import { UnderConstructionPage } from "../UnderConstructionPage";

export const metadata: Metadata = {
  title: "เส้นทางแต้จิ๋ว — อยู่ระหว่างจัดทำ | Ryu Gege Tour",
  description: "เส้นทางท่องเที่ยวแต้จิ๋วโดย Ryu Gege Tour กำลังอยู่ระหว่างจัดทำ",
  robots: { index: false, follow: true },
};

export default function ChaozhouPage() {
  return (
    <UnderConstructionPage
      cityEnglish="Chaozhou"
      cityThai="แต้จิ๋ว"
      background={siteMedia.trips.chaozhou}
    />
  );
}
