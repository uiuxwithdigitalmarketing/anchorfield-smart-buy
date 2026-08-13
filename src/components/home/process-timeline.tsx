import { SectionHeader } from "@/components/section-header";

const STEPS = [
  { n: "01", title: "Discovery", desc: "Goals, budget, non-negotiables. We codify your brief." },
  { n: "02", title: "Finance Review", desc: "In-house mortgage strategy. Borrowing verified before search." },
  { n: "03", title: "Search", desc: "On-market, pre-market, and off-market sourcing across networks." },
  { n: "04", title: "Inspection", desc: "24-point forensic due diligence. Structural, legal, financial." },
  { n: "05", title: "Negotiation", desc: "Data-led offer strategy. Auction proxy where required." },
  { n: "06", title: "Settlement", desc: "Full concierge to keys-in-hand and post-purchase support." },
];

export function ProcessTimeline() {
  return (
    <section className="py-32 md:py-48">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="(03) Methodology"
          title={
            <>
              A six-stage <span className="italic text-copper">acquisition</span> protocol.
            </>
          }
          intro="Every engagement follows the same disciplined framework — refined across hundreds of transactions and calibrated to your specific mandate."
        />

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-ink/10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative group">
                <div className="flex lg:block items-center gap-6 lg:gap-0">
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-midnight border border-copper items-center justify-center mb-8 relative">
                    <div className="w-1.5 h-1.5 bg-copper rounded-full" />
                  </div>
                  <div className="lg:hidden font-mono-brand text-copper text-sm">{s.n}</div>
                  <div className="hidden lg:block font-mono-brand text-copper text-xs mb-4">
                    STEP {s.n}
                  </div>
                  <div>
                    <h3 className="font-display italic text-2xl lg:text-3xl mb-3 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-sm text-ink/60 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden ml-2 mt-4 h-8 w-px bg-ink/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
