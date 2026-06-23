import { motion } from 'framer-motion'
import { ArrowUpLeft, Sparkles } from 'lucide-react'
import { hero, brand } from '../data/content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* רקע גרדיאנט נע + צורות מרחפות */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] animate-float rounded-full bg-brand-teal/25 blur-[120px]" />
        <div
          className="absolute bottom-[-10%] left-[-10%] h-[30rem] w-[30rem] animate-float rounded-full bg-brand-cyan/20 blur-[120px]"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute right-1/3 top-1/3 h-[22rem] w-[22rem] animate-float rounded-full bg-brand-emerald/20 blur-[110px]"
          style={{ animationDelay: '4s' }}
        />
        {/* רשת עדינה — currentColor מתאים את עצמו לכהה/בהיר */}
        <div
          className="absolute inset-0 text-content opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="container-base">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-brand-cyan"
          >
            <Sparkles size={16} />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-extrabold leading-[1.1] sm:text-6xl md:text-7xl"
          >
            {hero.titleLines.map((line, i) => (
              <span key={i} className="block">
                {line.split(hero.highlight).map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && (
                      <span className="text-gradient">{hero.highlight}</span>
                    )}
                  </span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-7 max-w-2xl text-lg text-content/65 sm:text-xl"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              {hero.primaryCta}
              <ArrowUpLeft size={20} />
            </a>
            <a href="#services" className="btn-ghost w-full sm:w-auto">
              {hero.secondaryCta}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-sm uppercase tracking-[0.15em] text-content/40"
          >
            {hero.proof}
          </motion.p>
        </div>
      </div>

      {/* שם המותג ברקע התחתון */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[18vw] font-black leading-none text-content/[0.03] md:text-[12vw]"
        dir="ltr"
      >
        {brand.name}
      </span>
    </section>
  )
}
