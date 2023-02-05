import type { MessageArgument } from "./invariant";
import invariant from "./invariant";

export default function asserted<T>(
  value: T | undefined,
  message?: MessageArgument
): T {
  invariant(value, message);
  return value;
}
