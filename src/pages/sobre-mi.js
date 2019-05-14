import React from "react"
import Layout from "../components/Layout"

import retrato from "../../content/images/general/sobre-mi.jpg"

export default () => (
  <Layout>
    <h1>Sobre mí</h1>
    <img src={retrato} alt="Autoretrato" />
    <p>
      Me llamo Adrián, aunque mucha gente me conoce como Ardillán. Tengo 30 años
      y, actualmente, estoy inmerso en el mundo del desarrollo web. Me interesa
      todo aquello que está relacionado con la tecnología, los videojuegos y la
      música.
    </p>
  </Layout>
)
