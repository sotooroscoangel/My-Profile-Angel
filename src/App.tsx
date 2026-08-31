import { useState } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Achievements from './components/Achievements/Achievements'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Beyond from './components/Beyond/Beyond'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  // Lifted here (instead of living only inside Projects) so the Navbar
  // can close an open project before navigating to another section.
  const [openProject, setOpenProject] = useState<string | null>(null)

  return (
    <LanguageProvider>
      <Navbar onNavigate={() => setOpenProject(null)} />

      <Hero />

      <About />

      <Education />

      <Achievements />

      <Projects
        openProject={openProject}
        onOpenProjectChange={setOpenProject}
      />

      <Experience />

      <Skills />

      <Beyond />

      <Contact />

      <Footer />
    </LanguageProvider>
  )
}

export default App
