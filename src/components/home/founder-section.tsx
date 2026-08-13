import founderImg from "@/assets/founder-portrait.jpg";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-32 md:py-48 bg-navy/40 border-y border-ink/10">
      <div className="container-editorial grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={founderImg}
              alt="Anchorfield founder"
              loading="lazy"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-copper/20" />
            <div className="absolute bottom-6 left-6 font-mono-brand text-[10px] tracking-widest text-ink/70 uppercase">
              James Sterling · Founder
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="text-eyebrow mb-6">(06) The Foundation</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl italic leading-[1.05] mb-10">
            "Property is a financial instrument. We treat it as such."
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-ink/70 leading-relaxed">
            <p>
              Anchorfield was founded to close the gap between finance and real estate.
              Its principal spent over a decade structuring complex mortgages for
              high-net-worth Australians — watching, again and again, as excellent loan
              terms were destroyed by poor property decisions.
            </p>
            <p>
              We don't just find houses. We secure long-term capital stability through
              a discipline of risk mitigation, market-cycle awareness, and negotiation
              backed by verified borrowing capacity.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-end justify-between gap-8 pt-10 border-t border-ink/10">
            <div className="flex gap-10">
              <div>
                <div className="font-display text-4xl italic text-copper">15+</div>
                <div className="text-[10px] uppercase tracking-widest text-ink/50 mt-1">
                  Years experience
                </div>
              </div>
              <div>
                <div className="font-display text-4xl italic text-copper">$850M</div>
                <div className="text-[10px] uppercase tracking-widest text-ink/50 mt-1">
                  Advised
                </div>
              </div>
              <div>
                <div className="font-display text-4xl italic text-copper">400+</div>
                <div className="text-[10px] uppercase tracking-widest text-ink/50 mt-1">
                  Families served
                </div>
              </div>
            </div>
            <Link to="/about" className="link-underline text-eyebrow flex items-center gap-2">
              Meet the founder <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
