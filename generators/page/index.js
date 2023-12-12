const path = require("path");

const APP_DIR = require("../utils").getSourceDir("app");

/**
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: "Page Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "page name",
    },
    {
      type: "input",
      name: "directory",
      message: `The directory under ${APP_DIR}/ where the page is placed.`,
      default: "",
    },
  ],
  actions: (answers) => {
    const rootDir = path.join(APP_DIR, answers.directory);

    return [
      {
        type: "add",
        path: `${rootDir}/{{kebabCase name}}/page.tsx`,
        templateFile: "generators/page/page.tsx.hbs",
      },
    ];
  },
};
