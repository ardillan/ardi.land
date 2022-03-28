import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  PageContainer,
  SectionTitle,
  Container,
} from "../../components/styled/Interface"

const HowDoIWork = ({ data }) => {
  const CAOC = getImage(data.CAOC)

  return (
    <Layout>
      <Seo
        postDescription="Aquí muestro las aplicaciones que utilizo para desarrollar y diseñar, la música que escucho o qué utilidades uso para notas"
        title="Ardi | Cómo trabajo"
      />
      <SectionTitle>
        <h1>¿Cómo trabajo?</h1>
        <h2>
          Me gusta mucho conocer dinámicas nuevas y ver cómo aplicaciones o
          pequeños scripts facilitan el trabajo de la gente. A continuación
          indico qué aplicaciones utilizo en mi día a día, qué música escucho o
          qué utilizo para editar gráficos y construir interfaces.
        </h2>
      </SectionTitle>
      <Container>
        <GatsbyImage
          image={CAOC}
          alt="CAOC: Centro Avanzado de Ocio y Computación"
          title="CAOC: Centro Avanzado de Ocio y Computación"
        />
      </Container>
      <PageContainer
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      ></PageContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { title: { eq: "Cómo trabajo" } }) {
      fileAbsolutePath
      id
      html
      frontmatter {
        title
        date
      }
    }
    CAOC: file(relativePath: { eq: "space.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 2000
          height: 600
          layout: FULL_WIDTH
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
          quality: 100
        )
      }
    }
  }
`

export default HowDoIWork
