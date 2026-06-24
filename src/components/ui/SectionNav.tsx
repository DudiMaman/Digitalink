import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero', label: 'בית' },
  { id: 'services', label: 'שירותים' },
  { id: 'approach', label: 'הגישה' },
  { id: 'process', label: 'תהליך' },
  { id: 'contact', label: 'צור קשר' },
]

/** ניווט סקשנים צדדי — נקודות עם הדגשת הסקשן הפעיל וקפיצה חלקה. */
export default function SectionNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="ניווט מהיר"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col gap-4">
        {sections.map((s) => (
          <li key={s.id} className="group flex items-center">
            <a href={`#${s.id}`} aria-label={s.label} className="relative flex items-center">
              <span
                className={`block rounded-full transition-all duration-300 ${
                  active === s.id
                    ? 'h-6 w-1.5 bg-brand-gradient'
                    : 'h-1.5 w-1.5 bg-content/25 group-hover:bg-content/50'
                }`}
              />
              <span className="pointer-events-none absolute left-5 whitespace-nowrap rounded-md bg-elevated px-2 py-1 text-xs font-medium text-content opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
                {s.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
