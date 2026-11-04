"use client";

import { useEffect, useRef, useState } from "react";
import { programs } from "@/lib/data";
import { useNow } from "./useNow";
import { formatSessionDate, nextSessionTimestamp } from "./nextSession";

/**
 * Homepage Charlotte showcase: an animated "month rhythm" calendar plus
 * the program cards. The calendar is a schematic generic month — it shows
 * the weekly/monthly rhythm (Thursdays lit, one Lab day, one Planned
 * breakfast), never real dated events.
 */

const WEEK_HEAD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAYS_IN_MONTH = 30;
// Generic month starting on a Sunday: Thursdays fall in column 4.
const isThursday = (day: number) => (day - 1) % 7 === 4;
const LAB_DAY = 17;
const BREAKFAST_DAY = 24;

function MonthRhythm({ visible }: { visible: boolean }) {
  const now = useNow(30000);
  const nextSession =
    now !== null ? formatSessionDate(nextSessionTimestamp(now)) : null;

  const cells: (number | null)[] = [
    ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1),
    ...Array.from({ length: 35 - DAYS_IN_MONTH }, () => null),
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-brand-navy/12 bg-brand-paper shadow-lg shadow-brand-navy/10">
      <div className="grid lg:grid-cols-[1.5fr_1fr]">
        <div aria-hidden="true" className="p-6 sm:p-8">
          <div className="grid grid-cols-7 gap-1.5">
            {WEEK_HEAD.map((day) => (
              <span
                key={day}
                className={`pb-1 text-center text-[11px] font-extrabold tracking-widest uppercase ${
                  day === "Thu"
                    ? "text-brand-orange"
                    : "text-brand-navy-deep/45"
                }`}
              >
                {day}
              </span>
            ))}
            {cells.map((day, index) => {
              if (day === null) {
                return <span key={`blank-${index}`} className="aspect-square" />;
              }
              const thursday = isThursday(day);
              const lab = day === LAB_DAY;
              const breakfast = day === BREAKFAST_DAY;
              return (
                <span
                  key={day}
                  style={{ transitionDelay: `${index * 22}ms` }}
                  className={`rise-item flex aspect-square items-center justify-center rounded-lg text-sm font-bold ${
                    visible ? "is-visible" : ""
                  } ${
                    thursday
                      ? `bg-brand-orange font-extrabold text-white ${visible ? "pulse-soft" : ""}`
                      : lab
                        ? "bg-brand-amber font-extrabold text-brand-navy-deep"
                        : breakfast
                          ? "border-2 border-dashed border-brand-navy/35 text-brand-navy-deep/55"
                          : "bg-brand-navy/5 text-brand-navy-deep/60"
                  }`}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center border-t border-dashed border-brand-navy/15 p-6 sm:p-8 lg:border-t-0 lg:border-l">
          <h3 className="font-display text-2xl font-black text-brand-navy-deep">
            One month, our rhythm
          </h3>
          <p className="mt-3 leading-7 text-brand-navy-deep/75">
            Every Thursday we build in public — plus one deeper Lab day a
            month.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm font-bold text-brand-navy-deep/75">
            <li className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 rounded bg-brand-orange"
              />
              Thursdays — live build session
            </li>
            <li className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 rounded bg-brand-amber"
              />
              Automation Lab — once a month
            </li>
            <li className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 rounded border-2 border-dashed border-brand-navy/35"
              />
              AI Breakfast — Planned
            </li>
          </ul>
          <p className="mt-5 text-sm font-extrabold text-brand-orange">
            {nextSession
              ? `Next session: ${nextSession} · 6:00 PM ET`
              : "Every Thursday · 6:00 PM ET"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProgramsShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Fire the stagger once, when the showcase scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <MonthRhythm visible={visible} />

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, index) => (
          <article
            key={program.name}
            style={{ transitionDelay: `${350 + index * 110}ms` }}
            className={`rise-item card-lift flex flex-col rounded-3xl border border-brand-navy/12 bg-brand-paper p-7 shadow-sm shadow-brand-navy/5 ${
              visible ? "is-visible" : ""
            } ${program.tag === "Planned" ? "border-dashed" : ""}`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl font-black text-brand-navy-deep">
                {program.name}
              </h3>
              {program.tag && (
                <span className="shrink-0 rounded-full bg-brand-sky px-3 py-1 text-xs font-extrabold text-brand-navy-deep">
                  {program.tag}
                </span>
              )}
            </div>
            <p className="mt-3 flex-1 leading-7 text-brand-navy-deep/75">
              {program.description}
            </p>
            {program.name === "The Automation Lab" && (
              <p className="mt-4 flex items-center gap-2 text-xs font-extrabold tracking-wide text-brand-navy-deep/55 uppercase">
                <span aria-hidden="true" className="flex gap-1.5">
                  {[0, 1, 2, 3].map((dot) => (
                    <span
                      key={dot}
                      className={`h-2 w-2 rounded-full ${
                        dot === 1 ? "bg-brand-amber" : "bg-brand-navy/15"
                      }`}
                    />
                  ))}
                </span>
                Monthly rhythm
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
