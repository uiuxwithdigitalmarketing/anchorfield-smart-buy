import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-melbourne.jpg";

export function HeroSection() {
  return (
    <section className="relative isolate pt-32 lg:pt-40 pb-0 overflow-hidden">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Copy */}
          <div className="lg:col-span-7 pb-8 lg:pb-24">
            <div className="flex items-center gap-4 mb-8 animate-fade">
              <div className="w-8 h-px bg-copper" />
              <div className="text-eyebrow">Built on trust, backed by insight</div>
            </div>

            <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98] tracking-tight text-balance animate-reveal">
              Property, <br />
              acquired{" "}
              <span className="italic text-copper">intelligently.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-ink/65 max-w-xl leading-relaxed animate-reveal [animation-delay:150ms]">
              Anchorfield is Australia's financial-grade buyer's advocacy — combining
              seven years of mortgage expertise with disciplined property acquisition.
              No emotion. No conflicts. Just the numbers.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-reveal [animation-delay:300ms]">
              <Link to="/contact" className="btn-primary">
                Book Consultation <ArrowRight size={14} />
              </Link>
              <a href="tel:1300000000" className="btn-ghost">
                <Phone size={14} /> Call Now
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-ink/10 pt-8 animate-reveal [animation-delay:450ms]">
              {[
                { v: "7 yrs", l: "Mortgage broking" },
                { v: "30%", l: "Stock never listed" },
                { v: "$1.2B+", l: "Assets advised" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl md:text-3xl text-copper">{s.v}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink/45">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Imagery */}
          <div className="lg:col-span-5 relative animate-fade">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={heroImage}
                alt="Premium Australian residential architecture at dusk"
                fetchPriority="high"
                width={1200}
                height={1500}
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-4 font-mono-brand text-[10px] tracking-widest text-ink/40 uppercase">
              Melbourne — Sydney — Brisbane
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
