import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/hero-section";
import { StatsRibbon } from "@/components/home/stats-ribbon";
import { TrustStrip } from "@/components/home/trust-strip";
import { WhyBuyersLose } from "@/components/home/why-buyers-lose";
import { ServicesGrid } from "@/components/home/services-grid";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { ComparisonTable } from "@/components/home/comparison-table";
import { FeaturedAreas } from "@/components/home/featured-areas";
import { FounderSection } from "@/components/home/founder-section";
import { InsightsSection } from "@/components/home/insights-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FaqAccordion } from "@/components/home/faq-accordion";
import { CtaBlock } from "@/components/cta-block";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <StatsRibbon />
      <TrustStrip />
      <WhyBuyersLose />
      <ServicesGrid />
      <ProcessTimeline />
      <ComparisonTable />
      <FeaturedAreas />
      <FounderSection />
      <InsightsSection />
      <TestimonialsSection />
      <FaqAccordion />
      <CtaBlock />
    </>
  );
}
