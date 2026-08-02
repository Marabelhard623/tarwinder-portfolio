import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const ease = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
} & Omit<HTMLMotionProps<'div'>, 'children' | 'className'>

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  ...rest
}: RevealProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return (
      <div className={className} {...(rest as object)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10% 0px -8% 0px' }}
      transition={{ duration: 0.7, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: StaggerProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px -8% 0px' }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  y = 22,
}: {
  children: ReactNode
  className?: string
  y?: number
}) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
