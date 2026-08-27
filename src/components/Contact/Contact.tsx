import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <p className="contact__eyebrow">
          05 / CONTACT
        </p>

        <h2 className="contact__title">
          Let's work
          <br />
          together.
        </h2>

        <p className="contact__description">
          Interested in working together or learning more
          about my work? Get in touch.
        </p>

        <a
          href="mailto:sotooroscoangel@gmail.com"
          className="contact__email"
        >
          sotooroscoangel@gmail.com
          <span>↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/angelgabrielsoto"
          target="_blank"
          rel="noreferrer"
          className="contact__secondary"
        >
          LinkedIn
          <span>↗</span>
        </a>
      </div>
    </section>
  )
}

export default Contact