import React from "react"
import styled from "styled-components"
import { LightTheme, DarkTheme, GameBoyTheme } from "./styled/Themes"

const Footer = styled.footer`
  margin-top: 100px;
  padding-top: 50px;
  border-top: 1px solid ${(props) => props.theme.colors.fonts.anchor};

  a {
    color: ${(props) => props.theme.colors.fonts.anchor};
  }
`

export default (props) => {
  const setLightTheme = () => {
    localStorage.setItem("theme", JSON.stringify(LightTheme))
    props.setTheme(LightTheme)
  }

  const setDarkTheme = () => {
    localStorage.setItem("theme", JSON.stringify(DarkTheme))
    props.setTheme(DarkTheme)
  }

  const setGameBoyTheme = () => {
    localStorage.setItem("theme", JSON.stringify(GameBoyTheme))
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
