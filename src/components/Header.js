import React, { useState, useEffect } from "react"
import { Location } from "@reach/router"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../components/styled/Interface"

const TopBar = styled.div`
  height: 10px;
  background: ${(props) => props.theme.colors.background.header};
`
const TopBarInfo = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 70px;
  p {
    margin: 0;
    padding: 0;
    font-style: italic;
    font-weight: 200;
    font-size: 18px;
  }

  div {
    text-align: right;
    span {
      color: ${(props) => props.theme.colors.fonts.anchor};
      font-weight: 800;
      margin: 0 0.5rem;
    }

    a {
      color: ${(props) => props.theme.colors.fonts.text};
      font-size: 18px;
      font-weight: 200;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const RandomText = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.secondaryColorLight};
  border-left: 10px solid ${(props) => props.theme.colors.secondaryColor};
  padding: 1rem 2rem;
  margin: 0;

  p {
    font-size: 21px;
    font-weight: 200;
    line-height: 30px;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    span {
      color: ${(props) => props.theme.colors.fonts.text};
    }
  }

  span {
    color: ${(props) => props.theme.colors.primaryColor};
  }
`

const HomeBanner = styled.div`
  min-height: 445px;
  justify-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 50px;
    font-weight: 600;

    span {
      color: ${(props) => props.theme.colors.primaryColor};
    }
  }
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

const MenuListItems = styled.div`
  height: 50px;
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    font-size: 20px;
    height: 100%;
    margin: 0;
    justify-content: space-between;
    li {
      a {
        font-family: "Literata";
        font-weight: 400;
        text-decoration: none;
        color: ${(props) => props.theme.colors.fonts.text};
        &:hover {
          background: initial;
        }
      }
      &:hover {
        span:not([role="img"]) {
          text-decoration: none;
          cursor: pointer;
          text-decoration-thickness: 2px;
          color: ${(props) => props.theme.colors.fonts.anchor};
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
          <span>Inicio</span>
        </Link>
      </li>
      <li>
        <Link to={`/sobre-mi/`}>
          <span>Sobre mí</span>
        </Link>
      </li>
      <li>
        <Link to={`/como-trabajo/`}>
          <span>Cómo trabajo</span>
        </Link>
      </li>
      <li>
        <Link to={`/proyectos/`}>
          <span>Mis proyectos</span>
        </Link>
      </li>
      <li>
        <Link to={`/espacios/`}>
          <span>Mis espacios</span>
        </Link>
      </li>
      <li>
        <Link to={`/blog/`}>
          <span>Blog</span>
        </Link>
      </li>
    </ul>
  </MenuListItems>
)

const randomText = [
  {
    text: "el TachoCao",
    link: "http://www.hornosanjose.com/producto/tachocao/tachocao-700gr",
  },
  { text: "los nachos", link: "https://es.wikipedia.org/wiki/Nachos" },
  {
    text: "la música post-rock",
    link: "https://es.wikipedia.org/wiki/Post-rock",
  },
  {
    text: "Manny Calavera",
    link: "https://es.wikipedia.org/wiki/Grim_Fandango",
  },
  {
    text: "bedknobs and broomsticks",
    link: "https://es.wikipedia.org/wiki/Bedknobs_and_Broomsticks",
  },
  {
    text: "Otl Aicher",
    link: "https://en.wikipedia.org/wiki/Otl_Aicher",
  },
  {
    text: "el JAMStack",
    link: "https://jamstack.org/what-is-jamstack/",
  },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [randomNumber, setRandomNumber] = useState()

  useEffect(() => {
    let number = Math.floor(Math.random() * 5)
    setRandomNumber(number)
  }, [])

  const handleMenu = (e) => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HeaderContainer>
      <TopBar />
      <Container>
        <TopBarInfo>
          <p>I’m just a boy standing in front of a computer</p>
          <div>
            <a href="">Mi Twitter</a>
            <span>~</span>
            <a href="">Mi Github</a>
          </div>
        </TopBarInfo>
        <Navigation>
          <MenuList />
        </Navigation>
        <Location>
          {({ location }) => {
            return location.pathname === "/" ? (
              <HomeBanner>
                <h1>
                  ¡Hola! soy Adrián, un diseñador gráfico reconvertido a{` `}
                  <span>desarrollador web</span>
                </h1>
                <RandomText>
                  <p>
                    Me gustan cosas como {` `}
                    <span>{` { `}</span>
                    {typeof randomNumber === "number" && (
                      <>
                        {randomText
                          .sort(function (a, b) {
                            return 0.5 - Math.random()
                          })
                          .slice(0, 4)
                          .map((text, index) => (
                            <a href={text.link} key={index}>
                              <span>
                                {`${text.text}`}
                                {index + 1 === 4 ? "" : ", "}
                              </span>
                            </a>
                          ))}
                      </>
                    )}
                    <span>{` } `}</span> y generar textos aleatorios.
                  </p>
                </RandomText>
              </HomeBanner>
            ) : (
              <PageBanner />
            )
          }}
        </Location>
      </Container>
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
    </HeaderContainer>
  )
}

export default Header
