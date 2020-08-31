import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderContainer = styled.header`
  nav {
    display: grid;
    grid-template-columns: 100px 1fr;
    min-height: 70px;
    align-content: center;
    padding: 0 5rem;
  }

  ul {
    display: flex;
    justify-content: end;
    list-style-type: none;
    li {
      padding-left: 20px;

      a {
        color: ${(props) => props.theme.colors.fonts.anchor};
        font-family: Inter;
        font-size: 17px;
        font-weight: 400;
        text-decoration: none;
      }
    }
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
