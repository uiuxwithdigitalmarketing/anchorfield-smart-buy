import { SectionHeader } from "@/components/section-header";
import architectureImg from "@/assets/architecture-detail.jpg";

const RISKS = [
  {
    n: "01",
    title: "Emotional Premia",
    body: "Unchecked attachment results in a 12–15% overpayment on average. We remove the pulse from the purchase.",
  },
  {
    n: "02",
    title: "Asymmetric Information",
    body: "Selling agents are paid to sell you a story. We are paid to find the structural reality behind the render.",
  },
  {
    n: "03",
    title: "Auction Pressure",
    body: "The 30-minute spectacle of the auction floor is designed to break your budget. Our presence enforces fiscal discipline.",
  },
  {
    n: "04",
    title: "Invisible Inventory",
    body: "Up to 40% of premium Melbourne and Sydney stock trades within private networks before ever hitting a portal.",
  },
];

export function WhyBuyersLose() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="container-editorial grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <SectionHeader
            eyebrow="(01) Risk Assessment"
            title={
              <>
                The market <br />
                <span className="italic text-copper">exploits</span> your optimism.
              </>
            }
            intro="Most residential buyers overpay by an average of 7.4%. Not for lack of intelligence — but because the field is asymmetric by design."
          />

          <div className="mt-12 aspect-[4/5] max-w-sm overflow-hidden">
            <img
              src={architectureImg}
              alt="Modern architectural detail"
              loading="lazy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-2">
          {RISKS.map((r) => (
            <article
              key={r.n}
              className="group grid grid-cols-[auto_1fr] gap-8 py-10 border-t border-white/5 hover:border-copper/40 transition-colors"
            >
              <div className="font-mono-brand text-copper text-sm pt-1">{r.n}</div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl italic mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-500">
                  {r.title}
                </h3>
                <p className="text-paper/60 text-lg leading-relaxed max-w-xl">
                  {r.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
