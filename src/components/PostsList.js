import React from "react"
import { Link } from "gatsby"
import { getFeaturedPosts } from "../hooks/getFeaturedPosts"
import { getAllPosts } from "../hooks/getAllPosts"
import { formatDate } from "../utils/helpers"

export default props => {
  const posts = props.featured ? getFeaturedPosts() : getAllPosts()

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
                        {formatDate()}
                      </time>
                    </p>
                  ) : (
                    ""
                  )}
                </header>
                <p className="category">{post.node.frontmatter.category}</p>
                <p className="excerpt">{post.node.frontmatter.description}</p>
              </article>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
