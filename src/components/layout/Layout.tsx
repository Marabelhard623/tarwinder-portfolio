import type { ReactNode } from 'react'
import { ParticleField } from '../effects/ParticleField'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell flex min-h-svh flex-col">
      <div className="page-glow" aria-hidden />
      <div className="page-noise" aria-hidden />
      <ParticleField />

      <div className="page-content relative z-10 flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-elevated focus:px-4 focus:py-2 focus:text-sm focus:text-text focus:shadow-[var(--shadow-soft)]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
