import { comparisonRows } from "@/lib/data";
import { SKOOL_URL } from "@/lib/site";
import { SectionTag } from "./ui";

function CellMark({ included, onDark }: { included: boolean; onDark?: boolean }) {
  if (included) {
    return (
      <span
        aria-label="Included"
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black ${
          onDark ? "bg-brand-amber text-brand-navy-deep" : "bg-brand-navy text-white"
        }`}
      >
        ✓
      </span>
    );
  }
  return (
    <span
      aria-label="Not included"
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black ${
        onDark ? "bg-white/12 text-white/45" : "bg-brand-navy/8 text-brand-navy/35"
      }`}
    >
      —
    </span>
  );
}

export default function Community({ variant }: { variant?: "clubhouse" }) {
  const club = variant === "clubhouse";
  return (
    <section
      id="community"
      className={`paper-texture py-16 lg:py-24 ${club ? "bg-brand-amber/10" : ""}`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>The community</SectionTag>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance text-brand-navy-deep sm:text-5xl lg:text-6xl">
            Not ready for an audit? <span className="marker">Start free.</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-navy-deep/72">
            The Build AI From Here community lives on Skool. Start free, get
            one simple tip a day, try one small thing at a time. When
            you&apos;re ready for more, Premium is right there — here&apos;s
            exactly what each one includes, side by side.
          </p>
          <p className="mt-3 text-base font-bold text-brand-navy-deep/70">
            Three paths inside: <span className="text-brand-navy-deep">Individual</span> ·{" "}
            <span className="text-brand-navy-deep">Business</span> ·{" "}
            <span className="text-brand-navy-deep">Realtor</span> — pick yours
            when you join.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          {/* Free card */}
          <article
            className={`flex flex-col rounded-3xl border-2 border-brand-amber bg-brand-amber/15 p-7 shadow-lg shadow-brand-navy/8 sm:p-9 ${club ? "tape relative rotate-[-0.5deg]" : "card-lift"}`}
          >
            <p className="text-xs font-extrabold tracking-[0.18em] text-brand-orange uppercase">
              Start here · Free
            </p>
            <h3 className="mt-2 font-display text-3xl font-black text-brand-navy-deep">
              The Free Group
            </h3>
            <p className="mt-2">
              <span className="font-display text-5xl font-black text-brand-navy-deep">
                $0
              </span>
              <span className="ml-2 font-bold text-brand-navy-deep/60">
                forever — no card needed
              </span>
            </p>
            <ul className="mt-7 flex-1">
              {comparisonRows.map((row) => (
                <li
                  key={row.label}
                  className="flex min-h-12 items-center gap-3 border-b border-dashed border-brand-navy/15 py-2.5 last:border-0"
                >
                  <CellMark included={row.free} />
                  <span
                    className={`leading-6 ${
                      row.free
                        ? "font-semibold text-brand-navy-deep/85"
                        : "text-brand-navy-deep/45"
                    }`}
                  >
                    {row.label}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-full bg-brand-navy px-6 py-3.5 text-center text-base font-extrabold text-white shadow-md transition hover:bg-brand-navy-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
            >
              Join free on Skool
            </a>
          </article>

          {/* Premium card */}
          <article
            className={`tape relative flex flex-col rounded-3xl border-2 border-brand-navy bg-brand-navy p-7 text-white shadow-xl shadow-brand-navy/25 sm:p-9 ${club ? "rotate-[0.5deg]" : "card-lift"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-extrabold tracking-[0.18em] text-brand-amber uppercase">
                The step up · Premium
              </p>
              <span className="rounded-full bg-brand-amber px-3 py-1 text-xs font-extrabold text-brand-navy-deep">
                Most popular
              </span>
            </div>
            <h3 className="mt-2 font-display text-3xl font-black">
              Everything in Free, plus
            </h3>
            <p className="mt-2">
              <span className="font-display text-5xl font-black">$10</span>
              <span className="ml-2 font-bold text-white/65">/ month</span>
            </p>
            <ul className="mt-7 flex-1">
              {comparisonRows.map((row) => (
                <li
                  key={row.label}
                  className="flex min-h-12 items-center gap-3 border-b border-dashed border-white/18 py-2.5 last:border-0"
                >
                  <CellMark included={row.premium} onDark />
                  <span
                    className={`leading-6 ${
                      row.free
                        ? "font-semibold text-white/85"
                        : "font-bold text-white"
                    }`}
                  >
                    {row.label}
                    {!row.free && (
                      <span className="ml-2 rounded-full bg-brand-orange px-2 py-0.5 align-middle text-[11px] font-extrabold text-white">
                        Premium adds this
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-full bg-brand-orange px-6 py-3.5 text-center text-base font-extrabold text-white shadow-md shadow-black/25 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber"
            >
              Join Premium on Skool
            </a>
          </article>
        </div>

        <p
          className={`mt-8 font-hand text-3xl text-brand-navy-deep/70 ${club ? "inline-block rotate-[-1deg] rounded-lg bg-brand-amber/45 px-5 py-2.5 shadow-sm" : ""}`}
        >
          Most owners start free — then book the audit when one bottleneck
          won&apos;t wait.
        </p>
      </div>
    </section>
  );
}
