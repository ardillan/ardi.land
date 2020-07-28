import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

export default () => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Proyectos" />
      <div>
        <div>
          <h1>Proyectos</h1>
          <h2>
            Esta página muestra los proyectos en los que estoy trabajando
            actualmente.
          </h2>
        </div>

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
      </div>
    </Layout>
  )
}
