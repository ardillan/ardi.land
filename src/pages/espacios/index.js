import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Img from "gatsby-image"
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
    border-bottom: 2px dashed ${(props) => props.theme.colors.background.line};
    border-top: 2px dashed ${(props) => props.theme.colors.background.line};
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

const Spaces = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 30px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0 20px;
  }
`

export default () => {
  const spaces = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "spaces" }
          extension: { regex: "/jpg|png|jpeg/" }
        }
        sort: { fields: name, order: DESC }
      ) {
        edges {
          node {
            sourceInstanceName
            relativePath
            size
            name
            childImageSharp {
              fluid(maxWidth: 800, cropFocus: CENTER, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={`Ardillan.com | Espacios`}
        postDescription="Espacios de trabajo"
      />
      <SectionTitle>
        <h1>Mis espacios</h1>
        <h2>
          Aquí muestro los diferentes espacios en los que he tenido el placer de
          trabajar con mi ordenador. Me encanta ser lo más nómada posible en
          este aspecto, por eso siempre aprovecho la ocasión para poder cambiar
          de ámbito.
        </h2>
      </SectionTitle>
      <Spaces>
        {spaces.allFile.edges.map((image) => {
          return <Img fluid={image.node.childImageSharp.fluid} />
        })}
      </Spaces>
    </Layout>
  )
}
