import { site } from '../data/site'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'

export function Experience() {
  return (
    <section
      id="experience"
      className="section-shell relative"
      aria-labelledby="experience-heading"
    >
      <div className="absolute inset-x-0 top-0 hairline opacity-80" aria-hidden />

      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            id="experience-heading"
            eyebrow="03 — Experience"
            title="Where I’ve shipped real systems"
            description="Full-stack delivery across loyalty platforms, security, migrations, and cloud admin tooling."
          />

          <Stagger className="relative space-y-0" stagger={0.1}>
            <div
              className="absolute bottom-2 left-[0.55rem] top-2 w-px bg-gradient-to-b from-border-strong via-border to-transparent"
              aria-hidden
            />
            {site.experience.map((item) => (
              <StaggerItem key={`${item.company}-${item.role}`}>
                <article className="relative border-b border-border py-8 pl-10 last:border-b-0">
                  <div
                    className="absolute left-0 top-10 flex h-3 w-3 items-center justify-center rounded-full border border-border-strong bg-surface shadow-[var(--shadow-soft)]"
                    aria-hidden
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="font-serif text-2xl tracking-tight text-text">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-accent">{item.company}</p>
                    </div>
                    <p className="shrink-0 text-sm font-medium text-faint">{item.period}</p>
                  </div>

                  <ul className="mt-5 max-w-2xl space-y-3.5">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 48)}
                        className="grid grid-cols-[0.875rem_minmax(0,1fr)] gap-x-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]"
                      >
                        <span
                          className="mt-[0.55em] h-1.5 w-1.5 justify-self-center rounded-full bg-accent/45"
                          aria-hidden
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-text">
                      Core concepts
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.concepts.map((concept) => (
                        <span
                          key={concept}
                          className="rounded-full border border-border-strong bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent-strong"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
