import { Layout } from './components/layout/Layout'
import { ThemeProvider } from './context/ThemeContext'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  )
}

export default App
