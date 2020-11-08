import React from "react"
import { Link, graphql } from "gatsby"
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
    list-style-type: none;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
      a {
        display: grid;
        text-decoration: none;
        grid-template-columns: 150px 1fr;
        grid-column-gap: 25px;
        grid-row-gap: 40px;

        h3 {
          font-family: "Inter";
          font-size: 19px;
          font-weight: 400;
          margin: 0;
          padding: 20px 0 0 0;
          line-height: 20px;
        }

        img {
          width: 150px;
          height: 150px;
        }

        p {
          font-size: 14px;
          line-height: 20px;
          padding-bottom: 15px;
          margin-top: 5px;
          font-family: "Inter";
          font-weight: 200;
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
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
          grid-template-columns: 1fr;
          grid-row-gap: 0;
          margin-bottom: 20px;
          border: 2px solid #f5f5f9;
          padding: 20px 30px;

          img {
            width: 150px;
            height: 150px;
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
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
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
                    <div>
                      <Img
                        fixed={
                          post.node.frontmatter.featuredImage.childImageSharp
                            .fixed
                        }
                        fadeIn={true}
                        alt={post.node.frontmatter.title}
                        title={post.node.frontmatter.title}
                      />
                    </div>
                    <div>
                      <h3>{post.node.frontmatter.title}</h3>
                      <p>{post.node.frontmatter.description}</p>
                    </div>
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
