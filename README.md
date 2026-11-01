# Build AI From Here

The production website for **Build AI From Here**, a practical AI community and consulting platform from AI Growth Community LLC.

> **Current status: Phase 2 homepage built.** The full homepage (port of the approved combined B+C mockup) is implemented in code: hero, interactive bottleneck diagnostic, consulting offers, book-first/pay-after audit booking, process, in-person proof, Skool community comparison, tools, built-and-owned properties, Charlotte programs, founder letter, FAQ, and final CTA. GitHub push and Vercel connection come next; see "How deployment will work" below.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- `next/font` with Google Fonts (Manrope for interface text and Fraunces for display headings)
- Planned deployment: GitHub → Vercel

## Brand tokens

Brand values live in `app/globals.css` as Tailwind theme tokens:

| Token | Value | Use |
| --- | --- | --- |
| `brand-navy` | `#1B2D6B` | Primary navy |
| `brand-navy-deep` | `#0D1838` | Hero, header, and footer backgrounds |
| `brand-orange` | `#F97316` | Primary actions and highlights |
| `brand-amber` | `#FBBF24` | Warm accent |
| `brand-sky` | `#93C5FD` | Light blue accent |
| `brand-cream` | `#FFF7E8` | Warm paper background |

Brand images live in `public/brand/`. The square white-on-navy mark is also copied to `app/icon.png`, which Next.js uses as the site icon.

## Run locally

Prerequisites:

- Node.js LTS (the Phase 1 verification used Node `v24.22.1`)
- npm (the Phase 1 verification used npm `10.9.4`)

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other useful commands:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # run ESLint
```

## Environment variables

Copy the template before adding integrations:

```bash
cp .env.example .env.local
```

Never commit `.env.local` or real secrets.

### Audit booking & payment (book first, pay after)

The Pro AI Audit flow is **book first, pay after**. The two public links are
handled in `lib/site.ts`:

| Variable | What it is | Status |
| --- | --- | --- |
| `NEXT_PUBLIC_CALCOM_AUDIT_LINK` | Cal.com booking link for the audit call (step 1: book the call) | **Connected** |
| `NEXT_PUBLIC_STRIPE_AUDIT_PAYMENT_LINK` | Stripe payment link for the $199 audit (step 3: pay after the audit is scheduled) | **Pending** |

- **Cal.com is connected.** The live public booking link
  (`cal.com/franklinbellamy/build-ai-from-here`) is the committed default in
  `lib/site.ts`, so every "Book an Audit" button books correctly with no
  configuration at all. Setting `NEXT_PUBLIC_CALCOM_AUDIT_LINK` overrides
  that default if the booking link ever changes.
- **Stripe is still to be connected.** While
  `NEXT_PUBLIC_STRIPE_AUDIT_PAYMENT_LINK` is empty, the pay-after button
  points back at the on-page booking section (`#book`) and the page shows a
  small handwritten "payment link connects at launch" note in place of the
  live link. Connecting Stripe later is just setting that one env var
  (locally in `.env.local`, and in the Vercel project settings for
  production) and redeploying.

`.env.example` also keeps placeholders for later-phase server integrations
(Stripe keys, Resend).

## How deployment will work

Repository: the owner's GitHub repo (`aigrowth-muse`). Once Vercel is
connected (a later step, on the owner's go):

1. Import the GitHub repository into Vercel.
2. Set **Production Branch** to `main` in Vercel.
3. Set the env vars from `.env.example` in the Vercel project settings.
4. Every push to a non-production branch or pull request creates a Vercel **Preview** URL.
5. Every merge/push to `main` deploys the **Production** URL.
6. After QA, attach `buildaifromhere.com` in Vercel and update DNS at the registrar; Vercel will provision SSL automatically.

## Project structure

```text
app/
  globals.css   Brand tokens, paper texture, marker and tape styles
  icon.png      Site icon from the square brand mark
  layout.tsx    Metadata and Google Fonts (Manrope, Fraunces, Caveat)
  page.tsx      Homepage — composes the section components
components/     One component per homepage section (Header, Hero,
                Diagnostic, Consulting, Booking, Process, Proof,
                Community, Tools, BuiltAndOwn, CharlottePrograms,
                FounderLetter, Faq, FinalCta, Footer)
lib/
  site.ts       Public links + booking/payment env wiring
  data.ts       Homepage content data (tools, tiers, FAQs, steps…)
public/
  brand/        Public logo and icon assets
```

## Next phases

- **Phase 3:** Connect the real Cal.com + Stripe accounts (set the two env
  vars above), plus lead capture/email via Resend.
- **Phase 4:** Build the SEO route architecture and redirect the older parent site.
- **Phase 5:** QA, domain cutover, and launch.
