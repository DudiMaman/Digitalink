import { useContent } from '../i18n'
import Reveal from './ui/Reveal'

export default function Approach() {
  const { approach } = useContent()
  return (
    <section id="approach" className="relative z-[1] px-5 py-[clamp(80px,11vw,150px)] sm:px-8">
      <div
        className="mx-auto grid max-w-[1240px] items-start gap-[clamp(32px,5vw,72px)]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))' }}
      >
        <Reveal className="lg:sticky lg:top-[110px]">
          <span className="eyebrow text-brand-purple">OUR APPROACH</span>
          <h2 className="mb-4 mt-3.5 text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.12] tracking-tight text-content">
            {approach.title}
          </h2>
          <p className="max-w-[460px] text-[17px] leading-[1.75] text-content/[0.62]">
            {approach.subtitle}
          </p>
        </Reveal>

        <div className="flex flex-col">
          {approach.items.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <div className="group flex gap-[22px] border-b border-content/10 px-1 py-[30px] transition-all duration-300 hover:border-brand-blue/50 hover:ps-3.5">
                <span
                  className="shrink-0 font-grotesk text-[15px] font-semibold leading-[1.9] text-transparent"
                  style={{ WebkitTextStroke: '1px rgba(14,124,255,.8)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="mb-2 text-[21px] font-extrabold text-content">{r.title}</h3>
                  <p className="text-[15.5px] leading-[1.75] text-content/60">{r.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
