"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";

export type NavLink = { label: string; href: string };
export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

/**
 * Sticky header with category dropdowns. Translucent cream over the page,
 * gaining a hairline + soft shadow once scrolled. Client component so the
 * dropdowns, outside-click close, scroll state, and mobile panel all work
 * under static export.
 */
export function SiteHeader({
  navItems,
  contactUrl,
}: {
  navItems: NavItem[];
  contactUrl: string;
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("top");
  const headerRef = useRef<HTMLElement>(null);

  const activeHref = `#${activeId}`;
  const isActive = (item: NavItem) =>
    item.href === activeHref ||
    (item.children?.some((child) => child.href === activeHref) ?? false);

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
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Scroll-spy: highlight the nav item for the section crossing viewport centre.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const ids = [
      "top",
      "trips",
      "services",
      "clips",
      "testimonials",
      "founder",
      "inquiry",
      "faq",
    ];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        for (const id of ids) {
          if (visible.has(id)) {
            setActiveId(id);
            break;
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-sand/70 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-cream/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3"
          aria-label="Ryu Gege Tour"
        >
          <BrandMark />
          <span>
            <span className="font-heading block text-lg font-black leading-tight text-charcoal">
              Ryu Gege Tour
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft sm:block">
              Business Trip · Factory Visit · Interpretation
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden shrink-0 flex-nowrap items-center gap-0.5 xl:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                  aria-expanded={openMenu === item.label}
                  className={`flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition hover:bg-cream-deep hover:text-tour-red 2xl:px-3.5 2xl:text-sm ${
                    isActive(item) ? "text-tour-red" : "text-charcoal/80"
                  }`}
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
                  <div className="animate-fade-in absolute left-0 top-[calc(100%+0.5rem)] w-64 rounded-2xl border border-sand/70 bg-white p-2 shadow-[var(--shadow-soft)]">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpenMenu(null)}
                        className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-charcoal/80 transition hover:bg-cream hover:text-tour-red"
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
                className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition hover:bg-cream-deep hover:text-tour-red 2xl:px-3.5 2xl:text-sm ${
                  isActive(item) ? "text-tour-red" : "text-charcoal/80"
                }`}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-1 xl:flex 2xl:gap-2">
          <a
            href={contactUrl}
            className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-line-green px-3 py-2.5 text-[13px] font-bold text-white shadow-[var(--shadow-line)] transition hover:bg-line-green-dark 2xl:px-5 2xl:text-sm"
          >
            <Icon name="chat" className="size-4" />
            ปรึกษาทาง LINE Official
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="เปิดเมนู"
          className="flex size-11 items-center justify-center rounded-full border border-sand bg-white/80 text-charcoal xl:hidden"
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
        <div className="animate-fade-in border-t border-sand/70 bg-cream xl:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-sand/60 py-1">
                  <p className="px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-tour-red">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-charcoal/80 hover:bg-cream-deep"
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
                  className="block rounded-xl px-3 py-3 text-sm font-bold text-charcoal hover:bg-cream-deep"
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href={contactUrl}
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-line-green px-5 py-3 text-sm font-bold text-white"
            >
              <Icon name="chat" className="size-4" />
              ปรึกษาทาง LINE Official
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function BrandMark() {
  return (
    <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-1 shadow-[0_10px_24px_rgba(139,17,24,0.2)]">
      <Image
        src="/ryugege-logo.webp"
        alt="Ryu Gege Tour"
        width={48}
        height={48}
        className="size-full object-contain"
      />
    </span>
  );
}
