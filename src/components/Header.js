import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link to={`/`}>Ardillán</Link>
          <Link to={`/sobre-mi/`}>Sobre mí</Link>
        </nav>
      </header>
    )
  }
}

export default Header
