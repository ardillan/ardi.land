import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import Hello from "../components/Hello"
import PostList from "../components/PostsList"

import "../styles/main.scss"

export default ({ data }) => {
  return (
    <Layout>
      <Hello social={data.site.siteMetadata.social} />
      <h2>Entradas del blog</h2>
      <PostList length="5" type="blog" />
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        social {
          twitter
          instagram
        }
      }
    }
  }
`
