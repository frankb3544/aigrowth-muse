import {
  auditBookingHref,
  auditPaymentHref,
  bookingConfigured,
  paymentConfigured,
  AUDIT_PRICE,
} from "@/lib/site";
import { SectionTag } from "./ui";

export default function Booking() {
  return (
    <section id="book" className="bg-brand-navy py-16 text-white lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>Book your audit</SectionTag>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Book first. <span className="marker">Pay after</span> your audit is
            scheduled.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            No paying for a call you haven&apos;t booked yet. Pick your time
            first — the {AUDIT_PRICE} comes after your audit is on the
            calendar.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          <li className="relative rounded-3xl border border-white/15 bg-white/[0.06] p-7">
            <span aria-hidden="true" className="font-hand text-6xl text-brand-amber">
              1
            </span>
            <h3 className="mt-2 text-xl font-extrabold">Book the call</h3>
            <p className="mt-3 leading-7 text-white/72">
              Pick a time that suits you. Tell us a little about your business
              so we can come prepared — that&apos;s all we need for now.
            </p>
            <a
              href={auditBookingHref}
              {...(bookingConfigured
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="mt-6 inline-block rounded-full bg-brand-orange px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-black/25 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber"
            >
              Book an Audit
            </a>
            {!bookingConfigured && (
              <p className="mt-4 inline-block rotate-[-1deg] rounded-md bg-brand-amber px-3 py-1.5 font-hand text-lg leading-tight text-brand-navy-deep">
                Booking link connects here at launch
              </p>
            )}
          </li>

          <li className="relative rounded-3xl border border-white/15 bg-white/[0.06] p-7">
            <span aria-hidden="true" className="font-hand text-6xl text-brand-amber">
              2
            </span>
            <h3 className="mt-2 text-xl font-extrabold">The audit call</h3>
            <p className="mt-3 leading-7 text-white/72">
              We walk your business together: how customers find you, reach
              you, buy from you, and come back. We name the one bottleneck
              costing you the most, and map the fix.
            </p>
            <p className="mt-6 inline-block rounded-full border border-white/25 px-4 py-2 text-sm font-bold text-white/80">
              You get a written plan — yours to keep
            </p>
          </li>

          <li className="relative rounded-3xl border border-white/15 bg-white/[0.06] p-7">
            <span aria-hidden="true" className="font-hand text-6xl text-brand-amber">
              3
            </span>
            <h3 className="mt-2 text-xl font-extrabold">Pay after</h3>
            <p className="mt-3 leading-7 text-white/72">
              Once your audit is scheduled, use the payment link to pay the{" "}
              {AUDIT_PRICE} and lock it in. One payment, no subscription, no
              surprise charges later.
            </p>
            <a
              href={auditPaymentHref}
              {...(paymentConfigured
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="mt-6 inline-block rounded-full border-2 border-white/70 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber"
            >
              Pay for your audit — {AUDIT_PRICE}
            </a>
            {!paymentConfigured && (
              <p className="mt-4 inline-block rotate-[1deg] rounded-md bg-brand-amber px-3 py-1.5 font-hand text-lg leading-tight text-brand-navy-deep">
                Payment link connects here at launch
              </p>
            )}
          </li>
        </ol>
      </div>
    </section>
  );
}
