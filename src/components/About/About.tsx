import { useLanguage } from '../../i18n/LanguageContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './About.css'

function About() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className={`about reveal ${isVisible ? 'reveal--visible' : ''}`}
    >
      <div className="about__header">
        <p className="about__eyebrow">{t.about.eyebrow}</p>

        <h2 className="about__title">
          {t.about.title.map((line, index) => (
            <span key={line}>
              {line}
              {index < t.about.title.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </div>

      <div className="about__content">
        <div className="about__intro">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about__details">
          <div className="about__item">
            <span className="about__label">{t.about.focusLabel}</span>
            <span className="about__value">{t.about.focusValue}</span>
          </div>

          <div className="about__item">
            <span className="about__label">{t.about.interestsLabel}</span>
            <span className="about__value">{t.about.interestsValue}</span>
          </div>

          <div className="about__item">
            <span className="about__label">{t.about.locationLabel}</span>
            <span className="about__value">{t.about.locationValue}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
