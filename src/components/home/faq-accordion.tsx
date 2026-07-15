import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

const FAQS = [
  {
    q: "How is Anchorfield different from a real estate agent?",
    a: "A selling agent is contracted by — and paid by — the vendor. Their fiduciary duty is to secure the highest possible price. We are contracted exclusively by you, the buyer, with no commissions, kickbacks, or referral fees from any other party in the transaction.",
  },
  {
    q: "What does 'in-house mortgage expertise' actually mean?",
    a: "Our principal spent over a decade as a mortgage broker for high-net-worth clients. That means we structure your finance strategy before we search, verify your borrowing at every offer, and negotiate with the credibility of pre-approved capital.",
  },
  {
    q: "Do you only service Melbourne?",
    a: "Headquartered in Melbourne, we routinely act for clients acquiring in Sydney, Brisbane, the Gold Coast, and Perth — including interstate movers and expat buyers. We maintain vetted local partner networks in every major metro.",
  },
  {
    q: "What are your fees?",
    a: "Fees are structured as a fixed engagement — never a percentage of purchase price, which would create a misaligned incentive to spend more. Full fee schedules are provided at the initial strategy call.",
  },
  {
    q: "How do I get started?",
    a: "Book a complimentary strategy call. We'll spend 45 minutes understanding your goals, budget, and timeline — with no obligation to proceed. If we're the right fit, we'll outline a scope; if we're not, we'll point you to who is.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-32 md:py-48">
      <div className="container-editorial grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <SectionHeader
            eyebrow="(09) Common Questions"
            title={
              <>
                Frequently <br /><span className="italic text-copper">asked.</span>
              </>
            }
            intro="The most common questions from prospective clients. Something else? Reach out directly."
          />
        </div>
        <div className="lg:col-span-8">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-t border-white/10 last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-8 flex items-start justify-between gap-6 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display italic text-2xl md:text-3xl leading-tight group-hover:text-copper transition-colors">
                    {f.q}
                  </span>
                  <span className="shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:border-copper group-hover:text-copper transition-colors">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-paper/70 text-lg leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
