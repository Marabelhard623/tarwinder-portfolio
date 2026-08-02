import { useState } from 'react'
import { site } from '../../data/site'
import { getDriveImageSrc } from '../../lib/drive'

/**
 * Profile area: Drive photo when available, monogram placeholder on missing/fail.
 */
export function ProfilePortrait() {
  const initials = site.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  const imageSrc = site.profile.drive
    ? getDriveImageSrc(site.profile.drive)
    : null

  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const showImage = Boolean(imageSrc) && !failed

  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-accent-soft via-surface to-[color-mix(in_srgb,var(--glow)_45%,var(--surface))]">
      {/* Always-ready monogram (shown until image loads, or forever on failure) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-500 ${
          showImage && loaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden={showImage && loaded}
      >
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-border-strong bg-[color-mix(in_srgb,var(--elevated)_75%,transparent)] font-serif text-4xl text-text shadow-[var(--shadow-soft)] backdrop-blur-sm">
          {initials}
        </div>
        <p className="relative mt-6 font-serif text-2xl tracking-tight text-text">
          {site.name}
        </p>
        <p className="relative mt-2 text-sm text-muted">{site.role}</p>
        <p className="relative mt-1 text-xs text-faint">{site.location}</p>
      </div>

      {showImage && imageSrc ? (
        <img
          src={imageSrc}
          alt={site.profile.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setFailed(true)
            setLoaded(false)
          }}
        />
      ) : null}

      {/* Soft base for name overlay when photo is showing */}
      {showImage && loaded ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-6 pb-6 pt-20 text-left">
          <p className="font-serif text-2xl tracking-tight text-white">{site.name}</p>
          <p className="mt-1 text-sm text-white/80">{site.role}</p>
        </div>
      ) : (
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      )}
    </div>
  )
}
