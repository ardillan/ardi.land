import React from "react"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
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
        a toda costa, te aconsejo que vuelvas al <a href="/">inicio</a>.
      </h2>
    </Layout>
  )
}
