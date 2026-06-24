import { useContent, brand } from '../i18n'
import Logo from './ui/Logo'

export default function Footer() {
  const c = useContent()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-content/10 py-12">
      <div className="container-base">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-start">
          <div className="max-w-xs">
            <Logo showTagline />
            <p className="mt-4 text-sm text-content/55">{c.footer.description}</p>
          </div>

          <nav aria-label="footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {c.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-content/60 transition-colors hover:text-content"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-content/10 pt-6 text-center text-sm text-content/40">
          © {year} {brand.name}. {c.footer.rights}
        </div>
      </div>
    </footer>
  )
}
