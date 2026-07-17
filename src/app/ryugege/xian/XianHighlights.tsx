import Image, { type StaticImageData } from "next/image";
import { Icon, type IconName } from "../icons";
import { siteMedia } from "../media";
import wingChun from "../../../assets/xian/highlights/wing-chun.jpg";
import huaqingPool from "../../../assets/xian/highlights/huaqing-pool.jpg";

type TripHighlight = {
  number: string;
  englishTitle: string;
  thaiTitle: string;
  description: string;
  icon: IconName;
  image: StaticImageData;
  imagePosition?: string;
};

const tripHighlights: TripHighlight[] = [
  { number: "01", englishTitle: "The Royal Entourage", thaiTitle: "เอกสิทธิ์แห่งการเดินทางดั่งราชวงศ์", description: "สัมผัสอิสระแห่งการเดินทางเหนือระดับแบบไพรเวทกรุ๊ป ออกแบบมาเพื่อ 2–16 ท่าน ให้คุณพักผ่อนอย่างเต็มอิ่ม ไม่ต้องตื่นเช้าตรู่ ไม่ต้องรีบเร่งเดินตามธงทัวร์ พร้อมรถปรับอากาศส่วนตัวและไกด์ท้องถิ่นที่คอยดูแลกรุ๊ปของคุณโดยเฉพาะ ประดุจบุคคลสำคัญแห่งราชสำนัก", icon: "car", image: siteMedia.xian.vehicles.sedan },
  { number: "02", englishTitle: "The Emperor's Legacy", thaiTitle: "มรดกแห่งองค์จักรพรรดิ", description: "ย้อนรอยความยิ่งใหญ่ของจักรพรรดิองค์แรกแห่งแผ่นดินจีน เจาะลึกสุสานทหารดินเผาจิ๋นซีฮ่องเต้ มรดกโลกอันทรงคุณค่า พร้อมดื่มด่ำตำนานรักอมตะของหยางกุ้ยเฟยที่สระน้ำพุร้อนหัวชิงฉือ สถานที่พักผ่อนส่วนพระองค์ที่เปี่ยมด้วยมนต์ขลังและร่องรอยประวัติศาสตร์", icon: "shield", image: siteMedia.xian.days.two },
  { number: "03", englishTitle: "Reign of the Tang Dynasty", thaiTitle: "ทะลุมิติสู่มหานครฉางอัน", description: "ทะลุมิติเวลาสู่ยุครุ่งเรืองที่สุดของราชวงศ์ถังที่ธีมพาร์คฉางอัน 12 ชั่วยาม (Chang'an 12 Hours) พร้อมโอกาสสวมบทบาทเป็นชนชั้นสูงชาวฉางอันในชุดฮั่นฝูเต็มยศ และเก็บภาพพอร์ทเทรตที่งดงามสง่าราวกับกษัตริย์หรือราชินีจากซีรีส์ฟอร์มยักษ์", icon: "sparkles", image: siteMedia.xian.days.three },
  { number: "04", englishTitle: "The Martial Arts Master", thaiTitle: "วิถีแห่งจอมยุทธ์", description: "เปิดประสบการณ์สุดยูนีคที่นำพาคุณก้าวเข้าสู่โลกแห่งยุทธภพที่หาไม่ได้จากทัวร์ทั่วไป สัมผัสวิถีจอมยุทธ์ด้วยคลาสเรียนศิลปะการต่อสู้มวยหย่งชุน (Wing Chun) ขนานแท้ถึงถิ่น ซึมซับทั้งปรัชญาและศาสตร์แห่งกำลังภายในของจีนอย่างลึกซึ้ง", icon: "route", image: wingChun, imagePosition: "object-[50%_68%]" },
  { number: "05", englishTitle: "The Imperial Winter", thaiTitle: "เหมันต์ฤดูในนครหลวง", description: "ฉีกกฎการท่องเที่ยวเมืองประวัติศาสตร์ ด้วยการพุ่งทะยานสู่โลกใบใหม่ที่ Xi'an Hot Snow Miracle ลานสกีหิมะในร่มระดับเวิลด์คลาส ให้คุณสนุกกับกิจกรรมฤดูหนาวได้ตลอดทั้งปี ประดุจการเสด็จประพาสลานน้ำแข็งส่วนพระองค์", icon: "sparkles", image: siteMedia.xian.days.four },
  { number: "06", englishTitle: "The Golden Era", thaiTitle: "ราตรีสว่างไสวแห่งราชธานี", description: "ดื่มด่ำแสงสียามค่ำคืนของมหานครที่ไม่เคยหลับใหล เช็กอินแลนด์มาร์กสำคัญที่สะกดทุกสายตา ทั้งหอระฆัง หอกลอง เจดีย์ห่านป่าใหญ่ และเดินทอดน่องชมสถาปัตยกรรมสุดอลังการที่ถนนคนเดินต้าถัง (Grand Tang Mall) ราวกับกำลังเดินท่ามกลางงานเฉลิมฉลองอันยิ่งใหญ่ของราชสำนัก", icon: "clock", image: siteMedia.trips.xian },
  { number: "07", englishTitle: "The Royal Banquet", thaiTitle: "เครื่องคาวหวานแห่งฉางอัน", description: "อิสระเต็มที่กับมื้ออาหารดั่งงานเลี้ยงเฉลิมฉลอง ลืมภาพอาหารโต๊ะจีนจืดชืดแบบเดิม ๆ แล้วเลือกลิ้มลองรสชาติพื้นเมืองแท้ด้วยตัวเอง ทั้งร้านปิ้งย่างสูตรเด็ด ภัตตาคารระดับตำนานอย่าง Chang'an Da Pai Dang และสตรีทฟู้ดละลานตาที่ถนนคนเดินมุสลิม (Muslim Quarter)", icon: "store", image: siteMedia.xian.days.five },
  { number: "08", englishTitle: "The Emperor's Retreat", thaiTitle: "การพักผ่อนขั้นสุดดั่งจักรพรรดิ", description: "ปิดท้ายทริปอย่างสมบูรณ์แบบดั่งจักรพรรดิ ทิ้งความเมื่อยล้าทั้งหมดไว้ที่ Qingshuiwan Spa ปรนนิบัติตัวเองและผ่อนคลายกับการแช่ออนเซ็นพร้อมทำสปาระดับพรีเมียม เพื่อฟื้นฟูพลังกายและจิตใจก่อนเดินทางกลับด้วยความสดชื่นอย่างขีดสุด", icon: "sparkles", image: huaqingPool },
  { number: "09", englishTitle: "Uncompromised Prestige", thaiTitle: "ประสบการณ์ล้ำค่า ไร้ข้อผูกมัด", description: "เที่ยวเต็มอิ่ม ดื่มด่ำกับประสบการณ์และวัฒนธรรมอย่างแท้จริงในแบบฉบับนักเดินทางระดับวีไอพี ไม่มีการบังคับเข้าร้านค้ารัฐบาลหรือร้านขายของที่เสียเวลา เพราะเวลาทุกวินาทีของคุณมีค่าและถูกออกแบบมาเพื่อการพักผ่อนเหนือระดับอย่างแท้จริง", icon: "check", image: siteMedia.xian.days.one },
];

export function XianHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#211510] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_0%,rgba(177,91,43,0.35),transparent_28%),radial-gradient(circle_at_94%_72%,rgba(239,47,55,0.18),transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3"><span className="font-heading text-sm font-black text-tour-red">01</span><span className="h-px w-8 bg-gold/60" /><span className="text-xs font-bold uppercase tracking-[0.24em] text-gold-light">Trip Highlights</span></div>
          <h2 className="font-heading mt-5 text-3xl font-black leading-[1.08] sm:text-4xl">Highlight ทริป Xian</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">เก้าประสบการณ์ที่คัดสรรมาเพื่อให้การเดินทางครั้งนี้มีทั้งความสบาย ความสนุก และเรื่องราวที่น่าจดจำ — แตะการ์ดเพื่ออ่านรายละเอียด</p>
        </div>
        <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {tripHighlights.map((highlight) => (
            <details key={highlight.number} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#2a1c17] shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:border-gold/45 hover:shadow-[0_28px_60px_rgba(0,0,0,0.32)]">
              <summary className="relative block min-h-[315px] cursor-pointer overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                <Image src={highlight.image} alt={highlight.thaiTitle} fill sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw" placeholder="blur" className={`object-cover transition duration-700 group-hover:scale-105 ${highlight.imagePosition ?? ""}`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,7,5,0.08)_20%,rgba(12,7,5,0.48)_52%,rgba(12,7,5,0.96)_100%)]" />
                <div className="absolute left-5 top-5 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full border border-gold/45 bg-espresso/75 text-gold-light backdrop-blur"><Icon name={highlight.icon} className="size-5" /></span><span className="font-heading text-4xl font-black tracking-tight text-white/35">{highlight.number}</span></div>
                <div className="absolute inset-x-0 bottom-0 p-6"><p className="text-[11px] font-black uppercase tracking-[0.16em] text-gold-light">{highlight.englishTitle}</p><h3 className="font-heading mt-2 text-xl font-black leading-snug text-white">{highlight.thaiTitle}</h3><span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur transition group-hover:border-gold group-hover:bg-gold group-hover:text-espresso">กดอ่านเพิ่มเติม <span className="text-white/55 group-hover:text-espresso/70">/ Read More</span><Icon name="chevron-down" className="size-4 transition group-open:rotate-180" /></span></div>
              </summary>
              <div className="border-t border-white/10 bg-[#fffaf2] px-6 py-6 text-charcoal"><p className="text-sm leading-7 text-ink">{highlight.description}</p><div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-tour-red"><span className="size-1.5 rounded-full bg-tour-red" />ออกแบบเพื่อกลุ่มส่วนตัวของคุณ</div></div>
            </details>
          ))}
        </div>
        <p className="mt-7 text-center text-xs leading-5 text-white/42">ภาพประกอบบางส่วนจาก Wikimedia Commons และภาพสถานที่จริงในโปรแกรมทริป</p>
      </div>
    </section>
  );
}
