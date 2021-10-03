import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { Container, PageContainer } from "../components/styled/Interface"

const ProjectContent = styled.div`
  margin-top: 50px;
`
const PostHeader = styled.header`
  border-bottom: 1px solid ${(props) => props.theme.secondaryColor}2e;
  border-top: 1px solid ${(props) => props.theme.secondaryColor}2e;
  margin-top: 100px;
  text-align: center;
  h1 {
    font-size: 3rem;
    margin: 0;
    margin-top: 25px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 200;
    margin: 0;
  }

  p {
    margin: 10px auto 25px;
    max-width: 600px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 18px;
    }
  }
`

const ProjectPost = ({ data }) => {
  const post = data.markdownRemark

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
            <PostHeader>
              <h1>{post.frontmatter.title}</h1>
              <h2>{post.frontmatter.subtitle}</h2>
              <p>{post.frontmatter.description}</p>
            </PostHeader>
          </Container>
          <PageContainer>
            <ProjectContent dangerouslySetInnerHTML={{ __html: post.html }} />
          </PageContainer>
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
              width: 900
              height: 600
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          }
        }
      }
    }
  }
`

export default ProjectPost
