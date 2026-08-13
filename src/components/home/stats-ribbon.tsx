const STATS = [
  { value: "$1.2B+", label: "Property Assets Advised" },
  { value: "14.2%", label: "Avg. Under Market Value" },
  { value: "84%", label: "Off-Market Access" },
  { value: "98%", label: "Client Retention" },
];

export function StatsRibbon() {
  return (
    <section className="relative border-y border-ink/10 bg-navy/70">
      <div className="container-editorial grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`py-10 lg:py-14 px-2 ${
              i > 0 ? "lg:border-l border-ink/10" : ""
            } ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 1 ? "border-l border-ink/10" : ""}`}
          >
            <div className="font-display text-4xl lg:text-6xl italic text-copper leading-none mb-3">
              {s.value}
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-ink/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
