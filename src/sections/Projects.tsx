import { useState } from 'react'
import { site } from '../data/site'
import { SectionHeading } from '../components/ui/SectionHeading'
import { SpotlightCard } from '../components/ui/SpotlightCard'
import { Stagger, StaggerItem } from '../components/ui/Reveal'
import { VideoModal } from '../components/ui/VideoModal'

type DemoState = {
  title: string
  src: string
} | null

export function Projects() {
  const [demo, setDemo] = useState<DemoState>(null)

  return (
    <section
      id="projects"
      className="section-shell relative"
      aria-labelledby="projects-heading"
    >
      <div className="absolute inset-x-0 top-0 hairline opacity-80" aria-hidden />

      <div className="container-page">
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="projects-heading"
            eyebrow="04 — Projects"
            title="Projects"
            description="Selected full-stack work — problem, approach, and what each build demonstrates."
          />
        </div>

        <Stagger
          className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2"
          stagger={0.1}
        >
          {site.projects.map((project, index) => (
            <StaggerItem key={project.title} className="h-full">
              <SpotlightCard
                magnetic
                strength={8}
                className="group flex h-full flex-col p-6 sm:p-7"
              >
                <div className="relative z-[1] flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span className="font-serif text-3xl text-faint/80 transition-colors group-hover:text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full border border-border bg-elevated/60 px-2.5 py-1 text-[0.7rem] font-medium text-faint">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl tracking-tight text-text transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {project.subtitle}
                  </p>

                  <dl className="mt-6 flex flex-1 flex-col gap-4 text-sm leading-relaxed">
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-faint">
                        Problem
                      </dt>
                      <dd className="mt-1.5 text-muted">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-faint">
                        Solution
                      </dt>
                      <dd className="mt-1.5 text-muted">{project.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-faint">
                        Outcome
                      </dt>
                      <dd className="mt-1.5 text-muted">{project.outcome}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.7rem] font-medium text-accent-strong"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-5">
                    <button
                      type="button"
                      onClick={() =>
                        setDemo({ title: project.title, src: project.demoVideo })
                      }
                      className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border border-border-strong bg-text px-4 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
                    >
                      <PlayIcon />
                      Watch demo
                    </button>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-surface px-4 text-sm font-medium text-muted transition-colors hover:border-border-strong hover:text-text"
                    >
                      {project.linkLabel}
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <VideoModal
        open={demo !== null}
        title={demo?.title ?? ''}
        src={demo?.src ?? ''}
        onClose={() => setDemo(null)}
      />
    </section>
  )
}

function PlayIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5.5v13l11-6.5L8 5.5Z" />
    </svg>
  )
}
