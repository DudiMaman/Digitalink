import Reveal from './Reveal'

type Props = {
  eyebrow: string
  eyebrowColor?: string
  title: string
  subtitle?: string
}

/** כותרת סקשן ממורכזת — עינית (Space Grotesk), כותרת ותת-כותרת. */
export default function SectionHead({
  eyebrow,
  eyebrowColor = 'text-brand-blue',
  title,
  subtitle,
}: Props) {
  return (
    <Reveal className="mb-10 flex flex-col items-center gap-3.5 text-center sm:mb-14">
      <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>
      <h2 className="max-w-3xl text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.1] tracking-tight text-content">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-[17px] leading-[1.7] text-content/60">{subtitle}</p>
      )}
    </Reveal>
  )
}
