/**
 * @param {any} value
 * @returns {boolean}
 */
function isTrueEnv(value) {
  return ["true", "1", "yes"].includes(value);
}

module.exports = { isTrueEnv };
