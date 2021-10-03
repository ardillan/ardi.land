import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { useGetAllPosts } from "../hooks/useGetAllPosts"
import { Container } from "../components/styled/Interface"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import RandomText from "../components/RandomText"
import FeaturedBanner from "../components/FeaturedBanner"

const Introduction = styled.section`
  margin: 150px 0 0;
  text-align: center;
  h1 {
    font-size: 55px;
    font-weight: 600;
    margin: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    margin: 25px 0;

    h1 {
      font-size: 1.6rem;
    }
  }
`

const Articles = styled.section`
  margin: 150px 0;
  h2 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
    line-height: 0.1em;
    margin: 10px 0 20px;
    text-align: center;
    font-size: 21px;
    font-weight: 200;
  }

  h2 span {
    background: #fff;
    padding: 0 30px;
  }

  ul {
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    list-style-type: none;
    padding: 0;
    margin: 70px 0;
  }

  a {
    display: grid;
    grid-template-columns: 130px 1fr;
    grid-column-gap: 20px;
    align-items: center;
    color: inherit;
    text-decoration: none;
    img {
      border-radius: ${(props) => props.theme.borderRadius};
    }
    h3 {
      font-size: 30px;
      font-weight: 600;
      padding: 0;
      margin: 0;
    }
    p {
      font-size: 18px;
      height: 50px;
      line-height: 23px;
      margin: 0;
      overflow: hidden;
      padding: 0;
      text-overflow: ellipsis;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    margin: 75px 0;

    a {
      grid-row-gap: 25px;
      grid-template-columns: 1fr;
      text-align: center;
      img {
        border-radius: 0;
      }
      h3 {
        margin-bottom: 15px;
      }
    }
  }
`

const ViewAllButton = styled.div`
  width: 200px;
  margin: auto;
  a {
    background: ${(props) => props.theme.primaryColor};
    border-radius: 50px;
    border: none;
    color: white;
    display: block;
    font-size: 18px;
    margin: auto;
    padding: 10px 50px;
    text-align: center;
    text-transform: uppercase;
  }
`

const Home = ({ data }) => {
  const posts = useGetAllPosts()
  return (
    <Layout>
      <Seo
        title="Ardillan.com | Inicio"
        postDescription="Es un placer verte por mi web, pasa y deja algo de la felicidad que traes."
      />
      <Container>
        <Introduction>
          <h1>
            ¡Hola!{" "}
            <span role="img" aria-label="Icono de un una mano saludando">
              👋
            </span>
            <br /> soy Adrián, un diseñador gráfico reconvertido a{` `}
            <span style={{ color: `#FF8A00` }}>desarrollador web</span>
          </h1>
        </Introduction>
        <RandomText />
        <Articles>
          <h2>
            <span>Mis últimas publicaciones</span>
          </h2>
          <ul>
            {posts.slice(0, 4).map((post) => {
              return (
                <li key={post.node.frontmatter.title}>
                  <Link to={post.node.fields.slug}>
                    <GatsbyImage
                      image={getImage(post.node.frontmatter.featuredImage)}
                      alt={`Imagen destacada de la entrada: ${post.node.title}`}
                      title={`Imagen destacada de la entrada: ${post.node.title}`}
                      objectFit="contain"
                    />
                    <div>
                      <h3>{post.node.frontmatter.title}</h3>
                      <p>{post.node.frontmatter.description}</p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
          <ViewAllButton>
            <Link to={`/blog`}>Ver todas</Link>
          </ViewAllButton>
        </Articles>
        <FeaturedBanner />
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
