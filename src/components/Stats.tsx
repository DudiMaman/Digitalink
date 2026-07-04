import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useContent } from '../i18n'
import Reveal from './ui/Reveal'

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)
  const isFloat = !Number.isInteger(value)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return <span ref={ref}>{isFloat ? display.toFixed(1) : Math.round(display)}</span>
}

/** פס סטטיסטיקות עם count-up — משובץ בתוך סקשן התהליך. */
export default function Stats() {
  const { stats } = useContent()
  return (
    <Reveal delay={0.12}>
      <div className="mt-[clamp(28px,4vw,48px)] grid grid-cols-1 overflow-hidden rounded-[24px] border border-content/[0.08] bg-white/80 shadow-[0_10px_40px_rgba(11,18,32,.06)] backdrop-blur-[10px] sm:grid-cols-2 min-[700px]:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-s border-content/[0.06] px-6 py-9 text-center">
            <div dir="ltr" className="text-gradient font-grotesk text-[clamp(34px,4vw,46px)] font-bold">
              {s.prefix}
              <CountUp value={s.value} />
              {s.suffix}
            </div>
            <div className="mt-1.5 text-[15px] font-medium text-content/60">{s.label}</div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
