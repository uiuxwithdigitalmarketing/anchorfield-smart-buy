import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

type NavChild = { label: string; to: string; params?: Record<string, string>; desc?: string };
type NavItem = {
  label: string;
  to: string;
  columns?: { heading: string; items: NavChild[] }[];
};

const NAV: NavItem[] = [
  {
    label: "About",
    to: "/about",
    columns: [
      {
        heading: "The Firm",
        items: [
          { label: "About Anchorfield", to: "/about", desc: "Our story and mission" },
          { label: "Meet the Founder", to: "/meet-the-founder", desc: "Mortgage broker turned advocate" },
          { label: "Why Choose Us", to: "/why-us", desc: "The Anchorfield difference" },
        ],
      },
      {
        heading: "How We Think",
        items: [
          { label: "Our Buying Philosophy", to: "/buying-philosophy", desc: "Financial-grade discipline" },
          { label: "Our Process", to: "/process", desc: "Six-stage acquisition journey" },
          { label: "Mortgage Expertise Advantage", to: "/mortgage-expertise", desc: "Finance + property, one desk" },
        ],
      },
    ],
  },
  {
    label: "Services",
    to: "/services",
    columns: [
      {
        heading: "Core Advocacy",
        items: [
          { label: "Buyers Advocacy", to: "/services/$slug", params: { slug: "buyers-advocacy" } },
          { label: "Off-Market Search", to: "/services/$slug", params: { slug: "off-market" } },
          { label: "Auction Bidding", to: "/services/$slug", params: { slug: "auction-bidding" } },
          { label: "Property Negotiation", to: "/services/$slug", params: { slug: "negotiation" } },
          { label: "Vendor Advocacy", to: "/services/$slug", params: { slug: "vendor-advocacy" } },
        ],
      },
      {
        heading: "Investment & Research",
        items: [
          { label: "Investment Advisory", to: "/services/$slug", params: { slug: "investment-advisory" } },
          { label: "Portfolio Strategy", to: "/services/$slug", params: { slug: "portfolio-strategy" } },
          { label: "Property Research", to: "/services/$slug", params: { slug: "property-research" } },
          { label: "Due Diligence", to: "/services/$slug", params: { slug: "due-diligence" } },
        ],
      },
      {
        heading: "Specialist Buyers",
        items: [
          { label: "First Home Buyers", to: "/services/$slug", params: { slug: "first-home-buyers" } },
          { label: "Interstate Buyers", to: "/services/$slug", params: { slug: "interstate" } },
          { label: "Expat Buyers", to: "/services/$slug", params: { slug: "expats" } },
          { label: "SMSF Property", to: "/services/$slug", params: { slug: "smsf" } },
        ],
      },
    ],
  },
  { label: "Process", to: "/process" },
  { label: "Insights", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-midnight/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="container-editorial h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 shrink-0">
              <div className="absolute inset-0 border border-copper rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
              <div className="absolute inset-1.5 bg-copper rounded-full" />
            </div>
            <span className="text-sm font-semibold tracking-[0.3em] uppercase">Anchorfield</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.columns && setOpenMenu(item.label)}
              >
                <Link
                  to={item.to}
                  className="link-underline inline-flex items-center gap-1 text-[12px] font-medium uppercase tracking-[0.2em] text-paper/70 hover:text-paper transition-colors"
                  activeProps={{ className: "!text-copper" }}
                >
                  {item.label}
                  {item.columns && <ChevronDown size={12} className="opacity-60" />}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:inline-flex btn-primary !py-3 !px-5">
              Book Consultation
            </Link>
            <button
              className="lg:hidden text-paper p-2 -mr-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Desktop mega-menu */}
        {openMenu && (
          <div className="hidden lg:block absolute left-0 right-0 top-full bg-midnight/95 backdrop-blur-xl border-t border-white/5 animate-fade">
            <div className="container-editorial py-12">
              {NAV.filter((n) => n.label === openMenu && n.columns).map((item) => (
                <div key={item.label} className="grid grid-cols-12 gap-10">
                  <div className="col-span-3">
                    <div className="text-eyebrow mb-3">{item.label}</div>
                    <Link
                      to={item.to}
                      className="font-display italic text-3xl leading-tight hover:text-copper transition-colors"
                      onClick={() => setOpenMenu(null)}
                    >
                      Overview →
                    </Link>
                  </div>
                  {item.columns!.map((col) => (
                    <div key={col.heading} className="col-span-3">
                      <div className="font-mono-brand text-[10px] tracking-widest text-paper/40 uppercase mb-4">
                        {col.heading}
                      </div>
                      <ul className="space-y-3">
                        {col.items.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.to}
                              params={child.params as never}
                              onClick={() => setOpenMenu(null)}
                              className="group block"
                            >
                              <div className="text-sm text-paper/85 group-hover:text-copper transition-colors">
                                {child.label}
                              </div>
                              {child.desc && (
                                <div className="text-xs text-paper/40 mt-0.5">{child.desc}</div>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-midnight lg:hidden pt-24 overflow-y-auto animate-fade">
          <div className="container-editorial flex flex-col gap-1 pb-12">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-white/5">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="font-display italic text-4xl py-5 flex-1"
                  >
                    {item.label}
                  </Link>
                  {item.columns && (
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="p-4 text-paper/60"
                      aria-label={`Expand ${item.label}`}
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.columns && mobileExpanded === item.label && (
                  <div className="pb-6 pl-2 space-y-6">
                    {item.columns.map((col) => (
                      <div key={col.heading}>
                        <div className="font-mono-brand text-[10px] tracking-widest text-paper/40 uppercase mb-3">
                          {col.heading}
                        </div>
                        <ul className="space-y-3">
                          {col.items.map((child) => (
                            <li key={child.label}>
                              <Link
                                to={child.to}
                                params={child.params as never}
                                onClick={() => setOpen(false)}
                                className="text-base text-paper/80 hover:text-copper"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-8 justify-center"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
