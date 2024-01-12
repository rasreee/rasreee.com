/* eslint-disable global-require */

import type { Config } from "tailwindcss";

function cssVar(cssVarName: string) {
  return `var(--${cssVarName})`;
}

function color(cssVarName: string) {
  return `hsl(${cssVar(cssVarName)})`;
}

function colorWithFg(name: string) {
  return {
    DEFAULT: color(name),
    foreground: color(`${name}-foreground`),
  };
}

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [cssVar("font-geist-sans")],
        mono: [cssVar("font-geist-mono")],
      },
      screens: {
        mobile: cssVar("min-width-mobile"),
        tablet: cssVar("min-width-tablet"),
        laptop: cssVar("min-width-laptop"),
      },
      height: {
        header: cssVar("header-height"),
        "mobile-nav": cssVar("mobile-nav-height"),
      },
      colors: {
        border: color("border"),
        input: color("input"),
        ring: color("ring"),
        background: color("background"),
        foreground: color("foreground"),
        secondary: color("secondary"),
        text: color("text"),
        hint: color("hint"),
        primary: colorWithFg("primary"),
        destructive: colorWithFg("destructive"),
        muted: colorWithFg("muted"),
        accent: colorWithFg("accent"),
        popover: colorWithFg("popover"),
        card: colorWithFg("card"),
      },
      borderRadius: {
        lg: cssVar("radius"),
        md: `calc(${cssVar("radius")} - 2px)`,
        sm: `calc(${cssVar("radius")} - 4px)`,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: cssVar("radix-accordion-content-height") },
        },
        "accordion-up": {
          from: { height: cssVar("radix-accordion-content-height") },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
