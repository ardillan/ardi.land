import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Img from "gatsby-image"

export default () => {
  const spaces = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "spaces" }
          extension: { regex: "/jpg|png|jpeg/" }
        }
        sort: { fields: name, order: DESC }
      ) {
        edges {
          node {
            sourceInstanceName
            relativePath
            size
            name
            childImageSharp {
              fluid(maxWidth: 800, cropFocus: CENTER, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={`Ardillan.com | Espacios`}
        postDescription="Espacios de trabajo"
      />
      <div>
        <section>
          <div>
            <h1>Mis espacios</h1>
            <h2>
              Aquí muestro los diferentes espacios en los que he tenido el
              placer de trabajar con mi ordenador. Me encanta ser lo más nómada
              posible en este aspecto, por eso siempre aprovecho la ocasión para
              poder cambiar de ámbito.
            </h2>
          </div>
        </section>
      </div>
      <div>
        {spaces.allFile.edges.map((image) => {
          return <Img fluid={image.node.childImageSharp.fluid} />
        })}
      </div>
    </Layout>
  )
}