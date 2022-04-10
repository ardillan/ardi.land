import { createGlobalStyle } from "styled-components"

const Main = createGlobalStyle`
  :root {
    color: ${(props) => props.theme.textColor};
    font-family: ${(props) => props.theme.primaryFont};
    font-weight: 200;
    font-size: 21px;
    text-rendering: geometricPrecision;
  }

  ::selection {
    background: #fffe0091;
    background-color: #fffe0091;
    color: #263238;
  }

  p {
    line-height: 180%;
    margin-top: 0;
    font-size: 0.8em;
  }

  blockquote {
    padding: 35px 40px 20px;
    margin: 0 0 30px 0;
    border-left: 2px solid #9172f054;
    border-right: 2px solid #ff000054;
    border-top: 2px solid #ff920054;
    border-bottom: 2px solid #4ac665b5;
  }

  figcaption {
    color: ${(props) => props.theme.textColor};
    text-align: center;
    font-family: "Inter";
    font-size: 14px;
    margin: 20px auto;
    padding: 10px;
    width: max-content;
  }

  .gallery-post__1-columns {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr;
    margin: 50px auto 50px -150px;
    width: 900px;

    .gatsby-resp-image-wrapper {
      height: 100%;
    }

    .gatsby-resp-image-background-image {
      padding-bottom: 0;
    }

    img {
      object-fit: cover;
    }

    figcaption {
      display: none;
      background: red;
    }

    figure {
      padding: 0;
      margin: 0;
    }

    @media screen and (max-width: ${(props) =>
      props.theme.breakPoints.desktop}) {
      margin: initial;
      width: 100%;
    }
  }

  .gallery-post__2-columns {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    margin: 50px auto 50px -150px;
    width: 900px;

    .gatsby-resp-image-wrapper {
      height: 100%;
    }

    .gatsby-resp-image-background-image {
      padding-bottom: 0;
    }

    img {
      object-fit: cover;
    }

    figcaption {
      display: none;
      background: red;
    }

    figure {
      padding: 0;
      margin: 0;
    }

    @media screen and (max-width: ${(props) =>
      props.theme.breakPoints.desktop}) {
      margin: initial;
      width: 100%;
    }
  }

  .gallery-post__3-columns {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 50px auto 50px -150px;
    width: 900px;

    .gatsby-resp-image-wrapper {
      height: 100%;
    }

    .gatsby-resp-image-background-image {
      padding-bottom: 0;
    }

    img {
      object-fit: cover;
    }

    figcaption {
      display: none;
      background: red;
    }

    figure {
      padding: 0;
      margin: 0;
    }

    @media screen and (max-width: ${(props) =>
      props.theme.breakPoints.desktop}) {
      margin: initial;
      width: 100%;
    }
  }

  .gallery-post__3-columns-masonry {
    display: grid;
    grid-gap: 10px;
    grid-template-areas:
      "a b"
      "a c";
    margin: 35px 0;
    margin: 50px auto 50px -150px;
    width: 900px;

    .gatsby-resp-image-wrapper {
      height: 100%;
    }

    .gatsby-resp-image-background-image {
      padding-bottom: 0;
    }

    img {
      object-fit: cover;
    }

    figure:nth-child(1) {
      grid-area: a;
    }
    figure:nth-child(2) {
      grid-area: b;
    }
    figure:nth-child(3) {
      grid-area: c;
    }

    figcaption {
      display: none;
      background: red;
    }

    figure {
      padding: 0;
      margin: 0;
    }

    @media screen and (max-width: ${(props) =>
      props.theme.breakPoints.desktop}) {
      margin: initial;
      width: 100%;
    }
  }
`

export default Main
