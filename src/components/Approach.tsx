import { motion } from 'framer-motion'
import { useContent } from '../i18n'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'

export default function Approach() {
  const { approach } = useContent()
  return (
    <section id="approach" className="relative border-y border-content/5 bg-brand-teal/[0.06] py-16 sm:py-24">
      {/* הילה רקע */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div
          className="h-96 w-96 rounded-full"
          style={{ background: 'radial-gradient(closest-side, rgba(20,184,166,0.12), transparent)' }}
        />
      </div>

      <div className="container-base">
        <SectionTitle
          eyebrow={approach.eyebrow}
          title={approach.title}
          subtitle={approach.subtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {approach.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass h-full rounded-2xl p-6 transition-colors duration-300 hover:border-brand-teal/40"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-ink">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-content/60">{item.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
