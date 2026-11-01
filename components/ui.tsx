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

/** Hero block for subpages: section tag, big display headline, plain intro. */
export function PageHero({
  tag,
  title,
  intro,
}: {
  tag: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 pb-10 sm:px-8 sm:pt-20">
        <SectionTag>{tag}</SectionTag>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-navy-deep/75">
          {intro}
        </p>
      </div>
    </section>
  );
}

export function PixelMotif({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      <span className="absolute h-2 w-2 bg-brand-sky" style={{ top: 0, left: 0 }} />
      <span className="absolute h-3 w-3 bg-brand-amber" style={{ top: 14, left: 22 }} />
      <span className="absolute h-2 w-2 bg-brand-orange" style={{ top: 4, left: 48 }} />
      <span className="absolute h-2.5 w-2.5 bg-brand-sky" style={{ top: 30, left: 8 }} />
      <span className="absolute h-2 w-2 bg-brand-amber" style={{ top: 38, left: 40 }} />
    </div>
  );
}
