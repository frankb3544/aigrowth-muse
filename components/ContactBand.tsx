import {
  auditBookingHref,
  SKOOL_URL,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  phoneHref,
  hasPhone,
  hasEmail,
} from "@/lib/site";
import { PixelMotif } from "./ui";

/**
 * "Talk to a human" contact band. Call and email chips appear only when
 * the real values are set in lib/site.ts; until then the band carries the
 * booking and community doors so it never shows placeholder details.
 */
export default function ContactBand({ variant }: { variant?: "work-order" }) {
  const workOrder = variant === "work-order";
  return (
    <section aria-label="Contact" className="relative overflow-hidden bg-brand-navy-deep text-white">
      {workOrder && (
        <div
          aria-hidden="true"
          className="border-t-[3px] border-dashed border-brand-sky/40"
        />
      )}
      <PixelMotif className="absolute top-8 right-[6%] hidden h-12 w-16 opacity-70 sm:block" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        {workOrder && (
          <p className="mb-5 text-[11px] font-extrabold tracking-[0.22em] text-brand-sky uppercase">
            Work order · questions on this order
          </p>
        )}
        <h2 className="font-display text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Talk to a <span className="text-brand-amber">human</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 font-medium text-white/80">
          Real people in Charlotte — Frank reads every message himself. Pick
          whichever door is easiest.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {hasPhone && (
            <a
              href={phoneHref}
              className="rounded-full border-2 border-white/30 px-6 py-3 font-extrabold text-white transition hover:border-brand-amber hover:text-brand-amber"
            >
              Call {CONTACT_PHONE}
            </a>
          )}
          {hasEmail && (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full border-2 border-white/30 px-6 py-3 font-extrabold text-white transition hover:border-brand-amber hover:text-brand-amber"
            >
              Email {CONTACT_EMAIL}
            </a>
          )}
          <a
            href={auditBookingHref}
            className="rounded-full bg-brand-orange px-6 py-3 font-extrabold text-white shadow-lg shadow-brand-orange/25 transition hover:bg-orange-600"
          >
            Book a call
          </a>
          <button
            type="button"
            data-contact-open
            className="rounded-full border-2 border-white/30 px-6 py-3 font-extrabold text-white transition hover:border-brand-amber hover:text-brand-amber"
          >
            Send a message
          </button>
          <a
            href={SKOOL_URL}
            className="rounded-full border-2 border-white/30 px-6 py-3 font-extrabold text-white transition hover:border-brand-amber hover:text-brand-amber"
          >
            Join the community — free
          </a>
        </div>
      </div>
    </section>
  );
}
