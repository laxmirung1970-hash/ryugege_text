"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  inquiryDefaults,
  LINE_OFFICIAL_ACCOUNT_ID,
} from "./constants";

type FormState = {
  fullName: string;
  company: string;
  phone: string;
  lineId: string;
  email: string;
  tripType: string;
  targetCity: string;
  travelPeriod: string;
  groupSize: string;
  budgetRange: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  company: "",
  phone: "",
  lineId: "",
  email: "",
  tripType: inquiryDefaults.tripTypes[0],
  targetCity: inquiryDefaults.targetCities[0],
  travelPeriod: "",
  groupSize: "",
  budgetRange: inquiryDefaults.budgetRanges[0],
  message: "",
};

function buildLineMessageUrl(message: string) {
  const encodedAccountId = encodeURIComponent(LINE_OFFICIAL_ACCOUNT_ID);
  const encodedMessage = encodeURIComponent(message);

  return `https://line.me/R/oaMessage/${encodedAccountId}/?${encodedMessage}`;
}

async function copyText(text: string) {
  if (!navigator.clipboard?.writeText) {
    throw new Error("Clipboard copy was not available.");
  }

  await navigator.clipboard.writeText(text);
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-charcoal">
      {children}
    </label>
  );
}

const inputClass =
  "mt-2 w-full rounded-xl border border-sand bg-cream/40 px-4 py-3 text-base text-charcoal outline-none transition focus:border-tour-red focus:bg-white focus:ring-[3px] focus:ring-gold/40";

export function InquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [copyStatus, setCopyStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const lineMessage = useMemo(() => {
    return [
      "สวัสดีครับริว สนใจปรึกษาทริปกับ Ryu Gege Tour",
      `ชื่อ: ${form.fullName || "-"}`,
      `บริษัท/ธุรกิจ: ${form.company || "-"}`,
      `โทร: ${form.phone || "-"}`,
      `LINE ID: ${form.lineId || "-"}`,
      `Email: ${form.email || "-"}`,
      `ประเภททริป: ${form.tripType}`,
      `เมืองเป้าหมาย: ${form.targetCity}`,
      `ช่วงเวลาเดินทาง: ${form.travelPeriod || "-"}`,
      `จำนวนผู้เดินทาง: ${form.groupSize || "-"}`,
      `งบประมาณ: ${form.budgetRange}`,
      `รายละเอียด: ${form.message || "-"}`,
    ].join("\n");
  }, [form]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setCopyStatus("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(
      buildLineMessageUrl(lineMessage),
      "_blank",
      "noopener,noreferrer",
    );
  }

  async function handleCopy() {
    try {
      await copyText(lineMessage);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-sand/70 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="fullName">ชื่อ-นามสกุล</FieldLabel>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            className={inputClass}
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
          />
        </div>
        <div>
          <FieldLabel htmlFor="company">บริษัทหรือประเภทธุรกิจ</FieldLabel>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={inputClass}
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
          />
        </div>
        <div>
          <FieldLabel htmlFor="phone">Phone</FieldLabel>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
        </div>
        <div>
          <FieldLabel htmlFor="lineId">LINE ID</FieldLabel>
          <input
            id="lineId"
            name="lineId"
            className={inputClass}
            value={form.lineId}
            onChange={(event) => updateField("lineId", event.target.value)}
          />
        </div>
        <div>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </div>
        <div>
          <FieldLabel htmlFor="tripType">Trip Type</FieldLabel>
          <select
            id="tripType"
            name="tripType"
            className={inputClass}
            value={form.tripType}
            onChange={(event) => updateField("tripType", event.target.value)}
          >
            {inquiryDefaults.tripTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="targetCity">Target City</FieldLabel>
          <select
            id="targetCity"
            name="targetCity"
            className={inputClass}
            value={form.targetCity}
            onChange={(event) => updateField("targetCity", event.target.value)}
          >
            {inquiryDefaults.targetCities.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="travelPeriod">
            ช่วงเวลาที่อยากเดินทาง
          </FieldLabel>
          <input
            id="travelPeriod"
            name="travelPeriod"
            className={inputClass}
            value={form.travelPeriod}
            onChange={(event) =>
              updateField("travelPeriod", event.target.value)
            }
          />
        </div>
        <div>
          <FieldLabel htmlFor="groupSize">จำนวนผู้เดินทาง</FieldLabel>
          <input
            id="groupSize"
            name="groupSize"
            inputMode="numeric"
            className={inputClass}
            value={form.groupSize}
            onChange={(event) => updateField("groupSize", event.target.value)}
          />
        </div>
        <div>
          <FieldLabel htmlFor="budgetRange">Budget Range</FieldLabel>
          <select
            id="budgetRange"
            name="budgetRange"
            className={inputClass}
            value={form.budgetRange}
            onChange={(event) => updateField("budgetRange", event.target.value)}
          >
            {inquiryDefaults.budgetRanges.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <FieldLabel htmlFor="message">
          คุณอยากไปดูสินค้า โรงงาน งานแฟร์ หรือเมืองใดเป็นพิเศษ?
        </FieldLabel>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-ink">
        เมื่อส่งฟอร์ม ระบบจะเปิด LINE Official พร้อมข้อความที่กรอกไว้ให้ตรวจสอบก่อนส่ง
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          className="rounded-full bg-line-green px-5 py-4 text-base font-bold text-white shadow-[var(--shadow-line)] transition hover:bg-line-green-dark focus:outline-none focus:ring-[3px] focus:ring-gold/45"
        >
          ส่งข้อมูลผ่าน LINE Official
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full border border-line-green px-5 py-4 text-base font-bold text-line-green-dark transition hover:bg-line-green/10 focus:outline-none focus:ring-[3px] focus:ring-gold/45"
        >
          คัดลอกข้อความสำหรับ LINE บนคอม
        </button>
      </div>
      <div
        className="mt-3 text-sm leading-6 text-ink"
        role="status"
        aria-live="polite"
      >
        {copyStatus === "success" && (
          <p>คัดลอกข้อความแล้ว เปิด LINE และวางข้อความได้ทันที</p>
        )}
        {copyStatus === "error" && (
          <div>
            <p>
              เบราว์เซอร์ไม่อนุญาตให้คัดลอกอัตโนมัติ
              กรุณาคัดลอกข้อความด้านล่าง
            </p>
            <label htmlFor="lineMessageFallback" className="sr-only">
              ข้อความสำหรับส่งผ่าน LINE
            </label>
            <textarea
              id="lineMessageFallback"
              readOnly
              rows={8}
              value={lineMessage}
              onFocus={(event) => event.currentTarget.select()}
              className={`${inputClass} font-mono text-sm`}
            />
          </div>
        )}
      </div>
    </form>
  );
}
