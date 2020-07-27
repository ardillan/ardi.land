import React from "react"

import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
