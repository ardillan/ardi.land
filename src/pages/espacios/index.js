import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Img from "gatsby-image"
import styled from "styled-components"
import { SectionTitle } from "../../components/styled/Interface"

const Spaces = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2px;
  margin: 2px 0;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0px 2px;
    grid-template-columns: 1fr 1fr;
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
        <div>
          <h1>Mis espacios</h1>
          <h2>
            Aquí muestro los diferentes espacios en los que he tenido el placer
            de trabajar con mi ordenador. Me encanta ser lo más nómada posible
            en este aspecto, por eso siempre aprovecho la ocasión para poder
            cambiar de ámbito.
          </h2>
        </div>
      </SectionTitle>
      <Spaces>
        {spaces.allFile.edges.map((image) => {
          return (
            <Img
              key={image.node.name}
              alt="Imagen de un portátil"
              fluid={image.node.childImageSharp.fluid}
            />
          )
        })}
      </Spaces>
    </Layout>
  )
}
