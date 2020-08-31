import { createGlobalStyle } from "styled-components"

const Main = createGlobalStyle`
    body {
        font-family: "Noto Serif";
        background-color: ${(props) => props.theme.colors.background.main};
    }

    ::selection {
        background: ${(props) => props.theme.colors.cursor.selection};
        color: ${(props) => props.theme.colors.cursor.color};
    } 
`

export default Main
