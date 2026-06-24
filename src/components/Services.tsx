import { motion } from 'framer-motion'
import { useContent } from '../i18n'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import Tilt from './ui/Tilt'

export default function Services() {
  const { services } = useContent()
  return (
    <section id="services" className="relative border-y border-content/5 bg-brand-teal/[0.06] py-16 sm:py-24">
      <div className="container-base">
        <SectionTitle
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />

        {/* 6 קוביות אחידות — 3 בשורה בדסקטופ, מוערמות במובייל */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08}>
              <Tilt className="h-full">
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
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
