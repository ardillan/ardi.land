import React, { useState, useEffect } from "react"
import Normalize from "../components/styled/Normalize"
import Header from "./Header"
import Footer from "./Footer"
import { ThemeProvider } from "styled-components"
import { LightTheme } from "./styled/Themes"

export default ({ children }) => {
  const [theme, setTheme] = useState(LightTheme)

  console.log("Layout.js", theme)

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Header />
      <main>{children}</main>
      <Footer setTheme={setTheme} />
    </ThemeProvider>
  )
}
