"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type SiteHeaderProps = {
  activePath?: string;
};

const primaryNav = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Clients", href: "/#clients" },
  { label: "Industries", href: "/#industries" },
  { label: "Presence", href: "/#presence" },
];

export function SiteHeader({ activePath = "/" }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="relative bg-paper-white">
      <div className="bg-paper-white">
        <div className="mx-auto flex h-[60px] w-full max-w-[1728px] items-center justify-between gap-4 border-b border-coffee/6 px-4 sm:px-6 md:gap-8 md:px-10 lg:px-14 xl:px-20 2xl:px-[200px]">
          <Link href="/" className="flex items-center gap-3 md:border-r md:border-coffee/6 md:pr-8" onClick={closeMenu}>
            <span className="inline-flex items-end gap-[2px]">
              <span className="h-3.5 w-[2px] bg-coffee" />
              <span className="h-4.5 w-[2px] bg-coffee" />
              <span className="h-5.5 w-[2px] bg-coffee" />
              <span className="h-4.5 w-[2px] bg-coffee" />
              <span className="h-3.5 w-[2px] bg-coffee" />
            </span>
            <span className="font-serif text-[17px] leading-none text-coffee md:text-[18px]">
              Ladd &amp; Co.
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.2em] text-coffee/58 transition-colors hover:text-clementine"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={[
                "text-[10px] font-semibold uppercase tracking-[0.2em]",
                activePath === "/contact" ? "text-clementine" : "text-coffee",
              ].join(" ")}
            >
              Client Login
            </Link>
          </nav>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle mobile menu"
            className="inline-flex h-6 w-6 items-center justify-center md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="relative h-3.5 w-3.5">
              <span className="absolute inset-x-0 top-[1px] h-px bg-clementine" />
              <span className="absolute inset-x-0 top-[6px] h-px bg-clementine" />
              <span className="absolute inset-x-0 top-[11px] h-px bg-clementine" />
            </span>
          </button>
        </div>
      </div>

      <div className="border-t border-coffee/6 bg-[linear-gradient(90deg,#c5caaa_0%,#d3d8bd_22%,#e4e7d8_55%,#f3f1ef_100%)]">
        <div className="mx-auto flex h-[44px] w-full max-w-[1728px] items-center gap-[10px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-[200px]">
          <span className="h-[4px] w-[4px] rounded-full bg-clementine" />
          <Link href="/contact" className="text-[14px] font-serif text-coffee">
            Request an Introduction →
          </Link>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-[70] bg-muted-olive md:hidden">
          <div className="h-3 w-full bg-coffee" />

          <div className="border-b border-line-soft bg-paper-white">
            <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
                <span className="inline-flex items-end gap-[2px]">
                  <span className="h-3.5 w-[2px] bg-coffee" />
                  <span className="h-4.5 w-[2px] bg-coffee" />
                  <span className="h-5.5 w-[2px] bg-coffee" />
                  <span className="h-4.5 w-[2px] bg-coffee" />
                  <span className="h-3.5 w-[2px] bg-coffee" />
                </span>
                <span className="font-serif text-[20px] leading-none text-coffee">
                  Ladd &amp; Co.
                </span>
              </Link>

              <button
                type="button"
                aria-label="Close mobile menu"
                className="inline-flex h-6 w-6 items-center justify-center"
                onClick={closeMenu}
              >
                <span className="relative h-3.5 w-3.5">
                  <span className="absolute inset-x-0 top-[6px] h-px rotate-45 bg-clementine" />
                  <span className="absolute inset-x-0 top-[6px] h-px -rotate-45 bg-clementine" />
                </span>
              </button>
            </div>
          </div>

          <div className="border-t border-coffee/6 bg-[linear-gradient(90deg,#c5caaa_0%,#d3d8bd_22%,#e4e7d8_55%,#f3f1ef_100%)]">
            <div className="mx-auto flex h-[44px] w-full max-w-[1728px] items-center gap-[10px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-[200px]">
              <span className="h-[4px] w-[4px] rounded-full bg-clementine" />
              <Link href="/contact" className="text-[14px] font-serif text-coffee" onClick={closeMenu}>
                Request an Introduction →
              </Link>
            </div>
          </div>

          <div className="mx-auto h-[calc(100vh-96px)] w-full max-w-[1180px] overflow-y-auto px-4 pb-10 pt-7 sm:px-6">
            <p className="text-center text-[10px] uppercase tracking-[0.24em] text-coffee/48">Firm</p>
            <nav className="mt-5 space-y-5 text-center" aria-label="Mobile">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-[17px] text-coffee/88"
                  onClick={closeMenu}
                >
                  {item.label === "Presence" ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span>{item.label}</span>
                      <span className="mt-0.5 h-[4px] w-[4px] rounded-full bg-clementine" />
                    </span>
                  ) : (
                    item.label
                  )}
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-line-soft pt-6 text-center">
              <p className="text-[10px] uppercase tracking-[0.24em] text-coffee/48">Contact</p>
              <p className="mt-3 text-[15px] text-coffee/85">office@laddco.com</p>
            </div>

            <div className="mt-8 border-t border-line-soft pt-6 text-center">
              <Link
                href="/contact"
                className={[
                  "text-[10px] font-semibold uppercase tracking-[0.2em]",
                  activePath === "/contact" ? "text-clementine" : "text-coffee",
                ].join(" ")}
                onClick={closeMenu}
              >
                Client Login
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
