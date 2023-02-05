const breakpoints = require("./breakpoints");
const colors = require("./colors");
const typography = require("./typography");

const theme = {
  screens: breakpoints,
  colors,
  ...typography,
};

module.exports = theme;
