import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"
import { BackArrow } from "../images/general/icons"

import { formatDate } from "../utils/helpers"

const PostContainer = styled.div`
  width: 600px;
  margin: 0 auto 20px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: 600px;
    margin: auto;
    padding: 0 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: 100%;
    padding: 0;
  }
`

const PostContent = styled.div`
  p,
  ol,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 600px;
    margin: auto;
  }

  img {
    width: 100%;
  }

  .gallery-post__3-columns {
    display: grid;
    margin: 35px 0;
    grid-gap: 10px;
    grid-template-areas:
      "a b"
      "a c";

    .gatsby-resp-image-wrapper {
      height: 100%;
    }

    .gatsby-resp-image-background-image {
      padding-bottom: 0;
    }

    img {
      object-fit: cover;
    }

    figure:nth-child(1) {
      grid-area: a;
    }
    figure:nth-child(2) {
      grid-area: b;
    }
    figure:nth-child(3) {
      grid-area: c;
    }

    figcaption {
      display: none;
      background: red;
    }

    figure {
      padding: 0;
      margin: 0;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0 20px;

    p,
    ol,
    ul,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      width: auto;
    }
  }
`

const PostHeader = styled.header`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 150px;
  margin: auto;
  width: 600px;
  h1 {
    font-family: "Inter";
    font-size: 50px;
    font-weight: 800;
    margin: 0;
    padding: 0;
    width: auto;
    background: -webkit-linear-gradient(
      ${(props) => props.theme.colors.gradients.top},
      ${(props) => props.theme.colors.gradients.bottom}
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: 100%;
    padding: 0;
    margin: 50px auto 0;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    display: flex;
    flex-direction: column-reverse;
    grid-gap: 0px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }
`

const PostHeaderTitle = styled.div`
  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    font-size: 30px;
    padding: 0 20px;
  }
`

const FeaturedImage = styled.div`
  background: #ffc313;
  border-radius: 50%;
  height: 150px;
  object-fit: cover;
  width: 150px;
  img {
    border-radius: 50%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    border-radius: 0;
    height: auto;
    object-fit: cover;
    width: 100%;
    margin-bottom: 10px;
    img {
      border-radius: 0;
    }
  }
`

const Subtitle = styled.div`
  h2 {
    border-bottom: 2px dashed #ffde32;
    border-top: 2px dashed #ffde32;
    font-family: "Gluten";
    font-size: 18px;
    margin: 20px 0;
    padding: 10px 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0;
  }
`

const BackArrowContainer = styled.div`
  position: absolute;
  padding: 17px;
  margin-left: -85px;
  border-radius: 50%;
  transform: rotateY(180deg);
  fill: ${(props) => props.theme.colors.fonts.anchor};
  &:hover {
    background: ${(props) => props.theme.colors.fonts.anchorBackground};
  }
  img {
    width: 25px;
    position: absolute;
    left: 17px;
    top: 20px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    display: none;
  }
`

const Meta = styled.div`
  background: ${(props) => props.theme.colors.background.meta};
  color: ${(props) => props.theme.colors.fonts.text};
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  padding: 10px;
  width: max-content;
  a {
    color: ${(props) => props.theme.colors.fonts.anchor};
    text-decoration: none;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    margin: 0 20px;
    width: auto;
    line-height: 30px;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark

  const featuredImage =
    post.frontmatter.featuredImage !== null
      ? post.frontmatter.featuredImage.childImageSharp.fluid
      : useGetGenericFeaturedImage().childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title={`Ardillan.com | ${post.frontmatter.title}`}
        postDescription={post.frontmatter.description}
      />
      <section>
        <article>
          <PostContainer>
            <Link to={`../`}>
              <BackArrowContainer>
                <BackArrow />
              </BackArrowContainer>
            </Link>

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
              <time>Escrito el {formatDate(post.frontmatter.date)} </time> en{" "}
              {post.frontmatter.category.map((cat) => (
                <Link to={`/categoria/${cat}`} key={cat}>
                  {cat}
                </Link>
              ))}
            </Meta>
          </PostContainer>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
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
