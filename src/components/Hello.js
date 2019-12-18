import React from "react"
import { getAge } from "../utils/helpers"

const Hello = props => {
  return (
    <div>
      {" "}
      <aside className="hello">
        <h1>¡Hola!</h1>
        <h2>
          <strong>Me llamo Adrián</strong>, aunque mucha gente me conoce como
          Ardillán. Tengo {getAge()} años y, actualmente, estoy inmerso en el
          mundo del desarrollo web. Me interesa todo aquello que está
          relacionado con la tecnología, los videojuegos y la música.
        </h2>
      </aside>
    </div>
  )
}

export default Hello
