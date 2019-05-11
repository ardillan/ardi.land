import React from "react"
import { Link } from "gatsby"
import logo from "../../content/images/general/logo-icon.svg"

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <div className="brand">
          <Link to={`/`}>
            <img alt="Logotipo" src={logo} width="" height="30px" />
          </Link>
        </div>{" "}
        <nav className="links">
          <Link to={`/sobre-mi/`}>Sobre mí</Link>
          <Link to={`/como-trabajo/`}>Cómo trabajo</Link>
          <Link to={`/blog/`}>Blog</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
