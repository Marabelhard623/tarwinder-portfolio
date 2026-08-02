import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { site } from '../../data/site'

type ResumeMenuProps = {
  /** Visual style of the trigger */
  variant?: 'link' | 'button' | 'secondary' | 'icon'
  label?: string
  className?: string
}

type MenuPos = { top: number; left: number }

/**
 * Resume trigger with View / Download choices (Google Drive).
 * Menu is portaled to document.body so parent overflow cannot clip it.
 */
export function ResumeMenu({
  variant = 'link',
  label = 'Resume',
  className = '',
}: ResumeMenuProps) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<MenuPos>({ top: 0, left: 0 })
  const rootRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  const updatePosition = () => {
    const trigger = rootRef.current
    if (!trigger) return
    const rect = trigger.getBoundingClientRect()
    const menuWidth = menuRef.current?.offsetWidth ?? 184
    const gap = 8
    let left = rect.left + rect.width / 2 - menuWidth / 2
    left = Math.max(12, Math.min(left, window.innerWidth - menuWidth - 12))
    // Prefer below; flip above if near bottom of viewport
    const menuHeight = menuRef.current?.offsetHeight ?? 96
    const spaceBelow = window.innerHeight - rect.bottom
    const top =
      spaceBelow < menuHeight + gap + 12
        ? rect.top - menuHeight - gap
        : rect.bottom + gap
    setPos({ top, left })
  }

  useLayoutEffect(() => {
    if (!open) return
    updatePosition()
  }, [open])

  useEffect(() => {
    if (!open) return

    const onPointer = (event: MouseEvent) => {
      const t = event.target as Node
      if (rootRef.current?.contains(t) || menuRef.current?.contains(t)) return
      setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onReposition = () => updatePosition()

    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onReposition)
    window.addEventListener('scroll', onReposition, true)

    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onReposition)
      window.removeEventListener('scroll', onReposition, true)
    }
  }, [open])

  const triggerClass =
    variant === 'button'
      ? 'btn-primary'
      : variant === 'secondary'
        ? 'btn-secondary'
        : variant === 'icon'
          ? className ||
            'inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted'
          : 'link-quiet font-medium inline-flex items-center gap-1'

  const menu =
    open && typeof document !== 'undefined'
      ? createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            style={{ top: pos.top, left: pos.left }}
            className="fixed z-[200] min-w-[11.5rem] overflow-hidden rounded-2xl border border-border bg-elevated py-1.5 shadow-[var(--shadow-lift)]"
          >
            <a
              role="menuitem"
              href={site.links.resume.view}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-text transition-colors hover:bg-accent-soft"
              onClick={() => setOpen(false)}
            >
              <EyeIcon />
              View
            </a>
            <a
              role="menuitem"
              href={site.links.resume.download}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-text transition-colors hover:bg-accent-soft"
              onClick={() => setOpen(false)}
            >
              <DownloadIcon />
              Download
            </a>
          </div>,
          document.body,
        )
      : null

  return (
    <div
      ref={rootRef}
      className={variant === 'icon' ? 'relative inline-flex' : `relative inline-flex ${className}`}
    >
      <button
        type="button"
        className={triggerClass}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={label}
        title={label}
        onClick={() => setOpen((v) => !v)}
      >
        {variant === 'icon' ? (
          <FileIcon />
        ) : (
          <>
            {(variant === 'secondary' || variant === 'button') && (
              <span className="mr-0.5 inline-flex" aria-hidden>
                <FileIcon />
              </span>
            )}
            {label}
            <span
              aria-hidden
              className={variant === 'link' ? 'text-[0.65em]' : 'ml-0.5 text-[0.7em]'}
            >
              ▾
            </span>
          </>
        )}
      </button>
      {menu}
    </div>
  )
}

function FileIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
        strokeLinejoin="round"
      />
      <path d="M14 3v5h5M9 13h6M9 17h4" strokeLinecap="round" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path
        d="M12 3v12M7 11l5 5 5-5M5 21h14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
