import type { Metadata } from "next";
import { Prompt, Sarabun } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["500", "600", "700"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "RyuGeGe China Tour",
    template: "%s | RyuGeGe China Tour",
  },
  description:
    "Private China business tour and safe facilitation for Thai SME owners, importers, and purchasing teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} ${sarabun.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
