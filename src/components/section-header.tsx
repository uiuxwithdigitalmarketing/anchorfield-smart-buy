import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, title, intro, align = "left", className = "" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <div className="text-eyebrow mb-6">{eyebrow}</div>}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance mb-6">
        {title}
      </h2>
      {intro && <p className="text-lg text-ink/60 leading-relaxed text-pretty max-w-2xl">{intro}</p>}
    </div>
  );
}
