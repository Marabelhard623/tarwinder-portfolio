import { site } from '../data/site'
import { SectionHeading } from '../components/ui/SectionHeading'
import { SpotlightCard } from '../components/ui/SpotlightCard'
import { ProfilePortrait } from '../components/ui/ProfilePortrait'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'

export function About() {
  const { about } = site

  return (
    <section
      id="about"
      className="section-shell relative"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-x-0 top-0 hairline opacity-80" aria-hidden />

      <div className="container-page">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="about-heading"
              eyebrow="01 — About"
              title={about.title}
              description="Professional summary and how I show up on a team."
            />

            <Reveal delay={0.1} className="mt-8 max-w-md lg:mt-10 lg:max-w-none">
              <SpotlightCard magnetic strength={5} className="overflow-hidden p-0">
                <ProfilePortrait />
                <div className="border-t border-border px-5 py-4 sm:px-6 sm:py-5">
                  <p className="text-sm leading-relaxed text-muted">{about.focus}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          <div>
            <Stagger className="space-y-6" stagger={0.07}>
              {about.paragraphs.map((paragraph) => (
                <StaggerItem key={paragraph.slice(0, 28)}>
                  <p className="text-[1.05rem] leading-[1.8] text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <Stagger className="mt-10 flex flex-wrap gap-2.5" stagger={0.05} delay={0.05}>
              {about.traits.map((trait) => (
                <StaggerItem key={trait}>
                  <span className="inline-flex rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-muted shadow-[var(--shadow-soft)]">
                    {trait}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>

            <dl>
              <Stagger
                className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
                stagger={0.08}
              >
                {about.highlights.map((item) => (
                  <StaggerItem key={item.label}>
                    <SpotlightCard strength={7} className="group p-6">
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-faint">
                        {item.label}
                      </dt>
                      <dd className="mt-3 font-serif text-[1.9rem] leading-none tracking-tight text-text transition-colors group-hover:text-accent">
                        {item.value}
                      </dd>
                    </SpotlightCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </dl>

            <Reveal delay={0.12} className="mt-8">
              <div className="rounded-[1.5rem] border border-border bg-[color-mix(in_srgb,var(--accent-soft)_70%,var(--surface))] p-6 sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-faint">
                  Education
                </p>
                <p className="mt-3 font-serif text-xl leading-snug tracking-tight text-text sm:text-2xl">
                  {about.education}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
