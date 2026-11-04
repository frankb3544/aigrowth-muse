import { processSteps } from "@/lib/data";
import { SectionTag } from "./ui";

const rotations = [
  "rotate-[-2deg]",
  "rotate-[1.5deg]",
  "rotate-[-1deg]",
  "rotate-[2deg]",
  "rotate-[-1.5deg]",
  "rotate-[1deg]",
];

export default function Process() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>How it works</SectionTag>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance text-brand-navy-deep sm:text-5xl lg:text-6xl">
            One bottleneck at a time, <span className="marker">six simple steps</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-navy-deep/72">
            This is the method behind every audit, sprint, and program. No
            giant overhaul — fix the worst leak, prove it works, then move to
            the next one.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-3xl border border-brand-navy/12 bg-brand-paper p-7 shadow-sm shadow-brand-navy/5"
            >
              <span
                aria-hidden="true"
                className={`inline-block font-hand text-7xl leading-none text-brand-orange ${rotations[index % rotations.length]}`}
              >
                {index + 1}
              </span>
              <h3 className="mt-3 text-xl font-extrabold text-brand-navy-deep">
                {step.title}
              </h3>
              <p className="mt-2.5 leading-7 text-brand-navy-deep/72">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
