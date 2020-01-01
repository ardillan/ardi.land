import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Hello from "../components/Hello"

export default ({ data }) => {
  const ToDoText = () => (
    <img src="https://via.placeholder.com/700x200" alt="Imagen de prueba" />
  )

  return (
    <Layout>
      <SEO title="Ardillan.com | Sobre mí" />
      <Hello social={data.site.siteMetadata.social} />

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

      <p>
        Estos son{" "}
        <strong>algunos de mis trabajos como diseñador gráfico</strong>:
      </p>

      <h3>Coders Cantabria</h3>

      <blockquote>
        Coders Cantabria es una asociación sin ánimo de lucro que organiza
        charlas donde se habla de todo lo relacionado con el mundo de desarrollo
        de software.
      </blockquote>

      <p>
        He tenido la oportunidad de ayudar a Coders Cantabria desarrollando su
        imagen de marca.{" "}
      </p>

      <ToDoText />

      <h3>Cartelería</h3>
      <p>
        A lo largo del tiempo, he diseñado multitud de carteles para diferentes
        eventos. Estos son algunos de ellos:
      </p>

      <ToDoText />

      <h3>Portadas</h3>
      <p>
        De la misma manera, he tenido la oportunidad de dar cara a libros o
        discos. Aquí algunos ejemplos:{" "}
      </p>

      <ToDoText />
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
