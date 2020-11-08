import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { PageContainer } from "../../components/styled/Interface"

const Glitch = styled.div`
  span:nth-child(1) {
    color: ${(props) => props.theme.colors.rainBow[0]};
  }
  span:nth-child(2) {
    color: ${(props) => props.theme.colors.rainBow[1]};
  }
  span:nth-child(3) {
    color: ${(props) => props.theme.colors.rainBow[2]};
  }
  span:nth-child(4) {
    color: ${(props) => props.theme.colors.rainBow[3]};
  }
  span:nth-child(5) {
    color: ${(props) => props.theme.colors.rainBow[4]};
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Ardillan.com | 404" />
      {/* <Img fluid={} /> */}
      <PageContainer>
        <Img
          fluid={data.fileName.childImageSharp.fluid}
          fadeIn={true}
          alt="Captura del vídeo R.U.R, donde aparecen unos robots maltratando a un humano"
          title="Captura de R.U.R"
        />
        <Glitch>
          <h1>
            <span style={{ textTransform: "italic" }}>¡Qué horrible</span>{" "}
            <span style={{ fontWeight: 800 }}>pesadilla</span>! ¡
            <span>Unos</span> y <span>ceros por todas partes</span>!
            <span>Hasta me pareció ver un 2</span>
          </h1>
        </Glitch>
        <h2>
          Si quieres evitar el{" "}
          <a href="https://en.wikipedia.org/wiki/AI_takeover">
            alzamiento de las máquinas
          </a>{" "}
          a toda costa, te aconsejo que vuelvas al <Link to="/">inicio</Link>.
        </h2>
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    fileName: file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
