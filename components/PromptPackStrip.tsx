import Link from "next/link";

/** Slim lead-magnet band: the free prompt pack, offered between the diagnostic and the consulting tickets. */
export default function PromptPackStrip() {
  return (
    <section aria-label="Free starter prompt pack" className="ruled-paper">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="font-hand text-3xl text-brand-navy-deep/80">
            Not ready to talk yet?
          </p>
          <p className="mt-1 text-lg leading-7 font-semibold text-brand-navy-deep/85">
            Take the free starter prompt pack — twelve copy-and-paste prompts
            for the follow-up work that leaks money. No email needed.
          </p>
        </div>
        <Link
          href="/prompt-pack"
          className="shrink-0 rounded-full bg-brand-navy px-6 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-brand-navy-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
        >
          Get the free pack →
        </Link>
      </div>
    </section>
  );
}
