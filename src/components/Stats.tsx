import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '../data/content'
import Reveal from './ui/Reveal'

type Stat = (typeof stats)[number]

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)
  const isFloat = !Number.isInteger(value)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      // easing out-cubic
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return <span ref={ref}>{isFloat ? display.toFixed(1) : Math.round(display)}</span>
}

export default function Stats() {
  return (
    <section className="relative py-14">
      <div className="container-base">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid divide-content/10 sm:grid-cols-2 sm:divide-x sm:divide-x-reverse lg:grid-cols-4">
            {stats.map((s: Stat, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-2 px-6 py-10 text-center">
                  <div className="font-display text-4xl font-black sm:text-5xl">
                    <span className="text-gradient">
                      {'prefix' in s && s.prefix ? s.prefix : ''}
                      <CountUp value={s.value} />
                      {s.suffix ?? ''}
                    </span>
                  </div>
                  <p className="text-sm text-content/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
