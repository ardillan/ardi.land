import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"
import { formatDate } from "../utils/helpers"
import { SectionTitle } from "../components/styled/Interface"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Post = styled.li`
  a {
    text-decoration: none;
  }
  article {
    display: flex;
  }
  header {
    margin-right: 15px;
    img {
      width: 70px;
      margin-right: 10px;
      border-radius: 50%;
    }
  }
  h2  {
    font-family: "Noto serif";
    padding: 0;
    margin: 0;
    font-size: 23px;
    line-height: 22px;
  }
  p {
    font-family: "Inter";
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  &:hover {
    article {
      transition: all 0.2s;
      background: ${(props) => props.theme.colors.fonts.anchorBackground};
      padding: 20px;
      margin: -20px;
      border-radius: 10px;
    }

    h2,
    p {
      transition: all 0.2s;
      color: ${(props) => props.theme.colors.fonts.anchor};
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    display: flex;
    text-align: center;
    margin: auto;
    width: auto;
    a {
      background: none;
      article {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const PostsLists = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  list-style-type: none;
  padding: 0;
  width: 900px;
  margin: 40px auto;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-template-columns: 1fr;
    width: auto;
  }
`
export default ({ pageContext, data }) => {
  const category = pageContext.category
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title={`Ardillan.com`} />
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
                ? post.node.frontmatter.featuredImage.childImageSharp.fixed
                : useGetGenericFeaturedImage().childImageSharp.fixed

            return (
              <Post key={post.node.id}>
                <Link to={`/${post.node.fields.slug}`} key={post.node.id}>
                  <article>
                    <header>
                      <Img
                        fixed={featuredImage}
                        fadeIn={true}
                        alt={post.node.frontmatter.title}
                        title={post.node.frontmatter.title}
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
  query($category: String!) {
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
                fixed(width: 70, height: 70, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
