const { getEslintFixCmd } = require("./tools/eslint");
const { toFilePattern } = require("./tools/file-pattern");
const { getPrettierFixCmd } = require("./tools/prettier");
const { getStylelintFixCmd } = require("./tools/stylelint");
const { getTypeCheckCmd } = require("./tools/typecheck");

module.exports = {
  [toFilePattern(["cjs", "mjs", "js", "jsx", "ts", "tsx"])]: (files) => [
    getEslintFixCmd(__dirname, files),
    getTypeCheckCmd(__dirname, "tsconfig.json"),
  ],
  [toFilePattern(["css", "scss"])]: (files) =>
    getStylelintFixCmd(__dirname, files),
  [toFilePattern(["jsx", "tsx", "json", "md", "mdx", "yml", "yaml"])]: (
    files
  ) => getPrettierFixCmd(__dirname, files),
};
