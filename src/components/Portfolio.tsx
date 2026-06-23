import { motion } from 'framer-motion'
import { ArrowUpLeft } from 'lucide-react'
import { portfolio } from '../data/content'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="container-base">
        <SectionTitle
          eyebrow="תיק עבודות"
          title={portfolio.title}
          subtitle={portfolio.subtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-content/10 bg-elevated/60 p-7 transition-colors duration-300 hover:border-brand-teal/40"
              >
                {/* זוהר רקע בהובר */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-teal/0 blur-3xl transition-all duration-500 group-hover:bg-brand-teal/20" />

                <div className="relative flex items-start justify-between">
                  <span className="glass rounded-full px-3 py-1 text-xs font-medium text-brand-cyan">
                    {c.category}
                  </span>
                  <span className="font-display text-3xl font-black text-gradient">
                    {c.metric}
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-bold">
                  {c.title}
                </h3>
                <p className="relative mt-2 text-content/60">{c.result}</p>

                <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  צפו בפרויקט
                  <ArrowUpLeft size={16} />
                </span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
