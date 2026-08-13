import { SectionHeader } from "@/components/section-header";
import { MapPin } from "lucide-react";

const AREAS = [
  { name: "Melbourne", note: "Head office · Full coverage", featured: true },
  { name: "Geelong & Bellarine", note: "Coastal & lifestyle" },
  { name: "Sydney", note: "Eastern Suburbs & Inner West" },
  { name: "Brisbane", note: "Inner North & Bayside" },
  { name: "Gold Coast", note: "Prestige coastal" },
  { name: "Perth", note: "Western Suburbs" },
];

export function FeaturedAreas() {
  return (
    <section className="py-32 md:py-48">
      <div className="container-editorial grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="(05) Coverage"
            title={
              <>
                Nationwide reach. <br />
                <span className="italic text-copper">Local depth.</span>
              </>
            }
            intro="Headquartered in Melbourne, with practising relationships across every major metropolitan corridor."
          />
        </div>

        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-px bg-ink/5 border border-ink/10">
            {AREAS.map((a) => (
              <button
                key={a.name}
                className={`group text-left p-8 transition-all ${
                  a.featured ? "bg-navy" : "bg-midnight hover:bg-navy/60"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <MapPin
                    size={18}
                    className={a.featured ? "text-copper" : "text-ink/30 group-hover:text-copper"}
                  />
                  {a.featured && (
                    <span className="text-[9px] uppercase tracking-widest text-copper font-mono-brand">
                      Head office
                    </span>
                  )}
                </div>
                <h3 className="font-display italic text-2xl mb-2">{a.name}</h3>
                <p className="text-xs text-ink/50 uppercase tracking-widest">{a.note}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
