# RyuGeGe Tour — Redesign Reference (Blueprint)

> เอกสารอ้างอิงสำหรับงานรื้อ UX/UI ของหน้า Landing (`src/app/ryugege/page.tsx`)
> **ที่มาโครงสร้าง:** วิเคราะห์หน้าแรกของ https://china4trip.com/ (ดูเฉพาะหน้าแรก)
> **ขอบเขต:** เอาเฉพาะ *โครงสร้าง / เลย์เอาต์ / แพทเทิร์น UI* — ไม่คัดลอกเนื้อหา รูปภาพ หรือ asset ของเขา
>
> **Design decision (ยืนยันแล้ว):** คง **แบรนด์แดง-ทอง** เดิมไว้ (tour red `#ef2f37` / dark `#8b1118`, gold `#f4c35f` / `#ffe09a`) — ยืมมาแค่ *โครงสร้างหน้า* ของ china4trip ไม่ยืมโทนสีเขียว/navy ของเขา

---

## หลักการที่ยืมมาจาก china4trip

1. **Image-first cards** — รูปกินพื้นที่ 60-70% ของการ์ด, ข้อความรอง
2. **Container กว้าง** ~1200-1400px, เว้นระยะระหว่าง section 40-60px
3. **เมนู dropdown ตามหมวด** (เมือง / งานแฟร์) แทนเมนูแบน
4. **Hero carousel** auto-play หลายสไลด์ แทนภาพนิ่ง
5. **Sticky header + floating CTA (LINE/โทร)**
6. **FAQ accordion** + social proof เด่น (รูป/คลิปลูกค้าจริง)
7. **Flow:** ปัญหา → ทางออก → พิสูจน์ (proof) → ปิดการขาย (CTA)

---

## Section blueprint (บนลงล่าง) + สถานะปัจจุบันของเรา

| # | Section | เลย์เอาต์เป้าหมาย (จาก china4trip) | สถานะใน `page.tsx` | สิ่งที่ต้องทำ |
|---|---------|-----------------------------------|--------------------|----------------|
| 0 | **Top bar** | social icons + เวลาทำการ + TEL + Line ID | ✅ มี (แถบแดง) | เพิ่มไอคอน social จริง + เวลาทำการให้ชัด |
| 1 | **Header (sticky)** | โลโก้ + เมนู **dropdown ตามเมือง/งานแฟร์** + ปุ่ม LINE | ⚠️ เมนูแบน (`navItems`) | เพิ่ม dropdown จัดกลุ่มเมือง/บริการ |
| 2 | **Hero** | **carousel 4-5 สไลด์** + headline + จุดขายความน่าเชื่อถือ + ปุ่ม LINE/โทร | ⚠️ ภาพนิ่ง (`HeroVisual`) | ทำ carousel client component (static export ได้) |
| 3 | **Value Prop / ทำไมต้องเรา** | ข้อความ + ไอคอนจุดขาย 6-8 อัน | ✅ `shortcutBenefits` (4) | เพิ่มไอคอน + ขยายเป็น 6-8 จุด |
| 4 | **ทริปตามเมือง** | **การ์ด grid 4-5 ใบ** (รูปเมือง + ชื่อ + ปุ่มดูรายละเอียด) | ✅ `tripCards` (`TripCardView`) | ปรับสไตล์การ์ดให้ image-first ขึ้น |
| 5 | **บริการหลัก** | การ์ด/carousel ไอคอน + ชื่อ + คำอธิบายสั้น | ✅ `serviceCards` (5) | เพิ่มไอคอนต่อบริการ |
| 6 | **รีวิว / คลิป (social proof)** | carousel รูป/คลิปลูกค้าจริง 9:16 | ✅ slot ว่าง (`reviewClips`, `testimonials`) | คงเป็น slot จนกว่าจะมีของจริง (อย่าใส่รีวิวปลอม) |
| 7 | **FAQ** | accordion แนวตั้ง + chevron | ✅ `faqs` (`<details>`) | ปรับสไตล์ให้เข้าธีมใหม่ |
| 8 | **Process / ขั้นตอน** | (ของเราเสริมเข้ามา) 5 สเต็ป | ✅ `processSteps` | คงไว้ |
| 9 | **Inquiry form** | (ของเราเสริม) ฟอร์ม → LINE | ✅ `InquiryForm.tsx` | คงไว้ |
| 10 | **Footer** | grid 4-5 คอลัมน์ พื้นเข้ม + ลิงก์ตามหมวด + social | ✅ มี | ปรับ grid/ลิงก์ |
| — | **Floating buttons** | LINE/โทร ลอยติดจอ | ✅ มี | คงไว้ |

---

## Design system เป้าหมาย (แดง-ทอง + โครงสร้างใหม่)

- **สี:** คงพาเลตเดิม — red `#ef2f37`/`#8b1118`, gold `#f4c35f`/`#ffe09a`, charcoal `#171717`, paper `#fbfbfb`, line `#ead6a3`, LINE green `#06c755`
  - **แนะนำ:** ย้าย hex ที่ hardcode กระจายอยู่ ไปรวมเป็น CSS variable / `@theme` ใน `globals.css` ก่อนรื้อ เพื่อคุมธีมจุดเดียว
- **การ์ด:** มุมโค้ง 8-12px, เงาบางๆ, hover ยกขึ้นเล็กน้อย, รูปเด่น
- **Container:** `max-w-7xl` (~1280px) เดิมโอเคแล้ว
- **ฟอนต์:** คง Prompt (หัวข้อ) + Sarabun (เนื้อหา) — คง subset `thai`

---

## ข้อจำกัดทางเทคนิคที่ต้องเคารพตอน implement

- **Static export** (`output: "export"`) — carousel/dropdown/accordion ต้องทำฝั่ง client ล้วน ไม่มี server-side
- **GitHub Pages basePath** `/ryugege_text` — ลิงก์ภายในต้อง relative; รูปใน `public/` ต้องผ่าน `assetPrefix`
- **รูปภาพ:** `images.unoptimized: true` — ใช้ `<img>`/background ธรรมดา; ปัจจุบันใช้ Unsplash ภายนอก (ควรแทนด้วยรูปงานจริงของ RyuGeGe)
- **ห้ามใส่รีวิว/ตัวเลขปลอม** — testimonials/clips เป็น slot ตั้งใจให้ว่างจนมีของจริง

---

## Gap สรุป (สิ่งที่ต้องเพิ่มใหม่จริงๆ)

1. Hero carousel (client component)
2. เมนู dropdown ตามเมือง/งานแฟร์
3. ไอคอนประกอบ value prop + บริการ
4. รวมสีเป็น token ใน `globals.css`
5. แทนรูป Unsplash ด้วยรูปงานจริง (เมื่อมี)
