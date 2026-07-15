import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  chapter?: string;
}

export function PageHero({ eyebrow, title, intro, chapter }: Props) {
  return (
    <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.24_0.05_258/0.5),transparent_60%)]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-copper/[0.06] blur-[120px]" />
      </div>
      <div className="container-editorial">
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
          <p className="mt-10 text-xl text-paper/60 max-w-2xl leading-relaxed text-pretty animate-reveal [animation-delay:150ms]">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
