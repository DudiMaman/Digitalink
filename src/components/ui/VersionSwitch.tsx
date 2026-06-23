import { Sun, Moon } from 'lucide-react'

/**
 * מתג צף לדילוג בין הגרסה הכהה (root) לגרסה הבהירה (/v1/).
 * הזיהוי מבוסס על הנתיב — תואם לסקריפט שב-index.html.
 */
export default function VersionSwitch() {
  const isLight =
    typeof window !== 'undefined' && window.location.pathname.includes('/v1')

  // נתיב יחסי: מהבהיר חוזרים רמה אחת למעלה, מהכהה נכנסים ל-v1/
  const href = isLight ? '../' : 'v1/'
  const label = isLight ? 'למצב כהה' : 'למצב בהיר'

  return (
    <a
      href={href}
      className="glass fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-content shadow-lg transition-transform hover:-translate-y-0.5"
      aria-label={`מעבר ${label}`}
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
      {label}
    </a>
  )
}
