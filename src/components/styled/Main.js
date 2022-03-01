import { createGlobalStyle } from "styled-components"

const Main = createGlobalStyle`
        :root {
            color: ${(props) => props.theme.textColor};
            font-family: Inter;
            font-weight: 200;
            font-size: 21px;
            text-rendering: geometricPrecision;
            
        }

        ::selection {
            background: #cceae7;
            background-color: #cceae7;
            color: #263238;
        }
        
        p {
            line-height: 180%;
            margin-top: 0;
            font-size: .8em;
        }


        blockquote {
            background: #fafafa;
            padding: 35px 40px 20px;
            margin: 0 0 30px 0;
            border-left: 5px solid #5b40f9;
        }

        figcaption {
            text-align: center;
            font-size: 16px;
            margin: 30px 0;
            color: ${(props) => props.theme.primaryColor};
        }

        img ~ img {
            border: 2px dashed red;
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
    
    `

export default Main
