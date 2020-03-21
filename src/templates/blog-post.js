import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Img from "gatsby-image"
import { getGenericFeaturedImage } from "../hooks/getGenericFeaturedImage"

import { formatDate } from "../utils/helpers"

export default ({ data }) => {
  const post = data.markdownRemark

  const featuredImage =
    post.frontmatter.featuredImage !== null
      ? post.frontmatter.featuredImage.childImageSharp.fluid
      : getGenericFeaturedImage().childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title={`Ardillan.com | ${post.frontmatter.title}`}
        postDescription={post.frontmatter.description}
      />
      <section className="page-container">
        <article>
          <header className="post-intro">
            <h1>
              <span>{post.frontmatter.title}</span>
            </h1>
            <h2>{post.frontmatter.subtitle}</h2>
            <div>
              <time>Escrito el {formatDate(post.frontmatter.date)} </time>
              <p className="time-to-read">
                <span role="img" aria-label="Reloj">
                  🕐{" "}
                </span>
                Tardas {post.timeToRead} minuto
                {post.timeToRead === 1 ? "" : "s"} en leerlo
              </p>
            </div>
            <div className="post-featured-image">
              <Img fluid={featuredImage} />
            </div>
          </header>

          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        subtitle
        date
        description
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 450, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
