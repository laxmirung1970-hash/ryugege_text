# Agent Handoff — Ryu Gege Tour

เอกสารนี้คือจุดเริ่มต้นสำหรับเอเจนต์หรือผู้พัฒนาที่มารับช่วงโปรเจกต์

**Last verified:** 2026-07-20

**Repository:** <https://github.com/laxmirung1970-hash/ryugege_text>

**Production:** <https://laxmirung1970-hash.github.io/ryugege_text/ryugege/>

## 1. Reading order

1. อ่าน `AGENTS.md` ก่อนทุกครั้ง
2. ก่อนแก้ Next.js ให้อ่านคู่มือที่เกี่ยวข้องใน `node_modules/next/dist/docs/` เพราะโปรเจกต์ใช้ Next.js 16
3. อ่าน `PROJECT_OVERVIEW.md`, `ARCHITECTURE.md`, `CONTENT_MODEL.md` และ `DEVELOPMENT_AND_DEPLOYMENT.md`
4. ตรวจ `git status -sb` และ diff ก่อนเขียนไฟล์ เพื่อไม่ทับงานของผู้ใช้

หากเอกสารขัดกับโค้ด ให้ถือโค้ดใน branch ล่าสุดเป็นแหล่งข้อมูลจริง แล้วแก้เอกสารให้ตรงใน commit เดียวกัน

## 2. Current product state

- Landing page หลักพร้อมใช้งานที่ `/ryugege/`
- หน้า Xi'an พร้อมข้อมูล Highlights, รถ, โปรแกรม 5 วัน 4 คืน, ตารางอาหาร/ที่พัก, ราคา, สิ่งที่รวม/ไม่รวม และภาพลูกค้าจริง
- Chaozhou, Guangzhou และ Yunnan ใช้หน้า Under Construction ร่วมกัน
- Hero หน้าแรกเป็น carousel 4 ภาพ มีไฟล์ Desktop, Tablet และ Mobile แยกกัน
- คลิปหน้าแรกใช้ภาพ preview และเปิด TikTok ต้นทาง
- ฟอร์มสอบถามไม่มี backend; สร้างข้อความแล้วเปิด LINE Official
- GitHub Pages deployment ทำงานอัตโนมัติจาก `master`

## 3. Work completed in the latest local change set

### P0/P1 — correctness and lead flow

- ปรับข้อมูลและ validation ของ Inquiry Form และข้อความที่ส่งเข้า LINE
- ยืนยันว่ารับลูกค้าซีอานตั้งแต่ 2 ท่าน แต่การเลือกรถต้องนับไกด์เพิ่มอีก 1 ท่านพร้อมพื้นที่สัมภาระ
- แยกความหมายระหว่างจำนวนลูกค้าและจำนวนที่นั่งของรถให้ชัดเจน
- ปรับข้อความ Contact/CTA และข้อมูลที่ผู้ใช้ร้องขอในรอบก่อนหน้า

### P2 — performance and code cleanliness

- Scroll progress ใช้ ref และ `requestAnimationFrame` ไม่ set React state ทุก scroll event
- แยก static data ออกจาก UI เป็น `home-data.ts` และ `xian/xian-page-data.ts`
- แยก component ที่ใช้ร่วมกันเป็น `CtaLink.tsx` และ `SectionLabel.tsx`
- รวมการสร้าง base path ไว้ใน `site-paths.ts`
- Hero มี responsive WebP variants; slide แรกโหลด eager/high priority และ slide ถัดไปโหลดภายหลัง
- ลดวิดีโอ Under Construction จากประมาณ 5.52 MB เหลือ 1.32 MB พร้อม poster
- ลดโลโก้จากประมาณ 34 KB เหลือ 5.4 KB
- Static server รองรับ ETag, Last-Modified, cache policy ที่ปลอดภัย และ MP4 range requests
- ลบ starter SVG และ media ที่ยืนยันแล้วว่าไม่ได้ใช้งาน
- เปลี่ยนไฟล์ `changan-12-hours.png` ที่เนื้อแท้เป็น WebP ให้ใช้นามสกุลถูกต้อง

## 4. Critical business/content rules

- สะกดแบรนด์เป็น **Ryu Gege** เท่านั้น ไม่ใช้ `RyuGeGe` หรือ `Ryu GeGe` ในข้อความใหม่
- ช่องทางหลักสำหรับสอบถามและจองคือ LINE Official: `https://lin.ee/nxKOKBTR`
- เบอร์โทรที่แสดงคือ `092 842 2121`
- ห้ามรับประกันว่าจะปิดดีล ได้ซัพพลายเออร์ หรือได้กำไร
- ห้ามสร้างรีวิว ชื่อลูกค้า สถิติ หรือใบอนุญาตที่ไม่มีหลักฐาน
- หน้า Xi'an แสดงราคาเริ่มต้น ฿20,900 แต่ตารางราคาเริ่มที่กลุ่ม 3–4 ท่าน ขณะที่ลูกค้า 2 ท่านสามารถสอบถามราคาออกแบบเฉพาะกลุ่มได้ ห้ามประดิษฐ์ราคา 2 ท่าน
- `vehicles[].seats` หมายถึง **จำนวนลูกค้า** ไม่ใช่จำนวนผู้โดยสารทั้งหมด ไกด์เพิ่มอีก 1 คน
- กิจกรรมสปา สกี ชุดฮั่นฝู และช่างภาพส่วนตัวเป็นกิจกรรมทางเลือกและอยู่ในรายการราคาไม่รวม
- การแก้ข้อมูลทริปต้องตรวจทั้ง `home-data.ts`, `constants.ts`, navigation, footer, JSON-LD และ route detail ที่เกี่ยวข้อง

## 5. Deliberate technical decisions

- Static export only: ห้ามเพิ่ม Server Actions, Route Handlers หรือ feature ที่ต้องมี runtime server
- `images.unoptimized: true` จำเป็นสำหรับ GitHub Pages; ประสิทธิภาพได้จากการเตรียม WebP ให้ตรงขนาดก่อน commit
- Prompt ใช้เฉพาะ 600/700 และปิด preload; Sarabun ใช้ 400/600/700
- Client Component ต้องเล็กและจำกัดเฉพาะ interaction เช่น carousel, header, form, TikTok gallery และ Xi'an highlight explorer
- Content arrays และ metadata ควรอยู่ใน data files ไม่เขียนซ้ำใน component
- ใช้ `withSiteBasePath` สำหรับไฟล์ใน `public/` และ `tripRouteHref` สำหรับ destination routes
- `tmp/`, `.next/`, `out/`, log และไฟล์ audit เป็นของชั่วคราว ห้าม commit

## 6. Deferred or open work

- ยังไม่กำหนด production domain/canonical ที่แน่นอน ห้ามเพิ่ม canonical จนเจ้าของยืนยันโดเมนหลัก
- Photo credits แบบรายภาพยังควรตรวจสิทธิ์และ attribution ให้ครบหากใช้ภาพจากภายนอก
- Chaozhou, Guangzhou และ Yunnan ยังไม่มีโปรแกรม ราคา และหน้า detail จริง
- ยังไม่มี GA4/Meta Pixel หรือ consent strategy
- ยังไม่มี automated unit/E2E test suite; ใช้ lint, typecheck, build และ browser smoke test
- ควรตรวจ Core Web Vitals บน production หลัง deploy ทุกครั้งที่เปลี่ยน Hero, font หรือ client component ขนาดใหญ่

## 7. Definition of done

งานถือว่าเสร็จเมื่อ:

1. ข้อความและภาพตรงกับคำขอและ source ที่ยืนยันได้
2. Responsive บน mobile/tablet/desktop
3. Keyboard focus, modal close, alt text และ contrast ไม่ถดถอย
4. Internal links ใช้งานได้ทั้ง local และ GitHub Pages base path
5. `npm run check` ผ่าน
6. `GITHUB_PAGES=true npm run build` ผ่าน
7. `git diff --check` ผ่าน
8. เอกสารที่เกี่ยวข้องอัปเดตพร้อมโค้ด
9. ไม่มี `tmp/`, `out/`, `.next/`, log หรือไฟล์ดาวน์โหลดส่วนตัวใน commit

## 8. Safe next steps

- หากเพิ่ม destination detail page ให้สร้าง route ใหม่ภายใต้ `src/app/ryugege/<route>/page.tsx`, เพิ่มข้อมูล/รูปที่ตรวจแล้ว และเปลี่ยน trip card จาก Under Construction
- หากเปลี่ยน Hero ให้เตรียมภาพ 16:9 สามระดับ: Desktop 2560×1440, Tablet 1536×864, Mobile 768×432
- หากเปลี่ยนรูป trip card ให้ใช้สัดส่วนที่ทนต่อ `object-cover` และตรวจ subject-safe area บนจอแคบ
- หลัง merge เข้า `master` ให้รอ GitHub Actions สำเร็จและตรวจ production URL พร้อม cache-busting query ถ้าจำเป็น
