import React from "react"
import Layout from "../components/Layout"
import PostsList from "../components/PostsList"
import SEO from "../components/SEO"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Blog" />
      <h1>Blog</h1>
      <p>En esta página se muestran todas las entradas del blog. </p>
      <section className="all-posts">
        <PostsList length="50" type="blog" />
      </section>
    </Layout>
  )
}
