import { Reveal } from "@/components/reveal";
import { BrandLine } from "@/components/brand-line";

const STAGES = [
  { n: "01", title: "Understand", body: "Your goals, financial position and property requirements." },
  { n: "02", title: "Strategise", body: "Build a focused acquisition strategy around those constraints." },
  { n: "03", title: "Source", body: "Search the public and off-market property landscape." },
  { n: "04", title: "Analyse", body: "Evaluate value, yield, cash flow and risk before you commit." },
  { n: "05", title: "Secure", body: "Negotiate and acquire with confidence, through to settlement." },
];

export function ProcessEditorial() {
  return (
    <section className="py-24 md:py-36 overflow-hidden">
      <div className="container-editorial">
        <Reveal className="max-w-3xl">
          <p className="text-eyebrow mb-6">The process</p>
          <h2 className="font-display uppercase text-[clamp(2rem,4.6vw,3.5rem)] leading-[0.98]">
            From strategy to settlement.
          </h2>
        </Reveal>

        <BrandLine className="mt-14 w-full h-14 hidden lg:block" />

        {/* Desktop: horizontal scroll rail */}
        <div className="hidden lg:block mt-6">
          <ol className="grid grid-cols-5 border-t border-ink/10">
            {STAGES.map((s, i) => (
              <Reveal
                as="li"
                key={s.n}
                delay={i * 90}
                className="group pt-10 pr-8 border-l border-ink/10 first:border-l-0 pl-8 first:pl-0"
              >
                <span className="font-display text-5xl text-ink/15 transition-colors duration-500 group-hover:text-copper">
                  {s.n}
                </span>
                <h3 className="mt-8 font-display uppercase text-xl">{s.title}</h3>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Mobile: vertical timeline */}
        <ol className="lg:hidden mt-12 border-l border-ink/12 pl-6 space-y-10">
          {STAGES.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 70} className="relative">
              <span className="absolute -left-[1.65rem] top-2 w-2 h-2 rounded-full bg-copper" />
              <span className="font-mono-brand text-[11px] tracking-widest text-copper">{s.n}</span>
              <h3 className="mt-2 font-display uppercase text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
