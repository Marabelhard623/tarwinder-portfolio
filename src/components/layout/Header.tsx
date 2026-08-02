import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../../data/site'
import { Magnetic } from '../ui/Magnetic'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-[var(--header-bg)] shadow-[var(--shadow-soft)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-4 md:h-[4.75rem]">
        <a
          href="#top"
          className="group relative z-10 flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border-strong bg-surface text-[0.7rem] font-semibold tracking-wide text-text shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-[1.05]"
            aria-hidden
          >
            {site.name
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)}
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-text sm:inline">
            <span className="font-serif text-base">{site.name.split(' ')[0]}</span>
            <span className="ml-1.5 text-muted transition-colors group-hover:text-text">
              {site.name.split(' ').slice(1).join(' ')}
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center rounded-full border border-border bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] p-1 shadow-[var(--shadow-soft)] backdrop-blur-md md:flex"
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-[0.8125rem] font-medium text-muted transition-colors hover:bg-elevated hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Magnetic strength={8}>
            <a
              href="#contact"
              className="inline-flex h-9 items-center rounded-full border border-border-strong bg-text px-4 text-[0.8125rem] font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Contact
            </a>
          </Magnetic>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text shadow-[var(--shadow-soft)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 block h-px w-full bg-current transition-transform duration-300 ${
                  open ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-px w-full bg-current transition-transform duration-300 ${
                  open ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-bg/95 backdrop-blur-xl md:hidden"
            aria-label="Mobile"
          >
            <div className="container-page flex flex-col gap-1 py-5">
              {site.nav.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.3 }}
                  className="rounded-2xl px-4 py-3.5 text-base font-medium text-text transition-colors hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
