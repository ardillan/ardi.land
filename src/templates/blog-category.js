import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"
import { formatDate } from "../utils/helpers"
import { SectionTitle } from "../components/styled/Interface"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const Post = styled.li``
const Content = styled.div``
const PostsLists = styled.ul``
const BlogCategory = ({ pageContext, data }) => {
  const category = pageContext.category
  const posts = data.allMarkdownRemark.edges
  const genericFeaturedImage =
    useGetGenericFeaturedImage().childImageSharp.fixed

  return (
    <Layout>
      <Seo title={`Ardillan.com`} />
      <section>
        <SectionTitle>
          <div>
            <h1>Categoría: {category}</h1>
            <h2>
              Hay un total de <strong>{posts.length}</strong> entradas
              etiquetadas con la categoría <strong>{category}</strong>
            </h2>
          </div>
        </SectionTitle>

        <PostsLists>
          {posts.map((post) => {
            let featuredImage =
              post.node.frontmatter.featuredImage !== null
                ? post.node.frontmatter.featuredImage.childImageSharp
                    .gatsbyImageData
                : genericFeaturedImage

            return (
              <Post key={post.node.id}>
                <Link to={`/${post.node.fields.slug}`}>
                  <article>
                    <header>
                      <GatsbyImage
                        image={featuredImage}
                        alt={post.node.frontmatter.title}
                      />
                    </header>
                    <Content>
                      <h2>{post.node.frontmatter.title}</h2>
                      <p>
                        Escrito el{" "}
                        <time dateTime={post.node.frontmatter.date}>
                          {formatDate(post.node.frontmatter.date)}
                        </time>
                      </p>
                    </Content>
                  </article>
                </Link>
              </Post>
            )
          })}
        </PostsLists>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($category: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date
            description
            category
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 300, height: 300, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`

export default BlogCategory
