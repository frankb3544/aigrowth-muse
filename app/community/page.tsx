import type { Metadata } from "next";
import Community from "@/components/Community";
import FinalCta from "@/components/FinalCta";
import Proof from "@/components/Proof";
import { PageHero, PageShell } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Community — free to start, practical every day",
  description:
    "The Build AI From Here community on Skool: a daily AI tip in plain words, a weekly tool video, starter prompt packs, and a monthly open Q&A — free. Basic adds the full prompt library, courses, and member pricing for $10 a month.",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return (
    <PageShell>
      <PageHero
        tag="The community"
        title="Learn it a little at a time, with people like you."
        intro="The community is where the everyday learning happens: one small tip a day, one tool shown working each week, and a live build session every Thursday. Start free — stay as long as it's useful."
      />
      <Community />
      <Proof />
      <FinalCta />
    </PageShell>
  );
}
