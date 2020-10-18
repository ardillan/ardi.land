import React from "react"
import styled from "styled-components"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { SectionTitle } from "../../components/styled/Interface"

const Container = styled.div`
  width: 600px;
  margin: 0 auto 20px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0 20px;
    width: auto;
  }
`

export default () => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Proyectos" />
      <SectionTitle>
        <h1>Proyectos</h1>
        <h2>
          Esta página muestra los proyectos en los que estoy trabajando
          actualmente.
        </h2>
      </SectionTitle>

      <Container>
        <a
          href="https://www.torlavega.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article>
            <header>
              <h2>Torlavega.com</h2>
              <p>
                Web donde se trata de recopilar, analizar y disponer de forma
                pública y ordenada información relacionada con la ciudad de
                Torrelavega.
              </p>
            </header>
          </article>
        </a>
      </Container>
    </Layout>
  )
}
