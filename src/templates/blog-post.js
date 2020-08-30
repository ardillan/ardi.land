import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Img from "gatsby-image"
import { GetGenericFeaturedImage } from "../hooks/getGenericFeaturedImage"

import { formatDate } from "../utils/helpers"

const PostContainer = styled.div`
  width: 600px;
  margin: auto;

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.fonts.text};
  }

  p {
    font-size: 18px;
    line-height: 30px;
  }
`

const PostHeader = styled.header`
  width: 600px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 150px;
  grid-gap: 40px;
  h1 {
    font-family: "Inter";
    font-size: 50px;
    margin: 0;
    padding: 0;
    font-weight: 800;
    background: -webkit-linear-gradient(#ffe600, #ff3566);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const PostHeaderTitle = styled.div``

const FeaturedImage = styled.div`
  object-fit: cover;
  background: #ffc313;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
`

const Subtitle = styled.div`
  h2 {
    border-bottom: 2px dashed #ffde32;
    border-top: 2px dashed #ffde32;
    padding: 10px 0;
    font-family: "Gluten";
    margin: 20px 0;
    font-size: 18px;
  }
`

const Meta = styled.div`
  background: ${(props) => props.theme.colors.background.meta};
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  padding: 10px;
`

export default ({ data }) => {
  const post = data.markdownRemark

  const featuredImage =
    post.frontmatter.featuredImage !== null
      ? post.frontmatter.featuredImage.childImageSharp.fluid
      : GetGenericFeaturedImage().childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title={`Ardillan.com | ${post.frontmatter.title}`}
        postDescription={post.frontmatter.description}
      />
      <section>
        <article>
          <PostContainer>
            <PostHeader>
              <PostHeaderTitle>
                <h1>{post.frontmatter.title}</h1>
                <Subtitle>
                  <h2>{post.frontmatter.subtitle}</h2>
                </Subtitle>
              </PostHeaderTitle>
              <FeaturedImage>
                <Img fluid={featuredImage} />
              </FeaturedImage>
            </PostHeader>
            <Meta>
              <time>Escrito el {formatDate(post.frontmatter.date)} </time>
            </Meta>
          </PostContainer>
          <PostContainer dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        subtitle
        date
        description
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 150, maxHeight: 150, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
