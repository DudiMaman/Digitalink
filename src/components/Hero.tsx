import { motion } from 'framer-motion'
import { ArrowUpLeft } from 'lucide-react'
import { hero } from '../data/content'
import Magnetic from './ui/Magnetic'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** שורת כותרת שנחשפת כלפי מעלה מאחורי מסכה (mask reveal). */
function RevealLine({ text, index }: { text: string; index: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: '115%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 + index * 0.12, ease: EASE }}
      >
        {text.split(hero.highlight).map((part, j, arr) => (
          <span key={j}>
            {part}
            {j < arr.length - 1 && <span className="text-gradient">{hero.highlight}</span>}
          </span>
        ))}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-start overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20"
    >
      {/* רקע — צורות גרדיאנט מרחפות עדינות */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] animate-float rounded-full bg-brand-teal/20 blur-[130px]" />
        <div
          className="absolute bottom-[-10%] left-[-10%] h-[30rem] w-[30rem] animate-float rounded-full bg-brand-cyan/15 blur-[130px]"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute right-1/3 top-1/3 h-[22rem] w-[22rem] animate-float rounded-full bg-brand-emerald/15 blur-[120px]"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="container-base">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-extrabold leading-[1.12] sm:text-6xl md:text-7xl">
            {hero.titleLines.map((line, i) => (
              <RevealLine key={i} text={line} index={i} />
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            className="mx-auto mt-7 max-w-2xl text-lg text-content/65 sm:text-xl"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease: EASE }}
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
        </div>
      </div>
    </section>
  )
}
