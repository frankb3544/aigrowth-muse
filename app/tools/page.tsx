import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import { PageHero, PageShell, PixelMotif } from "@/components/ui";
import { toolPages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Tools — built here, used by real businesses",
  description:
    "The tools we've built and run ourselves: ClosePay for agent commissions, Vibizm for turning ideas into plans, Inspect Sumo for inspection reports, Nurse K, Cobles Landing Reservations, and Salintus.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <PageShell>
      <PageHero
        tag="Our tools"
        title="We don't just teach it. We build it."
        intro="Every tool below is one we made — most of them started as a Thursday build or a bottleneck in a business we work with. Open one up and see what it does."
        theme="bench"
        note="The bench, drawer by drawer."
        motifVariant={5}
      />
      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-3xl border-2 border-brand-navy/20 bg-brand-paper shadow-xl shadow-brand-navy/10">
            {toolPages.map((tool, index) => (
              <article
                key={tool.slug}
                className={`grid gap-6 p-7 sm:p-9 lg:grid-cols-[260px_1fr] ${
                  index % 2 ? "bg-brand-cream" : "bg-brand-paper"
                } ${index > 0 ? "border-t-2 border-dashed border-brand-navy/15" : ""}`}
              >
                <div>
                  <span
                    aria-hidden="true"
                    className="block h-2.5 w-16 rounded-full bg-brand-navy/25"
                  />
                  <h2 className="mt-4 font-display text-3xl font-black text-brand-navy-deep">
                    {tool.name}
                  </h2>
                  <PixelMotif
                    variant={index}
                    className="relative mt-3 h-12 w-20"
                  />
                  {tool.stat && (
                    <p className="mt-4 inline-flex w-fit rounded-full bg-brand-amber/25 px-3 py-1 text-sm font-extrabold text-brand-navy-deep">
                      {tool.stat}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="font-display text-xl leading-snug font-bold text-balance text-brand-navy-deep">
                    {tool.tagline}
                  </p>
                  <p className="mt-3 flex-1 leading-7 text-brand-navy-deep/75">
                    {tool.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="rounded-full bg-brand-navy px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-brand-navy-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
                    >
                      About {tool.name}
                    </Link>
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border-2 border-brand-navy px-5 py-2.5 text-sm font-extrabold text-brand-navy transition hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
                    >
                      {tool.linkLabel} →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 font-hand text-3xl text-brand-navy-deep/70">
            Every drawer started as somebody&apos;s bottleneck.
          </p>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
