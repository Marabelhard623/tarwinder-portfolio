import { site } from '../data/site'
import { Magnetic } from '../components/ui/Magnetic'
import { ResumeMenu } from '../components/ui/ResumeMenu'
import { Reveal } from '../components/ui/Reveal'

export function Contact() {
  return (
    <section
      id="contact"
      className="section-shell relative pb-28 sm:pb-36"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-x-0 top-0 hairline opacity-80" aria-hidden />

      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] px-6 py-14 text-center shadow-[var(--shadow-lift)] backdrop-blur-md sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              aria-hidden
              style={{
                background: `
                  radial-gradient(ellipse 60% 70% at 50% 0%, var(--glow), transparent 60%),
                  radial-gradient(ellipse 40% 40% at 20% 100%, var(--accent-soft), transparent 50%),
                  radial-gradient(ellipse 40% 40% at 80% 100%, var(--accent-soft), transparent 50%)
                `,
              }}
            />

            <div className="relative z-[1]">
              <p className="section-label mb-6 justify-center before:hidden">
                <span className="inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-border-strong" aria-hidden />
                  05 — Contact
                  <span className="h-px w-8 bg-border-strong" aria-hidden />
                </span>
              </p>

              <h2
                id="contact-heading"
                className="mx-auto max-w-2xl font-serif text-[2.4rem] leading-[1.08] tracking-tight text-text text-balance sm:text-5xl"
              >
                Let’s build something <span className="italic text-accent">scalable</span>
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Open to full-stack roles and meaningful engineering conversations —
                happy to talk platforms, security, or product delivery.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Magnetic strength={12}>
                  <a href={`mailto:${site.email}`} className="btn-primary">
                    <MailIcon />
                    {site.email}
                  </a>
                </Magnetic>
                <Magnetic strength={12}>
                  <a href={site.phoneHref} className="btn-secondary">
                    <PhoneIcon />
                    {site.phone}
                  </a>
                </Magnetic>
                <Magnetic strength={12}>
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                </Magnetic>
                <Magnetic strength={12}>
                  <ResumeMenu variant="secondary" label="Resume" />
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3c0 .8-.7 1.5-1.5 1.5C10.5 18.5 5.5 13.5 5 7c0-.8.7-1.5 1.5-1.5Z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
