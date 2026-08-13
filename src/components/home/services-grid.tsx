import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

const SERVICES = [
  { n: "01", slug: "buyers-advocacy", title: "Full Buyers Advocacy", desc: "End-to-end strategic search, valuation, and acquisition." },
  { n: "02", slug: "off-market", title: "Off-Market Search", desc: "Access the 35% of premium stock never listed publicly." },
  { n: "03", slug: "auction-bidding", title: "Auction Bidding", desc: "Proxy representation that neutralises sales-floor pressure." },
  { n: "04", slug: "negotiation", title: "Negotiation", desc: "Data-led offer strategy for pre-identified properties." },
  { n: "05", slug: "investment-advisory", title: "Investment Strategy", desc: "Portfolio planning aligned to capital cycles." },
  { n: "06", slug: "portfolio-strategy", title: "Portfolio Growth", desc: "Structured scaling for multi-asset residential investors." },
  { n: "07", slug: "first-home-buyers", title: "First Home Buyers", desc: "Confidence and clarity for the most important purchase." },
  { n: "08", slug: "vendor-advocacy", title: "Vendor Advocacy", desc: "Sell with the same discipline institutions apply to buying." },
];

export function ServicesGrid() {
  return (
    <section className="py-32 md:py-48 bg-navy/30 border-y border-ink/10">
      <div className="container-editorial">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <SectionHeader
            eyebrow="(02) Core Competencies"
            title={
              <>
                Managed <span className="italic text-copper">acquisition.</span>
              </>
            }
            intro="Tailored engagements for principal residences, investment portfolios, and specialised buyers."
          />
          <Link to="/services" className="link-underline text-eyebrow shrink-0">
            View all services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/5 border border-ink/10">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative bg-midnight p-8 lg:p-10 min-h-[280px] flex flex-col justify-between hover:bg-graphite transition-colors duration-500"
            >
              <div className="flex justify-between items-start">
                <div className="w-11 h-11 border border-copper/30 flex items-center justify-center font-mono-brand text-xs group-hover:bg-copper group-hover:text-midnight group-hover:border-copper transition-all">
                  {s.n}
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink/30 group-hover:text-copper group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl italic mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-ink/50 leading-relaxed">{s.desc}</p>
                <div className="h-px w-0 bg-copper mt-6 group-hover:w-full transition-all duration-700" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
