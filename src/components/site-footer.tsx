import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const COLS = [
  {
    heading: "Practice",
    links: [
      { label: "Buyers Advocacy", to: "/services/buyers-advocacy" },
      { label: "Investment Advisory", to: "/services/investment-advisory" },
      { label: "Auction Bidding", to: "/services/auction-bidding" },
      { label: "Negotiation", to: "/services/negotiation" },
      { label: "Off-Market Search", to: "/services/off-market" },
    ],
  },
  {
    heading: "Clients",
    links: [
      { label: "First Home Buyers", to: "/services/first-home-buyers" },
      { label: "Investors", to: "/services/investment-advisory" },
      { label: "Interstate", to: "/services/interstate" },
      { label: "Expats", to: "/services/expats" },
      { label: "SMSF", to: "/services/smsf" },
    ],
  },
  {
    heading: "Firm",
    links: [
      { label: "About", to: "/about" },
      { label: "Founder", to: "/about" },
      { label: "Process", to: "/process" },
      { label: "Insights", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-midnight border-t border-white/5 pt-24 pb-10">
      <div className="container-editorial">
        {/* Big brand mark */}
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <div className="text-eyebrow mb-8">The Market Report — Quarterly</div>
            <h3 className="font-display italic text-4xl md:text-5xl leading-[1.05] mb-8">
              Institutional-grade insights, delivered to Australia's most discerning buyers.
            </h3>
            <form className="flex border-b border-white/15 max-w-md pb-2">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="bg-transparent flex-1 py-2 text-sm placeholder:text-paper/40 focus:outline-none"
              />
              <button className="text-eyebrow flex items-center gap-2 hover:text-paper transition-colors">
                Subscribe <ArrowUpRight size={14} />
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {COLS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-eyebrow mb-6">{col.heading}</h4>
                <ul className="space-y-4">
                  {col.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link to={l.to} className="text-sm text-paper/70 hover:text-copper transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="relative overflow-hidden py-8 mb-8 border-y border-white/5">
          <div className="font-display italic text-[18vw] leading-none tracking-tighter text-paper/[0.04] text-center whitespace-nowrap select-none">
            Anchorfield
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <p className="text-xs text-paper/40 font-mono-brand">
            © {new Date().getFullYear()} Anchorfield Advisory Pty Ltd
          </p>
          <p className="text-xs text-paper/40 text-center font-mono-brand tracking-widest">
            MELBOURNE — SYDNEY — BRISBANE
          </p>
          <div className="flex justify-end gap-6 text-xs text-paper/40">
            <Link to="/privacy" className="hover:text-paper">Privacy</Link>
            <Link to="/terms" className="hover:text-paper">Terms</Link>
            <a href="#" className="hover:text-paper">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
