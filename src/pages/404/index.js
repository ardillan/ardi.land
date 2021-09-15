import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import { PageContainer } from "../../components/styled/Interface"

const Glitch = styled.div`
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.3rem;
    line-height: 30px;
    font-family: "Source Sans Pro";
    font-weight: 200;
  }
`

const Error = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Ardillan.com | Matar humanos"
        postDescription="Evita el alzamiento de las máquinas introduciendo una URL correcta."
      />
      <PageContainer>
        <Glitch>
          <h1>
            <span style={{ textTransform: "italic" }}>¡Qué horrible</span>{" "}
            <span style={{ fontWeight: 800 }}>pesadilla</span>!<br />¡
            <span>Unos</span> y <span>ceros por todas partes</span>!<br />
            <span>Hasta me pareció ver un 2</span>
          </h1>
          <h2>
            Si quieres evitar el{" "}
            <a href="https://en.wikipedia.org/wiki/AI_takeover">
              alzamiento de las máquinas
              <br />
            </a>{" "}
            a toda costa, te aconsejo que vuelvas al <Link to="/">inicio</Link>.
          </h2>
        </Glitch>
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

export default Error
