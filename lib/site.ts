/**
 * Site-wide links and integration configuration.
 *
 * Booking (book first): the real Cal.com link is the committed default
 * below — it is a public booking link, safe to ship in code. The
 * NEXT_PUBLIC_CALCOM_AUDIT_LINK env var still overrides it when set.
 *
 * Payment (pay after): the Stripe link is not connected yet. It is read
 * from NEXT_PUBLIC_STRIPE_AUDIT_PAYMENT_LINK; while that is empty the
 * pay-after button points back at the #book section and the page shows
 * a small "connects at launch" note instead.
 *
 * See .env.example and the README for the full list.
 */

/** Skool community URL, with UTM tracking. Never print this as visible text. */
export const SKOOL_URL =
  "https://skool.com/build-ai-from-here-5063?utm_source=site&utm_medium=cta&utm_campaign=homepage";

/** Default Cal.com booking link for the Pro AI Audit call (book first). */
export const DEFAULT_CALCOM_AUDIT_LINK =
  "https://cal.com/franklinbellamy/build-ai-from-here";

const envCalcomLink = process.env.NEXT_PUBLIC_CALCOM_AUDIT_LINK;

/** Effective Cal.com booking link: env override wins, else the default. */
export const CALCOM_AUDIT_LINK =
  envCalcomLink && envCalcomLink.length > 0
    ? envCalcomLink
    : DEFAULT_CALCOM_AUDIT_LINK;

/** Stripe payment link for the Pro AI Audit (pay after booking). */
export const STRIPE_AUDIT_PAYMENT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_AUDIT_PAYMENT_LINK ?? "";

export const bookingConfigured = CALCOM_AUDIT_LINK.length > 0;
export const paymentConfigured = STRIPE_AUDIT_PAYMENT_LINK.length > 0;

/** Where "Book an Audit" buttons send people. */
export const auditBookingHref = bookingConfigured ? CALCOM_AUDIT_LINK : "#book";

/** Where the pay-after step sends people once the audit is scheduled. */
export const auditPaymentHref = paymentConfigured
  ? STRIPE_AUDIT_PAYMENT_LINK
  : "#book";

export const AUDIT_PRICE = "$199";
