import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BrandLine } from "@/components/brand-line";
import img1 from "@/assets/af-service-1.jpg";
import img2 from "@/assets/af-service-2.jpg";
import img3 from "@/assets/af-service-3.jpg";
import img4 from "@/assets/af-service-4.jpg";

const SERVICES = [
  {
    n: "01",
    title: "Off-Market Property Sourcing",
    body: "We find opportunities before they reach the public market, using long-held agent and industry relationships to access stock that never becomes a crowded listing.",
    image: img1,
    alt: "Detail of a contemporary Australian apartment facade with repeating balconies",
  },
  {
    n: "02",
    title: "Expert Auction Bidding & Negotiation",
    body: "We represent you through competitive campaigns and auctions — setting the walk-away number in advance and holding it under pressure.",
    image: img2,
    alt: "Buyers gathered on a front lawn at an Australian residential auction",
  },
  {
    n: "03",
    title: "Advanced Investment Yield Analysis",
    body: "We evaluate the true commercial performance of a property with financial modelling: rental yield, holding costs, cash flow and borrowing alignment.",
    image: img3,
    alt: "Printed property financial analysis documents and a calculator on a timber desk",
  },
  {
    n: "04",
    title: "End-to-End Property Advocacy",
    body: "Strategy, search, due diligence, negotiation and settlement — managed as one disciplined process, with a single point of accountability.",
    image: img4,
    alt: "Buyer's agent inspecting the interior hallway of an Australian home",
  },
];

export function ServicesInteractive() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active]!;

  return (
    <section className="py-24 md:py-36 bg-stone border-y border-ink/10">
      <div className="container-editorial">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-eyebrow mb-6">How we help</p>
            <h2 className="font-display uppercase text-[clamp(2rem,4.6vw,3.5rem)] leading-[0.98]">
              What we do
            </h2>
          </div>
          <Link to="/services" className="btn-quiet">
            All services <ArrowRight size={13} />
          </Link>
        </Reveal>

        {/* Desktop: list + panel */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start">
          <ul className="col-span-5 border-t border-ink/10">
            {SERVICES.map((s, i) => (
              <li key={s.n}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="group w-full text-left py-7 border-b border-ink/10 grid grid-cols-[auto_1fr] gap-6 items-baseline transition-colors"
                >
                  <span
                    className={`font-mono-brand text-[11px] tracking-widest transition-colors ${
                      active === i ? "text-copper" : "text-ink/35"
                    }`}
                  >
                    {s.n}
                  </span>
                  <span className="flex items-center gap-4">
                    <span
                      className={`h-px transition-all duration-500 ${
                        active === i ? "w-8 bg-copper" : "w-0 bg-ink/30 group-hover:w-4"
                      }`}
                    />
                    <span
                      className={`font-display uppercase text-xl xl:text-2xl leading-tight transition-colors ${
                        active === i ? "text-ink" : "text-ink/45 group-hover:text-ink/75"
                      }`}
                    >
                      {s.title}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="col-span-7 relative">
            <div className="relative aspect-[7/5] overflow-hidden bg-background">
              <img
                key={current.image}
                src={current.image}
                alt={current.alt}
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full h-full object-cover animate-fade"
              />
            </div>
            <BrandLine
              key={`line-${active}`}
              className="pointer-events-none absolute -bottom-5 right-0 w-1/2 h-12"
            />
            <p className="mt-8 text-lg text-ink/70 leading-relaxed max-w-xl">{current.body}</p>
          </div>
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden border-t border-ink/10">
          {SERVICES.map((s, i) => {
            const open = active === i;
            return (
              <div key={s.n} className="border-b border-ink/10">
                <button
                  type="button"
                  onClick={() => setActive(open ? -1 : i)}
                  aria-expanded={open}
                  className="w-full text-left py-6 grid grid-cols-[auto_1fr] gap-5 items-baseline"
                >
                  <span
                    className={`font-mono-brand text-[11px] tracking-widest ${
                      open ? "text-copper" : "text-ink/35"
                    }`}
                  >
                    {s.n}
                  </span>
                  <span className="font-display uppercase text-lg leading-tight">{s.title}</span>
                </button>
                {open && (
                  <div className="pb-8 animate-fade">
                    <div className="aspect-[16/10] overflow-hidden bg-background">
                      <img
                        src={s.image}
                        alt={s.alt}
                        loading="lazy"
                        width={1408}
                        height={1008}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-5 text-ink/65 leading-relaxed">{s.body}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
