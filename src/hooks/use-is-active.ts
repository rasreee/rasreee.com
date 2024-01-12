import { usePathname } from "next/navigation";
import { useCallback } from "react";

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
