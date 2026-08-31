import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import './Navbar.css'

interface NavbarProps {
  // Called whenever any nav link is clicked. Used to close an open
  // project before jumping elsewhere.
  onNavigate?: () => void
}

function Navbar({ onNavigate }: NavbarProps) {
  const { language, toggleLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    onNavigate?.()
  }

  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__logo" onClick={handleLinkClick}>
        AGS
      </a>

      <div className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
        <a href="#about" onClick={handleLinkClick}>
          {t.nav.about}
        </a>
        <a href="#education" onClick={handleLinkClick}>
          {t.nav.education}
        </a>
        <a href="#work" onClick={handleLinkClick}>
          {t.nav.work}
        </a>
        <a href="#experience" onClick={handleLinkClick}>
          {t.nav.experience}
        </a>
        <a href="#skills" onClick={handleLinkClick}>
          {t.nav.skills}
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          {t.nav.contact}
        </a>

        <a
          href="/resume.pdf"
          download="Angel-Soto-Orosco-Resume.pdf"
          className="navbar__resume"
          onClick={() => setIsMenuOpen(false)}
        >
          {t.nav.resume}
        </a>
      </div>

      <div className="navbar__actions">
        <button
          type="button"
          className="navbar__lang"
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          {language === 'en' ? 'ES' : 'EN'}
        </button>

        <button
          type="button"
          className={`navbar__burger ${isMenuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
