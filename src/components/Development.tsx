import { motion } from 'framer-motion'
import { useContent } from '../i18n'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import Tilt from './ui/Tilt'

export default function Development() {
  const { development } = useContent()
  return (
    <section id="development" className="relative py-16 sm:py-24">
      <div className="container-base">
        <SectionTitle
          eyebrow={development.eyebrow}
          title={development.title}
          subtitle={development.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {development.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <Tilt className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group h-full rounded-3xl border border-content/10 bg-elevated/60 p-7 transition-colors duration-300 hover:border-brand-teal/40"
                >
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-content/10 bg-content/5 text-brand-cyan transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-ink">
                    <Icon name={item.icon} size={26} />
                  </span>
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-content/60">{item.description}</p>
                </motion.div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
