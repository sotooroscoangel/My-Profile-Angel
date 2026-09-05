import type { CSSProperties } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import tecPhoto from '../../assets/tec-monterrey.webp'
import './Education.css'

function Education() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="education"
      ref={ref}
      className={`education reveal ${isVisible ? 'reveal--visible' : ''}`}
      style={{ '--education-photo': `url(${tecPhoto})` } as CSSProperties}
    >
      <div className="education__header">
        <p className="education__eyebrow">{t.education.eyebrow}</p>

        <h2 className="education__title">
          {t.education.title.map((line, index) => (
            <span key={line}>
              {line}
              {index < t.education.title.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </div>

      <div className="education__grid">
        {t.education.items.map((item) => (
          <div key={item.school} className="education-card">
            <p className="education-card__period">{item.period}</p>
            <h3 className="education-card__school">{item.school}</h3>
            <p className="education-card__degree">{item.degree}</p>
            <p className="education-card__detail">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
