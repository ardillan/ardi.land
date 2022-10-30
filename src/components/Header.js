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

const MenuButton = styled.div`
  align-items: center;
  cursor: pointer;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
`

const Navigation = styled.nav`
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding: 0;
    display: none;
  }
`

const MenuListItems = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 140px;
  padding: 0 2rem;
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

const TwitterButton = styled.a`
  background: #00acee14;
  border: 1px solid #00acee;
  padding: 10px 35px;
  border-radius: 40px;

  transition: ${(props) => props.theme.transition};
  &:hover {
    background: #00acee38;
  }
`

const Logo = styled.div`
  transition: ${(props) => props.theme.transition};
  &:hover {
    transform: rotate(-5deg) scale(1.2);
  }
`

const MenuList = (props) => (
  <MenuListItems>
    {props.showLogo && (
      <Logo>
        <Link to={`/`}>
          <StaticImage
            src={"../images/general/logo.svg"}
            alt="Logotipo"
            title="Logotipo"
            width={70}
            placeholder="TRACED_SVG"
          />
        </Link>
      </Logo>
    )}
    <ul>
      <li>
        <Link to={`/acerca/`}>
          <span>Acerca</span>
        </Link>
      </li>
      <li>
        <Link to={`/como-trabajo/`}>
          <span>Cómo trabajo</span>
        </Link>
      </li>
      <li>
        <Link to={`/proyectos/`}>
          <span>Proyectos</span>
        </Link>
      </li>
      <li>
        <Link to={`/blog/`}>
          <span>Blog</span>
        </Link>
      </li>
      <li>
        <TwitterButton target="_blank" href="https://twitter.com/ardi__land">
          Twitter
        </TwitterButton>
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
    <Container fullWidth>
      <Navigation>
        <MenuList showLogo />
      </Navigation>
      <MobileNavigation>
        <Logo>
          <Link to={`/`}>
            <StaticImage
              src={"../images/general/logo.svg"}
              alt="Logotipo"
              title="Logotipo"
              height={50}
              placeholder="BLURRED"
            />
          </Link>
        </Logo>
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
      {isMenuOpen === true && <MenuList showLogo={false} />}
    </Container>
  )
}

export default Header
