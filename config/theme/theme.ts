import breakpoints from "./breakpoints";
import colors from "./colors";
import typography from "./typography";

export const theme = {
  screens: breakpoints,
  colors,
  ...typography,
};

export type Theme = typeof theme;
