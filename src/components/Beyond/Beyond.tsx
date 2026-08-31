import { useLanguage } from '../../i18n/LanguageContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Beyond.css'

function Beyond() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="beyond"
      ref={ref}
      className={`beyond reveal ${isVisible ? 'reveal--visible' : ''}`}
    >
      <div className="beyond__content">
        <p className="beyond__eyebrow">{t.beyond.eyebrow}</p>

        <h2 className="beyond__title">
          {t.beyond.title.map((line, index) => (
            <span key={line}>
              {line}
              {index < t.beyond.title.length - 1 && <br />}
            </span>
          ))}
        </h2>

        <p className="beyond__description">{t.beyond.description}</p>
      </div>
    </section>
  )
}

export default Beyond
