import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/posts/" } }
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
                type
              }
            }
          }
        }
      }
    `}
    render={data => {
      let posts = data.allMarkdownRemark.edges
      if (props.type) {
        posts = posts.filter(post => post.node.frontmatter.type === props.type)
      }

      return (
        <ul className="article-list">
          {posts.slice(0, props.length).map(post => (
            <a href={post.node.fields.slug} key={post.node.id}>
              <li key={post.node.id}>
                <p>{post.node.frontmatter.title}</p>
              </li>
            </a>
          ))}
        </ul>
      )
    }}
  />
)
