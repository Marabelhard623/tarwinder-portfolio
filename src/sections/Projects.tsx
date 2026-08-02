import { site } from '../data/site'
import { SectionHeading } from '../components/ui/SectionHeading'
import { SpotlightCard } from '../components/ui/SpotlightCard'
import { Stagger, StaggerItem } from '../components/ui/Reveal'

export function Projects() {
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
                href={project.href}
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

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.7rem] font-medium text-accent-strong"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted transition-colors group-hover:text-text">
                      {project.linkLabel}
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
