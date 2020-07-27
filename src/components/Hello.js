import React from "react"
import { getAge } from "../utils/helpers"

const Hello = () => {
  return (
    <section>
      <h1>¡Hola!</h1>
      <p>
        <strong>Me llamo Adrián</strong>, aunque mucha gente me conoce como
        Ardillán. Tengo {getAge()} años y, actualmente, estoy inmerso en el
        mundo del desarrollo web. Me interesa todo aquello que está relacionado
        con la tecnología, los videojuegos y la música.
      </p>
    </section>
  )
}

export default Hello
