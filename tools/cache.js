// @ts-check

const path = require("path");

function sanitize(name) {
  return name.replace("/", ".").replace(/[^a-z0-9.@_-]+/gi, "-");
}

const ROOT_DIR = path.resolve(__dirname, "..");
const CACHE_DIR_NAME = ".cache";

/**
 * @param {string} name
 */
function getCachePath(name) {
  const cacheDir = path.resolve(ROOT_DIR, CACHE_DIR_NAME);
  console.info("cacheDir: ", cacheDir);
  return `${cacheDir}/${sanitize(name)}`;
}

module.exports = {
  getCachePath,
};
