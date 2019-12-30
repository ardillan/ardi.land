import React from "react"
import { Link } from "gatsby"
import { getFeaturedPosts } from "../hooks/getFeaturedPosts"
import { getAllPosts } from "../hooks/getAllPosts"
import { getGenericFeaturedImage } from "../hooks/getGenericFeaturedImage"
import { formatDate } from "../utils/helpers"
import Img from "gatsby-image"

export default props => {
  const posts = props.featured ? getFeaturedPosts() : getAllPosts()

  return (
    <ul className="columns is-multiline">
      {posts.slice(0, props.length).map(post => {
        let featuredImage =
          post.node.frontmatter.featuredImage !== null
            ? post.node.frontmatter.featuredImage.childImageSharp.fluid
            : getGenericFeaturedImage().childImageSharp.fluid

        return (
          <li className="column is-4" key={post.node.id}>
            <Link to={`/${post.node.fields.slug}`} key={post.node.id}>
              <article>
                <header>
                  <Img
                    fluid={featuredImage}
                    className="featured-image"
                    fadeIn={true}
                  />
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
                <div className="is-flex">
                  {post.node.frontmatter.category.map(category => (
                    <p className="category">
                      <span>{category}</span>
                    </p>
                  ))}
                </div>
                {/* <p className="excerpt">{post.node.frontmatter.description}</p> */}
              </article>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
