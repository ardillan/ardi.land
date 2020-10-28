import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"
import { BackArrow } from "../images/general/icons"

import { formatDate, slugify } from "../utils/helpers"

const PostContainer = styled.div`
  width: 680px;
  margin: 60px 0;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: 600px;
    margin-bottom: 20px;
    padding: 0 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: 100%;
    padding: 0;
    margin: 0;
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
  }

  img {
    width: 100%;
  }

  figure {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.fonts.anchor};
    text-decoration-thickness: 3px;
    &:hover  {
      color: ${(props) => props.theme.colors.fonts.anchor};
    }
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
  grid-column-gap: 35px;
  grid-row-gap: 20px;
  grid-template-columns: 115px 1fr;
  grid-template-areas:
    "image title"
    "description description";
  h1 {
    font-family: "Noto serif";
    font-size: 40px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    width: auto;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: 100%;
    padding: 0;
    margin: 50px auto 0;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    display: flex;
    flex-direction: column;
    grid-gap: 0px;
    margin: 0 auto;
    padding: 0;
    width: 100%;

    h1 {
      font-size: 25px;
    }
  }
`
const PostHeaderTitle = styled.div`
  grid-area: title;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    h1 {
      font-size: 30px;
    }
    padding: 0 20px;
  }
`
const FeaturedImage = styled.div`
  background: ${(props) => props.theme.colors.background.main};
  grid-area: image;
  border-radius: 3px;
  height: 115px;
  object-fit: cover;
  width: 115px;
  img {
    border-radius: 3px;
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
const Description = styled.div`
  color: ${(props) => props.theme.colors.fonts.text};
  grid-area: description;
  font-family: "Inter";
  display: flex;
  line-height: 25px;
  font-size: 20px;
  margin: 10px 0 20px 0;
  font-weight: 200;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0 20px;
    font-size: 15px;
    line-height: 18px;
    margin: 0;
  }
`
const Subtitle = styled.div`
  grid-area: subtitle;
  h2 {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 200;
    opacity: 0.7;
    padding: 10px 0;
    width: fit-content;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0;
    h2 {
      color: ${(props) => props.theme.colors.fonts.anchor};
      background: initial;
      font-weight: 200;
    }
  }
`
const EditPost = styled.a`
  color: ${(props) => props.theme.colors.fonts.text};
  background: initial;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.fonts.anchor};
    background: initial;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    margin: 0;
  }
`
const BackArrowContainer = styled.div`
  position: absolute;
  padding: 17px;
  top: 170px;
  margin-left: -85px;
  border-radius: 50%;
  transform: rotateY(180deg);
  fill: ${(props) => props.theme.colors.fonts.text};
  display: flex;
  &:hover {
    background: ${(props) => props.theme.colors.fonts.anchorBackground};
    animation: moveBackArrow 0.5s infinite;
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

  @keyframes moveBackArrow {
    0% {
      transform: rotateY(180deg) scale(1.1);
      filter: saturation(0.2);
    }
    100% {
      transform: rotateY(180deg) scale(1);
    }
  }
`
const Categories = styled.div`
  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
  }
`
const Meta = styled.div`
  color: ${(props) => props.theme.colors.fonts.text};
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  width: fit-content;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    margin: 20px;
    width: auto;
    line-height: 20px;
  }
`
const Category = styled.span`
  a {
    background: ${(props) => props.theme.colors.fonts.anchor};
    color: initial;
    border-radius: 40px;
    color: white;
    font-family: "Inter";
    font-size: 13px;
    margin-right: 5px;
    padding: 5px 15px;
    text-decoration: none;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0;
  }
`
const PostInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-gap: 10px;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark

  const gitHubFile = post.fileAbsolutePath.substring(
    post.fileAbsolutePath.lastIndexOf("posts/") + 6,
    post.fileAbsolutePath.length
  )

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
              <FeaturedImage>
                <Img fluid={featuredImage} />
              </FeaturedImage>
              <PostHeaderTitle>
                <h1>{post.frontmatter.title}</h1>
                <Subtitle>
                  <h2>{post.frontmatter.subtitle}</h2>
                </Subtitle>
              </PostHeaderTitle>
              <Description>{post.frontmatter.description}</Description>
            </PostHeader>
            <PostInfo>
              <Meta>
                <time>Escrito el {formatDate(post.frontmatter.date)}</time> •{" "}
                <EditPost
                  target="_blank"
                  rel="noopener nofollow"
                  href={`https://github.com/ardillan/ardillan.com/edit/master/src/content/posts/${gitHubFile}`}
                >
                  Editar entrada
                </EditPost>
              </Meta>
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
            </PostInfo>
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
          childImageSharp {
            fluid(maxWidth: 375, maxHeight: 375, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
