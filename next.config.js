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
  swcMinify: false /* TODO enable once the agressive dead code elimination bug that causes `ReferenceError: FieldPresenceWithOverlay is not defined` is fixed */,
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
  typescript: {
    tsconfigPath: fromRoot("tsconfig.json"),
    ignoreBuildErrors: isTrueEnv(process.env.SKIP_TYPECHECK),
  },
  eslint: {
    dirs: ["."],
  },
};

module.exports = withBundleAnalyzer(config);
