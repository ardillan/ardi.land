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
                description
                category
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
        <ul>
          {posts.slice(0, props.length).map(post => {
            return (
              <li key={post.node.id}>
                <Link to={`/${post.node.fields.slug}`} key={post.node.id}>
                  <article>
                    <header>
                      <h2>{post.node.frontmatter.title}</h2>
                      {props.showPostDate ? (
                        <p>
                          Escrito el{" "}
                          <time dateTime={post.node.frontmatter.date}>
                            {getPostDate()}
                          </time>
                        </p>
                      ) : (
                        ""
                      )}
                    </header>
                    <p className="category">{post.node.frontmatter.category}</p>
                    <p className="excerpt">
                      {post.node.frontmatter.description}
                    </p>
                  </article>
                </Link>
              </li>
            )
          })}
        </ul>
      )
    }}
  />
)
