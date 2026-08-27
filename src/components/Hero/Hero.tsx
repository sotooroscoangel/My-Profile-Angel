import type { CSSProperties } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter'
import heroPhoto from '../../assets/hero-photo.jpg'
import './Hero.css'

const ROLES = [
  'Mechatronics Engineer',
  'Volleyball Player',
  'Guitarist',
  'Novelist',
  'Web Developer',
]

function Hero() {
  const typedRole = useTypewriter(ROLES)

  return (
    <section
      id="hero"
      className="hero"
      style={{ '--hero-photo': `url(${heroPhoto})` } as CSSProperties}
    >
      <div className="hero__content">
        <p className="hero__eyebrow">HELLO, I'M</p>

        <h1 className="hero__title">
          Ángel Gabriel
          <br />
          Soto Orosco
        </h1>

        <p className="hero__role">
          I am a{' '}
          <span className="hero__role-typed" aria-hidden="true">
            {typedRole}
            <span className="hero__role-cursor" aria-hidden="true" />
          </span>
          {/* Static list for screen readers / SEO, since the visible
              text above changes character by character. */}
          <span className="visually-hidden">
            {ROLES.join(', ')}
          </span>
        </p>

        <div className="hero__actions">
          <a href="#work" className="hero__button hero__button--primary">
            View my work
          </a>

          <a href="#contact" className="hero__button hero__button--secondary">
            Contact me
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <span>SCROLL</span>
        <span className="hero__scroll-arrow">↓</span>
      </div>
    </section>
  )
}

export default Hero
