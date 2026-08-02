/**
 * Extract a Google Drive file id from common share / view URLs.
 */
export function getDriveFileId(url: string): string | null {
  if (!url.trim()) return null

  const patterns = [
    /\/file\/d\/([^/]+)/,
    /[?&]id=([^&]+)/,
    /\/d\/([^/]+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match?.[1]) return match[1]
  }

  // Bare file id
  if (/^[a-zA-Z0-9_-]{20,}$/.test(url.trim())) return url.trim()
  return null
}

/**
 * Public image URL for a Drive file (must be "Anyone with the link").
 * Thumbnail endpoint is more reliable in <img> than /uc?export=view.
 */
export function getDriveImageSrc(driveUrlOrId: string, size = 1200): string | null {
  const id = getDriveFileId(driveUrlOrId)
  if (!id) return null
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`
}
