import type { ReactNode } from "react";
import defaultBg from "@/assets/hero-architecture.jpg?hero";
import { HeroImage, type PictureSource } from "@/components/hero-image";

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  chapter?: string;
  /** Responsive picture from `?hero` imagetools import (preferred). */
  picture?: PictureSource;
  /** Legacy plain URL fallback. */
  backgroundImage?: string;
  imageAlt?: string;
  imagePosition?: string;
}

export function PageHero({
  eyebrow,
  title,
  intro,
  chapter,
  picture,
  backgroundImage,
  imageAlt = "",
  imagePosition = "center",
}: Props) {
  const pic = picture ?? (backgroundImage ? null : defaultBg);
  return (
    <section className="relative isolate bg-midnight pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
      {/* Background image + cinematic overlays */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {pic ? (
          <HeroImage
            picture={pic}
            alt={imageAlt}
            priority
            sizes="100vw"
            className="w-full h-full object-cover opacity-95"
            style={{ objectPosition: imagePosition }}
          />
        ) : (
          <img
            src={backgroundImage}
            alt={imageAlt}
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-cover opacity-95"
            style={{ objectPosition: imagePosition }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/20 via-midnight/10 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/70 via-midnight/25 to-transparent" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-copper/[0.05] blur-[120px]" />
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
