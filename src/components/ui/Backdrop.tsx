import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hue: string
}

/** רקע חי — canvas רשת נקודות כחול/סגול, כתמי זוהר בפרלקס, ורשת טכנית. */
export default function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const orb1 = useRef<HTMLDivElement>(null)
  const orb2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onScroll = () => {
      const sy = window.scrollY
      if (orb1.current) orb1.current.style.translate = `0 ${sy * 0.06}px`
      if (orb2.current) orb2.current.style.translate = `0 ${sy * 0.1}px`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    let raf = 0
    let onResize: (() => void) | null = null
    let onPm: ((e: PointerEvent) => void) | null = null

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx && !reduce) {
      const N = 70
      const LINK = 150
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const mouse = { x: -9999, y: -9999 }
      let nodes: Node[] | null = null
      let W = 0
      let H = 0

      const init = () => {
        W = window.innerWidth
        H = window.innerHeight
        canvas.width = W * dpr
        canvas.height = H * dpr
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        if (!nodes) {
          nodes = Array.from({ length: N }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: 1 + Math.random() * 1.6,
            hue: Math.random() < 0.6 ? '14,124,255' : '124,92,255',
          }))
        }
      }
      init()
      onResize = () => init()
      onPm = (e: PointerEvent) => {
        mouse.x = e.clientX
        mouse.y = e.clientY
      }
      window.addEventListener('resize', onResize)
      window.addEventListener('pointermove', onPm)

      const tick = () => {
        raf = requestAnimationFrame(tick)
        if (!nodes) return
        ctx.clearRect(0, 0, W, H)
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < -20) n.x = W + 20
          if (n.x > W + 20) n.x = -20
          if (n.y < -20) n.y = H + 20
          if (n.y > H + 20) n.y = -20
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const md = Math.hypot(dx, dy)
          if (md < 140 && md > 0.01) {
            n.x += (dx / md) * 0.5
            n.y += (dy / md) * 0.5
          }
        }
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i]
            const b = nodes[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const d2 = dx * dx + dy * dy
            if (d2 < LINK * LINK) {
              const alpha = (1 - Math.sqrt(d2) / LINK) * 0.12
              ctx.strokeStyle = `rgba(${a.hue},${alpha.toFixed(3)})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.stroke()
            }
          }
        }
        for (const n of nodes) {
          ctx.fillStyle = `rgba(${n.hue},0.4)`
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      tick()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      if (onResize) window.removeEventListener('resize', onResize)
      if (onPm) window.removeEventListener('pointermove', onPm)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-[0.55]" />
      <div
        ref={orb1}
        className="absolute -left-40 -top-44 h-[640px] w-[640px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(14,124,255,.13), transparent 65%)' }}
      />
      <div
        ref={orb2}
        className="absolute -right-56 top-[30vh] h-[700px] w-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,92,255,.12), transparent 65%)' }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11,18,32,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,18,32,.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, black, transparent 75%)',
        }}
      />
    </div>
  )
}
