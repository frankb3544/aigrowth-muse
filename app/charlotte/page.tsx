import type { Metadata } from "next";
import BuiltAndOwn from "@/components/BuiltAndOwn";
import CharlottePrograms from "@/components/CharlottePrograms";
import FinalCta from "@/components/FinalCta";
import Proof from "@/components/Proof";
import { PageHero, PageShell } from "@/components/ui";

export const metadata: Metadata = {
  title: "Charlotte — local programs, live builds & the Automation Lab",
  description:
    "Build AI From Here is rooted in Charlotte, Concord, and Cabarrus County: a live build session every Thursday at Collaboration Central, the monthly Automation Lab, the Builder's Cohort, and Build School for students.",
  alternates: { canonical: "/charlotte" },
};

export default function CharlottePage() {
  return (
    <PageShell>
      <PageHero
        tag="Charlotte, NC"
        title="Built here, for the people who work here."
        intro="We're not a course shipped in from somewhere else. We're local — Charlotte, Concord, and Cabarrus County — building real things with real neighbours, in a real classroom, every week."
      />
      <Proof />
      <CharlottePrograms />
      <BuiltAndOwn />
      <FinalCta />
    </PageShell>
  );
}
