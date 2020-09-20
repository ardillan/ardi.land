import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { getAge } from "../../utils/helpers"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import styled from "styled-components"

const SectionTitle = styled.section`
  display: grid;
  width: 900px;
  margin: auto;
  grid-gap: 100px;
  grid-template-columns: 200px 400px;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
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
`
const SectionDescription = styled.section`
  width: 600px;
  margin: auto;
`
const Portrait = styled.div``
const Description = styled.div`
  max-width: 600px;
`
export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Sobre mí" />
      <SectionTitle>
        <Portrait>
          <Img
            fluid={data.fileName.childImageSharp.fluid}
            fadeIn={true}
            alt="Autoretrato hecho a modo ilustración"
            title="Autoretrato"
            style={{
              width: 240,
              height: 240,
              borderRadius: "50%",
              marginTop: 10,
              backgroundColor: "lime",
            }}
          />
        </Portrait>
        <Description>
          <h1>¡Hola!</h1>
          <h2>
            <strong>Me llamo Adrián</strong>, aunque mucha gente me conoce como
            Ardillán. Tengo {getAge()} años y, actualmente, estoy inmerso en el
            mundo del desarrollo web. Me interesa todo aquello que está
            relacionado con la tecnología, los videojuegos y la música.
          </h2>
        </Description>
      </SectionTitle>
      <SectionDescription>
        <p>
          Mi interés está centrado en aprender todo lo posible sobre tecnologías{" "}
          <a href="https://es.wikipedia.org/wiki/Front-end_y_back-end">
            front-end
          </a>
          , enfocándome sobretodo en utilidades que sirvan para construir
          interfaces web. Tanto es así, que esta web ha sido desarrollada con{" "}
          <a href="https://reactjs.org">React JS</a>.
        </p>
        <p>
          Antes de centrar mi carrera en el desarrollo de software, he estado
          trabajado como diseñador gráfico, principalmente para soportes
          físicos, hasta derivar al soporte digital. He tenido el placer de
          realizar trabajos de cartelería, imagen corporativa o portadas para
          libros y discos.
        </p>

        <p>
          Actualmente estoy centrado en mejorar mi carrera como desarrollador de
          software. Puedes echar un vistazo a mis{" "}
          <Link to="/proyectos">proyectos</Link> actuales, ver{" "}
          <Link to="/como-trabajo">cómo trabajo</Link>, ver los{" "}
          <Link to="/espacios">diferentes espacios</Link> en los que he tenido
          el placer de decicar horas en frente de mi pantalla, o bien contactar
          conmigo vía <a href="https://www.github.com/ardillan">Twitter</a>.
        </p>
      </SectionDescription>
    </Layout>
  )
}

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
    fileName: file(relativePath: { eq: "portrait.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
