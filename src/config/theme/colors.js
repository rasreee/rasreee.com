const palette = {
  sky: {
    DEFAULT: "#38BDF8",
    400: "#61D0FF",
    300: "#89D9FB",
  },
  plum: {
    300: "#B183C3",
    400: "#A068B6",
    DEFAULT: "#884D9F",
  },
  dark: { 900: "#121212" },
};

const colors = {
  ...palette,
  primary: palette.sky,
  secondary: palette.plum,
  bg: palette.dark[900],
  muted: "#1b1b1b",
  text: "#EAEAEA",
  hint: "#ADADAD",
  highlight: "#37173B",
  accent: "#A596ED",
  outline: "#2f2f2f",
  github: {
    accent: { fg: "#58a6ff" },
  },
};

module.exports = colors;
