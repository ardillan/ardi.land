import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default ({ data }) => {
  const post = data.markdownRemark
  let postDate = new Date(post.frontmatter.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Layout>
      <SEO title={`Ardillan.com | ${post.frontmatter.title}`} />
      <div>
        <div className="post-title">
          <h1>{post.frontmatter.title}</h1> <h2>{post.frontmatter.subtitle}</h2>{" "}
        </div>
        <div className="post-meta">
          <time>Escrito el {postDate}</time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />{" "}
      </div>{" "}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        date
      }
    }
  }
`
