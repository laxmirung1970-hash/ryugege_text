# Ryu Gege Tour Website

เว็บไซต์การตลาดภาษาไทยสำหรับ **Ryu Gege Tour** ครอบคลุมทริปธุรกิจจีน งานแฟร์ โรงงาน ซัพพลายเออร์ ล่ามธุรกิจ และ Private Tour โดยออกแบบเป็นเว็บไซต์ Static ที่ Deploy บน GitHub Pages

- Production: <https://laxmirung1970-hash.github.io/ryugege_text/ryugege/>
- Repository: <https://github.com/laxmirung1970-hash/ryugege_text>
- Contact: LINE Official <https://lin.ee/nxKOKBTR>

## Technology

- Next.js 16.2.9 App Router
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- Static export (`output: "export"`)
- GitHub Actions + GitHub Pages

โปรเจกต์นี้ไม่มี backend, database, authentication หรือ API route ฟอร์มสอบถามจะสร้างข้อความแล้วเปิด LINE Official จากฝั่ง browser

## Commands

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run check
npm start
```

- `npm run dev` เปิด Next.js development server
- `npm run check` รัน ESLint, สร้าง route types, TypeScript และ production build
- `npm start` ให้บริการไฟล์จาก `out/` ผ่าน static server ที่รองรับ cache validation และ MP4 byte ranges
- ทดสอบ GitHub Pages build ด้วย PowerShell:

```powershell
$env:GITHUB_PAGES='true'
npm run build
```

## Routes

| Route | สถานะ |
| --- | --- |
| `/` | หน้าเข้าสู่เว็บไซต์ |
| `/ryugege/` | Landing page หลัก |
| `/ryugege/xian/` | หน้ารายละเอียดทริปซีอาน 5 วัน 4 คืน |
| `/ryugege/chaozhou/` | Under Construction |
| `/ryugege/guangzhou/` | Under Construction |
| `/ryugege/yunnan/` | Under Construction |

## Documentation for agents

อ่านตามลำดับนี้ก่อนแก้โค้ด:

1. [`AGENTS.md`](./AGENTS.md) — กฎ Next.js 16 ของ workspace
2. [`docs/AGENT_HANDOFF.md`](./docs/AGENT_HANDOFF.md) — สถานะล่าสุด การตัดสินใจ และวิธีรับช่วงงาน
3. [`docs/PROJECT_OVERVIEW.md`](./docs/PROJECT_OVERVIEW.md) — เป้าหมาย ผู้ใช้ เนื้อหา และ route map
4. [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — โครงสร้างระบบ ขอบเขต client และ media pipeline
5. [`docs/CONTENT_MODEL.md`](./docs/CONTENT_MODEL.md) — ข้อมูลหน้าหลักและซีอานที่ใช้งานจริง
6. [`docs/DEVELOPMENT_AND_DEPLOYMENT.md`](./docs/DEVELOPMENT_AND_DEPLOYMENT.md) — การพัฒนา ตรวจสอบ และ Deploy

`docs/redesign-reference.md` เป็นเอกสารประวัติของช่วง redesign ไม่ใช่สถานะปัจจุบัน

## Deployment

Workflow `.github/workflows/deploy-github-pages.yml` ทำงานเมื่อมีการ Push เข้า `master` โดยรัน `npm ci` และ `npm run check` ภายใต้ `GITHUB_PAGES=true` ก่อนเผยแพร่ `out/`

GitHub Pages ใช้ base path `/ryugege_text` ห้ามสร้าง URL ของไฟล์ใน `public/` หรือ route แบบ hardcode โดยไม่ผ่าน helper ที่กำหนดไว้ ดูรายละเอียดใน `docs/ARCHITECTURE.md`
