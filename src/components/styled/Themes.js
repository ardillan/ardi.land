const breakPoints = {
  mobile: "640px",
  desktop: "980px",
}

const width = {
  main: "700px",
  full: "100vw",
}

const primaryColor = "#FC4A80"
const secondaryColor = "#FEEB84"
const secondaryColorLight = "#FFFADE"
const textColor = "#0a3a50"

export const LightTheme = {
  colors: {
    background: {
      main: "#FFFFFF",
      header: primaryColor,
      line: "#ffe600",
    },
    fonts: {
      text: textColor,
      anchor: primaryColor,
      header: "white",
      anchorBackground: "#f3f1ff",
      caption: "#f5f5fb",
    },
    table: {
      border: "#e0daff",
    },
    gradients: {
      top: "#FFFFFF",
      bottom: "#f8fbfb",
    },
    cursor: {
      selection: "#f2f0ff",
      color: "#3c3773",
    },
    images: {
      blendMode: "none",
    },
    primaryColor,
    secondaryColor,
    secondaryColorLight,
    rainBow: {
      0: "#2abd7d",
      1: "#FF9C43",
      2: "#FFE600",
      3: "#CD1D5C",
      4: "#0078ff",
    },
  },
  breakPoints: breakPoints,
  width: width,
}

export const GameBoyTheme = {
  colors: {
    background: {
      main: "#a8ff55",
      header: "#9cfd3e",
      line: "#8aec2b",
    },
    fonts: {
      text: "#3b402b",
      anchor: "#282b1c",
      header: "3b402b",
      anchorBackground: "#c8ff94",
      caption: "#ceefad",
    },
    table: {
      border: "#9af345",
    },
    gradients: {
      top: "#7cfd00",
      bottom: "#7cfd00",
    },
    cursor: {
      selection: "#ceefad",
      color: "#0c0f1d",
    },
    images: {
      blendMode: "luminosity",
    },
    rainBow: {
      0: "#55c34b",
      1: "#40a038",
      2: "#2e6d29",
      3: "#0ca700",
      4: "#14610e",
    },
  },
  breakPoints: breakPoints,
}
