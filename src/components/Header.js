import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderContainer = styled.header`
  nav {
    background-color: ${(props) => props.theme.colors.primary};
    grid-template-columns: 1fr 1fr;

    a {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  ul {
    display: flex;
    justify-content: end;
    list-style-type: none;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  )
}

export default Header
