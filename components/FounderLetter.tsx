import { SectionTag } from "./ui";

export default function FounderLetter() {
  return (
    <section id="frank" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        <SectionTag>A note from the founder</SectionTag>
        <div className="tape relative mt-8 rotate-[-0.4deg] rounded-3xl border border-brand-navy/12 bg-brand-paper p-8 shadow-xl shadow-brand-navy/10 sm:p-12">
          <div className="space-y-5 text-lg leading-8.5 text-brand-navy-deep/85">
            <p>Hey — I&apos;m Frank.</p>
            <p>
              I started Build AI From Here because I kept meeting good people —
              agents, shop owners, folks running real businesses here around
              Charlotte — who were being told AI was either magic or a threat.
              It&apos;s neither. It&apos;s a tool. And like any tool, it&apos;s
              only useful when it fixes a real problem in your real day.
            </p>
            <p>
              So that&apos;s the deal here. No coding. No overwhelm. No
              40-video course you&apos;ll never finish. We find the one thing
              slowing you down, fix that first, and build from there — one
              small win at a time. Every Thursday, you can watch me do exactly
              that, live, at Collaboration Central.
            </p>
            <p>
              Start free in the community, or book an audit and let&apos;s
              look at your business together. Either way, you&apos;ll leave
              the first step knowing your next one.
            </p>
          </div>
          <p className="mt-8 font-hand text-4xl text-brand-navy-deep">— Frank</p>
          <p className="mt-1 text-sm font-bold text-brand-navy-deep/55">
            Founder, Build AI From Here · AI Growth Community LLC
          </p>
        </div>
      </div>
    </section>
  );
}
