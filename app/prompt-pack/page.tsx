import type { Metadata } from "next";
import FinalCta from "@/components/FinalCta";
import PromptPackForm from "@/components/PromptPackForm";
import { PageHero, PageShell } from "@/components/ui";
import { promptPack, type PromptPackItem } from "@/lib/data";
import { SKOOL_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The free starter prompt pack — copy, paste, done",
  description:
    "Twelve plain-words prompts for owners, realtors, and everyday life: the missed-call save, review replies, quote follow-ups, listing words, and more. Free from Build AI From Here — no email needed.",
  alternates: { canonical: "/prompt-pack" },
};

const TRACK_ORDER: PromptPackItem["track"][] = ["Business", "Realtor", "Everyday"];

const TRACK_NOTES: Record<PromptPackItem["track"], string> = {
  Business: "For owners — the follow-up work that quietly makes the money.",
  Realtor: "For agents — client words, written faster, still in your voice.",
  Everyday: "For everybody — two prompts that pay for themselves weekly.",
};

export default function PromptPackPage() {
  return (
    <PageShell>
      <PageHero
        tag="Free starter pack"
        title="Twelve prompts. Copy, paste, small win."
        intro="This is the starter pack our free community begins with. Pick the one that matches your day, swap the parts in [brackets] for your details, and paste it into any AI chat. No email needed, no catch — if it helps, the community is where the rest live."
        theme="notebook"
        note="Start with the one you'd use today."
        motifVariant={2}
      />
      <section className="ruled-paper pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8">
          <div className="mb-14 rounded-3xl border-2 border-brand-navy bg-brand-paper p-7 shadow-lg shadow-brand-navy/10 sm:p-9">
            <h2 className="font-display text-3xl font-black text-balance text-brand-navy-deep">
              Want the pack in your inbox?
            </h2>
            <p className="mt-3 mb-6 max-w-2xl leading-7 text-brand-navy-deep/75">
              Optional, always. Leave an email and we&apos;ll send the whole
              pack as one tidy message you can keep and forward — or just
              read it all below. Same pack, no strings either way.
            </p>
            <PromptPackForm />
          </div>
          {TRACK_ORDER.map((track) => (
            <div key={track} className="mt-14 first:mt-0">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="font-display text-3xl font-black text-brand-navy-deep sm:text-4xl">
                  {track}
                </h2>
                <p className="font-hand text-2xl text-brand-navy-deep/65">
                  {TRACK_NOTES[track]}
                </p>
              </div>
              <div className="mt-7 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {promptPack
                  .filter((item) => item.track === track)
                  .map((item, index) => (
                    <article
                      key={item.title}
                      className="flex flex-col rounded-3xl border-2 border-brand-navy/15 bg-brand-paper p-7 shadow-lg shadow-brand-navy/8"
                    >
                      <div className="flex items-center justify-between">
                        <span aria-hidden="true" className="flex gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-brand-cream ring-1 ring-brand-navy/25" />
                          <span className="h-2.5 w-2.5 rounded-full bg-brand-cream ring-1 ring-brand-navy/25" />
                          <span className="h-2.5 w-2.5 rounded-full bg-brand-cream ring-1 ring-brand-navy/25" />
                        </span>
                        <span className="font-hand text-2xl text-brand-orange">
                          № {index + 1}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl leading-snug font-black text-balance text-brand-navy-deep">
                        {item.title}
                      </h3>
                      <blockquote className="mt-4 flex-1 rounded-2xl border border-dashed border-brand-navy/30 bg-brand-cream/70 p-4 text-[15px] leading-6.5 text-brand-navy-deep/85">
                        {item.prompt}
                      </blockquote>
                      <p className="mt-4 font-hand text-2xl leading-snug text-brand-navy-deep/70">
                        {item.tip}
                      </p>
                    </article>
                  ))}
              </div>
            </div>
          ))}

          <div className="mt-16 flex flex-col items-start gap-5 rounded-3xl border-2 border-brand-navy bg-brand-navy p-8 text-white shadow-xl shadow-brand-navy/25 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-black text-balance">
                Like these? The full library lives in the community.
              </h2>
              <p className="mt-3 leading-7 text-white/75">
                The free group gets starter packs like this one plus a tip a
                day. Basic members get the full prompt library — including a
                pack personalised to their path.
              </p>
            </div>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-brand-orange px-7 py-3.5 text-base font-extrabold text-white shadow-md shadow-black/25 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber"
            >
              Join free on Skool
            </a>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
