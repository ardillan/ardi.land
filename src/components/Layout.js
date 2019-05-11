import React from "react"

import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
