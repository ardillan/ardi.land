import React from "react"
import styled from "styled-components"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

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
