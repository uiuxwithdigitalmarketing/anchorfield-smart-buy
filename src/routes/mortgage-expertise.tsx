import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import heroPicture from "@/assets/hero-mortgage.jpg?hero";
import { heroPreloadLink } from "@/components/hero-image";
import { SectionHeader } from "@/components/section-header";
import { ComparisonTable } from "@/components/home/comparison-table";
import { CtaBlock } from "@/components/cta-block";

export const Route = createFileRoute("/mortgage-expertise")({
  head: () => ({
    meta: [
      { title: "Mortgage Expertise Advantage — Anchorfield" },
      { name: "description", content: "Property advocacy and mortgage broking under one roof. Verified finance, stronger offers, faster settlements, aligned strategy." },
      { property: "og:title", content: "Mortgage Expertise Advantage" },
      { property: "og:description", content: "The structural edge only an in-house finance team can deliver." },
    ],
    links: [{ rel: "canonical", href: "/mortgage-expertise" }],
  }),
  component: Page,
});

const BENEFITS = [
  { n: "01", t: "Stronger Negotiation Leverage", d: "Verified borrowing capacity turns your offer from speculative to bankable in the vendor's eyes." },
  { n: "02", t: "Faster Pre-Approval & Settlement", d: "One team, one timeline. Finance and acquisition move in lockstep instead of two disconnected tracks." },
  { n: "03", t: "Holistic Wealth Strategy", d: "Property selection is aligned with mortgage structuring, tax position, and long-horizon capital planning." },
];

function Page() {
  return (
    <>
      <PageHero picture={heroPicture}
        eyebrow="About / The Advantage"
        chapter="(04) STRUCTURAL EDGE"
        title={<>Property and mortgage, <span className="italic text-copper">one desk.</span></>}
        intro="Anchorfield is the only Australian buyer's advocacy built on a mortgage broking foundation. That structural difference is the client's competitive edge."
      />

      <section className="py-24 border-t border-white/5">
        <div className="container-editorial">
          <SectionHeader eyebrow="Three benefits" title={<>What integration <span className="italic text-copper">unlocks.</span></>} />
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {BENEFITS.map((b) => (
              <div key={b.n} className="bg-midnight p-10">
                <div className="font-mono-brand text-copper text-xs tracking-widest mb-4">{b.n}</div>
                <h3 className="font-display italic text-2xl mb-3">{b.t}</h3>
                <p className="text-paper/60 text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComparisonTable />

      <CtaBlock eyebrow="Free session" title="Book a Finance & Property Strategy call." intro="Experience the integrated advantage in a single conversation." />
    </>
  );
}
