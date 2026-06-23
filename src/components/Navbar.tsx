import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content'
import Logo from './ui/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 shadow-lg shadow-black/20' : 'py-5'
      }`}
    >
      <nav className="container-base flex items-center justify-between">
        <a href="#hero" aria-label="Digital Link — לדף הבית">
          <Logo />
        </a>

        {/* ניווט דסקטופ */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
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

        <a href="#contact" className="hidden btn-primary lg:inline-flex">
          בואו נדבר
        </a>

        {/* כפתור מובייל */}
        <button
          type="button"
          className="glass rounded-xl p-2.5 text-content lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'סגירת תפריט' : 'פתיחת תפריט'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* תפריט מובייל */}
      {open && (
        <div className="container-base mt-3 lg:hidden">
          <ul className="glass flex flex-col gap-1 rounded-2xl p-3">
            {nav.map((item) => (
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
            <li className="mt-1">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                בואו נדבר
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
