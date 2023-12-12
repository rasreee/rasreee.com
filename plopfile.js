/**
 * @param {import('plop').NodePlopAPI} plop
 */
// eslint-disable-next-line func-names
module.exports = function (plop) {
  plop.setGenerator("page", require("./generators/page"));
  plop.setGenerator("component", require("./generators/component"));
  plop.setGenerator("generator", require("./generators/generator"));
  // -- APPEND HERE --
};
