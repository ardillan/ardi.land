import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <h4>{data.allMarkdownRemark.totalCount} entradas escritas</h4>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
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
