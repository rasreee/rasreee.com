const { quote: escape } = require("shell-quote");

const { getCachePath } = require("./cache");
/**
 * Concatenate and escape a list of filenames that can be passed as args to prettier cli
 *
 * Prettier has an issue with special characters in filenames,
 * such as the ones uses for nextjs dynamic routes (ie: [id].tsx...)
 *
 * @link https://github.com/okonet/lint-staged/issues/676
 *
 * @param {string[]} filenames
 * @returns {string} Return concatenated and escaped filenames
 */
const concatFilesForStylelint = (filenames) => {
  const isWin = process.platform === "win32";
  return filenames
    .map((filename) => `"${isWin ? filename : escape([filename])}"`)
    .join(" ");
};

function getStylelintFixCmd(cwd, files = []) {
  const cmd = `stylelint ${concatFilesForStylelint(
    files
  )} --cache --cache-location=${getCachePath("stylelint")} --fix`;
  console.info(`Running: ${cmd}`);
  return cmd;
}

module.exports = {
  concatFilesForStylelint,
  getStylelintFixCmd,
};
