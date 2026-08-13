import { Reveal } from "@/components/reveal";

const ROWS = [
  { label: "Property value", value: "$1,050,000" },
  { label: "Expected rent", value: "$720 / week" },
  { label: "Estimated gross yield", value: "3.6%" },
  { label: "Borrowing alignment", value: "Strong" },
];

export function PrecisionBuying() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-editorial grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6">
          <p className="text-eyebrow mb-6">Precision buying</p>
          <h2 className="font-display uppercase text-[clamp(2rem,4.4vw,3.4rem)] leading-[0.98] text-balance">
            Beautiful properties mean nothing if the numbers don't work.
          </h2>
          <p className="mt-8 text-lg text-ink/65 leading-relaxed max-w-lg">
            Before we recommend an acquisition, we model it. Purchase price against
            comparable evidence, rent against holding cost, yield against your borrowing
            structure. Presentation is the last thing we assess.
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6">
          <div className="border border-ink/12 bg-background">
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-ink/10 bg-stone">
              <span className="font-mono-brand text-[10px] tracking-[0.2em] uppercase text-ink/60">
                Acquisition assessment
              </span>
              <span className="font-mono-brand text-[10px] tracking-[0.2em] uppercase text-copper">
                Example only
              </span>
            </div>
            <dl>
              {ROWS.map((r) => (
                <div
                  key={r.label}
                  className="flex items-baseline justify-between gap-6 px-6 sm:px-8 py-6 border-b border-ink/10 last:border-b-0"
                >
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-ink/50">
                    {r.label}
                  </dt>
                  <dd className="font-display text-2xl sm:text-3xl">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 text-xs text-ink/45 leading-relaxed">
            Illustrative placeholder figures shown to demonstrate our assessment format.
            They are not client results or market guidance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
