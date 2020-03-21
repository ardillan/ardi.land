import React from "react"
import Layout from "../components/Layout"
import PostsList from "../components/PostsList"
import SEO from "../components/SEO"

export default () => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Blog" />
      <div className="page-container">
        <div className="page-header">
          <h1>Blog</h1>
          <h2>En esta página se muestran todas las entradas del blog. </h2>
        </div>
        <section className="all-posts">
          <PostsList length="55" type="blog" />
        </section>
      </div>
    </Layout>
  )
}
