import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { auditBookingHref, AUDIT_PRICE } from "@/lib/site";
import { PixelMotif } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-cream font-sans text-brand-navy-deep">
      <Header />
      <main className="paper-texture relative flex flex-1 items-center overflow-hidden">
        <PixelMotif className="absolute top-12 right-[10%] hidden h-12 w-16 sm:block" />
        <div className="relative mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8">
          <p className="text-xs font-extrabold tracking-[0.22em] text-brand-orange uppercase">
            Error 404
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] font-black tracking-tight text-balance text-brand-navy-deep sm:text-6xl">
            That page took the day off.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 font-medium text-brand-navy-deep/75">
            The page you&apos;re after isn&apos;t here — but the good stuff is:
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/prompt-pack"
              className="rounded-full bg-brand-orange px-7 py-3.5 text-base font-extrabold text-white shadow-lg shadow-brand-orange/30 transition hover:bg-orange-600"
            >
              Get the free prompt pack
            </Link>
            <a
              href={auditBookingHref}
              className="rounded-full border-2 border-brand-navy px-7 py-3.5 text-base font-extrabold text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              Book the Pro AI Audit — {AUDIT_PRICE}
            </a>
          </div>
          <p aria-hidden="true" className="mt-8 font-hand text-2xl text-brand-orange">
            happens to the best of us ↑
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
