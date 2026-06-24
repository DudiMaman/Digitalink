import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpLeft } from 'lucide-react'
import { useContent } from '../i18n'
import Magnetic from './ui/Magnetic'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** מילה מתחלפת בלולאה עם החלקה אנכית מאחורי מסכה. */
function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [words])
  return (
    <span className="relative block overflow-hidden py-[0.08em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          className="block text-gradient"
          initial={{ y: '110%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-110%' }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const { hero } = useContent()
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-start overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20"
    >
      {/* רקע Aurora — כתמי גרדיאנט זורמים */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-[20%] right-[-10%] h-[40rem] w-[40rem] rounded-full"
          style={{
            background: 'radial-gradient(closest-side, rgba(34,211,238,0.38), transparent)',
            animation: 'aurora1 16s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[8%] left-[-15%] h-[38rem] w-[38rem] rounded-full"
          style={{
            background: 'radial-gradient(closest-side, rgba(20,184,166,0.36), transparent)',
            animation: 'aurora2 21s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[-25%] left-1/3 h-[34rem] w-[34rem] rounded-full"
          style={{
            background: 'radial-gradient(closest-side, rgba(16,185,129,0.32), transparent)',
            animation: 'aurora3 18s ease-in-out infinite',
          }}
        />
      </div>

      <div className="container-base">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display text-4xl font-extrabold leading-[1.08] sm:text-6xl md:text-7xl"
          >
            <span className="block">{hero.titlePrefix}</span>
            <RotatingWord words={hero.rotatingWords} />
            <span className="block">{hero.titleSuffix}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="mx-auto mt-7 max-w-2xl text-lg text-content/65 sm:text-xl"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
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
