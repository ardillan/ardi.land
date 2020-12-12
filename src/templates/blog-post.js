import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Helmet from "react-helmet"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"
import { BackArrow } from "../images/general/icons"

import { formatDate, slugify } from "../utils/helpers"

const PostContainer = styled.div`
  background: linear-gradient(
    -180deg,
    ${(props) => props.theme.colors.gradients.top},
    ${(props) => props.theme.colors.gradients.bottom}
  );
  margin-bottom: 40px;
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
  width: 900px;
  margin: auto;
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
    text-decoration-thickness: 2px;
    &:hover  {
      color: ${(props) => props.theme.colors.fonts.anchor};
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0 30px;
    width: auto;
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
const PostHeaderContainer = styled.div`
  width: 900px;
  margin: auto;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: auto;
  }
`
const PostHeader = styled.header`
  display: grid;
  grid-column-gap: 35px;
  grid-template-columns: 230px 1fr;
  padding: 30px 0;
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
    padding: 30px;
    h1 {
      font-size: 30px;
    }
  }
`
const FeaturedImage = styled.div`
  grid-area: image;
  img {
    border-radius: 50%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    height: auto;
    object-fit: cover;
    width: 100px;
    padding: 0 30px;
    img {
      border-radius: 50%;
    }
  }
`
const Description = styled.div`
  color: ${(props) => props.theme.colors.fonts.text};
  grid-area: description;
  font-family: "Inter";
  display: flex;
  line-height: 19px;
  font-size: 15px;
  margin: 10px 0 20px 0;
  font-weight: 200;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
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
  text-decoration: none;
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
  }
`
const Meta = styled.div`
  color: ${(props) => props.theme.colors.fonts.text};
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  width: fit-content;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: auto;
    margin: 10px 0;
    line-height: 20px;
  }
`
const Category = styled.span`
  a {
    background: ${(props) => props.theme.colors.fonts.anchor};
    border: 2px solid ${(props) => props.theme.colors.fonts.anchor};
    color: initial;
    border-radius: 40px;
    color: white;
    font-family: "Inter";
    font-size: 13px;
    margin-right: 5px;
    padding: 5px 15px;
    text-decoration: none;
    &:hover {
      background: initial;
      color: ${(props) => props.theme.colors.fonts.anchor};
    }
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
  console.log(data)
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
          <PostContainer>
            <Link to={`../`}>
              <BackArrowContainer>
                <BackArrow />
              </BackArrowContainer>
            </Link>

            <PostHeaderContainer>
              <PostHeader>
                <FeaturedImage>
                  <Img fluid={featuredImage} />
                </FeaturedImage>
                <PostHeaderTitle>
                  <h1>{post.frontmatter.title}</h1>
                  <Subtitle>
                    <h2>{post.frontmatter.subtitle}</h2>
                  </Subtitle>
                  <Description>{post.frontmatter.description}</Description>
                  <PostInfo>
                    <Meta>
                      <time>
                        Escrito el {formatDate(post.frontmatter.date)}
                      </time>{" "}
                      •{" "}
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
                            <Link
                              to={`/categoria/${slugify(cat).toLowerCase()}`}
                            >
                              {cat}
                            </Link>
                          </Category>
                        ))
                      ) : (
                        <span>Sin categoría</span>
                      )}
                    </Categories>
                  </PostInfo>
                </PostHeaderTitle>
              </PostHeader>
            </PostHeaderContainer>
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
          publicURL
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
