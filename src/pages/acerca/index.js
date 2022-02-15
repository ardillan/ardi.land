import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../../components/Layout"
import { PageContainer, SectionTitle } from "../../components/styled/Interface"

const About = ({ data }) => {
  console.log("data", data)
  return (
    <Layout>
      <SectionTitle>
        <h1>Acerca de mí...</h1>
        <h2>
          Aquí podrás descubrir un poco más acerca de mi persona, he dejado
          varios enlaces a través del texto para que puedas ver mis diferentes
          facetas.
        </h2>
      </SectionTitle>
      <PageContainer>
        <GatsbyImage
          image={getImage(data.fileName)}
          alt={"Autoretrato"}
          objectFit="contain"
        />
      </PageContainer>
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
    markdownRemark(frontmatter: { title: { eq: "Acerca" } }) {
      fileAbsolutePath
      id
      frontmatter {
        title
        date
      }
      html
    }
    fileName: file(relativePath: { eq: "portrait-house.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          height: 400
          layout: CONSTRAINED
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
          quality: 100
        )
      }
    }
  }
`

export default About
