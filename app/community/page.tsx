import type { Metadata } from "next";
import Link from "next/link";
import Community from "@/components/Community";
import FinalCta from "@/components/FinalCta";
import Proof from "@/components/Proof";
import { PageHero, PageShell } from "@/components/ui";
import { communityJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Community — free to start, practical every day",
  description:
    "The Build AI From Here community on Skool: a daily AI tip in plain words, a weekly tool video, starter prompt packs, and a monthly open Q&A — free. Premium adds the full prompt library, courses, and member pricing for $10 a month.",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(communityJsonLd) }}
      />
      <PageHero
        tag="The community"
        title="Learn it a little at a time, with people like you."
        intro="The community is where the everyday learning happens: one small tip a day, one tool shown working each week, and a live build session every Thursday. Start free — stay as long as it's useful."
        theme="clubhouse"
        note="One small win at a time."
        motifVariant={2}
      />
      <Community variant="clubhouse" />
      <Proof variant="notes" />
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="tape relative flex rotate-[-0.4deg] flex-col items-start gap-5 rounded-3xl border-2 border-brand-amber bg-brand-amber/20 p-8 shadow-lg shadow-brand-navy/10 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-black text-balance text-brand-navy-deep">
                Take the free starter prompt pack with you
              </h2>
              <p className="mt-3 leading-7 text-brand-navy-deep/75">
                Twelve copy-and-paste prompts for owners, realtors, and
                everyday life — the same pack the free community starts
                with. No email needed, it&apos;s just yours.
              </p>
            </div>
            <Link
              href="/prompt-pack"
              className="shrink-0 rounded-full bg-brand-navy px-7 py-3.5 text-base font-extrabold text-white shadow-md transition hover:bg-brand-navy-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
            >
              Get the free pack
            </Link>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
