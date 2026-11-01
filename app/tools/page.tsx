import type { Metadata } from "next";
import Link from "next/link";
import BuiltAndOwn from "@/components/BuiltAndOwn";
import FinalCta from "@/components/FinalCta";
import { PageHero, PageShell, SectionTag } from "@/components/ui";
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
      />
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {toolPages.map((tool) => (
              <article
                key={tool.slug}
                className="flex flex-col rounded-3xl border-2 border-brand-navy/15 bg-brand-paper/80 p-7 shadow-lg shadow-brand-navy/8"
              >
                <SectionTag>{tool.name}</SectionTag>
                <h2 className="mt-3 font-display text-2xl leading-snug font-black text-balance text-brand-navy-deep">
                  {tool.tagline}
                </h2>
                <p className="mt-3 flex-1 leading-7 text-brand-navy-deep/75">
                  {tool.description}
                </p>
                {tool.stat && (
                  <p className="mt-4 inline-flex w-fit rounded-full bg-brand-amber/25 px-3 py-1 text-sm font-extrabold text-brand-navy-deep">
                    {tool.stat}
                  </p>
                )}
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
              </article>
            ))}
          </div>
        </div>
      </section>
      <BuiltAndOwn />
      <FinalCta />
    </PageShell>
  );
}
