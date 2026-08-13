import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import founderImg from "@/assets/founder-portrait.jpg";

const ARC = [
  { k: "Mortgage broker", v: "Seven years structuring finance for Australian buyers." },
  { k: "Saw the problem", v: "Great loans, poor property decisions — again and again." },
  { k: "Recognised the gap", v: "Buyers had finance advice, but no one representing them at the purchase." },
  { k: "Created buyer advocacy", v: "A service that acts only for the buyer, never the vendor." },
  { k: "Built a data-driven service", v: "Analysis, transparency and relationships that reach off-market stock." },
];

export function BrandStory() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <Reveal className="lg:col-span-5">
          <div className="aspect-[3/4] overflow-hidden bg-stone">
            <img
              src={founderImg}
              alt="Portrait of the Anchorfield founder"
              loading="lazy"
              width={1200}
              height={1600}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 font-mono-brand text-[10px] tracking-[0.2em] uppercase text-ink/45">
            Founder · Anchorfield Buyers Agency · Melbourne
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7 lg:pt-6">
          <p className="text-eyebrow mb-6">Our story</p>
          <h2 className="font-display uppercase text-[clamp(2rem,4.4vw,3.4rem)] leading-[0.98]">
            Why Anchorfield exists
          </h2>
          <p className="mt-8 text-lg text-ink/70 leading-relaxed">
            Anchorfield operates nationwide from Melbourne, combining mortgage expertise
            with data, transparency and industry relationships to secure well-considered
            and off-market assets for buyers who want the decision made properly.
          </p>

          <ol className="mt-12 border-t border-ink/10">
            {ARC.map((s, i) => (
              <li
                key={s.k}
                className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-6 border-b border-ink/10"
              >
                <span className="font-mono-brand text-[11px] tracking-widest text-copper pt-1">
                  0{i + 1}
                </span>
                <div className="md:flex md:items-baseline md:gap-8">
                  <h3 className="font-display uppercase text-base md:w-64 shrink-0">{s.k}</h3>
                  <p className="mt-1 md:mt-0 text-sm text-ink/60 leading-relaxed">{s.v}</p>
                </div>
              </li>
            ))}
          </ol>

          <Link to="/meet-the-founder" className="btn-quiet mt-10">
            Meet the founder <ArrowRight size={13} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
