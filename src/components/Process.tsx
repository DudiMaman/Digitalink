import { process } from '../data/content'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="container-base">
        <SectionTitle
          eyebrow="התהליך"
          title={process.title}
          subtitle={process.subtitle}
        />

        <div className="relative grid gap-6 md:grid-cols-4">
          {/* קו מחבר (דסקטופ) */}
          <div className="absolute right-0 left-0 top-9 hidden h-px bg-gradient-to-l from-brand-cyan/50 via-brand-teal/40 to-brand-emerald/30 md:block" />

          {process.steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1} className="relative">
              <div className="flex flex-col items-center text-center md:items-start md:text-start">
                <span className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-content/10 bg-elevated font-display text-2xl font-black text-gradient">
                  {s.step}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-content/60">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
