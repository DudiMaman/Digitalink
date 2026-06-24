import { motion } from 'framer-motion'
import { ArrowUpLeft } from 'lucide-react'
import { hero } from '../data/content'
import CyberGrid from './ui/CyberGrid'
import Magnetic from './ui/Magnetic'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] flex-col justify-start overflow-hidden pt-36 sm:pt-44"
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
        {/* רשת סייבר עדינה עם פולסים זורמים */}
        <CyberGrid />
      </div>

      <div className="container-base">
        <div className="mx-auto max-w-4xl text-center">
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
            <Magnetic className="w-full sm:w-auto">
              <a href="#contact" className="btn-primary w-full">
                {hero.primaryCta}
                <ArrowUpLeft size={20} />
              </a>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <a href="#services" className="btn-ghost w-full">
                {hero.secondaryCta}
              </a>
            </Magnetic>
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
    </section>
  )
}
