import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"
import { formatDate } from "../utils/helpers"
import { SectionTitle, Container } from "../components/styled/Interface"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const Post = styled.li``
const Content = styled.div``
const PostsLists = styled.ul`
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 50px;

  h2 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 0;
  }

  time {
    font-size: 15px;
    opacity: 0.8;
    padding: 20px 0;
    display: block;
  }

  p {
    font-size: 18px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const BlogCategory = ({ pageContext, data }) => {
  const category = pageContext.category
  const posts = data.allMarkdownRemark.edges
  const genericFeaturedImage =
    useGetGenericFeaturedImage().childImageSharp.fixed

  return (
    <Layout>
      <Seo title={`Ardi`} />
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

        <Container>
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
                        <time dateTime={post.node.frontmatter.date}>
                          {formatDate(post.node.frontmatter.date)}
                        </time>
                        <p>{post.node.frontmatter.description}</p>
                      </Content>
                    </article>
                  </Link>
                </Post>
              )
            })}
          </PostsLists>
        </Container>
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
