import { createGlobalStyle } from "styled-components"

import VigaRegular from "../../fonts/Viga/Viga-Regular.ttf"

import InterRegular from "../../fonts/Inter/Inter-Regular.ttf"
import InterBold from "../../fonts/Inter/Inter-Bold.ttf"

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Viga';
        font-style: normal;
        font-weight: 400;
        src: url(${VigaRegular})
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url(${InterRegular})
    }

    @font-face {
        font-family: 'Inter';
        font-style: bolder;
        font-weight: 600;
        src: url(${InterBold})
    }
`

export default Fonts
