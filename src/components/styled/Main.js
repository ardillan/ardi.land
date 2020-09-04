import { createGlobalStyle } from "styled-components"

const Main = createGlobalStyle`
    /* 💅🏻 Root */
    body {
        font-family: "Noto Serif";
        background-color: ${(props) => props.theme.colors.background.main};
    }

    ::selection {
        background: ${(props) => props.theme.colors.cursor.selection};
        color: ${(props) => props.theme.colors.cursor.color};
    } 

    /*  💅🏻 Paragraphs */
    p {
      color: ${(props) => props.theme.colors.fonts.text};
      font-size: 18px;
      line-height: 30px;
      padding-bottom: 15px;
    }

    /*  💅🏻 Lists */
    ol, ul {
        padding-top: 15px;
        font-size: 18px;
        line-height: 30px;
        color: ${(props) => props.theme.colors.fonts.text};
    }


    /* 💅🏻 Heading sizes */
    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.colors.fonts.text};
        font-family: Inter;
        font-weight: 400;
        margin-top: 30px;
        padding-bottom: 10px;
        padding-top: 30px;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1.3rem;
    }

    h5 {
        font-size: 1.2rem;
    }

    h6 {
        font-size: 1rem;
    }

    /* 💅🏻 Anchors */
    a {
        color: ${(props) => props.theme.colors.fonts.anchor};
        background: ${(props) => props.theme.colors.fonts.anchorBackground};
        text-decoration: none;
    }

    code {
        background: ${(props) => props.theme.colors.background.meta};
        font-size: 17px;
        padding: 2px;
        border-radius: 5px;
    }

    figcaption {
        text-align: center;
        color: ${(props) => props.theme.colors.fonts.text};
        background: ${(props) => props.theme.colors.fonts.caption};
        padding: 10px 10px;
        font-size: 13px;
        font-family: "Inter";
        font-weight: 400;
        width: max-content;
        margin: 10px auto;
        border-radius: 5px;
    }
`

export default Main
