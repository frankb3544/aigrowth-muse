import { CONTACT_PHONE, phoneHref } from "@/lib/site";

/** Slim trust bar above the header: where we are, when we build, how to call. */
export default function TrustBar() {
  return (
    <div className="bg-brand-navy text-white">
      <p className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-2 px-5 py-2 text-center text-[13px] font-bold sm:px-8">
        <span>Charlotte, NC</span>
        <span aria-hidden="true" className="text-brand-amber">
          ·
        </span>
        <span>Live build sessions every Thursday</span>
        <span aria-hidden="true" className="text-brand-amber">
          ·
        </span>
        <a
          href={phoneHref}
          className="underline decoration-brand-orange decoration-2 underline-offset-4 transition hover:text-brand-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber"
        >
          {CONTACT_PHONE}
        </a>
      </p>
    </div>
  );
}
