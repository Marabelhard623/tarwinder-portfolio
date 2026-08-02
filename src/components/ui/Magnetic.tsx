import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useRef, type PointerEvent, type ReactNode } from 'react'
import { useCanHover } from '../../hooks/useCanHover'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type MagneticProps = {
  children: ReactNode
  /** Pixel pull strength toward the cursor (default 10). */
  strength?: number
  className?: string
} & Omit<HTMLMotionProps<'div'>, 'children' | 'className'>

/**
 * Subtle magnetic pull on desktop hover. Disabled for touch and reduced motion.
 */
export function Magnetic({
  children,
  strength = 10,
  className,
  ...rest
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const canHover = useCanHover()
  const reduced = usePrefersReducedMotion()
  const enabled = canHover && !reduced

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.35 })

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = event.clientX - rect.left - rect.width / 2
    const relY = event.clientY - rect.top - rect.height / 2
    x.set((relX / (rect.width / 2)) * strength)
    y.set((relY / (rect.height / 2)) * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={enabled ? { x: springX, y: springY } : undefined}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
