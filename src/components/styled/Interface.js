import styled from "styled-components"

export const Container = styled.div`
  width: ${(props) => (props.fullWidth ? "100vw" : "900px")};
  margin: auto;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: 85vw;
  }
`

export const SectionTitle = styled.div`
  width: 900px;
  margin: 80px auto 40px;
  h1 {
    font-family: "${(props) => props.theme.primaryFont}";
    font-size: 55px;
    font-weight: 600;
    margin: 0;
  }
  h2 {
    font-size: 25px;
    font-weight: 200;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: 85vw;
    margin: 50px auto 0;
    padding: 0;

    @media screen and (max-width: ${(props) =>
        props.theme.breakPoints.desktop}) {
      h1 {
        font-size: 1.6rem;
      }
    }

    h2 {
      font-size: 20px;
    }
  }
`
export const PageContainer = styled.section`
  width: 900px;
  max-width: 900px;
  margin: auto;

  .gatsby-image-wrapper,
  .gatsby-resp-image-figure {
    width: 900px;
    margin: 50px auto 50px auto;
  }

  .gatsby-highlight {
    width: 900px;
    margin: 50px 0 50px -130px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "${(props) => props.theme.secondaryFont}";
    margin: 50px 0 10px 0;
    padding: 0;
    font-weight: 400;
  }

  h1 {
    font-size: 1.6em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.4em;
  }

  h4 {
    font-size: 1.3em;
  }

  h5 {
    font-size: 1.2em;
  }

  h6 {
    font-size: 1em;
  }

  a {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.primaryColor};
    text-decoration-thickness: 2px;
    color: initial;
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-decoration-color: ${(props) => props.theme.primaryColor};
      background: ${(props) => props.theme.primaryColor}10;
    }
  }

  ul,
  ol {
    line-height: 35px;
    li {
      font-size: ${(props) => props.theme.mainFontSize};
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding: 0;
    width: 85vw;
    margin: auto;

    .gatsby-image-wrapper,
    .gatsby-resp-image-figure,
    .gatsby-highlight {
      width: 85vw;
      margin: auto;
    }
  }
`
