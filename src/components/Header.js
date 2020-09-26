import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Logo } from "../images/general/icons"

const HeaderContainer = styled.header`
  nav {
    display: grid;
    grid-template-columns: 100px 1fr;
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

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    nav {
      grid-template-columns: 40px 1fr;
      margin: 5px 0;
    }

    ul {
      li {
        a {
          border-radius: 4px;
          border: 2px solid ${(props) => props.theme.colors.fonts.anchor};
          color: ${(props) => props.theme.colors.fonts.anchor};
          font-size: 13px;
          margin: 0;
          padding: 5px 10px;
          text-transform: uppercase;
        }
      }
    }
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    background: none;
    svg {
      transition: all 0.3s;
      #dot {
        fill: ${(props) => props.theme.colors.rainBow[2]};
      }
      #ard {
        fill: ${(props) => props.theme.colors.fonts.text};
      }
      #bg {
        fill: none;
      }

      &:hover {
        #dot {
          animation: RichKidsOnLSD 0.8s infinite;
          animation-timing-function: ease-in-out;
        }
      }

      @keyframes RichKidsOnLSD {
        50% {
          fill: ${(props) => props.theme.colors.rainBow[0]};
          transform: matrix(0.273427, 0, 0, 0.273427, -70.1173, -83.734);
        }

        100% {
          transform: matrix(0.273427, 0, 0, 0.273427, -70.1173, -80.734);
        }
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    a {
      svg {
        width: 40px;
        height: 40px;
        display: flex;
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
