import type { Metadata } from "next";
import { siteMedia } from "../media";
import { UnderConstructionPage } from "../UnderConstructionPage";

export const metadata: Metadata = {
  title: "เส้นทางยูนนาน — อยู่ระหว่างจัดทำ | Ryu Gege Tour",
  description: "เส้นทางท่องเที่ยวและธุรกิจยูนนานโดย Ryu Gege Tour กำลังอยู่ระหว่างจัดทำ",
  robots: { index: false, follow: true },
};

export default function YunnanPage() {
  return (
    <UnderConstructionPage
      cityEnglish="Yunnan"
      cityThai="ยูนนาน"
      background={siteMedia.trips.yunnan}
    />
  );
}
