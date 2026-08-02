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
            description="Personal and open-source work I’ve built end to end."
          />
        </div>

        <Stagger className="mx-auto grid max-w-2xl gap-5" stagger={0.1}>
          {site.projects.map((project, index) => (
            <StaggerItem key={project.title} className="h-full">
              <SpotlightCard
                href={project.href}
                strength={8}
                className="group flex h-full flex-col p-6 sm:p-7"
              >
                <div className="relative z-[1] flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <span className="font-serif text-3xl text-faint/80 transition-colors group-hover:text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full border border-border bg-elevated/60 px-2.5 py-1 text-[0.7rem] font-medium text-faint">
                      {project.outcome}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl tracking-tight text-text transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {project.summary}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.7rem] font-medium text-accent-strong"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors group-hover:text-text">
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
