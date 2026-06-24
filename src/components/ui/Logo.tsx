import { brand } from '../../data/content'

type LogoProps = {
  showTagline?: boolean
  size?: 'md' | 'lg'
  className?: string
}

const sizes = {
  md: { name: 'text-xl sm:text-2xl', tagline: 'text-[8px] sm:text-[9px]' },
  lg: { name: 'text-3xl sm:text-4xl', tagline: 'text-[10px] sm:text-[11px]' },
} as const

/** וורדמארק טיפוגרפי נקי — השם והסלוגן מיושרים לאותו רוחב. */
export default function Logo({
  showTagline = false,
  size = 'md',
  className = '',
}: LogoProps) {
  const s = sizes[size]
  return (
    <div className={`flex flex-col leading-none ${className}`} dir="ltr">
      <span className={`font-display font-bold tracking-tight text-content ${s.name}`}>
        {brand.nameParts.first}{' '}
        <span className="text-gradient">{brand.nameParts.second}</span>
      </span>
      {showTagline && (
        <span
          className={`mt-1.5 block w-full font-semibold uppercase text-content/40 ${s.tagline}`}
          style={{ textAlign: 'justify', textAlignLast: 'justify' }}
        >
          {brand.tagline}
        </span>
      )}
    </div>
  )
}
