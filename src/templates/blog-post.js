import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import { PageContainer } from "../components/styled/Interface"
import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"

import { formatDate, slugify } from "../utils/helpers"

import githubIcon from "../images/general/github-icon.svg"

const PostContent = styled.div``

const PostHeader = styled.header`
  margin-top: 80px;
  h1 {
    font-size: 65px;
    font-weight: 600;
    line-height: 60px;
    margin: 0;
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    opacity: 0.5;
    margin: 20px 0 10px;
  }

  .gatsby-image-wrapper {
    width: 640px;
    margin: auto;
    margin-bottom: 40px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    h1 {
      font-size: 35px;
      line-height: 40px;
    }
    .gatsby-image-wrapper {
      width: auto;
    }
  }
`
const Meta = styled.div`
  display: flex;
  margin: auto;
  width: 640px;
  justify-content: space-between;
  margin-bottom: 25px;
  font-size: 18px;

  a {
    color: ${(props) => props.theme.primaryColor};
    text-transform: uppercase;
    text-decoration: none;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
`

const Article = styled.article`
  hr {
    border: none;
    border-bottom: 1px dashed #e3e3e3;
  }
`

const EditGithub = styled.a`
  align-items: center;
  background: white;
  border-radius: 50px;
  border: 2px solid #151f2e;
  display: grid;
  font-size: 18px;
  grid-template-columns: 27px 1fr;
  max-width: max-content;
  margin: 50px auto;
  padding: 5px 15px 4px 20px;
  text-decoration: none !important;

  &:before {
    content: "";
    background-image: url("${githubIcon}");
    height: 30px;
    width: 30px;
    position: relative;
    left: -15px;
    top: -1px;
    border: 2px solid white;
    border-radius: 50%;
  }

  &:hover {
    background: ${(props) => props.theme.secondaryColor};
    color: white;
  }
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  const genericFeaturedImage = getImage(useGetGenericFeaturedImage())

  const gitHubFile = post.fileAbsolutePath.substring(
    post.fileAbsolutePath.lastIndexOf("posts/") + 6,
    post.fileAbsolutePath.length
  )

  const featuredImage =
    post.frontmatter.featuredImage !== null
      ? getImage(post.frontmatter.featuredImage)
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
          content={`https://www.ardillan.com${featuredImage}`}
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
          content={`https://www.ardillan.com${featuredImage}`}
        />
      </Helmet>
      <PageContainer>
        <section>
          <Article>
            <PostHeader>
              <Meta>
                {post.frontmatter.category && (
                  <>
                    {post.frontmatter.category.map((cat) => (
                      <Link
                        key={cat}
                        to={`/categoria/${slugify(cat).toLowerCase()}`}
                      >
                        {cat}
                      </Link>
                    ))}
                  </>
                )}
                <time>Escrito el {formatDate(post.frontmatter.date)}</time>
              </Meta>
              <h1>{post.frontmatter.title}</h1>
              <h2>{post.frontmatter.subtitle}</h2>
              <p>{post.frontmatter.description}</p>
              <GatsbyImage
                image={featuredImage}
                alt={`Imagen de cabecera de la entrada: ${post.frontmatter.title}`}
                title={`Imagen de cabecera de la entrada: ${post.frontmatter.title}`}
                objectFit={"contain"}
              />
            </PostHeader>
            <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />
            <EditGithub
              target="_blank"
              rel="noopener nofollow"
              href={`https://github.com/ardillan/ardillan.com/blob/master/src/content/posts/${gitHubFile}`}
            >
              Editar entrada en Github
            </EditGithub>
          </Article>
        </section>
      </PageContainer>
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
              width: 640
              height: 640
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              quality: 100
            )
          }
        }
      }
    }
  }
`

export default BlogPost
