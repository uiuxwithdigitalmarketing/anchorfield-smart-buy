import type { ReactNode } from "react";
import defaultBg from "@/assets/hero-architecture.jpg";

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  chapter?: string;
  backgroundImage?: string;
  imageAlt?: string;
  imagePosition?: string;
}

export function PageHero({
  eyebrow,
  title,
  intro,
  chapter,
  backgroundImage = defaultBg,
  imageAlt = "",
  imagePosition = "center",
}: Props) {
  return (
    <section className="relative pt-36 lg:pt-44 pb-0 bg-navy/60 border-b border-ink/10">
      <div className="container-editorial">
        <div className="flex items-center gap-4 mb-8 animate-fade">
          <div className="w-8 h-px bg-copper" />
          <span className="text-eyebrow">{eyebrow}</span>
          {chapter && (
            <span className="ml-auto font-mono-brand text-[10px] text-ink/40 tracking-widest">
              {chapter}
            </span>
          )}
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] leading-[1] tracking-tight text-balance max-w-5xl animate-reveal">
          {title}
        </h1>

        {intro && (
          <p className="mt-8 text-lg md:text-xl text-ink/65 max-w-2xl leading-relaxed text-pretty animate-reveal [animation-delay:150ms]">
            {intro}
          </p>
        )}

        <div className="mt-14 lg:mt-20 relative aspect-[16/7] overflow-hidden animate-fade">
          <img
            src={backgroundImage}
            alt={imageAlt}
            aria-hidden={imageAlt === "" ? "true" : undefined}
            width={1920}
            height={840}
            loading="eager"
            className="w-full h-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>
      </div>
    </section>
  );
}
