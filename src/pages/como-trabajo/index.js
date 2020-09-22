import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import styled from "styled-components"

const SectionTitle = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 50px auto;
  max-width: 600px;
  h1 {
    font-family: "Inter";
    font-size: 50px;
    font-weight: 800;
    margin: 0;
    padding: 0;
    width: auto;
    background: -webkit-linear-gradient(
      ${(props) => props.theme.colors.gradients.top},
      ${(props) => props.theme.colors.gradients.bottom}
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  h2 {
    border-bottom: 2px dashed #ffde32;
    border-top: 2px dashed #ffde32;
    font-family: "Gluten";
    font-size: 18px;
    margin: 20px 0;
    padding: 10px 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0 20px;
    width: auto;
    margin: 0;

    h1  {
      transform: rotate(-4deg);
      text-align: center;
      font-size: 40px;
      margin: 30px 0;
    }

    h2 {
      transform: rotate(2deg);
      margin: 0;
    }
  }
`

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
