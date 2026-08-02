import { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type Particle = {
  x: number
  y: number
  ox: number
  oy: number
  vx: number
  vy: number
  r: number
  hue: number
  alpha: number
}

/** Tiny free-drifting / twinkling dots — no mouse interaction. */
type Spark = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hue: number
  phase: number
  speed: number
}

const COUNT_DESKTOP = 110
const COUNT_MOBILE = 64

// Ambient layer (set false or lower counts to tone down / revert)
const ENABLE_SPARKS = true
const SPARK_DESKTOP = 180
const SPARK_MOBILE = 36

const MAX_DPR = 1.5

/**
 * Soft ambient particles with gentle mouse attraction/repulsion.
 * Plus a non-interactive layer of tiny drifting / blinking sparks.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const reducedMotion = usePrefersReducedMotion()
  const themeRef = useRef(theme)

  useEffect(() => {
    themeRef.current = theme
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0
    let prevW = 0
    let prevH = 0
    let dpr = 1
    let raf = 0
    let running = true
    let particles: Particle[] = []
    let sparks: Spark[] = []
    let isMobile = window.matchMedia('(max-width: 768px)').matches
    let particleCount = isMobile ? COUNT_MOBILE : COUNT_DESKTOP
    let sparkCount = isMobile ? SPARK_MOBILE : SPARK_DESKTOP

    const mouse = { x: -9999, y: -9999, active: false }

    const clamp = (value: number, min: number, max: number) =>
      Math.max(min, Math.min(max, value))

    /**
     * Scale field with the viewport. Never clamp everything to the same edge —
     * that piles dots into a vertical/horizontal line after resize.
     */
    const resize = () => {
      const nextW = Math.max(1, window.innerWidth)
      const nextH = Math.max(1, window.innerHeight)
      const oldW = prevW || nextW
      const oldH = prevH || nextH

      isMobile = window.matchMedia('(max-width: 768px)').matches
      particleCount = isMobile ? COUNT_MOBILE : COUNT_DESKTOP
      sparkCount = isMobile ? SPARK_MOBILE : SPARK_DESKTOP

      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
      canvas.width = Math.floor(nextW * dpr)
      canvas.height = Math.floor(nextH * dpr)
      canvas.style.width = `${nextW}px`
      canvas.style.height = `${nextH}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const sizeChanged = nextW !== oldW || nextH !== oldH
      const sx = nextW / oldW
      const sy = nextH / oldH
      // Big jumps (device rotate / restore maximized): full reseed is cleaner
      const extreme =
        sizeChanged && (sx < 0.6 || sx > 1.7 || sy < 0.6 || sy > 1.7)

      if (particles.length === 0 || particles.length !== particleCount || extreme) {
        particles = Array.from({ length: particleCount }, () =>
          createParticle(nextW, nextH),
        )
      } else if (sizeChanged) {
        const pad = 12
        for (const p of particles) {
          p.x = clamp(p.x * sx, pad, nextW - pad)
          p.y = clamp(p.y * sy, pad, nextH - pad)
          p.ox = clamp(p.ox * sx, pad, nextW - pad)
          p.oy = clamp(p.oy * sy, pad, nextH - pad)
          p.vx *= 0.4
          p.vy *= 0.4
        }
      }

      if (ENABLE_SPARKS) {
        if (sparks.length === 0 || sparks.length !== sparkCount || extreme) {
          sparks = Array.from({ length: sparkCount }, () => createSpark(nextW, nextH))
        } else if (sizeChanged) {
          for (const s of sparks) {
            s.x = ((s.x * sx) % nextW + nextW) % nextW
            s.y = ((s.y * sy) % nextH + nextH) % nextH
          }
        }
      }

      width = nextW
      height = nextH
      prevW = nextW
      prevH = nextH
    }

    const onMove = (event: PointerEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
      mouse.active = true
    }

    const onLeave = () => {
      mouse.active = false
    }

    const onVisibility = () => {
      running = !document.hidden
      if (running) raf = requestAnimationFrame(tick)
    }

    /** Richer palette: teal / jade / gold / champagne */
    const particleColor = (hue: number, alphaScale = 1) => {
      const dark = themeRef.current === 'dark'
      const palettes = dark
        ? [
            [140, 220, 185],
            [110, 200, 195],
            [232, 196, 120],
            [245, 235, 210],
            [120, 210, 160],
          ]
        : [
            [45, 130, 115],
            [55, 145, 110],
            [185, 140, 55],
            [175, 115, 75],
            [90, 145, 115],
          ]

      const [r, g, b] = palettes[hue % palettes.length]
      const baseAlpha = dark ? 0.72 : 0.58
      return `rgba(${r}, ${g}, ${b}, ${baseAlpha * alphaScale})`
    }

    const lineColor = () => {
      const dark = themeRef.current === 'dark'
      return dark ? 'rgba(150, 215, 190, 0.16)' : 'rgba(60, 130, 110, 0.14)'
    }

    /** Sparks need higher contrast on light paper than main particles. */
    const sparkColor = (hue: number, alphaScale = 1) => {
      const dark = themeRef.current === 'dark'
      const palettes = dark
        ? [
            [150, 230, 195],
            [120, 210, 205],
            [240, 205, 130],
            [250, 242, 220],
            [130, 220, 170],
          ]
        : [
            // deeper, inkier hues so tiny dots read on warm paper
            [22, 95, 82],
            [28, 105, 78],
            [140, 100, 28],
            [125, 78, 42],
            [48, 100, 78],
          ]

      const [r, g, b] = palettes[hue % palettes.length]
      const baseAlpha = dark ? 0.7 : 0.88
      return `rgba(${r}, ${g}, ${b}, ${baseAlpha * alphaScale})`
    }

    const tick = () => {
      if (!running) return
      ctx.clearRect(0, 0, width, height)

      const linkDist = isMobile ? 96 : 128
      const mouseRadius = isMobile ? 130 : 190
      const stroke = lineColor()
      const isDark = themeRef.current === 'dark'

      // --- Non-interactive sparks (behind main field) ---
      if (ENABLE_SPARKS) {
        for (let i = 0; i < sparks.length; i++) {
          const s = sparks[i]

          if (!reducedMotion) {
            s.x += s.vx
            s.y += s.vy
            s.phase += s.speed

            // soft wrap / re-enter from opposite edge
            if (s.x < -4) s.x = width + 4
            if (s.x > width + 4) s.x = -4
            if (s.y < -4) s.y = height + 4
            if (s.y > height + 4) s.y = -4

            // occasional gentle direction drift
            if (Math.random() < 0.01) {
              s.vx += (Math.random() - 0.5) * 0.04
              s.vy += (Math.random() - 0.5) * 0.04
              const sp = Math.hypot(s.vx, s.vy) || 1
              const max = 0.35
              if (sp > max) {
                s.vx = (s.vx / sp) * max
                s.vy = (s.vy / sp) * max
              }
            }
          }

          // blink: stronger floor on light mode so dots stay readable
          const twinkle = reducedMotion
            ? isDark
              ? 0.55
              : 0.72
            : isDark
              ? 0.22 + (0.5 + 0.5 * Math.sin(s.phase)) * 0.78
              : 0.48 + (0.5 + 0.5 * Math.sin(s.phase)) * 0.52

          const drawR = isDark ? s.r : s.r * 1.35

          // light mode: tiny halo so small dots pop on paper
          if (!isDark) {
            ctx.beginPath()
            ctx.fillStyle = sparkColor(s.hue, twinkle * 0.28)
            ctx.arc(s.x, s.y, drawR * 2.4, 0, Math.PI * 2)
            ctx.fill()
          }

          ctx.beginPath()
          ctx.fillStyle = sparkColor(s.hue, twinkle)
          ctx.arc(s.x, s.y, drawR, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // --- Interactive main particles ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (!reducedMotion) {
          const dxo = p.ox - p.x
          const dyo = p.oy - p.y
          p.vx += dxo * 0.0032
          p.vy += dyo * 0.0032

          p.vx += (Math.random() - 0.5) * 0.015
          p.vy += (Math.random() - 0.5) * 0.015

          if (mouse.active) {
            const dx = p.x - mouse.x
            const dy = p.y - mouse.y
            const dist = Math.hypot(dx, dy) || 1
            if (dist < mouseRadius) {
              const force = (1 - dist / mouseRadius) * 0.6
              if (dist < mouseRadius * 0.35) {
                p.vx += (dx / dist) * force * 1.15
                p.vy += (dy / dist) * force * 1.15
              } else {
                p.vx -= (dx / dist) * force * 0.32
                p.vy -= (dy / dist) * force * 0.32
              }
            }
          }

          p.vx *= 0.9
          p.vy *= 0.9
          p.x += p.vx
          p.y += p.vy

          // Keep anchors + positions inside the current viewport
          const pad = 8
          if (p.x < pad || p.x > width - pad) {
            p.vx *= -0.4
            p.x = clamp(p.x, pad, width - pad)
          }
          if (p.y < pad || p.y > height - pad) {
            p.vy *= -0.4
            p.y = clamp(p.y, pad, height - pad)
          }
          p.ox = clamp(p.ox, pad, width - pad)
          p.oy = clamp(p.oy, pad, height - pad)
        }

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.2)
        glow.addColorStop(0, particleColor(p.hue, p.alpha * 0.9))
        glow.addColorStop(0.45, particleColor(p.hue, p.alpha * 0.35))
        glow.addColorStop(1, particleColor(p.hue, 0))
        ctx.beginPath()
        ctx.fillStyle = glow
        ctx.arc(p.x, p.y, p.r * 3.2, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = particleColor(p.hue, p.alpha)
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist > linkDist) continue
          const alpha = 1 - dist / linkDist
          ctx.strokeStyle = stroke
          ctx.globalAlpha = alpha * 0.95
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      }

      raf = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    raf = requestAnimationFrame(tick)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full"
      aria-hidden
    />
  )
}

function createParticle(width: number, height: number): Particle {
  const x = Math.random() * width
  const y = Math.random() * height
  return {
    x,
    y,
    ox: x + (Math.random() - 0.5) * 50,
    oy: y + (Math.random() - 0.5) * 50,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    r: 0.9 + Math.random() * 2.1,
    hue: Math.floor(Math.random() * 5),
    alpha: 0.75 + Math.random() * 0.35,
  }
}

function createSpark(width: number, height: number): Spark {
  const angle = Math.random() * Math.PI * 2
  const speed = 0.08 + Math.random() * 0.22
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: 0.45 + Math.random() * 1.05,
    hue: Math.floor(Math.random() * 5),
    phase: Math.random() * Math.PI * 2,
    speed: 0.02 + Math.random() * 0.045,
  }
}
