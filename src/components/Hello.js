import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { getAge } from "../utils/helpers"

const Hello = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "general/portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <aside className="hello-container columns is-multiline">
      <div className="column is-5">
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="autorretrato"
          alt="Autorretrato"
        />
        <div className="shadow" />
        <p className="vertical-text">
          <span role="img" aria-label="Icono de una abeja">
            🐝
          </span>{" "}
          {new Date().getFullYear()}
        </p>
      </div>

      <div className="column is-7 presentation">
        <h1>¡Hola!</h1>
        <p>
          <strong>Me llamo Adrián</strong>, aunque mucha gente me conoce como
          Ardillán. Tengo {getAge()} años y, actualmente, estoy inmerso en el
          mundo del desarrollo web. Me interesa todo aquello que está
          relacionado con la tecnología, los videojuegos y la música.
        </p>
        <div className="is-flex">
          <a className="btn-main" href="https://www.github.com/ardillan">
            Github
          </a>
          <a className="btn-main" href="https://www.github.com/ardillan">
            Twitter
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Hello
