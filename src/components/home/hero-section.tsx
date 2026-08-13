import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/af-hero-home.jpg";
import { BrandLine } from "@/components/brand-line";

export function HeroSection() {
  return (
    <section className="relative isolate pt-32 lg:pt-40 pb-16 lg:pb-24">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            <p className="font-mono-brand text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-ink/55 animate-fade">
              Buyer Advocacy <span className="text-copper">•</span> Property Strategy{" "}
              <span className="text-copper">•</span> Financial Precision
            </p>

            <h1 className="mt-7 font-display text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[0.95] uppercase text-balance animate-reveal">
              Buy property with
              <br />
              clarity,{" "}
              <span className="font-editorial italic lowercase font-normal normal-case tracking-normal text-copper">
                not emotion.
              </span>
            </h1>

            <p className="mt-8 text-base md:text-lg text-ink/65 max-w-lg leading-relaxed animate-reveal [animation-delay:150ms]">
              Strategic property acquisition backed by financial expertise, market insight
              and uncompromising buyer advocacy.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8 animate-reveal [animation-delay:300ms]">
              <Link to="/contact" className="btn-primary">
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link to="/process" className="btn-quiet">
                How We Work <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Imagery */}
          <div className="lg:col-span-6 relative animate-fade">
            <div className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] overflow-hidden bg-stone">
              <img
                src={heroImage}
                alt="Contemporary Australian home with brick and timber facade in natural daylight"
                fetchPriority="high"
                width={1200}
                height={1504}
                className="w-full h-full object-cover"
              />
            </div>
            <BrandLine className="pointer-events-none absolute -bottom-6 -left-6 w-[70%] h-16 hidden sm:block" />
            <p className="mt-4 font-mono-brand text-[10px] tracking-[0.2em] text-ink/40 uppercase">
              Melbourne · Nationwide advocacy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
