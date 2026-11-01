import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import { PageHero, PageShell, SectionTag } from "@/components/ui";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Learn — plain-words guides to practical AI",
  description:
    "Short, plain-words articles from Build AI From Here: what an AI audit is, why missed calls cost you jobs, and what happens at our Thursday build sessions in Charlotte.",
  alternates: { canonical: "/learn" },
};

export default function LearnPage() {
  return (
    <PageShell>
      <PageHero
        tag="Learn"
        title="Plain words. Real problems. Small wins."
        intro="Short reads from the work we do every week — the same ideas we teach in the community and build on Thursdays, written down so you can use them whenever."
      />
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-3xl border-2 border-brand-navy/15 bg-brand-paper/80 p-7 shadow-lg shadow-brand-navy/8"
              >
                <SectionTag>Guide</SectionTag>
                <h2 className="mt-3 font-display text-2xl leading-snug font-black text-balance text-brand-navy-deep">
                  {post.title}
                </h2>
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
      </section>
      <FinalCta />
    </PageShell>
  );
}
