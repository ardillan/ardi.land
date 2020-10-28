import React from "react"
import Layout from "../../components/Layout"
import PostsList from "../../components/PostsList"
import SEO from "../../components/SEO"

import { SectionTitle } from "../../components/styled/Interface"

export default () => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Blog" />
      <SectionTitle>
        <h1>Blog</h1>
        <h2>En esta página se muestran todas las entradas del blog.</h2>
      </SectionTitle>

      <section>
        <PostsList length="55" type="blog" showPostDate />
      </section>
    </Layout>
  )
}
