import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about__header">
        <p className="about__eyebrow">02 / ABOUT</p>

        <h2 className="about__title">
          A little bit
          <br />
          about me.
        </h2>
      </div>

      <div className="about__content">
        <div className="about__intro">
          <p>
            I&apos;m a Mechatronics Engineer from Tecnológico de
            Monterrey, Campus Toluca (2021–2025, Líderes del Mañana
            Scholarship, Automotive Engineering concentration). My
            background sits at the intersection of mechanical design,
            electrical power, instrumentation, control systems, and
            industrial automation — I like turning engineering
            problems into systems that actually work in the field.
          </p>

          <p>
            That combination has taken me from leading the electrical
            subsystem of a Formula SAE race car to installing and
            commissioning industrial automation, power, and safety
            systems on real production lines. I move comfortably from
            CAD and circuit design to conduit, panels, and
            troubleshooting on-site.
          </p>
        </div>

        <div className="about__details">
          <div className="about__item">
            <span className="about__label">FOCUS</span>
            <span className="about__value">
              Industrial Automation &amp; Field Engineering
            </span>
          </div>

          <div className="about__item">
            <span className="about__label">INTERESTS</span>
            <span className="about__value">
              Predictive Maintenance &amp; Asset Reliability
            </span>
          </div>

          <div className="about__item">
            <span className="about__label">LOCATION</span>
            <span className="about__value">
              Mexico
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
