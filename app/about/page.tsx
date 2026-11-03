import type { Metadata } from "next";
import BuiltAndOwn from "@/components/BuiltAndOwn";
import FinalCta from "@/components/FinalCta";
import ContactBand from "@/components/ContactBand";
import FounderLetter from "@/components/FounderLetter";
import { PageHero, PageShell, SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "About — why Build AI From Here exists",
  description:
    "Build AI From Here is the public face of AI Growth Community LLC: practical AI for small businesses, real estate professionals, and everyday people — taught plainly, built locally in Charlotte, one small win at a time.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        tag="About us"
        title="Practical AI, one small win at a time."
        intro="Build AI From Here is run by AI Growth Community LLC. We exist for the people the AI wave usually talks past: small business owners, real estate professionals, and everyday folks who want the benefits without the buzzwords."
        theme="letter"
        note="— Frank"
        motifVariant={4}
      />
      <section className="py-6 lg:py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="tape relative rotate-[-0.6deg] rounded-3xl border-2 border-brand-navy/15 bg-brand-paper/80 p-7 shadow-lg shadow-brand-navy/8">
              <SectionTag>Automate</SectionTag>
              <h2 className="mt-3 font-display text-2xl font-black text-brand-navy-deep">
                Automate what slows you
              </h2>
              <p className="mt-3 leading-7 text-brand-navy-deep/75">
                Missed calls, forgotten follow-ups, reports nobody has time to
                read — the slow work is usually the automatable work. We find
                it, build the system, and hand it over in your own tools.
              </p>
            </article>
            <article className="tape relative rounded-3xl border-2 border-brand-navy/15 bg-brand-paper/80 p-7 shadow-lg shadow-brand-navy/8">
              <SectionTag>Amplify</SectionTag>
              <h2 className="mt-3 font-display text-2xl font-black text-brand-navy-deep">
                Amplify what grows you
              </h2>
              <p className="mt-3 leading-7 text-brand-navy-deep/75">
                The good work you already do deserves to be seen. Content
                systems, review engines, and stay-in-touch routines make your
                best days repeatable instead of lucky.
              </p>
            </article>
            <article className="tape relative rotate-[0.6deg] rounded-3xl border-2 border-brand-navy/15 bg-brand-paper/80 p-7 shadow-lg shadow-brand-navy/8">
              <SectionTag>Teach</SectionTag>
              <h2 className="mt-3 font-display text-2xl font-black text-brand-navy-deep">
                You learn to run it
              </h2>
              <p className="mt-3 leading-7 text-brand-navy-deep/75">
                Nothing we build is a black box. Every system comes with plain
                instructions and a person who will show you again — in the
                community, on Thursdays, or with your whole team.
              </p>
            </article>
          </div>
        </div>
      </section>
      <FounderLetter />
      <BuiltAndOwn variant="scrapbook" />
      <ContactBand />
      <FinalCta />
    </PageShell>
  );
}
