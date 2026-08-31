import { useLanguage } from '../../i18n/LanguageContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Achievements.css'

function Achievements() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="achievements"
      ref={ref}
      className={`achievements reveal ${isVisible ? 'reveal--visible' : ''}`}
    >
      <div className="achievements__header">
        <p className="achievements__eyebrow">{t.achievements.eyebrow}</p>

        <h2 className="achievements__title">
          {t.achievements.title.map((line, index) => (
            <span key={line}>
              {line}
              {index < t.achievements.title.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </div>

      <div className="achievements__grid">
        {t.achievements.items.map((item) => (
          <div key={item.label} className="achievement-card">
            <p className="achievement-card__value">{item.value}</p>
            <p className="achievement-card__label">{item.label}</p>
            <p className="achievement-card__description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
