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
        color: #848484;
    }
`

export default Main
