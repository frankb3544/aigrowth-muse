import { properties } from "@/lib/data";
import { SectionTag } from "./ui";

export default function BuiltAndOwn() {
  return (
    <section id="built-and-own" className="bg-brand-navy-deep py-16 text-white lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>More we&apos;ve built &amp; own</SectionTag>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance sm:text-5xl">
            Real businesses, <span className="marker">not just software</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/72">
            The same team builds and runs these too — which is why our advice
            comes from doing the work, not watching it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {properties.map((property) => (
            <a
              key={property.name}
              href={property.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-3xl border border-white/16 bg-white/[0.06] p-8 transition hover:border-brand-amber/60 hover:bg-white/[0.09] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-black break-all sm:text-3xl">
                  {property.name}
                </h3>
                {property.stat && (
                  <span className="rounded-full bg-brand-amber px-3.5 py-1.5 font-display text-base font-black text-brand-navy-deep italic">
                    {property.stat}
                  </span>
                )}
              </div>
              <p className="mt-4 flex-1 leading-7.5 text-white/78">
                {property.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-brand-amber">
                Visit the site{" "}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
