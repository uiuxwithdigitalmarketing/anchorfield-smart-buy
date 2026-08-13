import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import personaImg from "@/assets/af-persona.jpg";

export function PersonaSection() {
  return (
    <section className="py-24 md:py-36 bg-taupe/20 border-y border-ink/10">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <h2 className="font-display uppercase text-[clamp(1.9rem,4.2vw,3.25rem)] leading-[0.98] text-balance">
            Your weekends are valuable.
            <br />
            <span className="text-copper">Your capital is even more valuable.</span>
          </h2>
          <p className="mt-8 text-lg text-ink/70 leading-relaxed max-w-lg">
            Anchorfield takes the research, inspections, analysis and negotiations off your
            shoulders so you can make the right decision without spending every weekend
            chasing property.
          </p>
          <Link to="/contact" className="btn-quiet mt-10">
            Take Back Your Time <ArrowRight size={13} />
          </Link>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6 order-1 lg:order-2">
          <div className="aspect-[7/5] overflow-hidden bg-background">
            <img
              src={personaImg}
              alt="A couple reviewing property documents at their kitchen table in morning light"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
