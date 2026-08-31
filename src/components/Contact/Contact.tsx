import { useLanguage } from '../../i18n/LanguageContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact reveal ${isVisible ? 'reveal--visible' : ''}`}
    >
      <div className="contact__content">
        <p className="contact__eyebrow">{t.contact.eyebrow}</p>

        <h2 className="contact__title">
          {t.contact.title.map((line, index) => (
            <span key={line}>
              {line}
              {index < t.contact.title.length - 1 && <br />}
            </span>
          ))}
        </h2>

        <p className="contact__description">{t.contact.description}</p>

        <a
          href="mailto:sotooroscoangel@gmail.com"
          className="contact__email"
        >
          sotooroscoangel@gmail.com
          <span>↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/angelgabrielsoto"
          target="_blank"
          rel="noreferrer"
          className="contact__secondary"
        >
          {t.contact.linkedinLabel}
          <span>↗</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
