import React from "react"
import Layout from "../../components/Layout"
import PostsList from "../../components/PostsList"
import SEO from "../../components/SEO"

export default () => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Blog" />
      <div>
        <div>
          <h1>Blog</h1>
          <h2>En esta página se muestran todas las entradas del blog. </h2>
        </div>
        <section>
          <PostsList length="55" type="blog" showPostDate />
        </section>
      </div>
    </Layout>
  )
}
