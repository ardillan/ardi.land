import React from "react"

import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => {
  return (
    <div className="container">
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  )
}
