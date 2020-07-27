import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={`/`}>Logotipo</Link>
        <ul>
          <li>
            <Link to={`/sobre-mi/`}>
              <span>Sobre mí</span>
            </Link>
          </li>

          <li>
            <Link to={`/blog/`}>
              <span>Blog!</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
