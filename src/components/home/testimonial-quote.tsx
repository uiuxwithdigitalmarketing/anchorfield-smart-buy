import { Reveal } from "@/components/reveal";
import { BrandLine } from "@/components/brand-line";

export function TestimonialQuote() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <BrandLine className="pointer-events-none absolute inset-x-0 bottom-16 w-full h-20 opacity-60" />
      <div className="container-editorial relative">
        <Reveal className="max-w-4xl">
          <p className="text-eyebrow mb-10">Client perspective</p>
          <blockquote className="font-editorial text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.15] text-balance">
            "The biggest difference was having someone on our side who understood both the
            property and the numbers."
          </blockquote>
          <footer className="mt-10 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-ink/50">
            <span>Client name</span>
            <span className="w-6 h-px bg-copper" />
            <span>Suburb · Buyer type</span>
          </footer>
          <p className="mt-8 text-xs text-ink/40">
            Placeholder testimonial — to be replaced with verified client feedback.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
