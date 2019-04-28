import React from "react"
import Header from "./Header"

export default ({ children }) => {
  return (
    <div class="container">
      <Header />
      <section>{children}</section>
    </div>
  )
}
