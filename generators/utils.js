const path = require("path");

const BASE_URL = require("../tsconfig.json").compilerOptions.baseUrl || "";

function getSourceDir(directory) {
  return path.join(BASE_URL, directory);
}

module.exports = {
  getSourceDir,
};
