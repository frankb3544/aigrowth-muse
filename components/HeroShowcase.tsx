"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { PixelMotif } from "./ui";

/* One combined card. The demo rotates through THREE scenes — a different
   prompt typing itself, then its own solving card — and the Rotating Bench
   band sits inside the same card's footer. */

type Scene = {
  tag: string;
  prompt: string;
  kind: "list" | "message";
  items?: { text: string; flagged?: boolean }[];
  message?: string;
  action?: string;
};

const SCENES: Scene[] = [
  {
    tag: "Everyday · The brain-dump",
    prompt:
      "Everything on my mind: two missed calls, the Henderson quote, Tuesday's invoice, Saturday's open house… Make it a calm to-do list.",
    kind: "list",
    items: [
      { text: "Return the two missed calls", flagged: true },
      { text: "Send the Henderson quote" },
      { text: "Invoice Tuesday's job" },
      { text: "Prep Saturday's open house" },
    ],
  },
  {
    tag: "Small business · The review reply",
    prompt:
      "A customer just left a 5-star review: “Fast, friendly, and fixed it the same day.” Write a warm reply I can post.",
    kind: "message",
    message:
      "Thank you! Same-day fixes are our favorite kind — we appreciate you trusting us, and we're here whenever you need us.",
    action: "Post the reply",
  },
  {
    tag: "Realtor · The follow-up",
    prompt:
      "Write a follow-up text to yesterday's showing couple — they loved the kitchen, they're unsure about the yard.",
    kind: "message",
    message:
      "Hi Sarah and Tom — thanks for coming by yesterday! The kitchen really is the heart of that home, and the yard is low-maintenance by design. Want a second look this weekend?",
    action: "Send it this morning",
  },
];

const SCENE_MS = 7600;
const REVEAL_GAP = 250;
const ITEM_STEP = 420;

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
  const [tick, setTick] = useState(0); // 50ms ticks since mount
  const [jump, setJump] = useState<{ scene: number; atTick: number } | null>(null);
  const [benchIndex, setBenchIndex] = useState(0);
  const [benchPaused, setBenchPaused] = useState(false);

  // One ticking counter drives the whole scene rotation (no wall-clock reads).
  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 50);
    return () => window.clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    if (reduced || benchPaused) return;
    const id = window.setInterval(() => {
      setBenchIndex((i) => (i + 1) % BENCH_CARDS.length);
    }, 3600);
    return () => window.clearInterval(id);
  }, [reduced, benchPaused]);

  const jumpToScene = (i: number) => setJump({ scene: i, atTick: tick });

  const totalMs = (jump ? tick - jump.atTick : tick) * 50;
  const sceneIndex = jump
    ? (jump.scene + Math.floor(totalMs / SCENE_MS)) % SCENES.length
    : Math.floor(totalMs / SCENE_MS) % SCENES.length;

  const scene = SCENES[sceneIndex];
  const t = reduced ? SCENE_MS : totalMs % SCENE_MS;
  const typeDur = Math.min(2500, scene.prompt.length * 19);
  const chars =
    t >= typeDur
      ? scene.prompt.length
      : Math.floor((t / typeDur) * scene.prompt.length);
  const revealStart = typeDur + REVEAL_GAP;
  const rowCount = scene.kind === "list" ? scene.items!.length : 2;
  const visibleRows =
    t < revealStart
      ? 0
      : Math.min(rowCount, 1 + Math.floor((t - revealStart) / ITEM_STEP));
  const flagAt = revealStart + rowCount * ITEM_STEP + 150;
  const flagged = t >= flagAt;
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
            Watch it work
          </p>
          <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-brand-navy px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-white uppercase">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-brand-amber/70" />
              <span className="h-2 w-2 rounded-full bg-brand-amber" />
            </span>
            Live Thursdays
          </span>
        </div>

        {/* scene tag + scene dots */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <p
            key={`tag-${sceneIndex}`}
            className="hero-rise text-sm font-extrabold text-brand-orange"
          >
            {scene.tag}
          </p>
          <div className="flex items-center gap-1.5">
            {SCENES.map((s, i) => (
              <button
                key={s.tag}
                type="button"
                onClick={() => jumpToScene(i)}
                aria-label={`Show demo: ${s.tag}`}
                aria-current={i === sceneIndex}
                className={`h-2 rounded-full transition-all ${
                  i === sceneIndex
                    ? "w-6 bg-brand-navy"
                    : "w-2 bg-brand-navy/25 hover:bg-brand-navy/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* the prompt, typing itself */}
        <div
          key={`prompt-${sceneIndex}`}
          className="mt-3 rounded-2xl rounded-tl-md bg-brand-navy px-5 py-4 text-white"
        >
          <p className="min-h-[4.5rem] leading-6 font-medium">
            {scene.prompt.slice(0, chars)}
            {!reduced && t < typeDur && (
              <span aria-hidden="true" className="hero-caret ml-0.5 font-black text-brand-amber">
                ▍
              </span>
            )}
          </p>
        </div>

        {/* this scene's solving card */}
        <div key={`solve-${sceneIndex}`} className="mt-4 min-h-[12.5rem]">
          {scene.kind === "list" ? (
            <ul className="space-y-2" aria-label="The AI solves it">
              {scene.items!.map((item, i) => {
                if (i >= visibleRows) {
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
          ) : (
            <div>
              {visibleRows >= 1 ? (
                <div className="hero-rise rounded-2xl rounded-tl-md bg-brand-cream px-5 py-4 ring-1 ring-brand-navy/10">
                  <p className="text-xs font-extrabold tracking-[0.16em] text-brand-navy-deep/55 uppercase">
                    Drafted for you — read it, then send
                  </p>
                  <p className="mt-1.5 leading-6 font-medium text-brand-navy-deep/88">
                    “{scene.message}”
                  </p>
                </div>
              ) : (
                <div className="h-[8.5rem]" aria-hidden="true" />
              )}
              {visibleRows >= 2 ? (
                <div
                  className={`hero-rise mt-2 flex items-center gap-3 rounded-xl px-3.5 py-2 ${
                    flagged
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
                    {scene.action}
                  </span>
                  {flagged && (
                    <span className="hero-pop shrink-0 rounded-full bg-brand-orange px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-white uppercase">
                      ★ Do this one
                    </span>
                  )}
                </div>
              ) : (
                <div className="mt-2 h-[2.5rem]" aria-hidden="true" />
              )}
            </div>
          )}
        </div>

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
