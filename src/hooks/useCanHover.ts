import { useEffect, useState } from 'react'

/** True when the device supports fine pointer hover (desktop-like). */
export function useCanHover() {
  const [canHover, setCanHover] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches
  })

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const onChange = () => setCanHover(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return canHover
}
