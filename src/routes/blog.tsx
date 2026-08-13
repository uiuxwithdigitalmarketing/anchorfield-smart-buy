import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import heroBg from "@/assets/hero-blog.jpg";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  { slug: "melbourne-volatility", tag: "Market Report", date: "Q1 · 2026", title: "The Melbourne Volatility Index: what buyers should ignore.", excerpt: "Not every headline is signal. A framework for separating meaningful market movement from noise designed to sell news, not property.", read: "8 min" },
  { slug: "yield-vs-growth", tag: "Investment", date: "Feb · 2026", title: "Yield vs. growth: choosing the right portfolio thesis.", excerpt: "The perennial investor question, answered with data rather than dogma. Why the correct answer depends on your capital timeline.", read: "6 min" },
  { slug: "auction-psychology", tag: "First Home", date: "Jan · 2026", title: "Auction psychology 101: how to hold your nerve.", excerpt: "The auction floor is engineered environment. Understanding the design is the first step to not being its subject.", read: "5 min" },
  { slug: "off-market-guide", tag: "Guide", date: "Dec · 2025", title: "The complete guide to Australia's off-market property economy.", excerpt: "40% of premium stock never lists publicly. How the private market actually works, and how buyers can access it.", read: "12 min" },
  { slug: "first-home-checklist", tag: "First Home", date: "Nov · 2025", title: "The 24-point pre-purchase checklist every first home buyer should run.", excerpt: "A structured checklist covering finance, property, legal, and post-settlement considerations. Print, save, use.", read: "9 min" },
  { slug: "smsf-property", tag: "SMSF", date: "Oct · 2025", title: "SMSF property buying: rules, opportunities, and common mistakes.", excerpt: "A plain-English overview of the rules, the opportunities, and the seven-figure mistakes we see most frequently.", read: "10 min" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Anchorfield Market Reports & Guides" },
      { name: "description", content: "Quarterly market reports, investment analysis, and practical guides from Australia's financial-grade buyer's advocacy." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <>
      <PageHero backgroundImage={heroBg}
        eyebrow="Insights / Journal"
        chapter="(07) INTELLIGENCE"
        title={<>The Anchorfield <span className="italic text-copper">journal.</span></>}
        intro="Market reports, buyer briefings, and guides. Written for readers who prefer signal to noise."
      />
      <section className="pb-24">
        <div className="container-editorial grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/5 border-y border-x border-ink/5">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group bg-midnight p-10 hover:bg-navy transition-colors flex flex-col justify-between min-h-[380px]"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="font-mono-brand text-[10px] tracking-widest uppercase text-ink/50">
                    {p.tag} — {p.date}
                  </div>
                  <ArrowUpRight size={18} className="text-ink/30 group-hover:text-copper group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-display italic text-2xl md:text-3xl leading-tight mb-6 text-balance group-hover:text-copper transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed line-clamp-3">{p.excerpt}</p>
              </div>
              <div className="text-xs text-ink/40 uppercase tracking-widest mt-8 pt-6 border-t border-ink/10">
                {p.read} read
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),
});
