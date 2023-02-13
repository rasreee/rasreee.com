export function isFalsy(value: unknown): value is Falsy {
  return !Boolean(value);
}
