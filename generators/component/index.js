const path = require("path");

const COMPONENTS_DIR = require("../utils").getSourceDir("components");

/**
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: "Component Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name",
    },
    {
      type: "input",
      name: "directory",
      message: `The directory under ${COMPONENTS_DIR}/ where the component is placed.`,
      default: "",
    },
    {
      type: "confirm",
      name: "withProps",
      message: "Generate a component with props.",
      default: true,
    },
  ],
  actions: (answers) => {
    const rootDir = path.join(COMPONENTS_DIR, answers.directory);
    const templateFile = answers.withProps
      ? "generators/component/index.tsx.hbs"
      : "generators/component/index-propless.tsx.hbs";

    return [
      {
        type: "add",
        path: `${rootDir}/{{kebabCase name}}/index.tsx`,
        templateFile,
      },
    ];
  },
};
