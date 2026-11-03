"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { PixelMotif } from "./ui";

/* ------------------------------------------------------------------ */
/* Option A — "The Live Build": a looping demo of the 2-minute win     */
/* ------------------------------------------------------------------ */

const PROMPT_TEXT =
  "Here is everything on my mind right now: two missed calls, the Henderson quote, Tuesday's invoice, Saturday's open house… Turn it into a calm to-do list.";

const TODO_ITEMS = [
  { text: "Return the two missed calls", flagged: true },
  { text: "Send the Henderson quote", flagged: false },
  { text: "Invoice Tuesday's job", flagged: false },
  { text: "Prep Saturday's open house", flagged: false },
];

// Timeline (ms): type 0–2700 · items land 2900 + i*450 · flag 5000 · hold to 8600
const TYPE_END = 2700;
const ITEMS_START = 2900;
const ITEM_STEP = 450;
const FLAG_AT = 5000;
const CYCLE = 8600;

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

function LiveBuildDemo() {
  const reduced = usePrefersReducedMotion();
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const started = Date.now();
    const id = window.setInterval(() => {
      setElapsed((Date.now() - started) % CYCLE);
    }, 50);
    return () => window.clearInterval(id);
  }, [reduced]);

  const t = reduced ? CYCLE : elapsed;
  const chars =
    t >= TYPE_END
      ? PROMPT_TEXT.length
      : Math.floor((t / TYPE_END) * PROMPT_TEXT.length);
  const visibleItems = TODO_ITEMS.filter(
    (_, i) => t >= ITEMS_START + i * ITEM_STEP,
  ).length;
  const flagged = t >= FLAG_AT;

  return (
    <div className="rotate-[-1deg] rounded-3xl border border-brand-navy/12 bg-brand-paper p-6 shadow-xl shadow-brand-navy/10 sm:p-7">
      {/* window chrome */}
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-amber/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-sky/80" />
        <p className="ml-2 text-xs font-extrabold tracking-[0.16em] text-brand-navy-deep/55 uppercase">
          A 2-minute first win — watch it work
        </p>
      </div>

      {/* the prompt, typing itself */}
      <div className="mt-5 rounded-2xl rounded-tl-md bg-brand-navy px-5 py-4 text-white">
        <p className="min-h-[5.25rem] leading-6 font-medium">
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
            return <li key={item.text} className="h-[2.65rem]" aria-hidden="true" />;
          }
          const isFlagged = item.flagged && flagged;
          return (
            <li
              key={item.text}
              className={`hero-rise flex items-center gap-3 rounded-xl px-3.5 py-2.5 ${
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

      <p className="mt-5 flex items-center gap-2 text-sm font-bold text-brand-navy-deep/70">
        <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
          <span className="absolute h-full w-full animate-ping rounded-full bg-brand-orange/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
        </span>
        Built live every Thursday · Collaboration Central, Charlotte
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Option C — "The Rotating Bench": cards cycling under the demo       */
/* ------------------------------------------------------------------ */

const BENCH_CARDS = [
  {
    tag: "Starter Prompt Pack",
    title: "12 prompts, copy-paste ready",
    body: "Business, realtor, and everyday packs — start with one small win today.",
    accent: "start with one →",
  },
  {
    tag: "Our Tools",
    title: "ClosePay · Vibizm",
    body: "ClosePay shows the exact payout on every deal. Vibizm turns ideas into plans.",
    accent: "built right here →",
  },
  {
    tag: "Thursdays",
    title: "We build in public",
    body: "A real AI system, built live in a real classroom — bring a problem, watch it get solved.",
    accent: "come see it built →",
  },
  {
    tag: "The Community",
    title: "Free to join, on Skool",
    body: "Daily tips and weekly tool videos free. Premium is $10/mo when you want the full library.",
    accent: "your first win waits →",
  },
];

function RotatingBench() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % BENCH_CARDS.length);
    }, 3600);
    return () => window.clearInterval(id);
  }, [reduced, paused]);

  const card = BENCH_CARDS[index];

  return (
    <div
      className="rotate-[0.6deg] rounded-3xl border border-brand-navy/12 bg-brand-navy p-6 text-white shadow-xl shadow-brand-navy/20 sm:p-7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div key={index} className={reduced ? undefined : "hero-rise"}>
        <p className="text-xs font-extrabold tracking-[0.18em] text-brand-amber uppercase">
          {card.tag}
        </p>
        <p className="mt-2 font-display text-2xl font-black">{card.title}</p>
        <p className="mt-2 min-h-[3.25rem] leading-6 font-medium text-white/85">
          {card.body}
        </p>
        <p aria-hidden="true" className="mt-1 font-hand text-2xl text-brand-amber">
          {card.accent}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {BENCH_CARDS.map((c, i) => (
          <button
            key={c.tag}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show: ${c.tag}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-7 bg-brand-orange"
                : "w-2.5 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div aria-hidden="true" className="hero-float absolute -top-7 -right-3 z-10 hidden sm:block">
        <PixelMotif className="h-10 w-14" />
      </div>
      <LiveBuildDemo />
      <div className="mt-5">
        <RotatingBench />
      </div>
    </div>
  );
}
