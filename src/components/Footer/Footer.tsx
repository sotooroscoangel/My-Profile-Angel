import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    document
      .getElementById('hero')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2026 Ángel Gabriel Soto Orosco
      </p>

      <nav className="footer__links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <button
        type="button"
        className="footer__to-top"
        onClick={scrollToTop}
      >
        Back to top
        <span className="footer__to-top-icon" aria-hidden="true" />
      </button>
    </footer>
  )
}

export default Footer
