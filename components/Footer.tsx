import Image from "next/image";
import Link from "next/link";
import { SKOOL_URL, SOCIAL_LINKS } from "@/lib/site";

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

const socials = [
  {
    key: "facebook",
    label: "Build AI From Here on Facebook",
    href: SOCIAL_LINKS.facebook,
    path: "M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8Z",
  },
  {
    key: "instagram",
    label: "Build AI From Here on Instagram",
    href: SOCIAL_LINKS.instagram,
    path: "M12 8.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Zm0-1.7a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm6.3-.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0ZM12 4.5c-2.4 0-2.7 0-3.7.1-2.6.1-3.9 1.4-4 4 0 1 0 1.3 0 3.7s0 2.7.1 3.7c.1 2.6 1.4 3.9 4 4 1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c2.6-.1 3.9-1.4 4-4 .1-1 .1-1.3.1-3.7s0-2.7-.1-3.7c-.1-2.6-1.4-3.9-4-4-1-.1-1.3-.1-3.7-.1Z",
  },
  {
    key: "linkedin",
    label: "Build AI From Here on LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    path: "M6.9 8.6H4V20h2.9V8.6ZM5.4 7.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Zm6.5 5.6c0-1.2.6-2 1.9-2 1.2 0 1.7.8 1.7 2V20h2.9v-7.8c0-2.9-1.5-4.2-3.7-4.2-1.7 0-2.5.9-2.9 1.6V8.6H8.9c0 .8 0 11.4 0 11.4h3v-7.2Z",
  },
  {
    key: "youtube",
    label: "Build AI From Here on YouTube",
    href: SOCIAL_LINKS.youtube,
    path: "M21.6 8.2a2.5 2.5 0 0 0-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8ZM10 15.2V8.8L15.5 12 10 15.2Z",
  },
].filter((s) => s.href.length > 0);

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
              AI Growth Community LLC · Charlotte, NC
            </p>
            <p className="mt-1 text-sm text-white/58">
              No coding. No overwhelm. Just practical AI, one small win at a
              time.
            </p>
            {socials.length > 0 && (
              <div className="mt-4 flex gap-2.5 md:justify-end">
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition hover:border-brand-amber hover:text-brand-amber"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            )}
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
          <a
            href={SKOOL_URL}
            className="text-sm font-bold text-brand-amber/90 transition hover:text-brand-amber"
          >
            Join the community
          </a>
        </nav>
      </div>
    </footer>
  );
}
