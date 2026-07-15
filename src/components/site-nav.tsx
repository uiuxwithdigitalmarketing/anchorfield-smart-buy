import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type NavChild = { label: string; to: string; params?: Record<string, string>; desc?: string };
type NavColumn = { heading: string; items: NavChild[] };
type NavItem = { label: string; to: string; columns?: NavColumn[] };

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile sheet on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-copper focus:text-midnight focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-paper"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-midnight/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="container-editorial h-20 flex items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-midnight rounded-sm"
            aria-label="Anchorfield — Home"
          >
            <div className="relative w-8 h-8 shrink-0" aria-hidden="true">
              <div className="absolute inset-0 border border-copper rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
              <div className="absolute inset-1.5 bg-copper rounded-full" />
            </div>
            <span className="text-sm font-semibold tracking-[0.3em] uppercase">Anchorfield</span>
          </Link>

          {/* Desktop navigation — Radix NavigationMenu (keyboard + ARIA) */}
          <NavigationMenu.Root
            className="hidden lg:flex relative"
            aria-label="Primary"
            delayDuration={100}
          >
            <NavigationMenu.List className="flex items-center gap-2">
              {NAV.map((item) => (
                <NavigationMenu.Item key={item.label}>
                  {item.columns ? (
                    <>
                      <NavigationMenu.Trigger
                        className="group inline-flex items-center gap-1 px-3 py-2 text-[12px] font-medium uppercase tracking-[0.2em] text-paper/70 hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-midnight rounded-sm data-[state=open]:text-copper"
                      >
                        {item.label}
                        <ChevronDown
                          size={12}
                          aria-hidden="true"
                          className="opacity-60 transition-transform duration-300 group-data-[state=open]:rotate-180"
                        />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute left-0 right-0 top-full data-[motion=from-start]:animate-fade data-[motion=from-end]:animate-fade data-[motion=to-start]:animate-fade data-[motion=to-end]:animate-fade">
                        <MegaMenu item={item} />
                      </NavigationMenu.Content>
                    </>
                  ) : (
                    <NavigationMenu.Link asChild>
                      <Link
                        to={item.to}
                        className="inline-flex items-center px-3 py-2 text-[12px] font-medium uppercase tracking-[0.2em] text-paper/70 hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-midnight rounded-sm"
                        activeProps={{ className: "!text-copper" }}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenu.Link>
                  )}
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>

            {/* Viewport positions Content; we render full-width panels ourselves */}
            <div className="absolute top-full left-0 right-0 flex justify-center">
              <NavigationMenu.Viewport className="relative w-full origin-top data-[state=closed]:animate-fade data-[state=open]:animate-fade" />
            </div>
          </NavigationMenu.Root>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:inline-flex btn-primary !py-3 !px-5">
              Book Consultation
            </Link>

            {/* Mobile trigger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden text-paper p-2 -mr-2 min-h-11 min-w-11 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-sm"
                  aria-label="Open navigation menu"
                >
                  <Menu size={22} aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:max-w-md bg-midnight border-white/10 text-paper overflow-y-auto"
              >
                <SheetHeader className="text-left">
                  <SheetTitle className="text-eyebrow text-paper/60 font-normal">
                    Navigation
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Site navigation menu with links to all pages.
                  </SheetDescription>
                </SheetHeader>

                <nav aria-label="Mobile primary" className="mt-8">
                  <Accordion type="single" collapsible className="w-full">
                    {NAV.map((item) =>
                      item.columns ? (
                        <AccordionItem
                          key={item.label}
                          value={item.label}
                          className="border-white/10"
                        >
                          <AccordionTrigger className="font-display italic text-3xl py-4 hover:no-underline hover:text-copper data-[state=open]:text-copper">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-6">
                            <Link
                              to={item.to}
                              className="block text-sm text-copper mb-4 uppercase tracking-widest"
                            >
                              Overview →
                            </Link>
                            <div className="space-y-6">
                              {item.columns.map((col) => (
                                <div key={col.heading}>
                                  <div className="font-mono-brand text-[10px] tracking-widest text-paper/40 uppercase mb-3">
                                    {col.heading}
                                  </div>
                                  <ul className="space-y-2">
                                    {col.items.map((child) => (
                                      <li key={child.label}>
                                        <Link
                                          to={child.to}
                                          params={child.params as never}
                                          className="block py-2 text-base text-paper/85 hover:text-copper focus-visible:outline-none focus-visible:text-copper min-h-11"
                                        >
                                          {child.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <div
                          key={item.label}
                          className="border-b border-white/10"
                        >
                          <Link
                            to={item.to}
                            className="block font-display italic text-3xl py-4 hover:text-copper focus-visible:outline-none focus-visible:text-copper"
                            activeProps={{ className: "!text-copper" }}
                          >
                            {item.label}
                          </Link>
                        </div>
                      ),
                    )}
                  </Accordion>

                  <Link
                    to="/contact"
                    className="btn-primary mt-10 w-full justify-center"
                  >
                    Book Consultation
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

function MegaMenu({ item }: { item: NavItem }) {
  return (
    <div className="bg-midnight/95 backdrop-blur-xl border-t border-white/5 shadow-2xl">
      <div className="container-editorial py-12">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <div className="text-eyebrow mb-3">{item.label}</div>
            <NavigationMenu.Link asChild>
              <Link
                to={item.to}
                className="font-display italic text-3xl leading-tight hover:text-copper transition-colors inline-block focus-visible:outline-none focus-visible:text-copper"
              >
                Overview →
              </Link>
            </NavigationMenu.Link>
          </div>
          {item.columns!.map((col) => (
            <div
              key={col.heading}
              className={`col-span-${Math.max(3, Math.floor(9 / item.columns!.length))}`}
            >
              <div className="font-mono-brand text-[10px] tracking-widest text-paper/40 uppercase mb-4">
                {col.heading}
              </div>
              <ul className="space-y-3">
                {col.items.map((child) => (
                  <li key={child.label}>
                    <NavigationMenu.Link asChild>
                      <Link
                        to={child.to}
                        params={child.params as never}
                        className="group block rounded-sm -mx-2 px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                      >
                        <div className="text-sm text-paper/85 group-hover:text-copper transition-colors">
                          {child.label}
                        </div>
                        {child.desc && (
                          <div className="text-xs text-paper/40 mt-0.5">{child.desc}</div>
                        )}
                      </Link>
                    </NavigationMenu.Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
