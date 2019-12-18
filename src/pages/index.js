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
      <p>
        Si quieres, puedes echar un vistazo a mi{" "}
        <a
          href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
        >
          twitter
        </a>{" "}
        para ver qué cuento, ver qué herramientas uso y{" "}
        <Link to="/como-trabajo"> cómo me organizo</Link> en mi día a día o ver
        mis fotos en{" "}
        <a
          href={`https://instagram.com/${
            data.site.siteMetadata.social.instagram
          }`}
        >
          Instagram
        </a>
        .
      </p>
      <h2>Entradas del blog</h2>
      <PostList length="5" type="blog" />
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
