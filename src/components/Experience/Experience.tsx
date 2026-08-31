import { useLanguage } from '../../i18n/LanguageContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Experience.css'

function Experience() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="experience"
      ref={ref}
      className={`experience reveal ${isVisible ? 'reveal--visible' : ''}`}
    >
      <div className="experience__header">
        <p className="experience__eyebrow">{t.experience.eyebrow}</p>

        <h2 className="experience__title">{t.experience.title}</h2>
      </div>

      <div className="experience__list">
        {t.experience.items.map((item) => (
          <article key={item.company} className="experience__item">
            <div className="experience__date">{item.date}</div>

            <div className="experience__content">
              <h3>{item.role}</h3>

              <p className="experience__company">{item.company}</p>

              <p className="experience__description">{item.description}</p>

              <ul className="experience__highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
