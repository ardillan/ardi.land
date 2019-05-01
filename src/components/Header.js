import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div className="brand">
        <Link to={`/`}>
          Logotipo
          <img />
        </Link>
      </div>{" "}
      <nav className="links">
        <Link to={`/sobre-mi/`}>Sobre mí</Link>
        <Link to={`/como-trabajo/`}>Cómo trabajo</Link>
        <Link to={`/blog/`}>Blog</Link>
      </nav>
    </header>
  )
}

export default Header
