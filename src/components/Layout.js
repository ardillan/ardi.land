import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { LightTheme } from "./styled/Themes"

import Normalize from "../components/styled/Normalize"
import Main from "../components/styled/Main"
import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => {
  const currentTheme = !localStorage.getItem("theme")
    ? LightTheme
    : JSON.parse(localStorage.getItem("theme"))

  const [theme, setTheme] = useState(currentTheme)

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Main />
      <Header />
      <main>{children}</main>
      <Footer setTheme={setTheme} />
    </ThemeProvider>
  )
}
