import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import ctaImage from "@/assets/cta-aerial.jpg";

interface Props {
  eyebrow?: string;
  title?: string;
  intro?: string;
}

export function CtaBlock({
  eyebrow = "Begin",
  title = "Secure your financial future.",
  intro = "Book a private, no-obligation strategy call. We'll unpack your goals, benchmark your budget, and outline the disciplined path to acquisition.",
}: Props) {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={ctaImage}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.14] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>
      <div className="container-editorial text-center">
        <div className="text-eyebrow mb-8">{eyebrow}</div>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight text-balance mb-8">
          {title.split(" ").map((w, i, arr) =>
            i === arr.length - 2 ? <span key={i} className="italic text-copper">{w} </span> : w + " "
          )}
        </h2>
        <p className="text-xl text-ink/65 max-w-xl mx-auto leading-relaxed mb-12">
          {intro}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-primary">
            Book Strategy Call <ArrowRight size={14} />
          </Link>
          <a href="tel:1300000000" className="btn-ghost">
            <Phone size={14} /> 1300 ANCHOR
          </a>
        </div>
      </div>
    </section>
  );
}
