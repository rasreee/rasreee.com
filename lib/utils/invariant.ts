import { runIfFn } from "./function";

const MESSAGE_FALLBACK: string = "Invariant failed";

export type MessageArgument = string | (() => string);

/**
 * Throw an error if the condition fails, and strip out error messages for production.
 *
 * NOTE: Not providing an inline default argument for message as the result is smaller
 *
 * @param condition
 * @param message string or function that returns a string in cases where the message takes a fair amount of effort to compute
 */
export default function invariant(
  condition: any,
  message?: MessageArgument
): asserts condition {
  if (condition) {
    return;
  }

  throw new Error(message ? runIfFn(message) : MESSAGE_FALLBACK);
}
