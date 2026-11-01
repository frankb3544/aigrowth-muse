import { SectionTag } from "./ui";

export default function Proof({
  variant,
}: {
  variant?: "notes" | "bulletin";
}) {
  const notes = variant === "notes";
  const bulletin = variant === "bulletin";

  return (
    <section
      id="proof"
      className={`py-16 lg:py-24 ${
        bulletin
          ? "bg-brand-navy-deep text-white"
          : notes
            ? "paper-texture"
            : "bg-brand-sky/25"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>Proof, in person</SectionTag>
          <h2
            className={`mt-3 font-display text-4xl font-black tracking-tight text-balance sm:text-5xl ${bulletin ? "text-white" : "text-brand-navy-deep"}`}
          >
            Don&apos;t take our word for it.{" "}
            <span className="marker">Watch it happen.</span>
          </h2>
          <p
            className={`mt-4 text-lg leading-8 ${bulletin ? "text-white/72" : "text-brand-navy-deep/72"}`}
          >
            Most of what we teach, we build in public first — in a real
            classroom in Charlotte, with real businesses watching and asking
            questions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article
            className={`rotate-[-0.5deg] rounded-3xl border border-brand-navy/12 p-8 shadow-lg shadow-brand-navy/10 ${
              bulletin
                ? "pin bg-brand-paper"
                : notes
                  ? "tape bg-brand-amber/30"
                  : "tape bg-brand-paper"
            }`}
          >
            <p className="text-xs font-extrabold tracking-[0.18em] text-brand-orange uppercase">
              Monthly · Collaboration Central
            </p>
            <h3 className="mt-3 font-display text-3xl font-black text-brand-navy-deep">
              The Automation Lab
            </h3>
            <p className="mt-4 leading-7.5 text-brand-navy-deep/78">
              Once a month, we pick one local business or nonprofit and build
              a full automation for them — live, start to finish, in front of
              the room. Their real problem, their real tools, working before
              everyone goes home.
            </p>
            <p className="mt-5 inline-block rounded-full bg-brand-navy px-4 py-2 text-sm font-bold text-white">
              Your business could be next month&apos;s build
            </p>
          </article>

          <article
            className={`rotate-[0.5deg] rounded-3xl border border-brand-navy/12 bg-brand-paper p-8 shadow-lg shadow-brand-navy/10 ${
              bulletin ? "pin" : "tape"
            }`}
          >
            <p className="text-xs font-extrabold tracking-[0.18em] text-brand-orange uppercase">
              Every Thursday · Collaboration Central
            </p>
            <h3 className="mt-3 font-display text-3xl font-black text-brand-navy-deep">
              Built in Public, Thursdays
            </h3>
            <p className="mt-4 leading-7.5 text-brand-navy-deep/78">
              Frank&apos;s weekly live build session: one real system, built
              from scratch, then taught step by step. It&apos;s where the
              community&apos;s tools and lessons come from — you see the whole
              thing, mistakes and all.
            </p>
            <p className="mt-5 inline-block rounded-full bg-brand-navy px-4 py-2 text-sm font-bold text-white">
              Collaboration Central, Charlotte, NC
            </p>
          </article>
        </div>

        {notes && (
          <p className="mt-10 inline-block rotate-[-1deg] rounded-lg bg-brand-amber/45 px-5 py-2.5 font-hand text-3xl text-brand-navy-deep/80 shadow-sm">
            Real builds, real rooms — mistakes and all.
          </p>
        )}
      </div>
    </section>
  );
}
