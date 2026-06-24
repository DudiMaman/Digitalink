import { brand } from '../../data/content'

type LogoProps = {
  showTagline?: boolean
  size?: 'md' | 'lg'
  className?: string
}

const sizes = {
  md: {
    gap: 'gap-2',
    name: 'text-xl sm:text-2xl',
    tagline: 'text-[8px] sm:text-[9px]',
    badge: 'h-9 w-9 rounded-lg',
    icon: 20,
  },
  lg: {
    gap: 'gap-2.5',
    name: 'text-3xl sm:text-4xl',
    tagline: 'text-[10px] sm:text-[11px]',
    badge: 'h-11 w-11 rounded-xl',
    icon: 24,
  },
} as const

/**
 * סמל המותג Digital Link — אריח גרדיאנט עם חץ צמיחה (mark),
 * לצד וורדמארק שבו השם והסלוגן מיושרים לאותו רוחב בדיוק.
 */
export default function Logo({
  showTagline = false,
  size = 'md',
  className = '',
}: LogoProps) {
  const s = sizes[size]
  return (
    <div className={`flex items-center ${s.gap} ${className}`} dir="ltr">
      {/* mark — אריח גרדיאנט עם חץ צמיחה */}
      <span
        className={`grid flex-shrink-0 place-items-center bg-brand-gradient shadow-lg shadow-brand-teal/25 ${s.badge}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width={s.icon} height={s.icon} fill="none">
          <path
            d="M6 18 L18 6"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M10.5 6 H18 V13.5"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="18" r="1.7" fill="white" />
        </svg>
      </span>

      {/* wordmark — השם והסלוגן באותו רוחב */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-[0.04em] text-content ${s.name}`}
        >
          {brand.nameParts.first}{' '}
          <span className="text-gradient">{brand.nameParts.second}</span>
        </span>
        {showTagline && (
          <span
            className={`mt-1 block w-full font-semibold uppercase text-content/45 ${s.tagline}`}
            style={{ textAlign: 'justify', textAlignLast: 'justify' }}
          >
            {brand.tagline}
          </span>
        )}
      </span>
    </div>
  )
}
