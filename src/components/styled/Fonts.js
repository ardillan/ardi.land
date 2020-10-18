import { createGlobalStyle } from "styled-components"

import InterLight from "../../fonts/inter/Inter-Light-BETA.woff"
import InterMedium from "../../fonts/inter/Inter-Medium.woff"
import InterBold from "../../fonts/inter/Inter-Bold.woff"
import InterBlack from "../../fonts/inter/Inter-Black.woff"

import NotoSerifRegular from "../../fonts/notoSerif/NotoSerif-Regular.ttf"
import NotoSerifBold from "../../fonts/notoSerif/NotoSerif-Bold.ttf"

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 200;
        src: url(${InterLight})
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url(${InterMedium})
    }

    @font-face {
        font-family: 'Inter';
        font-style: bold;
        font-weight: 600;
        src: url(${InterBold})
    }

    @font-face {
        font-family: 'Inter';
        font-style: bolder;
        font-weight: 800;
        src: url(${InterBlack})
    }

    @font-face {
        font-family: 'Noto Serif';
        font-style: regular;
        font-weight: 400;
        src: url(${NotoSerifRegular})
    }

    @font-face {
        font-family: 'Noto Serif';
        font-style: bold;
        font-weight: 600;
        src: url(${NotoSerifBold})
    }


`

export default Fonts
