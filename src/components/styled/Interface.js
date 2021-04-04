import styled from "styled-components"

export const Container = styled.div`
  width: ${(props) => props.theme.width.main};
  margin: auto;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: auto;
  }
`

export const SectionTitle = styled.section`
  display: grid;
  width: ${(props) => props.theme.width.main};
  margin: auto;
  grid-template-columns: 1fr;
  justify-content: center;
  padding: 35px 0;
  div {
    margin: auto;
    padding: 30px 0;
    h1 {
      font-size: 45px;
      font-weight: 600;
      margin: 0;
      padding: 0;
      width: auto;
    }

    h2 {
      background: ${(props) => props.theme.colors.secondaryColorLight};
      border-left: 10px solid ${(props) => props.theme.colors.secondaryColor};
      font-size: 21px;
      font-weight: 200;
      line-height: 2rem;
      margin-top: 10px;
      padding: 1rem 2rem;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    margin: 0;
    width: auto;
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
  width: ${(props) => props.theme.width.main};
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
  font-family: "Literata";
  width: ${(props) => props.theme.width.main};

  div {
    max-width: ${(props) => props.theme.width.main};
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
