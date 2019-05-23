import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

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
            let postDate = new Date(
              post.node.frontmatter.date
            ).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })

            return (
              <Link to={`/${post.node.fields.slug}`} key={post.node.id}>
                <li key={post.node.id}>
                  <p>{post.node.frontmatter.title}</p>
                  <small>{postDate.toString()}</small>
                </li>
              </Link>
            )
          })}
        </ul>
      )
    }}
  />
)
