import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Why Us", to: "/why-us" },
  { label: "Insights", to: "/blog" },
  { label: "About", to: "/about" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          scrolled
            ? "bg-midnight/85 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
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
              <Link
                key={item.to}
                to={item.to}
                className="link-underline text-[12px] font-medium uppercase tracking-[0.2em] text-paper/70 hover:text-paper transition-colors"
                activeProps={{ className: "!text-copper" }}
              >
                {item.label}
              </Link>
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
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-midnight lg:hidden pt-24 animate-fade">
          <div className="container-editorial flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display italic text-4xl py-5 border-b border-white/5"
              >
                {item.label}
              </Link>
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
