import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import heroPicture from "@/assets/hero-faqs.jpg?hero";
import { heroPreloadLink } from "@/components/hero-image";
import { FaqAccordion } from "@/components/home/faq-accordion";
import { CtaBlock } from "@/components/cta-block";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Anchorfield Buyer's Advocacy" },
      { name: "description", content: "Common questions about engaging Anchorfield, our fees, methodology, and areas of coverage." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
  component: () => (
    <>
      <PageHero picture={heroPicture}
        eyebrow="FAQs / Common questions"
        title={<>Answers, <span className="italic text-copper">plainly.</span></>}
        intro="The most common questions we receive from prospective clients. If your question isn't here, get in touch — we'd rather answer than guess."
      />
      <FaqAccordion />
      <CtaBlock />
    </>
  ),
});
