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
      <section className="post-container">
        <div className="columns is-multiline">
          <div className="column is-6" style={{ position: "relative" }}>
            <h1>{post.frontmatter.title}</h1>{" "}
            <h2>{post.frontmatter.subtitle}</h2>{" "}
            <time>Escrito el {formatDate(post.frontmatter.date)} </time>
            <div className="vertical-category">
              {post.frontmatter.category.map((value, index) => (
                <p key={index}>
                  <span>{value}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="column is-6">
            <Img fluid={featuredImage} className="featured-image" />
          </div>
          <div
            className="content column is-10 is-offset-2"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />{" "}
        </div>
      </section>{" "}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        subtitle
        date
        description
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
