import React from "react"
import { Link, graphql } from "gatsby"

import styled from "styled-components"

import { useGetAllPosts } from "../hooks/useGetAllPosts"
import { Container } from "../components/styled/Interface"
import Arrow from "../images/general/arrow.png"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import FeaturedBanner from "../components/FeaturedBanner"

const Articles = styled.section`
  h2 {
    font-size: 35px;
    font-weight: 400;
    position: relative;
    padding: 0;
    margin: 0;

    &:before {
      background-image: url(${Arrow});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 25px 22px;
      content: "";
      height: 40px;
      left: -30px;
      position: absolute;
      width: 25px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    list-style-type: none;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
      a {
        text-decoration: none;

        h3 {
          font-size: 25px;
          font-weight: 200;
          margin: 0;
          padding: 0;
          color: ${(props) => props.theme.colors.primary};
        }

        p {
          grid-area: description;
          font-size: 18px;
          font-weight: 200;
          line-height: 29px;
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

const Home = ({ data }) => {
  const posts = useGetAllPosts()
  // const bestiary = useGetAllBestiaryPosts()
  // const music = useGetLastAlbum()
  // const videogame = useGetLastVideogame()
  return (
    <Layout>
      <SEO
        title="Ardillan.com | Inicio"
        postDescription="Es un placer verte por mi web, pasa y deja algo de la felicidad que traes."
      />
      <Container>
        <section>
          <FeaturedBanner />
        </section>
        <Articles>
          <h2>Suelo escribir de todo un poco</h2>

          <ul>
            {posts.slice(0, 4).map((post) => {
              return (
                <li key={post.node.frontmatter.title}>
                  <Link to={post.node.fields.slug}>
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
