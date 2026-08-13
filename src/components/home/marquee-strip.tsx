const ITEMS = [
  "Precision Buying",
  "Insider Access",
  "Data-Led Decisions",
  "Buyer Advocacy",
  "Capital Protection",
];

export function MarqueeStrip() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-ink/10 bg-stone/60 overflow-hidden" aria-hidden="true">
      <div className="flex w-max animate-marquee py-4">
        {row.map((t, i) => (
          <div key={`${t}-${i}`} className="flex items-center whitespace-nowrap">
            <span className="px-8 text-[11px] font-medium tracking-[0.28em] uppercase text-ink/70">
              {t}
            </span>
            <span className="h-3 w-px bg-copper/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
