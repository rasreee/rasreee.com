import type { DynamicOptions, Loader, LoaderMap } from "next/dynamic";
import dynamic from "next/dynamic";

export function dynamicNoSSR<P = {}>(
  loader: Loader<P> | LoaderMap,
  options?: DynamicOptions<P>
): React.ComponentType<P> {
  return dynamic<P>(loader, { ...options, ssr: false });
}
