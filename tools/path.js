/**
 * @param {string} dir
 * @returns {string}
 */
function fromRoot(dir) {
  return `./${dir}`;
}

module.exports = { fromRoot };
