import type { Theme } from "domains/theme";
import breakpoints from "./breakpoints";
import colors from "./colors";
import typography from "./typography";

export const theme: Theme = {
  screens: breakpoints,
  colors,
  ...typography,
};
