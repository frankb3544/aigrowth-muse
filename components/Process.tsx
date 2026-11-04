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

export default function Process({ variant }: { variant?: "work-order" }) {
  if (variant === "work-order") {
    return (
      <section id="how-it-works" className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionTag>How it works</SectionTag>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance text-brand-navy-deep sm:text-5xl lg:text-6xl">
              One bottleneck at a time,{" "}
              <span className="marker">six simple steps</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-navy-deep/72">
              This is the method behind every audit, sprint, and program. No
              giant overhaul — fix the worst leak, prove it works, then move
              to the next one.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border-2 border-brand-navy/70 bg-brand-paper shadow-xl shadow-brand-navy/10">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-brand-navy px-6 py-4 text-white sm:px-8">
              <p className="text-xs font-extrabold tracking-[0.22em] uppercase">
                Spec sheet — how the work runs
              </p>
              <p className="font-hand text-2xl leading-none text-brand-amber">
                check them off in order
              </p>
            </div>

            <div
              aria-hidden="true"
              className="hidden grid-cols-[52px_76px_240px_1fr] gap-4 border-b-2 border-brand-navy/60 px-8 py-3 text-[11px] font-extrabold tracking-[0.22em] text-brand-navy-deep/50 uppercase lg:grid"
            >
              <span>Done</span>
              <span>Step</span>
              <span>Stage</span>
              <span>What happens</span>
            </div>

            <ol>
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className={`grid grid-cols-[40px_1fr] gap-4 px-6 py-6 sm:px-8 lg:grid-cols-[52px_76px_240px_1fr] lg:items-center ${
                    index > 0
                      ? "border-t border-dashed border-brand-navy/25"
                      : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 block h-7 w-7 rounded-[5px] border-[2.5px] border-brand-navy/60 lg:mt-0"
                  />
                  <span className="font-display text-2xl font-black text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                    <span className="mt-1 block font-sans text-[11px] font-extrabold tracking-[0.22em] text-brand-navy-deep/45 uppercase lg:hidden">
                      Step
                    </span>
                  </span>
                  <h3 className="col-start-2 text-xl font-extrabold text-brand-navy-deep lg:col-start-auto">
                    {step.title}
                  </h3>
                  <p className="col-start-2 leading-7 text-brand-navy-deep/72 lg:col-start-auto">
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-brand-navy/60 bg-brand-cream px-6 py-4 sm:px-8">
              <p className="font-hand text-2xl leading-none text-brand-navy-deep/75">
                One box at a time — that&apos;s the whole method.
              </p>
              <p className="text-xs font-extrabold tracking-[0.22em] text-brand-navy-deep/50 uppercase">
                Spec · 6 steps
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
