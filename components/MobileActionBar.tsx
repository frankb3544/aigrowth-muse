"use client";

import { useEffect, useState } from "react";
import { auditBookingHref, SKOOL_URL, CONTACT_PHONE, phoneHref, hasPhone } from "@/lib/site";

/**
 * Sticky bottom action bar for phones: appears after the hero, hides when
 * the footer scrolls into view. The Call button only exists once a real
 * phone number is set in lib/site.ts.
 */
export default function MobileActionBar() {
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px 0px 24px 0px" },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !footerVisible;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-navy-deep/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(13,24,56,0.35)] backdrop-blur transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="flex items-stretch gap-2 px-3 py-2.5">
        {hasPhone && (
          <a
            href={phoneHref}
            aria-label={`Call us at ${CONTACT_PHONE}`}
            className="flex flex-col items-center justify-center rounded-2xl border border-white/25 px-3.5 py-1.5 text-white transition hover:border-brand-amber hover:text-brand-amber"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mt-0.5 text-[11px] font-extrabold tracking-wide uppercase">Call</span>
          </a>
        )}
        <a
          href={auditBookingHref}
          className="flex flex-1 items-center justify-center rounded-2xl bg-brand-orange px-4 py-3 text-[15px] font-extrabold text-white shadow-md shadow-brand-orange/25 transition hover:bg-orange-600"
        >
          Book an Audit — $199
        </a>
        <a
          href={SKOOL_URL}
          className="flex flex-col items-center justify-center rounded-2xl border border-white/25 px-3.5 py-1.5 text-white transition hover:border-brand-amber hover:text-brand-amber"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="9" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M22 19v-1a4 4 0 0 0-3-3.85M15.5 4.15a3.2 3.2 0 0 1 0 5.7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="mt-0.5 text-[11px] font-extrabold tracking-wide uppercase">Join Free</span>
        </a>
      </div>
    </div>
  );
}
