import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from 'react'
import { Magnetic } from './Magnetic'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  magnetic?: boolean
  strength?: number
  href?: string
}

/**
 * Card with a soft cursor spotlight + optional magnetic pull.
 */
export function SpotlightCard({
  children,
  className = '',
  magnetic = true,
  strength = 6,
  href,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  const inner = (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`surface-card h-full rounded-[1.5rem] ${className}`}
      style={{ '--mx': '50%', '--my': '50%' } as CSSProperties}
    >
      {children}
    </div>
  )

  const wrapped = magnetic ? (
    <Magnetic strength={strength} className="h-full">
      {inner}
    </Magnetic>
  ) : (
    inner
  )

  if (href) {
    const external = /^https?:\/\//i.test(href)
    return (
      <a
        href={href}
        className="block h-full no-underline outline-none"
        {...(external
          ? { target: '_blank', rel: 'noreferrer noopener' }
          : {})}
      >
        {wrapped}
      </a>
    )
  }

  return wrapped
}
