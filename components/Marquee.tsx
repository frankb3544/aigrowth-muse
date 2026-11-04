const ITEMS = [
  "ClosePay",
  "Vibizm",
  "Inspect Sumo",
  "Nurse K",
  "Cobles Landing Reservations",
  "Salintus",
  "Thursday Build Sessions",
  "Starter Prompt Pack",
];

/**
 * Infinite tools marquee under the hero (deep navy band). The list is
 * duplicated for a seamless loop; the duplicate is hidden from
 * assistive tech, and the loop pauses on hover or focus.
 */
export default function Marquee() {
  return (
    <section
      aria-label="Our tools and weekly sessions"
      className="marquee overflow-hidden bg-brand-navy-deep py-4"
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((half) => (
          <div key={half} aria-hidden={half === 1} className="flex items-center">
            {ITEMS.map((item) => (
              <span key={item} className="flex items-center whitespace-nowrap">
                <span className="px-6 font-display text-lg font-bold text-white">
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rotate-45 bg-brand-orange"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
