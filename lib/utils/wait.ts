const DEFAULT_MS = 1000;

export async function wait(ms: number = DEFAULT_MS): Promise<null> {
  return await new Promise((res) =>
    setTimeout(() => {
      res(null);
    }, ms)
  );
}
