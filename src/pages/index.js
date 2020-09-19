import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import { useGetAllPosts } from "../hooks/useGetAllPosts"
import { Arrow } from "../images/general/icons"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import FeaturedBanner from "../components/FeaturedBanner"

const LastestArticles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
      <LastestArticles>
        <div>
          <h2>Artículos</h2>
          <p>
            Aquí puedes ver un listado de mis últimos artículos escritos. Puedes
            leer el resto entrando en el <Link to={`/blog`}>blog</Link> o bien,
            probar suerte en los que aparecen a la derecha.
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
      </LastestArticles>
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
