import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BrandLine } from "@/components/brand-line";
import ctaImg from "@/assets/architecture-detail.jpg";

export function FinalCta() {
  return (
    <section className="border-t border-ink/10 bg-stone">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-20 items-center py-24 md:py-36">
        <Reveal className="lg:col-span-6">
          <p className="text-eyebrow mb-6">Begin</p>
          <h2 className="font-display uppercase text-[clamp(2.1rem,5vw,4rem)] leading-[0.95] text-balance">
            Ready to buy with confidence?
          </h2>
          <p className="mt-8 text-lg text-ink/70 leading-relaxed max-w-lg">
            Let's build a smarter property strategy around your goals, your borrowing
            capacity and your long-term future.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link to="/contact" className="btn-primary">
              Book a Consultation <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-quiet">
              Talk to Anchorfield <ArrowRight size={13} />
            </Link>
          </div>
          <BrandLine className="mt-14 w-full max-w-md h-12" />
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6">
          <div className="aspect-[5/4] overflow-hidden bg-background">
            <img
              src={ctaImg}
              alt="Architectural detail of a contemporary Australian residence"
              loading="lazy"
              width={1400}
              height={1120}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
