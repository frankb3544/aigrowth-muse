"use client";

import { useEffect, useRef, useState } from "react";
import { useNow } from "./useNow";
import { formatSessionDate, nextSessionTimestamp } from "./nextSession";

const COUNT_MS = 1400;
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function StatCard({
  name,
  detail,
  value,
  barClass,
  caption,
}: {
  name: string;
  detail: string;
  value: number;
  barClass: string;
  caption: string;
}) {
  return (
    <article className="card-lift flex flex-col rounded-3xl border border-brand-navy/12 bg-brand-paper p-7 text-brand-navy-deep shadow-lg shadow-black/25">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-black">{name}</h3>
          <p className="mt-0.5 text-sm font-bold text-brand-navy-deep/55">
            {detail}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-brand-navy/20 px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-brand-navy-deep/60 uppercase">
          Owner-reported
        </span>
      </div>
      <p className="mt-5 font-display text-6xl font-black tracking-tight text-brand-navy-deep">
        +{value}
        <span className="text-4xl">%</span>
      </p>
      <div
        aria-hidden="true"
        className="mt-4 h-3 overflow-hidden rounded-full bg-brand-navy/10"
      >
        <div
          className={`h-full rounded-full ${barClass}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <p className="mt-4 leading-7 font-semibold text-brand-navy-deep/75">
        {caption}
      </p>
    </article>
  );
}

/**
 * The proof dashboard: the two owner-reported usage numbers count up
 * when the cards scroll into view, next to the Thursday session card.
 * Only those reported figures are shown — nothing modelled or projected.
 */
export default function ProofStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState({ closepay: 0, insider: 0 });
  const now = useNow(30000);

  // Start the count-up once, when the dashboard enters the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCounts({ closepay: 30, insider: 25 });
          }
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let t0: number | null = null;
    const step = (t: number) => {
      if (t0 === null) t0 = t;
      const p = Math.min(1, (t - t0) / COUNT_MS);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounts({
        closepay: Math.round(30 * eased),
        insider: Math.round(25 * eased),
      });
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  const nextSession =
    now !== null ? formatSessionDate(nextSessionTimestamp(now)) : null;

  return (
    <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-3">
      <StatCard
        name="ClosePay"
        detail="Commission tracking for agents"
        value={counts.closepay}
        barClass="bg-brand-orange"
        caption="Realtor usage up — and growing."
      />
      <StatCard
        name="NewConstructionInsider.net"
        detail="New-construction buyer resource"
        value={counts.insider}
        barClass="bg-brand-sky"
        caption="Usage up across Charlotte-area communities."
      />

      <article className="card-lift flex flex-col rounded-3xl border border-brand-navy/12 bg-brand-paper p-7 text-brand-navy-deep shadow-lg shadow-black/25">
        <h3 className="font-display text-2xl font-black">Built live, weekly</h3>
        <p className="mt-0.5 text-sm font-bold text-brand-navy-deep/55">
          Collaboration Central, Charlotte
        </p>
        <div aria-hidden="true" className="mt-5 grid grid-cols-7 gap-1.5">
          {DAYS.map((day) => (
            <span
              key={day}
              className={`rounded-lg py-2 text-center text-xs font-extrabold ${
                day === "Thu"
                  ? "pulse-soft bg-brand-orange text-white"
                  : "bg-brand-navy/6 text-brand-navy-deep/55"
              }`}
            >
              {day}
            </span>
          ))}
        </div>
        <p className="mt-4 leading-7 font-semibold text-brand-navy-deep/75">
          A real system built live, every Thursday — mistakes and all, in
          front of the room.
        </p>
        <p className="mt-3 text-sm font-extrabold text-brand-orange">
          {nextSession
            ? `Next session: ${nextSession} · 6:00 PM ET`
            : "Every Thursday · 6:00 PM ET"}
        </p>
      </article>
    </div>
  );
}
