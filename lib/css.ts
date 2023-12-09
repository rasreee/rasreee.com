export function cssVar(cssVarName: string) {
  return `var(--${cssVarName})`;
}

export function calc(expression: string) {
  return `calc(${expression})`;
}
