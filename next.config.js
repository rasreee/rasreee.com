// @ts-check
const { isTrueEnv } = require("./tools/env");
const { fromRoot } = require("./tools/path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: isTrueEnv(process.env.ANALYZE),
  openAnalyzer: true,
});

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: [
    "@react-hookz/web" /* allow importing like `@react-hookz/web/esm/*` */,
  ],
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    tsconfigPath: fromRoot("tsconfig.json"),
    ignoreBuildErrors: isTrueEnv(process.env.SKIP_TYPECHECK),
  },
  eslint: {
    dirs: ["."],
  },
};

module.exports = withBundleAnalyzer(config);
