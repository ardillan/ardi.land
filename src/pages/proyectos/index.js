import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { useGetAllProjects } from "../../hooks/useGetAllProjects"

import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import { SectionTitle, Container } from "../../components/styled/Interface"

const ProjectsContainer = styled.div`
  display: grid;
  grid-column-gap: 100px;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  grid-row-gap: 100px;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`

const Projects = () => {
  const projects = useGetAllProjects()

  return (
    <Layout>
      <Seo
        title="Ardillan.com | Proyectos"
        postDescription="Esta página muestra los proyectos en los que he tenido el placer de trabajar, tanto desarrollo como diseño gráfico. "
      />
      <Container>
        <SectionTitle>
          <div>
            <h1>Proyectos</h1>
            <h2>
              Esta página muestra proyectos en los que he podido trabajar. Desde
              diseño gráfico hasta desarrollo web.
            </h2>
          </div>
        </SectionTitle>

        <ProjectsContainer>
          {projects.map((project) => (
            <Link key={project.node.id} to={`/${project.node.fields.slug}`}>
              <article>
                <header>
                  <GatsbyImage
                    image={
                      project.node.frontmatter.featuredImage.childImageSharp
                        .gatsbyImageData
                    }
                    alt={project.node.frontmatter.title}
                  />
                  <h2>{project.node.frontmatter.title}</h2>
                  <p>{project.node.frontmatter.description}</p>
                </header>
              </article>
            </Link>
          ))}
        </ProjectsContainer>
      </Container>
    </Layout>
  )
}

export default Projects
