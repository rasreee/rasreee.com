import { useCallback } from "react";
import { usePathname } from "next/navigation";

interface IsActiveFunction {
  (path: string): boolean;
}

type UseIsActiveResult = IsActiveFunction;

export function useIsActive(): UseIsActiveResult {
  const pathname = usePathname();

  const isActive = useCallback(
    (path: string) => {
      return pathname === path;
    },
    [pathname]
  );

  return isActive;
}
