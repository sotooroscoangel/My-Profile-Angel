import type { CSSProperties } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter'
import { useLanguage } from '../../i18n/LanguageContext'
import heroPhoto from '../../assets/hero-photo.jpg'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()
  const typedRole = useTypewriter(t.hero.roles)

  return (
    <section
      id="hero"
      className="hero"
      style={{ '--hero-photo': `url(${heroPhoto})` } as CSSProperties}
    >
      <div className="hero__content">
        <p className="hero__eyebrow">{t.hero.eyebrow}</p>

        <h1 className="hero__title">
          Ángel Gabriel
          <br />
          Soto Orosco
        </h1>

        <p className="hero__role">
          {t.hero.intro}{' '}
          <span className="hero__role-typed" aria-hidden="true">
            {typedRole}
            <span className="hero__role-cursor" aria-hidden="true" />
          </span>
          {/* Static list for screen readers / SEO, since the visible
              text above changes character by character. */}
          <span className="visually-hidden">
            {t.hero.roles.join(', ')}
          </span>
        </p>

        <div className="hero__actions">
          <a href="#work" className="hero__button hero__button--primary">
            {t.hero.primaryButton}
          </a>

          <a href="#contact" className="hero__button hero__button--secondary">
            {t.hero.secondaryButton}
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <span>{t.hero.scroll}</span>
        <span className="hero__scroll-arrow">↓</span>
      </div>
    </section>
  )
}

export default Hero
