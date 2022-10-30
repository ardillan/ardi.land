import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { formatDateTime } from "../utils/helpers"
import { Container } from "../components/styled/Interface"

const Info = styled.div`
  margin-top: 150px;
  font-size: ${(props) => props.theme.mainFontSize};
  text-align: center;
  a {
    color: inherit;
    text-decoration-color: #5b40f9;
  }
`
const BottomBar = styled.div`
  align-items: center;
  display: flex;
  font-weight: 400;
  justify-content: center;
  min-height: 45px;
  text-align: center;
  a {
    font-size: 12px;
    margin-right: 10px;
    text-decoration: none;
    color: ${(props) => props.theme.secondaryColor};
  }
`

const Footer = () => {
  const [latestCommit, setLatestCommit] = useState(null)
  useEffect(() => {
    fetch("https://api.github.com/repos/ardillan/ardi.land")
      .then((res) => res.json())
      .then((apiData) => {
        const { pushed_at: lastCommit } = apiData
        setLatestCommit(lastCommit)
      })
  }, [])

  return (
    <>
      <Info>
        <Container>
          <p>
            Esta web está hecha con <a href="https://gatsbyjs.org/">GatsbyJS</a>{" "}
            y algo de café desde la verde y gris{" "}
            <a href="https://es.wikipedia.org/wiki/Torrelavega">Torrelavega</a>
          </p>
          <p>
            Última actualización el{" "}
            {latestCommit === null ? (
              <span>...</span>
            ) : (
              <span>{formatDateTime(latestCommit)}</span>
            )}
          </p>
        </Container>
      </Info>

      <BottomBar>
        <Container>
          <Link to={`/mapa-del-sitio`}>Mapa del sitio</Link>
          <Link to={`/espacios`}>Espacios</Link>
        </Container>
      </BottomBar>
    </>
  )
}

export default Footer
