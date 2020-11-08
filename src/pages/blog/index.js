import React from "react"
import styled from "styled-components"

import Layout from "../../components/Layout"
import PostsList from "../../components/PostsList"
import SEO from "../../components/SEO"

import { SectionTitle } from "../../components/styled/Interface"

const BlogPosts = styled.section`
  width: 900px;
  margin: auto;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: auto;
  }
`

export default () => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Blog" />
      <SectionTitle>
        <div>
          <h1>Blog</h1>
          <h2>En esta página se muestran todas las entradas del blog.</h2>
        </div>
      </SectionTitle>

      <BlogPosts>
        <PostsList length="55" type="blog" showPostDate />
      </BlogPosts>
    </Layout>
  )
}
