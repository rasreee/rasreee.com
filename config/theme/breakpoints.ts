const breakpoints = {
  xs: "375px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
  xxl: "2100px",
} as const;

export default breakpoints;

export const media = {
  /**
   * Styling props for everything above the `xs` breakpoint. Takes an object.
   */
  xs: `@media screen and (min-width: ${breakpoints.xs})`,
  /**
   * Styling props for everything above the `sm` breakpoint. Takes an object.
   */
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  /**
   * Styling props for everything above the `md` breakpoint. Takes an object.
   */
  md: `@media screen and (min-width: ${breakpoints.md})`,
  /**
   * Styling props for everything above the `lg` breakpoint. Takes an object.
   */
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
  /**
   * Styling props for everything above the `xl` breakpoint. Takes an object.
   */
  xl: `@media screen and (min-width: ${breakpoints.xl})`,
  /**
   * Styling props for everything above the `xl` breakpoint. Takes an object.
   */
  xxl: `@media screen and (min-width: ${breakpoints.xxl})`,
} as const;
