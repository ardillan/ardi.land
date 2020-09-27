import React from "react"
import Layout from "../../components/Layout"
import PostsList from "../../components/PostsList"
import SEO from "../../components/SEO"
import styled from "styled-components"

const SectionTitle = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 50px auto;
  max-width: 600px;
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
    border-bottom: 2px dashed ${(props) => props.theme.colors.background.line};
    border-top: 2px dashed ${(props) => props.theme.colors.background.line};
    font-family: "Gluten";
    font-size: 18px;
    margin: 20px 0;
    padding: 10px 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0 20px;
  }
`

export default () => {
  return (
    <Layout>
      <SEO title="Ardillan.com | Blog" />
      <SectionTitle>
        <h1>Blog</h1>
        <h2>En esta página se muestran todas las entradas del blog.</h2>
      </SectionTitle>
      <section>
        <PostsList length="55" type="blog" showPostDate />
      </section>
    </Layout>
  )
}
