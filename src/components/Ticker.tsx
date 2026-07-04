const TICKER = [
  'SOCIAL MEDIA',
  'PPC',
  'SEO',
  'GEO',
  'MARKETING AUTOMATION',
  'DEVELOPMENT',
  'DATA',
  'CREATIVE',
  'GROWTH',
  'AI',
]

/** פס לוגוס אינסופי (Space Grotesk) עם דהייה בקצוות. */
export default function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div
      dir="ltr"
      className="relative z-[1] overflow-hidden border-y border-content/[0.08] bg-white/55 py-[18px]"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div className="flex w-max animate-marquee gap-14 whitespace-nowrap font-grotesk text-[15px] tracking-[4px] text-content/50">
        {items.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-14">
            {t} <span className="text-brand-blue">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
