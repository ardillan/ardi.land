import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

import Hello from "../components/Hello"

export default ({ data }) => {
  return (
    <Layout>
      <Hello />
      <h3>Artículos</h3>
      <ul className="article-list">
        {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>
              {" "}
              <h3>{node.frontmatter.title}</h3>
            </Link>{" "}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
