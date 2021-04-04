import { createGlobalStyle } from "styled-components"

import SourceSansRegular from "../../fonts/source-sans-pro/SourceSansPro-Regular.ttf"
import SourceSansSemiBold from "../../fonts/source-sans-pro/SourceSansPro-SemiBold.ttf"
import SourceSansBold from "../../fonts/source-sans-pro/SourceSansPro-Bold.ttf"
import SourceSansBlack from "../../fonts/source-sans-pro/SourceSansPro-Black.ttf"

import LiterataRegular from "../../fonts/literata/Literata-Regular.ttf"
import LiterataBold from "../../fonts/literata/Literata-Bold.ttf"

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 200;
        src: url(${SourceSansRegular})
    }

    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        src: url(${SourceSansSemiBold})
    }

    @font-face {
        font-family: 'Source Sans Pro';
        font-style: bold;
        font-weight: 600;
        src: url(${SourceSansBold})
    }

    @font-face {
        font-family: 'Source Sans Pro';
        font-style: bolder;
        font-weight: 800;
        src: url(${SourceSansBlack})
    }

    @font-face {
        font-family: 'Literata';
        font-style: regular;
        font-weight: 400;
        src: url(${LiterataRegular})
    }

    @font-face {
        font-family: 'Literata';
        font-style: bold;
        font-weight: 600;
        src: url(${LiterataBold})
    }


`

export default Fonts
