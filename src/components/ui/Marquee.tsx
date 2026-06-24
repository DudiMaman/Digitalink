const KEYWORDS = [
  'סושיאל מדיה',
  'PPC',
  'SEO',
  'GEO',
  'Marketing Automation',
  'לידים',
  'קריאייטיב',
  'אסטרטגיה',
  'מיתוג',
]

/** רצועת שירותים נעה (ticker) — נעצרת בריחוף לעכבר. */
export default function Marquee() {
  const items = [...KEYWORDS, ...KEYWORDS]
  return (
    <div
      dir="ltr"
      className="group relative flex overflow-hidden border-y border-content/10 bg-elevated/40 py-6"
    >
      <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
        {items.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-display text-2xl font-extrabold uppercase tracking-tight text-content/75 sm:text-3xl">
              {word}
            </span>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-gradient" />
          </span>
        ))}
      </div>
      {/* דעיכה בקצוות */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
    </div>
  )
}
