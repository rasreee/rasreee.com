/**
 * Gets environment variable and prints a warning if it is undefined.
 */
export function getEnvVar(key: string) {
  const value = process.env[key];
  if (!value) {
    console.warn(`${key} environment variable undefined.`);
  }
  return value || "";
}
