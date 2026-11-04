import type { Metadata } from "next";
import { Caveat, Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import MobileActionBar from "@/components/MobileActionBar";
import ContactModal from "@/components/ContactModal";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Build AI From Here",
    template: "%s | Build AI From Here",
  },
  description:
    "Practical AI for Charlotte-area businesses and everyday people. No coding. No overwhelm. Just practical AI, one small win at a time.",
  applicationName: "Build AI From Here",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Build AI From Here",
    description:
      "Practical AI for Charlotte-area businesses and everyday people. " +
      SITE_TAGLINE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Build AI From Here",
    description:
      "Practical AI for Charlotte-area businesses and everyday people. " +
      SITE_TAGLINE,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Growth Community LLC",
  url: SITE_URL,
  brand: { "@type": "Brand", name: SITE_NAME },
  slogan: SITE_TAGLINE,
  areaServed: "Charlotte, North Carolina",
  description:
    "Build AI From Here teaches practical AI to small businesses, real estate professionals, and everyday people — no coding, no jargon — and builds AI systems for Charlotte-area teams.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-cream font-sans text-brand-navy-deep">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <MobileActionBar />
        <ContactModal />
      </body>
    </html>
  );
}
