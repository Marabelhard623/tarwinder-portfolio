import { site } from '../../data/site'
import { Magnetic } from '../ui/Magnetic'
import { ResumeMenu } from '../ui/ResumeMenu'

const iconBtn =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted shadow-[var(--shadow-soft)] transition-colors hover:border-border-strong hover:text-text'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border">
      <div className="container-page py-14 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <p className="font-serif text-3xl tracking-tight text-text">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.role}. Building scalable full-stack systems with Spring Boot,
              React, and event-driven architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Magnetic strength={8}>
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
            </Magnetic>

            <Magnetic strength={8}>
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
            </Magnetic>

            <Magnetic strength={8}>
              <a
                href={`mailto:${site.email}`}
                className={iconBtn}
                aria-label="Email"
                title="Email"
              >
                <MailIcon />
              </a>
            </Magnetic>

            <Magnetic strength={8}>
              <a
                href={site.phoneHref}
                className={iconBtn}
                aria-label="Call"
                title={site.phone}
              >
                <PhoneIcon />
              </a>
            </Magnetic>

            <Magnetic strength={8}>
              <ResumeMenu
                variant="icon"
                label="Resume"
                className={iconBtn}
              />
            </Magnetic>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-wide text-faint">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs tracking-wide text-faint">
            Kolkata, India · Crafted with React & Vite
          </p>
        </div>
      </div>
    </footer>
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
