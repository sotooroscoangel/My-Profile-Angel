import { useLanguage } from '../../i18n/LanguageContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Skills.css'

function Skills() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills reveal ${isVisible ? 'reveal--visible' : ''}`}
    >
      <div className="skills__header">
        <p className="skills__eyebrow">{t.skills.eyebrow}</p>

        <h2 className="skills__title">
          {t.skills.title.map((line, index) => (
            <span key={line}>
              {line}
              {index < t.skills.title.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </div>

      <div className="skills__grid">
        {t.skills.groups.map((group) => (
          <div key={group.title} className="skills__group">
            <h3>{group.title}</h3>

            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
