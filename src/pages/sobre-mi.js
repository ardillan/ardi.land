import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO title="Ardillan.com | Sobre mí" />
    <div
      dangerouslySetInnerHTML={{
        __html: data.allMarkdownRemark.edges[0].node.html,
      }}
    />
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "Sobre mí" } } }) {
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
