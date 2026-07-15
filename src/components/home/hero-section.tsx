import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-melbourne.jpg";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-dvh flex items-end overflow-hidden pt-32 pb-16">
      {/* Backdrop imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Melbourne skyline at dusk"
          fetchPriority="high"
          className="w-full h-full object-cover scale-105 brightness-125 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/55 via-midnight/35 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/70 via-transparent to-transparent" />
      </div>

      <div className="container-editorial relative z-10 grid lg:grid-cols-12 gap-8 items-end">
        {/* Left: Chapter mark + headline */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-8 animate-fade">
            <div className="w-px h-16 bg-copper animate-line-draw" />
            <div>
              <div className="text-eyebrow">Est. 2024 — Melbourne</div>
              <div className="font-mono-brand text-[10px] text-paper/40 tracking-widest mt-1">
                CHAPTER 01 / THE PREMISE
              </div>
            </div>
          </div>

          <h1 className="font-display text-[clamp(3rem,9vw,9.5rem)] leading-[0.92] tracking-tight text-balance animate-reveal">
            Property, <br />
            <span className="italic text-paper/70">acquired</span>{" "}
            <span className="italic text-copper">intelligently.</span>
          </h1>

          <p className="mt-10 text-lg md:text-xl text-paper/70 max-w-xl leading-relaxed animate-reveal [animation-delay:200ms]">
            Anchorfield is Australia's next-generation buyer's advocacy — combining
            institutional mortgage expertise with disciplined property acquisition.
            No emotion. No conflicts. Just financial intelligence.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 animate-reveal [animation-delay:400ms]">
            <Link to="/contact" className="btn-primary">
              Book Consultation <ArrowRight size={14} />
            </Link>
            <a href="tel:1300000000" className="btn-ghost">
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>

        {/* Right: Meta card */}
        <aside className="lg:col-span-4 animate-reveal [animation-delay:600ms]">
          <div className="glass-panel rounded-sm p-8">
            <div className="text-eyebrow mb-4">Client Brief</div>
            <p className="font-display italic text-2xl leading-snug mb-6 text-balance">
              "Property buying should be driven by financial intelligence, not emotion."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-copper" />
              <span className="text-xs text-paper/60 uppercase tracking-widest">
                The Anchorfield Doctrine
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
