import { site } from '../data/site'
import { SectionHeading } from '../components/ui/SectionHeading'
import { SpotlightCard } from '../components/ui/SpotlightCard'
import { Stagger, StaggerItem } from '../components/ui/Reveal'

export function Skills() {
  return (
    <section
      id="skills"
      className="section-shell relative"
      aria-labelledby="skills-heading"
    >
      <div className="absolute inset-x-0 top-0 hairline opacity-80" aria-hidden />

      <div className="container-page">
        <div className="mb-14 md:mb-16">
          <SectionHeading
            id="skills-heading"
            eyebrow="02 — Skills"
            title={site.skills.title}
            description="A practical stack shaped by production systems — APIs, real-time data, security, and product UI."
          />
        </div>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {site.skills.groups.map((group, index) => (
            <StaggerItem key={group.label} className="h-full">
              <SpotlightCard strength={6} className="group h-full p-6">
                <div className="relative z-[1]">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="font-serif text-2xl text-faint/80 transition-colors duration-300 group-hover:text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-faint transition-colors duration-300 group-hover:text-accent">
                      {group.label}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-elevated/70 px-3 py-1.5 text-sm font-medium text-muted transition-colors duration-300 group-hover:border-border-strong group-hover:bg-accent-soft group-hover:text-text"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
