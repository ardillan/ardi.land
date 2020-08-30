import React from "react"
import styled from "styled-components"
import { LightTheme, DarkTheme, GameBoyTheme } from "./styled/Themes"

export default (props) => {
  const Footer = styled.footer`
    background: light;
  `

  console.log(props)
  const setLightTheme = () => {
    props.setTheme(LightTheme)
  }

  const setDarkTheme = () => {
    props.setTheme(DarkTheme)
  }

  const setGameBoyTheme = () => {
    props.setTheme(GameBoyTheme)
  }

  return (
    <Footer>
      <div>
        <button onClick={() => setLightTheme()}>Claro</button>
        <button onClick={() => setDarkTheme()}>Oscuro</button>
        <button onClick={() => setGameBoyTheme()}>Game Boy</button>
        <p>
          {" "}
          Esta web está hecha con <a href="https://gatsbyjs.org/">GatsbyJS</a> y
          algo de café
          <br /> desde la verde y gris{" "}
          <a href="https://es.wikipedia.org/wiki/Torrelavega">Torrelavega</a>
        </p>
      </div>
    </Footer>
  )
}
