import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.18em] text-brand-orange uppercase">
      <span aria-hidden="true" className="inline-block h-2.5 w-2.5 bg-brand-orange" />
      {children}
    </p>
  );
}

/** Standard frame for subpages: header, main, footer on the cream ground. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-cream font-sans text-brand-navy-deep">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export type HeroTheme =
  | "plain"
  | "blueprint"
  | "clubhouse"
  | "bench"
  | "local"
  | "notebook"
  | "letter";

/**
 * One hero family for every subpage: same skeleton (tag, display headline,
 * plain intro, pixel motif), dressed per page inside the brand palette.
 * `note` renders as a handwritten Caveat line; `stamp` as a rotated stamp chip.
 */
export function PageHero({
  tag,
  title,
  intro,
  theme = "plain",
  note,
  stamp,
  motifVariant = 0,
  ticket,
}: {
  tag: string;
  title: string;
  intro: string;
  theme?: HeroTheme;
  note?: string;
  stamp?: string;
  motifVariant?: number;
  /** Work-order ticket header strip (consulting): a WO number plus
   *  factual field/value pairs printed along the top of the hero. */
  ticket?: { no: string; fields: [string, string][] };
}) {
  const dark = theme === "blueprint" || theme === "bench";

  const sectionClass =
    theme === "blueprint"
      ? "blueprint text-white"
      : theme === "bench"
        ? "bg-brand-navy text-white"
        : theme === "clubhouse"
          ? "bg-[linear-gradient(155deg,rgba(251,191,36,0.38),rgba(255,247,232,0)_58%)]"
          : theme === "local"
            ? "bg-brand-sky/30"
            : theme === "notebook"
              ? "ruled-paper-sheet border-b-2 border-brand-navy/10"
              : theme === "letter"
                ? "paper-texture border-b-2 border-brand-navy/10 bg-brand-paper"
                : "";

  return (
    <section className={`relative overflow-hidden ${sectionClass}`}>
      {theme === "blueprint" && (
        <div
          aria-hidden="true"
          className="blueprint-major absolute inset-0"
        />
      )}
      {theme === "notebook" && (
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-6 w-px bg-brand-orange/40 sm:left-10"
        />
      )}
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-16">
        <PixelMotif
          variant={motifVariant}
          className="absolute top-10 right-6 hidden h-12 w-20 sm:block lg:right-10"
        />
        {ticket && (
          <div className="mb-9 flex flex-wrap items-stretch gap-px overflow-hidden rounded-lg border-2 border-dashed border-brand-sky/40 bg-brand-sky/25 text-[11px] font-extrabold tracking-[0.18em] uppercase">
            <span className="flex items-center bg-brand-orange px-4 py-2.5 text-white">
              Work order · {ticket.no}
            </span>
            {ticket.fields.map(([label, value]) => (
              <span
                key={label}
                className="flex items-center gap-2 bg-brand-navy-deep/60 px-4 py-2.5 text-white/65"
              >
                {label}
                <span className="text-sm tracking-normal text-brand-amber normal-case">
                  {value}
                </span>
              </span>
            ))}
            <span className="hidden items-center px-4 py-2.5 font-hand text-lg tracking-normal text-brand-sky normal-case lg:flex">
              one bottleneck at a time
            </span>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-4">
          <SectionTag>{tag}</SectionTag>
          {stamp && (
            <span
              className={`inline-block rotate-2 rounded-md border-2 px-3 py-1 font-hand text-xl leading-none ${
                dark
                  ? "border-brand-amber text-brand-amber"
                  : "border-brand-orange text-brand-orange"
              }`}
            >
              {stamp}
            </span>
          )}
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed ${
            dark ? "text-white/75" : "text-brand-navy-deep/75"
          }`}
        >
          {intro}
        </p>
        {note && (
          <p
            className={`mt-5 font-hand text-3xl ${
              dark ? "text-brand-amber" : "text-brand-navy-deep/75"
            }`}
          >
            {note}
          </p>
        )}
        {theme === "letter" && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/brand/icon-square-white-on-navy-512.png"
            alt=""
            aria-hidden="true"
            className="absolute right-6 bottom-8 hidden h-16 w-16 rotate-3 rounded-2xl shadow-lg shadow-brand-navy/25 ring-2 ring-brand-amber sm:block lg:right-10"
          />
        )}
        {theme === "bench" && (
          <div
            aria-hidden="true"
            className="absolute right-0 bottom-0 left-0 h-2 bg-brand-orange"
          />
        )}
      </div>
    </section>
  );
}

const MOTIFS: { top: number; left: number; size: number; color: string }[][] = [
  [
    { top: 0, left: 0, size: 8, color: "bg-brand-sky" },
    { top: 14, left: 22, size: 12, color: "bg-brand-amber" },
    { top: 4, left: 48, size: 8, color: "bg-brand-orange" },
    { top: 30, left: 8, size: 10, color: "bg-brand-sky" },
    { top: 38, left: 40, size: 8, color: "bg-brand-amber" },
  ],
  [
    { top: 6, left: 44, size: 8, color: "bg-brand-sky" },
    { top: 0, left: 10, size: 10, color: "bg-brand-orange" },
    { top: 22, left: 30, size: 12, color: "bg-brand-amber" },
    { top: 36, left: 2, size: 8, color: "bg-brand-amber" },
    { top: 40, left: 56, size: 8, color: "bg-brand-sky" },
  ],
  [
    { top: 2, left: 26, size: 12, color: "bg-brand-sky" },
    { top: 18, left: 2, size: 8, color: "bg-brand-amber" },
    { top: 26, left: 52, size: 10, color: "bg-brand-orange" },
    { top: 40, left: 22, size: 8, color: "bg-brand-orange" },
    { top: 12, left: 62, size: 8, color: "bg-brand-amber" },
  ],
  [
    { top: 0, left: 56, size: 10, color: "bg-brand-amber" },
    { top: 14, left: 6, size: 8, color: "bg-brand-sky" },
    { top: 24, left: 38, size: 12, color: "bg-brand-orange" },
    { top: 42, left: 12, size: 8, color: "bg-brand-sky" },
    { top: 34, left: 64, size: 8, color: "bg-brand-amber" },
  ],
  [
    { top: 8, left: 2, size: 10, color: "bg-brand-orange" },
    { top: 2, left: 34, size: 8, color: "bg-brand-amber" },
    { top: 20, left: 58, size: 12, color: "bg-brand-sky" },
    { top: 38, left: 30, size: 8, color: "bg-brand-sky" },
    { top: 44, left: 62, size: 8, color: "bg-brand-orange" },
  ],
  [
    { top: 4, left: 40, size: 12, color: "bg-brand-amber" },
    { top: 16, left: 64, size: 8, color: "bg-brand-sky" },
    { top: 28, left: 8, size: 10, color: "bg-brand-sky" },
    { top: 40, left: 44, size: 8, color: "bg-brand-orange" },
    { top: 0, left: 4, size: 8, color: "bg-brand-orange" },
  ],
];

/** The logo's rising pixel cubes — a different arrangement per variant. */
export function PixelMotif({
  className = "",
  variant = 0,
}: {
  className?: string;
  variant?: number;
}) {
  const spans = MOTIFS[Math.abs(variant) % MOTIFS.length];
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      {spans.map((span, index) => (
        <span
          key={index}
          className={`absolute ${span.color}`}
          style={{
            top: span.top,
            left: span.left,
            width: span.size,
            height: span.size,
          }}
        />
      ))}
    </div>
  );
}
