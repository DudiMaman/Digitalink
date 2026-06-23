import { Instagram, Facebook, Linkedin, Music2 } from 'lucide-react'
import { nav, contactInfo, brand } from '../data/content'
import Logo from './ui/Logo'

const socials = [
  { icon: Instagram, href: contactInfo.social.instagram, label: 'Instagram' },
  { icon: Facebook, href: contactInfo.social.facebook, label: 'Facebook' },
  { icon: Linkedin, href: contactInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Music2, href: contactInfo.social.tiktok, label: 'TikTok' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-base">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-start">
          <div className="max-w-xs">
            <Logo showTagline />
            <p className="mt-4 text-sm text-white/55">
              סוכנות דיגיטל שהופכת נוכחות לתוצאות — סושיאל, PPC, SEO, GEO ואוטומציית שיווק.
            </p>
          </div>

          <nav aria-label="ניווט תחתון">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-white/70 transition-colors hover:text-brand-cyan"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          © {year} {brand.name}. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  )
}
