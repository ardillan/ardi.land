import React from "react"
import { Link } from "gatsby"
import { GetFeaturedPosts } from "../hooks/getFeaturedPosts"
import { GetAllPosts } from "../hooks/getAllPosts"
import { GetGenericFeaturedImage } from "../hooks/getGenericFeaturedImage"
import { formatDate } from "../utils/helpers"
import Img from "gatsby-image"

export default props => {
  const posts = props.featured ? GetFeaturedPosts() : GetAllPosts()
  return (
    <ul className={props.featured ? "featured" : ""}>
      {posts.slice(0, props.length).map(post => {
        let featuredImage =
          post.node.frontmatter.featuredImage !== null
            ? post.node.frontmatter.featuredImage.childImageSharp.fluid
            : GetGenericFeaturedImage().childImageSharp.fluid

        return (
          <li key={post.node.id}>
            <Link to={`/${post.node.fields.slug}`} key={post.node.id}>
              <article>
                <header>
                  <Img
                    fluid={featuredImage}
                    className="featured-image"
                    fadeIn={true}
                    alt={post.node.frontmatter.title}
                    title={post.node.frontmatter.title}
                  />
                  <h2>{post.node.frontmatter.title}</h2>
                  <p className="excerpt">{post.node.frontmatter.description}</p>
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
                <div className="category">
                  {post.node.frontmatter.category.map((category, index) => (
                    <p key={index}>
                      <span>{category}</span>
                    </p>
                  ))}
                </div>
              </article>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
