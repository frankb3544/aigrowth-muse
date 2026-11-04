import { featuredTools, tools, type Tool } from "@/lib/data";
import { SectionTag } from "./ui";

function FeaturedCard({ tool }: { tool: Tool }) {
  return (
    <article className="card-lift flex flex-col rounded-3xl border-2 border-brand-navy bg-brand-paper p-8 shadow-lg shadow-brand-navy/12">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-3xl font-black text-brand-navy-deep">
          {tool.name}
        </h3>
        <span className="rounded-full bg-brand-amber px-3 py-1 text-xs font-extrabold text-brand-navy-deep">
          Featured
        </span>
      </div>
      <p className="mt-4 flex-1 leading-7.5 text-brand-navy-deep/80">
        {tool.description}
      </p>
      {tool.stat && (
        <p className="mt-5 font-display text-xl font-black text-brand-orange italic">
          {tool.stat}
        </p>
      )}
      <a
        href={tool.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 font-extrabold text-brand-navy underline decoration-brand-orange decoration-2 underline-offset-4 transition hover:text-brand-orange"
      >
        {tool.linkLabel} <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default function Tools() {
  return (
    <section id="tools" className="bg-brand-navy-deep py-16 text-white lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>Our tools</SectionTag>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Tools we built, <span className="marker">because we needed them</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/72">
            Every tool here started as a real problem in a real business.
            They&apos;re standalone — use any of them on its own, no
            membership required.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredTools.map((tool) => (
            <FeaturedCard key={tool.name} tool={tool} />
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-brand-navy/12 bg-brand-paper shadow-sm shadow-brand-navy/5">
          {tools.map((tool, index) => (
            <article
              key={tool.name}
              className={`grid gap-3 px-7 py-6 sm:grid-cols-[220px_1fr_auto] sm:items-center sm:gap-6 sm:px-8 ${
                index > 0 ? "border-t border-dashed border-brand-navy/15" : ""
              }`}
            >
              <h3 className="font-display text-2xl font-black text-brand-navy-deep">
                {tool.name}
              </h3>
              <p className="leading-7 text-brand-navy-deep/75">
                {tool.description}
              </p>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold whitespace-nowrap text-brand-navy underline decoration-brand-orange decoration-2 underline-offset-4 transition hover:text-brand-orange"
              >
                {tool.linkLabel} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
