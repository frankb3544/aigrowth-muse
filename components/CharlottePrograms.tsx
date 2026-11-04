import { programs } from "@/lib/data";
import { SectionTag } from "./ui";
import ProgramsShowcase from "./ProgramsShowcase";

export default function CharlottePrograms({
  variant,
}: {
  variant?: "bulletin";
}) {
  const bulletin = variant === "bulletin";
  return (
    <section id="charlotte" className="paper-texture py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>Here in Charlotte</SectionTag>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance text-brand-navy-deep sm:text-5xl lg:text-6xl">
            Built <span className="marker">from here</span>, for here
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-navy-deep/72">
            We&apos;re based at Collaboration Central — a real classroom
            inside a nine-nonprofit collaborative in Charlotte, NC. These
            programs are how the work shows up in person, around Concord,
            Cabarrus, and the whole Charlotte area.
          </p>
        </div>

        {!bulletin && (
          <div className="mt-12">
            <ProgramsShowcase />
          </div>
        )}

        {bulletin && (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <article
              key={program.name}
              className={`flex flex-col rounded-3xl border border-brand-navy/12 bg-brand-paper p-7 shadow-sm shadow-brand-navy/5 ${bulletin ? `pin mt-2 ${index % 2 ? "rotate-[0.5deg]" : "rotate-[-0.5deg]"} shadow-md shadow-brand-navy/10` : "card-lift"}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-black text-brand-navy-deep">
                  {program.name}
                </h3>
                {program.tag && (
                  <span className="shrink-0 rounded-full bg-brand-sky px-3 py-1 text-xs font-extrabold text-brand-navy-deep">
                    {program.tag}
                  </span>
                )}
              </div>
              <p className="mt-3 flex-1 leading-7 text-brand-navy-deep/75">
                {program.description}
              </p>
            </article>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
