import { faqs } from "@/lib/data";
import { SectionTag } from "./ui";

export default function Faq() {
  return (
    <section id="faq" className="bg-brand-sky/25 py-16 lg:py-24">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>Questions</SectionTag>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance text-brand-navy-deep sm:text-5xl">
            Asked all the time
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-brand-navy/12 bg-brand-paper px-6 py-5 shadow-sm shadow-brand-navy/5"
            >
              <summary className="cursor-pointer list-none text-lg font-extrabold text-brand-navy-deep marker:text-brand-orange [&::-webkit-details-marker]:hidden">
                <span className="mr-3 inline-block font-black text-brand-orange transition-transform group-open:rotate-45">
                  +
                </span>
                {faq.question}
              </summary>
              <p className="mt-3 pl-8 leading-7.5 text-brand-navy-deep/78">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
