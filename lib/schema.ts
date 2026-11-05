import type { Faq } from "@/lib/data";
import {
  CALCOM_AUDIT_LINK,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SKOOL_URL,
  SOCIAL_LINKS,
} from "@/lib/site";

/**
 * Structured data (schema.org JSON-LD) for SEO, answer engines and
 * generative engines. Every fact here is drawn from the site's own
 * published content — nothing invented, nothing aspirational.
 */

const ORG_ID = `${SITE_URL}/#organization`;
const BIZ_ID = `${SITE_URL}/#business`;

const sameAs = [
  "https://www.skool.com/build-ai-from-here-5063",
  SOCIAL_LINKS.instagram,
  SOCIAL_LINKS.tiktok,
].filter((href) => href.length > 0);

export const siteGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "AI Growth Community LLC",
      url: SITE_URL,
      brand: { "@type": "Brand", name: SITE_NAME },
      slogan: SITE_TAGLINE,
      description:
        "Build AI From Here teaches practical AI to small businesses, real estate professionals, and everyday people — no coding, no jargon — and builds AI systems for Charlotte-area teams.",
      sameAs,
    },
    {
      "@type": "ProfessionalService",
      "@id": BIZ_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/brand/icon-square-white-on-navy-512.png`,
      image: `${SITE_URL}/opengraph-image`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      slogan: SITE_TAGLINE,
      description:
        "Practical AI consulting, training and tools for Charlotte-area small businesses, realtors and everyday people. Start with the $199 Pro AI Audit — book first, pay after.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Charlotte",
        addressRegion: "NC",
        addressCountry: "US",
      },
      areaServed: ["Charlotte", "Concord", "Cabarrus County"],
      parentOrganization: { "@id": ORG_ID },
      sameAs,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        contactType: "sales",
        areaServed: "US-NC",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
  ],
};

export function faqPageJsonLd(faqList: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export const auditServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pro AI Audit",
  serviceType: "AI consulting diagnostic",
  provider: { "@id": BIZ_ID },
  areaServed: ["Charlotte", "Concord", "Cabarrus County"],
  description:
    "A one-on-one diagnostic that walks how customers find you, reach you, buy from you and come back — then names the single bottleneck costing you the most and hands you a written plan with the top three automations to build, in order. Book first, pay after.",
  offers: {
    "@type": "Offer",
    price: "199",
    priceCurrency: "USD",
    url: `${SITE_URL}/consulting`,
    availability: "https://schema.org/InStock",
  },
  url: `${SITE_URL}/consulting`,
  sameAs: CALCOM_AUDIT_LINK,
};

export const thursdayEventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Thursday Build Session — we build in public",
  description:
    "A live build session every Thursday at Collaboration Central in Charlotte, NC. Watch a real AI system get built in public, ask questions, and take the pattern home. Run by Build AI From Here.",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  eventSchedule: {
    "@type": "Schedule",
    repeatFrequency: "P1W",
    byDay: "https://schema.org/Thursday",
    startTime: "18:00:00",
    scheduleTimezone: "America/New_York",
  },
  location: {
    "@type": "Place",
    name: "Collaboration Central",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
  },
  organizer: { "@id": ORG_ID },
  url: `${SITE_URL}/charlotte`,
};

export const communityJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Build AI From Here community (Skool)",
  description:
    "A beginner-friendly community for practical AI: a free tier with a daily AI tip, weekly tool video, starter prompt packs and a monthly open Q&A, and a Premium tier at $10/month with the full prompt library, courses and member pricing. No coding, no jargon.",
  brand: { "@type": "Brand", name: SITE_NAME },
  url: SKOOL_URL,
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      url: SKOOL_URL,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Premium",
      price: "10",
      priceCurrency: "USD",
      url: SKOOL_URL,
      availability: "https://schema.org/InStock",
    },
  ],
};
