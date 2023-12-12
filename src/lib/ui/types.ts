export type CssValue = string | number;

export interface SizeProps<TSize extends CssValue = CssValue> {
  size?: TSize;
}
