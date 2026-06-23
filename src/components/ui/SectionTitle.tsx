import Reveal from './Reveal'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'start'
}

/** כותרת סקשן אחידה: eyebrow + כותרת + תיאור. */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  return (
    <Reveal
      className={`mb-14 flex flex-col gap-4 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-start'
      }`}
    >
      {eyebrow && (
        <span className="glass rounded-full px-4 py-1.5 text-sm font-medium text-brand-cyan">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-content/60 sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  )
}
