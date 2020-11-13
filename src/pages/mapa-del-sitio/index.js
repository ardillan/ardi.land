import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import styled from "styled-components"
import { SectionTitle, PageContainer } from "../../components/styled/Interface"

const ContentContainer = styled.div`
  ol {
    padding: 0;
    list-style-type: decimal;
    li {
      a {
        font-family: "Inter";
        font-size: 17px;
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
        <div>
          <h1>Mapa del sitio</h1>
          <h2>Aquí puedes ver un índice de todo el contenido de la web.</h2>
        </div>
      </SectionTitle>
      <PageContainer>
        <div>
          <p>Esta web tiene dos tipos de contenido:</p>
          <ol>
            <li>
              <strong>Páginas</strong> creadas <i>automágicamente</i> gracias a
              un al proceso interno que sigue GatsbyJS.
            </li>
            <li>
              <strong>Entradas</strong> creadas{" "}
              <a href="https://github.com/ardillan/ardillan.com/blob/e28025375b778238d825dd3ffbf502d1f624c30d/gatsby-node.js#L36">
                programáticamente
              </a>{" "}
              mediante una serie de plugins que permiten transformar el
              contenido <i>Markdown</i> a formato <i>html</i>.
            </li>
          </ol>
          <ContentContainer>
            <h3>Hay {pages.totalCount} páginas publicadas</h3>
            <p>
              Ahora mismo hay un total de <span>{pages.totalCount}</span>{" "}
              publicadas. Estas son:
            </p>
            <ol>
              {pages.nodes.map((page) => (
                <li key={page.path}>
                  <Link to={`${page.path}`}>{page.path.replace("-", " ")}</Link>
                </li>
              ))}
            </ol>
          </ContentContainer>
          <hr />
          <ContentContainer>
            <h3>Hay {blogPosts.totalCount} entradas publicadas</h3>
            <p>
              Ahora mismo hay un total de <span>{blogPosts.totalCount}</span>{" "}
              entradas publicadas. Estas son:
            </p>
            <ol>
              {blogPosts.edges.map((post) => (
                <li key={post.node.frontmatter.title}>
                  <Link to={`/${post.node.fields.slug}`}>
                    {post.node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ol>
          </ContentContainer>
        </div>
      </PageContainer>
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
