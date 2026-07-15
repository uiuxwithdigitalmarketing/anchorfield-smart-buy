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
    <section className="relative isolate pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
      {/* Background image + cinematic overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={imageAlt}
          aria-hidden={imageAlt === "" ? "true" : undefined}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
        />
        {/* Subtle vertical fade — keeps text readable without hiding the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/55 via-midnight/30 to-midnight/85" />
        {/* Left vignette holds copy against imagery */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-midnight/20 to-transparent" />
        {/* Copper glow accent */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-copper/[0.08] blur-[120px]" />
      </div>

      <div className="container-editorial relative z-10">
        <div className="flex items-center gap-4 mb-8 animate-fade">
          <div className="w-px h-10 bg-copper animate-line-draw" />
          <span className="text-eyebrow">{eyebrow}</span>
          {chapter && (
            <span className="ml-auto font-mono-brand text-[10px] text-paper/40 tracking-widest">
              {chapter}
            </span>
          )}
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.98] tracking-tight text-balance max-w-5xl animate-reveal">
          {title}
        </h1>
        {intro && (
          <p className="mt-10 text-xl text-paper/70 max-w-2xl leading-relaxed text-pretty animate-reveal [animation-delay:150ms]">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
