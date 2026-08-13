import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import insiderImg from "@/assets/af-insider.jpg";

export function InsiderAccess() {
  return (
    <section className="py-24 md:py-36 bg-stone border-y border-ink/10">
      <div className="container-editorial">
        <Reveal className="relative aspect-[16/10] sm:aspect-[16/8] overflow-hidden bg-background">
          <img
            src={insiderImg}
            alt="Warm rendered townhouse facade in golden afternoon light"
            loading="lazy"
            width={1600}
            height={1008}
            className="w-full h-full object-cover"
          />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mt-14">
          <Reveal className="lg:col-span-7">
            <p className="text-eyebrow mb-6">Insider access</p>
            <h2 className="font-display uppercase text-[clamp(1.9rem,4.2vw,3.25rem)] leading-[0.98] text-balance">
              Some of the best opportunities never reach the public market.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-lg text-ink/65 leading-relaxed">
              Anchorfield leverages deep industry relationships to identify properties
              before they become crowded public listings — giving you time to assess,
              model and negotiate without an auction clock running.
            </p>
            <Link to="/buying-philosophy" className="btn-quiet mt-8">
              Explore Our Property Strategy <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
