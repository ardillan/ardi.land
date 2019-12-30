import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link activeClassName="active" to={`/`}>
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to={`/sobre-mi/`}>
              <span>Sobre mí</span>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to={`/proyectos/`}>
              <span>Proyectos</span>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to={`/blog/`}>
              <span>Blog</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
