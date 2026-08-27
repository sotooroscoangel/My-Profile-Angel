import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">HELLO, I'M</p>

        <h1 className="hero__title">
          Ángel Gabriel
          <br />
          Soto Orosco
        </h1>

        <p className="hero__role">
          Mechatronics Engineer
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