import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        AGS
      </a>

      <div className="navbar__links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar