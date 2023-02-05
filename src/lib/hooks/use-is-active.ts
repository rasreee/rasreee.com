import { useCurrentRoute } from "./use-current-route";

export function useIsActive(route: string): boolean {
  const currentRoute = useCurrentRoute();
  return currentRoute === route;
}
