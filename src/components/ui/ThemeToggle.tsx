import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { Magnetic } from './Magnetic'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Magnetic strength={9}>
      <button
        type="button"
        onClick={toggleTheme}
        className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-surface text-text shadow-[var(--shadow-soft)] transition-[background-color,border-color,transform] duration-200 hover:border-border-strong hover:bg-elevated active:scale-95"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Light mode' : 'Dark mode'}
      >
        <motion.span
          key={theme}
          initial={{ opacity: 0, y: 10, rotate: -35, scale: 0.55 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex"
          aria-hidden
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </button>
    </Magnetic>
  )
}

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <circle cx="12" cy="12" r="3.75" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.4 4.4l1.6 1.6M18 18l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.4 19.6l1.6-1.6M18 6l1.6-1.6" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 14.3A8.4 8.4 0 1 1 9.7 3 6.8 6.8 0 0 0 21 14.3Z" />
    </svg>
  )
}
