import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/hero-section";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { MarketShift } from "@/components/home/market-shift";
import { Differentiator } from "@/components/home/differentiator";
import { Principles } from "@/components/home/principles";
import { ServicesInteractive } from "@/components/home/services-interactive";
import { PrecisionBuying } from "@/components/home/precision-buying";
import { InsiderAccess } from "@/components/home/insider-access";
import { ProcessEditorial } from "@/components/home/process-editorial";
import { PersonaSection } from "@/components/home/persona-section";
import { BrandStory } from "@/components/home/brand-story";
import { InsightsJournal } from "@/components/home/insights-journal";
import { TestimonialQuote } from "@/components/home/testimonial-quote";
import { FinalCta } from "@/components/home/final-cta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anchorfield Buyers Agency — Buy Property With Clarity, Not Emotion" },
      {
        name: "description",
        content:
          "Anchorfield is an Australian buyers agency combining mortgage expertise, off-market access and data-led analysis to protect your capital.",
      },
      { property: "og:title", content: "Anchorfield Buyers Agency — Property Advocacy, Australia" },
      {
        property: "og:description",
        content:
          "Strategic property acquisition backed by financial expertise, market insight and uncompromising buyer advocacy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <MarketShift />
      <Differentiator />
      <Principles />
      <ServicesInteractive />
      <PrecisionBuying />
      <InsiderAccess />
      <ProcessEditorial />
      <PersonaSection />
      <BrandStory />
      <InsightsJournal />
      <TestimonialQuote />
      <FinalCta />
    </>
  );
}
