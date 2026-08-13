import { Check, X } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

const ROWS = [
  { crit: "Market Access", alone: "Public portals only", us: "Full market + 40% off-market" },
  { crit: "Due Diligence", alone: "Standard inspection", us: "24-point forensic review" },
  { crit: "Finance Structure", alone: "Separate broker, disconnected", us: "In-house mortgage strategy" },
  { crit: "Negotiation", alone: "Emotional & reactive", us: "Data-led, disciplined" },
  { crit: "Auction Bidding", alone: "Pressured & exposed", us: "Proxy representation" },
  { crit: "Conflicts of Interest", alone: "Agent works for vendor", us: "100% buyer-aligned" },
];

export function ComparisonTable() {
  return (
    <section className="py-32 md:py-48 bg-navy/40 border-y border-ink/10">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="(04) The Advantage"
          title={
            <>
              Buying alone <span className="italic text-copper">vs.</span> Anchorfield.
            </>
          }
          align="center"
          className="mb-16"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] text-[10px] uppercase tracking-[0.25em] text-ink/40 pb-4 border-b border-ink/10">
            <div>Criteria</div>
            <div className="text-center">Buying Alone</div>
            <div className="text-center text-copper">With Anchorfield</div>
          </div>

          {ROWS.map((r) => (
            <div
              key={r.crit}
              className="grid grid-cols-[1.2fr_1fr_1fr] items-center py-6 border-b border-ink/10 group hover:bg-ink/[0.02] transition-colors"
            >
              <div className="font-display text-lg md:text-2xl italic pr-4">{r.crit}</div>
              <div className="text-center text-sm text-ink/50 flex items-center gap-2 justify-center">
                <X size={14} className="text-ink/30 shrink-0" />
                <span className="hidden md:inline">{r.alone}</span>
              </div>
              <div className="text-center text-sm text-ink/90 flex items-center gap-2 justify-center">
                <Check size={14} className="text-copper shrink-0" />
                <span className="hidden md:inline">{r.us}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
