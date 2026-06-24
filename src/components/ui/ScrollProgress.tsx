import { motion, useScroll, useSpring } from 'framer-motion'

/** פס התקדמות גלילה עליון בגרדיאנט החתימה (גדל מימין — תואם RTL). */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-right bg-brand-gradient"
      aria-hidden="true"
    />
  )
}
