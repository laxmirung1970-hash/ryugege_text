import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline" | "line";
  className?: string;
};

const ctaStyles: Record<NonNullable<CtaLinkProps["variant"]>, string> = {
  primary:
    "bg-tour-red text-white shadow-[var(--shadow-cta)] hover:bg-tour-red-dark",
  outline:
    "border border-tour-red/40 bg-white text-tour-red hover:border-tour-red hover:bg-tour-red/5",
  ghost:
    "border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15",
  line: "bg-line-green text-white shadow-[var(--shadow-line)] hover:bg-line-green-dark",
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-bold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 focus:ring-offset-transparent ${ctaStyles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
