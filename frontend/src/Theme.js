export const color = {
  primaryBlue: {
    950: "#0F2942",
    900: "164064",
    800: "#144C78",
    700: "#145990",
    600: "#176FB2",
    500: "#3498DB",
    400: "#4CA7E4",
    300: "#8AC5EF",
    200: "#C1DFF6",
    100: "#E3EFFB",
    50: "#F2F8FD",
  },

  gray: {
    950: "#000000",
    900: "#3D3D3D",
    800: "#454545",
    700: "#4F4F4F",
    600: "#5D5D5D",
    500: "#6D6D6D",
    400: "#888888",
    300: "#B0B0B0",
    200: "#D1D1D1",
    100: "#E7E7E7",
    50: "#F6F6F6",
  },

  warmGray: {
    950: "#272321",
    900: "#463F3D",
    800: "#4F4844",
    700: "#5B524D",
    600: "#70675E",
    500: "#837A6F",
    400: "#928A7D",
    300: "#AAA59A",
    200: "#C9C6BF",
    100: "#E3E2DE",
    50: "#F4F4F2",
  },

  coolGray: {
    950: "#2F2F37",
    900: "#51525E",
    800: "#616272",
    700: "#808195",
    600: "#898AA2",
    500: "#9FA2B5",
    400: "#B3B7C6",
    300: "#DEE1E7",
    200: "#C9C6BF",
    100: "#EDEFF2",
    50: "#F5F6F8",
  },

  success: {
    900: "#054F31",
    800: "#05603A",
    700: "#027A48",
    600: "#039855",
    500: "#12B76A",
    400: "#32D583",
    300: "#6CE9A6",
    200: "#A6FAC5",
    100: "#D1FADF",
    50: "#ECFDF3",
  },

  error: {
    900: "#7A271A",
    800: "#912018",
    700: "#B42318",
    600: "#D92D20",
    500: "#F04438",
    400: "#F97066",
    300: "#FDA29B",
    200: "#FECDCA",
    100: "#FFE4E2",
    50: "#FEF3F2",
  },

  warning: {
    900: "#7A2E0E",
    800: "#93370D",
    700: "#B54708",
    600: "#DC6803",
    500: "#F79009",
    400: "#FDB022",
    300: "#FEC84B",
    200: "#FEDF89",
    100: "#FEF0C7",
    50: "#FFFCF5",
  },
  white: "#FFFFFF",
  black: "#000000",
};

export const lightTheme = {
    primary : color.primaryBlue,
    
  //for primary collor heading
  primaryH1: color.primaryBlue["600"],
  primaryH2: color.primaryBlue["500"],
  primaryH3: color.primaryBlue["400"],
  primaryH4: color.primaryBlue["300"],

  //normal headingss
  secondaryH1: color.gray["900"],
  secondaryH2: color.gray["800"],
  secondaryH3: color.gray["700"],
  secondaryH4: color.gray["600"],
  secondaryH5: color.gray["500"],
  secondaryH6: color.gray["400"],

  //primary backgorund colors
  primaryB1: color.primaryBlue["300"],
  primaryB2: color.primaryBlue["200"],
  primaryB3: color.primaryBlue["100"],
  primaryB4: color.primaryBlue["50"],

  //base backgorund colors
  baseB0: color.white,           //for white and black in L-D themes
  baseB1: color.gray["300"],
  baseB2: color.gray["200"],
  baseB3: color.gray["100"],
  baseB4: color.gray["50"],

  //
};

export const theme = lightTheme;