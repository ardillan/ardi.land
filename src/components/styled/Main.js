import { createGlobalStyle } from "styled-components"

const Main = createGlobalStyle`
    body {
        font-family: "Noto Serif";
        background-color: ${(props) => props.theme.colors.background.main};
    }
`

export default Main
