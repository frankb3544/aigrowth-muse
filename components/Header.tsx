"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { auditBookingHref } from "@/lib/site";

const navLinks = [
  { label: "Consulting", href: "/consulting" },
  { label: "Community", href: "/community" },
  { label: "Our Tools", href: "/tools" },
  { label: "Charlotte", href: "/charlotte" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever the route changes (adjust-during-render pattern).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-navy/12 bg-brand-cream/95 shadow-sm shadow-brand-navy/5 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-5 py-2.5 sm:gap-4 sm:px-8">
        <Link href="/" aria-label="Build AI From Here — home" className="shrink-0">
          <Image
            src="/brand/lockup-navy-text-transparent.png"
            alt="Build AI From Here"
            width={1256}
            height={848}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-brand-navy-deep/75 transition hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={auditBookingHref}
            className="rounded-full bg-brand-orange px-4 py-2.5 text-sm font-extrabold whitespace-nowrap text-white shadow-md shadow-brand-orange/30 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy sm:px-6 sm:py-3"
          >
            Book an Audit
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 text-brand-navy-deep transition hover:border-brand-orange hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy lg:hidden"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
            id="mobile-menu"
            aria-label="Sections"
            className="absolute inset-x-0 top-full z-50 border-b border-brand-navy/12 bg-brand-cream shadow-xl shadow-brand-navy/20 lg:hidden"
          >
            <ul className="mx-auto w-full max-w-7xl px-5 py-2 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-brand-navy/8 last:border-b-0">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`block py-3.5 text-base font-bold transition hover:text-brand-orange ${
                      pathname === link.href
                        ? "text-brand-orange"
                        : "text-brand-navy-deep/85"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
        </nav>
      )}
    </header>
  );
}
