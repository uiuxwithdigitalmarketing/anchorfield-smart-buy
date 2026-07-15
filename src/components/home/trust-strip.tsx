const CREDENTIALS = ["REBAA", "PIPA", "REIV", "MFAA", "FBAA", "FSA Federation"];

export function TrustStrip() {
  return (
    <section className="py-20 border-b border-white/5">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <div className="text-eyebrow mb-4">Credentials</div>
            <p className="text-paper/70 leading-relaxed">
              Accredited members of Australia's leading professional bodies for
              buyer's advocacy, mortgage broking, and investment property advisory.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-3 md:grid-cols-6 gap-px bg-white/5 border border-white/5">
            {CREDENTIALS.map((c) => (
              <div
                key={c}
                className="bg-midnight aspect-[3/2] flex items-center justify-center group hover:bg-navy transition-colors"
              >
                <span className="font-display italic text-lg text-paper/40 group-hover:text-copper transition-colors">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
