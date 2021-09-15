import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { getAge } from "../../utils/helpers"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import {
  SectionTitleWithImage,
  PageContainer,
} from "../../components/styled/Interface"

const About = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Ardillan.com | Sobre mí"
        postDescription="En esta página muestro un poco de mi persona."
      />
      <SectionTitleWithImage>
        <GatsbyImage
          image={data.fileName.childImageSharp.gatsbyImageData}
          alt={"Autoretrato"}
        />
        <div>
          <h1>¡Hola!</h1>
          <h2>
            <strong>Me llamo Adrián</strong>, aunque mucha gente me conoce como
            Ardillán. Tengo {getAge()} años y, actualmente, estoy inmerso en el
            mundo del desarrollo web. Me interesa todo aquello que está
            relacionado con la tecnología, los videojuegos y la música.
          </h2>
        </div>
      </SectionTitleWithImage>
      <PageContainer>
        <div>
          <p>
            Mi interés está centrado en aprender todo lo posible sobre
            tecnologías{" "}
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
            Actualmente estoy centrado en mejorar mi carrera como desarrollador
            de software. Puedes echar un vistazo a mis{" "}
            <Link to="/proyectos">proyectos</Link> actuales, ver{" "}
            <Link to="/como-trabajo">cómo trabajo</Link>, ver los{" "}
            <Link to="/espacios">diferentes espacios</Link> en los que he
            trabajado, o bien contactar conmigo vía{" "}
            <a href="https://www.github.com/ardillan">Twitter</a>.
          </p>
        </div>
      </PageContainer>
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
    fileName: file(relativePath: { eq: "portrait-mountains.jpeg" }) {
      childImageSharp {
        gatsbyImageData(width: 900, height: 400, layout: FULL_WIDTH)
      }
    }
  }
`

export default About
