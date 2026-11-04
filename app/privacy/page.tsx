import type { Metadata } from "next";
import { PageHero, PageShell } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Build AI From Here (AI Growth Community LLC) handles your information: what this site collects, what our booking, payment, and community providers collect, and your choices.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "Who we are",
    paragraphs: [
      "Build AI From Here is operated by AI Growth Community LLC, based in Charlotte, North Carolina. This policy covers this website, buildaifromhere.com.",
    ],
  },
  {
    heading: "What this website collects",
    paragraphs: [
      "This website has no accounts and no checkout of its own, and it does not set advertising cookies. It has two optional forms: on the prompt-pack page you can leave an email address to have the free starter prompt pack sent to you, and the contact form (name, email, phone if you choose, and your comments) exists so you can message us. That is the only information this site itself collects, and only if you choose to give it.",
      "If you use a form, we use what you give us to send the pack or to reply to your message. We never sell personal information, and you can ask us to delete your details at any time (see Your choices). Email delivery is handled by Resend, our email provider.",
      "Like most websites, our hosting provider keeps basic technical logs (such as page requests and browser type) to keep the site secure and running. We use those logs only to operate and improve the site.",
    ],
  },
  {
    heading: "Booking, payments, and the community",
    paragraphs: [
      "When you book an audit, you book through Cal.com. The details you enter there — your name, contact information, and answers to intake questions — are collected by Cal.com under its own privacy policy and shared with us so we can hold your session.",
      "When you pay for an audit, payment is processed by Stripe. We never see or store your full card number. The community lives on Skool; anything you post or share there is handled under Skool's privacy policy.",
    ],
  },
  {
    heading: "How we use information",
    paragraphs: [
      "We use the information you give us to run your audit or program, reply to you, and operate the community and this site. We do not use it to sell you unrelated products, and we do not share it with third parties except the providers named above, as needed to deliver the service.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. The easiest way to reach us is the contact form on this site or an email to build@buildaifromhere.com, and we will act on your request promptly.",
      "Last updated: November 1, 2026. If this policy changes, the new version will be posted on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        tag="Legal"
        title="Privacy Policy"
        intro="Plain words, like everything else here: what we collect, what we never collect, and who else touches your information when you book, pay, or join the community."
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
