# Project Overview

## Purpose

Ryu Gege Tour เป็นเว็บไซต์ marketing และ lead-generation ภาษาไทยสำหรับลูกค้าที่ต้องการเดินทางไปประเทศจีนทั้งเชิงธุรกิจและท่องเที่ยวส่วนตัว

เป้าหมายหลักของเว็บไซต์:

1. อธิบายความแตกต่างของบริการแบบ founder-led
2. แสดงเส้นทางและบริการที่ออกแบบตามเป้าหมายลูกค้า
3. สร้างความเชื่อมั่นด้วยประสบการณ์ ผู้ร่วมทริปจริง และเนื้อหาวิดีโอ
4. ส่งผู้สนใจไปยัง LINE Official พร้อมข้อมูล brief เบื้องต้น

## Primary audiences

- เจ้าของ SME และเจ้าของแบรนด์
- ผู้นำเข้าและทีมจัดซื้อ
- ผู้เดินงานแฟร์หรือเยี่ยมโรงงานจีน
- ผู้ที่ต้องการล่ามจีน–ไทย–อังกฤษและผู้ช่วยประสานงาน
- ครอบครัว คู่รัก และกลุ่มเพื่อนที่ต้องการ Private Tour ในจีน

## Core services

- ออกแบบทริปธุรกิจตามสินค้า เมือง งานแฟร์ โรงงาน หรือตลาดเป้าหมาย
- พาเดิน Canton Fair / Expo, เยี่ยมโรงงาน และพบซัพพลายเออร์
- ล่ามธุรกิจจีน–ไทย–อังกฤษ
- ประสานรถ ที่พัก ร้านอาหาร และลำดับการเดินทาง
- ติดตามการสื่อสารกับซัพพลายเออร์หลังทริปตามขอบเขตที่ตกลง
- ออกแบบ Private Tour ที่ไม่จำเป็นต้องเกี่ยวข้องกับธุรกิจ

## Brand and communication

- Display name: **Ryu Gege Tour**
- Founder display name: **Ryu Puriwat / ริว** ตามบริบทของหน้า
- Main CTA: **ปรึกษาฟรีทาง LINE Official**
- LINE URL: <https://lin.ee/nxKOKBTR>
- LINE account ID: `@732blhtf`
- Telephone: `092 842 2121`
- Facebook: <https://www.facebook.com/ryupuriwat/>
- Website shown in footer: <https://www.ryu-gege.com/>

Tone of voice:

- ชัดเจน น่าเชื่อถือ เป็นส่วนตัว และเข้าใจบริบทจีน
- เน้น facilitation และการช่วยเตรียมข้อมูล ไม่กล่าวอ้างว่าเป็นผู้ตัดสินใจแทนลูกค้า
- ไม่ใช้คำสัญญาเรื่องผลกำไร การปิดดีล หรือคุณภาพของผู้ขาย

## Route map

| Route | Purpose | Main data source |
| --- | --- | --- |
| `/` | Entry page linking to landing page | `src/app/page.tsx` |
| `/ryugege/` | Main marketing landing page | `page.tsx`, `home-data.ts`, `media.ts` |
| `/ryugege/xian/` | Xi'an leisure detail and pricing | `xian/page.tsx`, `xian-page-data.ts`, `highlight-data.ts` |
| `/ryugege/chaozhou/` | Chaozhou Under Construction | route page + `UnderConstructionPage.tsx` |
| `/ryugege/guangzhou/` | Guangzhou Under Construction | route page + `UnderConstructionPage.tsx` |
| `/ryugege/yunnan/` | Yunnan Under Construction | route page + `UnderConstructionPage.tsx` |

## Main landing-page journey

1. Hero carousel and positioning statement
2. Contact shortcut cards
3. Customer problems and service value
4. Recommended trips
5. Services
6. TikTok clips
7. Testimonials
8. Founder credentials
9. Process
10. Inquiry form
11. FAQ
12. Closing CTA and footer

Section anchors used by navigation: `#top`, `#trips`, `#services`, `#clips`, `#testimonials`, `#founder`, `#inquiry`, `#faq`

## Current destination status

| Destination | Product type | Price display | Detail status |
| --- | --- | --- | --- |
| Xi'an | Premium leisure / culture | Starts at ฿20,900 | Complete detail page |
| Chaozhou | Culture / heritage / food | Custom quote | Under Construction |
| Guangzhou | Canton Fair / factory / supplier | Custom quote | Under Construction |
| Yunnan | Business + leisure hybrid | Custom quote | Under Construction |
| Private Tour | Custom leisure | Custom quote | LINE inquiry |
| Business Tour | Custom business | Custom quote | LINE inquiry |

## Trust content currently present

- 4 TikTok links with local preview images
- 3 named testimonials supplied by the owner
- Founder education, China experience and interpretation credentials
- 9 Xi'an customer-moment photographs described as published with permission
- Xi'an itinerary, vehicle mapping, meals and pricing table

Any new trust claim must have an owner-provided source or verifiable public source.

## SEO state

- Thai `lang` attribute and route-level metadata are present
- Main page includes TravelAgency JSON-LD
- Static HTML is generated for every route
- Domain/canonical setup is intentionally deferred until the primary domain is confirmed
- External-image attribution requires ongoing review
