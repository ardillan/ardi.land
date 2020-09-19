import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { LightTheme } from "./styled/Themes"

import Normalize from "../components/styled/Normalize"
import Main from "../components/styled/Main"
import Fonts from "../components/styled/Fonts"
import Prism from "../components/styled/Prism"
import Header from "./Header"
import Footer from "./Footer"

const Container = styled.div`
  width: 900px;
  margin: auto;
`

export default ({ children }) => {
  const currentTheme =
    typeof window !== "undefined"
      ? !localStorage.getItem("theme")
        ? LightTheme
        : JSON.parse(localStorage.getItem("theme"))
      : LightTheme

  const [theme, setTheme] = useState(currentTheme)

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Fonts />
      <Prism />
      <Main />
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Container>
        <Footer setTheme={setTheme} theme={theme} />
      </Container>
    </ThemeProvider>
  )
}
