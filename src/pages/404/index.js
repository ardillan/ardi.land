import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/SEO"

const Glitch = styled.div`
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.3rem;
    line-height: 30px;
    font-family: "${(props) => props.theme.secondaryFont}";
    font-weight: 200;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    margin: 55px auto;

    h1 {
      font-size: 1rem;
    }

    h2 {
      font-size: 0.8rem;
    }
  }
`

const Error = () => {
  return (
    <Layout>
      <Seo
        title="Ardi | Matar humanos"
        postDescription="Evita el alzamiento de las máquinas introduciendo una URL correcta."
      />
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
    </Layout>
  )
}

export default Error
