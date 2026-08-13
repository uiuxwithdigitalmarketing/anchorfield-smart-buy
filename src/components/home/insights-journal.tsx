import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const ENTRIES = [
  {
    kicker: "Property teardown",
    title: "What did this property really sell for — and was it worth it?",
    body: "We break down a recent sale: purchase price, rental yield, holding costs and whether the buyer overpaid.",
    slug: "melbourne-volatility",
  },
  {
    kicker: "Borrowing reality",
    title: "Pre-approval is not affordability.",
    body: "How serviceability buffers, loan structure and cash flow change what you can actually sustain.",
    slug: "yield-vs-growth",
  },
  {
    kicker: "Market insight",
    title: "Reading a competitive campaign without the noise.",
    body: "Quoting ranges, comparable evidence and the signals that tell you where a property will actually land.",
    slug: "auction-psychology",
  },
];

export function InsightsJournal() {
  return (
    <section className="py-24 md:py-36 bg-stone border-y border-ink/10">
      <div className="container-editorial">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-eyebrow mb-6">Precision buying · The journal</p>
            <h2 className="font-display uppercase text-[clamp(2rem,4.4vw,3.4rem)] leading-[0.98]">
              Property teardowns
            </h2>
          </div>
          <Link to="/blog" className="btn-quiet">
            All insights <ArrowRight size={13} />
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {ENTRIES.map((e, i) => (
            <Reveal key={e.slug} delay={i * 100} className="bg-background">
              <Link
                to="/blog/$slug"
                params={{ slug: e.slug }}
                className="group block p-8 lg:p-10 h-full"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono-brand text-[10px] tracking-[0.2em] uppercase text-copper">
                    {e.kicker}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-ink/30 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-copper"
                  />
                </div>
                <h3 className="mt-14 font-editorial text-2xl leading-snug text-balance">
                  {e.title}
                </h3>
                <p className="mt-4 text-sm text-ink/60 leading-relaxed">{e.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
