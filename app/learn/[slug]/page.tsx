import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FinalCta from "@/components/FinalCta";
import { PageHero, PageShell } from "@/components/ui";
import { posts } from "@/lib/data";
import { auditBookingHref, SKOOL_URL } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/learn/${post.slug}` },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "AI Growth Community LLC" },
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PageHero
        tag="Learn"
        title={post.title}
        intro={post.intro}
        theme="notebook"
        motifVariant={1}
      />
      <section className="ruled-paper pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-3xl px-5 pt-12 sm:px-8">
          {post.sections.map((section, index) => (
            <div key={section.heading} className="mt-10 first:mt-0">
              <h2 className="font-display text-3xl font-black text-brand-navy-deep">
                <span className="mr-2 font-hand text-4xl font-normal text-brand-orange">
                  {index + 1}.
                </span>
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mt-4 text-lg leading-8 text-brand-navy-deep/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          <div className="mt-12 rounded-3xl border-2 border-brand-navy bg-brand-paper p-7 shadow-lg shadow-brand-navy/10 sm:p-9">
            <p className="text-lg leading-8 font-semibold text-brand-navy-deep/85">
              {post.closing}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={auditBookingHref}
                className="rounded-full bg-brand-orange px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-brand-orange/30 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
              >
                Book an Audit
              </a>
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-brand-navy px-6 py-3 text-sm font-extrabold text-brand-navy transition hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
              >
                Join the free community
              </a>
            </div>
          </div>
          <p className="mt-10">
            <Link
              href="/learn"
              className="font-bold text-brand-navy transition hover:text-brand-orange"
            >
              ← All guides
            </Link>
          </p>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
