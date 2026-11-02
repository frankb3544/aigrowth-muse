import Image from "next/image";
import Link from "next/link";
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
  return (
    <header className="sticky top-0 z-40 border-b border-brand-navy/12 bg-brand-cream/95 shadow-sm shadow-brand-navy/5 backdrop-blur">
      {/* Mobile: menu sits on top, always visible — no dropdown */}
      <nav aria-label="Sections" className="border-b border-brand-navy/10 lg:hidden">
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] font-bold whitespace-nowrap text-brand-navy-deep/80 transition hover:text-brand-orange"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
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

        <a
          href={auditBookingHref}
          className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-extrabold whitespace-nowrap text-white shadow-md shadow-brand-orange/30 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy sm:px-6 sm:py-3"
        >
          Book an Audit
        </a>
      </div>
    </header>
  );
}
