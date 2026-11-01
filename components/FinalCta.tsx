import { SKOOL_URL, AUDIT_PRICE } from "@/lib/site";
import { PixelMotif } from "./ui";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-deep py-16 text-white lg:py-24">
      <PixelMotif className="absolute top-10 left-[6%] h-12 w-16" />
      <PixelMotif className="absolute right-[6%] bottom-10 h-12 w-16" />
      <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <h2 className="font-display text-4xl font-black tracking-tight text-balance sm:text-5xl">
          Your bottleneck won&apos;t fix itself.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
          Book the {AUDIT_PRICE} Pro AI Audit and walk away with the one thing
          to fix first — and a written plan to fix it. Or start free in the
          community and take the first small win today.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#book"
            className="rounded-full bg-brand-orange px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-black/30 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber"
          >
            Book an Audit
          </a>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/70 px-8 py-4 text-base font-extrabold text-white transition hover:bg-white hover:text-brand-navy-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber"
          >
            Join free on Skool
          </a>
        </div>
        <p aria-hidden="true" className="mt-8 font-hand text-3xl text-brand-amber">
          book first, pay after — that&apos;s the deal
        </p>
      </div>
    </section>
  );
}
