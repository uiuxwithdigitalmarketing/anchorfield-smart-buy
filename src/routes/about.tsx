import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import heroBg from "@/assets/hero-interior.jpg";
import { FounderSection } from "@/components/home/founder-section";
import { CtaBlock } from "@/components/cta-block";
import { TrustStrip } from "@/components/home/trust-strip";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Anchorfield — Australia's Financial-Grade Buyer's Advocacy" },
      { name: "description", content: "Anchorfield was founded to close the gap between finance and real estate — bringing institutional discipline to residential property acquisition." },
      { property: "og:title", content: "About Anchorfield" },
      { property: "og:description", content: "Financial-grade buyer's advocacy for discerning Australian buyers." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { n: "01", t: "Unwavering Independence", d: "No commissions, kickbacks, or referral fees from vendors, developers, or agents. Your interests only." },
  { n: "02", t: "Radical Transparency", d: "Fixed fees, published methodology, and full disclosure of every data point behind every recommendation." },
  { n: "03", t: "Data-Led Decisions", d: "Suburb-level analytics, comparable-sales modeling, and mortgage feasibility on every property, every time." },
  { n: "04", t: "Long-Horizon Commitment", d: "We align to 10–15 year outcomes, not the next transaction. Every acquisition serves a wider capital plan." },
];

function About() {
  return (
    <>
      <PageHero backgroundImage={heroBg}
        eyebrow="About / The Firm"
        chapter="EST. 2024 — MELBOURNE"
        title={
          <>
            Financial <span className="italic text-copper">intelligence,</span> applied to property.
          </>
        }
        intro="Anchorfield exists to close the gap between finance and real estate — bringing the discipline of institutional capital allocation to the intensely personal act of buying a home."
      />

      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="container-editorial grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="text-eyebrow mb-6">Our story</div>
            <h2 className="font-display italic text-4xl md:text-5xl leading-[1.05]">
              A mortgage legacy meets strategic acquisition.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-paper/70 leading-relaxed">
            <p>
              For over a decade, our founder structured complex mortgages for
              high-net-worth Australians. He witnessed, again and again, how
              excellent finance was destroyed by poor property decisions —
              buyers steered by emotion, agents optimising for the wrong party,
              off-market opportunities transacting in silence.
            </p>
            <p>
              Anchorfield was founded to reset that equation. We combine
              institutional mortgage strategy with disciplined property
              acquisition under one roof — no conflicts, no compromises, no
              emotional premia.
            </p>
            <p>
              Today we act exclusively for buyers: owner-occupiers, investors,
              first-home purchasers, interstate movers, expats, and SMSF
              trustees who share a conviction that property is a financial
              instrument first, and a lifestyle decision second.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-navy/30 border-y border-white/5">
        <div className="container-editorial">
          <div className="text-eyebrow mb-6">Values</div>
          <h2 className="font-display text-4xl md:text-5xl italic leading-[1.05] mb-16 max-w-2xl">
            Four principles that govern every engagement.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {VALUES.map((v) => (
              <div key={v.n} className="bg-midnight p-10">
                <div className="font-mono-brand text-copper text-xs mb-6">{v.n}</div>
                <h3 className="font-display italic text-3xl mb-4">{v.t}</h3>
                <p className="text-paper/60 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FounderSection />
      <TrustStrip />
      <CtaBlock
        eyebrow="Meet the founder"
        title="Start with a conversation."
        intro="A complimentary 45-minute strategy call to unpack your goals, budget, and timeline. No obligation, no pressure."
      />
    </>
  );
}
