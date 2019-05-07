import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

import Hello from "../components/Hello"

export default ({ data }) => {
  return (
    <Layout>
      <Hello />
      <h2>Entradas del blog</h2>
      <ul className="article-list">
        {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>
              {" "}
              {node.frontmatter.title}
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
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { type: { eq: "post" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
          }
        }
      }
    }
  }
`
