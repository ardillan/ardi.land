import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { useGetAllProjects } from "../../hooks/useGetAllProjects"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { SectionTitle } from "../../components/styled/Interface"

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  margin: 40px 30px;
  grid-gap: 20px;
  justify-content: center;
  a {
    text-decoration: none;

    .gatsby-image-wrapper {
      border-radius: 10px;
      transition: all 0.3s ease;
    }

    &:hover {
      background: initial;

      .gatsby-image-wrapper {
        transform: translateY(-10px);
      }
    }
  }

  p {
    font-weight: 200;
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    a {
      align-items: center;
      text-align: center;
      width: min-content;
      margin: auto;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;
    a {
      align-items: center;
      text-align: center;
      width: min-content;
      margin: auto;
    }
  }
`

export default () => {
  const projects = useGetAllProjects()

  return (
    <Layout>
      <SEO
        title="Ardillan.com | Proyectos"
        postDescription="Esta página muestra los proyectos en los que he tenido el placer de trabajar, tanto desarrollo como diseño gráfico. "
      />
      <SectionTitle>
        <div>
          <h1>Proyectos</h1>
          <h2>
            Esta página muestra los proyectos en los que estoy trabajando
            actualmente.
          </h2>
        </div>
      </SectionTitle>

      <Projects>
        {projects.map((project) => (
          <Link key={project.node.id} to={`/${project.node.fields.slug}`}>
            <article>
              <header>
                <Img
                  fixed={
                    project.node.frontmatter.featuredImage.childImageSharp.fixed
                  }
                />
                <h2>{project.node.frontmatter.title}</h2>
                <p>{project.node.frontmatter.description}</p>
              </header>
            </article>
          </Link>
        ))}
      </Projects>
    </Layout>
  )
}
