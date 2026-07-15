import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import heroBg from "@/assets/hero-service-detail.jpg";
import { CtaBlock } from "@/components/cta-block";
import { Check } from "lucide-react";

const SERVICE_DATA: Record<string, {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  overview: string;
  benefits: string[];
  process: { n: string; t: string; d: string }[];
}> = {
  "buyers-advocacy": {
    eyebrow: "Service / 01",
    title: <>Full <span className="italic text-copper">buyers advocacy.</span></>,
    intro: "Our flagship engagement. End-to-end search, evaluation, negotiation, and settlement — with in-house mortgage strategy woven through every stage.",
    overview: "You engage Anchorfield as your sole representative in the property transaction. From the moment we accept your brief, we act exclusively for you — sourcing on- and off-market opportunities, conducting forensic due diligence, negotiating price and terms, and coordinating settlement.",
    benefits: ["Access to on-market, pre-market, and off-market opportunities", "24-point structural, legal, and financial due diligence", "Integrated mortgage strategy — no separate broker delays", "Data-led negotiation and disciplined auction bidding", "End-to-end concierge from brief to keys in hand"],
    process: [
      { n: "01", t: "Strategy Session", d: "Codify goals, budget, timeline, non-negotiables." },
      { n: "02", t: "Finance Alignment", d: "In-house mortgage strategy and pre-approval." },
      { n: "03", t: "Search & Sourcing", d: "Public, pre-market, and off-market channels activated." },
      { n: "04", t: "Due Diligence", d: "Our 24-point forensic review on shortlisted assets." },
      { n: "05", t: "Negotiation", d: "Data-led offer strategy or auction proxy." },
      { n: "06", t: "Settlement", d: "Full concierge to keys and post-purchase support." },
    ],
  },
  "off-market": {
    eyebrow: "Service / 02",
    title: <>Off-market <span className="italic text-copper">search.</span></>,
    intro: "Access the 35–40% of premium Australian stock that trades within private networks before ever reaching a public portal.",
    overview: "Off-market properties are sold discreetly for reasons of privacy, timing, or vendor preference. Our decade-plus of relationships with selling agents, developers, and private networks means we routinely surface opportunities our clients would never encounter alone.",
    benefits: ["Reduced buyer competition and negotiation pressure", "Greater vendor flexibility on price and terms", "Privacy for both buyer and seller", "Access to properties years before listing cycles"],
    process: [
      { n: "01", t: "Detailed Brief", d: "We codify exact criteria — suburbs, price, dwelling type, timeline." },
      { n: "02", t: "Network Activation", d: "Our agent, developer, and private-network relationships are engaged." },
      { n: "03", t: "Curated Shortlist", d: "Only briefs matching your mandate reach you." },
      { n: "04", t: "Discreet Negotiation", d: "Direct engagement with vendor or their representative." },
      { n: "05", t: "Settlement", d: "Full concierge through contract and completion." },
    ],
  },
  "auction-bidding": {
    eyebrow: "Service / 03",
    title: <>Auction <span className="italic text-copper">bidding.</span></>,
    intro: "The auction floor is engineered to break your budget. Our proxy representation replaces adrenaline with discipline.",
    overview: "You've found the property. You've done the work. What you need on the day is a calm, unemotional presence who understands the psychology of the room and will not exceed the ceiling you've set — even when everyone around you does.",
    benefits: ["Pre-auction due diligence and price ceiling modeling", "Strategic bidding psychology on the day", "Post-auction negotiation if property passes in", "No emotional escalation. Ever."],
    process: [
      { n: "01", t: "Pre-Auction Brief", d: "Property research, comparable sales, price ceiling." },
      { n: "02", t: "Strategy Session", d: "Bidding approach agreed with you 48 hours before." },
      { n: "03", t: "Auction Day", d: "We bid on your behalf. You watch, calmly." },
      { n: "04", t: "Post-Auction", d: "Negotiation if passed in, or settlement handover if secured." },
    ],
  },
  "negotiation": {
    eyebrow: "Service / 04",
    title: <>Property <span className="italic text-copper">negotiation.</span></>,
    intro: "You've identified the property. We secure it — at the right price, on the right terms.",
    overview: "Our negotiation engagement is for buyers who've done their own search and want expert representation from the offer stage onward. Verified borrowing capacity, real-time market data, and disciplined tactics deliver measurable savings.",
    benefits: ["Verified pre-approval strengthens offer credibility", "Comparable-sales evidence anchors price discussions", "Multiple-offer, pre-auction, and silent-sale strategies", "Typical savings materially exceed engagement fee"],
    process: [
      { n: "01", t: "Property Review", d: "We assess the asset, comparable sales, and vendor motivation." },
      { n: "02", t: "Offer Strategy", d: "Price, terms, conditions, and timing sequenced." },
      { n: "03", t: "Direct Engagement", d: "We negotiate with the selling agent on your behalf." },
      { n: "04", t: "Contract", d: "Secured and coordinated through to exchange." },
    ],
  },
  "investment-advisory": {
    eyebrow: "Service / 05",
    title: <>Investment <span className="italic text-copper">advisory.</span></>,
    intro: "Property investment treated as portfolio construction, not transaction. Data-led, mortgage-aligned, and cycle-aware.",
    overview: "We work with investors building long-term residential wealth. Every acquisition is stress-tested against lending scenarios, cashflow modeling, growth-corridor data, and rebalancing needs — never chosen for aesthetic appeal.",
    benefits: ["Growth-corridor and yield-optimised asset selection", "Cashflow, tax, and equity-release modeling", "Integrated mortgage structuring across the portfolio", "Independent — no developer commissions, ever"],
    process: [
      { n: "01", t: "Strategy Session", d: "Portfolio goals, risk tolerance, time horizon." },
      { n: "02", t: "Financial Review", d: "Borrowing capacity and structure across all lenders." },
      { n: "03", t: "Research", d: "Suburb and asset-level analysis for the mandate." },
      { n: "04", t: "Acquisition", d: "Sourcing, due diligence, and negotiation." },
      { n: "05", t: "Portfolio Review", d: "Ongoing rebalancing and equity-release planning." },
    ],
  },
  "portfolio-strategy": {
    eyebrow: "Service / 06",
    title: <>Portfolio <span className="italic text-copper">strategy.</span></>,
    intro: "For established investors scaling from a single asset to a genuine portfolio. Strategic, structured, and mortgage-aware.",
    overview: "Portfolio strategy is a higher-order engagement for clients holding two or more investment properties and planning to scale. We treat your holdings as an integrated capital structure, not a collection of transactions.",
    benefits: ["Portfolio-wide loan structuring and equity release planning", "Cross-state diversification modeling", "Yield vs. growth rebalancing", "Long-horizon capital planning"],
    process: [
      { n: "01", t: "Portfolio Audit", d: "Every asset, every loan, every rent roll assessed." },
      { n: "02", t: "Strategic Plan", d: "12–24 month acquisition and rebalancing roadmap." },
      { n: "03", t: "Execution", d: "Sequenced acquisitions with mortgage discipline." },
      { n: "04", t: "Review Cadence", d: "Quarterly portfolio reviews as conditions shift." },
    ],
  },
  "property-research": {
    eyebrow: "Service / 07",
    title: <>Property <span className="italic text-copper">research.</span></>,
    intro: "Institutional-grade research on suburbs and individual assets. Data over anecdote, evidence over enthusiasm.",
    overview: "Our research engagement delivers a full written report on a suburb, a corridor, or a specific property — combining capital growth history, rental yield trends, infrastructure pipeline, and risk assessment.",
    benefits: ["Capital growth history and forward projections", "Vacancy rates and rental yield analysis", "Comparable sales and negotiation evidence", "Infrastructure and development pipeline mapping"],
    process: [
      { n: "01", t: "Brief", d: "Suburb, property, or portfolio-level scope agreed." },
      { n: "02", t: "Data Collection", d: "Public records, private data, network intelligence." },
      { n: "03", t: "Analysis", d: "Modeling against your specific criteria and goals." },
      { n: "04", t: "Delivery", d: "Written report and consultation on findings." },
    ],
  },
  "due-diligence": {
    eyebrow: "Service / 08",
    title: <>Due <span className="italic text-copper">diligence.</span></>,
    intro: "Our 24-point forensic checklist — structural, legal, and financial — protects against the seven-figure mistakes buyers routinely make.",
    overview: "Standard building and pest inspections are a minimum, not a discipline. Our due diligence engagement adds title verification, zoning and overlay analysis, comparable-sales modeling, and cashflow feasibility.",
    benefits: ["Structural, pest, and building integrity coordination", "Legal, title, easement, and covenant verification", "Zoning, flood, and bushfire overlay analysis", "Market value benchmarking with comparable sales"],
    process: [
      { n: "01", t: "Property Nomination", d: "You identify the property; we deploy the checklist." },
      { n: "02", t: "Investigation", d: "24 points across three disciplines assessed." },
      { n: "03", t: "Report", d: "Plain-English findings with risk-rated recommendations." },
      { n: "04", t: "Advisory", d: "Negotiation or walk-away guidance based on findings." },
    ],
  },
  "first-home-buyers": {
    eyebrow: "Service / 09",
    title: <>First home <span className="italic text-copper">buyers.</span></>,
    intro: "Your first property is the most consequential financial decision of your life. We approach it with the seriousness it deserves.",
    overview: "First-home buyers need more than a transaction — they need education, grant navigation, mortgage clarity, and a calm presence in a process designed to overwhelm. Anchorfield delivers all four.",
    benefits: ["Grant and stamp-duty concession navigation", "Integrated mortgage strategy and pre-approval", "Property education throughout the process", "Discipline against emotional buying and auction pressure"],
    process: [
      { n: "01", t: "Discovery", d: "Goals, borrowing capacity, and grant eligibility mapped." },
      { n: "02", t: "Finance", d: "Mortgage strategy and pre-approval structured." },
      { n: "03", t: "Search", d: "Suburbs and properties matched to your brief." },
      { n: "04", t: "Purchase", d: "Negotiation or auction bidding on your behalf." },
      { n: "05", t: "Settlement", d: "Full concierge through to move-in day." },
    ],
  },
  "interstate": {
    eyebrow: "Service / 10",
    title: <>Interstate <span className="italic text-copper">buyers.</span></>,
    intro: "Buy confidently in Melbourne, Sydney, Brisbane, or Perth — from anywhere in Australia. Local intelligence, remote convenience.",
    overview: "Interstate buyers face a unique disadvantage: unfamiliar suburbs, different state laws, and the inability to inspect in person. Our national coverage and video-first process turn that disadvantage into an asset.",
    benefits: ["Local suburb intelligence in every major metro", "Video walkthroughs and remote inspections", "State-specific stamp duty and contract expertise", "Single point of contact from brief to settlement"],
    process: [
      { n: "01", t: "Video Strategy Call", d: "Goals, target state, and mandate agreed remotely." },
      { n: "02", t: "Sourcing", d: "Curated shortlist with video and detailed briefs." },
      { n: "03", t: "Inspection", d: "In-person inspection and local intelligence report." },
      { n: "04", t: "Negotiation", d: "Bidding or negotiation on your behalf." },
      { n: "05", t: "Settlement", d: "Coordinated through to handover." },
    ],
  },
  "expats": {
    eyebrow: "Service / 11",
    title: <>Expat <span className="italic text-copper">buyers.</span></>,
    intro: "Australian property for Australians abroad. Foreign-income mortgages, FIRB navigation, and time-zone-friendly service.",
    overview: "Buying Australian property while living overseas creates specific challenges: foreign-income lending, FIRB obligations for non-residents, and coordinating around global time zones. We do this every week.",
    benefits: ["Foreign-income mortgage structuring", "FIRB guidance where applicable", "Video walkthroughs and detailed remote reports", "Flexible scheduling across time zones"],
    process: [
      { n: "01", t: "Video Discovery", d: "Timezone-friendly strategy call to codify your brief." },
      { n: "02", t: "Finance Structure", d: "Expat-lender mortgage strategy and pre-approval." },
      { n: "03", t: "Sourcing", d: "Curated properties with detailed video and analysis." },
      { n: "04", t: "Purchase", d: "Negotiation, bidding, and contracts handled here." },
      { n: "05", t: "Settlement", d: "Property management handover on completion." },
    ],
  },
  "smsf": {
    eyebrow: "Service / 12",
    title: <>SMSF <span className="italic text-copper">property.</span></>,
    intro: "Compliant, growth-focused acquisition inside your self-managed super fund. Sole-purpose test, related-party rules, and lending navigated end-to-end.",
    overview: "SMSF property purchases are among the most rules-bound transactions in Australian real estate. Our dual mortgage and property expertise ensures both compliance and long-term growth outcomes.",
    benefits: ["Sole-purpose test and related-party compliance", "SMSF-specific lender navigation", "Investment-grade asset selection for super", "Coordination with your accountant and financial planner"],
    process: [
      { n: "01", t: "Strategy Session", d: "Fund structure, goals, and eligibility mapped." },
      { n: "02", t: "Finance", d: "SMSF lender strategy and pre-approval." },
      { n: "03", t: "Sourcing", d: "Compliant investment-grade properties only." },
      { n: "04", t: "Due Diligence", d: "Compliance-verified across every dimension." },
      { n: "05", t: "Settlement", d: "Coordinated with fund trustees and advisors." },
    ],
  },
  "vendor-advocacy": {
    eyebrow: "Service / 13",
    title: <>Vendor <span className="italic text-copper">advocacy.</span></>,
    intro: "Sell with the same institutional discipline we apply to buying. Expert negotiation, right-sized campaign, maximum price.",
    overview: "Selling agents want to sell your property quickly, not necessarily for the highest possible price. Our vendor advocacy service represents you against the agent — selecting them, briefing them, and managing the campaign to your outcome, not theirs.",
    benefits: ["Independent agent selection and briefing", "Campaign structure and marketing oversight", "Buyer-side negotiation on your behalf", "No conflicts — we work only for you"],
    process: [
      { n: "01", t: "Appraisal", d: "Independent valuation and campaign scope agreed." },
      { n: "02", t: "Agent Selection", d: "Best-fit selling agent identified and briefed." },
      { n: "03", t: "Campaign Oversight", d: "Marketing, inspections, and buyer management monitored." },
      { n: "04", t: "Negotiation", d: "Direct buyer negotiation for maximum outcome." },
      { n: "05", t: "Settlement", d: "Coordinated through to completion." },
    ],
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const data = SERVICE_DATA[params.slug];
    if (!data) throw notFound();
    return { data, slug: params.slug };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    const plain = typeof loaderData.data.title === "string" ? loaderData.data.title : params.slug;
    return {
      meta: [
        { title: `${plain} — Anchorfield` },
        { name: "description", content: loaderData.data.intro },
        { property: "og:title", content: `Anchorfield — ${params.slug}` },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="min-h-dvh pt-40 container-editorial">
      <div className="text-eyebrow mb-4">404</div>
      <h1 className="font-display italic text-6xl mb-6">Service not found.</h1>
      <Link to="/services" className="link-underline text-eyebrow">Back to services</Link>
    </div>
  ),
});

function ServiceDetail() {
  const { data } = Route.useLoaderData();
  return (
    <>
      <PageHero backgroundImage={heroBg} eyebrow={data.eyebrow} title={data.title} intro={data.intro} />

      <section className="py-24 border-t border-white/5">
        <div className="container-editorial grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="text-eyebrow mb-6">Overview</div>
            <p className="font-display italic text-2xl md:text-3xl leading-tight text-balance">
              {data.overview.split(".")[0]}.
            </p>
          </div>
          <div className="lg:col-span-7 text-lg text-paper/70 leading-relaxed">
            <p>{data.overview}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy/30 border-y border-white/5">
        <div className="container-editorial grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="text-eyebrow mb-6">Client benefits</div>
            <h2 className="font-display italic text-4xl md:text-5xl leading-[1.05]">
              What you get.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {data.benefits.map((b: string, i: number) => (
              <div key={i} className="flex items-start gap-4 py-5 border-b border-white/10">
                <Check size={18} className="text-copper shrink-0 mt-1" />
                <span className="text-lg text-paper/85">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-editorial">
          <div className="text-eyebrow mb-6">Engagement</div>
          <h2 className="font-display italic text-4xl md:text-5xl leading-[1.05] mb-16">
            How it works.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {data.process.map((p: {n: string; t: string; d: string}) => (
              <div key={p.n} className="bg-midnight p-8">
                <div className="font-mono-brand text-copper text-xs mb-6">STEP {p.n}</div>
                <h3 className="font-display italic text-2xl mb-3">{p.t}</h3>
                <p className="text-paper/60 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
