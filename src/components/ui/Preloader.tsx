import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand } from '../../data/content'

/** מסך פתיחה — סמל המותג נכנס וחץ הצמיחה "מצייר את עצמו", ואז האתר נחשף. */
export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(() => setDone(true), reduce ? 150 : 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-5" dir="ltr">
            <motion.span
              className="grid h-20 w-20 place-items-center rounded-2xl bg-brand-gradient shadow-xl shadow-brand-teal/30"
              initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
            >
              <svg viewBox="0 0 24 24" className="h-11 w-11" fill="none" aria-hidden="true">
                <motion.path
                  d="M6 18 L18 6"
                  stroke="white"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.35 }}
                />
                <motion.path
                  d="M10.5 6 H18 V13.5"
                  stroke="white"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: 0.95 }}
                />
              </svg>
            </motion.span>
            <motion.span
              className="font-display text-2xl font-extrabold tracking-[0.04em] text-content"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
            >
              {brand.nameParts.first}{' '}
              <span className="text-gradient">{brand.nameParts.second}</span>
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
