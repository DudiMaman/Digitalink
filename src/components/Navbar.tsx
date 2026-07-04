import { useEffect, useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useContent, useLang } from '../i18n'
import Logo from './ui/Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLang()
  const c = useContent()
  const toggleLang = () => setLang(lang === 'he' ? 'en' : 'he')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-3.5 sm:px-6">
      <nav className="glass flex w-full max-w-[1240px] items-center justify-between gap-6 rounded-[18px] px-5 py-3 shadow-nav">
        {/* CTA + שפה + המבורגר */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-xl bg-brand-gradient px-5 py-2.5 text-[15px] font-bold text-white shadow-cta transition-all hover:-translate-y-0.5 hover:shadow-cta-hover lg:inline-block"
          >
            {c.hero.primaryCta}
          </a>
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Switch language"
            className="flex items-center gap-1.5 rounded-xl border border-content/10 bg-white/70 px-3 py-2 text-sm font-semibold text-content transition-colors hover:border-brand-blue/40"
          >
            <Globe size={15} />
            {c.ui.switchLabel}
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={c.ui.menuOpen}
            className="grid h-11 w-11 place-items-center rounded-xl border border-content/10 bg-white/80 text-content lg:hidden"
          >
            <Menu size={18} />
          </button>
        </div>

        {/* קישורים */}
        <div className="hidden items-center gap-1 lg:flex">
          {c.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[10px] px-3.5 py-2 text-[15px] font-medium text-content/70 transition-colors hover:bg-brand-blue/[0.07] hover:text-content"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* לוגו */}
        <a href="#hero" aria-label={c.ui.logoAria}>
          <Logo size="lg" showTagline />
        </a>
      </nav>

      {/* תפריט מובייל */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-2 bg-surface/95 backdrop-blur-xl lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={c.ui.menuClose}
            className="absolute end-6 top-6 grid h-11 w-11 place-items-center rounded-xl border border-content/15 bg-white text-content"
          >
            <X size={18} />
          </button>
          {c.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-6 py-2.5 text-2xl font-extrabold text-content"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-2xl bg-brand-gradient px-9 py-3.5 text-lg font-bold text-white shadow-cta"
          >
            {c.hero.primaryCta}
          </a>
        </div>
      )}
    </header>
  )
}
