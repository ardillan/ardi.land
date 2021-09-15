import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { formatDateTime } from "../utils/helpers"

const FooterContainer = styled.footer`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 70% 1fr;
  padding: 30px;
  background: ${(props) => props.theme.colors.primaryColor};
  margin: 120px auto;
  width: 900px;

  small,
  button,
  p {
    color: white;
    padding: 0;
    margin: 0;
    line-height: 25px;
    padding-bottom: 15px;
  }
  a {
    color: white;
    text-decoration: underline;
    background: none;
    &:hover {
      color: ${(props) => props.theme.colors.secondaryColor};
    }
  }

  small {
    font-size: 13px;
    font-weight: 300;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: auto;
    margin: 50px 0;
    padding: 0 20px;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin: 70px 30px;
    padding: 30px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: auto;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding: 20px;
    margin: 30px;
  }
`
const Info = styled.div``
const ThemeAndLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  button {
    &:hover {
      color: white;
      text-decoration: underline;
    }
    &:focus {
      outline: none;
    }
  }

  a {
    text-transform: uppercase;
    font-size: 12px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    align-items: initial;
  }
`
const Social = styled.p`
  font-size: 16px;

  a:nth-child(1) {
    background: #1da1f2;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 0 5px;

    &:hover {
      text-decoration: underline;
    }
  }

  a:nth-child(2) {
    background: #25292d;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 0 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`
const ThemeSelector = styled.div`
  text-align: right;
  p {
    margin: 0;
    padding: 0;
    color: white;
  }
  button {
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: white;
    background: none;
    margin: 0;
    padding: 0;
    margin-left: 10px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    text-align: left;
    margin-bottom: 30px;
    button {
      margin-left: 0;
      margin-right: 10px;
    }
  }
`

const Footer = () => {
  const [latestCommit, setLatestCommit] = useState(null)
  useEffect(() => {
    fetch("https://api.github.com/repos/ardillan/ardillan.com")
      .then((res) => res.json())
      .then((commit) => {
        setLatestCommit(commit)
      })
  }, [])

  return (
    <FooterContainer>
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
            href="https://www.github.com/ardillan"
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
      <ThemeAndLinks>
        <ThemeSelector>
          <p>Tema de color</p>
          <button>Claro</button>
          <button>Game Boy</button>
        </ThemeSelector>
        <Link to={`/mapa-del-sitio`}>Mapa del sitio</Link>
      </ThemeAndLinks>
    </FooterContainer>
  )
}

export default Footer
