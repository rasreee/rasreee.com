const defaultTheme = require("tailwindcss/defaultTheme");

const screens = {
  mobile: { max: defaultTheme.screens.md },
  tablet: { min: defaultTheme.screens.md, max: defaultTheme.screens.lg },
  desktop: { min: defaultTheme.screens.lg },
};

const breakpoints = {
  ...defaultTheme.screens,
  ...screens,
  aboveMobile: { min: screens.mobile.max },
  aboveTablet: { min: screens.tablet.max },
};

module.exports = breakpoints;
