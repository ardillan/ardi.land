import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { useGetAllPosts } from "../hooks/useGetAllPosts"
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
  }
  p {
    font-family: "Inter";
  }
`
const Listenin = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Playing = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Home = ({ data }) => {
  const posts = useGetAllPosts()
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
        <div>
          <h2>Bestiario</h2>
          <p>
            Mis bestiario personal, una recopilación de post-rápidos que quiero
            utilizar a modo de diario. Aquí publico contenido un tanto más
            personal.
          </p>
          <ul>
            {posts.slice(0, 5).map((post) => {
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
          <Listenin>
            <small>Últimamente escucho bastante</small>
            <h3>Vortex de Toundra</h3>
            <p>
              Mucha melodía en esta banda de post-rock nacional. Les pude ver
              hace años (¡2011!) en Torrelavega. Aunque nunca les he prestado
              especial atención, ahora les estoy escuchando con mucha más
              intensidad.
            </p>
          </Listenin>
          <Playing>
            <small>Ahora mismo estoy jugando a</small>
            <h3>Paper Mario de Nintendo</h3>
            <p>
              Mucha melodía en esta banda de post-rock nacional. Les pude ver
              hace años (¡2011!) en Torrelavega. Aunque nunca les he prestado
              especial atención, ahora les estoy escuchando con mucha más
              intensidad.
            </p>
          </Playing>
        </AboutContainer>
      </About>
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
