import { isFalsy } from "./falsy";
import { isFunction } from "./function";
import type { MessageArgument } from "./invariant";

export default function asserted<T>(
  value: Maybe<T>,
  message?: MessageArgument
): T {
  if (isFalsy(value)) {
    throw new Error(isFunction(message) ? message() : message);
  }
  return value;
}
