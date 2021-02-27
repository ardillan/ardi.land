import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { LightTheme } from "./styled/Themes"

import Normalize from "../components/styled/Normalize"
import Main from "../components/styled/Main"
import Fonts from "../components/styled/Fonts"
import Prism from "../components/styled/Prism"
import Header from "./Header"
import Footer from "./Footer"

const Container = styled.div`
  margin: auto;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: 100%;
    margin: auto;
  }
`

export default ({ props, children }) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Normalize />
      <Fonts />
      <Prism />
      <Main />
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Container>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
