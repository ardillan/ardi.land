import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  headerFontFamily: ["PT Sans"],
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    h1: {
      fontSize: "50px",
    },
    h2: {
      fontSize: "25px",
      fontWeight: "200",
    },
  }),
})

export default typography
