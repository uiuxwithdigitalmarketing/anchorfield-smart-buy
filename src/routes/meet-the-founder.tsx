import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import heroBg from "@/assets/hero-founder-bg.jpg";
import { FounderSection } from "@/components/home/founder-section";
import { CtaBlock } from "@/components/cta-block";

export const Route = createFileRoute("/meet-the-founder")({
  head: () => ({
    meta: [
      { title: "Meet the Founder — Anchorfield" },
      { name: "description", content: "Meet the founder of Anchorfield — a mortgage broker turned buyer's advocate on a mission to bring financial intelligence to Australian property." },
      { property: "og:title", content: "Meet the Founder — Anchorfield" },
      { property: "og:description", content: "Mortgage broker turned buyer's advocate. The story behind Anchorfield." },
    ],
    links: [{ rel: "canonical", href: "/meet-the-founder" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero backgroundImage={heroBg}
        eyebrow="About / Founder"
        chapter="(01) THE PRINCIPAL"
        title={<>A mortgage broker who <span className="italic text-copper">refused to sell.</span></>}
        intro="After a decade structuring finance for Australian buyers, the founder built Anchorfield to represent the one voice missing from every transaction — the buyer's."
      />
      <FounderSection />
      <CtaBlock eyebrow="Speak directly" title="Book a call with the founder." intro="Every discovery call is taken personally. No junior staff, no sales scripts." />
    </>
  );
}
