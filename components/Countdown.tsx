"use client";

import { AUDIT_PRICE, SKOOL_URL } from "@/lib/site";
import { SectionTag, PixelMotif } from "./ui";
import { useNow } from "./useNow";
import { formatSessionDate, nextSessionTimestamp } from "./nextSession";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

/**
 * Live countdown to the next Thursday 6:00 PM (America/New_York) build
 * session. Until the first interval tick lands, it renders the static
 * fallback — no wall-clock reads happen during render.
 */
export default function Countdown() {
  const now = useNow(1000);

  let units: { value: number; label: string }[] | null = null;
  let sessionDate: string | null = null;
  if (now !== null) {
    const target = nextSessionTimestamp(now);
    const remaining = Math.max(0, target - now);
    sessionDate = formatSessionDate(target);
    units = [
      { value: Math.floor(remaining / DAY), label: "Days" },
      { value: Math.floor(remaining / HOUR) % 24, label: "Hrs" },
      { value: Math.floor(remaining / MINUTE) % 60, label: "Min" },
      { value: Math.floor(remaining / SECOND) % 60, label: "Sec" },
    ];
  }

  return (
    <section
      aria-label="Countdown to the next live build session"
      className="paper-texture relative overflow-hidden border-t border-brand-navy/10"
    >
      <PixelMotif className="absolute top-8 left-[5%] hidden h-12 w-16 sm:block" />
      <PixelMotif
        variant={2}
        className="absolute right-[5%] bottom-8 hidden h-12 w-16 sm:block"
      />
      <div className="relative mx-auto w-full max-w-4xl px-5 py-14 text-center sm:px-8 lg:py-16">
        <div className="flex justify-center">
          <SectionTag>Next live build session</SectionTag>
        </div>
        <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance text-brand-navy-deep sm:text-5xl lg:text-6xl">
          {sessionDate ?? "Thursday"} · 6:00 PM ET
        </h2>

        {units ? (
          <div
            role="timer"
            aria-label="Time until the next Thursday session"
            className="mt-8 flex justify-center gap-3 sm:gap-4"
          >
            {units.map((unit) => (
              <div
                key={unit.label}
                className="w-18 rounded-2xl bg-brand-navy-deep px-2 py-4 text-white shadow-lg shadow-brand-navy/25 sm:w-22"
              >
                <p className="font-display text-4xl font-black tabular-nums sm:text-5xl">
                  {String(unit.value).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[11px] font-extrabold tracking-[0.2em] text-brand-amber uppercase">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-8 font-hand text-3xl text-brand-orange">
            Every Thursday · 6:00 PM ET
          </p>
        )}

        <p className="mx-auto mt-6 max-w-xl leading-7 font-medium text-brand-navy-deep/75">
          Come watch a real AI system get built at Collaboration Central —
          or join the community free and catch the recap.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-orange px-7 py-3.5 text-base font-extrabold text-white shadow-lg shadow-brand-orange/30 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
          >
            Join the community — free
          </a>
          <a
            href="#book"
            className="rounded-full border-2 border-brand-navy px-7 py-3.5 text-base font-extrabold text-brand-navy transition hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
          >
            Book an Audit — {AUDIT_PRICE}
          </a>
        </div>
      </div>
    </section>
  );
}
