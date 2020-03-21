import React, { useState } from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import hamburguer_icon_open from "../../content/images/general/icon-menu-open.svg"
import hamburguer_icon_close from "../../content/images/general/icon-menu-close.svg"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(extension: { eq: "png" }, name: { regex: "/logo/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 45) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(extension: { eq: "png" }, name: { regex: "/twitter/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 30) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(extension: { eq: "png" }, name: { regex: "/github/" }) {
        name
        childImageSharp {
          fluid(maxWidth: 30) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuClass = isMenuOpen ? "menu-mobile" : "menu-desktop"
  const hamburguer_icon = isMenuOpen
    ? hamburguer_icon_close
    : hamburguer_icon_open

  return (
    <header className="top-header">
      <nav>
        <Link to={`/`} className="logo">
          <Img fluid={data.logo.childImageSharp.fluid} alt="Logotipo" />
        </Link>
        <div className="menu-mobile-icon">
          <img
            src={hamburguer_icon}
            width="19"
            alt="Icono de menú"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
          />
        </div>
        <ul className={menuClass}>
          <li>
            <Link activeClassName="active" to={`/sobre-mi/`}>
              <span>Sobre mí</span>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to={`/proyectos/`}>
              <span>Proyectos</span>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to={`/blog/`}>
              <span>Blog!</span>
            </Link>
          </li>
          <li>
            <a
              className="social-media"
              href="https://www.twitter.com/ardillan_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={data.twitter.childImageSharp.fluid} alt="Logotipo" />
            </a>
          </li>
          <li>
            <a
              className="social-media"
              href="https://www.github.com/ardillan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={data.github.childImageSharp.fluid} alt="Logotipo" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
