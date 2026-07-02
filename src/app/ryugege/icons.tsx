import type { SVGProps } from "react";

/**
 * Small stroke icon set (24×24, currentColor) used across the landing page —
 * value-prop cards, service cards, contact rows, nav and socials.
 * Icons inherit color from the parent via `currentColor`, so tint them with
 * Tailwind text-* utilities (e.g. `text-tour-red`).
 */

export type IconName =
  | "route"
  | "eye"
  | "chat"
  | "shield"
  | "clock"
  | "coins"
  | "clipboard"
  | "store"
  | "languages"
  | "car"
  | "refresh"
  | "map-pin"
  | "phone"
  | "mail"
  | "globe"
  | "facebook"
  | "instagram"
  | "chevron-down"
  | "arrow-right"
  | "check"
  | "sparkles";

const paths: Record<IconName, React.ReactNode> = {
  route: (
    <>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H14a3.5 3.5 0 0 0 0-7H10a3.5 3.5 0 0 1 0-7h5.5" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a7.5 7.5 0 0 1-10.9 6.7L4 19l1-4.2A7.5 7.5 0 1 1 21 11.5Z" />
      <path d="M9 11h6M9 8.5h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.4 3 8 7 10 4-2 7-5.6 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="5.5" ry="2.75" />
      <path d="M3.5 7v5c0 1.5 2.5 2.75 5.5 2.75S14.5 13.5 14.5 12V7" />
      <path d="M9.5 15.5c.9 1.3 3 2.25 5.5 2.25 3 0 5.5-1.25 5.5-2.75v-5c0-1.3-1.9-2.4-4.5-2.7" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4a3 3 0 0 1 6 0M9 11h6M9 15h4" />
    </>
  ),
  store: (
    <>
      <path d="M4 9h16l-1-4H5L4 9Z" />
      <path d="M5 9v10h14V9M4 9c0 1.7 1.3 3 3 3s3-1.3 3-3 1.3 3 3 3 3-1.3 3-3" />
      <path d="M9.5 19v-4h5v4" />
    </>
  ),
  languages: (
    <>
      <path d="M3 5h8M7 5V3.5M9 5c0 3.5-2.5 6.5-6 8" />
      <path d="M5 9.5c1.5 1.8 3.5 3 6 3.5" />
      <path d="m12.5 20 4-9 4 9M13.7 17.5h5.6" />
    </>
  ),
  car: (
    <>
      <path d="M4 16v-3.2l1.8-4A2 2 0 0 1 7.6 7.5h8.8a2 2 0 0 1 1.8 1.3l1.8 4V16" />
      <path d="M3.5 16h17M6 16v1.5M18 16v1.5" />
      <circle cx="7.5" cy="16" r="1.5" />
      <circle cx="16.5" cy="16" r="1.5" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-13.7-4.6L4 8.5" />
      <path d="M4 4v4.5h4.5" />
      <path d="M4 13a8 8 0 0 0 13.7 4.6L20 15.5" />
      <path d="M20 20v-4.5h-4.5" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21c4.5-4.3 7-7.7 7-11a7 7 0 1 0-14 0c0 3.3 2.5 6.7 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5 9 4l1 3.5-1.8 1.6a12 12 0 0 0 5.1 5.1L15 13.5l3.5 1 .5 2.5a2 2 0 0 1-2 2.4A14 14 0 0 1 4.1 5.5a2 2 0 0 1 2.4-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5S14.4 18.2 12 20.5c-2.4-2.3-3.6-5.3-3.6-8.5S9.6 5.8 12 3.5Z" />
    </>
  ),
  facebook: (
    <path d="M14.5 8.5H16V6h-2c-1.9 0-3 1.3-3 3v1.5H9V13h2v6h2.5v-6h2l.5-2.5h-2.5V9.2c0-.5.3-.7.9-.7Z" />
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  "arrow-right": <path d="M4 12h15m-6-6 6 6-6 6" />,
  check: <path d="m5 12 4.5 4.5L19 7" />,
  sparkles: (
    <>
      <path d="M12 4.5 13.7 9l4.5 1.7-4.5 1.7L12 17l-1.7-4.6L5.8 10.7 10.3 9 12 4.5Z" />
      <path d="M18.5 15.5 19 17l1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5Z" />
    </>
  ),
};

export function Icon({
  name,
  className,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
