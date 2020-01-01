import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"

export default () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "proyectos/torlavega.com.png" }) {
        childImageSharp {
          fluid(maxHeight: 500, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Proyectos</h1>
      <p>
        Esta página muestra los proyectos en los que estoy trabajando
        actualmente.
      </p>
      <div className="columns is-multline">
        <div className="column is-6">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Captura de pantalla de la web de torlavega.com"
          />
          <h6>Torlavega.com</h6>
          <p>
            Web donde se trata de recopilar, analizar y disponer de forma
            pública y ordenada información relacionada con la ciudad de
            Torrelavega.
          </p>
          <div className="is-flex">
            <a className="btn-main" href="https://www.torlavega.com">
              Visitar sitio
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
