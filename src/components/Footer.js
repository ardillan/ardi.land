import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { LightTheme, DarkTheme, GameBoyTheme } from "./styled/Themes"
import { formatDateTime } from "../utils/helpers"

const Footer = styled.footer`
  margin-top: 100px;
  margin-bottom: 100px;
  padding-top: 50px;
  display: grid;
  grid-template-columns: 70% 1fr;

  small,
  button,
  p {
    font-family: "Inter";
    padding: 0;
    margin: 0;
    line-height: 25px;
    padding-bottom: 15px;
  }
  a {
    color: ${(props) => props.theme.colors.fonts.text};
    text-decoration: underline;
    background: none;
  }

  small {
    color: ${(props) => props.theme.colors.fonts.text};
    opacity: 0.7;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    margin: 50px 0;
    padding: 0 20px;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`
const Info = styled.div``
const Social = styled.p`
  font-size: 16px;

  a:nth-child(1) {
    color: #1da1f2;
    text-decoration: none;
  }

  a:nth-child(2) {
    color: #ff0068;
    text-decoration: none;
  }
`
const ThemeSelector = styled.div`
  text-align: right;
  p {
    margin: 0;
    padding: 0;
  }
  button {
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: ${(props) => props.theme.colors.fonts.text};
    background: none;
    margin: 0;
    padding: 0;
    margin-left: 10px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    text-align: left;
    button {
      margin-left: 0;
      margin-right: 10px;
    }
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

  const [latestCommit, setLatestCommit] = useState(null)
  useEffect(() => {
    fetch("https://api.github.com/repos/ardillan/ardillan.com")
      .then((res) => res.json())
      .then((commit) => {
        setLatestCommit(commit)
      })
  }, [])

  return (
    <Footer>
      <Info>
        <p>
          {" "}
          Esta web está hecha con <a href="https://gatsbyjs.org/">GatsbyJS</a> y
          algo de café
          <br /> desde la verde y gris{" "}
          <a href="https://es.wikipedia.org/wiki/Torrelavega">Torrelavega</a>
        </p>
        <Social>
          Puedes seguirme en{" "}
          <a
            href="https://www.twitter.com/ardillan_"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          ó{" "}
          <a
            href="https://www.githib.com/ardillan"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </Social>
        <small>
          Esta web se actualizó por última vez el{" "}
          {latestCommit === null ? (
            <span>...</span>
          ) : (
            <span>{formatDateTime(latestCommit.updated_at)}</span>
          )}
        </small>
      </Info>
      <ThemeSelector>
        <p>Tema de color</p>
        <button onClick={() => setLightTheme()}>Claro</button>
        <button onClick={() => setDarkTheme()}>Oscuro</button>
        <button onClick={() => setGameBoyTheme()}>Game Boy</button>
      </ThemeSelector>
    </Footer>
  )
}
