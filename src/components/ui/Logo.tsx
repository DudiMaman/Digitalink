import { useLayoutEffect, useRef } from 'react'
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

/**
 * וורדמארק טיפוגרפי נקי. הסלוגן נמתח לרוחב המדויק של השם באמצעות
 * מרווח-אותיות אחיד (נמדד דינמית) — קצוות מיושרים, בלי רווחי-מילים ענקיים.
 */
export default function Logo({
  showTagline = false,
  size = 'md',
  className = '',
}: LogoProps) {
  const s = sizes[size]
  const nameRef = useRef<HTMLSpanElement>(null)
  const taglineRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    if (!showTagline) return
    const fit = () => {
      const name = nameRef.current
      const tag = taglineRef.current
      if (!name || !tag) return
      // אפס מרווחים, מדוד רוחב טקסט טבעי, וחשב מרווח-אות אחיד שממלא את רוחב השם
      tag.style.letterSpacing = '0px'
      tag.style.marginInlineEnd = '0px'
      const natural = tag.getBoundingClientRect().width
      const target = name.getBoundingClientRect().width
      const gaps = Math.max(1, brand.tagline.length - 1)
      const ls = Math.max(0, (target - natural) / gaps)
      tag.style.letterSpacing = `${ls}px`
      tag.style.marginInlineEnd = `${-ls}px`
    }
    fit()
    const ro = new ResizeObserver(fit)
    if (nameRef.current) ro.observe(nameRef.current)
    window.addEventListener('resize', fit)
    if (document.fonts?.ready) document.fonts.ready.then(fit)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', fit)
    }
  }, [showTagline, size])

  return (
    <div className={`flex flex-col items-start leading-none ${className}`} dir="ltr">
      <span
        ref={nameRef}
        className={`font-display font-bold tracking-tight text-content ${s.name}`}
      >
        {brand.nameParts.first}{' '}
        <span className="text-gradient">{brand.nameParts.second}</span>
      </span>
      {showTagline && (
        <span
          ref={taglineRef}
          className={`mt-1.5 whitespace-nowrap font-semibold uppercase text-content/40 ${s.tagline}`}
        >
          {brand.tagline}
        </span>
      )}
    </div>
  )
}
