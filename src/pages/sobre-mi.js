import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Hello from "../components/Hello"
import Img from "gatsby-image"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Ardillan.com | Sobre mí" />
      <Hello social={data.site.siteMetadata.social} />

      <Img
        fluid={data.fileName.childImageSharp.fluid}
        alt="Retrato hecho por Sara del Hoyo"
      />
      <br />
      <p>
        Mi interés está centrado en aprender todo lo posible sobre tecnologías
        {` `}
        <a href="https://es.wikipedia.org/wiki/Front-end_y_back-end">
          front-end
        </a>
        , enfocándome sobretodo en utilidades que sirvan para construir
        interfaces web. Tanto es así, que esta web ha sido desarrollada con{" "}
        <a href="https://reactjs.org">React JS</a>.
      </p>

      <p>
        Antes de centrar mi carrera en el desarrollo de software, he estado
        trabajado como diseñador gráfico, principalmente para soportes físicos,
        hasta derivar al soporte digital. He tenido el placer de realizar
        trabajos de cartelería, imagen corporativa o portadas para libros y
        discos.
      </p>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        social {
          twitter
          instagram
        }
      }
    }
    fileName: file(relativePath: { eq: "general/sobre-mi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
