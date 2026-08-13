import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BrandLine } from "@/components/brand-line";

export function Differentiator() {
  return (
    <section className="relative py-24 md:py-36 bg-stone border-y border-ink/10 overflow-hidden">
      <BrandLine className="pointer-events-none absolute inset-x-0 top-10 w-full h-24 opacity-70" />
      <div className="container-editorial relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-7">
            <p className="text-eyebrow mb-8">The difference</p>
            <h2 className="font-display uppercase text-[clamp(2.1rem,5.2vw,4.5rem)] leading-[0.95] text-balance">
              The bank gives you the money.
              <br />
              <span className="text-copper">Anchorfield</span> gives you the strategy.
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:pt-6">
            <p className="text-lg text-ink/70 leading-relaxed">
              Anchorfield was founded by a mortgage broker of seven years who watched the
              same pattern repeat: clients secured excellent finance, then entered the
              property market with no strategy and no protection.
            </p>
            <p className="mt-6 text-ink/60 leading-relaxed">
              Approval is only half the decision. The other half — what you buy, what you
              pay and how it performs — is where capital is made or lost. That gap is the
              reason Anchorfield exists.
            </p>
            <Link to="/buying-philosophy" className="btn-quiet mt-10">
              Discover Our Approach <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
