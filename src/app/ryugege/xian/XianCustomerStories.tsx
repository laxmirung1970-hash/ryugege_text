import Image, { type StaticImageData } from "next/image";
import customerOne from "../../../assets/xian/customer-stories/customer-1.webp";
import customerTwo from "../../../assets/xian/customer-stories/customer-2.webp";
import customerThree from "../../../assets/xian/customer-stories/customer-3.webp";
import customerFour from "../../../assets/xian/customer-stories/customer-4.webp";
import customerFive from "../../../assets/xian/customer-stories/customer-5.webp";
import customerSix from "../../../assets/xian/customer-stories/customer-6.webp";
import customerSeven from "../../../assets/xian/customer-stories/customer-7.webp";
import customerEight from "../../../assets/xian/customer-stories/customer-8.webp";
import customerNine from "../../../assets/xian/customer-stories/customer-9.webp";

type CustomerMoment = {
  image: StaticImageData;
  alt: string;
  featured?: boolean;
};

const customerMoments: CustomerMoment[] = [
  {
    image: customerOne,
    alt: "ผู้ร่วมทริปถ่ายภาพหน้าพระเจดีย์ห่านป่าใหญ่ เมืองซีอาน",
    featured: true,
  },
  {
    image: customerTwo,
    alt: "ผู้ร่วมทริปสวมชุดฮั่นฝูในย่านต้าถังยามค่ำ",
  },
  {
    image: customerThree,
    alt: "ผู้ร่วมทริปรับประทานอาหารที่ร้านในซีอาน",
  },
  {
    image: customerFour,
    alt: "ผู้ร่วมทริปเลือกซื้อของที่ระลึกในร้านท้องถิ่นซีอาน",
  },
  {
    image: customerFive,
    alt: "ผู้ร่วมทริปเดินเที่ยวตลาดย่านมุสลิมยามค่ำคืน",
  },
  {
    image: customerSix,
    alt: "ผู้ร่วมทริปถ่ายภาพกับกองทัพทหารดินเผา",
  },
  {
    image: customerSeven,
    alt: "ผู้ร่วมทริปเก็บภาพสนุกกับบรรยากาศทหารดินเผา",
  },
  {
    image: customerEight,
    alt: "ผู้ร่วมทริปถ่ายภาพหน้าแลนด์มาร์กต้าถังในซีอาน",
  },
  {
    image: customerNine,
    alt: "ผู้ร่วมทริปถ่ายภาพในร้านอาหารฉางอัน",
  },
];

export function XianCustomerStories() {
  return (
    <section
      aria-labelledby="customer-stories-title"
      className="relative overflow-hidden bg-espresso py-20 text-white sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_0%,rgba(239,47,55,0.26),transparent_34%),radial-gradient(circle_at_90%_82%,rgba(244,195,95,0.16),transparent_30%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-light">
              06 &nbsp;—&nbsp; Customer moments
            </p>
            <h2
              id="customer-stories-title"
              className="font-heading mt-5 text-3xl font-black leading-[1.1] sm:text-4xl"
            >
              ความทรงจำจากผู้ร่วมทริปจริง
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/72">
              ทุกภาพคือช่วงเวลาจริงระหว่างการเดินทางในซีอาน — ตั้งแต่แลนด์มาร์กสำคัญ
              มื้ออาหาร ไปจนถึงรอยยิ้มที่เกิดขึ้นตลอดเส้นทาง
            </p>
          </div>
          <div className="w-fit rounded-full border border-gold-light/30 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-light">
            9 moments · 1 journey
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[11.5rem]">
          {customerMoments.map((moment) => (
            <figure
              key={moment.alt}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal shadow-[0_20px_45px_rgba(0,0,0,0.22)] ${
                moment.featured
                  ? "col-span-2 row-span-2 min-h-80 sm:min-h-[28rem] lg:min-h-0"
                  : "aspect-square lg:aspect-auto"
              }`}
            >
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                placeholder="blur"
                sizes={
                  moment.featured
                    ? "(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 50vw"
                    : "(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 25vw"
                }
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
              {moment.featured ? (
                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
                    Real trip · Xi&apos;an
                  </p>
                  <p className="font-heading mt-2 text-xl font-black sm:text-2xl">
                    ภาพจริงจากผู้ร่วมทริป
                  </p>
                </figcaption>
              ) : (
                <figcaption className="sr-only">{moment.alt}</figcaption>
              )}
            </figure>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-white/60">
          ภาพถ่ายจากผู้ร่วมทริปจริง เผยแพร่โดยได้รับอนุญาต
        </p>
      </div>
    </section>
  );
}
