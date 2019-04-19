import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => (
  <Layout>
    <h1>Sobre {data.site.siteMetadata.title}</h1>
    <p>
      Me llamo Adrián, aunque mucha gente me conoce como Ardillán. Tengo 30 años
      y, actualmente, estoy inmerso en el mundo del desarrollo web. Me interesa
      todo aquello que está relacionado con la tecnología, los videojuegos y la
      música.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
