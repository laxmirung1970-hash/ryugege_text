import Image from "next/image";
import { siteMedia } from "./media";

export function BrandMark() {
  return (
    <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-1 shadow-[0_10px_24px_rgba(139,17,24,0.2)]">
      <Image
        src={siteMedia.logo}
        alt="Ryu Gege Tour"
        sizes="48px"
        className="size-full object-contain"
      />
    </span>
  );
}
