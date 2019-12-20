import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Inicio</Link>
          </li>
          <li>
            <Link to={`/sobre-mi/`}>Sobre mí</Link>
          </li>
          <li>
            <Link to={`/proyectos/`}>Proyectos</Link>
          </li>
          <li>
            <Link to={`/blog/`}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
