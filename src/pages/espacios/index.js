import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { SectionTitle, Container } from "../../components/styled/Interface"

const SpacesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  .gatsby-image-wrapper {
    margin: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-template-columns: 1fr;
    .gatsby-image-wrapper,
    img {
      width: 100%;
    }
  }
`

const Spaces = () => {
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
              gatsbyImageData(
                layout: CONSTRAINED
                width: 600
                height: 600
                placeholder: DOMINANT_COLOR
                quality: 100
              )
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo
        title={`Ardillan.com | Espacios`}
        postDescription="En esta página muestro los diferentes espacios en los que suelo trabajar con mi portátil. "
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
      <Container>
        <SpacesContainer>
          {spaces.allFile.edges.map((image) => (
            <GatsbyImage
              image={getImage(image.node)}
              key={image.node.name}
              alt="Imagen de un portátil"
            />
          ))}
        </SpacesContainer>
      </Container>
    </Layout>
  )
}

export default Spaces
