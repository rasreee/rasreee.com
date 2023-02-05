import type { Config } from "jest";
import { getCachePath } from "./tools/cache";

function fromRoot(dir: string) {
  return `<rootDir>/${dir}`;
}

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const jestConfig: Config = {
  passWithNoTests: true,
  cache: true,
  cacheDirectory: getCachePath("jest"),
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleFileExtensions: ["cjs", "mjs", "js", "jsx", "ts", "jsx", "json"],
  modulePathIgnorePatterns: [
    fromRoot(".cache"),
    fromRoot(".next"),
    fromRoot("public"),
    fromRoot("tools"),
  ],
  testEnvironment: "jsdom",
  testMatch: [fromRoot("**/?(*.)spec.+(js|jsx|ts|tsx)")],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)?$": [
      "ts-jest",
      { tsconfig: fromRoot("tsconfig.spec.json") },
    ],
  },
};

export default jestConfig;
