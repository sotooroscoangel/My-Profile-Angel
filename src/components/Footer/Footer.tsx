import { useLanguage } from '../../i18n/LanguageContext'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    document
      .getElementById('hero')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2026 Ángel Gabriel Soto Orosco
      </p>

      <nav className="footer__links">
        <a href="#about">{t.footer.links.about}</a>
        <a href="#work">{t.footer.links.work}</a>
        <a href="#experience">{t.footer.links.experience}</a>
        <a href="#skills">{t.footer.links.skills}</a>
        <a href="#contact">{t.footer.links.contact}</a>
      </nav>

      <button
        type="button"
        className="footer__to-top"
        onClick={scrollToTop}
      >
        {t.footer.backToTop}
        <span className="footer__to-top-icon" aria-hidden="true" />
      </button>
    </footer>
  )
}

export default Footer
