import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ComparisonTable } from "@/components/home/comparison-table";
import { WhyBuyersLose } from "@/components/home/why-buyers-lose";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaBlock } from "@/components/cta-block";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Anchorfield — Financial-Grade Buyer's Advocacy" },
      { name: "description", content: "In-house mortgage expertise. True independence. Data-led negotiation. What genuinely sets Anchorfield apart." },
      { property: "og:title", content: "Why Anchorfield" },
      { property: "og:url", content: "/why-us" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Why Us / The Advantage"
        chapter="(04) THE DIFFERENCE"
        title={<>Why <span className="italic text-copper">Anchorfield.</span></>}
        intro="Three structural advantages that no traditional buyer's agent — or real estate agent — can replicate. Each grounded in verifiable process, not marketing."
      />
      <WhyBuyersLose />
      <ComparisonTable />
      <TestimonialsSection />
      <CtaBlock />
    </>
  ),
});
