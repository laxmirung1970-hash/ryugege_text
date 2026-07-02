"use client";

import { FormEvent, useMemo, useState } from "react";
import { inquiryDefaults, LINE_URL } from "./constants";

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

function buildLineUrl(message: string) {
  if (LINE_URL === "#") {
    return "#";
  }

  const separator = LINE_URL.includes("?") ? "&" : "?";
  return `${LINE_URL}${separator}text=${encodeURIComponent(message)}`;
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
  "mt-2 w-full rounded-md border border-sand bg-white px-4 py-3 text-base text-charcoal outline-none transition focus:border-tour-red focus:ring-[3px] focus:ring-gold/45";

export function InquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);

  const lineMessage = useMemo(() => {
    return [
      "สวัสดีครับริว สนใจปรึกษาทริปกับ RyuGeGe Tour",
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
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(buildLineUrl(lineMessage), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-sand bg-white p-5 shadow-[var(--shadow-card)] sm:p-6"
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
        หากฟอร์มยังไม่พร้อมใช้งาน กรุณากดปุ่ม LINE เพื่อคุยกับริวโดยตรง
      </p>
      <button
        type="submit"
        className="mt-5 w-full rounded-md bg-tour-red px-5 py-4 text-base font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-tour-red-dark focus:outline-none focus:ring-[3px] focus:ring-gold/45"
      >
        ส่งข้อมูลเพื่อประเมินทริป
      </button>
    </form>
  );
}
