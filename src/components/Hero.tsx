import { useEffect, useState } from 'react'
import { useContent } from '../i18n'
import Reveal from './ui/Reveal'

/** מילה מתחלפת (רוטור) — fade + translateY, כמו במקור. */
function RotatingWord({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0)
  const [show, setShow] = useState(true)
  useEffect(() => {
    let to: ReturnType<typeof setTimeout>
    const iv = setInterval(() => {
      setShow(false)
      to = setTimeout(() => {
        setIdx((v) => (v + 1) % words.length)
        setShow(true)
      }, 460)
    }, 2600)
    return () => {
      clearInterval(iv)
      clearTimeout(to)
    }
  }, [words])
  return (
    <span
      className="text-gradient-tri inline-block"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'none' : 'translateY(14px)',
        transition: 'opacity .45s ease, transform .45s ease',
      }}
    >
      {words[idx]}
    </span>
  )
}

export default function Hero() {
  const { hero } = useContent()
  return (
    <section
      id="hero"
      className="relative z-[1] flex min-h-[100svh] flex-col items-center justify-center px-5 pb-10 pt-[clamp(120px,16vh,180px)] text-center sm:px-8"
    >
      <Reveal>
        <h1 className="max-w-[1050px] text-[clamp(50px,9vw,116px)] font-black leading-[1.05] tracking-[-1px] text-content [text-wrap:balance]">
          {hero.titlePrefix}{' '}
          <RotatingWord words={hero.rotatingWords} />
        </h1>
      </Reveal>

      <Reveal delay={0.18}>
        <p className="mx-auto mt-6 max-w-[680px] text-[clamp(17px,2vw,21px)] leading-[1.7] text-content/[0.68]">
          {hero.subtitle}
        </p>
      </Reveal>

      <Reveal delay={0.28}>
        <div className="mt-10 flex flex-wrap justify-center gap-3.5">
          <a href="#contact" className="btn-primary">
            {hero.primaryCta} <span aria-hidden="true">←</span>
          </a>
          <a href="#services" className="btn-ghost">
            {hero.secondaryCta}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
