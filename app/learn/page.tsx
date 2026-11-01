import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import { PageHero, PageShell } from "@/components/ui";
import { posts, type Post } from "@/lib/data";

export const metadata: Metadata = {
  title: "Learn — plain-words guides to practical AI",
  description:
    "Short, plain-words articles from Build AI From Here: what an AI audit is, why missed calls and follow-ups cost you jobs, AI for realtors, the review engine, and AI for everyday life.",
  alternates: { canonical: "/learn" },
};

const TRACK_ORDER: Post["track"][] = [
  "Start here",
  "Business",
  "Realtor",
  "Everyday",
  "Charlotte",
];

const TRACK_NOTES: Record<Post["track"], string> = {
  "Start here": "New to all this? This one first.",
  Business: "For owners — the leaks and the systems that close them.",
  Realtor: "For agents — speed where it's safe, judgement where it counts.",
  Everyday: "No business required — AI for ordinary life.",
  Charlotte: "In the room — what happens at Collaboration Central.",
};

export default function LearnPage() {
  return (
    <PageShell>
      <PageHero
        tag="Learn"
        title="Plain words. Real problems. Small wins."
        intro="Short reads from the work we do every week — the same ideas we teach in the community and build on Thursdays, written down so you can use them whenever. Grouped by who they're for, so you can start where you stand."
        theme="notebook"
        note="Notes from the work, kept simple."
        motifVariant={0}
      />
      <section className="ruled-paper pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8">
          {TRACK_ORDER.map((track) => {
            const trackPosts = posts.filter((post) => post.track === track);
            if (trackPosts.length === 0) return null;
            return (
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
                  {trackPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="flex flex-col rounded-3xl border-2 border-brand-navy/15 bg-brand-paper p-7 shadow-lg shadow-brand-navy/8"
                    >
                      <div className="flex items-center justify-between">
                        <span aria-hidden="true" className="flex gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-brand-cream ring-1 ring-brand-navy/25" />
                          <span className="h-2.5 w-2.5 rounded-full bg-brand-cream ring-1 ring-brand-navy/25" />
                          <span className="h-2.5 w-2.5 rounded-full bg-brand-cream ring-1 ring-brand-navy/25" />
                        </span>
                        <span className="font-hand text-2xl text-brand-orange">
                          Guide
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl leading-snug font-black text-balance text-brand-navy-deep">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 leading-7 text-brand-navy-deep/75">
                        {post.description}
                      </p>
                      <Link
                        href={`/learn/${post.slug}`}
                        className="mt-6 w-fit rounded-full bg-brand-navy px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-brand-navy-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
                      >
                        Read the guide →
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
