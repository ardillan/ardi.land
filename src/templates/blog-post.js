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

const PostContent = styled.div`
  max-width: 600px;
  margin: auto;
  font-family: "${(props) => props.theme.ternaryFont}";
  strong {
    padding: 5px;
    border-radius: 4px;
  }

  p,
  ul,
  li {
    line-height: 180%;
    margin-top: 0;
    font-size: 17px;
  }

  a {
    text-decoration-color: ${(props) => props.theme.primaryColor}75;

    &:hover {
      background: ${(props) => props.theme.primaryColor}21;
      text-decoration-color: ${(props) => props.theme.primaryColor};
      border-radius: 3px;
    }
  }
`

const PostHeader = styled.header`
  max-width: 600px;
  margin: auto;
  h1 {
    font-size: 50px;
    font-family: "${(props) => props.theme.secondaryFont}";
    font-weight: 600;
    line-height: 60px;
    margin: 0;
  }
  h2 {
    font-family: "${(props) => props.theme.primaryFont}";
    font-size: 1.2rem;
    line-height: 35px;
    margin-top: 0.25em;
    opacity: 0.5;
  }

  .gatsby-image-wrapper {
    width: auto;
    margin: auto;
    margin-bottom: 40px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    margin-top: 10px;
    padding-top: 20px;
    h1 {
      font-size: 35px;
      line-height: 40px;
    }
    .gatsby-image-wrapper {
      width: auto;
    }
  }
`

const Categories = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: "${(props) => props.theme.primaryFont}";
  a {
    background: ${(props) => props.theme.primaryColor}21;
    border-radius: 5px;
    color: ${(props) => props.theme.primaryColor};
    font-size: 11px;
    font-weight: 600;
    margin-right: 20px;
    padding: 10px;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      background: ${(props) => props.theme.primaryColor};
      color: white;
      text-decoration: none;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    display: none;
  }
`

const Meta = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 25px;
  margin-top: 25px;
  font-size: 15px;
  align-items: baseline;

  .gatsby-image-wrapper {
    width: 50px;
    height: 50px;
    margin: 0 10px 0 0;
  }

  p {
    margin: 0;
    text-align: right;
  }
  a {
    text-decoration: underline;
  }

  time {
    text-align: right;
  }
`

const Author = styled.div`
  display: flex;
  align-items: center;
  font-family: "${(props) => props.theme.primaryFont}";

  p {
    text-align: left;
    font-size: 15px;
  }

  a {
    text-decoration: underline !important;
  }
  figure,
  source,
  picture,
  div,
  img {
    border-radius: 50%;
  }
`

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  a {
    text-decoration: none;
  }
  p,
  span,
  time {
    color: grey;
    font-size: 14px;
    text-align: left;
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
  font-family: "${(props) => props.theme.primaryFont}";
  font-size: 18px;
  grid-template-columns: 27px 1fr;
  margin: 50px auto;
  max-width: max-content;
  padding: 5px 15px 4px 20px;
  text-decoration: none !important;
  transition: ${(props) => props.theme.transition};

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
    background: #151f2e !important;
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
        title={`Ardi | ${post.frontmatter.title}`}
        postDescription={post.frontmatter.description}
      />
      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta
          property="og:url"
          content={`https://www.ardi.land/${post.fields.slug}`}
        />
        <meta
          property="og:image"
          content={`https://www.ardi.land${featuredImage}`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.ardi.land/${post.fields.slug}`}
        />
        <meta property="twitter:title" content={post.frontmatter.title} />
        <meta
          property="twitter:description"
          content={post.frontmatter.description}
        />
        <meta
          property="twitter:image"
          content={`https://www.ardi.land${featuredImage}`}
        />
      </Helmet>
      <PageContainer>
        <section>
          <Article>
            <PostHeader>
              <h1>{post.frontmatter.title}</h1>
              <h2>{post.frontmatter.subtitle}</h2>
              <Meta>
                <Author>
                  <GatsbyImage
                    image={getImage(data.fileName)}
                    alt={"Autoretrato"}
                    objectFit="cover"
                  />
                  <AuthorInfo>
                    <p>
                      Escrito por <Link to="/acerca">Ardi</Link>
                    </p>
                    <div>
                      <time>
                        {formatDate(post.frontmatter.date, "numeric")}
                      </time>
                      <span> ∙ </span>
                      <p>
                        {post.timeToRead} minuto
                        {post.timeToRead > 1 ? "s " : " "}
                        en leerlo
                      </p>
                    </div>
                  </AuthorInfo>
                </Author>
                <p></p>
              </Meta>
              <Categories>
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
              </Categories>
            </PostHeader>
            <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />
            <EditGithub
              target="_blank"
              rel="noopener nofollow"
              href={`https://github.com/ardillan/ardi.land/blob/master/src/content/posts/${gitHubFile}`}
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
              width: 900
              layout: CONSTRAINED
              placeholder: BLURRED
              quality: 100
            )
          }
        }
      }
    }
    fileName: file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 55
          height: 55
          layout: FIXED
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
          quality: 100
        )
      }
    }
  }
`

export default BlogPost
