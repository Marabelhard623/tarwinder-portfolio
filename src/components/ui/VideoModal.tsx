import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'

type VideoModalProps = {
  open: boolean
  title: string
  src: string
  onClose: () => void
}

/**
 * Lightweight demo player. No autoplay — user controls playback.
 * On media error, opens the video URL in a new tab as fallback.
 */
export function VideoModal({ open, title, src, onClose }: VideoModalProps) {
  const titleId = useId()
  const videoRef = useRef<HTMLVideoElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      const video = videoRef.current
      if (video) {
        video.pause()
        video.removeAttribute('src')
        video.load()
      }
    }
  }, [open, onClose])

  if (!open || typeof document === 'undefined') return null

  const openFallback = () => {
    window.open(src, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
        aria-label="Close demo video"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[1] w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-elevated shadow-[var(--shadow-lift)]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
          <h3 id={titleId} className="truncate font-medium text-text">
            {title} — demo
          </h3>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-text"
            aria-label="Close"
          >
            <span aria-hidden className="text-lg leading-none">
              ×
            </span>
          </button>
        </div>

        <div className="bg-black">
          <video
            ref={videoRef}
            key={src}
            className="aspect-video max-h-[min(70vh,720px)] w-full bg-black"
            controls
            playsInline
            preload="metadata"
            controlsList="nodownload"
            onError={openFallback}
          >
            <source src={src} />
            Your browser does not support embedded video.
          </video>
        </div>

        <div className="flex items-center justify-end border-t border-border px-4 py-3 sm:px-5">
          <a
            href={src}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-medium text-muted transition-colors hover:text-text"
          >
            Open in new tab
          </a>
        </div>
      </div>
    </div>,
    document.body,
  )
}
