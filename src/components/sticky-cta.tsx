import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyConsultCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/0000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-copper text-midnight pl-5 pr-4 py-3.5 rounded-full shadow-2xl font-semibold text-xs uppercase tracking-[0.2em]"
      >
        WhatsApp
        <span className="w-7 h-7 rounded-full bg-midnight text-copper flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
          <ArrowRight size={13} />
        </span>
      </a>
    </div>
  );
}
