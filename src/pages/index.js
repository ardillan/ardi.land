import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

import Hello from "../components/Hello"

export default ({ data }) => {
  return (
    <Layout>
      <Hello />
      <h3>Entradas del blog</h3>
      <ul className="article-list">
        {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>
              {" "}
              <p>{node.frontmatter.title}</p>
              {/* <p>{postDate}</p> */}
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
