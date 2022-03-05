import { createGlobalStyle } from "styled-components"

import WorkSansRegular from "../../fonts/WorkSans/WorkSans-Regular.ttf"
import WorkSansBold from "../../fonts/WorkSans/WorkSans-Bold.ttf"

import InterRegular from "../../fonts/Inter/Inter-Regular.ttf"
import InterBold from "../../fonts/Inter/Inter-Bold.ttf"

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 400;
        src: url(${WorkSansRegular})
    }

    @font-face {
        font-family: 'Work Sans';
        font-style: bolder;
        font-weight: 600;
        src: url(${WorkSansBold})
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
