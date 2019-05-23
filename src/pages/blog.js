import React from "react"
import Layout from "../components/Layout"
import PostsList from "../components/PostsList"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <h2>En esta página se muestran todas las entradas del blog.</h2>
      <PostsList length="50" type="blog" />
    </Layout>
  )
}

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
