"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";

export type NavLink = { label: string; href: string };
export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

/**
 * Sticky header with category dropdowns (structure borrowed from china4trip's
 * nav) — grouped "ทริป" / "บริการ" menus plus flat anchors. Client component so
 * dropdowns, outside-click close, and the mobile panel work under static export.
 */
export function SiteHeader({
  navItems,
  lineUrl,
}: {
  navItems: NavItem[];
  lineUrl: string;
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-sand-soft bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3"
          aria-label="RyuGeGe Tour"
        >
          <BrandMark />
          <span>
            <span className="font-heading block text-xl font-black leading-tight text-charcoal">
              RyuGeGe Tour
            </span>
            <span className="hidden text-xs font-bold text-tour-red sm:block">
              Business Trip · Factory Visit · Thai-Chinese Facilitation
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                  aria-expanded={openMenu === item.label}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-bold text-charcoal/75 transition hover:text-tour-red"
                >
                  {item.label}
                  <Icon
                    name="chevron-down"
                    className={`size-4 transition-transform ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMenu === item.label ? (
                  <div className="animate-fade-in absolute left-0 top-[calc(100%+0.4rem)] w-64 rounded-lg border border-sand bg-white p-2 shadow-[0_18px_50px_rgba(17,24,39,0.14)]">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpenMenu(null)}
                        className="block rounded-md px-3 py-2.5 text-sm font-semibold text-charcoal/80 transition hover:bg-[#fff4f4] hover:text-tour-red"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-bold text-charcoal/75 transition hover:text-tour-red"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <a
            href={lineUrl}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-line-green px-5 py-2.5 text-sm font-bold text-white shadow-[var(--shadow-line)] transition hover:bg-line-green-dark"
          >
            ปรึกษาทาง LINE
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="เปิดเมนู"
          className="flex size-11 items-center justify-center rounded-md border border-sand bg-white text-charcoal lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen ? (
        <div className="animate-fade-in border-t border-sand-soft bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-sand-soft py-1">
                  <p className="px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-tour-red">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm font-semibold text-charcoal/80 hover:bg-[#fff4f4]"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-bold text-charcoal hover:bg-[#fff4f4]"
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href={lineUrl}
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-line-green px-5 py-3 text-sm font-bold text-white"
            >
              ปรึกษาทาง LINE
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function BrandMark() {
  return (
    <span className="grid size-14 shrink-0 place-items-center rounded-md bg-[linear-gradient(135deg,#ef2f37,#9d1118)] text-center text-[11px] font-black uppercase leading-tight text-gold-light shadow-[0_10px_24px_rgba(157,17,24,0.24)]">
      Ryu
      <br />
      Tour
    </span>
  );
}
