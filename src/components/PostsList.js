import React from "react"
import { Link } from "gatsby"
import { useGetFeaturedPosts } from "../hooks/useGetFeaturedPosts"
import { useGetAllPosts } from "../hooks/useGetAllPosts"
import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"
import { formatDate } from "../utils/helpers"
import Img from "gatsby-image"

export default (props) => {
  const posts = props.featured ? useGetFeaturedPosts() : useGetAllPosts()
  return (
    <ul>
      {posts.slice(0, props.length).map((post) => {
        let featuredImage =
          post.node.frontmatter.featuredImage !== null
            ? post.node.frontmatter.featuredImage.childImageSharp.fluid
            : useGetGenericFeaturedImage().childImageSharp.fluid

        return (
          <li key={post.node.id}>
            <Link to={`/${post.node.fields.slug}`} key={post.node.id}>
              <article>
                <header>
                  <Img
                    fluid={featuredImage}
                    fadeIn={true}
                    alt={post.node.frontmatter.title}
                    title={post.node.frontmatter.title}
                  />
                  <h2>{post.node.frontmatter.title}</h2>
                  <p>{post.node.frontmatter.description}</p>
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
                <div>
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
