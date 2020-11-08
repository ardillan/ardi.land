import styled from "styled-components"

export const SectionTitle = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  background: linear-gradient(
    -180deg,
    ${(props) => props.theme.colors.gradients.top},
    ${(props) => props.theme.colors.gradients.bottom}
  );
  padding: 35px 0;
  div {
    width: 900px;
    margin: auto;
    padding: 30px 0;
    h1 {
      font-family: "Noto Serif";
      font-size: 45px;
      font-weight: 800;
      margin: 0;
      padding: 0;
      width: auto;
    }

    h2 {
      font-family: "Inter";
      font-size: 18px;
      margin-top: 10px;
      padding: 0;
      font-weight: 200;
      line-height: 25px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    margin: 0;
    div {
      width: auto;
      padding: 30px;
      margin: 0;

      h1 {
        font-size: 30px;
        margin: 0;
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    h1 {
      font-size: 30px;
      margin: 0;
    }
  }
`

export const SectionTitleWithImage = styled.section`
  background: linear-gradient(
    -180deg,
    ${(props) => props.theme.colors.gradients.top},
    ${(props) => props.theme.colors.gradients.bottom}
  );
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  grid-gap: 20px;
  align-items: center;
  margin-bottom: 40px;

  img,
  picture,
  .gatsby-image-wrapper {
    border-radius: 3px;
    width: auto;
    height: 500px;
  }
  h1 {
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
    padding: 30px;
    width: auto;
    margin: 0;
    grid-template-columns: 1fr;

    h1  {
      text-align: center;
      font-size: 25px;
    }

    h2 {
      margin: 0;
    }
  }
`

export const PageContainer = styled.div`
  margin: auto;
  width: 900px;
  div {
    max-width: 600px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: auto;
    div {
      padding: 30px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: auto;
    div {
      padding: 30px;
    }
  }
`
