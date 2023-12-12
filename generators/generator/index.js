/**
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: "Generator Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "generator name",
    },
  ],
  actions: () => {
    return [
      {
        type: "add",
        path: "generators/{{kebabCase name}}/index.js",
        templateFile: "generators/generator/index.js.hbs",
      },
      {
        type: "modify",
        path: "plopfile.js",
        pattern: /(\/\/ -- APPEND HERE --)/gi,
        template: `plop.setGenerator('{{name}}', require('./generators/{{camelCase name}}'));\n\t$1`,
      },
    ];
  },
};
