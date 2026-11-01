import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FinalCta from "@/components/FinalCta";
import { PageHero, PageShell, SectionTag } from "@/components/ui";
import { toolPages } from "@/lib/data";

export function generateStaticParams() {
  return toolPages.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = toolPages.find((t) => t.slug === slug);
  if (!tool) return {};
  return {
    title: `${tool.name} — ${tool.tagline}`,
    description: tool.description,
    alternates: { canonical: `/tools/${tool.slug}` },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = toolPages.find((t) => t.slug === slug);
  if (!tool) notFound();

  const others = toolPages.filter((t) => t.slug !== slug);
  const toolIndex = toolPages.findIndex((t) => t.slug === slug);

  return (
    <PageShell>
      <PageHero
        tag="Our tools"
        title={tool.name}
        intro={tool.tagline}
        theme="bench"
        motifVariant={toolIndex}
      />
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-lg leading-8 text-brand-navy-deep/80">
                {tool.description}
              </p>
              {tool.stat && (
                <p className="mt-5 inline-flex rounded-full bg-brand-amber/25 px-4 py-1.5 font-extrabold text-brand-navy-deep">
                  {tool.stat}
                </p>
              )}
              <h2 className="mt-10 font-display text-3xl font-black text-brand-navy-deep">
                What it does
              </h2>
              <ul className="mt-5 space-y-3.5">
                {tool.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-brand-navy text-[11px] font-black text-white"
                    >
                      ✓
                    </span>
                    <span className="leading-7 text-brand-navy-deep/80">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-brand-orange px-7 py-3.5 text-base font-extrabold text-white shadow-md shadow-brand-orange/30 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
              >
                {tool.linkLabel} →
              </a>
            </div>
            <aside className="h-fit overflow-hidden rounded-3xl border-2 border-brand-navy/15 bg-brand-paper/80 p-7 shadow-lg shadow-brand-navy/8">
              <div className="-mx-7 -mt-7 mb-6 flex items-center justify-between bg-brand-navy px-7 py-4">
                <span className="font-hand text-2xl text-white">
                  From the bench
                </span>
                <span
                  aria-hidden="true"
                  className="h-2.5 w-14 rounded-full bg-white/30"
                />
              </div>
              <SectionTag>Who it&apos;s for</SectionTag>
              <p className="mt-3 leading-7 font-semibold text-brand-navy-deep/85">
                {tool.whoFor}
              </p>
              <div className="mt-6 border-t border-dashed border-brand-navy/15 pt-5">
                <p className="text-sm font-extrabold tracking-[0.14em] text-brand-navy-deep/60 uppercase">
                  More of our tools
                </p>
                <ul className="mt-3 space-y-2">
                  {others.map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/tools/${other.slug}`}
                        className="font-bold text-brand-navy transition hover:text-brand-orange"
                      >
                        {other.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
