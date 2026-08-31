import type { MouseEvent } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { smoothScrollTo } from '../../utils/smoothScroll'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault()
    smoothScrollTo(targetId)
    window.history.pushState(null, '', `#${targetId}`)
  }

  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2026 Ángel Gabriel Soto Orosco
      </p>

      <nav className="footer__links">
        <a href="#about" onClick={(event) => handleLinkClick(event, 'about')}>
          {t.footer.links.about}
        </a>
        <a href="#work" onClick={(event) => handleLinkClick(event, 'work')}>
          {t.footer.links.work}
        </a>
        <a
          href="#experience"
          onClick={(event) => handleLinkClick(event, 'experience')}
        >
          {t.footer.links.experience}
        </a>
        <a href="#skills" onClick={(event) => handleLinkClick(event, 'skills')}>
          {t.footer.links.skills}
        </a>
        <a
          href="#contact"
          onClick={(event) => handleLinkClick(event, 'contact')}
        >
          {t.footer.links.contact}
        </a>
      </nav>

      <button
        type="button"
        className="footer__to-top"
        onClick={() => smoothScrollTo('hero')}
      >
        {t.footer.backToTop}
        <span className="footer__to-top-icon" aria-hidden="true" />
      </button>
    </footer>
  )
}

export default Footer
