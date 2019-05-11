import React from "react"
import Layout from "../components/Layout"
import PostsList from "../components/PostsList"

export default () => {
  return (
    <Layout>
      <h2>Todos las entradas</h2>
      <PostsList length="20" type="post" />
    </Layout>
  )
}
