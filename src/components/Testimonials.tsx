import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-base">
        <SectionTitle eyebrow="המלצות" title={testimonials.title} />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.figure
                whileHover={{ y: -6 }}
                className="glass flex h-full flex-col rounded-2xl p-7"
              >
                <Quote className="mb-4 text-brand-teal" size={32} />
                <blockquote className="flex-1 text-lg leading-relaxed text-white/80">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient font-display font-bold text-ink">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-white/55">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
