import { useContent } from '../i18n'
import SectionHead from './ui/SectionHead'
import Reveal from './ui/Reveal'

export default function Services() {
  const { services } = useContent()
  return (
    <section id="services" className="relative z-[1] px-5 py-[clamp(80px,11vw,150px)] sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead eyebrow="SERVICES" title={services.title} subtitle={services.subtitle} />
        <div
          className="grid gap-[18px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))' }}
        >
          {services.items.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-content/[0.08] bg-white/85 p-7 shadow-card backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/45 hover:bg-white hover:shadow-card-hover">
                <span
                  className="absolute inset-x-[22px] top-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(14,124,255,.55), transparent)' }}
                />
                <h3 className="mb-2.5 text-[22px] font-extrabold tracking-tight text-content">{s.title}</h3>
                <p className="mb-[18px] flex-1 text-[15.5px] leading-[1.75] text-content/[0.62]">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.bullets.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-content/10 bg-content/[0.03] px-3 py-[5px] text-[12.5px] font-semibold text-content/60"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
