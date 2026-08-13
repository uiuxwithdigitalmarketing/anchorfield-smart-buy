import { Reveal } from "@/components/reveal";

const FACTS = [
  {
    n: "01",
    title: "Investor Competition",
    body: "Buyers increasingly compete against sophisticated investors who move quickly and price coldly.",
  },
  {
    n: "02",
    title: "Borrowing Pressure",
    body: "Pre-approval does not automatically mean affordability. Serviceability and structure matter more than a headline number.",
  },
  {
    n: "03",
    title: "Limited Inventory",
    body: "Quality properties attract intense competition, and the strongest stock often never reaches an open listing.",
  },
  {
    n: "04",
    title: "Price Pressure",
    body: "The cost of getting the decision wrong continues to rise — in capital, in time and in opportunity.",
  },
];

export function MarketShift() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-editorial">
        <Reveal className="max-w-3xl">
          <p className="text-eyebrow mb-6">The market has changed</p>
          <h2 className="font-display uppercase text-[clamp(2rem,4.6vw,3.75rem)] leading-[0.98] text-balance">
            The rules of buying property have changed.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-px border-t border-ink/10">
          {FACTS.map((f, i) => (
            <Reveal
              key={f.n}
              delay={i * 90}
              className="py-10 md:py-14 border-b border-ink/10 grid grid-cols-[auto_1fr] gap-6 md:gap-10"
            >
              <span className="font-mono-brand text-[11px] tracking-widest text-copper pt-2">
                {f.n}
              </span>
              <div>
                <h3 className="font-display uppercase text-xl md:text-2xl mb-3">{f.title}</h3>
                <p className="text-ink/60 leading-relaxed max-w-md">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
