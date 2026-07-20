import type { Metadata } from "next";
import { siteMedia } from "../media";
import { UnderConstructionPage } from "../UnderConstructionPage";

export const metadata: Metadata = {
  title: "เส้นทางกวางโจว — อยู่ระหว่างจัดทำ",
  description: "เส้นทางธุรกิจกวางโจวโดย Ryu Gege Tour กำลังอยู่ระหว่างจัดทำ",
  robots: { index: false, follow: true },
};

export default function GuangzhouPage() {
  return (
    <UnderConstructionPage
      cityEnglish="Guangzhou"
      cityThai="กวางโจว"
      background={siteMedia.trips.guangzhou}
    />
  );
}
