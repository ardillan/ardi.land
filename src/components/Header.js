import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const MobileNavigation = styled.div`
  display: none;
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 90vw;
    min-height: 60px;
  }
`
const MenuNavigation = styled.div``

const MenuButton = styled.div`
  align-items: center;
  justify-content: center;
`

const Navigation = styled.nav`
  padding: 0 30px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding: 0;
    display: none;
  }
`
const HeaderContainer = styled.header`
  align-items: center;
  background: ${(props) => props.theme.secondaryColor};
  display: flex;
  min-height: 70px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    flex-direction: column;
    min-height: 0;
  }
`
const MenuListItems = styled.div`
  display: flex;
  ul {
    align-items: center;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      margin-right: 10px;
      img {
        height: 50px;
      }
      a {
        color: white;
        font-size: 19px;
        font-weight: 400;
        text-decoration: none;
      }
      &:after {
        content: "~";
        color: ${(props) => props.theme.primaryColor};
        margin-left: 10px;
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
    ul {
      display: flex;
      flex-direction: column;
      li {
        margin: 0;
        text-align: center;
        padding: 15px 0;

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
    <HeaderContainer>
      <Navigation>
        <MenuList />
      </Navigation>
      <MobileNavigation>
        <Link to={`/`}>
          <StaticImage
            src={"../images/general/logo.svg"}
            alt="Logotipo"
            title="Logotipo"
            width={45}
            height={45}
          />
        </Link>
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
      {isMenuOpen === true && (
        <MenuNavigation>
          <MenuList />
        </MenuNavigation>
      )}
    </HeaderContainer>
  )
}

export default Header
