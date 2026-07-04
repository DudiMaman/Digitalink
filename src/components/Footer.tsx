import { brand } from '../i18n'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-[1] mx-auto flex max-w-[1336px] flex-wrap items-center justify-between gap-4 border-t border-content/[0.08] px-5 py-8 sm:px-8">
      <span className="text-[16px] font-extrabold text-content">{brand.name}</span>
      <span className="text-[14px] text-content/50">All Rights Reserved · © {year}</span>
      <span
        dir="ltr"
        className="font-grotesk text-[12px] tracking-[2px] text-content/40"
      >
        SOCIAL · PPC · SEO · GEO · AUTOMATION · DEV
      </span>
    </footer>
  )
}
