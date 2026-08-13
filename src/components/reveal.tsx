import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

interface Props {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

/** Scroll-triggered reveal. Respects prefers-reduced-motion via CSS. */
export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`af-reveal ${shown ? "af-reveal-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
