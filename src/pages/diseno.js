import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => (
  <Layout>
    <div
      dangerouslySetInnerHTML={{
        __html: data.allMarkdownRemark.edges[0].node.html,
      }}
    />{" "}
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Diseño gráfico" } } }
    ) {
      edges {
        node {
          fileAbsolutePath
          id
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`
