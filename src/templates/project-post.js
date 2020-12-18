import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"

const ProjectsContainer = styled.div`
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
const ProjectContent = styled.div`
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
    margin: auto;
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
const ProjectHeaderContainer = styled.div`
  width: 900px;
  margin: auto;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: auto;
  }
`
const PostHeader = styled.header`
  padding: 30px 0;

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
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
    width: 100%;

    h1 {
      font-size: 25px;
    }
  }
`
const ProjectHeaderTitle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 25px;
  margin: auto;
  text-align: center;
  width: 70%;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 30px;
    h1 {
      font-size: 30px;
    }
  }
`
const FeaturedImage = styled.div`
  .gatsby-image-wrapper {
    border-radius: 5px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    .gatsby-image-wrapper {
      border-radius: 0px;
    }
  }
`
const Description = styled.div`
  color: ${(props) => props.theme.colors.fonts.text};
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
          <ProjectsContainer>
            <ProjectHeaderContainer>
              <PostHeader>
                <FeaturedImage>
                  <Img fluid={featuredImage} />
                </FeaturedImage>
                <ProjectHeaderTitle>
                  <h1>{post.frontmatter.title}</h1>
                  <Subtitle>
                    <h2>{post.frontmatter.subtitle}</h2>
                  </Subtitle>
                  <Description>{post.frontmatter.description}</Description>
                </ProjectHeaderTitle>
              </PostHeader>
            </ProjectHeaderContainer>
          </ProjectsContainer>

          <ProjectContent dangerouslySetInnerHTML={{ __html: post.html }} />
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
            fluid(maxWidth: 900, maxHeight: 500, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
