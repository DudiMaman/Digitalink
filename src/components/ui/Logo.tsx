import { brand } from '../../data/content'

type LogoProps = {
  showTagline?: boolean
  size?: 'md' | 'lg'
  className?: string
}

const sizes = {
  md: {
    wrap: 'gap-2.5',
    name: 'text-xl sm:text-2xl',
    tagline: 'mt-0.5 text-[10px] tracking-[0.2em]',
    arrow: 'h-6 w-6 sm:h-7 sm:w-7',
  },
  lg: {
    wrap: 'gap-3.5',
    name: 'text-3xl sm:text-4xl',
    tagline: 'mt-1 text-[13px] sm:text-[15px] tracking-[0.22em]',
    arrow: 'h-9 w-9 sm:h-11 sm:w-11',
  },
} as const

/**
 * סמל המותג Digital Link — וורדמארק עם מוטיב החץ העולה מהלוגו המקורי.
 */
export default function Logo({
  showTagline = false,
  size = 'md',
  className = '',
}: LogoProps) {
  const s = sizes[size]
  return (
    <div className={`flex items-center ${s.wrap} ${className}`} dir="ltr">
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold tracking-tight text-content ${s.name}`}>
          {brand.nameParts.first}{' '}
          <span className="text-gradient">{brand.nameParts.second}</span>
        </span>
        {showTagline && (
          <span className={`font-medium uppercase text-content/45 ${s.tagline}`}>
            {brand.tagline}
          </span>
        )}
      </div>
      {/* חץ עולה — מוטיב הלוגו */}
      <svg viewBox="0 0 32 32" className={s.arrow} fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="logo-arrow" x1="0" y1="32" x2="32" y2="0">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="50%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <path
          d="M8 24 L24 8 M24 8 H12 M24 8 V20"
          stroke="url(#logo-arrow)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
