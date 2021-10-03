import React from "react"
import { ThemeProvider } from "styled-components"

import { MainTheme } from "./styled/Themes"

import Normalize from "../components/styled/Normalize"
import Main from "../components/styled/Main"
import Fonts from "../components/styled/Fonts"
import Prism from "../components/styled/Prism"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <Normalize />
      <Fonts />
      <Prism />
      <Main />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
