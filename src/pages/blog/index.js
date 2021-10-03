import React from "react"

import Layout from "../../components/Layout"
import PostsList from "../../components/PostsList"
import Seo from "../../components/SEO"

import { SectionTitle, Container } from "../../components/styled/Interface"

const Blog = () => {
  return (
    <Layout>
      <Seo
        title="Ardillan.com | Blog"
        postDescription="Este es mi blog. Aquí escribo sobre todo lo que me apasiona como videojuegos, música, tecnología y reflexiones personales."
      />
      <SectionTitle>
        <div>
          <h1>Blog</h1>
          <h2>
            En esta página se encuentran todas las entradas del blog. Me gusta
            escribir de todo un poco, así que siéntete libre de leer lo que
            quieras o incluso de proponer una edición
          </h2>
        </div>
      </SectionTitle>

      <Container>
        <PostsList length="55" type="blog" showPostDate />
      </Container>
    </Layout>
  )
}

export default Blog
