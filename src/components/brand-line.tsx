interface Props {
  className?: string;
  /** stroke opacity multiplier */
  subtle?: boolean;
}

/**
 * Flowing linework motif derived from the Anchorfield logo.
 * Purely decorative — hidden from assistive technology.
 */
export function BrandLine({ className = "", subtle = true }: Props) {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M0 84C120 84 180 20 300 20s180 64 300 64 180-64 300-64 180 64 300 64"
        stroke="var(--copper)"
        strokeWidth="1"
        opacity={subtle ? 0.5 : 0.9}
        className="af-draw"
      />
      <path
        d="M0 100C120 100 180 44 300 44s180 56 300 56 180-56 300-56 180 56 300 56"
        stroke="var(--ink)"
        strokeWidth="0.75"
        opacity={subtle ? 0.12 : 0.25}
        className="af-draw [animation-delay:200ms]"
      />
    </svg>
  );
}
