import React, { useState, useEffect } from "react"
import styled from "styled-components"

const RandomTextContainer = styled.div`
  font-size: 23px;
  line-height: 35px;
  margin: auto;
  text-align: center;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
    &:hover {
      text-decoration: underline;
      text-decoration-color: ${(props) => props.theme.primaryColor};
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    a,
    p {
      font-size: 18px;
    }
  }
`

const RandomText = () => {
  const [randomNumber, setRandomNumber] = useState()

  useEffect(() => {
    let number = Math.floor(Math.random() * 5)
    setRandomNumber(number)
  }, [])

  const randomText = [
    {
      text: "el TachoCao",
      link: "http://www.hornosanjose.com/producto/tachocao/tachocao-700gr",
    },
    { text: "los nachos", link: "https://es.wikipedia.org/wiki/Nachos" },
    {
      text: "la música post-rock",
      link: "https://es.wikipedia.org/wiki/Post-rock",
    },
    {
      text: "Manny Calavera",
      link: "https://es.wikipedia.org/wiki/Grim_Fandango",
    },
    {
      text: "bedknobs and broomsticks",
      link: "https://es.wikipedia.org/wiki/Bedknobs_and_Broomsticks",
    },
    {
      text: "Otl Aicher",
      link: "https://en.wikipedia.org/wiki/Otl_Aicher",
    },
    {
      text: "el JAMStack",
      link: "https://jamstack.org/what-is-jamstack/",
    },
  ]

  return (
    <RandomTextContainer>
      <p>
        Me gustan cosas como {` `}
        <span style={{ color: `#FF8A00`, fontWeight: 400 }}>{` { `}</span>
        {typeof randomNumber === "number" && (
          <>
            {randomText
              .sort(function (a, b) {
                return 0.5 - Math.random()
              })
              .slice(0, 4)
              .map((text, index) => (
                <a href={text.link} key={index}>
                  <span>
                    {`${text.text}`}
                    {index + 1 === 4 ? "" : ", "}
                  </span>
                </a>
              ))}
          </>
        )}
        <span style={{ color: `#FF8A00`, fontWeight: 400 }}>{` } `}</span> y
        generar textos aleatorios.
      </p>
    </RandomTextContainer>
  )
}

export default RandomText
