import React from "react"

const Hello = props => {
  return (
    <div>
      {" "}
      <aside className="hello">
        <h1>¡Hola!</h1>
        <h2>
          <strong>Me llamo Adrián</strong>, aunque mucha gente me conoce como
          Ardillán. Tengo 30 años y, actualmente, estoy inmerso en el mundo del
          desarrollo web. Me interesa todo aquello que está relacionado con la
          tecnología, los videojuegos y la música.
        </h2>
        <p>
          <small>
            Si quieres, puedes echar un vistazo a mi{" "}
            <a href={`https://twitter.com/${props.social.twitter}`}>twitter</a>{" "}
            para ver qué cuento, ver qué herramientas uso y{" "}
            <a href="/como-trabajo"> cómo me organizo</a> en mi día a día o ver{" "}
            mis fotos en{" "}
            <a href={`https://instagram.com/${props.social.instagram}`}>
              Instagram
            </a>
            .
          </small>
        </p>
      </aside>
    </div>
  )
}

export default Hello
