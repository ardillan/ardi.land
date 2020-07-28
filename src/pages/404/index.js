import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <SEO title="Ardillan.com | 404" />
      <h1>
        {" "}
        Parece que hubo un error en el sistema al no encontrar la página que
        buscabas
      </h1>
      <h2>
        Si quieres evitar el{" "}
        <a href="https://en.wikipedia.org/wiki/AI_takeover">
          alzamiento de las máquinas
        </a>{" "}
        a toda costa, te aconsejo que vuelvas al <Link to="/">inicio</Link>.
      </h2>
    </Layout>
  )
}
