import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "proyectos/torlavega.com.png" }) {
        childImageSharp {
          fluid(maxHeight: 700, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Ardillan.com | Proyectos" />
      <div className="page-container">
        <div className="page-header">
          <h1>Proyectos</h1>
          <h2>
            Esta página muestra los proyectos en los que estoy trabajando
            actualmente.
          </h2>
        </div>

        <a
          className="btn-main"
          href="https://www.torlavega.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article>
            <header>
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Icono de la web de torlavega.com"
                style={{ height: 500 }}
              />
              <h2>Torlavega.com</h2>

              <p>
                Web donde se trata de recopilar, analizar y disponer de forma
                pública y ordenada información relacionada con la ciudad de
                Torrelavega.
              </p>
            </header>
          </article>
        </a>
      </div>
    </Layout>
  )
}
