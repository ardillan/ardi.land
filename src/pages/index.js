import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { useGetAllPosts } from "../hooks/useGetAllPosts"
import { useGetLastAlbum } from "../hooks/useGetLastAlbum"
import { useGetLastVideogame } from "../hooks/useGetLastVideogame"
import { useGetAllBestiaryPosts } from "../hooks/useGetAllBestiaryPosts"

import { Arrow } from "../images/general/icons"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import FeaturedBanner from "../components/FeaturedBanner"

const Articles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px;
  margin: 100px 0;

  h2 {
    font-family: "Gluten";
    padding: 0;
    margin: 0;
  }
  ul {
    font-family: "Inter";
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      padding-bottom: 5px;
      a {
        color: ${(props) => props.theme.colors.fonts.text};
        background: none;
        &:hover {
          svg {
            animation: moveArrow 0.5s infinite;
          }
        }
      }
    }

    li:nth-child(1) {
      svg {
        fill: ${(props) => props.theme.colors.rainBow[0]};
      }
    }

    li:nth-child(2) {
      svg {
        fill: ${(props) => props.theme.colors.rainBow[1]};
      }
    }

    li:nth-child(3) {
      svg {
        fill: ${(props) => props.theme.colors.rainBow[2]};
      }
    }

    li:nth-child(4) {
      svg {
        fill: ${(props) => props.theme.colors.rainBow[3]};
      }
    }

    li:nth-child(5) {
      svg {
        fill: ${(props) => props.theme.colors.rainBow[4]};
      }
    }

    svg {
      margin-right: 10px;
      filter: saturate(2);
      fill: orange;
    }
  }

  p {
    font-family: "Inter";
    padding: 0;
  }

  @keyframes moveArrow {
    0% {
      transform: scale(1.4);
      filter: saturation(4);
    }
    100% {
      transform: scale(1);
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding: 0 20px;
    grid-template-columns: 1fr;
    grid-gap: 35px;
    margin: 20px 0;

    &:nth-child(3) {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`
const RandomArticles = styled.div`
  display: flex;
  align-items: flex-end;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;

    li {
      transition: all 0.2s;
      z-index: 15;
      &:hover {
        transform: scale(1.1);
        div {
          border-radius: 3px;
        }
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      width: 100%;
    }
  }
`
const About = styled.section`
  h2 {
    text-align: center;
    font-family: "Gluten";
  }
`
const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  small {
    font-size: 14px;
    font-weight: 400;
    font-family: "Inter";
  }
  h3 {
    font-family: "Gluten";
    font-size: 25px;
    padding: 0;
    margin: 0;
  }
  p {
    font-family: "Inter";
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`
const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  min-height: 60px;
`
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 20px 0;
  align-items: center;
`
const AboutTable = styled.section`
  margin: 50px 0;
  table {
    width: 100%;
  }
  th,
  td {
    border: 2px solid ${(props) => props.theme.colors.table.border};
    width: 50%;
    text-align: center;
    padding: 10px;
  }
  a {
    font-family: "Gluten";
    background: none;
    font-size: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding: 0 20px;
  }
`
const Home = ({ data }) => {
  const posts = useGetAllPosts()
  const bestiary = useGetAllBestiaryPosts()
  const music = useGetLastAlbum()
  const videogame = useGetLastVideogame()
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <section>
        <FeaturedBanner />
      </section>
      <Articles>
        <div>
          <h2>Artículos</h2>
          <p>
            Aquí puedes ver un listado de mis últimos artículos. Puedes leer el
            resto entrando en el <Link to={`/blog`}>blog</Link> o bien, probar
            suerte en los que aparecen a la derecha de una forma aleatoria.
          </p>
          <ul>
            {posts.slice(0, 5).map((post) => {
              return (
                <li key={`article-${post.node.frontmatter.title}`}>
                  <Link to={post.node.fields.slug}>
                    <Arrow />
                    {post.node.frontmatter.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <RandomArticles>
          <ul>
            {posts.slice(0, 6).map((post) => {
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
                      style={{ width: 130, height: 130 }}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </RandomArticles>
      </Articles>
      <Articles>
        <RandomArticles>
          <ul>
            {bestiary.slice(0, 6).map((beast) => {
              return (
                <li key={beast.node.frontmatter.title}>
                  <Link to={beast.node.fields.slug}>
                    <Img
                      fixed={
                        beast.node.frontmatter.featuredImage.childImageSharp
                          .fixed
                      }
                      fadeIn={true}
                      alt={beast.node.frontmatter.title}
                      title={beast.node.frontmatter.title}
                      style={{ width: 130, height: 130 }}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </RandomArticles>
        <div>
          <h2>Bestiario</h2>
          <p>
            Mis bestiario personal, una recopilación de post-rápidos que quiero
            utilizar a modo de diario. Aquí publico contenido un tanto más
            personal.
          </p>
          <ul>
            {bestiary.slice(0, 5).map((post) => {
              return (
                <li key={post.node.frontmatter.title}>
                  <Link to={post.node.fields.slug}>
                    <Arrow />
                    {post.node.frontmatter.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Articles>
      <About>
        <h2>Sobre mí</h2>
        <AboutContainer>
          <AboutInfo>
            <small>Últimamente escucho bastante</small>
            <Cover>
              <Img
                fluid={music.frontmatter.featuredImage.childImageSharp.fluid}
                fadeIn={true}
                alt={music.frontmatter.title}
                title={music.frontmatter.title}
                style={{
                  width: 150,
                  height: 150,
                }}
              />
            </Cover>
            <Title>
              <h3>
                <span style={{ fontWeight: 600 }}>
                  {music.frontmatter.album}
                </span>{" "}
                de{" "}
                <span style={{ fontWeight: 600 }}>
                  {music.frontmatter.band}
                </span>
              </h3>
            </Title>
            <p>{music.frontmatter.description}</p>
          </AboutInfo>
          <AboutInfo>
            <small>Ahora mismo estoy jugando a</small>
            <Cover>
              <Img
                fluid={
                  videogame.frontmatter.featuredImage.childImageSharp.fluid
                }
                fadeIn={true}
                alt={videogame.frontmatter.title}
                title={videogame.frontmatter.title}
                style={{
                  width: 150,
                  height: 150,
                }}
              />
            </Cover>
            <Title>
              <h3>
                <span style={{ fontWeight: 600 }}>
                  {videogame.frontmatter.title}
                </span>{" "}
                de{" "}
                <span style={{ fontWeight: 600 }}>
                  {videogame.frontmatter.platform}
                </span>
              </h3>{" "}
            </Title>
            <p>{videogame.frontmatter.description}</p>
          </AboutInfo>
        </AboutContainer>
      </About>
      <AboutTable>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <Link to={`/sobre-mi`}>Sobre mí</Link>
              </td>
              <td>
                <Link to={`/espacios`}>Mis espacios</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to={`/como-trabajo`}>¿Cómo trabajo?</Link>
              </td>
              <td>
                <Link to={`/proyectos`}>Mis proyectos</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </AboutTable>
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
