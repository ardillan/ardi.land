import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Img from "gatsby-image"
import { GetGenericFeaturedImage } from "../hooks/getGenericFeaturedImage"

import { formatDate } from "../utils/helpers"

export default ({ data }) => {
  const post = data.markdownRemark

  const featuredImage =
    post.frontmatter.featuredImage !== null
      ? post.frontmatter.featuredImage.childImageSharp.fluid
      : GetGenericFeaturedImage().childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title={`Ardillan.com | ${post.frontmatter.title}`}
        postDescription={post.frontmatter.description}
      />
      <section>
        <article>
          <header>
            <h1>
              <span>{post.frontmatter.title}</span>
            </h1>
            <h2>{post.frontmatter.subtitle}</h2>
            <div>
              <time>Escrito el {formatDate(post.frontmatter.date)} </time>
              <p>
                <span role="img" aria-label="Reloj">
                  🕐
                </span>
                Tardas {post.timeToRead} minuto
                {post.timeToRead === 1 ? "" : "s"} en leerlo
              </p>
            </div>
            <div>
              <Img fluid={featuredImage} />
            </div>
          </header>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
