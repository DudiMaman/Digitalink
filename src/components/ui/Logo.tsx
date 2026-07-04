import { brand } from '../../i18n'

type LogoProps = {
  showTagline?: boolean
  size?: 'md' | 'lg'
  className?: string
}

const sizes = {
  md: { name: 'text-[20px] tracking-[2.4px]', tag: 'text-[9px] tracking-[2px]' },
  lg: { name: 'text-[26px] tracking-[3.4px]', tag: 'text-[11.5px] tracking-[2.55px]' },
} as const

/** וורדמארק — Heebo 800 עם letter-spacing; "Link" בגרדיאנט. סלוגן ב-Space Grotesk. */
export default function Logo({ showTagline = false, size = 'md', className = '' }: LogoProps) {
  const s = sizes[size]
  return (
    <div className={`flex flex-col items-start leading-[1.1] ${className}`} dir="ltr">
      <span className={`font-display font-extrabold text-content ${s.name}`}>
        {brand.nameParts.first} <span className="text-gradient">{brand.nameParts.second}</span>
      </span>
      {showTagline && (
        <span className={`font-grotesk font-medium uppercase text-content/50 ${s.tag}`}>
          {brand.tagline}
        </span>
      )}
    </div>
  )
}
