import { brand } from '../../data/content'

type LogoProps = {
  showTagline?: boolean
  className?: string
}

/**
 * סמל המותג Digital Link — וורדמארק עם מוטיב החץ העולה מהלוגו המקורי.
 * הגרסה הדיגיטלית: טקסט לבן + חץ בגרדיאנט החתימה.
 */
export default function Logo({ showTagline = false, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} dir="ltr">
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {brand.nameParts.first}{' '}
          <span className="text-gradient">{brand.nameParts.second}</span>
        </span>
        {showTagline && (
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
            {brand.tagline}
          </span>
        )}
      </div>
      {/* חץ עולה — מוטיב הלוגו */}
      <svg
        viewBox="0 0 32 32"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="none"
        aria-hidden="true"
      >
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
