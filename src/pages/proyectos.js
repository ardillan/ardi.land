import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default () => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Proyectos" />
      <div className="page-container">
        <div className="page-header">
          <h1>Proyectos</h1>
          <h2>
            Esta página muestra los proyectos en los que estoy trabajando
            actualmente.
          </h2>
        </div>

        <a
          className="btn-main"
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
