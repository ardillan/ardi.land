import React, { useState, useEffect } from "react"
import { Location } from "@reach/router"
import { Link } from "gatsby"
import styled from "styled-components"

import portrait from "../images/general/portrait.png"

const RandomText = styled.div`
  font-family: "Inter";
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 45px;
    a {
      text-decoration: none;
      span {
        color: ${(props) => props.theme.colors.fonts.anchor};
      }
    }
  }
  small {
    font-weight: 200;
    font-size: 20px;
    padding-top: 10px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    h1 {
      font-weight: 800;
      font-size: 25px;
      line-height: 30px;
    }
  }
`
const BannerContainer = styled.header`
  background: linear-gradient(
    -180deg,
    ${(props) => props.theme.colors.gradients.top},
    ${(props) => props.theme.colors.gradients.bottom}
  );
`
const HomeBanner = styled.div`
  grid-column-gap: 20px;
  display: grid;
  grid-template-columns: 200px 1fr;
  margin: auto;
  width: 900px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-column-gap: 20px;
    display: grid;
    grid-template-columns: 1fr;
    margin: auto;
    width: auto;
    padding: 30px;
  }
`
const PageBanner = styled.div`
  height: 5px;
`
const MobileNavigation = styled.div`
  display: none;
  width: auto;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 20px;
  }
  button {
    text-transform: uppercase;
    font-family: "Inter";
    font-weight: 600;
    padding: 5px 10px;
    border: 2px solid ${(props) => props.theme.colors.table.border};
    color: ${(props) => props.theme.colors.fonts.text};
    background: transparent;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    display: flex;
    padding: 15px 30px;
  }
`
const MenuNavigation = styled.div`
  border-bottom: 1px solid #1c254542;
  border-top: 1px solid #1c254542;
  margin-bottom: 30px;
  padding: 30px;
`
const Navigation = styled.nav`
  margin: auto;
  width: 900px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    ul {
      display: none;
    }
  }
`
const HeaderContainer = styled.header`
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    nav {
      display: none;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    nav {
      grid-template-columns: 40px 1fr;
      margin: 0;
    }

    ul {
      li {
        a {
          font-size: 13px;
          margin: 0;
          padding: 5px 30px;
          text-transform: uppercase;
        }

        &:hover {
          background: none;
          a {
            outline: none;
          }
        }
      }
    }
  }
`
const PortraitContainer = styled.div`
  height: 250px;
  width: 200px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    display: none;
  }
`
const MenuListItems = styled.div`
  height: 50px;
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    align-items: center;
    font-family: "Inter";
    font-size: 16px;
    height: 100%;
    li {
      margin-right: 35px;
      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.fonts.text};
        &:hover {
          background: initial;
        }
      }
      &:hover {
        span:not([role="img"]) {
          text-decoration: underline;
          cursor: pointer;
          text-decoration-thickness: 1px;
        }
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    height: auto;
    ul {
      flex-direction: column;
      align-items: flex-start;
      li {
        a {
          font-size: 13px;
          margin: 0;
          padding: 5px 0px;
          text-transform: uppercase;
        }
      }
    }
  }
`

const MenuList = () => (
  <MenuListItems>
    <ul>
      <li>
        <Link to={`/`}>
          <span
            role="img"
            aria-label="Icono de un dinosaurio"
            style={{ fontSize: 20, margin: "0 15px 0 0" }}
          >
            🦕
          </span>
          <span>Inicio</span>
        </Link>
      </li>
      <li>
        <Link to={`/sobre-mi/`}>
          <span
            role="img"
            aria-label="Icono de un dinosaurio"
            style={{ fontSize: 20, margin: "0 15px 0 0" }}
          >
            🚲
          </span>
          <span>Sobre mí</span>
        </Link>
      </li>
      <li>
        <Link to={`/como-trabajo/`}>
          <span
            role="img"
            aria-label="Icono de un dinosaurio"
            style={{ fontSize: 20, margin: "0 15px 0 0" }}
          >
            👨‍💻
          </span>
          <span>Cómo trabajo</span>
        </Link>
      </li>
      <li>
        <Link to={`/proyectos/`}>
          <span
            role="img"
            aria-label="Icono de un dinosaurio"
            style={{ fontSize: 20, margin: "0 15px 0 0" }}
          >
            ⚡
          </span>
          <span>Mis proyectos</span>
        </Link>
      </li>
      <li>
        <Link to={`/espacios/`}>
          <span
            role="img"
            aria-label="Icono de un dinosaurio"
            style={{ fontSize: 20, margin: "0 15px 0 0" }}
          >
            🌵
          </span>
          <span>Mis espacios</span>
        </Link>
      </li>
      <li>
        <Link to={`/blog/`}>
          <span
            role="img"
            aria-label="Icono de un dinosaurio"
            style={{ fontSize: 20, margin: "0 15px 0 0" }}
          >
            ✏️
          </span>
          <span>Blog</span>
        </Link>
      </li>
    </ul>
  </MenuListItems>
)

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const randomNumber = Math.floor(Math.random() * 5)

  const handleMenu = (e) => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  const randomText = [
    {
      text: "hazte un TachoCao®",
      link: "http://www.hornosanjose.com/producto/tachocao/tachocao-700gr",
    },
    { text: "come Nachos", link: "https://es.wikipedia.org/wiki/Nachos" },
    {
      text: "escucha post-rock",
      link: "https://es.wikipedia.org/wiki/Post-rock",
    },
    {
      text: "sé Manny Calavera",
      link: "https://es.wikipedia.org/wiki/Grim_Fandango",
    },
    {
      text: "treguna mekoides trecorum satis dee",
      link: "https://es.wikipedia.org/wiki/Bedknobs_and_Broomsticks",
    },
    {
      text: "deja algo de tu felicidad",
      link: "https://es.wikipedia.org/wiki/Dr%C3%A1cula",
    },
  ]

  return (
    <HeaderContainer>
      <BannerContainer>
        <Location>
          {({ location }) => {
            return location.pathname === "/" ? (
              <HomeBanner>
                <PortraitContainer>
                  <Link to={`/`}>
                    <img
                      src={portrait}
                      width="200"
                      alt="Autoretrato de caricatura"
                    />
                  </Link>
                </PortraitContainer>
                <RandomText>
                  <h1>
                    Bienvenido a mi web,
                    <br />
                    siéntate y {`{`}
                    <a href={randomText[randomNumber].link}>
                      <span>{`${randomText[randomNumber].text}`}</span>
                      {`}`}
                    </a>
                  </h1>
                  <small>Soy Adrián, desarrollador web</small>
                </RandomText>
              </HomeBanner>
            ) : (
              <PageBanner />
            )
          }}
        </Location>
      </BannerContainer>
      <MobileNavigation>
        <Link to={`/`}>Inicio</Link>
        <button onClick={(e) => handleMenu(e)}>
          <span
            role="img"
            aria-label="Icono de un dinosaurio"
            style={{ fontSize: 18, marginRight: "10px" }}
          >
            🍔
          </span>
          <span>Menú</span>
        </button>
      </MobileNavigation>
      {isMenuOpen ? (
        <MenuNavigation>
          <MenuList />
        </MenuNavigation>
      ) : (
        ""
      )}
      <Navigation>
        <MenuList />
      </Navigation>
    </HeaderContainer>
  )
}

export default Header
