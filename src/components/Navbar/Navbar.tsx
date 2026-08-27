import './Navbar.css'

interface NavbarProps {
  // Called whenever any nav link is clicked. Used to close an open
  // project before jumping elsewhere.
  onNavigate?: () => void
}

function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__logo" onClick={onNavigate}>
        AGS
      </a>

      <div className="navbar__links">
        <a href="#about" onClick={onNavigate}>
          About
        </a>
        <a href="#work" onClick={onNavigate}>
          Work
        </a>
        <a href="#experience" onClick={onNavigate}>
          Experience
        </a>
        <a href="#skills" onClick={onNavigate}>
          Skills
        </a>
        <a href="#contact" onClick={onNavigate}>
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
