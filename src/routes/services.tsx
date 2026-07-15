import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import heroPicture from "@/assets/hero-services.jpg?hero";
import { heroPreloadLink } from "@/components/hero-image";
import { CtaBlock } from "@/components/cta-block";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Anchorfield Buyer's Advocacy" },
      { name: "description", content: "Full-service buyer's advocacy, off-market search, auction bidding, investment strategy, and specialist services for interstate, expat, and SMSF buyers." },
      { property: "og:title", content: "Anchorfield Services" },
      { property: "og:url", content: "/services" },
    ],
    links: [heroPreloadLink(heroPicture), { rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const GROUPS = [
  {
    title: "Core Advocacy",
    items: [
      { slug: "buyers-advocacy", name: "Full Buyers Advocacy", desc: "End-to-end search, evaluation, negotiation, and settlement." },
      { slug: "off-market", name: "Off-Market Search", desc: "Access premium stock before it reaches public portals." },
      { slug: "auction-bidding", name: "Auction Bidding", desc: "Proxy representation on auction day. Discipline over adrenaline." },
      { slug: "negotiation", name: "Negotiation", desc: "Discreet, data-led negotiation for pre-identified assets." },
    ],
  },
  {
    title: "Investment & Portfolio",
    items: [
      { slug: "investment-advisory", name: "Investment Advisory", desc: "Data-driven acquisition for capital growth and yield." },
      { slug: "portfolio-strategy", name: "Portfolio Strategy", desc: "Long-horizon planning for multi-asset investors." },
      { slug: "property-research", name: "Property Research", desc: "Institutional-grade reports on suburbs and individual assets." },
      { slug: "due-diligence", name: "Due Diligence", desc: "Our 24-point forensic checklist. Structural, legal, financial." },
    ],
  },
  {
    title: "Specialist Buyers",
    items: [
      { slug: "first-home-buyers", name: "First Home Buyers", desc: "Clarity, confidence, and grant navigation." },
      { slug: "interstate", name: "Interstate Buyers", desc: "Remote purchases with local intelligence." },
      { slug: "expats", name: "Expat Buyers", desc: "Australian property from anywhere in the world." },
      { slug: "smsf", name: "SMSF Property", desc: "Compliant acquisition inside self-managed super." },
      { slug: "vendor-advocacy", name: "Vendor Advocacy", desc: "Sell with the same discipline institutions apply to buying." },
    ],
  },
];

function Services() {
  return (
    <>
      <PageHero picture={heroPicture}
        eyebrow="Services / Full scope"
        chapter="(02) CORE COMPETENCIES"
        title={
          <>
            One firm. <span className="italic text-copper">Every mandate.</span>
          </>
        }
        intro="A complete suite of buyer's advocacy services, structured around three engagement models: core acquisition, portfolio building, and specialist buyers."
      />

      {GROUPS.map((g) => (
        <section key={g.title} className="py-20 border-t border-white/5">
          <div className="container-editorial">
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="font-display italic text-3xl md:text-4xl">{g.title}</h2>
              <div className="text-eyebrow">{g.items.length} services</div>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {g.items.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group bg-midnight p-8 lg:p-10 hover:bg-navy transition-colors flex items-start justify-between gap-6"
                >
                  <div>
                    <h3 className="font-display italic text-2xl mb-3">{s.name}</h3>
                    <p className="text-paper/60 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-paper/30 group-hover:text-copper group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBlock eyebrow="Not sure which fits?" title="Speak with an advisor." intro="A single conversation is often enough to identify the right engagement. No cost, no obligation." />
    </>
  );
}
