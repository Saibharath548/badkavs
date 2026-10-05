interface ControllerGlyphsProps {
  size?: number;
  className?: string;
  layout?: 'grid' | 'inline';
}

export default function ControllerGlyphs({
  size = 18,
  className = '',
  layout = 'grid',
}: ControllerGlyphsProps) {
  if (layout === 'inline') {
    return (
      <div
        className={`controller-glyphs controller-glyphs--inline ${className}`}
        aria-hidden="true"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
      >
        {/* Cross ✕ */}
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
        {/* Circle ○ */}
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="8" />
        </svg>
        {/* Triangle △ */}
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
          <polygon points="12,4 4,20 20,20" />
        </svg>
        {/* Square □ */}
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="1.5" />
        </svg>
      </div>
    );
  }

  // 2x2 grid layout matching the reference banner
  return (
    <div
      className={`controller-glyphs controller-glyphs--grid ${className}`}
      aria-hidden="true"
      style={{
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: `${Math.round(size * 0.35)}px`,
        lineHeight: 1,
      }}
    >
      {/* Row 1: Cross ✕ | Circle ○ */}
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </svg>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="8" />
      </svg>

      {/* Row 2: Triangle △ | Square □ */}
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <polygon points="12,4 4,20 20,20" />
      </svg>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="1.5" />
      </svg>
    </div>
  );
}
