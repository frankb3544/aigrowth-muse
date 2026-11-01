import { AUDIT_PRICE } from "@/lib/site";
import { SectionTag } from "./ui";

const tickets = [
  {
    code: "Ticket 01",
    name: "Pro AI Audit",
    price: AUDIT_PRICE,
    priceNote: "one-time · book first, pay after",
    featured: true,
    points: [
      "A full walk of your business: how customers find you, reach you, buy, and come back",
      "The ONE bottleneck costing you the most — named, not guessed",
      "A written plan with the top three automations to build, in order",
      "Yours to keep, whether we work together again or not",
    ],
    cta: "Book an Audit",
    href: "#book",
  },
  {
    code: "Ticket 02",
    name: "Build Sprint",
    price: "Scoped after your audit",
    priceNote: "one system, built and running",
    featured: false,
    points: [
      "We build the first system from your plan — the bottleneck fix",
      "Built in your own tools, in your own accounts. You keep everything",
      "Every piece of marketing copy gets a human review before it ships",
      "Tested until it works, then handed over with plain instructions",
    ],
    cta: "Start with an Audit",
    href: "#book",
  },
  {
    code: "Ticket 03",
    name: "Team Program",
    price: "For teams that want it ongoing",
    priceNote: "the next bottleneck, every cycle",
    featured: false,
    points: [
      "We keep going: next bottleneck, next system, same six steps",
      "Systems tested and scored, so quality doesn't quietly slip",
      "Weekly training for your team, in plain words",
      "Your people learn to run it — you don't rent the skill forever",
    ],
    cta: "Start with an Audit",
    href: "#book",
  },
];

export default function Consulting({ variant }: { variant?: "blueprint" }) {
  const dark = variant === "blueprint";
  return (
    <section
      id="audit"
      className={`py-16 lg:py-24 ${dark ? "blueprint text-white" : "paper-texture"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>AI consulting</SectionTag>
          <h2
            className={`mt-3 font-display text-4xl font-black tracking-tight text-balance sm:text-5xl ${dark ? "text-white" : "text-brand-navy-deep"}`}
          >
            Have it <span className="marker">built for you</span>
          </h2>
          <p className={`mt-4 text-lg leading-8 ${dark ? "text-white/72" : "text-brand-navy-deep/72"}`}>
            Three ways to work with us, in order. Almost everybody starts with
            the audit — it&apos;s how we both find out what&apos;s actually
            worth building.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {tickets.map((ticket, index) => (
            <article
              key={ticket.name}
              className={`tape relative flex flex-col rounded-3xl border-2 p-7 shadow-lg sm:p-8 ${
                ticket.featured
                  ? "border-brand-navy bg-brand-paper shadow-brand-navy/15 lg:-translate-y-3"
                  : "border-brand-navy/15 bg-brand-paper/80 shadow-brand-navy/8"
              } ${index === 1 ? "rotate-[0.6deg]" : ""} ${index === 2 ? "rotate-[-0.6deg]" : ""}`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-extrabold tracking-[0.18em] text-brand-orange uppercase">
                  {ticket.code}
                </p>
                {ticket.featured && (
                  <span className="rounded-full bg-brand-amber px-3 py-1 text-xs font-extrabold text-brand-navy-deep">
                    Start here
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-3xl font-black text-brand-navy-deep">
                {ticket.name}
              </h3>
              <p className="mt-3">
                <span className="font-display text-4xl font-black text-brand-orange">
                  {ticket.price}
                </span>
              </p>
              <p className="mt-1 text-sm font-bold text-brand-navy-deep/60">
                {ticket.priceNote}
              </p>
              <ul className="mt-6 flex-1 space-y-3.5">
                {ticket.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-brand-navy text-[11px] font-black text-white"
                    >
                      ✓
                    </span>
                    <span className="leading-6.5 text-brand-navy-deep/80">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={ticket.href}
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-extrabold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy ${
                  ticket.featured
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 hover:bg-orange-600"
                    : "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                }`}
              >
                {ticket.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
