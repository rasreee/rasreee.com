function toTwGlob(path) {
  return `./${path}/**/*!(*.spec|*.stories).tsx`;
}

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  important: true,
  mode: "jit",
  content: [toTwGlob("src")],
  theme: {
    extend: require("./src/config/theme"),
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
