import { useContent } from '../i18n'
import SectionHead from './ui/SectionHead'
import Reveal from './ui/Reveal'

export default function Development() {
  const { development } = useContent()
  return (
    <section
      id="development"
      className="relative z-[1] px-5 py-[clamp(80px,11vw,150px)] sm:px-8"
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(14,124,255,.04) 30%, rgba(14,124,255,.04) 70%, transparent)',
      }}
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          eyebrow="DEVELOPMENT"
          eyebrowColor="text-brand-purple"
          title={development.title}
          subtitle={development.subtitle}
        />
        <div
          className="grid gap-[18px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))' }}
        >
          {development.items.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-[22px] border border-content/[0.08] bg-white/85 p-7 shadow-card backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple/50 hover:bg-white hover:shadow-[0_24px_60px_rgba(124,92,255,.16)]">
                <span
                  className="absolute inset-x-[22px] top-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(124,92,255,.55), transparent)' }}
                />
                <h3 className="mb-2 text-[21px] font-extrabold tracking-tight text-content">{d.title}</h3>
                <p className="text-[15.5px] leading-[1.75] text-content/[0.62]">{d.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
