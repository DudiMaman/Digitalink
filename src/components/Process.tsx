import { useContent } from '../i18n'
import SectionHead from './ui/SectionHead'
import Reveal from './ui/Reveal'
import Stats from './Stats'

export default function Process() {
  const { process } = useContent()
  return (
    <section
      id="process"
      className="relative z-[1] px-5 py-[clamp(48px,6vw,80px)] sm:px-8"
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(124,92,255,.045) 30%, rgba(124,92,255,.045) 70%, transparent)',
      }}
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHead eyebrow="PROCESS" title={process.title} subtitle={process.subtitle} />
        <div className="grid grid-cols-1 gap-4 min-[700px]:grid-cols-4">
          {process.steps.map((st, i) => (
            <Reveal key={st.step} delay={i * 0.09}>
              <div className="group h-full rounded-[20px] border border-content/[0.08] bg-white/75 p-7 shadow-[0_4px_20px_rgba(11,18,32,.04)] backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/50 hover:bg-white">
                <span className="text-gradient mb-3.5 block font-grotesk text-[44px] font-bold leading-none">
                  {st.step}
                </span>
                <h3 className="mb-2 text-[19px] font-extrabold text-content">{st.title}</h3>
                <p className="text-[15px] leading-[1.7] text-content/[0.58]">{st.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Stats />
      </div>
    </section>
  )
}
