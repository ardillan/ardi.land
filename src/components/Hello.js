import React from "react"
import { getAge } from "../utils/helpers"

const Hello = () => {
  return (
    <aside className="hello-container columns is-multiline">
      <div className="column is-5">
        <img src="https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
        <div className="shadow" />
        <p className="vertical-text">1988•{new Date().getFullYear()}</p>
      </div>

      <div className="column is-7 presentation">
        <h1>¡Hola!</h1>
        <p>
          <strong>Me llamo Adrián</strong>, aunque mucha gente me conoce como
          Ardillán. Tengo {getAge()} años y, actualmente, estoy inmerso en el
          mundo del desarrollo web. Me interesa todo aquello que está
          relacionado con la tecnología, los videojuegos y la música.
        </p>
        <div className="is-flex">
          <a href="https://www.github.com/ardillan">Github</a>
          <a href="https://www.github.com/ardillan">Twitter</a>
          <a href="https://www.github.com/ardillan">Portafolio</a>
        </div>
      </div>
    </aside>
  )
}

export default Hello
