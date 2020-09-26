import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import styled from "styled-components"

const SectionTitle = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 70px auto;
  max-width: 600px;
  grid-gap: 40px;
  h1 {
    font-family: "Inter";
    font-size: 50px;
    font-weight: 800;
    margin: 0;
    padding: 0;
    width: auto;
    background: -webkit-linear-gradient(
      ${(props) => props.theme.colors.gradients.top},
      ${(props) => props.theme.colors.gradients.bottom}
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  h2 {
    border-bottom: 2px dashed #ffde32;
    border-top: 2px dashed #ffde32;
    font-family: "Gluten";
    font-size: 18px;
    margin: 20px 0;
    padding: 10px 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 50px 20px;
    width: auto;
    margin: 0;
    grid-template-columns: 1fr;

    h1  {
      transform: rotate(-4deg);
      text-align: center;
      font-size: 40px;
      margin: 30px 0;
      font-size: 75px;
      margin: -40px 0 30px 0;
    }

    h2 {
      margin: 0;
    }
  }
`
const Container = styled.div`
  width: 600px;
  margin: 0 auto 20px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0 20px;
    width: auto;
  }
`
const Description = styled.div`
  max-width: 600px;
`
const ContentContainer = styled.div`
  background: tomate;

  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    li {
      a {
        background: ${(props) => props.theme.colors.fonts.anchorBackground};
        border-radius: 50px;
        color: ${(props) => props.theme.colors.fonts.anchor};
        font-family: "Inter";
        font-size: 17px;
        margin-right: 10px;
        margin-top: 10px;
        padding: 0 10px;
        line-height: 50px;
        text-transform: capitalize;
      }
    }
  }
`
export default ({ data }) => {
  const { blogPosts, pages } = data
  return (
    <Layout>
      <SEO title="Ardillan.com | Sobre mí" />
      <SectionTitle>
        <Description>
          <h1>Mapa del sitio</h1>
          <h2>Aquí puedes ver un índice de todo el contenido de la web.</h2>
        </Description>
      </SectionTitle>
      <Container>
        <p>Esta web tiene dos tipos de contenido:</p>
        <ul>
          <li>
            <strong>Páginas</strong> creadas <i>automágicamente</i> gracias a un
            al proceso interno que sigue GatsbyJS.
          </li>
          <li>
            <strong>Entradas</strong> creadas{" "}
            <a href="https://github.com/ardillan/ardillan.com/blob/e28025375b778238d825dd3ffbf502d1f624c30d/gatsby-node.js#L36">
              programáticamente
            </a>{" "}
            mediante una serie de plugins que permiten transformar el contenido{" "}
            <i>Markdown</i> a formato <i>html</i>.
          </li>
        </ul>
        <ContentContainer>
          <h3>Hay {pages.totalCount} páginas publicadas</h3>
          <p>
            Ahora mismo hay un total de <span>{pages.totalCount}</span>{" "}
            publicadas. Estas son:
          </p>
          <ul>
            {pages.nodes.map((page) => (
              <li key={page.path}>
                <Link to={`${page.path}`}>{page.path.replace("-", " ")}</Link>
              </li>
            ))}
          </ul>
        </ContentContainer>
        <hr />
        <ContentContainer>
          <h3>Hay {blogPosts.totalCount} entradas publicadas</h3>
          <p>
            Ahora mismo hay un total de <span>{blogPosts.totalCount}</span>{" "}
            entradas publicadas. Estas son:
          </p>
          <ul>
            {blogPosts.edges.map((post) => (
              <li key={post.node.frontmatter.title}>
                <Link to={`/${post.node.fields.slug}`}>
                  {post.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </ContentContainer>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    pages: allSitePage(filter: { component: { regex: "/pages/" } }) {
      totalCount
      nodes {
        path
      }
    }
    blogPosts: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
