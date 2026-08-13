import { Reveal } from "@/components/reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "Calculated Precision",
    lead: "Every recommendation is backed by data.",
    body: "Borrowing capacity, rental yield, cash flow, comparable valuation and long-term financial strategy are modelled before a property is ever recommended.",
    tinted: false,
  },
  {
    n: "02",
    title: "Brutal Honesty",
    lead: "We tell you what the property is really worth.",
    body: "Poor drainage, bad orientation, weak rental yield, inflated price expectations or unsuitable financial fundamentals — you hear it plainly, and early.",
    tinted: true,
  },
  {
    n: "03",
    title: "Fierce Guardianship",
    lead: "Your capital deserves protection.",
    body: "We act for the buyer alone. No vendor relationships, no referral conflicts, no incentive to see a deal done that shouldn't be.",
    tinted: false,
  },
];

export function Principles() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-editorial">
        <Reveal className="max-w-3xl mb-16">
          <p className="text-eyebrow mb-6">Why Anchorfield</p>
          <h2 className="font-display uppercase text-[clamp(2rem,4.6vw,3.5rem)] leading-[0.98]">
            Three principles we do not negotiate.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 110}
              className={`p-8 lg:p-12 flex flex-col ${p.tinted ? "bg-taupe/25" : "bg-background"}`}
            >
              <span className="font-mono-brand text-[11px] tracking-widest text-copper">
                {p.n}
              </span>
              <h3 className="mt-10 font-display uppercase text-2xl lg:text-[1.75rem] leading-tight">
                {p.title}
              </h3>
              <p className="mt-5 font-editorial italic text-lg text-ink/80 leading-snug">
                {p.lead}
              </p>
              <p className="mt-5 text-sm text-ink/60 leading-relaxed">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
