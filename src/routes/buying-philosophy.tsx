import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { CtaBlock } from "@/components/cta-block";

export const Route = createFileRoute("/buying-philosophy")({
  head: () => ({
    meta: [
      { title: "Our Buying Philosophy — Anchorfield" },
      { name: "description", content: "Property is a financial decision first, an emotional one second. The Anchorfield philosophy — data-led, client-first, long-horizon." },
      { property: "og:title", content: "Our Buying Philosophy — Anchorfield" },
      { property: "og:description", content: "Buy like a bank. Financial rigor applied to every acquisition." },
    ],
    links: [{ rel: "canonical", href: "/buying-philosophy" }],
  }),
  component: Page,
});

const PILLARS = [
  { n: "01", t: "Financial Due Diligence First", d: "Every property is stress-tested against lending criteria and market data before emotion enters the room." },
  { n: "02", t: "Client Advocacy Over Sales", d: "We are paid by the buyer to secure the buyer's best outcome. No commissions from vendors or developers." },
  { n: "03", t: "Full Market Access", d: "On-market, off-market, and pre-market opportunities — sourced without bias to a single agency network." },
  { n: "04", t: "Long-Term Wealth Focus", d: "Every acquisition is measured against a 10–15 year capital plan, not this quarter's transaction." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About / Philosophy"
        chapter="(03) FIRST PRINCIPLES"
        title={<>Buy like a <span className="italic text-copper">bank,</span> not a bidder.</>}
        intro="Property is a financial decision first, an emotional one second. Every mandate we accept is filtered through institutional discipline."
      />

      <section className="py-24 border-t border-white/5">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Four pillars"
            title={<>The Anchorfield <span className="italic text-copper">doctrine.</span></>}
          />
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {PILLARS.map((p) => (
              <div key={p.n} className="bg-midnight p-10">
                <div className="font-mono-brand text-copper text-xs tracking-widest mb-4">{p.n}</div>
                <h3 className="font-display italic text-2xl mb-3">{p.t}</h3>
                <p className="text-paper/60 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock eyebrow="Apply the philosophy" title="Discuss your mandate." intro="A single conversation reveals whether the Anchorfield approach fits your goals." />
    </>
  );
}
