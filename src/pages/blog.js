import React from "react"
import Layout from "../components/Layout"
import PostsList from "../components/PostsList"
import SEO from "../components/SEO"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Blog" />
      <h1>Blog</h1>
      <h2>En esta página se muestran todas las entradas del blog.</h2>
      <PostsList length="50" type="blog" />
    </Layout>
  )
}
