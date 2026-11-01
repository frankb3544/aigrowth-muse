import type { Metadata } from "next";
import { PageHero, PageShell } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using Build AI From Here and working with AI Growth Community LLC: our services, honest-results language, ownership of what we build together, and the basics.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "Who provides what",
    paragraphs: [
      "Build AI From Here is a brand of AI Growth Community LLC, based in Charlotte, North Carolina. Through this site we offer an educational community, AI consulting (audits, build sprints, and team programs), and links to tools and properties we build and own.",
      "Tools and properties we link to — including ClosePay, Vibizm, Inspect Sumo, Nurse K, Cobles Landing Reservations, Salintus, NewConstructionInsider.net, and CoblesLanding.com — are separate products with their own terms, which apply when you use them.",
    ],
  },
  {
    heading: "Honest results",
    paragraphs: [
      "We teach and build practical AI systems. Results vary by business, market, and effort, and we do not guarantee revenue, savings, or outcomes. Any usage figures on this site are our own, are labelled as ours, and are not a promise of what you will experience.",
    ],
  },
  {
    heading: "What we build together is yours",
    paragraphs: [
      "Systems we build for you are built in your own tools and accounts, and the work product is yours to keep and use. The written plan from a Pro AI Audit is yours whether or not we work together afterwards.",
      "Content on this website — text, design, and branding — belongs to AI Growth Community LLC and may not be copied for commercial use without permission.",
    ],
  },
  {
    heading: "A note on real estate",
    paragraphs: [
      "We support Equal Housing Opportunity. Because some of our work serves real estate professionals, any marketing copy we help produce for real estate is reviewed by a human before it is used, and it must comply with Fair Housing law and applicable MLS rules.",
    ],
  },
  {
    heading: "The basics",
    paragraphs: [
      "Use this site lawfully and don't attempt to disrupt it. To the extent allowed by law, our liability for any claim connected to this site or our free content is limited to the amount you paid us for the service in question. These terms are governed by the laws of the State of North Carolina.",
      "Last updated: November 1, 2026. If these terms change, the new version will be posted on this page.",
    ],
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        tag="Legal"
        title="Terms of Service"
        intro="The short version: what we offer, what we don't promise, and the fact that anything we build for you is built in your accounts — and stays yours."
      />
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          {sections.map((section) => (
            <div key={section.heading} className="mt-10 first:mt-0">
              <h2 className="font-display text-3xl font-black text-brand-navy-deep">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mt-4 text-lg leading-8 text-brand-navy-deep/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
