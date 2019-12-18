import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import "../styles/main.scss"

export default ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
