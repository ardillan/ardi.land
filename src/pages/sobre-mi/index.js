import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Sobre mí" />
      <div>
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
          trabajado como diseñador gráfico, principalmente para soportes
          físicos, hasta derivar al soporte digital. He tenido el placer de
          realizar trabajos de cartelería, imagen corporativa o portadas para
          libros y discos.
        </p>

        <p>
          Actualmente estoy centrado en mejorar mi carrera como desarrollador de
          software. Puedes echar un vistazo a mis{" "}
          <Link to="/proyectos">proyectos</Link> actuales, ver{" "}
          <Link to="/como-trabajo">cómo trabajo</Link>, ver los{" "}
          <Link to="/espacios">diferentes espacios</Link> en los que he tenido
          el placer de decicar horas en frente de mi pantalla, o bien contactar
          conmigo vía <a href="https://www.github.com/ardillan">Twitter</a>.
        </p>
      </div>
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
