import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { LightTheme } from "./styled/Themes"

import Normalize from "../components/styled/Normalize"
import Main from "../components/styled/Main"
import Fonts from "../components/styled/Fonts"
import Header from "./Header"
import Footer from "./Footer"

const Container = styled.main`
  width: 900px;
  margin: auto;
`

export default ({ children }) => {
  const currentTheme = !localStorage.getItem("theme")
    ? LightTheme
    : JSON.parse(localStorage.getItem("theme"))

  const [theme, setTheme] = useState(currentTheme)

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Fonts />
      <Main />
      <Header />
      <Container>{children}</Container>
      <Container>
        <Footer setTheme={setTheme} />
      </Container>
    </ThemeProvider>
  )
}
