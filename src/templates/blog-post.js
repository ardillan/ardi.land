import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import { Container } from "../components/styled/Interface"
import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"

import { formatDate, slugify } from "../utils/helpers"

const PostContent = styled.div``

const PostHeader = styled.header``
const PostHeaderTitle = styled.div``
const FeaturedImage = styled.div``
const Description = styled.div``
const Subtitle = styled.div``
const EditPost = styled.a``
const Categories = styled.div``
const Meta = styled.div``
const Category = styled.span``
const PostInfo = styled.div``

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const genericFeaturedImage =
    useGetGenericFeaturedImage().childImageSharp.gatsbyImageData

  const gitHubFile = post.fileAbsolutePath.substring(
    post.fileAbsolutePath.lastIndexOf("posts/") + 6,
    post.fileAbsolutePath.length
  )

  const featuredImage =
    post.frontmatter.featuredImage !== null
      ? post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
      : genericFeaturedImage

  return (
    <Layout>
      <Seo
        title={`Ardillan.com | ${post.frontmatter.title}`}
        postDescription={post.frontmatter.description}
      />
      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta
          property="og:url"
          content={`https://www.ardillan.com/${post.fields.slug}`}
        />
        <meta
          property="og:image"
          content={`https://www.ardillan.com${post.frontmatter.featuredImage.publicURL}`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.ardillan.com/${post.fields.slug}`}
        />
        <meta property="twitter:title" content={post.frontmatter.title} />
        <meta
          property="twitter:description"
          content={post.frontmatter.description}
        />
        <meta
          property="twitter:image"
          content={`https://www.ardillan.com${post.frontmatter.featuredImage.publicURL}`}
        />
      </Helmet>
      <section>
        <article>
          <Container>
            <FeaturedImage>
              <GatsbyImage
                image={featuredImage}
                alt={`Imagen de cabecera de la entrada: ${post.frontmatter.title}`}
              />
            </FeaturedImage>
            <PostHeader>
              <PostHeaderTitle>
                <h1>{post.frontmatter.title}</h1>
                <Subtitle>
                  <h2>{post.frontmatter.subtitle}</h2>
                </Subtitle>
                <Description>{post.frontmatter.description}</Description>
                <Categories>
                  {post.frontmatter.category ? (
                    post.frontmatter.category.map((cat) => (
                      <Category key={cat}>
                        <Link to={`/categoria/${slugify(cat).toLowerCase()}`}>
                          {cat}
                        </Link>
                      </Category>
                    ))
                  ) : (
                    <span>Sin categoría</span>
                  )}
                </Categories>
                <PostInfo>
                  <Meta>
                    <time>Escrito el {formatDate(post.frontmatter.date)}</time>{" "}
                    •{" "}
                    <EditPost
                      target="_blank"
                      rel="noopener nofollow"
                      href={`https://github.com/ardillan/ardillan.com/edit/master/src/content/posts/${gitHubFile}`}
                    >
                      Editar entrada
                    </EditPost>
                  </Meta>
                </PostInfo>
              </PostHeaderTitle>
            </PostHeader>
          </Container>

          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fileAbsolutePath
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
          publicURL
          childImageSharp {
            gatsbyImageData(
              width: 600
              height: 300
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
            fluid(maxWidth: 600, maxHeight: 300, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPost
