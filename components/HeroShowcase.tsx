"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { PixelMotif } from "./ui";

/* One combined card: the Live Build demo (A) with the Rotating Bench (C)
   built into its footer band — a single unit, balanced with the left column. */

const PROMPT_TEXT =
  "Everything on my mind: two missed calls, the Henderson quote, Tuesday's invoice, Saturday's open house… Make it a calm to-do list.";

const TODO_ITEMS = [
  { text: "Return the two missed calls", flagged: true },
  { text: "Send the Henderson quote", flagged: false },
  { text: "Invoice Tuesday's job", flagged: false },
  { text: "Prep Saturday's open house", flagged: false },
];

// Timeline (ms): type 0–2500 · items land 2700 + i*420 · flag 4600 · hold to 8200
const TYPE_END = 2500;
const ITEMS_START = 2700;
const ITEM_STEP = 420;
const FLAG_AT = 4600;
const CYCLE = 8200;

const BENCH_CARDS = [
  {
    tag: "Starter Prompt Pack",
    title: "12 prompts, copy-paste ready",
    body: "Business, realtor, everyday — start with one small win.",
  },
  {
    tag: "Our Tools",
    title: "ClosePay · Vibizm",
    body: "Exact payouts on every deal, and ideas turned into plans.",
  },
  {
    tag: "Thursdays",
    title: "We build in public",
    body: "A real system, built live at Collaboration Central, Charlotte.",
  },
  {
    tag: "The Community",
    title: "Free to join, on Skool",
    body: "Premium is $10/mo when you want the full library.",
  },
];

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export default function HeroShowcase() {
  const reduced = usePrefersReducedMotion();
  const [elapsed, setElapsed] = useState(0);
  const [benchIndex, setBenchIndex] = useState(0);
  const [benchPaused, setBenchPaused] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const started = Date.now();
    const id = window.setInterval(() => {
      setElapsed((Date.now() - started) % CYCLE);
    }, 50);
    return () => window.clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    if (reduced || benchPaused) return;
    const id = window.setInterval(() => {
      setBenchIndex((i) => (i + 1) % BENCH_CARDS.length);
    }, 3600);
    return () => window.clearInterval(id);
  }, [reduced, benchPaused]);

  const t = reduced ? CYCLE : elapsed;
  const chars =
    t >= TYPE_END
      ? PROMPT_TEXT.length
      : Math.floor((t / TYPE_END) * PROMPT_TEXT.length);
  const visibleItems = TODO_ITEMS.filter(
    (_, i) => t >= ITEMS_START + i * ITEM_STEP,
  ).length;
  const flagged = t >= FLAG_AT;
  const bench = BENCH_CARDS[benchIndex];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden="true"
        className="hero-float absolute -top-7 -right-3 z-10 hidden sm:block"
      >
        <PixelMotif className="h-10 w-14" />
      </div>

      <div className="rotate-[-1deg] rounded-3xl border border-brand-navy/12 bg-brand-paper p-6 shadow-xl shadow-brand-navy/10 sm:p-7">
        {/* window chrome */}
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-amber/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-sky/80" />
          <p className="ml-2 text-xs font-extrabold tracking-[0.16em] text-brand-navy-deep/55 uppercase">
            A 2-minute first win — watch it work
          </p>
          <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-brand-navy px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-white uppercase">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-brand-amber/70" />
              <span className="h-2 w-2 rounded-full bg-brand-amber" />
            </span>
            Live Thursdays
          </span>
        </div>

        {/* the prompt, typing itself */}
        <div className="mt-5 rounded-2xl rounded-tl-md bg-brand-navy px-5 py-4 text-white">
          <p className="min-h-[4.5rem] leading-6 font-medium">
            {PROMPT_TEXT.slice(0, chars)}
            {!reduced && t < TYPE_END && (
              <span aria-hidden="true" className="hero-caret ml-0.5 font-black text-brand-amber">
                ▍
              </span>
            )}
          </p>
        </div>

        {/* the calm list, building */}
        <ul className="mt-4 space-y-2" aria-label="The AI turns it into a calm list">
          {TODO_ITEMS.map((item, i) => {
            const visible = i < visibleItems;
            if (!visible) {
              return <li key={item.text} className="h-[2.5rem]" aria-hidden="true" />;
            }
            const isFlagged = item.flagged && flagged;
            return (
              <li
                key={item.text}
                className={`hero-rise flex items-center gap-3 rounded-xl px-3.5 py-2 ${
                  isFlagged
                    ? "bg-brand-amber/25 ring-1 ring-brand-amber"
                    : "bg-brand-cream"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="hero-pop flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-brand-navy text-[11px] font-black text-white"
                >
                  ✓
                </span>
                <span className="flex-1 leading-6 font-semibold text-brand-navy-deep/85">
                  {item.text}
                </span>
                {isFlagged && (
                  <span className="hero-pop shrink-0 rounded-full bg-brand-orange px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-white uppercase">
                    ★ Matters most
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        {/* the bench, rotating inside the same card */}
        <div
          className="mt-5 rounded-2xl bg-brand-navy px-5 py-4 text-white"
          onMouseEnter={() => setBenchPaused(true)}
          onMouseLeave={() => setBenchPaused(false)}
        >
          <div key={benchIndex} className={reduced ? undefined : "hero-rise"}>
            <p className="flex items-baseline justify-between gap-3">
              <span className="text-[11px] font-extrabold tracking-[0.18em] text-brand-amber uppercase">
                {bench.tag}
              </span>
              <span className="font-display text-lg leading-none font-black">
                {bench.title}
              </span>
            </p>
            <p className="mt-1.5 min-h-[1.5rem] text-sm leading-6 font-medium text-white/85">
              {bench.body}
            </p>
          </div>
          <div className="mt-3 flex items-center gap-2">
            {BENCH_CARDS.map((c, i) => (
              <button
                key={c.tag}
                type="button"
                onClick={() => setBenchIndex(i)}
                aria-label={`Show: ${c.tag}`}
                aria-current={i === benchIndex}
                className={`h-2 rounded-full transition-all ${
                  i === benchIndex
                    ? "w-6 bg-brand-orange"
                    : "w-2 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
            <span aria-hidden="true" className="ml-auto font-hand text-xl leading-none text-brand-amber">
              all of it, right here →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
