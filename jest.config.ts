import fs from "fs";
import path from "path";

import tsconfig from "./tsconfig.json";

function getModuleNameMapper({ baseUrl = "", importPrefix = "" }) {
  function listDirectories(rootDir: string) {
    return fs.readdirSync(rootDir).filter((item) => {
      const stats = fs.statSync(path.join(rootDir, item));
      return stats.isDirectory();
    });
  }

  const directories = listDirectories(baseUrl);
  return Object.fromEntries(
    directories.map((directoryName) => {
      const key = `^${importPrefix}(${directoryName})/(.*)`;
      const value = `<rootDir>/${baseUrl}/$1/$2`;
      return [key, value];
    })
  );
}

/** @type {import("jest").Config} */
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]sx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.json" }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "cjs", "mjs", "json"],
  moduleNameMapper: getModuleNameMapper({
    baseUrl: tsconfig.compilerOptions.baseUrl,
  }),
};
