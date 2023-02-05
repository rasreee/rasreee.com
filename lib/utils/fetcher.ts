async function fetcher<Data = unknown>(
  path: string,
  init?: RequestInit
): Promise<Data> {
  const response = await fetch(path, init);
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  throw data;
}

export default fetcher;
