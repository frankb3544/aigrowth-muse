import Image from "next/image";
import { auditBookingHref, AUDIT_PRICE } from "@/lib/site";
import { PixelMotif } from "./ui";

const painPoints = [
  "The phone rings while you're on a job — and that caller doesn't leave a message.",
  "Quotes and follow-ups go out days late, after the customer already picked someone else.",
  "The same questions get answered ten times a week, by you, from memory.",
];

export default function Hero() {
  return (
    <section id="top" className="paper-texture relative overflow-hidden">
      <PixelMotif className="absolute top-10 right-[8%] hidden h-12 w-16 sm:block" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:py-20">
        <div>
          <p className="inline-flex rounded-full border border-brand-navy/20 bg-brand-paper px-4 py-2 text-xs font-extrabold tracking-[0.18em] text-brand-navy uppercase">
            AI consulting &amp; community · Charlotte, NC
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] font-black tracking-tight text-balance text-brand-navy-deep sm:text-6xl lg:text-7xl">
            The phone rang. <span className="marker-orange">Nobody picked up.</span>{" "}
            Again.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 font-medium text-brand-navy-deep/78">
            Missed calls and slow follow-up quietly cost local businesses work
            they already earned. We find the one bottleneck costing you the
            most — and fix it with practical AI, in plain words.
          </p>

          <ul className="mt-7 space-y-3">
            {painPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-black text-white"
                >
                  !
                </span>
                <span className="leading-7 text-brand-navy-deep/80">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={auditBookingHref}
              className="rounded-full bg-brand-orange px-7 py-3.5 text-base font-extrabold text-white shadow-lg shadow-brand-orange/30 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
            >
              Book the Pro AI Audit — {AUDIT_PRICE}
            </a>
            <a
              href="#community"
              className="rounded-full border-2 border-brand-navy px-7 py-3.5 text-base font-extrabold text-brand-navy transition hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
            >
              Start free in the community
            </a>
          </div>

          <p className="mt-6 max-w-2xl leading-7 text-brand-navy-deep/68">
            <strong className="text-brand-navy-deep">What&apos;s the audit?</strong>{" "}
            We look at how your business actually runs, find the one bottleneck
            costing you the most time or money, and hand you a written plan to
            fix it. That&apos;s it — no jargon, no pressure.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="tape rotate-[-1deg] rounded-3xl border border-brand-navy/12 bg-brand-paper p-7 shadow-xl shadow-brand-navy/10 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-navy ring-4 ring-brand-amber/60">
                <Image
                  src="/brand/icon-square-white-on-navy-512.png"
                  alt="Frank, founder of Build AI From Here"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover"
                />
              </span>
              <div>
                <p className="font-display text-2xl font-black text-brand-navy-deep">
                  Frank
                </p>
                <p className="text-sm font-bold text-brand-navy-deep/65">
                  Founder, Build AI From Here
                </p>
              </div>
            </div>
            <p className="mt-5 leading-7 text-brand-navy-deep/80">
              &ldquo;I&apos;m Frank. Every Thursday I build a real AI system
              live, in a real classroom, and teach exactly how it works. No
              hype — bring a problem, watch it get solved.&rdquo;
            </p>
            <div className="mt-6 rounded-2xl bg-brand-navy px-5 py-4 text-white">
              <p className="text-xs font-extrabold tracking-[0.18em] text-brand-amber uppercase">
                Live every Thursday
              </p>
              <p className="mt-1.5 leading-6 font-semibold">
                Build session at Collaboration Central, Charlotte, NC —
                open to watch, questions welcome.
              </p>
            </div>
          </div>
          <p
            aria-hidden="true"
            className="mt-4 text-center font-hand text-2xl text-brand-orange"
          >
            come see it built, not just talked about ↑
          </p>
        </div>
      </div>
    </section>
  );
}
