import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Consulting", href: "/consulting" },
  { label: "Community", href: "/community" },
  { label: "Our Tools", href: "/tools" },
  { label: "Charlotte", href: "/charlotte" },
  { label: "Learn", href: "/learn" },
  { label: "Free prompt pack", href: "/prompt-pack" },
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-white/10 px-5 py-9 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Image
            src="/brand/lockup-white-text-transparent.png"
            alt="Build AI From Here"
            width={1256}
            height={848}
            className="h-12 w-auto"
          />
          <div className="md:text-right">
            <p className="font-semibold">
              © 2026 AI Growth Community LLC. All rights reserved.
            </p>
            <p className="mt-1 text-sm text-white/58">
              No coding. No overwhelm. Just practical AI, one small win at a
              time.
            </p>
          </div>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-white/70 transition hover:text-brand-amber"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
