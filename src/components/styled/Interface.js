import styled from "styled-components"

export const SectionTitle = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 50px auto 0;
  max-width: 600px;
  h1 {
    font-family: "Noto Serif";
    font-size: 50px;
    font-weight: 800;
    margin: 0;
    padding: 0;
    width: auto;
  }

  h2 {
    font-family: "Inter";
    font-size: 18px;
    margin: 20px 0;
    padding: 10px 0;
    font-weight: 200;
    line-height: 25px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0 20px;
    margin: 40px auto 10px;
    h1 {
      font-size: 30px;
      margin: 0;
    }
  }
`

export const SectionTitleWithImage = styled.section`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-areas:
    "image title"
    "subtitle subtitle";
  justify-content: center;
  margin: 50px auto;
  max-width: 600px;
  grid-gap: 20px;

  img {
    grid-area: image;
    border-radius: 3px;
  }

  h1 {
    grid-area: title;
    font-family: "Noto serif";
    font-size: 50px;
    font-weight: 800;
    margin: 0;
    padding: 0;
    width: auto;
    display: flex;
    align-items: center;
  }

  h2 {
    grid-area: subtitle;
    font-family: "Inter";
    font-size: 18px;
    font-weight: 200;
    line-height: 25px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0 20px;
    width: auto;
    margin: 40px 0 0;
    grid-template-columns: 1fr 1fr;

    h1  {
      text-align: center;
      font-size: 25px;
    }

    h2 {
      margin: 0;
    }
  }
`
