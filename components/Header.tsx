import Image from "next/image";
import { auditBookingHref } from "@/lib/site";

const navLinks = [
  { label: "The Audit", href: "#audit" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Community", href: "#community" },
  { label: "Our Tools", href: "#tools" },
  { label: "Charlotte", href: "#charlotte" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-navy/12 bg-brand-cream/95 shadow-sm shadow-brand-navy/5 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
        <a href="#top" aria-label="Build AI From Here — home" className="shrink-0">
          <Image
            src="/brand/lockup-navy-text-transparent.png"
            alt="Build AI From Here"
            width={1256}
            height={848}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-brand-navy-deep/75 transition hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={auditBookingHref}
          className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-extrabold whitespace-nowrap text-white shadow-md shadow-brand-orange/30 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy sm:px-6 sm:py-3"
        >
          Book an Audit
        </a>
      </div>

      <nav
        aria-label="Sections"
        className="flex gap-5 overflow-x-auto px-5 pb-2.5 whitespace-nowrap lg:hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-bold text-brand-navy-deep/75"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
