import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Hello from "../components/Hello"
import PostList from "../components/PostsList"

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />

      <Hello social={data.site.siteMetadata.social} />

      <section className="featured-posts">
        <h1>Mis artículos destacados</h1>
        <PostList length="3" type="blog" />
        <Link className="btn-view-more" to="/blog">
          Ver todos los artículos del blog
        </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        social {
          twitter
          instagram
        }
      }
    }
  }
`
