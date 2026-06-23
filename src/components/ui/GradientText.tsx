import type { ReactNode } from 'react'

/** טקסט בגרדיאנט החתימה של המותג. */
export default function GradientText({ children }: { children: ReactNode }) {
  return <span className="text-gradient">{children}</span>
}
