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
        margin-top: 5px;
    }

    blockquote {
        border-left: 5px solid ${(props) =>
          props.theme.colors.cursor.selection};
        padding: 20px 30px;
        margin: 0;
        background: #8080800f;
        max-width: 600px;
        p {
            font-size: 15px;
            line-height: 25px;
            font-family: sans-serif;
            margin: 0;
            padding: 0;
        }
    }

    /*  💅🏻 Code */
    pre {
        margin: 30px auto;
    }

    small {
        color: ${(props) => props.theme.colors.fonts.text};
    }

    table > a {
        color: ${(props) => props.theme.colors.fonts.text};
    }


    /*  💅🏻 Images */
    img, .gatsby-image-wrapper, picture, figure {

        mix-blend-mode: ${(props) => props.theme.colors.images.blendMode};;
    }


    .gallery-post__1-columns {
      display: grid;
      margin: 35px 0;
      grid-gap: 10px;
      grid-template-columns: 1fr;
  
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
    }


    .gallery-post__2-columns {
        display: grid;
        margin: 35px 0;
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr;
    
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
      }

      .gallery-post__3-columns {
        display: grid;
        margin: 35px 0;
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr 1fr;
    
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
      }




    .gallery-post__3-columns-masonry {
        display: grid;
        margin: 35px 0;
        grid-gap: 10px;
        grid-template-areas:
          "a b"
          "a c";
    
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
      }

    /*  💅🏻 Lists */
    ol, ul {
        padding: 0px 0 20px 20px;
        font-size: 18px;
        line-height: 30px;
        color: ${(props) => props.theme.colors.fonts.text};
    }


    /* 💅🏻 Heading sizes */
    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.colors.fonts.text};
        font-family: "Source Sans Pro";
        font-weight: 400;
        margin:0;
        padding-top: 15px;
        padding-bottom: 5px;
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
        color: ${(props) => props.theme.colors.fonts.text};
        text-decoration: underline;
        transition: all 0.3s;
        text-decoration-color: ${(props) => props.theme.colors.fonts.anchor};;
        &:hover{
            text-decoration-color: ${(props) => props.theme.colors.fonts.text};
            background: ${(props) => props.theme.colors.fonts.anchorBackground};
        }
    }

    code {
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
        font-family: "Source Sans Pro";
        font-weight: 400;
        margin: 10px auto;
        border-radius: 5px;
    }
`

export default Main
