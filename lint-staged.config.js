module.exports = {
  "**/*.{js,jsx,cjs,mjs,ts,tsx}": (files) => {
    const stagedFiles = files.join(" ");

    const rules = `
      --rule 'unused-imports/no-unused-imports-ts: 2'
    `;

    const cmds = [`eslint --color ${stagedFiles} ${rules} --fix --quiet`];

    console.info(`Running: ${cmds}`);

    return cmds;
  },
  "**/*.{css,scss,json,md,mdx,yml,yaml}": (files) => {
    const stagedFiles = files.join(" ");
    const cmd = `prettier --config .prettierrc --write ${stagedFiles}`;

    console.info(`Running: ${cmd}`);

    return [cmd];
  },
};
