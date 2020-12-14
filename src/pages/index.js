import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"

import Img from "gatsby-image"
import styled from "styled-components"

import { useGetAllPosts } from "../hooks/useGetAllPosts"
// import { useGetLastAlbum } from "../hooks/useGetLastAlbum"
// import { useGetLastVideogame } from "../hooks/useGetLastVideogame"
// import { useGetAllBestiaryPosts } from "../hooks/useGetAllBestiaryPosts"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import FeaturedBanner from "../components/FeaturedBanner"

const Articles = styled.section`
  h2 {
    font-size: 18px;
    font-weight: 200;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    list-style-type: none;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
      a {
        display: grid;
        padding-right: 30px;
        text-decoration: none;
        grid-template-areas:
          "image title"
          "image description";
        grid-column-gap: 25px;

        div {
          grid-area: image;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        h3 {
          grid-area: title;
          font-family: "Inter";
          font-size: 19px;
          font-weight: 400;
          margin: 0;
          padding: 20px 0 0 0;
          line-height: 20px;
        }

        p {
          grid-area: description;
          font-size: 14px;
          line-height: 20px;
          padding-bottom: 15px;
          margin-top: 5px;
          font-family: "Inter";
          font-weight: 200;
        }
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: auto;
    padding: 0 30px;
    margin-top: 40px;
    ul {
      grid-template-columns: 1fr;
      li {
        a {
          display: grid;
          text-decoration: none;
          grid-template-areas:
            "image title"
            "description description";
          grid-row-gap: 0;
          margin-bottom: 20px;
          border: 1px dashed ${(props) => props.theme.colors.table.border};
          padding: 20px 30px;
          grid-template-columns: 40px 1fr;
          grid-column-gap: 15px;
          align-items: center;

          .gatsby-image-wrapper,
          picture,
          img {
            width: 40px !important;
            height: 40px !important;
            border-radius: 50%;
          }

          h3 {
            padding: 0;
          }

          p {
            padding: 0;
            margin-top: 20px;
          }
        }
      }
    }
  }
`

const Container = styled.div`
  width: 900px;
  margin: auto;
  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: auto;
  }
`

const Home = ({ data }) => {
  const posts = useGetAllPosts()
  // const bestiary = useGetAllBestiaryPosts()
  // const music = useGetLastAlbum()
  // const videogame = useGetLastVideogame()
  return (
    <Layout>
      <SEO />
      <Helmet>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Container>
        <section>
          <FeaturedBanner />
        </section>
        <Articles>
          <h2>Últimas entradas escritas</h2>
          <ul>
            {posts.slice(0, 4).map((post) => {
              return (
                <li key={post.node.frontmatter.title}>
                  <Link to={post.node.fields.slug}>
                    <Img
                      fixed={
                        post.node.frontmatter.featuredImage.childImageSharp
                          .fixed
                      }
                      fadeIn={true}
                      alt={post.node.frontmatter.title}
                      title={post.node.frontmatter.title}
                    />
                    <h3>{post.node.frontmatter.title}</h3>
                    <p>{post.node.frontmatter.description}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Articles>
      </Container>
    </Layout>
  )
}

export default Home

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        social {
          twitter
          instagram
        }
      }
    }
  }
`
