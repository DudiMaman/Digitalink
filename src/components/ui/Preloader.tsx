import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand } from '../../data/content'

/** מסך פתיחה — חץ הלוגו "מצייר את עצמו" ואז האתר נחשף. */
export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(() => setDone(true), reduce ? 150 : 1750)
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
            <svg viewBox="0 0 32 32" className="h-16 w-16" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="pre-arrow" x1="0" y1="32" x2="32" y2="0">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="50%" stopColor="#14B8A6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <motion.path
                d="M8 24 L24 8 M24 8 H12 M24 8 V20"
                stroke="url(#pre-arrow)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </svg>
            <motion.span
              className="font-display text-2xl font-extrabold tracking-tight text-content"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
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
