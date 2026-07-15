import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { ComparisonTable } from "@/components/home/comparison-table";
import { CtaBlock } from "@/components/cta-block";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Anchorfield" },
      { name: "description", content: "A six-stage acquisition protocol — discovery, finance, search, inspection, negotiation, settlement." },
      { property: "og:title", content: "Anchorfield — Our Process" },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Process / Methodology"
        chapter="(03) HOW WE WORK"
        title={<>A disciplined <span className="italic text-copper">acquisition</span> protocol.</>}
        intro="Every engagement follows the same six-stage framework — refined across hundreds of transactions and adapted to each client's specific mandate."
      />
      <ProcessTimeline />
      <ComparisonTable />
      <CtaBlock />
    </>
  ),
});
