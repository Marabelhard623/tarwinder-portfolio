import { Reveal } from './Reveal'

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const center = align === 'center'

  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      {eyebrow ? (
        <p className={`section-label mb-5 ${center ? 'justify-center before:hidden' : ''}`}>
          {center ? (
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-border-strong" aria-hidden />
              {eyebrow}
              <span className="h-px w-8 bg-border-strong" aria-hidden />
            </span>
          ) : (
            eyebrow
          )}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-serif text-[2.2rem] leading-[1.1] tracking-tight text-text sm:text-4xl md:text-[2.85rem]"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed text-muted sm:text-lg ${
            center ? 'mx-auto max-w-xl' : ''
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
