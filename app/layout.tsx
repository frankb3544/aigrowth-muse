import type { Metadata } from "next";
import { Caveat, Fraunces, Manrope } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "Build AI From Here",
    template: "%s | Build AI From Here",
  },
  description:
    "Practical AI for Charlotte-area businesses and everyday people. No coding. No overwhelm. Just practical AI, one small win at a time.",
  applicationName: "Build AI From Here",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-cream font-sans text-brand-navy-deep">
        {children}
      </body>
    </html>
  );
}
