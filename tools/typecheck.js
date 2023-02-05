const path = require("path");

/**
 *
 * @param {string} dir
 * @param {string} tsConfig
 * @returns {string}
 */
function getTypeCheckCmd(dir, tsConfig = "tsconfig.json") {
  const cmd = `tsc --noEmit --project ${path.join(dir, tsConfig)}`;
  console.info(`Running: ${cmd}`);
  return cmd;
}

module.exports = { getTypeCheckCmd };
