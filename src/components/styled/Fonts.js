import { createGlobalStyle } from "styled-components"

import WorkSansRegular from "../../fonts/WorkSans/WorkSans-Regular.ttf"
import WorkSansBold from "../../fonts/WorkSans/WorkSans-Bold.ttf"

import InterRegular from "../../fonts/Inter/Inter-Regular.ttf"
import InterBold from "../../fonts/Inter/Inter-Bold.ttf"

import MerriWeatherRegular from "../../fonts/Merriweather/Merriweather-Regular.ttf"
import MerriWeatherBold from "../../fonts/Merriweather/Merriweather-Bold.ttf"
import MerriWeatherRegularItalic from "../../fonts/Merriweather/Merriweather-Italic.ttf"
import MerriWeatherBoldItalic from "../../fonts/Merriweather/Merriweather-BoldItalic.ttf"


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

    @font-face {
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 400;
        src: url(${MerriWeatherRegular})
    }

    @font-face {
        font-family: 'Merriweather';
        font-style: bolder;
        font-weight: 600;
        src: url(${MerriWeatherBold})
    }

    @font-face {
        font-family: 'Merriweather';
        font-style: italic;
        src: url(${MerriWeatherRegularItalic})
    }

    @font-face {
        font-family: 'Merriweather';
        font-style: italic;
        font-weight: 600;
        src: url(${MerriWeatherBoldItalic})
    }

    
`

export default Fonts
