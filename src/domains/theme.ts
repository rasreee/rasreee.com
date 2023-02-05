import type { Dict } from "lib/types";

export interface Theme {
  fontFamily: Dict & {
    sans: string;
  };
  screens: Dict & {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  colors: Dict & {
    primary: {
      DEFAULT: string;
      400: string;
      300: string;
    };
    secondary: {
      300: string;
      400: string;
      DEFAULT: string;
    };
    bg: string;
    muted: string;
    text: string;
    hint: string;
    highlight: string;
    accent: string;
  };
}
