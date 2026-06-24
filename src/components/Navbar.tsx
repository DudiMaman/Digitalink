import { useEffect, useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useContent, useLang } from '../i18n'
import Logo from './ui/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLang()
  const c = useContent()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => setLang(lang === 'he' ? 'en' : 'he')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 shadow-lg shadow-black/10' : 'py-4'
      }`}
    >
      <nav className="container-base flex items-center justify-between">
        {/* ניווט + שפה (דסקטופ) */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {c.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-content/70 transition-colors hover:text-content"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Switch language"
            className="flex items-center gap-1.5 rounded-full border border-content/15 px-3 py-1.5 text-sm font-semibold text-content/70 transition-colors hover:border-brand-teal/40 hover:text-content"
          >
            <Globe size={15} />
            {c.ui.switchLabel}
          </button>
        </div>

        {/* שפה + תפריט (מובייל) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Switch language"
            className="glass flex items-center gap-1 rounded-xl px-2.5 py-2 text-sm font-semibold text-content"
          >
            <Globe size={15} />
            {c.ui.switchLabel}
          </button>
          <button
            type="button"
            className="glass rounded-xl p-2.5 text-content"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? c.ui.menuClose : c.ui.menuOpen}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* לוגו */}
        <a href="#hero" aria-label={c.ui.logoAria}>
          <Logo size="lg" showTagline />
        </a>
      </nav>

      {/* תפריט מובייל */}
      {open && (
        <div className="container-base mt-3 lg:hidden">
          <ul className="glass flex flex-col gap-1 rounded-2xl p-3">
            {c.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-content/80 transition-colors hover:bg-content/10 hover:text-content"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
