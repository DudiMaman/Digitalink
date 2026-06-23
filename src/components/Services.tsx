import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { services } from '../data/content'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'

export default function Services() {
  const flagship = services.find((s) => s.flagship)!
  const rest = services.filter((s) => !s.flagship)

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-base">
        <SectionTitle
          eyebrow="מה אנחנו עושים"
          title="מערך דיגיטל מלא תחת קורת גג אחת"
          subtitle="מסושיאל שמייצר באזז ועד אוטומציה שמגדילה המרות — כל מה שצריך כדי לצמוח."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* כרטיס flagship — סושיאל */}
          <Reveal className="lg:col-span-3">
            <motion.div
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-content/10 bg-brand-gradient bg-[length:200%_200%] p-px"
            >
              <div className="relative grid gap-8 rounded-[calc(1.5rem-1px)] bg-elevated/95 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-ink">
                      <Icon name={flagship.icon} size={28} />
                    </span>
                    <span className="glass rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-cyan">
                      {flagship.tagline}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-extrabold sm:text-4xl">
                    {flagship.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-lg text-content/65">
                    {flagship.description}
                  </p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {flagship.bullets.map((b) => (
                    <li
                      key={b}
                      className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-content/85"
                    >
                      <Check size={18} className="shrink-0 text-brand-emerald" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Reveal>

          {/* שאר השירותים */}
          {rest.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group h-full rounded-3xl border border-content/10 bg-elevated/60 p-7 transition-colors duration-300 hover:border-brand-teal/40"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-content/10 bg-content/5 text-brand-cyan transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-ink">
                  <Icon name={s.icon} size={26} />
                </span>
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-content/60">{s.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-content/10 px-3 py-1 text-xs text-content/55"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
