import { useEffect, useRef } from 'react'

/**
 * רקע סייבר עדין — רשת קווים דקה עם "פולסים" של אור שזורמים לאורכה,
 * כמו זרימת דאטה במעגלים. תנועה איטית וברורה, ללא תלות בעכבר.
 */
export default function CyberGrid() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const GAP = 58
    let w = 0
    let h = 0
    let cols = 0
    let rows = 0

    type Pulse = {
      axis: 'h' | 'v'
      line: number
      pos: number
      speed: number
      length: number
      color: string
    }
    let pulses: Pulse[] = []
    const colors = ['34,211,238', '20,184,166', '16,185,129']

    const spawn = (): Pulse => {
      const axis = Math.random() > 0.5 ? 'h' : 'v'
      const span = axis === 'h' ? w : h
      return {
        axis,
        line: Math.floor(Math.random() * (axis === 'h' ? rows : cols)),
        pos: Math.random() * span,
        speed: (0.35 + Math.random() * 0.65) * (Math.random() > 0.5 ? 1 : -1),
        length: 70 + Math.random() * 90,
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(w / GAP)
      rows = Math.ceil(h / GAP)
      const count = Math.min(16, Math.max(6, Math.round((w * h) / 80000)))
      pulses = Array.from({ length: count }, spawn)
    }
    resize()
    window.addEventListener('resize', resize)

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(20,184,166,0.055)'
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let c = 0; c <= cols; c++) {
        const x = c * GAP
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
      }
      for (let r = 0; r <= rows; r++) {
        const y = r * GAP
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
      }
      ctx.stroke()
    }

    let raf = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      drawGrid()

      for (const p of pulses) {
        if (!reduce) p.pos += p.speed
        const span = p.axis === 'h' ? w : h
        if (p.pos > span + p.length) p.pos = -p.length
        else if (p.pos < -p.length) p.pos = span + p.length

        const dir = Math.sign(p.speed) || 1
        let x1: number
        let y1: number
        let x2: number
        let y2: number
        if (p.axis === 'h') {
          const y = p.line * GAP
          x1 = p.pos
          y1 = y
          x2 = p.pos - dir * p.length
          y2 = y
        } else {
          const x = p.line * GAP
          x1 = x
          y1 = p.pos
          x2 = x
          y2 = p.pos - dir * p.length
        }

        const grad = ctx.createLinearGradient(x1, y1, x2, y2)
        grad.addColorStop(0, `rgba(${p.color},0.85)`)
        grad.addColorStop(1, `rgba(${p.color},0)`)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        ctx.fillStyle = `rgba(${p.color},1)`
        ctx.shadowColor = `rgba(${p.color},0.9)`
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(x1, y1, 1.9, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
