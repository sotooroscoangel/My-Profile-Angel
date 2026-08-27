import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  // Lifted here (instead of living only inside Projects) so the Navbar
  // can close an open project before navigating to another section.
  const [openProject, setOpenProject] = useState<string | null>(null)

  return (
    <>
      <Navbar onNavigate={() => setOpenProject(null)} />

      <Hero />

      <About />

      <Projects
        openProject={openProject}
        onOpenProjectChange={setOpenProject}
      />

      <Experience />

      <Skills />

      <Contact />

      <Footer />
    </>
  )
}

export default App
