export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-maroon px-6 text-center text-white">
      <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-gold-light">
        Ryu Gege Tour
      </p>
      <h1 className="font-heading mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
        เปิดหน้า Landing Page สำหรับทริปธุรกิจและทัวร์ดูงาน
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-white/72">
        หากหน้าไม่เปลี่ยนอัตโนมัติ สามารถกดปุ่มด้านล่างเพื่อเข้าสู่หน้า
        Ryu Gege ได้ทันที
      </p>
      <a
        href="./ryugege/"
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-tour-red px-6 py-3 text-sm font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-tour-red-dark"
      >
        ไปที่หน้า Ryu Gege
      </a>
    </main>
  );
}
