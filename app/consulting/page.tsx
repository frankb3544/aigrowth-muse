import type { Metadata } from "next";
import Booking from "@/components/Booking";
import Consulting from "@/components/Consulting";
import Diagnostic from "@/components/Diagnostic";
import Faq from "@/components/Faq";
import ContactBand from "@/components/ContactBand";
import Process from "@/components/Process";
import { PageHero, PageShell } from "@/components/ui";
import { faqs } from "@/lib/data";
import { AUDIT_PRICE } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Consulting — the Pro AI Audit, Build Sprints & Team Program",
  description:
    "Start with the $199 Pro AI Audit: we walk your whole business, name the one bottleneck costing you the most, and hand you a written plan. Book first, pay after. Then Build Sprints and a Team Program when you're ready.",
  alternates: { canonical: "/consulting" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.slice(0, 3).map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ConsultingPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        tag="AI consulting"
        title="Find the bottleneck. Fix it first."
        intro="Our consulting starts with one honest walk through your business — how customers find you, reach you, buy from you, and come back. We name the single bottleneck costing you the most, then build in the right order. No ten-tool shopping spree, no jargon."
        theme="blueprint"
        stamp="Start here"
        note="Start with the audit — the rest follows."
        motifVariant={1}
        ticket={{
          no: "001",
          fields: [
            ["Start", "Pro AI Audit"],
            ["Audit", AUDIT_PRICE],
            ["Terms", "Book first · pay after"],
          ],
        }}
      />
      <Diagnostic variant="spec" />
      <Consulting variant="blueprint" />
      <Process variant="work-order" />
      <Booking variant="signoff" />
      <Faq />
      <ContactBand variant="work-order" />
    </PageShell>
  );
}
