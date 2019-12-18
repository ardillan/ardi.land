import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <nav className="links">
          <Link to={`/`}>Inicio</Link>
          <Link to={`/sobre-mi/`}>Sobre mí</Link>
          <Link to={`/como-trabajo/`}>Cómo trabajo</Link>
          <Link to={`/blog/`}>Blog</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
