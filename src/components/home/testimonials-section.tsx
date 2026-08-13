import { SectionHeader } from "@/components/section-header";

const T = [
  {
    q: "Anchorfield acquired an off-market Hawthorn home for us $180k below the asking price on a comparable listing. The financial discipline is what sets them apart — they treat every purchase like a term sheet.",
    name: "S. Kavanagh",
    role: "Owner-occupier · Melbourne",
  },
  {
    q: "We're expats based in Singapore. From video walkthroughs to bidding, every step was seamless. The integrated mortgage strategy alone saved us weeks and thousands.",
    name: "M. & R. Patel",
    role: "Expat investors · Brisbane acquisition",
  },
  {
    q: "As a first-time investor, I needed education as much as execution. Anchorfield gave me the confidence to move on a growth-corridor property I never would have found on my own.",
    name: "L. Chen",
    role: "First-time investor",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 md:py-48 bg-navy/40 border-y border-ink/5">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="(08) Client Record"
          title={
            <>
              Trusted by <span className="italic text-copper">buyers</span> who <br />
              demand precision.
            </>
          }
        />

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {T.map((t, i) => (
            <figure
              key={i}
              className="glass-panel p-10 rounded-sm flex flex-col justify-between min-h-[380px]"
            >
              <div>
                <div className="font-display italic text-5xl text-copper leading-none mb-6">"</div>
                <blockquote className="text-lg leading-relaxed text-ink/85 text-pretty">
                  {t.q}
                </blockquote>
              </div>
              <figcaption className="mt-10 pt-6 border-t border-ink/10">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-ink/50 uppercase tracking-widest mt-1">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
