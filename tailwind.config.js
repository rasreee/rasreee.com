function toTwGlob(path) {
  return `./${path}/**/*!(*.spec).tsx`;
}

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  important: true,
  mode: "jit",
  content: [toTwGlob("pages"), toTwGlob("components")],
  theme: {
    extend: require("./config/theme"),
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
