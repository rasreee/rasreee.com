const path = require("path");

const { getCachePath } = require("./cache");

function getEslintFixCmd(cwd, fileList = []) {
  const files = fileList
    // makes output cleaner by removing absolute paths from filenames
    .map((f) => `"./${path.relative(cwd, f)}"`)
    .join(" ");

  const cmd = `eslint ${files} --cache --cache-location=${getCachePath(
    "eslint"
  )} --fix`;
  console.info(`Running: ${cmd}`);
  return cmd;
}

module.exports = {
  getEslintFixCmd,
};
