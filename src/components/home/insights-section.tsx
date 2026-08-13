import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    tag: "Market Report",
    date: "Q1 · 2026",
    title: "The Melbourne Volatility Index: what buyers should ignore.",
    read: "8 min read",
    slug: "melbourne-volatility",
  },
  {
    tag: "Investment",
    date: "Feb · 2026",
    title: "Yield vs. growth: choosing the right portfolio thesis.",
    read: "6 min read",
    slug: "yield-vs-growth",
  },
  {
    tag: "First Home",
    date: "Jan · 2026",
    title: "Auction psychology 101: how to hold your nerve.",
    read: "5 min read",
    slug: "auction-psychology",
  },
];

export function InsightsSection() {
  return (
    <section className="py-32 md:py-48">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="(07) Intelligence"
            title={
              <>
                Market <span className="italic text-copper">insights.</span>
              </>
            }
            intro="Quarterly reports and briefings from our research desk. Written for buyers who prefer signal to noise."
          />
          <Link to="/blog" className="link-underline text-eyebrow shrink-0">
            All insights →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink/5 border border-ink/5">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group bg-midnight p-8 lg:p-10 hover:bg-navy transition-colors"
            >
              <div className="flex justify-between items-start mb-16">
                <div className="font-mono-brand text-[10px] tracking-widest uppercase text-ink/50">
                  {p.tag} — {p.date}
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink/30 group-hover:text-copper group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                />
              </div>
              <h3 className="font-display italic text-2xl lg:text-3xl leading-tight mb-8 text-balance group-hover:text-copper transition-colors">
                {p.title}
              </h3>
              <div className="text-xs text-ink/40 uppercase tracking-widest">{p.read}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
