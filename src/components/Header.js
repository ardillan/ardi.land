import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={`/`}>Inicio</Link>
        <Link to={`/sobre-mi/`}>Sobre mí</Link>
        <Link to={`/proyectos/`}>Proyectos</Link>
        <Link to={`/blog/`}>Blog</Link>
      </nav>
    </header>
  )
}

export default Header
