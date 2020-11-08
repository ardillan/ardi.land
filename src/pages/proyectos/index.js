import React from "react"
import styled from "styled-components"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { SectionTitle } from "../../components/styled/Interface"

const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 40px 30px;
  grid-gap: 20px;
  a {
    text-decoration: none;
  }
  p {
    font-family: "Inter";
    font-weight: 200;
    font-size: 15px;
    line-height: 22px;
  }
`

export default () => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Proyectos" />
      <SectionTitle>
        <div>
          <h1>Proyectos</h1>
          <h2>
            Esta página muestra los proyectos en los que estoy trabajando
            actualmente.
          </h2>
        </div>
      </SectionTitle>

      <Projects>
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
      </Projects>
    </Layout>
  )
}
