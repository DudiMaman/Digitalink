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
  Globe,
  Smartphone,
  LayoutDashboard,
  Puzzle,
  Wrench,
  type LucideProps,
} from 'lucide-react'

/** ממפה שם אייקון (מ-content) לרכיב lucide. */
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
  Globe,
  Smartphone,
  LayoutDashboard,
  Puzzle,
  Wrench,
} as const

export type IconName = keyof typeof icons

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name as IconName] ?? Sparkles
  return <Cmp {...props} />
}
