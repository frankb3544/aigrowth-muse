import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, PageShell } from "@/components/ui";
import {
  auditPaymentHref,
  paymentConfigured,
  AUDIT_PRICE,
  SKOOL_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "You're booked — here's what happens next",
  description:
    "Your Pro AI Audit is on the calendar. Here's what happens next: the call, the written plan, and how paying works (book first, pay after).",
  alternates: { canonical: "/thanks" },
  robots: { index: false, follow: false },
};

const steps = [
  {
    title: "Check your email",
    body: "Your booking confirmation and calendar invite are on their way. If the time stops working, reschedule from that email — no hard feelings, no phone tag.",
  },
  {
    title: "We walk your business",
    body: "On the call we go end to end: how customers find you, reach you, buy from you, and come back. You talk, we map. By the end, the one bottleneck costing you the most is named — not guessed.",
  },
  {
    title: "You get the written plan",
    body: "After the call you receive the plan: the top three automations to build, in order. Yours to keep either way — build it yourself, learn it with the community, or have us build the first one with you.",
  },
];

export default function ThanksPage() {
  return (
    <PageShell>
      <PageHero
        tag="Booked"
        title="You're booked. Good move."
        intro="Your audit is on the calendar. Here's exactly what happens next — and the one small thing left in the flow, because we book first and pay after."
        theme="clubhouse"
        note="See you on the call."
        motifVariant={4}
      />
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-3xl border-2 border-brand-navy/15 bg-brand-paper/80 p-7 shadow-lg shadow-brand-navy/8"
              >
                <span
                  aria-hidden="true"
                  className="font-hand text-6xl text-brand-orange"
                >
                  {index + 1}
                </span>
                <h2 className="mt-2 font-display text-2xl font-black text-brand-navy-deep">
                  {step.title}
                </h2>
                <p className="mt-3 leading-7 text-brand-navy-deep/78">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl border-2 border-brand-navy bg-brand-paper p-8 shadow-lg shadow-brand-navy/10 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-black text-balance text-brand-navy-deep">
                The last step: your {AUDIT_PRICE} audit payment
              </h2>
              <p className="mt-3 leading-7 text-brand-navy-deep/75">
                Booking came first, like we promised. When you&apos;re ready,
                settle the audit here — it confirms your slot and lets us
                start preparing your walk-through.
              </p>
              {!paymentConfigured && (
                <p className="mt-4 inline-block rotate-[-1deg] rounded-md bg-brand-amber px-3 py-1.5 font-hand text-xl leading-tight text-brand-navy-deep">
                  Secure payment link lands here the moment it connects
                </p>
              )}
            </div>
            {paymentConfigured ? (
              <a
                href={auditPaymentHref}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-brand-orange px-7 py-3.5 text-base font-extrabold text-white shadow-md shadow-brand-orange/30 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
              >
                Pay {AUDIT_PRICE} for my audit
              </a>
            ) : (
              <Link
                href="/prompt-pack"
                className="shrink-0 rounded-full bg-brand-navy px-7 py-3.5 text-base font-extrabold text-white shadow-md transition hover:bg-brand-navy-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
              >
                Meanwhile — grab the free prompt pack
              </Link>
            )}
          </div>

          <p className="mt-10 text-center text-lg text-brand-navy-deep/70">
            While you wait, come say hello where the daily tips live:{" "}
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-brand-navy underline decoration-brand-orange decoration-2 underline-offset-4 transition hover:text-brand-orange"
            >
              join the free community
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
