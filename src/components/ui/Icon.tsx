import {
  Share2,
  Target,
  Search,
  Sparkles,
  Workflow,
  BarChart3,
  Palette,
  Eye,
  Zap,
  type LucideProps,
} from 'lucide-react'

/** ממפה שם אייקון (מ-content.ts) לרכיב lucide. */
const icons = {
  Share2,
  Target,
  Search,
  Sparkles,
  Workflow,
  BarChart3,
  Palette,
  Eye,
  Zap,
} as const

export type IconName = keyof typeof icons

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name as IconName] ?? Sparkles
  return <Cmp {...props} />
}
