import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../components/styled/Interface"

const MobileNavigation = styled.div`
  display: none;
  a  {
    color: initial;
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: auto;
    min-height: 60px;
  }
`
const TopBar = styled.div`
  width: 100%;
  a {
    color: ${(props) => props.theme.secondaryColor};
    &:hover {
      text-decoration-thickness: 3px;
      text-decoration-color: ${(props) => props.theme.primaryColor};
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    display: none;
  }
`

const MenuButton = styled.div`
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.secondaryColor};
  padding: 10px;
  border-radius: 50%;
`

const Navigation = styled.nav`
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding: 0;
    display: none;
  }
`
const HeaderContainer = styled.header`
  display: grid;
  min-height: 100px;
  padding: 0 30px;
  align-items: center;
  align-content: center;
  grid-gap: 10px;
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-template-columns: 1fr;
    padding: 0;
    min-height: 0;
  }
`
const MenuListItems = styled.div`
  display: flex;
  justify-content: left;
  ul {
    align-items: center;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      margin-right: 30px;
      img {
        height: 50px;
      }
      a {
        color: ${(props) => props.theme.textColor};
        font-size: ${(props) => props.theme.mainFontSize};
        font-weight: 200;
        text-decoration: none;
        &:hover {
          background: ${(props) => props.theme.primaryColor}10;
          text-decoration: underline;
          text-decoration-color: ${(props) => props.theme.primaryColor}60;
          text-decoration-thickness: 3px;
        }
      }

      &:first-child {
        &:after {
          content: "";
        }
      }
      &:last-child {
        &:after {
          content: "";
        }
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    justify-content: center;
    ul {
      display: flex;
      flex-direction: column;
      li {
        margin: 0;
        text-align: center;
        padding: 15px 0;

        &:first-child {
          display: none;
          &: after;
        }

        &:after {
          content: "";
        }
      }
    }
  }
`

const MenuList = () => (
  <MenuListItems>
    <ul>
      <li>
        <Link to={`/sobre-mi/`}>
          <span>Sobre mí</span>
        </Link>
      </li>

      <li>
        <Link to={`/blog/`}>
          <span>Blog</span>
        </Link>
      </li>
      <li>
        <Link to={`/como-trabajo/`}>
          <span>Cómo trabajo</span>
        </Link>
      </li>
      <li>
        <Link to={`/espacios/`}>
          <span>Mis espacios</span>
        </Link>
      </li>
    </ul>
  </MenuListItems>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = (e) => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Container>
      <HeaderContainer>
        <TopBar>
          <Link to={`/`}>Ardi</Link>
        </TopBar>
        <Navigation>
          <MenuList />
        </Navigation>
        <MobileNavigation>
          <Link to={`/`}>Ardi</Link>
          <MenuButton onClick={(e) => handleMenu(e)}>
            {isMenuOpen ? (
              <StaticImage
                src={"../images/general/close-icon.svg"}
                alt="Logotipo"
                title="Logotipo"
                width={25}
                height={25}
                placeholder="TRACED_SVG"
              />
            ) : (
              <StaticImage
                src={"../images/general/menu-icon.svg"}
                alt="Logotipo"
                title="Logotipo"
                width={25}
                height={25}
                placeholder="TRACED_SVG"
              />
            )}
          </MenuButton>
        </MobileNavigation>
        {isMenuOpen === true && <MenuList />}
      </HeaderContainer>
    </Container>
  )
}

export default Header
