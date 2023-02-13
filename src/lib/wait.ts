const DEFAULT_MS = 1500;

export default async function wait(ms: number = DEFAULT_MS): Promise<null> {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(null);
    }, ms)
  );
}
