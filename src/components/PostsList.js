import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { getPostDate } from "../utils/helpers"

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
          {posts.slice(0, props.length).map(post => {
            return (
              <li key={post.node.id}>
                <Link to={`/${post.node.fields.slug}`} key={post.node.id}>
                  <p>{post.node.frontmatter.title}</p>
                  <small>{getPostDate(post.node.frontmatter.date)}</small>
                </Link>
              </li>
            )
          })}
        </ul>
      )
    }}
  />
)
