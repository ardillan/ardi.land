import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Logo } from "../images/general/icons"

const HeaderContainer = styled.header`
  nav {
    display: grid;
    grid-template-columns: 100px 1fr;
    min-height: 70px;
    align-content: center;
    padding: 0 5rem;
  }

  ul {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      padding-left: 20px;

      a {
        background: none;
        color: ${(props) => props.theme.colors.fonts.anchor};
        font-family: Inter;
        font-size: 17px;
        font-weight: 400;
        margin-left: 15px;
        text-decoration: none;
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    nav {
      padding: 0 20px;
      margin: 0;
    }
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    background: initial;
    svg {
      #dot {
        fill: ${(props) => props.theme.colors.rainBow[2]};
      }
      #ard {
        fill: ${(props) => props.theme.colors.fonts.text};
      }
      #bg {
        fill: ${(props) => props.theme.colors.background.main};
      }
    }
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <LogoContainer>
          <Link to={`/`}>
            <Logo />
          </Link>
        </LogoContainer>
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
