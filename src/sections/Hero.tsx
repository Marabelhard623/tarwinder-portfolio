import { motion } from 'framer-motion'
import { site } from '../data/site'
import { Magnetic } from '../components/ui/Magnetic'
import { ResumeMenu } from '../components/ui/ResumeMenu'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduced = usePrefersReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: reduced
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.12 },
    },
  }

  const item = {
    hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease },
    },
  }

  const nameParts = site.name.split(' ')
  const firstName = nameParts[0]
  const restName = nameParts.slice(1).join(' ')

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-44 sm:pb-36"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 hairline opacity-70" />
        <div className="absolute left-1/2 top-[16%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_68%)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse 65% 55% at 50% 32%, black, transparent)',
          }}
        />
      </div>

      <div className="container-page">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={item} className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-[color-mix(in_srgb,var(--surface)_82%,transparent)] px-4 py-1.5 text-[0.75rem] font-medium text-muted shadow-[var(--shadow-soft)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-35" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to full-stack opportunities
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-faint"
          >
            {site.role}
            <span className="mx-2.5 text-border-strong">·</span>
            {site.location}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="font-serif text-[3.15rem] leading-[1.02] tracking-[-0.025em] text-text text-balance sm:text-6xl md:text-[5rem]"
          >
            {firstName}{' '}
            <span className="italic text-accent">{restName}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-8 max-w-2xl text-base leading-[1.75] text-muted sm:text-lg md:text-xl"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Magnetic strength={12}>
              <a href="#experience" className="btn-primary">
                View experience
                <ArrowIcon />
              </a>
            </Magnetic>
            <Magnetic strength={12}>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="mx-auto mt-16 max-w-xl">
            <div className="hairline mb-7" />
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className={iconBtn}
                aria-label="GitHub"
                title="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className={iconBtn}
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${site.email}`}
                className={iconBtn}
                aria-label="Email"
                title="Email"
              >
                <MailIcon />
              </a>
              <a
                href={site.phoneHref}
                className={iconBtn}
                aria-label="Call"
                title={site.phone}
              >
                <PhoneIcon />
              </a>
              <ResumeMenu variant="icon" label="Resume" className={iconBtn} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const iconBtn =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted shadow-[var(--shadow-soft)] transition-colors hover:border-border-strong hover:text-text'

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3c0 .8-.7 1.5-1.5 1.5C10.5 18.5 5.5 13.5 5 7c0-.8.7-1.5 1.5-1.5Z"
        strokeLinejoin="round"
      />
    </svg>
  )
}
