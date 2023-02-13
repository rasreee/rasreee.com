export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function isNumeric(value: any): value is number {
  return value != null && value - parseFloat(value) + 1 >= 0;
}

export function isInteger(value: unknown): value is number {
  return isNumeric(value) && Number.isInteger(parseInt(value.toString()));
}

export function toInteger(value: any, fallback = 0): number {
  if (typeof value === "string") {
    return parseInt(value);
  }

  return !isInteger(value) || Number.isNaN(value) ? fallback : value;
}
