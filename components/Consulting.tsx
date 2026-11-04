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

  if (dark) {
    return (
      <section id="audit" className="blueprint py-16 text-white lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionTag>AI consulting</SectionTag>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
              Have it <span className="marker">built for you</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/72">
              Three ways to work with us, in order. Almost everybody starts
              with the audit — it&apos;s how we both find out what&apos;s
              actually worth building.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border-2 border-brand-sky/35 bg-white/[0.03] shadow-2xl shadow-black/30">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-brand-sky/35 bg-white/[0.05] px-6 py-4 sm:px-8">
              <p className="text-xs font-extrabold tracking-[0.22em] text-brand-sky uppercase">
                Work order — line items
              </p>
              <p className="font-hand text-2xl leading-none text-brand-amber">
                in order — item 01 first
              </p>
            </div>

            {tickets.map((ticket, index) => (
              <article
                key={ticket.name}
                className={`grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[120px_1fr_230px] lg:gap-8 ${
                  index > 0 ? "border-t border-dashed border-white/20" : ""
                } ${
                  ticket.featured
                    ? "border-l-8 border-l-brand-orange bg-white/[0.06]"
                    : ""
                }`}
              >
                <div>
                  <p className="text-[11px] font-extrabold tracking-[0.22em] text-brand-sky uppercase">
                    Item
                  </p>
                  <p className="mt-1 font-display text-6xl font-black text-white/90">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-xs font-bold tracking-[0.14em] text-white/45 uppercase">
                    {ticket.code}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-3xl font-black text-white">
                      {ticket.name}
                    </h3>
                    {ticket.featured && (
                      <span className="inline-block rotate-2 rounded-md border-2 border-brand-amber px-3 py-1 font-hand text-xl leading-none text-brand-amber">
                        Start here
                      </span>
                    )}
                  </div>
                  <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {ticket.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-brand-sky/70 text-[11px] font-black text-brand-amber"
                        >
                          ✓
                        </span>
                        <span className="leading-6.5 text-white/80">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start lg:items-end lg:border-l lg:border-dashed lg:border-white/20 lg:pl-8">
                  <p className="text-[11px] font-extrabold tracking-[0.22em] text-brand-sky uppercase">
                    Rate
                  </p>
                  <p className="mt-1.5 font-display text-3xl leading-tight font-black text-brand-orange">
                    {ticket.price}
                  </p>
                  <p className="mt-1 text-sm font-bold text-white/55 lg:text-right">
                    {ticket.priceNote}
                  </p>
                  <a
                    href={ticket.href}
                    className={`mt-6 rounded-full px-6 py-3 text-center text-sm font-extrabold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber ${
                      ticket.featured
                        ? "bg-brand-orange text-white shadow-md shadow-black/30 hover:bg-orange-600"
                        : "border-2 border-white/60 text-white hover:bg-white hover:text-brand-navy-deep"
                    }`}
                  >
                    {ticket.cta}
                  </a>
                </div>
              </article>
            ))}

            <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-brand-sky/35 bg-white/[0.05] px-6 py-4 sm:px-8">
              <p className="font-hand text-2xl leading-none text-brand-sky">
                Every job starts with the audit.
              </p>
              <p className="text-xs font-extrabold tracking-[0.22em] text-white/50 uppercase">
                End of line items
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="audit"
      className={`py-16 lg:py-24 ${dark ? "blueprint text-white" : "paper-texture"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>AI consulting</SectionTag>
          <h2
            className={`mt-3 font-display text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl ${dark ? "text-white" : "text-brand-navy-deep"}`}
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
