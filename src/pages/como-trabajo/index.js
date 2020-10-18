import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import styled from "styled-components"
import { SectionTitle } from "../../components/styled/Interface"

const Container = styled.div`
  width: 600px;
  margin: 0 auto 20px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0 20px;
    width: auto;
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Cómo trabajo" />
      <SectionTitle>
        <h1>¿Cómo trabajo?</h1>
        <h2>
          Me gusta mucho conocer dinámicas nuevas y ver cómo aplicaciones o
          pequeños scripts facilitan el trabajo de la gente. A continuación
          indico qué aplicaciones utilizo en mi día a día, qué música escucho o
          qué utilizo para editar gráficos y construir interfaces.
        </h2>
      </SectionTitle>
      <Container
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { title: { eq: "Cómo trabajo" } }) {
      fileAbsolutePath
      id
      frontmatter {
        title
        date
      }
      html
    }
  }
`
